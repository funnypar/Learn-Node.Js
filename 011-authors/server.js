const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const app = require('./app');
app.listen(process.env.PORT, () => {});
