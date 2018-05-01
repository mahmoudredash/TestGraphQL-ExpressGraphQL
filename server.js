const express = require('express');
const expressGraphQL = require('express-graphql');
// const schema = require('./schema.js');
const schema = require('./schema1.js');




const app = express();


//implent expressGraphQL
app.use('/graphql',expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.listen(4000,() => {
    console.log('Server is runing on port 4000..');
});