import app from './app';
const PORT = process.env.PORT || 5000;

(async function start(){
    try{
        console.log('DB Connection has been established successfully.');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log('Unable to connect to the database:', e);
    }
}
)();