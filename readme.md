# Fun Node Homework

The purpose of this homework assignment is to evaluate the approach, code, communication, _following requirements_ and ability of candidates for the Developer position. This is far from anything useful, though hopefully is fun! 

> Read this entire doc before starting.

Depending on previous knowledge, this assignment should take around 2-6 hours. Think *simple* - no need to make it complicated. Email me with any questions you have.  


## Assignment
Researchers of a DNA-sequencing group need to store newly found sequences. Design a system that will display a web page and make a call to the server to evaluate a sequence's validity and store valid results using the requirements detailed below.


### Sequences
Valid pairs of DNA are represented by `PA`, `NY`,`OH`,`WV` and encapsulate other valid pairs. A sequence can be any number of pairs.

**Example of valid pairs:**

* `PNOWVHYA`
* `NY`
* `WOHV`
* `PPAA`

**Example of invalid pairs:**

* `PAPA` - not encapsulating
* `NOH` - no matching pair on `N`
* `OONQHH` - invalid character `Q`

### Technologies

This project will have a few parts
1. A Vue3 web page
1. A NodeJS API server
3. Unit test
4. Documentation

It is OK if there is a "web project" and a "server project". So long as the documentation indicates how to run everything, we're good.

#### Web

Build a VueJS (version 3) web page. Include at least one [component](https://vuejs.org/guide/essentials/component-basics.html), or one [composable](https://vuejs.org/guide/reusability/composables.html) - these are common VueJS building blocks.

1. The initial web page will be a single page, with two *centered* inputs:

* A text box to input potential sequences
* A button to submit the text to the server

2. Responses from the server should be indicated to the user (i.e. icon for success or fail, a toast, message alert, hidden/shown `<div>`, whatever). Clear the text box after a successful response to enter another one. **Do not validate Sequences on the Web page**. 

3. Display past requests and results from the server. This should dynamically update each time a request is made, no matter the result. Results do not need to persist between reloads.
* centered table showing previously tried sequences and each result results

Other page flair is fine (CSS styles, labels, etc) though not necessary. Show your artistic skills if you want to, but this is not a design assignment.

Use whatever library and tools you prefer to scaffold the project (the less complex the better). A starting place would be the [VueJS Quick Start](https://vuejs.org/guide/quick-start.html) but you could do this as a single .html file as well.

#### Server

Build an (HTTP) API server in NodeJS that can respond to the request from the web client. *Define whatever interface you want, including payload.* This processing will include:

1. Validity of sequence string (see rules above)
1. **Only if valid**, store to DB 
1. Response to client

The one trick with NodeJS is the non-blocking I/O, so the ultimate goal is to respond to the request only once the db.js file has run its function (e.g. `.storePromise(seq)`). I would expect a valid string to take **1.5 seconds** to respond. This will look slow to the user. The response will be instant if there is a validation error, but will "stall" from the client perspective as the database call is running. That’s the key piece, that "storing in the database" needs to finish before sending the response. 

**TL;DR If the server responds to the client before the DB is finished, that is incorrect.**

Make sure `package.json` file is getting created by starting with `npm init`. You can use a server package (Express, Restify, actionhero, Sails, etc), and whatever other `npm` packages you'd like, or none at all.

Either statically serve the client web page files, or do not serve them with this NodeJS server at all and I will just open index.html from the file system while running the web server. You do **not** need to use server-side-rendering (SSR). Remember this is a *simple* server.

#### Included Files

* `readme.md` - This file

* `db.js` - use this file as your data access in the server, as if it was a valid Node package that could send commands to a database. Example would be like:

    ```
    var db = require('./db.js')
    // ... later ...
        db.storePromise(sequenceString) // use await or .then() appropiately
    ```
     No need to connect to a real database, but **do note** NodeJS is asynchronous. _A successful store will take 1500ms_ (time to upgrade the database!). Make sure your "success path" utilizes this file and waits on the database. 

    Use this file un-edited. This will simulate calling into 3rd party library for a data storage function.


#### Use Case

A successful use case of this system will work like this:

1. User inputs a string on the web page and clicks Submit/Enter
2. Message is sent to server, which processes (and stores to database if valid sequence)
3. Response is sent to client. Either indicating success after the DB stores the message, or explains what was wrong.
4. Response is handled by the web page, indicating success or failure.
5. The previous Sequence and Responses are shown on the web page in a simple table.

Note that the user will not know if their string was a success or failure _until the server responds_. An invalid sequence will return quickly, but a valid sequence will only respond *after 1500ms* because of the `db.js` delay.

#### Unit Test

Write a unit test. Either on the server side or the client side. Use any JavaScript testing framework.


#### Documentation

Document in a file (markdown is cool) how to:

1. Build your project
2. Run your project
3. Run your tests
3. What technologies you used, and any other explanations or choices you feel were important. (No dissertations, but include the important stuff.)


## Submittal

Zip up your project and email me.

Do **not** zip any library packages (node_modules, bower_components, etc). I would install those when I build your project, and will know how to do so from your documentation. With just source code and maybe a static script (like if you include your web framework's CDN file), this zip file should be extremely small.

It is my intention to unzip your file, read the documentation, and then build and run your project. I will follow the use case above.