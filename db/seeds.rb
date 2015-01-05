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

apple = Node.create([
{title:"Iphone Cases, Armbands & Films", description:"Buy iPhone cases & covers direct from Apple. Explore our range of iPhone bumpers and cases and buy online today at the official UK Apple Store.", link:"http://store.apple.com/uk/iphone/iphone-accessories/cases", preview:"http://www.iphone5cases.com/wp-content/uploads/2012/09/ultra-slim-iphone5cases.jpg", kind:"website", tags:"apple,iphone,case,accessories"},
{title:"Apple iPad Air Review!", description:"iPad Air Review - The DeFacto tablet from a Googler's POV!", link:"https://www.youtube.com/watch?v=Hr8E-_yU2YA", preview:"", kind:"video", tags:"ipad,apple,reviews,youtube"},
{title:"New Retina MacBook Pro: Unboxing and Tour", description:"Unboxing and Tour of the new MacBook Pro with Retina Display.", link:"https://www.youtube.com/watch?v=oYOKp9j-_yY", preview:"", kind:"video", tags:"apple,macbook,macbook pro,unboxing,youtube"},
{title:"Inside Apple’s Broken Sapphire Factory", description:"The $1 billion plan by Apple and unproven contractor GT Advanced Technologies to make superhard iPhone screens was troubled from the start, a rare misstep for the world’s most valuable company", link:"http://www.wsj.com/articles/inside-apples-broken-sapphire-factory-1416436043", preview:"http://si.wsj.net/public/resources/images/BN-FQ238_GTAPPL_G_20141119164704.jpg", kind:"article", tags:"apple,news,article,iphone"},
{title:"Steve Jobs", description:"Steven Paul 'Steve' Jobs (/ˈdʒɒbz/; February 24, 1955 – October 5, 2011) was an American entrepreneur, marketer, and inventor, who was the co-founder, chairman, and CEO of Apple Inc", link:"http://en.wikipedia.org/wiki/Steve_Jobs", preview:"http://i.forbesimg.com/images/channels/channel_3_section_110_panel1_0_fullsize-1349183829.jpg", kind:"person", tags:"apple,steve jobs,genius,influential people"}, 
])
apple.map!   { |node| node.id }

samsung = Node.create([ 
{title:"Samsung", description:"Samsung (Hangul: 삼성; hanja: 三星; Korean pronunciation: [sʰamsʰʌŋ ɡɯɾup]) is a South Korean multinational conglomerate company headquartered in Samsung Town, Seoul. It comprises numerous subsidiaries and affiliated businesses, most of them united under the Samsung brand, and is the largest South Korean chaebol (business conglomerate).", link:"http://en.wikipedia.org/wiki/Samsung", preview:"http://www.littlegreenrobot.co.uk/wp-content/uploads/2013/06/Samsung-Logo1.jpg", kind:"person", tags:"samsung,profile,wikipedia,korea,technology"},
{title:"Samsung decides 56 smartphones a year is too many, will cut lineup by 30%", description:"Samsung's 2015 lineup will be still be massive—just slightly less massive.", link:"http://arstechnica.com/gadgets/2014/11/samsung-decides-56-smartphones-a-year-is-too-many-will-cut-lineup-by-30/", preview:"http://cdn.arstechnica.net/wp-content/uploads/2014/11/samsung2014-640x270.jpg", kind:"article", tags:"samsung,smartphone"},
{title:"Samsung GALAXY S5 - Official Introduction", description:"Focusing on capabilities that matter the most to users, the new Samsung GALAXY S5 offers a refined experience while innovating essential, day-to-day features.", link:"https://www.youtube.com/watch?v=-XseHZyvGtg", preview:"", kind:"video", tags:"samsung,samsung galaxy 5"},
{title:"iPhone 6 vs Samsung Galaxy S5 Speed Test!", description:"iPhone 6 vs Galaxy S5: What's your pick?", link:"https://www.youtube.com/watch?v=VmzQ2hdfQcs", preview:"", kind:"video", tags:"samsung,apple,iphone,samsung galaxy 5,iphone 6"},
])
samsung.map!   { |node| node.id }

