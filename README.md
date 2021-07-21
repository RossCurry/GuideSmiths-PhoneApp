# Guidesmith Fullstack Assessment


## about

This is a fullstack <strong>Phone-Catalog App</strong> buiilt using React with Express & Sequelize on the backend. It was made over the course of 4 days as a technical assignment. 

The Frontend was built with mobile first in mind but it responsive across multiple browser widths. The REST API includes  `GET`, `CREATE` & `DELETE` endpoints connecting to a SQL database.

<strong>TRY IT!</strong> I have deployed the app on [HEROKU](https://guidesmith-client.herokuapp.com/)

### screen shots

<img src="https://i.imgur.com/9v26WQt.png" alt="web view" width="400" style="margin-right: 100px"/>
<img src="https://i.imgur.com/XBnDwbx.png" alt="mobile view" width="100" />


## getting started

This is <strong>monorepo</strong> containing both the <strong>client</strong> and <strong>server</strong> apps. The project was created using `node 14.x`.
It uses a <strong>`postgres`</strong> database in the backend.
You will need to have a postgres setup running on your machine. In case you don't have one already you can follow these instuctions:

[install postgres using homebrew](https://formulae.brew.sh/formula/postgresql)

### clone this repo

`https://github.com/RossCurry/GuideSmiths-PhoneApp.git`

#### install dependencies
To install dependencies for both apps, from the root folder run: 

`yarn`

### run the apps

<strong>start server</strong>

From the root folder

`cd ./server && yarn start`

<strong>start client</strong>

`cd ./client && yarn start`

### environment variables

You will find a `.env.example` file with the necessary variables you will need to change in each app.

## Future Improvements

Here are some of the ideas I had to improve the App but with not enough time to complete them.

* Add a favourite list
* Frontend ability to edit individual elements of a phone ( endpoint exists )
* Add a search list
* Make design more roboust 
* Add testing (Jest / Cypress)
