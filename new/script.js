const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const books = getBooks();

// const book = getBook(2)

// const title = book.title
// const author = book.author

// const {title, author, genres} = book;
// const [primaryGenre, secondaryGenre] = genres
// console.log(primaryGenre, secondaryGenre)

books.filter((a, b) => a-b) 


let libro = false && "Don't Mind me"
console.log(libro) 


const library = {
  name: "City Library",
  address: {
    street: "Main St",
    number: 42,
    city: "Tserovani",
  },
  books: [
    {
      id: 1,
      title: "Dune",
      author: { name: "Frank Herbert" },
      reviews: {
        goodreads: { rating: 4.25, count: 1142893 },
        librarything: null,
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      author: { name: "Stanislaw Lem" },
      reviews: {
        goodreads: { rating: 4.16, count: 11663 },
        librarything: { rating: 4.13, count: 2434 },
      },
    },
    {
      id: 3,
      title: "Unknown Book",
      author: null, 
      reviews: {}, 
    },
  ],
  staff: {
    librarian: { name: "Anna", languages: ["English", "Georgian"] },
    janitor: null, 
  },
};
let book = library.books[2]
let boouuk = book.reviews?.goodreads ?? "Empty"
console.log(boouuk)
let author = book?.author ?? "nope"
console.log(author)
let staff = library.staff?.janitor ?? "nothing"
console.log(staff)
const books = getBooks()
books;

const title = books.map((book) => book.title);
console.log(title);

const titleAutho = books.map((book) => ({
  author: book.author,
  title: book.title
}));
console.log(titleAutho);

const pagesAll = books.reduce((full, book)=> book.pages + full, 0)
console.log(pagesAll)

const newbook ={
  id: 6,
  title: "The Martian",
  publicationDate: "2011-02-11",
  author: "Andy Weir",
  genres: ["science fiction", "survival", "space", "humor"],
  hasMovieAdaptation: true,
  pages: 369,
  translations: {
    spanish: "El marciano",
    german: "Der Marsianer",
    japanese: "火星の人"
  },
  reviews: {
    goodreads: {
      rating: 4.40,
      ratingsCount: 800000,
      reviewsCount: 45000
    },
    librarything: {
      rating: 4.35,
      ratingsCount: 30000,
      reviewsCount: 1200
    }
  }
}
function BookAdd(newBook){
  return [...books, newBook]
}
const added = BookAdd(newbook)
console.log(added)

const deleted = added.filter(book => book.id !== 3)
console.log(deleted)

const updated = deleted.map(book => book.id ===1 ? {...book, pages:1}: book)
console.log(updated)
*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data))

//react