# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Music tier 2

psy_edges = Node.create([
  {title: "PSY - GENTLEMAN M/V", description: "PSY - GENTLEMAN M/V", link: "https://www.youtube.com/watch?v=ASO_zypdnsQ", kind: "video", tags: "psy,korean,music,youtube"},
])
psy_edges.map! { |node| node.id }

# Music
aphex = Node.create([
  {title:"Richard D. James",description:"Aphex Twin (born Richard David James on August 18, 1971 in Limerick, Ireland) is a Cornish electronic music artist, credited with innovations in the genres of techno, ambient, acid and drum and bass.",link:"http://en.wikipedia.org/wiki/Aphex_Twin",preview:"http://en.wikipedia.org/wiki/Aphex_Twin#mediaviewer/File:Aphex_Twin_2.jpg",kind:"person",tags:"British, Producer, IDM"},
  {title:"Selected Ambient Works 85-92",description:"One of the best classic ambient albums of all time",link:"https://www.youtube.com/watch?v=Xw5AiRVqfqk",preview:"",kind:"music",tags:"ambient, afx"},
  {title:"On", description:"On is the title of a 1993 EP by the British electronic music artist Richard D. James, more commonly known by his recording alias of Aphex Twin. It was released on 15 November 1993 by Warp Records.", link:"https://www.youtube.com/watch?v=B-US91WU8zA", preview:"", kind:"music", tags:"ep, 1993, afx"}
]);
aphex.map! { |node| node.id }

pfloyd = Node.create([
  {title:"Pink Floyd",description:"Pink Floyd were an English rock band formed in London. They achieved international acclaim with their progressive and psychedelic music",link:"http://en.wikipedia.org/wiki/Pink_Floyd", preview:"http://upload.wikimedia.org/wikipedia/en/d/d6/Pink_Floyd_-_all_members.jpg",kind:"article",tags:"British, psychedelic, rock, band"},
  {title:"Dark Side of The Moon", description:"One of the best psychedelic rock albums of all time",link:"https://www.youtube.com/watch?v=OewretHyIy4",preview:"",kind:"music",tags:"psychedelic, pink, floyd, 1973"},
  {title:"Syd Barrett", description:"Roger Keith Syd Barrett (6 January 1946 – 7 July 2006) was an English musician, composer, singer, songwriter and painter. Best known as a founder member of the band Pink Floyd, Barrett was the lead vocalist, guitarist and principal songwriter in its early years and is credited with naming the band.", link:"http://en.wikipedia.org/wiki/Syd_Barrett", preview:"http://en.wikipedia.org/wiki/Syd_Barrett#mediaviewer/File:Syd.jpg", kind:"person", tags:"pink,floyd, guitarist"},
]);
pfloyd.map! { |node| node.id }

