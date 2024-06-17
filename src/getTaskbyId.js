const AWS = require("aws-sdk")

const getTaskById = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters
    const data = await dynamo.get({
        TableName: 'TaskTable',
        Key: { id }
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(data.Item)
    }
}

module.exports = { getTaskById }