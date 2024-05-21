# ElectraWorld
Description
ElectraWorld is an e-commerce platform that manages products, categories, and tags using Node.js, Express, and Sequelize for database management. This project sets up a basic API to perform CRUD operations on products, categories, and tags, demonstrating how to create, read, update, and delete resources in a database.

Table of Contents
- Installation
- Usage
- Endpoints
- Seeding the Database
- Contributing
- License
- Installation

Clone the repository:

1. sh
2. Copy code
3. git clone https://github.com/yourusername/ElectraWorld.git
4. cd ElectraWorld

Install the necessary dependencies:

1. sh
2. Copy code
3. npm install
4. Set up your environment variables

Create a .env file in the root of the project with the following content:
1. sh
2. Copy code
  - DB_NAME='your_database_name'
  - DB_USER='your_database_user'
  - DB_PASSWORD='your_database_password'
Ensure you have a PostgreSQL server running and accessible with the provided credentials.

Usage
To start the server, run the following command:
1. sh
2. Copy code
3. npm start
4. The server will run on http://localhost:3001 by default.

Endpoints:

- Categories:

1. Get all categories
  - URL: /api/categories
  - Method: GET
  - Get a single category by ID

2. Get categories by ID
  - URL: /api/categories/:id
  - Method: GET
  - Create a new category

3. Create a Category
URL: /api/categories
Method: POST
Body:
json
Copy code
{
  "category_name": "New Category"
}
Update a category by ID

URL: /api/categories/:id
Method: PUT
Body:
json
Copy code
{
  "category_name": "Updated Category"
}
Delete a category by ID

URL: /api/categories/:id
Method: DELETE
Products
Get all products

URL: /api/products
Method: GET
Get a single product by ID

URL: /api/products/:id
Method: GET
Create a new product

URL: /api/products
Method: POST
Body:
json
Copy code
{
  "product_name": "Basketball",
  "price": 200.00,
  "stock": 3,
  "tagIds": [1, 2, 3, 4]
}
Update a product by ID

URL: /api/products/:id
Method: PUT
Body:
json
Copy code
{
  "product_name": "Updated Product",
  "price": 250.00,
  "stock": 5,
  "tagIds": [1, 3]
}
Delete a product by ID

URL: /api/products/:id
Method: DELETE
Tags
Get all tags

URL: /api/tags
Method: GET
Get a single tag by ID

URL: /api/tags/:id
Method: GET
Create a new tag

URL: /api/tags
Method: POST
Body:
json
Copy code
{
  "tag_name": "New Tag"
}
Update a tag by ID

URL: /api/tags/:id
Method: PUT
Body:
json
Copy code
{
  "tag_name": "Updated Tag"
}
Delete a tag by ID

URL: /api/tags/:id
Method: DELETE
Seeding the Database
To seed the database with initial data, use the following command:

sh
Copy code
npm run seed
This command will run the seed scripts defined in the seeds directory, populating your database with sample data.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

By following this README, you should be able to set up and run the ElectraWorld application, interact with its endpoints, and seed the database with initial data. If you encounter any issues or have any questions, feel free to open an issue or contribute to the project.
