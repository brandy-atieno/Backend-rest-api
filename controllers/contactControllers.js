import asyncHandler from 'express-async-handler';
import contactModel from '../models/contactModel.js';
// get all contacts
export const getContacts= asyncHandler( async(req,res)=>{
    const contacts=  await contactModel.find({user_id:req.user.id});
    res.status(200).json({message:'Here are the contacts',data:contacts})
})
// get by id
export const getById= asyncHandler( async(req,res)=>{
    const contact=  await contactModel.findById(req.params.id);
    if(!contact) {
    res.status(404);
    throw new Error('Contact not found');
    }
    res.status(200).json({data:contact})
})
// create new contact
export const postContact= asyncHandler(async (req,res)=>{
    const {name,email,phone}= req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields required');
    }
const contact = await contactModel.create({
    name,
    email,
    phone,
    user_id:req.user.id //user associated with contact
})
    res.status(200).json({data:contact});})

// update by id 
export const updateContact= asyncHandler(async(req,res)=>{
    const contact= await contactModel.findById(req.params.id);
    if(!contact){
    res.status(400);
    throw new Error('Contact not found');
}
if(contact.user_id.toString() !==req.user.id){
    res.status(403);

    throw new error('Not permitted');
}
    const updatedContact = await contactModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message:updatedContact})
})
export const deleteContact= asyncHandler( async (req,res)=>{
    const contact= await contactModel.findById(req.params.id);
    if(!contact){
    res.status(400);
    throw new Error('Contact not found');}
    if(contact.user_id.toString() !==req.user.id){
    res.status(403);

    throw new error('Not permitted');
}
    await contact.deleteOne({_id:req.params.id})
    res.status(200).json({data:contact})
})

