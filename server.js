const app = require('./app.js')

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App server started on ${PORT}`)
});
