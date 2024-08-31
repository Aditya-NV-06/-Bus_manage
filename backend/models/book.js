import mongoose from 'mongoose';

//create a schema 
const bookdb=mongoose.Schema(
    { 
        title:{ 
            type:String,
            wanted:true
        },
        driver: { 
            type:String,
            wanted:true
        },
        publish:{ 
            type:String,
            wanted:true
        },
    },
    { 
        timestap:true,
    }
);

//import the model
export const Book=mongoose.model('Book',bookdb);