# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Music
aphex = Node.create([
  {title:"Richard D. James",description:"Aphex Twin (born Richard David James on August 18, 1971 in Limerick, Ireland) is a Cornish electronic music artist, credited with innovations in the genres of techno, ambient, acid and drum and bass.",link:"http://en.wikipedia.org/wiki/Aphex_Twin",preview:"http://upload.wikimedia.org/wikipedia/commons/7/76/Aphex_Twin_2.jpg",kind:"person",tags:"British, Producer, IDM"},
  {title:"Selected Ambient Works 85-92",description:"One of the best classic ambient albums of all time",link:"https://www.youtube.com/watch?v=Xw5AiRVqfqk",preview:"",kind:"music",tags:"ambient, afx"},
  {title:"On", description:"On is the title of a 1993 EP by the British electronic music artist Richard D. James, more commonly known by his recording alias of Aphex Twin. It was released on 15 November 1993 by Warp Records.", link:"https://www.youtube.com/watch?v=B-US91WU8zA", preview:"", kind:"music", tags:"ep, 1993, afx"}
]);
aphex.map! { |node| node.id }

pfloyd = Node.create([
  {title:"Pink Floyd",description:"Pink Floyd were an English rock band formed in London. They achieved international acclaim with their progressive and psychedelic music",link:"http://en.wikipedia.org/wiki/Pink_Floyd", preview:"http://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg",kind:"article",tags:"British, psychedelic, rock, band"},
  {title:"Dark Side of The Moon", description:"One of the best psychedelic rock albums of all time",link:"https://www.youtube.com/watch?v=OewretHyIy4",preview:"",kind:"music",tags:"psychedelic, pink, floyd, 1973"},
  {title:"Syd Barrett", description:"Roger Keith Syd Barrett (6 January 1946 – 7 July 2006) was an English musician, composer, singer, songwriter and painter. Best known as a founder member of the band Pink Floyd, Barrett was the lead vocalist, guitarist and principal songwriter in its early years and is credited with naming the band.", link:"http://en.wikipedia.org/wiki/Syd_Barrett", preview:"http://cdn.neptunepinkfloyd.co.uk/wp-content/uploads/2014/02/Syd-Barrett.jpg", kind:"person", tags:"pink,floyd, guitarist"},
]);
pfloyd.map! { |node| node.id }

moderat = Node.create([
  {title:"Bonobo Mix", description:"THUMP Bonobo Set", link:"https://soundcloud.com/thump/mixed-by-bonobo", preview:"", kind:"music", tags:"bonobo, ambient, chill, moderat"},
  {title:"Moderat", description:"Moderat is an electronic music project that originated in Berlin, Germany. It started as a collaboration between Sascha Ring, also known as Apparat, and Modeselektor members, Gernot Bronsert and Sebastian Szary.", link:"http://en.wikipedia.org/wiki/Moderat", preview:"http://upload.wikimedia.org/wikipedia/commons/1/13/Moderat_%284135011634%29.jpg", kind:"website", tags:"moderat, bio, electronic, music, duo"},
])
moderat.map! { |node| node.id }

top_tracks = Node.create([
  {title:"Objekt - Ganzfeld", description:"Borne of mutual inspiration, legendary duo Dopplereffekt and sonic adventurer Objekt present Hypnagogia, a split 12'' on Leisure System, with each transmission derived from a shared journey into extrasensory perception and subconscious thought", link:"https://soundcloud.com/leisuresystem/objekt-ganzfeld", kind:"music", tags:"electronic,leisure system,objekt,dopplereffekt,future,hypnagogia"},
  {title:"Objekt - Ganzfeld", description:"Borne of mutual inspiration, legendary duo Dopplereffekt and sonic adventurer Objekt present Hypnagogia, a split 12'' on Leisure System, with each transmission derived from a shared journey into extrasensory perception and subconscious thought", link:"https://soundcloud.com/leisuresystem/objekt-ganzfeld", kind:"music", tags:"electronic,leisure system,objekt,dopplereffekt,future,hypnagogia"}
])
top_tracks.map! { |node| node.id }

