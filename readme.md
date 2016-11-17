#Fun Node Homework

The purpose of this homework assignment is to evaluate the approach, code, communication and ability of candidates for the Jr Developer position. This is far from anything useful, though hopefully is fun! 

> Read this entire doc before starting.

Depending on previous knowledge, this assignment should take around 2-6 hours. Email me with any questions you have.


##Assignment
Researchers of a DNA-sequencing group need to store newly found sequences. Design a system that will accept a string, evaluate its validity and store valid results using these following requirements:

###Sequences
Valid pairs of DNA are represented by `PA`, `NY`,`OH`,`WV` and encapsulate other valid pairs. A sequence can be any number of pairs.

**Example valid pairs:**

* `PNOWVHYA`
* `NY`
* `WOHV`
* `PPAA`

**Exmaple invalid pairs: **

* `PAPA` - not encapsulating
* `NOH` - no matching pair on `N`
* `OONQHH` - invalid character `Q`

### Technologies

Build this app as a web page front-end talking to a NodeJS server. 

#### Web

The web page will be a single page, with two *centered* inputs:

* A text box to input potential sequences
* A button to submit the text to the server

Responses from the server should be indicated to the user (i.e. icon for success or fail, a toast, message alert, whatever). Clear the text box after a successful response to enter another one. Other page flair is fine, but this is not a design assignment.

**Choose a modern framework!** This single page must be in a modern framework. Examples of these would be ReactJS, AngularJS (1 or 2), VueJS, Ember, Polymer etc. *Do not use jQuery.*

#### Server

Build a web server in NodeJS that can respond to the request from the web client. *Define whatever interface you want, including payload.* This processing will include:

1. Validity of request
2. Validity of sequence string
3. If valid, storing to DB
4. Response to client

Make sure `package.json` file is getting created by starting with `npm init`. You can use a server package (Express, Restify, actionhero, Sails, etc), and whatever other `npm` packages you'd like, or none at all. 

You do **not** need to use NodeJS templating engines (Jade, EJS, Handlebars, etc). Either statically serve the client web page files, or do not serve them at all and I will just open index.html from the file system while running the web server.

Remember this is a *simple* web server. 

#### Included Files

Along with this `readme.md`, use the included `db.js` as your data access layer. No need to connect to a real database, but do note a successful store will take 1000ms (time to upgrade the DB service!). Make sure your "success path" utilizes this file.


#### Unit Test

Write a unit test. Either on the server side or the client side. 


#### Documentation

Document in a file (markdown is cool) how to:

1. Build your project
2. Run your project
3. Run your tests
3. What technologies you used, and any other explainations or choices you feel were important. (No dissertations, but include the important stuff.)


## Submittal

Zip up your project and email me. 

Do **not** zip any library packges (node_modules, bower_components, etc). I would install those when I build your project, and will know how to do so from your documentation. With just source code and maybe some static scripts (like if you include your web framework's CDN file), this zip file should be pretty small. 


