var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/pics', function(req, res) {
  res.send({
    pictures: [
      {
        thumbnail: 'george-lucas-library-thumbnail.jpg',
        fullSize: 'george-lucas-library.jpg',
        description: 'This is the library of George Lucas. Sure, he ruined my childhood with episodes I-III but at least he has a cool place to read.'
      },
      {
        thumbnail: 'library-1-thumbnail.jpg',
        fullSize: 'library-1.jpg',
        description: 'Library #1'
      },
      {
        thumbnail: 'library-2-thumbnail.jpg',
        fullSize: 'library-2.jpg',
        description: 'Library #2'
      },
      {
        thumbnail: 'library-3-thumbnail.png',
        fullSize: 'library-3.jpg',
        description: 'Library #3'
      },
      {
        thumbnail: 'library-4-thumbnail.jpg',
        fullSize: 'library-4.jpg',
        description: 'Library #4'
      }
    ]
  })
});

app.get('/api/animepics', function(req, res) {
  res.send({
    pictures: [
      {
        thumbnail: 'anime-images/akibastrip_thumbnail.jpeg',
        fullSize: 'anime-images/akibastrip.jpg',
        title: "Akiba's Trip",
        description: 'Akihabara is under attack by body-snatching aliens that can only be defeated if their host bodies are exposed to direct sunlight.',
        thoughts: 'Meh. Forgettable. I kept watching for the sake of having something to watch, but more or less dropped it 3/4s of the way through.'
      },
      {
        thumbnail: 'anime-images/gabriel_thumbnail.jpeg',
        fullSize: 'anime-images/gabriel.jpg',
        title: 'Gabriel Dropout',
        description: 'A top ranking angel comes to Earth to learn about humans, and gets transformed into an anti-social, "nothing but gaming" slob. Along with her friends (a type-A demon who is more angelic than anything else, a demon whose idea of pure evil is childish mischief at best, and a sadistic angel who laughs at the misfortune of others), this is a different take on the slice of life genre.',
        thoughts: 'Fairly enjoyable. Nothing overly original, other than the other-worldly origins of our characters. The cast is likeable, their adventures catch your attention, and overall it was fairly amusing.'
      },
      {
        thumbnail: 'anime-images/kobayashi_thumbnail.jpeg',
        fullSize: 'anime-images/kobayashi.jpg',
        title: "Kobayashi-san Chi no Meidoragon (aka. Ms. Kobayashi's Dragon Maide)",
        description: 'Kobayashi-san is a 20-something developor leading a bland life in the heart of Tokyo. Her ordinary routine is disturbed, however, when one night, while stumbling home drunk, she saves the life of a dragon. The following morning, the dragon appears at her apartment door, and transforms into a maid on the spot. As the story continues, more dragons posing as humans enter the picture.',
        thoughts: 'All the yessses. This anime caught me off-guard in a rather forgettable season. The characters are fun and interesting, and the story has a lot of heart. The absurd premise actually works, and watching how each of the characters changed and grew over the course of the episodes was really great.'
      },
      {
        thumbnail: 'anime-images/konosuba_thumbnail.jpeg',
        fullSize: 'anime-images/konosuba.jpg',
        title: "Konosuba (Season 2)",
        description: 'Konosuba is back for season 2, as our "hero" Kazuma has to deal with his party of overly incompetent, yet somehow overly competent, adventures: Aqua, the ditzy fallen goddess who has become relatively useless; Megumin, the black mage who only knows one spell ("Explosion"); and Darkness, the paladin knight who fails at hitting her target everytime and has masochistic tendencies. Season 2 has our heroes dealing with the ramification of pure destruction they left behind at the end of Season 1, as well as venturing to a town where the people are not quite right.',
        thoughts: 'Konosuba is all the things. It takes the whole "teenaged boy transported to a magical RPG-like world" cliche and satirizes every facet imaginable. My only complaint with Season 2 is the same complaint I had with Season 1: MAKE THE SEASON LONGER!! Most season-long anime get 12 or 13 episodes, but Konosuba only got 10 each season, despite their massive sales. Considering what a cash cow it is, Season 3 is bound to be around the next corner'
      },
      {
        thumbnail: 'anime-images/masamune_thumbnail.jpeg',
        fullSize: 'anime-images/masamune.jpg',
        title: 'Masamune-kun no Revenge',
        description: 'As a child, Masamune was close friends with Aki. However, one day, Aki began ignoring Masamune due to his weight and became cold. Flashforward to the present. Masamune has a chiseled body and is out to humiliate the girl who once humiliated him. Aki has become the most sought-after girl in school, but her ice princess personality and penchant for publicly humiliating any/all male callers will make it difficult for Masamune to exact his "revenge."',
        thoughts: 'Meh. The primary protaganists are incredibly unlikeable and shallow. The side characters are somewhat decent, but they lack any permanent presence in the series. I ended up just reading spoilers'
      },
      {
        thumbnail: 'anime-images/monster_girl_thumbnail.jpeg',
        fullSize: 'anime-images/monster_girl.jpg',
        title: 'Demi-chan wa Kataritai (aka Interviews With Monster Girls)',
        description: 'Takahashi-sensei is a high school teacher who is also working on his dissertation on demi-humans. Demi-humans are a relatively new phenomenon, with people being born as a hybrid between a human and a monster. Having never met a demi-human (shortened to "demi"), Takahashi-sensei has had trouble writing his dissertation, until a couple of demi start attending his school (vampire-girl Hikari, dullahan Kyouko, snowwoman Yuki, and succubus Satou-sensei). The series focuses on his growing relationships with the demis who are now in his life.',
        thoughts: 'An interesting take on the whole monster-girl phenomenon going on in anime right now, it decides to take the "slice of route" route instead of the overly-cliched PG-13 harem route. A very mellow watch, I found it enjoyable and looked forward to the next episode. As it is a slice of life anime, there is there is not much in the way of overarching plot, but it is still enjoyable.'
      }
    ]
  })
});

app.listen(5005, function() {
  console.log('listening on port 5005');
});
