let AppConfiguration =
    {
        allowedCorsOrigin:"*",
        db: {
            uri:"mongodb://localhost/MeetingDB"
        },
        port:1500,
        apiVersion:'/api/v1',
        env:"dev"
    }
module.exports = AppConfiguration