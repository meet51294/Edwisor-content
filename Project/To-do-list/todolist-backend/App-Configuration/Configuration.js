let appConfiguration = {
 port : 1337,
 env:"dev",
 db:{uri:"mongodb://localhost/ListDB"},
 apiVersion:"/api/v1.0",
 allowedCorsOrigin:"*",
};
module.exports = appConfiguration;