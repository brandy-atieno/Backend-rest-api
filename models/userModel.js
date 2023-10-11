import mongoose from 'mongoose';
const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email already taken']
    },
    password:{
        type:String,
        required:[true,'Email is required'],

    },
},
{
    timestamps:true
}
)
export default mongoose.model('User',userSchema)