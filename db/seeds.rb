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
music = Node.create([
  {title: "Top 50 Tracks of 2014", description: "A fine selection of variety of electronic tracks from 2014 compiled by Resident Advisor community.", link: "http://www.residentadvisor.net/feature.aspx?2333", kind: "music", tags: 'music,compilation,RA,list,top50,2014'},
  {title: "Top 50 Albums of 2014", description: "A selection of top 50 albums of the year compiled by the Fact Mag UK.", link: "http://www.factmag.com/2014/12/09/the-50-best-albums-of-2014/", preview:"http://factmag-images.s3.amazonaws.com/wp-content/uploads/2014/12/2014-end-of-50-best-albums11.jpg", kind: "music", tags: 'music,compilation,albums,2014,top50'},
  {title: "Why are female pop stars frequently accused of being men?", description: "Iggy Azalea is the latest prominent female popstar to be ‘called out’ for being born male. Are the false accusations just a rite of passage for singers, or something more sinister?", link: "http://www.theguardian.com/music/2014/dec/19/female-popstars-accused-of-being-men", preview: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/12/18/1418917450105/3a9bb6c4-b2eb-475e-a7cd-87e7541aaad2-2060x1236.jpeg", kind: "article", tags: "music,female,pop,men,iggy azalea,singers"},
  {title: "2-Hours Epic Music Mix | Most Beautiful & Emotional Music - Emotional Mix Vol. 1", description: "2-Hours filled with some of the most beautiful/emotional tracks of all times. Lose yourself in its beauty", link: "https://www.youtube.com/watch?v=guXMb7zLblM", kind: "video", tags: "music,youtube,calm,beauty,relaxation"},
  {title: "Madonna to release new album Monday", description: "Madonna's already leaked new album is expected to be released stealth style on Monday.Madonna has had multiple issues with leaked new music. Since 2000 they have tended to happen right at that moment when they can create maximum publicity.", link: "http://www.music-news.com/shownews.asp?H=Madonna-to-release-new-album-Monday&nItemID=85878", preview: "http://www.music-news.com/images/logo.png?24/12/2014%2015:39:17", kind: "article", tags: 'madonna,music'},
  {title: "PSY - GANGNAM STYLE (강남스타일) M/V", description: "PSY - Gangnam Style (강남스타일)", link: "https://www.youtube.com/watch?v=9bZkp7q19f0", edges: psy_edges.join(','), kind: "video", tags: "psy,korean,music,youtube,popular songs"}
])

# News
news = Node.create([ 
  {title: "North Korea demands joint investigation into Sony hack", description: "North Korea has demanded a joint investigation with the US into a major cyberattack on the Sony film studios which the Communist state says will prove that it was not responsible.", link: "http://www.thetimes.co.uk/tto/technology/article4303591.ece", preview: "http://www.thetimes.co.uk/tto/multimedia/archive/00824/169282244__824793h.jpg", kind: "article", tags: 'north korea,sony,hack,cyberattack,film,communist'},
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


