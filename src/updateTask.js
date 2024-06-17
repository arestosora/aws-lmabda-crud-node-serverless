const AWS = require("aws-sdk")

const updateTask = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters
    const { title, description } = JSON.parse(event.body)

    const data = await dynamo.update({
        TableName: 'TaskTable',
        Key: { id },
        UpdateExpression: 'set title = :t, description = :d',
        ExpressionAttributeValues: {
            ':t': title,
            ':d': description
        },
        ReturnValues: 'ALL_NEW'
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(data.Attributes)
    }
}

module.exports = { updateTask }