top_albums = Node.create([
  {title:"Sun Kil Moon - I Watched The Film The Song Remains The Same", description:"Song by Sun Kil Moon from his album Benji", link:"https://www.youtube.com/watch?v=Sy8cklFZ3sA", preview:"", kind:"video", tags:"sun kil moon,folk rock,benji,2014"},
  {title:"Mr Mitch - Dont leave", description:"Track by Mr Mitch, the Gobstopper Records founder and part of the quartet behind crucial grime night Boxed", link:"https://soundcloud.com/mrmitchmusic/mr-mitch-dont-leave?in=mrmitchmusic/sets/dont-leave", preview:"", kind:"music", tags:"mr mitch,electronic,2014"},
  {title:"Love | Under the Skin | Mica Levi (Soundtrack)", description:"Film Music, composed by Mica Levi, known by her stage name Micachu (born 1987) is an English singer, songwriter, composer, and producer. She is classically trained and is best known for her band Micachu & The Shapes and for experimental music in a variety of genres.", link:"https://www.youtube.com/watch?v=lggI2bQefeU", preview:"", kind:"video", tags:"mica levi,micachu,2014,guitar,electronic"}
])
top_albums.map! { |node| node.id }

drowned_in_sound = Node.create([
  {title:"There's A Girl In The Corner", description:"Track from FatCat Records, independent label based in Brighton, England", link:"https://soundcloud.com/fatcatrecords/the-twilight-sad-theres-a-girl", kind:"music", tags:"electronic,2014"},
  {title:"Taylor Swift's 1989 by the numbers", description:"Global superstar and seven-time GRAMMY winner Taylor Swift’s critically acclaimed new album 1989 earns massive sales of 1.287 million albums (SoundScan), debuts at #1 on the charts and marks the only time an artist has sold over one million albums on release week for a third time (2010’s Speak Now with 1.05 million, 2012’s RED with 1.21 million and 2014’s 1989 with 1.287 million). 1989 is the only album this year to sell over a million albums and comprised 22% of the overall total of albums sold this year.", link:"http://www.bigmachinelabelgroup.com/taylor-swifts-1989-numbers/", preview:"http://www.bigmachinelabelgroup.com/wp-content/uploads/2014/11/856f7cc2-2b60-4aef-8c6a-5899e544a605.jpeg", kind:"article", tags:"pop, taylor swift"},
  {title:"Marissa Nadler - 1923 - July - 2014", description:"Second track from July. Recorded at Seattle's Avast Studio, the album pairs Nadler for the first time with producer Randall Dunn (Earth, Sunn O))), Wolves in the Throne Room)", link:"https://www.youtube.com/watch?v=6NpWN4VzpcE", kind:"video", tags:"Folk,indie rock,dream pop,ambient,marissa nadler"}
])
drowned_in_sound.map! { |node| node.id }

