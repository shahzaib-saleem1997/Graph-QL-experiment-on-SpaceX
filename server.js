const express = require('express');
const { graphqlHTTP } = require('express-graphql'); //express graphql is the connector between express and graphql
const cors = require('cors');
const schema = require('./schema.js');
const path = require('path');

const app = express();

// Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true //This means we will use graphql IDE to run our tests etc
}));

app.use(express.static('public'));

app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'public', 'index.html'));
})





const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