ces = Node.create([ 
{title:"How quantum dots will make LG TVs more colourful", description:"LG has revealed that it will be showing off quantum dot LCD televisions at the Consumer Electronics Show in January 2015", link:"http://www.wired.co.uk/news/archive/2014-12/16/lg-quantum-dot-tv", preview:"http://cdni.wired.co.uk/620x400/o_r/quantum-dot-lg.jpg", kind:"article", tags:"LG,tv,physics,quantum theory"},
{title:"HP intros a slew of monitors, including curved, 5K and 3D models", description:"HP just announced a boatload of new monitors here at CES and impressively, they seem to combine every big tech buzzword from the past few years", link:"http://www.engadget.com/2015/01/05/hp-monitors-4k-5k-3d-curved/", preview:"http://o.aolcdn.com/hss/storage/midas/4ce06487dfa9b3e942557ae93cf81776/201271234/HP_curved_monitor_630_wide.jpg", kind:"article", tags:"hp,ces,2015,display,curved display,4K,5K"},
{title:"CES 2015 - What to Expect", description:"On this week's episode, Jon riffs on CES 2015 and the new tech that will be on display at the show. Every year at CES we get an early glimpse at the technological improvements we will see in gadgets throughout the year. This year at CES 2014, curved 4K and giant 8K televisions were popular. At CES 2015, Jon expects TVs to get even more pixels surpassing 8K and possibly hitting 16K. Televisions won't be the only gadgets getting bumps in resolution, Jon predicts we will see a 4K smartphone display during next year's show. We will likely also see new smartphone battery improvements and camera upgrades. Whatever CES 2015 brings, the TechnoBuffalo crew will be there to bring you the latest news", link:"https://www.youtube.com/watch?v=8sH6cizkL6o", preview:"", kind:"video", tags:"ces,2015,tv,4K"}
])
ces.map!   { |node| node.id }

oculus = Node.create([ 
{title:"Elders react to oculus rift", description:"Watch the Elders React to NEW TECHNOLOGY as they dive into virtual reality using the OCULUS RIFT.", link:"https://www.youtube.com/watch?v=hZ8Xj_I3aNU", preview:"", kind:"video", tags:"youtube,oculus rift,elders,thefinebros"},
{title:"HAPPY CHRISTMAS Oculus Rift", description:"The Best and Funniest OR Reactions Ever Compilation", link:"https://www.youtube.com/watch?v=INDKNA7kXoo", preview:"", kind:"video", tags:"oculus,oculus rift,reactions,funny"},
{title:"The Inside Story of Oculus Rift and How Virtual Reality Became Reality", description:"Oculus has found a way to make a headset that does more than just hang a big screen in front of your face. By combining stereoscopic 3-D, 360-degree visuals, and a wide field of view—along with a supersize dose of engineering and software magic—it hacks your visual cortex. As far as your brain is concerned, there’s no difference between experiencing something on the Rift and experiencing it in the real world", link:"http://www.wired.com/2014/05/oculus-rift-4/", preview:"http://www.wired.com/wp-content/uploads/2014/05/oculus-eye-feat.jpg", kind:"article", tags:"Wired.com,Wired News,Wired Blogs,tech news,technology,gadgets,gizmos,reviews,tech,science,politics,culture,electronics"},
{title:"Palmer Luckey", description:"Palmer Freeman Luckey (born 19 September 1992) is the original founder of Oculus VR and inventor of the Oculus Rift, a consumer virtual reality head-mounted display", link:"http://en.wikipedia.org/wiki/Palmer_Luckey", preview:"http://www.blogcdn.com/www.engadget.com/media/2013/03/palmerchat389.jpg", kind:"person", tags:"oculus rift,facebook,oculus vr, palmer luckey,virtual reality"}
])
oculus.map!   { |node| node.id }

