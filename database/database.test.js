const mongoose = require('mongoose')

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/metadata', {useNewUrlParser: true, useUnifiedTopology: true})
})

afterAll(async done => {
    await mongoose.connection.close()
    // await app.close()
    done()
})

test('should connect to database successfully', () => {
    expect(mongoose.connection.readyState).toEqual(1);
})

// test('should connect to database successfully test 2 - should fail it tests work', () => {
//     expect(mongoose.connection.readyState).toEqual(2);
// })

