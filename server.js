const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const { data } = require('./data')

const getBookAuthors = book => {
  const authorIds = book.authorsId ? [book.authorId] : book.authorIds
  return authorIds.map(authorId => data.author[authorId])
}


app.get('/api/books', (req, res) => {
  res.send(data.book.map(book => {
    /* return {
       ...book, 
       authors: getBookAuthors(book)
     }
   }));*/

    return Object.assign({}, book, {
      authors: getBookAuthors(book)
    })
  }))
})

app.listen(8000, () => {
  console.log('API server is at port 8000')
})