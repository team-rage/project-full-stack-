const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const movies = [
  {
    id: 1,
    name: "JohnWick",
    Date: 2014,
    description:
      "he film revolves around John Wick (Reeves), who is searching for the men who broke into his home, stole his luxury car and killed his puppy, which was the last gift from his recently deceased wife (Moynahan). Stahelski and David Leach directed the film together, but Stahelski was the only one among them credited with directing the mov",
    url: "https://upload.wikimedia.org/wikipedia/ar/7/77/%D9%81%D9%8A%D9%84%D9%85_%D8%AC%D9%88%D9%86_%D9%88%D9%8A%D9%83.jpg",
    video: "https://www.youtube.com/embed/C0BMx-qxsP4",
  },
  {
    id: 2,
    name: "house of cards",
    Date: 2013,
    description:
      "An American political drama series developed and produced by Beau Willimon and based on the British series of the same name, which in turn is based on a novel by Michael Dobbs. The series has been broadcast on Netflix since February 1, 2013, with its first season consisting of 13 episodes. Season two was released on February 4, 2014. Ten days before the second season aired, Netflix announced that the series had been renewed for a third season, which was released on February 27, 2015. House of Cards was renewed for a fourth season that premiered on March 4, 2016, and a fifth season that premiered on May 30, 2017.",
    url: "https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_.jpg",
    video: "https://www.youtube.com/embed/SvSkxBYuoQY",
  },
  {
    id: 3,
    name: "NARUTO",
    Date: 1999,
    description:
      "It is the title of the completed Japanese manga series written and illustrated by Masashi Kishimoto. The story revolves around the teenage ninja Naruto Uzumaki, who found himself shunned by the residents of his village because of the Kyuubi inside him, so he set his sights on getting the title of Hokage, the title given to the village leader and the strongest ninja in it, to gain the respect and recognition of everyone.",
    url: "https://2u.pw/n0Xr8",
    video: "https://www.youtube.com/embed/KePpQ8kAJnI",
  },
  {
    id: 4,
    name: "breaking bad",
    Date: 2008,
    description:
      "It is an American crime drama series written and produced by Vince Gilligan. Filmed and produced in Albuquerque, New Mexico. Stray Disorder tells the story of Walter White (Bryan Cranston), a high school chemistry teacher who is diagnosed with incurable lung cancer at the start of the series.",
    url: "https://upload.wikimedia.org/wikipedia/ar/d/dc/%D9%85%D9%84%D8%B5%D9%82_%D8%B3%D9%84%D8%B3%D9%84%D8%A9_%D8%A7%D8%AE%D8%AA%D9%84%D8%A7%D9%84_%D8%B6%D8%A7%D9%84_%28%D9%85%D8%B3%D9%84%D8%B3%D9%84%29.jpeg",
    video: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
  {
    id: 5,
    name: "akame ga kill ",
    Date: 2014,
    description:
      " Anime Series. Tatsumi sets out on a journey to help his poor village. When he's rescued by a band of assassins, he joins their fight against the corrupt government. Starring:Sora ",
    url: "https://2.bp.blogspot.com/-ad6MqOTWGvQ/W_XrqZKvThI/AAAAAAAAYy4/yLNc58Sw1OoA0H172rd_545SC_oQC3vIACLcBGAs/s1600/%2523akameF1.jpg",
    video: "https://www.youtube.com/embed/sasgDq9jidk",
  },
  {
    id: 6,
    name: " x lrge ",
    Date: 2011,
    description:
      'The events of the film revolve around "Magdi" (Ahmed Helmy), a fat young man who suffers from loneliness and wants a girl to love him and his friends to help him with this. "Magdy" finds in his life "Reham" (Yasmine Rais), his girlfriend who complains to him about her troubles with her husband "Ashraf" ( Louay Omran) and that she suspects that he is cheating on her, and his girlfriend “Ghada” (Marwa Tharwat), who complains to him about her fiancé “Sami” (Mohamed Shaheen) and “May” (Amy Samir Ghanem), who exposes him to any young man who thinks of establishing a relationship with him, and remembers " Magdy, his colleague "Dina" (Donia Samir Ghanem), who traveled with her parents to the Emirates 15 years ago and searched for her through "Facebook", and when "Dina" decided to return to Cairo and live with her aunt (Enaam Salousa) and complete her masters thesis, he discovered Magdy She is beautiful and graceful, unlike what he wished she was a little ugly to accept when he was fat',
    url: "https://upload.wikimedia.org/wikipedia/ar/2/28/X-Large_movie.jpg",
    video: "https://www.youtube.com/embed/DBuIB6JAF5Q",
  },
  {
    id: 7,
    name: " one pice  ",
    Date: 1997,
    description:
      "An anime series produced by Toei Animation, which began airing in Japan in 1999. Since then, the still-running series has aired a total of 995 episodes. In addition, Toei Animation has released thirteen films, an OVA, and five special episodes.",
    url: "https://upload.wikimedia.org/wikipedia/ar/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
    video: "https://www.youtube.com/embed/kKLlm_leopY",
  },
  {
    id: 8,
    name: "Dragon Ball",
    Date: 1984,
    description:
      "is a media series created by Akira Toriyama. The original manga was written and illustrated by Toriyama and published in Weekly Shonen Jump from 1984 to 1995, containing 519 chapters and 42 tankubun volumes and published by Shueisha. Dragon Ball is inspired by the traditional Chinese novel Journey to the West. The story tells of Son Gokus adventures from childhood to adulthood as he practices martial arts and explores the world searching for the seven orbs called Dragon Balls that summon a dragon that grants wishes when collected. During his journey, Goku befriends many friends and battles a variety of villains, many of whom seek the Dragon Balls as well.",
    url: "https://cdn.vox-cdn.com/thumbor/nwvCgEEsVPtb4fUpoQ2bys6DMYc=/0x0:1600x959/1200x800/filters:focal(670x165:926x421)/cdn.vox-cdn.com/uploads/chorus_image/image/69260607/FunFilms_DBSBroly_Landing.0.jpg",
    video: "https://www.youtube.com/embed/FHgm89hKpXU",
  },
  {
    id: 9,
    name: "BLEACH",
    Date: 2001,
    description:
      "BLEACH is a Japanese shounen manga written by Japanese manga artist Tate Kubo. Bleach follows the events of the story of Ichigo Kurosaki after acquiring the events of a Shinigami (死神 Shinigami?, another literally death) from a Shinigami and due to his gaining these new glasses he must fulfill the terms of a Shinigami, watch Defeat evil spirits Watch the Hollows and lead them to life.",
    url: "https://upload.wikimedia.org/wikipedia/ar/7/77/Bleach_%28manga%29.jpg",
    video: "https://www.youtube.com/embed/ZzCh5cI9ylY",
  },
];
const like = [];
const users = [
  { name: "othman", email: "othman@gmail.com", passWord:" 1234" },
  { name: "saleh", email: "saleh@gmail.com", passWord:" 1234" },
  { name: "hiji", email: "hiji@gmail.com", passWord: "1234" },
];
app.get("/", (req, res) => {
  res.status(200);
  res.json("hello move");
});
app.post("/like/:id", (req, res) => {
  const id = req.params.id;
  console.log(id, "id");
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      like.push(movies[i]);
      console.log(like);
    }
  }
  res.status(200);
  res.json(like);
});
app.get("/movies", (req, res) => {
  res.status(200);
  res.json(movies);
});
app.get("/like", (req, res) => {
  res.status(200);
  res.json(like);
});
app.delete("/unlike/:id", (req, res) => {
  const remove = req.params.id;
  console.log(remove, "id");
  for (let i = 0; i < like.length; i++) {
    if (like[i].id == remove) {
      like.splice(i, 1);

      console.log(like, "like");
    }
  }
  res.status(200);
  res.json(like);
});
app.get("/movies/:id", (req, res) => {
  const iid = req.params.id;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == iid) {
      res.status(200);
      res.json(movies[i]);
    }
  }
});

app.post("/users", (req, res) => {
  const email = req.body.email;
  const passWord = req.body.passWord;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].passWord == passWord) {
      res.status(200);
      res.json("login correct");
    }
  }
  res.status(200).json("login falied");
});

const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});