music = Node.create([
  {title: "Top 50 Tracks of 2014", description: "A fine selection of variety of electronic tracks from 2014 compiled by Resident Advisor community.", link: "http://www.residentadvisor.net/feature.aspx?2333", preview:"http://www.residentadvisor.net/images/features/2014/poll-tracks.jpg", edges: top_tracks.join(','), kind: "website", tags: 'music,compilation,RA,list,top50,2014'},
  {title: "Top 50 Albums of 2014", description: "A selection of top 50 albums of the year compiled by the Fact Mag UK.", link: "http://www.factmag.com/2014/12/09/the-50-best-albums-of-2014/", preview:"http://factmag-images.s3.amazonaws.com/wp-content/uploads/2014/12/2014-end-of-50-best-albums11.jpg", edges: top_albums.join(','), kind: "website", tags: 'music,compilation,albums,2014,top50'},
  {title:"Drowned In Sound: Top 50 Albums of 2014", description:"Compiling this list, and revisiting the year's best records, I was struck by just how many good collections of songs and exceptional bodies of work were released in 2014. More so than any other year, we could easily have run an extended selection of several hundred albums that the average Drowned in Sound reader might appreciate.", link:"http://drownedinsound.com/in_depth/4148558-drowned-in-sounds-50-favourite-albums-of-2014", preview:"http://dis.resized.images.s3.amazonaws.com/940x535/98645.jpeg",edges: drowned_in_sound.join(','), kind:"article", tags:"top50, albums"},
  {title:"Aphex Twin - Syro", description:"It’s 2014 and there is a new Aphex Twin album, which means the most conspicuous musical drought this side of My Bloody Valentine has ended. Syro, unlike the Caustic Window LP released earlier this year, is not a collection of material cut during Richard James’ prolific 1990s heyday and shelved. It’s a new album of new music recorded in the last few years, and it’s said to be the first of more to come. Unlike MBV, it’s not that James went away entirely—in 2005, he released a series of Analord 12'' EPs as AFX, and there were a couple of low-key EPs as the Tuss. But with many-monikered electronic musicians, branding is everything: it’s not an Aphex Twin release unless it’s presented as an Aphex Twin release.",link:"https://www.youtube.com/watch?v=RUAJ8KLGqis", kind:"video", edges: aphex.join(','), tags:"aphex,twin,syro,single,2014,idm,glitch"},
  {title:"Pink Floyd - Endless River",description:"The Endless River is a very difficult project to pin down. This 'final album' from Pink Floyd was made by compiling over 20 hours of unused sessions from the development of their 1994 record, The Division Bell. They’d toyed with the idea of releasing The Division Bell as a double album, one disc of traditional songs and one of ambient instrumentals, but the concept was shelved. Now, 20 years later, several years after the death of keyboardist Richard Wright, they’ve melded those sessions together along with other archived audio and some new takes to create what’s been branded as the band’s swan song. However, the success of The Endless River as an 'album' is evasive.",link:"https://play.spotify.com/track/6FOHrTobTT0YXQtQFT4zjk",kind:"music", edges: pfloyd.join(','), tags:"progressive,rock,floyd,2014"},
  {title:"Moderat - Bad Kingdom (DJ Koze Remix)",description:"A splendid track by Moderat remixed to perfection by DJ Koze.",link:"https://soundcloud.com/nanc-nanc/moderat-bad-kingdom-dj-koze-remix",kind:"music", edges: moderat.join(','), tags:"electronic, chill, moderat"},
])

# News
news = Node.create([ 
  {title: "North Korea demands joint investigation into Sony hack", description: "North Korea has demanded a joint investigation with the US into a major cyberattack on the Sony film studios which the Communist state says will prove that it was not responsible.", link: "http://www.thetimes.co.uk/tto/technology/article4303591.ece", preview: "http://i2.cdn.turner.com/cnn/dam/assets/130309110440-03-north-korea-0309-horizontal-gallery.jpg", kind: "article", tags: 'north korea,sony,hack,cyberattack,film,communist'},
  {title: "Ukip tells members: ‘Don’t go on Twitter’", description: "Nigel Farage’s party moves to ban unauthorised use of Ukip logo after embarrassing string of gaffes", link: "http://www.theguardian.com/politics/2014/dec/20/ukip-tells-members-dont-go-twitter-nigel-farage", preview: "http://static-secure.guim.co.uk/icons/social/og/gu-logo-fallback.png", kind: "article", tags: 'ukip,twitter,nigel farage,embarrassing'},
  {title: "Alex Salmond calls for ‘peasants’ revolt’ vote to abolish House of Lords", description: "Former Scottish first minister says English referendum needed to ‘clean out the stables’ and provoke a ‘constitutional revolution’", link: "http://www.theguardian.com/politics/2014/dec/20/alex-salmond-peasants-revolt-type-referendum-abolish-house-of-lords", preview: "http://static-secure.guim.co.uk/icons/social/og/gu-logo-fallback.png", kind: "article", tags: 'alex salmond,revolt,house of lords,scottish,minister,referendum'},
  {title: "Apple's Tim Cook 'deeply offended'", description: "Apple's Tim Cook 'deeply offended' by fresh allegations of factory worker mistreatment", link: "http://www.engadget.com/2014/12/19/apples-tim-cook-deeply-offended-by-fresh-allegations-of-facto/", preview: "http://o.aolcdn.com/hss/storage/midas/9fd6508898da8deb67bef69bbfb8d745/201275598/p1010819-1.jpg", kind: "article", tags: 'apple,tim cook,mistreatment'}
])
# History
history = Node.create([ 
  {title: "Roman Empire", description: "Everything about Roman Empire", tags: 'roman empire,roman,history,italy'},
  {title: "Russia", description: "Everything about Russian old and new history", tags: 'russia,history'},
  {title: "Great Britain", description: "Great Britain explained", tags: 'uk,great britain,history'}
])

