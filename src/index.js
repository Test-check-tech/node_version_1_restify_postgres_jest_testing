/**
 * Retrieves a user by email.
 * @async
 * @method
 * @param {String} email - User email
 * @returns {User} User object
 * @throws {NotFoundError} When the user is not found.
 */
const restify = require('restify');
const NodeCache = require("node-cache");
const pg = require('pg');

const myCache = new NodeCache();

const pool = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'sample',
    password: 'root',
    port: '5432'
});



const server = restify.createServer({
    name: 'CBServices'
});

// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());

server.listen(3001, function() {
    console.log('%* listening at Port %*', server.name);
});
var msg = "";

console.log("hello");
const Service = {
    // basePath: 'https://jsonplaceholder.typicode.com/posts',

    get() {
        console.log("hello");
        return server.get('/cbservices', function(req, resp) {
            if (myCache.get("myKey") == null) {
                pool.query("SELECT * from accounts", (err, res) => {
                    if (err) throw err;
                    console.log(res.rowCount);

                    myCache.set("myKey", res.rows);
                    // myCache.set("myKey", "mahalingam"); 
                    msg = JSON.stringify([myCache.get("myKey")])
                    pool.end();
                    return resp.end(msg)
                        // console.log("Inside IF", msg)
                });
            } else {
                msg = JSON.stringify([myCache.get("myKey")]);
                console.log(myCache.getTtl("myKey"))
                console.log(myCache.getStats());
                return resp.end(msg)
                    // myCache.on( "expired", function( myKey, value ){
                    //     console.log('Key expired');
                    // });
            }
        })
    }
}

module.exports = Service;