const AWS = require("aws-sdk")

const getTasks = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient()
    const data = await dynamo.scan({
        TableName: 'TaskTable'
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(data.Items)
    }
}

module.exports = { getTasks }