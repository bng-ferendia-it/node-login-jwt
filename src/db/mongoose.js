const mongoose = require('mongoose');
const ENV = require('../config')
mongoose.connect(ENV.dbUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
