// controllers/authorController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");

const CustomNotFoundError = require("../errors/CustomNotFoundError");


const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;
    console.log(authorId)
    const author = await db.getAuthorById(Number(authorId));
  
    if (!author) {
      throw new CustomNotFoundError("Author Not Found Mate");
      
    }
  
    res.send(`Author Name: ${author.name}`);
  });

module.exports = { getAuthorById };
