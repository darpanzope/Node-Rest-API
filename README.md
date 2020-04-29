# node_basic

## Custom API example using Express and Sequelize

## Installation 
Step 1 : Clone the repository
```zsh
git clone https://github.com/darpanzope/Node-Rest-API.git && cd "Node-Rest-API"
```
Step 2 : Install required packages
```Javascript
npm install 
```
<br>

### Start Project
```Javascript
npm start
```

### Functions
Cats
* Test Cats (GET /cats)
* Show a particular cat using id (GET /show/:id)
* Create a cat (POST /create)
* Update a cat (PUT /update/:id)
* Delete a cat (DELETE /remove/:id)

Owners
* Test Owners (GET /owners)
* Show a particular owner using id (GET /show/:id)
* Create a owner (POST /create)
* Update a owner (PUT /update/:id)
* Delete a owner (DELETE /remove/:id)

### Requests
Cats
* GET /cats
* GET /cats/:id
* POST /cats/create
* PUT /cats/update/:id
* DELETE /cats/remove/:id

Owners
* GET /owners
* GET /owners/:id
* POST /owners/create
* PUT /owners/update/:id
* DELETE /owners/remove/:id

### Creating Models
```bash
> sequelize model:create --name cat --attributes name:string,age:integer
> sequelize model:create --name owner --attributes name:string
```
### Applying Migrations
```bash
> sequelize db:migrate
```
### Creating Seeds
```bash
> sequelize seed:generate --name demo-owner
> sequelize seed:generate --name demo-cat
```
### Applying Seeds
```bash
> sequelize db:seed
```
### Usage
1. Start Project
2. Open http://localhost:3000 in browser
3. Send appropriate request
4. Perform required functions
5. Enjoy
