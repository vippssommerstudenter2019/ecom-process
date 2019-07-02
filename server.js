const express = require('express');
const path = require('path');
const SwaggerExtracter = require("swagger-extracter");

const app = express();
const port = process.env.PORT || 5000;
app.listen(port);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json({ limit: "1mb" }));

// Set up the endpoint
app.post('/swaggerdata/get', (request, response) => {
  const url = request.body.url;
  SwaggerExtracter.retrieveDataFromSwaggerFileAtUrl(url, (data, error) => {
    response.json(
      {data: data, error: error}
    );
  })
});
