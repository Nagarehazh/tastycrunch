import app from './src/app';
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

(async function start(){
    try{
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log('Unable to connect to the database:', e);
    }
}
)();