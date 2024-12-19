const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:27017/nodeapp', {})
.then(() => console.warn('Connected::Mongo'))
.catch((error) => console.warn(error.message))