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
        description: 'Otaku siblings Tamotsu and Niwaka Denkigai are shopping in Akihabara when it is overrun by vampiric cosplaying monsters! These creatures, known as "Bugged Ones," can possess anyone they bite and soon they begin causing mayhem across the city. As Tamotsu finds himself at the mercy of one of these creatures, he is rescued by the mysterious baseball bat-wielding Matome Mayonaka. Together, they fight through several more encounters with the Bugged Ones, but before long, Tamotsu is fatally wounded protecting Matome. With no other choice, she revives him as a high level Bugged One—just like her! Tamotsu and Matome, along with excitable otaku cosplayer Arisa Ahokainen, make up the group "The Electric Mayonnaise" and they begin dispatching the Bugged Ones in the only way they know how: by ripping off their clothes and exposing them to sunlight!',
        thoughts: 'Meh. Forgettable. I kept watching for the sake of having something to watch, but more or less dropped it 3/4s of the way through.'
      },
      {
        thumbnail: 'anime-images/gabriel_thumbnail.jpeg',
        fullSize: 'anime-images/gabriel.jpg',
        title: 'Gabriel Dropout',
        description: 'For centuries, Heaven has required its young angels to live and study among humans in order to become full-fledged angels. This is no different for top-of-her-class Gabriel White Tenma, who believes it is her mission to be a great angel who will bring happiness to mankind. However, Gabriel grows addicted to video games on Earth and eventually becomes a hikikomori. Proclaiming herself a "Faillen Angel," she is apathetic to everything else—much to the annoyance of Vignette April Tsukinose, a demon whom Gabriel befriended in her angelic early days on Earth. Vignette\'s attempts to revert Gabriel back to her previous self are in vain, as Gabriel shoots down any attempt to change her precious lifestyle. As they spend their time on Earth, they meet two eccentric personalities: the angel Raphiel Ainsworth Shiraha, Gabriel\'s classmate with a penchant for sadism, and the demon Satanichia McDowell Kurumizawa, a clumsy self-proclaimed future ruler of the Underworld. Gabriel DropOut follows these four friends\'s comedic lives as they utterly fail to understand what it truly means to be a demon or an angel.',
        thoughts: 'Fairly enjoyable. Nothing overly original, other than the other-worldly origins of our characters. The cast is likeable, their adventures catch your attention, and overall it was fairly amusing.'
      },
      {
        thumbnail: 'anime-images/kobayashi_thumbnail.jpeg',
        fullSize: 'anime-images/kobayashi.jpg',
        title: "Kobayashi-san Chi no Meidoragon (aka. Ms. Kobayashi's Dragon Maid)",
        description: 'As Kobayashi sets off for another day at work, she opens her apartment door only to be met by an unusually frightening sight—the head of a dragon, staring at her from across the balcony. The dragon immediately transforms into a cute, busty, and energetic young girl dressed in a maid outfit, introducing herself as Tooru. It turns out that the stoic programmer had come across the dragon the previous night on a drunken excursion to the mountains, and since the mythical beast had nowhere else to go, she had offered the creature a place to stay in her home. Thus, Tooru had arrived to cash in on the offer, ready to repay her savior\’s kindness by working as her personal maidservant. Though deeply regretful of her words and hesitant to follow through on her promise, a mix of guilt and Tooru\'s incredible dragon abilities convinces Kobayashi to take the girl in. Despite being extremely efficient at her job, the maid\'s unorthodox methods of housekeeping often end up horrifying Kobayashi and at times bring more trouble than help. Furthermore, the circumstances behind the dragon\'s arrival on Earth seem to be much more complicated than at first glance, as Tooru bears some heavy emotions and painful memories. To top it all off, Tooru\'s presence ends up attracting several other mythical beings to her new home, bringing in a host of eccentric personalities. Although Kobayashi makes her best effort to handle the crazy situation that she has found herself in, nothing has prepared her for this new life with a dragon maid.',
        thoughts: 'All the yessses. This anime caught me off-guard in a rather forgettable season. The characters are fun and interesting, and the story has a lot of heart. The absurd premise actually works, and watching how each of the characters changed and grew over the course of the episodes was really great.'
      },
      {
        thumbnail: 'anime-images/konosuba_thumbnail.jpeg',
        fullSize: 'anime-images/konosuba.jpg',
        title: "Konosuba (Season 2)",
        description: 'Second season of Kono Subarashii Sekai ni Shukufuku wo!',
        thoughts: 'Konosuba is all the things. It takes the whole "teenaged boy transported to a magical RPG-like world" cliche and satirizes every facet imaginable. My only complaint with Season 2 is the same complaint I had with Season 1: MAKE THE SEASON LONGER!! Most season-long anime get 12 or 13 episodes, but Konosuba only got 10 each season, despite their massive sales. Considering what a cash cow it is, Season 3 is bound to be around the next corner'
      },
      {
        thumbnail: 'anime-images/masamune_thumbnail.jpeg',
        fullSize: 'anime-images/masamune.jpg',
        title: 'Masamune-kun no Revenge',
        description: 'As a child, Masamune Makabe once suffered greatly at the hands of a wealthy and beautiful girl named Aki Adagaki, who nicknamed him "Piggy" due to his chubby appearance. Seeking revenge against his tormentor, Masamune works hard to improve himself and returns as an incredibly handsome, albeit narcissistic, high school student. When he encounters Aki once again, he is prepared to exact vengeance. With the aid of the rich girl\’s maid, Yoshino Koiwai, Masamune slowly begins to build his relationship with Aki, intending to break her heart when the time is right. However, as his friendship with Aki begins to grow, Masamune starts to question the objectives of his devious plans, and if bringing them to fruition is what his heart truly desires.',
        thoughts: 'Meh. The primary protaganists are incredibly unlikeable and shallow. The side characters are somewhat decent, but they lack any permanent presence in the series. I ended up just reading spoilers'
      },
      {
        thumbnail: 'anime-images/monster_girl_thumbnail.jpeg',
        fullSize: 'anime-images/monster_girl.jpg',
        title: 'Demi-chan wa Kataritai (aka Interviews With Monster Girls)',
        description: 'The story takes place in an age where "Ajin" (demi-human), more casually known as "Demi," have slowly started to become accepted into human society. Tetsuo Takahashi is a biology teacher who ends up teaching three such Demi, hoping to understand more about them while also managing to catch their attention.',
        thoughts: 'An interesting take on the whole monster-girl phenomenon going on in anime right now, it decides to take the "slice of route" route instead of the overly-cliched PG-13 harem route. A very mellow watch, I found it enjoyable and looked forward to the next episode. As it is a slice of life anime, there is there is not much in the way of overarching plot, but it is still enjoyable.'
      },
      {
        thumbnail: 'anime-images/dbs_thumbnail.jpeg',
        fullSize: 'anime-images/dbs.jpg',
        title: 'Dragon Ball Super',
        description: 'Set just after the events of the Buu Saga of Dragon Ball Z, a deadly threat awakens once more. People lived in peace without knowing who the true heroes were during the devastating battle against Majin Buu. The powerful Dragon Balls have prevented any permanent damage, and our heroes also continue to live a normal life. In the far reaches of the universe, however, a powerful being awakens early from his slumber, curious about a prophecy of his defeat. Join Goku, Piccolo, Vegeta, Gohan, and the rest of the Dragon Ball crew as they tackle the strongest opponent they have ever faced. Beerus, the god of destruction, now sets his curious sights on Earth. Will the heroes save the day and prevent earth\'s destruction? Or will the whims of a bored god prove too powerful for the Saiyans? Goku faces impossible odds once more and fights for the safety of his loved ones and the planet.',
        thoughts: 'PENDING'
      },
      {
        thumbnail: 'anime-images/fuuka_thumbnail.jpeg',
        fullSize: 'anime-images/fuuka.jpg',
        title: 'Fuuka',
        description: 'Yuu Haruna just moved into town and loves to use Twitter. Out on his way to buy dinner, he bumps into a mysterious girl, Fuuka Akitsuki, who breaks his phone thinking he was trying to take a picture of her panties. How will his new life change now?',
        thoughts: 'PENDING'
      },
      {
        thumbnail: 'anime-images/lwa_thumbnail.jpeg',
        fullSize: 'anime-images/lwa.jpg',
        title: 'Little Witch Academia',
        description: 'Atsuko Kagari is an ordinary girl who joins the renowned witch academy for witch girls, Luna Nova Academy. When she was younger, she went to Magical Festa, a magic show hosted by a witch named Shiny Chariot. Atsuko was so mesmerized and inspired by Shiny Chariot\'s performance that she dreamed to someday be a "cool" witch like her. This young and impressionable Atsuko takes Shiny Chariot\'s words as her own motto: "Never forget, a believing heart is your magic.“ As part of a class, Atsuko and her classmates go into a labyrinth under the Tower of Luna Nova. There, a sealed ancient dragon was unleashed by one of her classmates. Atsuko tries to stop the dragon, but…',
        thoughts: 'PENDING'
      },
      {
        thumbnail: 'anime-images/naruto_thumbnail.jpeg',
        fullSize: 'anime-images/naruto.jpg',
        title: 'Naruto Shippuden',
        description: 'It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.',
        thoughts: 'PENDING'
      },
      {
        thumbnail: 'anime-images/tse_thumbnail.jpeg',
        fullSize: 'anime-images/tse.jpg',
        title: 'Twin Star Exorcist',
        description: 'Magano, a parallel realm filled with monsters known as "Kegare," is a place where exorcists deal with all impurities. Benio Adashino is a prodigy exorcist who is recognized for her strength and is summoned to Tokyo by the Exorcist Union. On her way, she plummets into the arms of Rokuro Enmadou, a young exorcist with a troubled past. But the impurities of Magano do not rest. When these two exorcists witness a couple of children stolen by a Kegare, Benio rushes to save them, dragging Rokuro along with her into Magano. Engaged in a fight she is on the verge of being defeated in, Benio is saved by Rokuro, revealing himself capable of being her rival in talent. Sousei no Onmyouji tells the story of two talented exorcists who are destined to become the "Twin Star Exorcists" and the prophesised parents of the Miko—the reincarnation of Abe no Seimei—who will cleanse the world of all impurities.',
        thoughts: 'PENDING'
      }
    ]
  })
});

app.listen(5005, function() {
  console.log('listening on port 5005');
});
