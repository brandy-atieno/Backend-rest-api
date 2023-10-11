import mongoose from 'mongoose';
const dbConnection= async ()=>{
try{
    const connect = await mongoose.connect(process.env.CONNECTION_URI)
    console.log( 'DB Connection Successful',
    connect.connection.host,
    connect.connection.name)

}   
catch(err){
    console.log(err);
    process.exit(1);
} 
}
export default dbConnection;