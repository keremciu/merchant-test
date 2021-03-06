# Dependencies

I use json-server dependency to run a mock-api which is structured by you.

You should install then run it before front-end side.

`npm install -g json-server`
`json-server --watch db.json --port 3001` or `yarn api`

# To start

`yarn` or `npm install`
`yarn start` or `npm start`

# Explanation

Firstly, Merchant looks like a division.
That's why I prefer split everything about the Merchant division from the Application.
Whenever you need a new division, you can use the same structure, it looks easy to understand and scalable for me.

In Merchant division, List, Detail, Add and Edit functions have their own Containers but I decide to put delete function into the List Container. Normally, using `DELETE` method is not a good idea on any platform, we should use `PATCH` method to add `isDeleted` property to our database object but in this case I used mock-api's delete method.
Rest API could handle my case.

There is an another functionality on delete function is normally on single page applications, if you delete something, you have the ID of the deleted object but if you delete on Redux side with the ID, you made a choice to do not check new data on server side. Especially, in large javascript applications you should make a new fetch merchants request after deletion but I decide to write some javascript that's why I deleted on redux ie Client side.

Application needs to know Mock-API URL that's why I add an `environment variable` which is called `REACT_APP_API_BASE`.
Default value for `REACT_APP_API_BASE` is `http://localhost:3001` you can see above that port which one you need to give json-server command.

It was hard to imagine an interface without any design spec that's why my navigation looks different, I don't put a back button on UI you can go home screen by clicking logo or welcome text.

I used `material-ui@next` dependency for UI, as a designer I don't like Material-UI styles but material-ui
repository built so carefully, that's why I chose it. I hope you like the UI of Application.

I'd like to add an `async action middleware` to Redux, there were two options those I used before. Normally I'm familiar and happy with `redux-saga` but it would be unnecessarily big for this task that's why I preferred `redux-thunk`.

I built some components about the flow but mock-api is so fast, there should be a problem to catch loading animation :)

I created a random data using jsonplaceholder.typicode.com and uifaces.com also I track car titles from auto1.com using `big-car-card__title` class selector.

# Deploy

I have two instance to deploy.

One of them is API. `json-server` dependency has a free service on typicode.com. I used it. 

**WARN** If you'd like to change something on the data, you should install the application, API service typicode.com doesn't allow changes on the data. It's all about to show how it works.

Before deploy I made a new build with the url of typicode service with below command:

`REACT_APP_API_BASE=https://my-json-server.typicode.com/keremciu/merchant-test/ yarn build`

Then I used `surge.sh` to deploy my client instance with below command:

`surge`
