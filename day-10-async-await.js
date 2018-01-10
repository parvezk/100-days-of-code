//async-await

// In an async function, you can await for any Promise or catch its rejection cause.

// Implementation with promises:

function handler (req, res) {
    return request('https://user-handler-service')
      .catch((err) => {
        logger.error('Http error', err)
        error.logged = true
        throw err
      })
      .then((response) => Mongo.findOne({ user: response.body.user }))
      .catch((err) => {
        !error.logged && logger.error('Mongo error', err)
        error.logged = true
        throw err
      })
      .then((document) => executeLogic(req, res, document))
      .catch((err) => {
        !error.logged && console.error(err)
        res.status(500).send()
      })
  }

  // Synchronous code using async/await:

  async function handler (req, res) {
    let response
    try {
      response = await request('https://user-handler-service')  
    } catch (err) {
      logger.error('Http error', err)
      return res.status(500).send()
    }
  
    let document
    try {
      document = await Mongo.findOne({ user: response.body.user })
    } catch (err) {
      logger.error('Mongo error', err)
      return res.status(500).send()
    }
  
    executeLogic(document, req, res)
  }