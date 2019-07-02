# eCom Process

A site which displays flow and code examples of the Vipps eCom API.

## Dependencies 

This project depends on **vipps-common-frontend** as well as the packages specified in the respective `package.json` files for server and client. In order to include it in the project, do the following steps:

1. Navigate to vipps-common-frontend
2. `rm .npmrc`
3. `npm install`
4. `npm link`
5. Navigate to your project
6. `npm link vipps-common-frontend` 

## Server

To run the server, simply do `npm start`, which will start the server at port 5000. You can specify the port with the 
environment variable `PORT`: `PORT=3000 npm start`. 

### Endpoints

#### `POST:/swaggerdata/get`

Returns data from a swagger file at the given url.

Body:
```json
{
    url: <swagger file url>
}
```

Response: 
```json 
{
    data: <data from the swagger file>
    error: <error, if any>
}
```


## Client

In the client project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
