## Database Resolver for MongoDb in AWS Lambda

### Create a cluster in mongoDb Atlas:-
1. Now, either create a database and add some entries or generate the sample database.
2. Get the connection string to be used to connect to the database.

-----------------------------------------------------------------------------------------

### So there are basically two ways to this approach:-
### 1. Using MongoClient without any VPC:-
1. Create a node js project and install mongoDb in it.
2. use the code inside index.js file to complete the setup.
### Using this approach is ok but it is not a secured way to do the approach.

-----------------------------------------------------------------------------------------

### 2. Using MongoClient with VPC and Security Groups:-
- Remember to configure aws in cli using
```
aws configure
```
where you have to provide with access_key_id and secret_access_key

1. Create as serverless project. Eg:. mongodb_resolver-serverless
```
create serverless --template aws-nodejs
```
2. use the code inside index.js file to complete the setup.
### Using this approach a secured way to do Create the resolver..