# Sports
sports = Node.create([ 
  {title: "BBC Sport - Manchester City 3-0 Crystal Palace", description: "David Silva scores twice as Manchester City join Chelsea at the top of the table with victory over Crystal Palace.", link: "http://www.bbc.co.uk/sport/0/football/30459797", preview: "http://news.bbcimg.co.uk/media/images/79865000/jpg/_79865034_davidsilva.jpg", kind: "article", tags: "bbc,sport,manchester city,manchester,crystal palace,david silva,chelsea"},
  {title: "Ultimate Best Football Tricks & Skills", description: "If you like my work, become a fan on facebook and follow me on twitter", link: "https://www.youtube.com/watch?v=j3BslT97fR4", kind: "video", tags: "football,tricks,skills,youtube,compilation"},
  {title: "USA v AUS - Men's Basketball Quarterfinal | London 2012 Olympics", description: "The USA take on Australia in the quarterfinal of the men's basketball tournament at the London 2012 Olympic Games.", link: "https://www.youtube.com/watch?v=Aiem1w_TvaA", kind: "video", tags: "basketball,youtube,london,olympics"},
  {title: "The Best Game Of Tennis Ever?", description: "In tennis you can go for games without seeing something truly outstanding. When Andy Murray took on Michael Llodra they produced four of the best points you'll ever see in the course of a single game. Enjoy!", link: "https://www.youtube.com/watch?v=oyxhHkOel2I", kind: "video", tags: "tennis,youtube,andy murray,michael llodra"},
  {title: "Sochi 2014: Russia top medal table as Olympics come to an end", description: "Host nation Russia finished on top of the medal table as the 22nd Winter Olympics came to a close in Sochi on Sunday after 17 days of competition.", link: "http://www.bbc.co.uk/sport/0/winter-olympics/26314345", kind: "article", tags: "sochi,russia,olympics"}
])

# tech = Node.create([ 
# {title:"iPhone 6 and 6 Plus review: bigger and better, but with stiffer competition", description:"Even with a slightly larger screen, the iPhone remains comfortable to hold. With fast performance, a great display, an elegant new design and a much-needed software update, it's one of the best smartphones you can buy right now. We wish it had the same long battery life as the iPhone 6 Plus (not to mention its optical image stabilization) but even then, the iPhone 6 is still the better choice for most people", link:"http://www.engadget.com/2014/09/16/iphone-6-and-6-plus-review/", preview:"http://o.aolcdn.com/hss/storage/midas/7434a3763e9e4bae6e7d780a45ef5327/200766880/iPhone_6_main_final-960.jpg", kind:"article", tags:"apple,ios,ios 8,iphone,iphone6,iphone6plus,review,uk-reviews,video"},
# {title:"Nasa proposes cloud-based zeppelin city above Venus", description:"Nasa's concept mission to Venus is called Havoc, which stands for High Altitude Venus Operational Concept, and as concepts go, it's a pretty exciting one. The basic idea is to build a floating city of zeppelins manned by astronauts, which would hover in the planet's atmosphere", link:"http://www.wired.co.uk/news/archive/2014-12/22/venus-zeppelin-cloud-city", preview:"http://cdni.wired.co.uk/620x620/s_v/venus.png", kind:"article", tags:"nasa,zeppelin,venus,city"},
# {title:"CES 2015: the trends and technologies to look out for", description:"It's time already to kick off the new tech year in style at the the International Consumer Electronics Show, which is being held in Las Vegas this week", link:"http://www.wired.co.uk/news/archive/2015-01/04/ces-2015-trends-predictions", preview:"http://cdni.wired.co.uk/1920x1280/s_v/vegas.jpg", kind:"article", tags:"ces,technology,las vegas,tech,2015"},
# ])
# music.map!   { |node| node.id }


