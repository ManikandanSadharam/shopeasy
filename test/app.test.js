const request=require('supertest');
const {app,server}=require('../app')

describe('GET /',()=>{
it("Should return 200 status and  the correcct message",async()=>{
   const response= await request(app).get("/");
   expect(response.status).toBe(200)
   expect(response.text).toBe("Welcome to ShopEasy From HTS ")

})

})
afterAll(()=>{
    server.close();
})
