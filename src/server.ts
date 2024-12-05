import app from './app';
import sequelize from './config/database';  

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1); 
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