# Technology
tech = Node.create([ 
{title:"iPhone 6 and 6 Plus review: bigger and better, but with stiffer competition", description:"Even with a slightly larger screen, the iPhone remains comfortable to hold. With fast performance, a great display, an elegant new design and a much-needed software update, it's one of the best smartphones you can buy right now. We wish it had the same long battery life as the iPhone 6 Plus (not to mention its optical image stabilization) but even then, the iPhone 6 is still the better choice for most people", link:"http://www.engadget.com/2014/09/16/iphone-6-and-6-plus-review/", preview:"http://o.aolcdn.com/hss/storage/midas/7434a3763e9e4bae6e7d780a45ef5327/200766880/iPhone_6_main_final-960.jpg", kind:"article", tags:"apple,ios,ios 8,iphone,iphone6,iphone6plus,review,uk-reviews,video"},
{title:"Nasa proposes cloud-based zeppelin city above Venus", description:"Nasa's concept mission to Venus is called Havoc, which stands for High Altitude Venus Operational Concept, and as concepts go, it's a pretty exciting one. The basic idea is to build a floating city of zeppelins manned by astronauts, which would hover in the planet's atmosphere", link:"http://www.wired.co.uk/news/archive/2014-12/22/venus-zeppelin-cloud-city", preview:"http://cdni.wired.co.uk/620x620/s_v/venus.png", kind:"article", tags:"nasa,zeppelin,venus,city"},
{title:"CES 2015: the trends and technologies to look out for", description:"It's time already to kick off the new tech year in style at the the International Consumer Electronics Show, which is being held in Las Vegas this week", link:"http://www.wired.co.uk/news/archive/2015-01/04/ces-2015-trends-predictions", preview:"http://cdni.wired.co.uk/1920x1280/s_v/vegas.jpg", kind:"article", tags:"ces,technology,las vegas,tech,2015"},
{title:"Testing the Oculus Rift Development Kit 2: Game Demos", description:"We have the Oculus VR Development Kit in the office (two of them!) and have been testing them for over a week. We sit down to discuss the new hardware, compare it to our first development kit, and then run through as many game demos as we can get working. That includes revisiting some classics as well as multiplayer with Couch Knights and Elite: Dangerous using a HOTAS setup!", link:"https://www.youtube.com/watch?v=jNgKm8AfWhY", preview:"", kind:"video", tags:"oculus,oculus rift,vr,virtual reality,games"},
{title:"Samsung Galaxy S5 Review", description:"Josh reviews the Samsung Galaxy S5. Watch On!", link:"https://www.youtube.com/watch?v=p9zdCra9gCE", preview:"", kind:"video", tags:"samsung,samsung galaxy,reviews"},
])

# Categories
music.map!   { |node| node.id }
news.map!    { |node| node.id }
history.map! { |node| node.id }
sports.map!  { |node| node.id }
tech.map!    { |node| node.id }

kinds = Node.create([ 
  {title: "Music",       description: "Cool", edges: music.join(','),   kind: "music"   },
  {title: "News",        description: "Cool", edges: news.join(','),    kind: "news"    },
  {title: "History",     description: "Cool", edges: history.join(','), kind: "history" },
  {title: "Sports",      description: "Cool", edges: sports.join(','),  kind: "sports"  },
  {title: "Technology",  description: "Cool", edges: tech.join(','),    kind: "tech"    }
])

kinds.map! { |node| node.id }
Node.create(title: "Start Exploring",  description: "Cool", edges: kinds.join(','), kind: "website" )

