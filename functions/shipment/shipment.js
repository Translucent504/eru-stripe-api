const handler = async event => {
  console.log(JSON.parse(event.body))
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ` }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
