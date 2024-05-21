const express = require('express');
const routes = require('./routes');
const seedAll = require('./seeds');
const sequelize = require('./config/connection') 
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(async () => {
  try {
    console.log('Database synced');
    
    await seedAll(); // Call the seeding function
    console.log('Seeding complete');
    
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error('Failed to seed database:', err);
  }
}).catch(err => {
  console.error('Failed to sync database:', err);
});
