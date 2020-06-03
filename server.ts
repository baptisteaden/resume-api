import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import rootValue from './graphql/root';
import schema from './graphql/schema';


const app = express();

app.get('/graphql', (req, res, next) => {
	console.log("ca get ca ?");
	next();
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});