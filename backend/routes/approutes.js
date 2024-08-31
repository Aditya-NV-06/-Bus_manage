//import express
import express from 'express';
//import schema
import Book from '../models/book.js';


//init route
const route=express.Router();


//save the book (post method)
route.post("/",async (req,res)=>{ 
  try{ 
    if(
        !req.body.title || !req.body.author || !req.body.publish
    ) {
       return res.status(400).send({message:"Send all the values"})
    }

    //init the schema 
    const newBook={ 
      title:req.body.title,
      author:req.body.author,
      publish:req.body.publish
    }

    const book=await Book.create(newBook);

    return res.status(201).send({book,message:"sucess"});
  }
  catch(err){ 
      console.log("Error in connecting the server");
  }
});

//route to get all the book(method get)
route.get("/",async (req,res)=> {
    try { 
        const books=await Book.find({});

        return res.status(200).json({ 
            count:books.length,
            data:books,
        })
    }
    catch(error){ 
        res.status(500).send({message:error.message})
    }
})

//find the book by id param -id (method put)
route.put("/:id",async (res,req)=>{
    try{
    if(
        !req.body.title || !req.body.author || !req.body.publish
    ) {
       return res.status(400).send({message:"Send all the values"})
    }


    const {id}=req.params;

    const result=await Book.findByIdAndDelete(id,res.body);

    if(!result){ 
        return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).send({message:'Book update successfully'});
}
    catch(err){ 
         return res.status(500).send({message:"Server error"});
    }
} )


//delete the books (method delete)
route.delete("/:id",async (res,req) =>{ 
    try {
        const { id } = request.params;
    
        const result = await Book.findByIdAndDelete(id);
    
        if (!result) {
          return response.status(404).json({ message: 'Book not found' });
        }
    
        return response.status(200).send({ message: 'Book deleted successfully' });
      } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
      }
    }
);

export default route;
