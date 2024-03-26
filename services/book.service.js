const book = require("../models/book.model");


const getBookByIdService = async (id) =>{
  try{
    return  await book.findOne({_id:id}).exec();
  }
  catch(error){
    throw new Error("This book not found")
        
    }
 
}

const getAllBookService = async () =>{
    try{
    return await book.find();
    }
    catch(error){
        throw new Error("can not find any books")
            
        }
}

const createBook = async ({title,auther,genre,price}) =>{
    try{
        return await book.create({title,auther,genre,price})
    }
    catch(error){
    throw new Error("Error Creating Book")
        
    }
}

const updateBookService = async (id,updatedData) => {
    try{
        await book.updateOne({_id:id},updatedData);
        return  await book.findById(id)
    }
    catch(error){
        throw new Error("can not updete the book data")
            
    }
   
}

const deleteBookService = async (id) => {
    try{
        await book.deleteOne({_id:id})
    }
    
    catch(error){
        throw new Error("This book not found")
            
        }
}

module.exports = {
   getAllBookService,
   getBookByIdService,
   createBook,
   updateBookService,
   deleteBookService,
}