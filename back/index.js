//BACK

const express = require('express');
const app = express();
const port = 3005;
const cors = require('cors');
app.use(
  cors({
    origin: "*",
  })
)
const categories = {
  ordinateurs: [
    {
      image: "../assets/ordi1.jpg",
      price: 1200,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem."
    },
    {
      image: "../assets/ordi2.jpg",
      price: 500,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem."
    }
  ],
  composants: [
    {
      image: "../assets/ordi1.jpg",
      price: 900,
      description: "1"
    },
    {
      image: "../assets/ordi2.jpg",
      price: 700,
      description: "2"
    }
  ],
  peripheriques: [
    {
      image: "../assets/ordi1.jpg",
      price: 400,
      description: "3"
    },
    {
      image: "../assets/ordi2.jpg",
      price: 2000,
      description: "4"
    }
  ],
  gaming: [
    {
      image: "../assets/ordi1.jpg",
      price: 10,
      description: "5"
    },
    {
      image: "../assets/ordi2.jpg",
      price: 9000,
      description: "6"
    }
  ]
}

app.get('/', (req, res) => {
  //res.send('Hello World!');
  //res.json({ name: "Kyle", favoriteFood: "Rice" });
  res.send(categories)
})

/*app.get('/arg', (req, res) => {
  // appel bdd
  res.send("Hello world") 
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
