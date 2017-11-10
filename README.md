# Dependencies

I use json-server dependency to run a mock-api which is structured by you.

You should install then run it before front-end side.

`npm install -g json-server`
`json-server --watch db.json --port 3001`

# To start

`yarn` or `npm install`
`yarn start` or `npm start`

# Explanation

Firstly, Merchant looks like a division.
That's why I prefer split everything about the Merchant division from the Application.
Whenever you need a new division, you can use the same structure, it looks easy to understand and scalable for me.

Application needs to know Mock-API URL that's why I add an `environment variable` which is called `API_BASE`.
Default value for `API_BASE` is `http://localhost:3001` you can see above that port which one you need to give json-server command.

I used `material-ui@next` dependency for UI, as a designer I don't like Material-UI styles but material-ui
repository built so carefully, that's why I chose it. I hope you like the UI of Application.

I'd like to add an `async action middleware` to Redux, there were two options those I used before. Normally I'm familiar and happy with `redux-saga` but it would be unnecessarily big for this task that's why I preferred `redux-thunk`.

I built some components about the flow but mock-api is so fast, there should be a problem to catch loading animation :)