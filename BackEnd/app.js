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
  },
  {
    id: 2,
    name: "Bloodshot",
    Date: 2020,
    description:
      "After his success in leading a successful and successful success in Mombasa, leading to the success of his illness, mercenaries led by Martin, find out the source of Edessa in Mombasa. Including stated information: Martin X killed him. He sends her answer in return, and she may be in return, and she tries to communicate with others.",
    url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Far%2F2%2F28%2FX-Large_movie.jpg",
  },
  {
    id: 3,
    name: "NARUTO",
    Date: 1999,
    description:
      "It is the title of the completed Japanese manga series written and illustrated by Masashi Kishimoto. The story revolves around the teenage ninja Naruto Uzumaki, who found himself shunned by the residents of his village because of the Kyuubi inside him, so he set his sights on getting the title of Hokage, the title given to the village leader and the strongest ninja in it, to gain the respect and recognition of everyone.",
    url: "https://2u.pw/n0Xr8",
  },
  {
    id: 4,
    name: "War for the Planet of the Apes",
    Date: 2017,
    description:
      "Caesar's journey continues, as he and his fellow monkeys are forced - during this part - to fight a bloody and deadly war with an army of humans led by a ruthless colonel. He and the Colonel engage in an epic battle that will determine their fates and the future of the planet",
    url: "https://upload.wikimedia.org/wikipedia/ar/3/36/%D8%AD%D8%B1%D8%A8_%D9%84%D8%A3%D8%AC%D9%84_%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%82%D8%B1%D8%AF%D8%A9.jpg",
  },
  {
    id: 5,
    name: "Aşk-ı Memnu",
    Date: 2008,
    description:
      "The novel was filmed as a series for the first time in 1970 in black and white in only 6 episodes. It was re-filmed in 2008 with a huge budget, and the series achieved massive and critical success, garnering dozens of awards, most notably the best drama series in the world for 2009, and huge profits through its distribution and dubbing in more than 12 languages. The series is considered one of the most famous Turkish series in the Arab world because of its story and daring scenes that caused lawsuits.",
    url: "https://upload.wikimedia.org/wikipedia/ar/0/0e/A%C5%9Fk-%C4%B1_Memnu_%28TV_series%29.jpg",
  },
  {
    id: 6,
    name: " x lrge ",
    Date: 2011,
    description:
      'The events of the film revolve around "Magdi" (Ahmed Helmy), a fat young man who suffers from loneliness and wants a girl to love him and his friends to help him with this. "Magdy" finds in his life "Reham" (Yasmine Rais), his girlfriend who complains to him about her troubles with her husband "Ashraf" ( Louay Omran) and that she suspects that he is cheating on her, and his girlfriend “Ghada” (Marwa Tharwat), who complains to him about her fiancé “Sami” (Mohamed Shaheen) and “May” (Amy Samir Ghanem), who exposes him to any young man who thinks of establishing a relationship with him, and remembers " Magdy, his colleague "Dina" (Donia Samir Ghanem), who traveled with her parents to the Emirates 15 years ago and searched for her through "Facebook", and when "Dina" decided to return to Cairo and live with her aunt (Enaam Salousa) and complete her masters thesis, he discovered Magdy She is beautiful and graceful, unlike what he wished she was a little ugly to accept when he was fat',
    url: "https://upload.wikimedia.org/wikipedia/ar/2/28/X-Large_movie.jpg",
  },
  {
    id: 7,
    name: " one pice  ",
    Date: 1997,
    description:
      "An anime series produced by Toei Animation, which began airing in Japan in 1999. Since then, the still-running series has aired a total of 995 episodes. In addition, Toei Animation has released thirteen films, an OVA, and five special episodes.",
    url: "https://upload.wikimedia.org/wikipedia/ar/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
  },
  {
    id: 8,
    name: "Dragon Ball",
    Date: 1984,
    description:
      "is a media series created by Akira Toriyama. The original manga was written and illustrated by Toriyama and published in Weekly Shonen Jump from 1984 to 1995, containing 519 chapters and 42 tankubun volumes and published by Shueisha. Dragon Ball is inspired by the traditional Chinese novel Journey to the West. The story tells of Son Gokus adventures from childhood to adulthood as he practices martial arts and explores the world searching for the seven orbs called Dragon Balls that summon a dragon that grants wishes when collected. During his journey, Goku befriends many friends and battles a variety of villains, many of whom seek the Dragon Balls as well.",
    url: "https://cdn.vox-cdn.com/thumbor/nwvCgEEsVPtb4fUpoQ2bys6DMYc=/0x0:1600x959/1200x800/filters:focal(670x165:926x421)/cdn.vox-cdn.com/uploads/chorus_image/image/69260607/FunFilms_DBSBroly_Landing.0.jpg",
  },
  {
    id: 0,
    name: "BLEACH",
    Date: 2001,
    description:
      "BLEACH is a Japanese shounen manga written by Japanese manga artist Tate Kubo. Bleach follows the events of the story of Ichigo Kurosaki after acquiring the events of a Shinigami (死神 Shinigami?, another literally death) from a Shinigami and due to his gaining these new glasses he must fulfill the terms of a Shinigami, watch Defeat evil spirits Watch the Hollows and lead them to life.",
    url: "https://upload.wikimedia.org/wikipedia/ar/7/77/Bleach_%28manga%29.jpg",
  },
];
app.get("/", (req, res) => {
  res.status(200);
  res.json("hello move");
});
app.post("/movies", (req, res) => {
  const { name } = req.body;
  movies.push({ name });
  res.status(200);
  res.json({ name });
});
app.get("/movies", (req, res) => {
  res.status(200);
  res.json(movies);
});
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      res.status(200);
      res.json(movies[i]);
    }
  }
});
app.delete("/movies/:name", (req, res) => {
  const remove = req.params.name;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].name === remove) {
      movies.splice(i, 1);
    }
  }
  res.status(200);
  res.json(movies);
});
const port = 5000;
app.listen(port, () => {
  console.log("server is running");
});