music = Node.create([
  {title: "Top 50 Tracks of 2014", description: "A fine selection of variety of electronic tracks from 2014 compiled by Resident Advisor community.", link: "http://www.residentadvisor.net/feature.aspx?2333", preview:"http://www.residentadvisor.net/images/features/2014/poll-tracks.jpg", kind: "website", tags: 'music,compilation,RA,list,top50,2014'},
  {title: "Top 50 Albums of 2014", description: "A selection of top 50 albums of the year compiled by the Fact Mag UK.", link: "http://www.factmag.com/2014/12/09/the-50-best-albums-of-2014/", preview:"http://factmag-images.s3.amazonaws.com/wp-content/uploads/2014/12/2014-end-of-50-best-albums11.jpg", kind: "website", tags: 'music,compilation,albums,2014,top50'},
  {title:"Drowned In Sound: Top 50 Albums of 2014", description:"Compiling this list, and revisiting the year's best records, I was struck by just how many good collections of songs and exceptional bodies of work were released in 2014. More so than any other year, we could easily have run an extended selection of several hundred albums that the average Drowned in Sound reader might appreciate.", link:"http://drownedinsound.com/in_depth/4148558-drowned-in-sounds-50-favourite-albums-of-2014", preview:"http://dis.resized.images.s3.amazonaws.com/940x535/98645.jpeg", kind:"article", tags:"top50, albums"},
  {title:"Aphex Twin - Syro", description:"It’s 2014 and there is a new Aphex Twin album, which means the most conspicuous musical drought this side of My Bloody Valentine has ended. Syro, unlike the Caustic Window LP released earlier this year, is not a collection of material cut during Richard James’ prolific 1990s heyday and shelved. It’s a new album of new music recorded in the last few years, and it’s said to be the first of more to come. Unlike MBV, it’s not that James went away entirely—in 2005, he released a series of Analord 12'' EPs as AFX, and there were a couple of low-key EPs as the Tuss. But with many-monikered electronic musicians, branding is everything: it’s not an Aphex Twin release unless it’s presented as an Aphex Twin release.",link:"https://www.youtube.com/watch?v=RUAJ8KLGqis", preview:"", kind:"video", edges: aphex.join(','), tags:"aphex,twin,syro,single,2014,idm,glitch"},
  {title:"Pink Floyd - Endless River",description:"The Endless River is a very difficult project to pin down. This 'final album' from Pink Floyd was made by compiling over 20 hours of unused sessions from the development of their 1994 record, The Division Bell. They’d toyed with the idea of releasing The Division Bell as a double album, one disc of traditional songs and one of ambient instrumentals, but the concept was shelved. Now, 20 years later, several years after the death of keyboardist Richard Wright, they’ve melded those sessions together along with other archived audio and some new takes to create what’s been branded as the band’s swan song. However, the success of The Endless River as an 'album' is evasive.",link:"https://play.spotify.com/track/6FOHrTobTT0YXQtQFT4zjk",preview:"",kind:"music", edges: pfloyd.join(','), tags:"progressive,rock,floyd,2014"},
  {title:"Moderat - Bad Kingdom (DJ Koze Remix)",description:"A splendid track by Moderat remixed to perfection by DJ Koze.",link:"https://soundcloud.com/nanc-nanc/moderat-bad-kingdom-dj-koze-remix", preview:"",kind:"music", tags:"electronic, chill, moderat"},
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

# Photos
# Node.create(title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life")
# Node.create(title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life")
# Node.create(title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life")

# Sports
sports = Node.create([ 
  {title: "BBC Sport - Manchester City 3-0 Crystal Palace", description: "David Silva scores twice as Manchester City join Chelsea at the top of the table with victory over Crystal Palace.", link: "http://www.bbc.co.uk/sport/0/football/30459797", preview: "http://news.bbcimg.co.uk/media/images/79865000/jpg/_79865034_davidsilva.jpg", kind: "article", tags: "bbc,sport,manchester city,manchester,crystal palace,david silva,chelsea"},
  {title: "Ultimate Best Football Tricks & Skills", description: "If you like my work, become a fan on facebook and follow me on twitter", link: "https://www.youtube.com/watch?v=j3BslT97fR4", kind: "video", tags: "football,tricks,skills,youtube,compilation"},
  {title: "USA v AUS - Men's Basketball Quarterfinal | London 2012 Olympics", description: "The USA take on Australia in the quarterfinal of the men's basketball tournament at the London 2012 Olympic Games.", link: "https://www.youtube.com/watch?v=Aiem1w_TvaA", kind: "video", tags: "basketball,youtube,london,olympics"},
  {title: "The Best Game Of Tennis Ever?", description: "In tennis you can go for games without seeing something truly outstanding. When Andy Murray took on Michael Llodra they produced four of the best points you'll ever see in the course of a single game. Enjoy!", link: "https://www.youtube.com/watch?v=oyxhHkOel2I", kind: "video", tags: "tennis,youtube,andy murray,michael llodra"},
  {title: "Sochi 2014: Russia top medal table as Olympics come to an end", description: "Host nation Russia finished on top of the medal table as the 22nd Winter Olympics came to a close in Sochi on Sunday after 17 days of competition.", link: "http://www.bbc.co.uk/sport/0/winter-olympics/26314345", kind: "article", tags: "sochi,russia,olympics"}
])

# Categories
music.map! { |node| node.id }
news.map! { |node| node.id }
history.map! { |node| node.id }
sports.map! { |node| node.id }

kinds = Node.create([ 
  {title: "Music",   description: "Cool", edges: music.join(','), kind: "music"    },
  {title: "News",    description: "Cool", edges: news.join(','), kind: "news"      },
  {title: "History", description: "Cool", edges: history.join(','), kind: "history"},
  {title: "Sports",  description: "Cool", edges: sports.join(','), kind: "sports"  }
])

kinds.map! { |node| node.id }
Node.create(title: "Start",  description: "Cool", edges: kinds.join(','), kind: "website" )


# examples = Node.create([ 
#   {title: "Relaxing Music",   description: "Cool", kind: "music"     },
#   {title: "Essay Examples",    description: "Cool", kind: "picture"  },
#   {title: "50% off Microsoft Office", description: "Cool", kind: "ad"},
#   {title: "Best writing tips",  description: "Cool", kind: "article"  },
#   {title: "Friedrich Nietzsche",  description: "Cool", kind: "person"  }
# ])
# examples.map! { |node| node.id }
# Node.create(title: "How to: write an essay", description: "Cool", edges: examples.join(','), kind: "website" )


