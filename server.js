import {app} from './app.js';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}..`)
})

import {connectDB} from './config/db.js';

connectDB();