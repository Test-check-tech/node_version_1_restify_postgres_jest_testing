const restify = require('restify');
jest.mock('restify');
const Service = require('../src/index');

describe('should test Service', () => {
    afterEach(() => {
        jest.resetModules();
    });

    jest.mock('restify', () => {
        return {
            baseURL: 'http://localhost:3001/',
            request: jest.fn().mockResolvedValue({
                data: [{
                    user_id: 1,
                    username: "sathish",
                    password: 1234567,
                    email: 'vssathish@gmail.com'
                }]
            }),
        }
    });
    it('fetches Users ', () => {
        const photos = restify;
        expect(restify.request).toHaveBeenCalled(1);

        // expect(restify.request).toHaveBeenCalledWith({ method: 'get' });
        // expect(photos.length).toEqual(3);
        // expect(photos[0].albumId).toEqual(3)
    });

})

// const restify = require('restify');
// const createUser = require('../src/index');

// test("mock implementation", () => {
//     const mock = jest.fn(test = () => "bar");

//     expect(mock(test)).toBe("bar");
//     expect(mock).toHaveBeenCalledWith(test);
// });

// const useSpy = jest.fn();
// const getSpy = jest.fn();
// const listenSpy = jest.fn();

// jest.doMock('restify', () => {
//     return () => ({
//         use: useSpy,
//         listen: listenSpy,
//         get: getSpy,
//     })
// });

// describe('should test server configuration', () => {
//     require('../src/index');
//     test('should test get POSTS', () => {
//         expect(getSpy).toHaveBeenCalledWith(1, '/posts', server.get);
//     });
// })


// const restify = require('restify');
// const Service = require('../src/index');
// const useSpy = jest.fn();
// const getSpy = jest.fn();
// const listenSpy = jest.fn();

// jest.mock('../src/index', () => {
//     return {
//         baseURL: 'http://localhost:3001/',
//         // listen: listenSpy,
//         request: jest.fn().mockResolvedValue({
//             data: {
//                 user_id: 1,
//                 username: "sathish",
//                 password: 1234567,
//                 email: 'vssathish@gmail.com'
//             },
//             // data: {
//             //     user_id: 1,
//             //     username: "sathish",
//             //     password: 1234567,
//             //     email: 'vssathish@gmail.com'
//             // }
//         })

//     }
// })

// test('returns winner', () => {
//     const CBService = Service;
//     console.log(CBService + ">>>>>>>>" + jest.mock())
//     expect(CBService.request).toHaveProperty("data.user_id", 1);
//     // expect(listenSpy).toHaveBeenCalledTimes(1);

// })