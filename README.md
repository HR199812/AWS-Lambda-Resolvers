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
## Will only work in if you've atleast MongoAtlas M1 Cluster Plan.
### 2. Using MongoClient with VPC and Security Groups:-
- Remember to configure aws in cli using
```
aws configure
```
where you have to provide with access_key_id and secret_access_key

1. Make sure to either configure your AWS-CLI or Serverless in your CLI.
2. Create as serverless project. Eg:. mongodb_resolver-serverless
```
create serverless --template aws-nodejs
```
3. Create a VPC in your selected region for which you've configured your AWS/Serverless in CLI.
4. Create a private subnet for the newly created VPC.
5. Create a security group for the same VPC.
6. Make sure to keep the indetation of the serverless.yml file otherwise there will be a hell lot of errors that will pop-up. Also make sure to go to the next step only if indentation is correct otherwise you'll face an errors.
7. Create a cluster in MongoDb_Atlas and add sample data to it/or add database and collection to it.
8. Now in the cluster go to NetworkAccess=>Peering=>add peering connection=>select aws=> enter the information asked such as Account12DigitNumber, VPC CIDR, VPC Region, etc.
9. Go to AWS peering connection for your VPC and Accept the atlas connection request.
10. Go to your VPC, select it and Enable DNS Hostnames and DNS Resolutions.
11. Type in project terminal:-
```
ssl deploy --stage stage_name_you_want_to_give
```
12. Get the URL from the terminal and hit it in the browser. You'll get data response from the Lambda function execution.
13. Happy Coding!!
### Using this approach a secured way to do Create the resolver..