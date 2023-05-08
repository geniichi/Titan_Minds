const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json(
        {
            "Action": [
              {
                "id": 1,
                "popularity": 3,
                "price": 499.99,
                "title": "The Hunger Games",
                "author": "Suzanne Collins",
                "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
                "description": "A dystopian novel about a young girl named Katniss Everdeen who must fight for survival in a televised tournament against other children from her district."
              },
              {
                "id": 2,
                "popularity": 13,
                "price": 350,
                "title": "The Three Musketeers",
                "author": "Alexandre Dumas",
                "imageURL": "https://www.jocolibrary.org/sites/default/files/2021-02/The%20Three%20Musketeers%20Alexandre%20Dumas.jpg",
                "description": "A classic novel about three musketeers and their young friend, d'Artagnan, as they embark on dangerous adventures to protect the king and queen of France."
              },
              {
                "id": 3,
                "popularity": 11,
                "price": 420.99,
                "title": "Treasure Island",
                "author": "Robert Louis Stevenson",
                "imageURL": "https://kbimages1-a.akamaihd.net/6a0075e6-b0a1-4059-92c3-44430fd3cb6d/1200/1200/False/treasure-island-169.jpg",
                "description": "A classic adventure novel about young Jim Hawkins and his search for buried treasure on a remote island, with treacherous pirates hot on his trail."
              },
              {
                "id": 4,
                "popularity": 12,
                "price": 799.99,
                "title": "The Adventures of Tom Sawyer",
                "author": "Mark Twain",
                "imageURL": "https://kbimages1-a.akamaihd.net/1dce3b26-c3b4-440c-aede-458e01da4142/1200/1200/False/the-adventures-of-tom-sawyer-149.jpg",
                "description": "A classic novel about the mischievous adventures of a young boy named Tom Sawyer in a small town on the Mississippi River."
              },
              {
                "id": 5,
                "popularity": 15,
                "price": 659.99,
                "title": "The Bourne Identity",
                "author": "Robert Ludlum",
                "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51FzWgvTQ+L.jpg",
                "description": "A thriller about a man who wakes up with amnesia and discovers he is being hunted by assassins, leading him on a dangerous mission to uncover his true identity."
              }
            ],
            "Thriller": [
              {
                "id": 6,
                "popularity": 35,
                "price": 650,
                "title": "The Girl on the Train",
                "author": "Paula Hawkins",
                "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/8183Y1myPvL.jpg",
                "description": "A psychological thriller about a woman named Rachel who becomes entangled in a missing persons case after witnessing something from her daily train ride."
              },
              {
                "id": 7,
                "popularity": 36,
                "price": 499.99,
                "title": "Gone Girl",
                "author": "Gillian Flynn",
                "imageURL": "https://kbimages1-a.akamaihd.net/61542e2c-b404-4b1f-9e0d-ff3624ad5463/1200/1200/False/gone-girl-1.jpg",
                "description": "A mystery thriller about a woman named Amy Dunne who disappears on her fifth wedding anniversary, and her husband Nick becomes the primary suspect."
              },
              {
                "id": 8,
                "popularity": 37,
                "price": 399.98,
                "title": "The Silence of the Lambs",
                "author": "Thomas Harris",
                "imageURL": "https://kbimages1-a.akamaihd.net/2e8065dd-ed45-44fc-9212-8ba85335c323/1200/1200/False/the-silence-of-the-lambs.jpg",
                "description": "A psychological thriller about a young FBI agent named Clarice Starling who must seek the help of the infamous cannibal, Dr. Hannibal Lecter, to catch a serial killer."
              },
              {
                "id": 9,
                "popularity": 38,
                "price": 559.99,
                "title": "The Firm",
                "author": "John Grisham",
                "imageURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598787562l/452235.jpg",
                "description": "A legal thriller about a young lawyer named Mitch McDeere who discovers his law firm is not what it seems, and he must make a dangerous decision to protect himself and his family."
              },
              {
                "id": 10,
                "popularity": 18,
                "price": 270,
                "title": "The Shining",
                "author": "Stephen King",
                "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg",
                "description": "A horror thriller about a family who becomes caretakers of an isolated hotel in the Colorado Rockies, only to be haunted by the ghosts of the past."
              },
              {
                "id": 11,
                "popularity": 16,
                "price": 799.99,
                "title": "The Da Vinci Code",
                "author": "Dan Brown",
                "imageURL": "https://kbimages1-a.akamaihd.net/fdf06d9a-d900-48dd-94fb-1c14eb5b94ba/1200/1200/False/the-da-vinci-code.jpg",
                "description": "A thriller about symbologist Robert Langdon as he investigates a murder and a mysterious secret society, while unraveling clues hidden in the works of Leonardo da Vinci."
              },
              {
                "id": 12,
                "popularity": 17,
                "price": 659.99,
                "title": "Inferno",
                "author": "Dan Brown",
                "imageURL": "https://cdn2.penguin.com.au/covers/original/9780552169585.jpg",
                "description": "A thriller about Robert Langdon as he must decipher clues related to Dante's 'Inferno' in order to prevent a deadly virus from being released."
              }],
              "Childrens_Books": [
                {
                  "id": 13,
                  "popularity": 19,
                  "price": 250,
                  "title": "Where the Wild Things Are",
                  "author": "Maurice Sendak",
                  "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1wx+e0rJ2L.jpg",
                  "description": "A classic picture book about a young boy named Max who travels to a land of wild creatures and becomes their king."
                },
                {
                  "id": 14,
                  "popularity": 20,
                  "price": 300.50,
                  "title": "The Cat in the Hat",
                  "author": "Dr. Seuss",
                  "imageURL": "https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png",
                  "description": "A classic picture book about a mischievous cat who visits two children on a rainy day and causes chaos in their home."
                },
                {
                  "id": 15,
                  "popularity": 21,
                  "price": 350.25,
                  "title": "The Giving Tree",
                  "author": "Shel Silverstein",
                  "imageURL": "https://www.publishersweekly.com/cover/9780060256654",
                  "description": "A heartwarming story about the relationship between a boy and a tree, as the tree gives selflessly to the boy throughout his life."
                },
                {
                  "id": 16,
                  "popularity": 22,
                  "price": 400,
                  "title": "Charlotte's Web",
                  "author": "E.B. White",
                  "imageURL": "https://kbimages1-a.akamaihd.net/f6fb1c50-da15-448d-9718-be9a8717426f/1200/1200/False/charlotte-s-web-2.jpg",
                  "description": "A classic novel about a pig named Wilbur and his friendship with a spider named Charlotte, as she helps him avoid being slaughtered."
                },
                {
                  "id": 17,
                  "popularity": 23,
                  "price": 599.99,
                  "title": "The Lion, the Witch and the Wardrobe",
                  "author": "C.S. Lewis",
                  "imageURL": "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780006716778&w=&h=570",
                  "description": "The first book in \"The Chronicles of Narnia\" series, about four siblings who travel to a magical world through a wardrobe and help defeat the evil White Witch."
                }
              ],
              "Biography": [
                {
                  "id": 18,
                  "popularity": 24,
                  "price": 600.75,
                  "title": "Steve Jobs",
                  "author": "Walter Isaacson",
                  "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511288482i/11084145.jpg",
                  "description": "A biography of the co-founder of Apple, Steve Jobs, detailing his life, career, and impact on the tech industry."
                },
                {
                  "id": 19,
                  "popularity": 25,
                  "price": 1200,
                  "title": "Becoming",
                  "author": "Michelle Obama",
                  "imageURL": "https://kbimages1-a.akamaihd.net/13cea8f1-cf4b-4d70-a8e6-ad9bf4a3493d/1200/1200/False/becoming-53.jpg",
                  "description": "A memoir of former First Lady Michelle Obama, recounting her childhood, education, marriage to Barack Obama, and experiences as First Lady."
                },
                {
                  "id": 20,
                  "popularity": 26,
                  "price": 499.99,
                  "title": "Unbroken",
                  "author": "Laura Hillenbrand",
                  "imageURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327861115l/8664353.jpg",
                  "description": "A biography of Louis Zamperini, an Olympic runner and World War II hero, who survived a plane crash and brutal conditions in a Japanese prisoner-of-war camp."
                },
                {
                  "id": 21,
                  "popularity": 27,
                  "price": 499.99,
                  "title": "Into Thin Air",
                  "author": "Jon Krakauer",
                  "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81m25lFGUuL.jpg",
                  "description": "A memoir of the author's experience on a disastrous expedition to climb Mount Everest, resulting in the deaths of several climbers."
               },

                {
                  "id": 22,
                  "popularity": 28,
                  "price": 499.99,
                  "title": "The Immortal Life of Henrietta Lacks",
                  "author": "Rebecca Skloot",
                  "imageURL": "https://www.cleveland.com/resizer/7OD31BVpt50MrRzYaFn9vB-vHCw=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/books_impact/photo/lacksjpg-926866c9254cd711.jpg",
                  "description": "A biography of Henrietta Lacks, a woman whose cancer cells were taken without her knowledge and used for medical research, contributing to numerous scientific discoveries."
                },
                {
                  "id": 23,
                  "popularity": 29,
                  "price": 499.99,
                  "title": "I Know Why the Caged Bird Sings",
                  "author": "Maya Angelou",
                  "imageURL": "https://kbimages1-a.akamaihd.net/05c1cfce-674a-4230-84f8-d46f0fd452ec/353/569/90/False/i-know-why-the-caged-bird-sings-1.jpg",
                  "description": "The first volume of the late poet and writer Maya Angelou's autobiography, detailing her childhood and early life experiences in the segregated South."
                },
                {
                  "id": 24,
                  "popularity": 30,
                  "price": 499.99,
                  "title": "The Autobiography of Malcolm X",
                  "author": "Malcolm X and Alex Haley",
                  "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81kQBRCqt-L._AC_UF1000,1000_QL80_.jpg",
                  "description": "The autobiography of civil rights leader Malcolm X, detailing his transformation from a criminal to a leading figure in the Nation of Islam, and later, his split with the organization and shift towards a more inclusive approach to civil rights."
                }],
                "Fantasy": [
                  {
                    "id": 25,
                    "popularity": 2,
                    "price": 499.99,
                    "title": "The Lord of the Rings",
                    "author": "J.R.R. Tolkien",
                    "imageURL": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
                    "description": "A classic fantasy novel about a hobbit named Frodo Baggins, who must journey to destroy the One Ring and defeat the dark lord Sauron."
                  },
                  {
                    "id": 26,
                    "popularity": 31,
                    "price": 499.99,
                    "title": "A Song of Ice and Fire",
                    "author": "George R.R. Martin",
                    "imageURL": "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
                    "description": "A fantasy series set in the fictional world of Westeros, as various noble houses vie for power and control of the Iron Throne."
                  },
                  {
                    "id": 27,
                    "popularity": 1,
                    "price": 499.99,
                    "title": "Harry Potter and the Philosopher's Stone",
                    "author": "J.K. Rowling",
                    "imageURL": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
                    "description": "The first book in the Harry Potter series, about a young boy who discovers he is a wizard and attends a school for magic."
                  },
                  {
                    "id": 28,
                    "popularity": 4,
                    "price": 499.99,
                    "title": "The Chronicles of Narnia",
                    "author": "C.S. Lewis",
                    "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71szrqzf22L.jpg",
                    "description": "A series of seven books set in the magical world of Narnia, as various characters embark on adventures and battle against evil forces."
                  },
                  {
                    "id": 29,
                    "popularity": 14,
                    "price": 499.99,
                    "title": "The Name of the Wind",
                    "author": "Patrick Rothfuss",
                    "imageURL": "https://kbimages1-a.akamaihd.net/87c3cac8-bdb8-4f59-8732-a67ad81fa83f/1200/1200/False/the-name-of-the-wind-4.jpg",
                    "description": "A fantasy novel about a legendary magician named Kvothe, as he recounts his life story to a scribe in a tavern."
                  },
                  {
                    "id": 30,
                    "popularity": 33,
                    "price": 499.99,
                    "title": "The Hobbit",
                    "author": "J.R.R. Tolkien",
                    "imageURL": "https://kbimages1-a.akamaihd.net/a821b502-0d07-4921-ac14-e431625d04e7/1200/1200/False/the-hobbit-illustrated-by-alan-lee.jpg",
                    "description": "A fantasy novel about a hobbit named Bilbo Baggins, as he joins a group of dwarves on a quest to reclaim their treasure from a dragon."
                  },
                  {
                    "id": 31,
                    "popularity": 32,
                    "price": 499.99,
                    "title": "The Lies of Locke Lamora",
                    "author": "Scott Lynch",
                    "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51V1nLdVBiS.jpg",
                    "description": "A fantasy novel about a thief named Locke Lamora and his band of thieves, as they carry out elaborate heists."
                  }
                ],
                "Novels": [
                  {
                    "id": 32,
                    "popularity": 5,
                    "price": 499.99,
                    "title": "To Kill a Mockingbird",
                    "author": "Harper Lee",
                    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
                    "description": "A classic novel set in the South during the 1930s, as a young girl named Scout Finch learns about racism and injustice through her father's defense of a black man."
                  },
                  {
                    "id": 33,
                    "popularity": 6,
                    "price": 499.99,
                    "title": "1984",
                    "author": "George Orwell",
                    "imageURL": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
                    "description": "A dystopian novel set in a totalitarian society, as the protagonist Winston Smith rebels against the government's control and surveillance."
                  },
                  {
                    "id": 34,
                    "popularity": 9,
                    "price": 499.99,
                    "title": "The Catcher in the Rye",
                    "author": "J.D. Salinger",
                    "imageURL": "https://kbimages1-a.akamaihd.net/79b9e230-ebde-44cc-8fff-0ca54e9641b4/1200/1200/False/the-catcher-in-the-rye-6.jpg",
                    "description": "A novel about a teenage boy named Holden Caulfield, as he struggles with identity, loss, and disillusionment."
                  },
                  {
                    "id": 35,
                    "popularity": 7,
                    "price": 499.99,
                    "title": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald",
                    "imageURL": "https://kbimages1-a.akamaihd.net/c5742da9-e63f-4ed5-acb6-074fab5e3f41/1200/1200/False/the-great-gatsby-11.jpg",
                    "description": "A novel set in the Roaring Twenties, as a mysterious millionaire named Jay Gatsby tries to win back his lost love, Daisy Buchanan."
                  },
                  {
                    "id": 36,
                    "popularity": 8,
                    "price": 499.99,
                    "title": "Pride and Prejudice",
                    "author": "Jane Austen",
                    "imageURL": "https://kbimages1-a.akamaihd.net/94a264bb-8f67-445f-a993-fd5fc96d89ed/1200/1200/False/jane-austen-s-pride-prejudice.jpg",
                    "description": "A classic romance novel set in 19th century England, as Elizabeth Bennet and Mr. Darcy navigate their feelings for each other amidst social and familial pressures.",
                  },
                  {
                    "id": 37,
                    "popularity": 10,
                    "price": 499.99,
                    "title": "One Hundred Years of Solitude",
                    "author": "Gabriel Garcia Marquez",
                    "imageURL": "https://dwcp78yw3i6ob.cloudfront.net/wp-content/uploads/2016/12/12162813/100_Years_First_Ed_Hi_Res-768x1153.jpg",
                    "description": "A magical realist novel set in the fictional town of Macondo, as several generations of the Buendia family experience love, loss, and the cyclical nature of time.",
                  },
                  {
                    "id": 38,
                    "popularity": 34,
                    "price": 499.99,
                    "title": "Beloved",
                    "author": "Toni Morrison",
                    "imageURL": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632283781i/6149.jpg",
                    "description": "A novel about an escaped slave named Sethe and the haunting of her home by the ghost of her deceased daughter.",
                  }],
                  "Documentaries":[
                    {
                      "id": 39,
                      "popularity": 40,
                      "price": 499.99,
                      "title": "Blackfish",
                      "author": "Gabriela Cowperthwaite",
                      "imageURL": "https://m.media-amazon.com/images/M/MV5BNTkyNTkwMzkxMl5BMl5BanBnXkFtZTcwMzAwOTE2OQ@@._V1_.jpg",
                      "description": "A documentary about the controversy surrounding captive killer whales in marine parks, following the story of a whale named Tilikum who killed several people.",
                    },
                    {
                      "id": 40,
                      "popularity": 39,
                      "price": 499.99,
                      "title": "The Social Dilemma",
                      "author": "Jeff Orlowski",
                      "imageURL": "https://images.squarespace-cdn.com/content/v1/5483bceae4b091ba6b198ffb/1601913262092-2AVXZ0H0XQKRVEVZ2FPU/The+Social+Dilemma+Movie+Poster.jpg?format=1000w",
                      "description": "A documentary about the dangers of social media and the algorithms that drive it, featuring interviews with tech industry insiders and experts.",
                    },
                    {
                      "id": 41,
                      "popularity": 42,
                      "price": 499.99,
                      "title": "The Ivory Game",
                      "author": "Kief Davidson and Richard Ladkani",
                      "imageURL": "https://m.media-amazon.com/images/M/MV5BNTY4OTQ3NDIwMF5BMl5BanBnXkFtZTgwOTk4MzkzMDI@._V1_FMjpg_UX1000_.jpg",
                      "description": "A documentary about the illegal ivory trade and its impact on elephant populations, as investigators try to expose and stop the smuggling networks.",
                    },
                    {
                      "id": 42,
                      "popularity": 41,
                      "price": 499.99,
                      "title": "Won't You Be My Neighbor?",
                      "author": "Morgan Neville",
                      "imageURL": "https://m.media-amazon.com/images/M/MV5BZmZiOWVmN2EtM2U3YS00YzgxLWI3ZDktY2VmOWNiODUzN2I3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
                      "description": "A documentary about the life and legacy of Fred Rogers, the host of the children's television program \"Mister Rogers' Neighborhood.\"",
                    },
                    {
                      "id": 43,
                      "popularity": 43,
                      "price": 499.99,
                      "title": "13th",
                      "author": "Ava DuVernay",
                      "imageURL": "https://m.media-amazon.com/images/M/MV5BMjAwMjU5NTAzOF5BMl5BanBnXkFtZTgwMjQwODQxMDI@._V1_.jpg",
                      "description": "A documentary about the history of racial inequality and the prison system in the United States, examining the effects of the 13th amendment and the war on drugs.",
                    },
                    {
                      "id": 44,
                      "popularity": 44,
                      "price": 499.99,
                      "title": "Jiro Dreams of Sushi",
                      "author": "David Gelb",
                      "imageURL": "https://www.magpictures.com/jirodreamsofsushi/images/photos/photo_09.jpg",
                      "description": "A documentary about Jiro Ono, an 85-year-old sushi master in Tokyo, as he continues to perfect his craft and mentor his sons.",
                    },
                    {
                      "id": 45,
                      "popularity": 45,
                      "price": 499.99,
                      "title": "The Act of Killing",
                      "author": "Joshua Oppenheimer",
                      "imageURL": "https://m.media-amazon.com/images/M/MV5BNmZjMDgyMDgtYWI4OS00YjZkLWEyODktNzE0MmViOTFjMDA4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
                      "description": "A documentary about the 1965 Indonesian genocide, as former death squad leaders reenact their crimes and confront their past actions.",
                    }
                  ]
              })
})

app.listen(5000, ( () => {console.log("Server started on port 5000")}))