nasa = Node.create([ 
{title:"NASA", description:"The National Aeronautics and Space Administration (NASA) is the United States government agency responsible for the civilian space program as well as aeronautics and aerospace research.", link:"http://en.wikipedia.org/wiki/NASA", preview:"http://www.wired.com/wp-content/uploads/2014/08/nasa-logos.jpg", kind:"person", tags:"nasa,science,space,wikipedia"},
{title:"Nasa just emailed a wrench to space", description:"When International Space Station commander Barry Wilmore needed a wrench, Nasa knew exactly what to do. They 'emailed' him one", link:"http://www.wired.co.uk/news/archive/2014-12/19/3d-printed-space-wrench", preview:"http://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/2000px-Wired_logo.svg.png", kind:"article", tags:"nasa,science,space,3d printing"}
])
nasa.map!   { |node| node.id }

# Technology
tech = Node.create([ 
{title:"iPhone 6 and 6 Plus review: bigger and better, but with stiffer competition", description:"Even with a slightly larger screen, the iPhone remains comfortable to hold. With fast performance, a great display, an elegant new design and a much-needed software update, it's one of the best smartphones you can buy right now. We wish it had the same long battery life as the iPhone 6 Plus (not to mention its optical image stabilization) but even then, the iPhone 6 is still the better choice for most people", link:"http://www.engadget.com/2014/09/16/iphone-6-and-6-plus-review/", preview:"http://o.aolcdn.com/hss/storage/midas/7434a3763e9e4bae6e7d780a45ef5327/200766880/iPhone_6_main_final-960.jpg", kind:"article", tags:"apple,ios,ios 8,iphone,iphone6,iphone6plus,review,uk-reviews,video", edges: apple.join(',')},
{title:"Nasa proposes cloud-based zeppelin city above Venus", description:"Nasa's concept mission to Venus is called Havoc, which stands for High Altitude Venus Operational Concept, and as concepts go, it's a pretty exciting one. The basic idea is to build a floating city of zeppelins manned by astronauts, which would hover in the planet's atmosphere", link:"http://www.wired.co.uk/news/archive/2014-12/22/venus-zeppelin-cloud-city", preview:"http://i.kinja-img.com/gawker-media/image/upload/s--JczRSQ_1--/c_fit,fl_progressive,q_80,w_636/r005fpsxac3cxhfbjgpy.jpg", kind:"article", tags:"nasa,zeppelin,venus,city", edges: nasa.join(',')},
{title:"CES 2015: the trends and technologies to look out for", description:"It's time already to kick off the new tech year in style at the the International Consumer Electronics Show, which is being held in Las Vegas this week", link:"http://www.wired.co.uk/news/archive/2015-01/04/ces-2015-trends-predictions", preview:"http://cdni.wired.co.uk/1920x1280/s_v/vegas.jpg", kind:"article", tags:"ces,technology,las vegas,tech,2015", edges: ces.join(',')},
{title:"Testing the Oculus Rift Development Kit 2: Game Demos", description:"We have the Oculus VR Development Kit in the office (two of them!) and have been testing them for over a week. We sit down to discuss the new hardware, compare it to our first development kit, and then run through as many game demos as we can get working. That includes revisiting some classics as well as multiplayer with Couch Knights and Elite: Dangerous using a HOTAS setup!", link:"https://www.youtube.com/watch?v=jNgKm8AfWhY", preview:"", kind:"video", tags:"oculus,oculus rift,vr,virtual reality,games", edges: oculus.join(',')},
{title:"Samsung Galaxy S5 Review", description:"Josh reviews the Samsung Galaxy S5. Watch On!", link:"https://www.youtube.com/watch?v=p9zdCra9gCE", preview:"", kind:"video", tags:"samsung,samsung galaxy,reviews", edges: samsung.join(',')},
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

