# Robust-server-structure: URL shortener service

Instructions
Your task is to build a URL shortener service API using Node.js and Express. It should allow users to submit a URL and receive a "shortened" code, or ID, that can be used to retrieve the original URL later. It should also keep track of how often each shortened URL is retrieved so that you can calculate the most popular URLs.

What is a URL shortener?
The ecommerce company that you work for sells many different products under different categories. Here's an example: www.shoppingsite.com/category/shoe/product/nike132032.

If a customer wants to share a link to the product on Twitter, they may run into restrictions on the text length.

A URL shortener service overcomes this issue by shortening www.shoppingsite.com/category/shoe/product/nike/132032 to www.shoppingsite.com/8d13lk2k.

Existing files
You will only need to edit the src folder and follow code organization principles you learned in this module.

Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.


Tasks
Create routes and handlers to create, read, update, delete, and list short URLs
You will need to create the following API endpoints for the urls resources:

HTTP verb	Path	Description
POST	/urls	Create a new short URL
GET	/urls/:urlId	Retrieve a short URL by ID
PUT	/urls/:urlId	Update a short URL by ID
GET	/urls	Retrieve a list of all short URLs
GET	/urls/:urlId/uses	Retrieve a list of use metrics for a given short URL ID
GET	/urls/:urlId/uses/:useId	Retrieve a use metric by ID for a given short URL ID
Short URLs cannot be deleted once created, because this would break existing links.
