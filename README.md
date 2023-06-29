# Express Project with MySQL - Documentation

<h3 align="center">TEAM TESTING</h3>

<p align="center">
  <a><strong>Who we are?</strong>
  <br />
  ·
  <a href="https://github.com/patrigarcia">Patricia González</a>
  🤜🏽🤛🏽
  <a href="https://github.com/saraoriola">Sara Oriola</a>
  ·
</p>


This repository contains an Express server connected to a MySQL database, which provides different endpoints to interact with the database.

## Prerequisites

Before running the code, make sure you have installed the necessary dependencies. You can do this by running the following command in the terminal:

### `npm i`



## Description

This code is an Express server that connects to a MySQL database and provides different endpoints to interact with the database.

The server is initialized on port 8080.

## Endpoints

The following are the different available endpoints:

### Get Welcome Message

- Method: GET
- Route: `/`
- Description: This endpoint returns a "Hello, world!" message as a response.

### Get All Products

- Method: GET
- Route: `/products`
- Description: This endpoint returns all the products stored in the database.

### Get All Categories

- Method: GET
- Route: `/categories`
- Description: This endpoint returns all the categories stored in the database.

### Add a New Product

- Method: POST
- Route: `/products`
- Description: This endpoint allows adding a new product to the database.

### Add a New Category

- Method: POST
- Route: `/categories`
- Description: This endpoint allows adding a new category to the database.

### Link a Category to a Product

- Method: POST
- Route: `/product-category`
- Description: This endpoint allows linking an existing category to an existing product in the database.

### Update a Product

- Method: PUT
- Route: `/products/:id`
- Description: This endpoint allows updating an existing product in the database.

### Update a Category

- Method: PUT
- Route: `/categories/:id`
- Description: This endpoint allows updating an existing category in the database.

### Get All Products with Categories

- Method: GET
- Route: `/products-with-categories`
- Description: This endpoint returns all the products with their respective categories.

### Get a Product by ID

- Method: GET
- Route: `/products/:id`
- Description: This endpoint returns a specific product based on its ID.

### Get a Category by ID

- Method: GET
- Route: `/categories/:id`
- Description: This endpoint returns a specific category based on its ID.

### Search Products by Name

- Method: GET
- Route: `/products/search`
- Description: This endpoint allows searching for products by their name.

### Delete a Product by ID

- Method: DELETE
- Route: `/products/:id`
- Description: This endpoint allows deleting a product based on its ID.

### Delete a Category by ID

- Method: DELETE
- Route: `/categories/:id`
- Description: This endpoint allows deleting a category based on its ID.

## Start the Server

To start the server, run the following command in the terminal:
### `node index,js`

The server will start on port 8080 and will be ready to receive requests.

## TYPOGRAPHICAL STYLES

- Controllers -> PascalCase
- Routes -> camelCase

## ALIASES

The following aliases (c, p, pc) are used to abbreviate table names in queries and make them easier to reference. 

The field names (name_cat, idproduct, idcategory) refer to specific fields in the tables that are being selected or used for joining tables.

Table names: ("product", "productCat", "category")
Field names: ("idproduct", "product_id", "name_cat")
