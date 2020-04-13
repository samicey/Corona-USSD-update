const chaiHttp = require("chai-http");
const chai = require("chai");
const app = require("../app");
const expect = chai.expect;
chai.should();

chai.use(chaiHttp);
// sign in Personnel logic test
describe("USSD code:", () => {
  describe("When a user send the code on their phone", () => {

    const dummyUSSD = {
      sessionId: "oio",
      serviceCode: "dfghjf",
      phoneNumber: '+234706270726',
      text: '',
    };

    it("Status Code should be 200", (done) => {
      
      chai.request(app)
        .post("/")
        .send(dummyUSSD)
        .end((err, res) => {

          expect(res.status).to.equal(200)
          done();
        });
    });

    it("Response should be a string", (done) => {
      
      chai.request(app)
        .post("/")
        .send(dummyUSSD)
        .end((err, res) => {

          expect(res.text).be.a("string");
          done();
        });
    });

    it("Display a welcome message to user", (done) => {
      
      chai.request(app)
        .post("/")
        .send(dummyUSSD)
        .end((err, res) => {

          expect(res.text).to.equal("CON Welcome to Corona Update in Nigeria \n 1. Nigeria Update \n 2. World Update");
          done();
        });
    });
  });
});
