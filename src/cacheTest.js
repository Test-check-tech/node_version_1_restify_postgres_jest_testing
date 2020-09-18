/**
 * Retrieves a user by email.
 * @async
 * @method
 * @param {String} email - User email
 * @returns {User} User object
 * @throws {NotFoundError} When the user is not found.
 */

const NodeCache = require("node-cache");


const myCache = new NodeCache();

const obj = { my: "Special", variable: 42 };
const obj2 = { my: "other special", variable: 1337 };

const success = myCache.mset([
    {key: "myKey", val: obj, ttl: 1},
    {key: "myKey2", val: obj2},
])
console.log(myCache.getStats().hits)
console.log(ts = myCache.getTtl( "myKey" ))

const value = myCache.mget( [ "myKey", "myKey2" ] );
console.log(value)

console.log(ts = myCache.getTtl( "myKey" ))

const delvalue = myCache.del( "myKey" )
console.log(ts = myCache.getTtl( "myKey" ))
console.log(delvalue)
// myCache.set( "myKey", "myValue" )
// myCache.has( "myKey" ) // returns true because the key is cached right now
// value = myCache.take( "myKey" ) // value === "myValue"; this also deletes the key
// myCache.has( "myKey" )