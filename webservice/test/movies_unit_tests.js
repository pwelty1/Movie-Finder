const expect = require("chai").expect
const handlers = require("../api/movies")._handlers
const request = require("request")

describe("GET /api/movies Endpoint Unit Test", function() {
    describe("Searching for a Single Result", function() {
        const url = "http://localhost:8080/api/movies?search=Jack+Reacher+Never"

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
            });
        });

        it("returns 1 correct result", function(done) {
            request(url, function(error, response, body) {
              json = JSON.parse(body)
              expect(json.length).to.equal(1);
              expect(json[0].movie_id).to.equal(343611)
              expect(json[0].title).to.equal('Jack Reacher: Never Go Back')
              expect(json[0].poster_image_url).to.equal('https://image.tmdb.org/t/p/w500/wxLUQ1pIms3HAlVGYvEG9zg2kDs.jpg')
              expect(json[0].popularity_summary).to.exist //dynamic attribute, it can change day to day
              done();
            });
        });
    });

    describe("Searching for multiple Results > 10 but Limited to 10", function() {
        const url = "http://localhost:8080/api/movies?search=Star+Wars"

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
            });
        });

        it("returns 10 results", function(done) {
            request(url, function(error, response, body) {
              json = JSON.parse(body)
              expect(json.length).to.equal(10);
              done();
            });
        });
    });

    describe("Searching for multiple Results < 10 ", function() {
      const url = "http://localhost:8080/api/movies?search=Jack+Reacher"

      it("returns status 200", function(done) {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
      });

      it("returns < 10 results", function(done) {
          request(url, function(error, response, body) {
            json = JSON.parse(body)
            expect(json.length).to.equal(2);
            done();
          });
      });
    });
    describe("Search yields no Results", function() {
      const url = "http://localhost:8080/api/movies?search=kjasdkjncaasd"

      it("returns status 200", function(done) {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
          });
      });

      it("returns < 10 results", function(done) {
          request(url, function(error, response, body) {
            json = JSON.parse(body)
            expect(json.length).to.equal(0);
            expect(json).to.deep.equal([]);
            done();
          });
      });
    });

    describe("Throw an Error", function() {
      const url = "http://localhost:8080/api/movies?serch=kjasdkjncaasd"

      it("returns status 400", function(done) {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
          });
      });

      it("returns an error message", function(done) {
          request(url, function(error, response, body) {
            json = JSON.parse(body)
            expect(json.error).to.equal("Cannot read property 'replace' of undefined")
            done();
          });
      });
    });

    describe("Throw another Error", function() {
      const url = "http://localhost:8080/api/movies?search="

      it("returns status 400", function(done) {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
          });
      });

      it("returns an error message", function(done) {
          request(url, function(error, response, body) {
            json = JSON.parse(body)
            expect(json.error).to.equal("Request failed with status code 422")
            done();
          });
      });
    });

    describe("Throw another Error", function() {
      const url = "http://localhost:8080/api/movies?"

      it("returns status 400", function(done) {
          request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(400);
            done();
          });
      });

      it("returns an error message", function(done) {
          request(url, function(error, response, body) {
            json = JSON.parse(body)
            expect(json.error).to.equal("Cannot read property 'replace' of undefined")
            done();
          });
      });
    });
    
});