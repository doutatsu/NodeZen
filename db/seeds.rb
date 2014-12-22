# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Music
music = Node.create([
  {title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life"},
  {title: "I Sat By The Ocean", description: "Queen of the Stone Age", link: "https://soundcloud.com/qotsa/i-sat-by-the-ocean"},
  {title: "Why are female pop stars frequently accused of being men?", description: "Iggy Azalea is the latest prominent female popstar to be ‘called out’ for being born male. Are the false accusations just a rite of passage for singers, or something more sinister?", link: "http://www.theguardian.com/music/2014/dec/19/female-popstars-accused-of-being-men"},
  {title: "2-Hours Epic Music Mix | Most Beautiful & Emotional Music - Emotional Mix Vol. 1", description: "2-Hours filled with some of the most beautiful/emotional tracks of all times. Lose yourself in its beauty", link: "https://www.youtube.com/watch?v=guXMb7zLblM"},
  {title: "Madonna to release new album Monday", description: "Madonna's already leaked new album is expected to be released stealth style on Monday.Madonna has had multiple issues with leaked new music. Since 2000 they have tended to happen right at that moment when they can create maximum publicity.", link: "http://www.music-news.com/shownews.asp?H=Madonna-to-release-new-album-Monday&nItemID=85878"},
  {title: "PSY - GANGNAM STYLE (강남스타일) M/V", description: "PSY - Gangnam Style (강남스타일)", link: "https://www.youtube.com/watch?v=9bZkp7q19f0"}
])

# News
news = Node.create([ 
  {title: "North Korea demands joint investigation into Sony hack", description: "North Korea has demanded a joint investigation with the US into a major cyberattack on the Sony film studios which the Communist state says will prove that it was not responsible.", link: "http://www.thetimes.co.uk/tto/technology/article4303591.ece"},
  {title: "Ukip tells members: ‘Don’t go on Twitter’", description: "Nigel Farage’s party moves to ban unauthorised use of Ukip logo after embarrassing string of gaffes", link: "http://www.theguardian.com/politics/2014/dec/20/ukip-tells-members-dont-go-twitter-nigel-farage"},
  {title: "Alex Salmond calls for ‘peasants’ revolt’ vote to abolish House of Lords", description: "Former Scottish first minister says English referendum needed to ‘clean out the stables’ and provoke a ‘constitutional revolution’", link: "http://www.theguardian.com/politics/2014/dec/20/alex-salmond-peasants-revolt-type-referendum-abolish-house-of-lords"},
  {title: "Apple's Tim Cook 'deeply offended'", description: "Apple's Tim Cook 'deeply offended' by fresh allegations of factory worker mistreatment", link: "http://www.engadget.com/2014/12/19/apples-tim-cook-deeply-offended-by-fresh-allegations-of-facto/"}
])
# History
history = Node.create([ 
  {title: "Roman Empire", description: "Everything about Roman Empire"},
  {title: "Russia", description: "Everything about Russian old and new history"},
  {title: "Great Britain", description: "Great Britain explained"}
])

# Photos
# Node.create(title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life")
# Node.create(title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life")
# Node.create(title: "Tree of Life", description: "The Most Epic Music", link: "https://soundcloud.com/themostepicmusic/tree-of-life")

# Sports
sports = Node.create([ 
  {title: "BBC Sport - Manchester City 3-0 Crystal Palace", description: "David Silva scores twice as Manchester City join Chelsea at the top of the table with victory over Crystal Palace.", link: "http://www.bbc.co.uk/sport/0/football/30459797"},
  {title: "Ultimate Best Football Tricks & Skills", description: "If you like my work, become a fan on facebook and follow me on twitter", link: "https://www.youtube.com/watch?v=j3BslT97fR4"},
  {title: "USA v AUS - Men's Basketball Quarterfinal | London 2012 Olympics", description: "The USA take on Australia in the quarterfinal of the men's basketball tournament at the London 2012 Olympic Games.", link: "https://www.youtube.com/watch?v=Aiem1w_TvaA"},
  {title: "The Best Game Of Tennis Ever?", description: "In tennis you can go for games without seeing something truly outstanding. When Andy Murray took on Michael Llodra they produced four of the best points you'll ever see in the course of a single game. Enjoy!", link: "https://www.youtube.com/watch?v=oyxhHkOel2I"}
])

# Categories
music.map! { |node| node.id }
news.map! { |node| node.id }
history.map! { |node| node.id }
sports.map! { |node| node.id }

Node.create(title: "Music",   description: "Cool", edges: music.join(','))
Node.create(title: "News",    description: "Cool", edges: news.join(','))
Node.create(title: "History", description: "Cool", edges: history.join(','))
Node.create(title: "Sports",  description: "Cool", edges: sports.join(','))


