const videos = [
  {
    slug: "15-crashes-at-angies",
    src: "https://assets.skatehousemedia.com/15-Crashes-at-Angies-Final.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/15-Crashes-at-Angies-Final.jpg",
    title: "15 Crashes at Angies",
  },
  {
    slug: "2011-compilation-part-1",
    src: "https://assets.skatehousemedia.com/2011-Compilation-Part-1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/2011-Compilation-Part-1.jpg",
    title: "2011 Compilation Part 1",
  },
  {
    slug: "2011-compilation-part-2",
    src: "https://assets.skatehousemedia.com/2011-Compilation-Part-2.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/2011-Compilation-Part-2.jpg",
    title: "2011 Compilation Part 2",
  },
  {
    slug: "2012-compilation-part-1",
    src: "https://assets.skatehousemedia.com/2012-Compilation-Part-1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/2012-Compilation-Part-1.jpg",
    title: "2012 Compilation Part 1",
  },
  {
    slug: "2012-compilation-part-2",
    src: "https://assets.skatehousemedia.com/2012-Compilation-Part-2.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/2012-Compilation-Part-2.jpg",
    title: "2012 Compilation Part 2",
  },
  {
    slug: "2012-winsport-igsa-world-championship-finals",
    src: "https://assets.skatehousemedia.com/2012-Winsport-IGSA-World-Championship-Finals.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/2012-Winsport-IGSA-World-Championship-Finals.jpg",
    title: "2012 Winsport IGSA World Championship Finals",
  },
  {
    slug: "a-day-well-spent",
    src: "https://assets.skatehousemedia.com/a-day-well-spent.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/a-day-well-spent.jpg",
    title: "A Day Well Spent",
  },
  {
    slug: "a-day-with-the-van",
    src: "https://assets.skatehousemedia.com/A-Day-With-The-Van.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/A-Day-With-The-Van.jpg",
    title: "A Day with the Van",
  },
  {
    slug: "a-ha-featuring-max-myers",
    src: "https://assets.skatehousemedia.com/A-HA-Featuring-Max-Myers.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/A-HA-Featuring-Max-Myers.jpg",
    title: "A-ha featuring Max Myers",
  },
  {
    slug: "a-quick-clip-from-the-road",
    src: "https://assets.skatehousemedia.com/A-Quick-Clip-From-The-Road.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/A-Quick-Clip-From-The-Road.jpg",
    title: "A Quick Clip from the Road",
  },
  {
    slug: "a-quick-run-with-ethan-lau",
    src: "https://assets.skatehousemedia.com/A-Quick-Run-with-Ethan-Lau.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/A-Quick-Run-with-Ethan-Lau.jpg",
    title: "A Quick Run with Ethan Lau",
  },
  {
    slug: "a-run-with-josephmyles",
    src: "https://assets.skatehousemedia.com/A-Run-With-Josephmyles.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/A-Run-With-Josephmyles.jpg",
    title: "A Run with Josephmyles",
  },
  {
    slug: "aaron-from-the-block",
    src: "https://assets.skatehousemedia.com/Aaron-from-the-Block.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Aaron-from-the-Block.jpg",
    title: "Aaron from the Block",
  },
  {
    slug: "adam-astor-shm",
    src: "https://assets.skatehousemedia.com/Adam-Astor-SHM.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Adam-Astor-SHM.jpg",
    title: "Adam Astor SHM",
  },
  {
    slug: "adam-coltons-summer-vacation",
    src: "https://assets.skatehousemedia.com/Adam-Coltons-Summer-Vacation.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Adam-Coltons-Summer-Vacation.jpg",
    title: "Adam Coltons Summer Vacation",
  },
  {
    slug: "aidan-spain-raw-run-skatehouse",
    src: "https://assets.skatehousemedia.com/Aidan-Spain-Raw-Run-Skatehouse.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Aidan-Spain-Raw-Run-Skatehouse.jpg",
    title: "Aidan Spain Raw Run Skatehouse",
  },
  {
    slug: "ali-learning-curve",
    src: "https://assets.skatehousemedia.com/ALI-LEARING-CURVE.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/ALI-LEARING-CURVE.jpg",
    title: "Learning Curve: Ali",
  },
  {
    slug: "ali-nas-shm",
    src: "https://assets.skatehousemedia.com/Ali-Nas-SHM.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Ali-Nas-SHM.jpg",
    title: "Ali Nas",
  },
  {
    slug: "all-in-a-day",
    src: "https://assets.skatehousemedia.com/All-in-a-Day.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/All-in-a-Day.jpg",
    title: "All in a Day",
  },
  {
    slug: "all-stars-slide-jam",
    src: "https://assets.skatehousemedia.com/all-stars-slide-jam.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/all-stars-slide-jam.jpg",
    title: "All-Starts Slide Jam",
  },
  {
    slug: "all",
    src: "https://assets.skatehousemedia.com/ALL.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/ALL.jpg",
    title: "All",
  },
  {
    slug: "almabtriebrawrun2013",
    src: "https://assets.skatehousemedia.com/AlmabtriebRawRun2013.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/AlmabtriebRawRun2013.jpg",
    title: "Raw Run: Almatrieb 2013",
  },
  {
    slug: "anaconda-edit",
    src: "https://assets.skatehousemedia.com/anaconda-edit.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/anaconda-edit.jpg",
    title: "Anaconda",
  },
  {
    slug: "anaconda",
    src: "https://assets.skatehousemedia.com/Anaconda.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Anaconda.jpg",
    title: "Anaconda???",
  },
  {
    slug: "andres-zarate-2",
    src: "https://assets.skatehousemedia.com/Andres-Zarate-2.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Andres-Zarate-2.jpg",
    title: "Andres Zarate 2",
  },
  {
    slug: "angelopolis-outlaw",
    src: "https://assets.skatehousemedia.com/Angelopolis-Outlaw.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Angelopolis-Outlaw.jpg",
    title: "Angelopolis Outlaw",
  },
  {
    slug: "angies-speed-bump-crashes",
    src: "https://assets.skatehousemedia.com/Angies-Speed-Bump-Crashes.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Angies-Speed-Bump-Crashes.jpg",
    title: "Angies Speed Bump Crashes",
  },
  {
    slug: "archives-ditch-slap-09",
    src: "https://assets.skatehousemedia.com/Archives-Ditch-Slap-09.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Archives-Ditch-Slap-09.jpg",
    title: "Archives: Ditch Slap 09",
  },
  {
    slug: "asheville-edit",
    src: "https://assets.skatehousemedia.com/Asheville-Edit.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Asheville-Edit.jpg",
    title: "Asheville",
  },
  {
    slug: "attention-deficit-session",
    src: "https://assets.skatehousemedia.com/Attention-Deficit-Session.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Attention-Deficit-Session.jpg",
    title: "Attention Deficit Session",
  },
  {
    slug: "austin-pedroni-raw-ish-run",
    src: "https://assets.skatehousemedia.com/Austin-Pedroni-Raw-ish-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Austin-Pedroni-Raw-ish-Run.jpg",
    title: "Austin Pedroni Raw-ish Run",
  },
  {
    slug: "axel-angies-deep-short",
    src: "https://assets.skatehousemedia.com/axel-angies-deep-short.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/axel-angies-deep-short.jpg",
    title: "Axel Angies Deep Short",
  },
  {
    slug: "axel-barcelona-1",
    src: "https://assets.skatehousemedia.com/Axel-Barcelona1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Axel-Barcelona1.jpg",
    title: "Axel Barcelona 1",
  },
  {
    slug: "axel-barcelona-2",
    src: "https://assets.skatehousemedia.com/Axel-Barcelona-2.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Axel-Barcelona-2.jpg",
    title: "Axel Barcelona 2",
  },
  {
    slug: "axel-bcn-shm",
    src: "https://assets.skatehousemedia.com/Axel-BCN-SHM.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Axel-BCN-SHM.jpg",
    title: "Axel BCN",
  },
  {
    slug: "axel-in-barcelona",
    src: "https://assets.skatehousemedia.com/Axel-in-Barcelona.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Axel-in-Barcelona.jpg",
    title: "Axel in Barcelona",
  },
  {
    slug: "axel-shm",
    src: "https://assets.skatehousemedia.com/Axel-SHM.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Axel-SHM.jpg",
    title: "Axel",
  },
  {
    slug: "backyard-blues",
    src: "https://assets.skatehousemedia.com/Backyard-Blues.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Backyard-Blues.jpg",
    title: "Backyard Blues",
  },
  {
    slug: "barna-bacon-slide-jam",
    src: "https://assets.skatehousemedia.com/Barna-Bacon-Slide-Jam.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Barna-Bacon-Slide-Jam.jpg",
    title: "Barna Bacon Slide Jam",
  },
  {
    slug: "barrett-junction-outlaw-2011",
    src: "https://assets.skatehousemedia.com/Barrett-Junction-Outlaw-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Barrett-Junction-Outlaw-2011.jpg",
    title: "Barrett Junction Outlaw 2011",
  },
  {
    slug: "batesrun",
    src: "https://assets.skatehousemedia.com/batesrun.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/batesrun.jpg",
    title: "Bates Run",
  },
  {
    slug: "bay-sessions",
    src: "https://assets.skatehousemedia.com/Bay-Sessions.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Bay-Sessions.jpg",
    title: "Bay Sessions",
  },
  {
    slug: "bbdh-race-footage",
    src: "https://assets.skatehousemedia.com/BBDH-Race-Footage.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/BBDH-Race-Footage.jpg",
    title: "BBDH Race Footage",
  },
  {
    slug: "bda-does-boulder",
    src: "https://assets.skatehousemedia.com/BDA-does-Boulder.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/BDA-does-Boulder.jpg",
    title: "BDA Does Boulder",
  },
  {
    slug: "beast-coast",
    src: "https://assets.skatehousemedia.com/Beast-Coast.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Beast-Coast.jpg",
    title: "Beast Coast",
  },
  {
    slug: "bees-steez-slide-jam",
    src: "https://assets.skatehousemedia.com/Bees-Steez-Slide-Jam.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Bees-Steez-Slide-Jam.jpg",
    title: "Bees Steez Slide Jam",
  },
  {
    slug: "bela-joyride-2015",
    src: "https://assets.skatehousemedia.com/Bela-JoyRide-2015.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Bela-JoyRide-2015.jpg",
    title: "Bela JoyRide 2015",
  },
  {
    slug: "ben-dub-hits-a-guardrail",
    src: "https://assets.skatehousemedia.com/Ben-Dub-hits-a-Guardrail.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ben-Dub-hits-a-Guardrail.jpg",
    title: "Ben Dub Hits a Guardrail",
  },
  {
    slug: "ben-hot-pants",
    src: "https://assets.skatehousemedia.com/Ben-Hot-Pants.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ben-Hot-Pants.jpg",
    title: "Ben Hot Pants",
  },
  {
    slug: "benny-ds-not-so-magic-puck-004",
    src: "https://assets.skatehousemedia.com/Benny-Ds-Not-So-Magic-Puck-004.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Benny-Ds-Not-So-Magic-Puck-004.jpg",
    title: "Benny Ds Not So Magic Puck",
  },
  {
    slug: "best-of-2010-compilation-part-1",
    src: "https://assets.skatehousemedia.com/Best-of-2010-Compilation-Part-1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Best-of-2010-Compilation-Part-1.jpg",
    title: "Best of 2010 Compilation Part 1",
  },
  {
    slug: "best-of-2010-compilation-part-2",
    src: "https://assets.skatehousemedia.com/Best-of-2010-Compilation-Part-2.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Best-of-2010-Compilation-Part-2.jpg",
    title: "Best of 2010 Compilation Part 2",
  },
  {
    slug: "best-of-2013-max-dubler-edition",
    src: "https://assets.skatehousemedia.com/Best-of-2013-Max-Dubler-Edition.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Best-of-2013-Max-Dubler-Edition.jpg",
    title: "Best of 2013 Max Dubler Edition",
  },
  {
    slug: "beware-nicolas-marty",
    src: "https://assets.skatehousemedia.com/beware-nicolas-marty.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/beware-nicolas-marty.jpg",
    title: "Beware Nicolas Marty",
  },
  {
    slug: "big-dave-micd-at-the-slap",
    src: "https://assets.skatehousemedia.com/Big-Dave-Micd-at-the-SLAP.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Big-Dave-Micd-at-the-SLAP.jpg",
    title: "Big Dave Micd at the SLAP",
  },
  {
    slug: "big-poppa-schep-s1-lifer-helmet",
    src: "https://assets.skatehousemedia.com/Big-Poppa-Schep-S1-Lifer-Helmet.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Big-Poppa-Schep-S1-Lifer-Helmet.jpg",
    title: "Big Poppa Schep S1 Lifer Helmet",
  },
  {
    slug: "bigboy",
    src: "https://assets.skatehousemedia.com/BIGBOY.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/BIGBOY.jpg",
    title: "BIGBOY",
  },
  {
    slug: "billy-and-zak-do-la",
    src: "https://assets.skatehousemedia.com/Billy-And-Zak-Do-LA.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Billy-And-Zak-Do-LA.jpg",
    title: "Billy And Zak Do LA",
  },
  {
    slug: "black-easter-raw-run-louis-pilloni",
    src: "https://assets.skatehousemedia.com/Black-Easter-Raw-Run-Louis-Pilloni.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Black-Easter-Raw-Run-Louis-Pilloni.jpg",
    title: "Black Easter Raw Run Louis Pilloni",
  },
  {
    slug: "black-top-and-big-bird",
    src: "https://assets.skatehousemedia.com/Black-Top-and-Big-Bird.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Black-Top-and-Big-Bird.jpg",
    title: "Black Top and Big Bird",
  },
  {
    slug: "blacktop-freeride",
    src: "https://assets.skatehousemedia.com/Blacktop-Freeride.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Blacktop-Freeride.jpg",
    title: "Blacktop Freeride",
  },
  {
    slug: "blaxel",
    src: "https://assets.skatehousemedia.com/blaxel.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/blaxel.jpg",
    title: "Blaxel",
  },
  {
    slug: "bobby-k-on-matts-rash",
    src: "https://assets.skatehousemedia.com/Bobby-k-on-matts-rash.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Bobby-k-on-matts-rash.jpg",
    title: "Bobby K on Matts Rash",
  },
  {
    slug: "bogota-finals",
    src: "https://assets.skatehousemedia.com/Bogota-Finals.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Bogota-Finals.jpg",
    title: "Bogota Finals",
  },
  {
    slug: "bonelli-weekend",
    src: "https://assets.skatehousemedia.com/Bonelli-Weekend.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Bonelli-Weekend.jpg",
    title: "Bonellie Weekend",
  },
  {
    slug: "bonus-footage",
    src: "https://assets.skatehousemedia.com/Bonus-Footage.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Bonus-Footage.jpg",
    title: "Bonus Footage",
  },
  {
    slug: "borderland-final",
    src: "https://assets.skatehousemedia.com/Borderland-final.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Borderland-final.jpg",
    title: "Borderland",
  },
  {
    slug: "boulder-creek-final",
    src: "https://assets.skatehousemedia.com/Boulder-creek-final.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Boulder-creek-final.jpg",
    title: "Boulder Creek",
  },
  {
    slug: "bps-shm",
    src: "https://assets.skatehousemedia.com/bps-shm.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/bps-shm.jpg",
    title: "BPs",
  },
  {
    slug: "braden-north-van",
    src: "https://assets.skatehousemedia.com/Braden-North-Van.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Braden-North-Van.jpg",
    title: "Braden North Van",
  },
  {
    slug: "brian-and-spacers",
    src: "https://assets.skatehousemedia.com/Brian-and-Spacers.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Brian-and-Spacers.jpg",
    title: "Brian and Spacers",
  },
  {
    slug: "brian-cortright-in-south-africa",
    src: "https://assets.skatehousemedia.com/Brian-Cortright-in-South-Africa.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Brian-Cortright-in-South-Africa.jpg",
    title: "Chubbs in South Africa",
  },
  {
    slug: "brian-holden-raw-run",
    src: "https://assets.skatehousemedia.com/Brian-Holden-Raw-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Brian-Holden-Raw-Run.jpg",
    title: "Raw Run: Brian Holden",
  },
  {
    slug: "brian-peck-and-max-erwin",
    src: "https://assets.skatehousemedia.com/Brian-Peck-and-Max-Erwin.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Brian-Peck-and-Max-Erwin.jpg",
    title: "Brian Peck and Max Erwin",
  },
  {
    slug: "brian-peck-and-smaller-swiss",
    src: "https://assets.skatehousemedia.com/Brian-Peck-and-Smaller-Swiss.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Brian-Peck-and-Smaller-Swiss.jpg",
    title: "Brian-Peck-and-Smaller-Swiss",
  },
  {
    slug: "britannia2013",
    src: "https://assets.skatehousemedia.com/Britannia2013.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Britannia2013.jpg",
    title: "Britannia 2013",
  },
  {
    slug: "broadway-bomb-2011",
    src: "https://assets.skatehousemedia.com/Broadway-Bomb-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Broadway-Bomb-2011.jpg",
    title: "Broadway Bomb 2011",
  },
  {
    slug: "broadway-bomb-2013",
    src: "https://assets.skatehousemedia.com/Broadway-Bomb-2013.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Broadway-Bomb-2013.jpg",
    title: "Broadway Bomb 2013",
  },
  {
    slug: "bu-fun",
    src: "https://assets.skatehousemedia.com/Bu-Fun.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Bu-Fun.jpg",
    title: "Bu Fun",
  },
  {
    slug: "buffalo-bill-downhill-2010-final-heat",
    src: "https://assets.skatehousemedia.com/Buffalo-Bill-Downhill-2010-Final-Heat.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Buffalo-Bill-Downhill-2010-Final-Heat.jpg",
    title: "Buffalo Bill Downhill 2010 Final Heat",
  },
  {
    slug: "buffalo-bill-downhill-raw-run",
    src: "https://assets.skatehousemedia.com/Buffalo-Bill-Downhill-Raw-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Buffalo-Bill-Downhill-Raw-Run.jpg",
    title: "Buffalo Bill Downhill Raw Run",
  },
  {
    slug: "byron-essert-skating-a-classic",
    src: "https://assets.skatehousemedia.com/Byron-Essert-skating-a-Classic.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Byron-Essert-skating-a-Classic.jpg",
    title: "Byron Essert Skating a Classic",
  },
  {
    slug: "byronandliamshm",
    src: "https://assets.skatehousemedia.com/ByronandliamSHM.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/ByronandliamSHM.jpg",
    title: "Byron and Liam",
  },
  {
    slug: "calgaryrawrun",
    src: "https://assets.skatehousemedia.com/CalgaryRawrun.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/CalgaryRawrun.jpg",
    title: "Raw Run: Calgary",
  },
  {
    slug: "cali-bonus-shm",
    src: "https://assets.skatehousemedia.com/Cali-Bonus-SHM.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cali-Bonus-SHM.jpg",
    title: "Cali Bonus",
  },
  {
    slug: "caliber-in-hawaii",
    src: "https://assets.skatehousemedia.com/Caliber-In-Hawaii.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Caliber-In-Hawaii.jpg",
    title: "Caliber In Hawaii",
  },
  {
    slug: "caliber-mini-ramp-video",
    src: "https://assets.skatehousemedia.com/Caliber-Mini-Ramp-Video.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Caliber-Mini-Ramp-Video.jpg",
    title: "Caliber Mini Ramp Video",
  },
  {
    slug: "casey-morrow-skates-wallows",
    src: "https://assets.skatehousemedia.com/Casey-Morrow-skates-Wallows.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Casey-Morrow-skates-Wallows.jpg",
    title: "Casey Morrow Skates Wallows",
  },
  {
    slug: "catalina-classic-2013",
    src: "https://assets.skatehousemedia.com/Catalina-Classic-2013.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Catalina-Classic-2013.jpg",
    title: "Catalina Classic 2013",
  },
  {
    slug: "catalina-classic-2015",
    src: "https://assets.skatehousemedia.com/Catalina-Classic-2015.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Catalina-Classic-2015.jpg",
    title: "Catalina Classic 2015",
  },
  {
    slug: "catalina-classic-iii-raw-run",
    src: "https://assets.skatehousemedia.com/Catalina-Classic-III-Raw-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Catalina-Classic-III-Raw-Run.jpg",
    title: "Raw Run: Catalina Classic III",
  },
  {
    slug: "catamaran-race",
    src: "https://assets.skatehousemedia.com/Catamaran-Race.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Catamaran-Race.jpg",
    title: "Catamaran Race",
  },
  {
    slug: "cathlamet-2011",
    src: "https://assets.skatehousemedia.com/Cathlamet-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cathlamet-2011.jpg",
    title: "Cathlamet 2011",
  },
  {
    slug: "cathlamet-champion-james-kelly-2010",
    src: "https://assets.skatehousemedia.com/Cathlamet-Champion-James-Kelly-2010.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cathlamet-Champion-James-Kelly-2010.jpg",
    title: "Cathlamet 2010 Champion: James Kelly",
  },
  {
    slug: "cathlamet-downhill-corral-boarder-cross-and-slopestyle",
    src: "https://assets.skatehousemedia.com/Cathlamet-Downhill-Corral-Boarder-Cross-and-Slopestyle.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cathlamet-Downhill-Corral-Boarder-Cross-and-Slopestyle.jpg",
    title: "Cathlamet Downhill Corral: Boarder Cross and Slopestyle",
  },
  {
    slug: "cathlamet-downhill-corral-semi-final-heat-1",
    src: "https://assets.skatehousemedia.com/Cathlamet-Downhill-Corral-Semi-Final-Heat-1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cathlamet-Downhill-Corral-Semi-Final-Heat-1.jpg",
    title: "Cathlamet Downhill Corral: Semi-Final Heat 1",
  },
  {
    slug: "cathlamet-maryhill-ratz-boarder-cross",
    src: "https://assets.skatehousemedia.com/Cathlamet-Maryhill-Ratz-Boarder-Cross.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cathlamet-Maryhill-Ratz-Boarder-Cross.jpg",
    title: "Cathlamet Maryhill Ratz Boarder Cross",
  },
  {
    slug: "chela-shm",
    src: "https://assets.skatehousemedia.com/Chela-SHM.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Chela-SHM.jpg",
    title: "Chela",
  },
  {
    slug: "chilling-on-franken",
    src: "https://assets.skatehousemedia.com/Chilling-on-Franken.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Chilling-on-Franken.jpg",
    title: "Chilling on Franken",
  },
  {
    slug: "chris-and-james",
    src: "https://assets.skatehousemedia.com/Chris-and-James.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Chris-and-James.jpg",
    title: "Chris and James",
  },
  {
    slug: "christmas-in-socal",
    src: "https://assets.skatehousemedia.com/Christmas-in-Socal.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Christmas-in-Socal.jpg",
    title: "Christmas in Socal",
  },
  {
    slug: "closest-hill-to-the-house",
    src: "https://assets.skatehousemedia.com/Closest-Hill-to-the-House.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Closest-Hill-to-the-House.jpg",
    title: "Closest Hill to the House",
  },
  {
    slug: "colorado-sessions-summer-2011",
    src: "https://assets.skatehousemedia.com/Colorado-Sessions-Summer-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Colorado-Sessions-Summer-2011.jpg",
    title: "Colorado Sessions Summer 2011",
  },
  {
    slug: "comet-ithaca-skate-jam",
    src: "https://assets.skatehousemedia.com/Comet-Ithaca-Skate-Jam.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Comet-Ithaca-Skate-Jam.jpg",
    title: "Comet Ithaca Skate Jam",
  },
  {
    slug: "community-anaconda",
    src: "https://assets.skatehousemedia.com/Community-Anaconda.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Community-Anaconda.jpg",
    title: "Community: Anaconda",
  },
  {
    slug: "community-the-island",
    src: "https://assets.skatehousemedia.com/Community-The-Island.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Community-The-Island.jpg",
    title: "Community: The Island",
  },
  {
    slug: "conner-stanek-part-ii",
    src: "https://assets.skatehousemedia.com/Conner-Stanek-Part-II.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Conner-Stanek-Part-II.jpg",
    title: "Conner Stanek Part II",
  },
  {
    slug: "conner-stanek-shm",
    src: "https://assets.skatehousemedia.com/Conner-Stanek-SHM.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Conner-Stanek-SHM.jpg",
    title: "Conner Stanek Part I",
  },
  {
    slug: "coop-and-matt",
    src: "https://assets.skatehousemedia.com/Coop-and-Matt.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Coop-and-Matt.jpg",
    title: "Coop and Matt",
  },
  {
    slug: "cooper-and-ian-get-grimey",
    src: "https://assets.skatehousemedia.com/Cooper-and-Ian-Get-Grimey.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cooper-and-Ian-Get-Grimey.jpg",
    title: "Cooper and Ian Get Grimey",
  },
  {
    slug: "cooper-colombia-shm-1",
    src: "https://assets.skatehousemedia.com/Cooper-Colombia-SHM-1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Cooper-Colombia-SHM-1.jpg",
    title: "Cooper in Colombia Part I",
  },
  {
    slug: "cooper-shm-2",
    src: "https://assets.skatehousemedia.com/Cooper-SHM-2.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Cooper-SHM-2.jpg",
    title: "Cooper in Colombia Part II",
  },
  {
    slug: "cooper-shm-3",
    src: "https://assets.skatehousemedia.com/Cooper-SHM-3.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Cooper-SHM-3.jpg",
    title: "Cooper in Colombia Part III",
  },
  {
    slug: "crab-style",
    src: "https://assets.skatehousemedia.com/Crab-Style.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Crab-Style.jpg",
    title: "Crab Style",
  },
  {
    slug: "crafty-raw",
    src: "https://assets.skatehousemedia.com/CRAFTY-RAW.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/CRAFTY-RAW.jpg",
    title: "Raw Run: Crafty",
  },
  {
    slug: "crash-and-burn-fer-bailleres",
    src: "https://assets.skatehousemedia.com/Crash-and-Burn-Fer-Bailleres.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Crash-and-Burn-Fer-Bailleres.jpg",
    title: "Crash and Burn: Fer Bailleres",
  },
  {
    slug: "crash-and-burnjames-vs-stairs",
    src: "https://assets.skatehousemedia.com/Crash-and-BurnJames-vs-Stairs.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Crash-and-BurnJames-vs-Stairs.jpg",
    title: "Crash and Burn: James vs Stairs",
  },
  {
    slug: "daddy-cool",
    src: "https://assets.skatehousemedia.com/daddy-cool.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/daddy-cool.jpg",
    title: "Daddy Cool",
  },
  {
    slug: "dakine",
    src: "https://assets.skatehousemedia.com/DaKine.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/DaKine.jpg",
    title: "DaKine",
  },
  {
    slug: "danger-bay-10-finals",
    src: "https://assets.skatehousemedia.com/Danger-Bay-10-Finals.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Danger-Bay-10-Finals.jpg",
    title: "Danger Bay 10 Finals",
  },
  {
    slug: "danger-bay-11-finals",
    src: "https://assets.skatehousemedia.com/Danger-Bay-11-Finals.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Danger-Bay-11-Finals.jpg",
    title: "Danger Bay 11 Finals",
  },
  {
    slug: "danger-bay-to-la-part-2",
    src: "https://assets.skatehousemedia.com/Danger-Bay-to-LA-part-2.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Danger-Bay-to-LA-part-2.jpg",
    title: "Danger Bay to LA Part 2",
  },
  {
    slug: "darryl-freeman-berkeley-hills",
    src: "https://assets.skatehousemedia.com/Darryl-Freeman-Berkeley-Hills.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Darryl-Freeman-Berkeley-Hills.jpg",
    title: "Darryl Freeman Berkeley Hills",
  },
  {
    slug: "darryl-freeman-crusin",
    src: "https://assets.skatehousemedia.com/Darryl-Freeman-crusin.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Darryl-Freeman-crusin.jpg",
    title: "Darryl Freeman Crusin",
  },
  {
    slug: "day-1-germs-copy-01_1",
    src: "https://assets.skatehousemedia.com/day-1-germs-Copy-01_1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/day-1-germs-Copy-01_1.jpg",
    title: "Day 1 Germs",
  },
  {
    slug: "deitch-tucan",
    src: "https://assets.skatehousemedia.com/DEITCH-TUCAN.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/DEITCH-TUCAN.jpg",
    title: "Deitch Tucan",
  },
  {
    slug: "ditch-slap-2010",
    src: "https://assets.skatehousemedia.com/Ditch-Slap-2010.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ditch-Slap-2010.jpg",
    title: "Ditch Slap 2010",
  },
  {
    slug: "ditch-slap-day-1-quick-clip",
    src: "https://assets.skatehousemedia.com/Ditch-Slap-Day-1-Quick-Clip.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ditch-Slap-Day-1-Quick-Clip.jpg",
    title: "Quick Clip: Ditch Slap Day 1",
  },
  {
    slug: "ditch-slap-day-2-quick-clip",
    src: "https://assets.skatehousemedia.com/Ditch-Slap-Day-2-Quick-Clip.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ditch-Slap-Day-2-Quick-Clip.jpg",
    title: "Quick Clip: Ditch Slap Day 2",
  },
  {
    slug: "ditch-slap-quick-clip-day-3",
    src: "https://assets.skatehousemedia.com/Ditch-Slap-Quick-Clip-Day-3.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ditch-Slap-Quick-Clip-Day-3.jpg",
    title: "Quick Clip: Ditch Slap Day 3",
  },
  {
    slug: "ditchslap",
    src: "https://assets.skatehousemedia.com/DITCHSLAP.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/DITCHSLAP.jpg",
    title: "Ditchslap",
  },
  {
    slug: "dominican-republic",
    src: "https://assets.skatehousemedia.com/Dominican-Republic.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Dominican-Republic.jpg",
    title: "Dominican Republic",
  },
  {
    slug: "dont-die",
    src: "https://assets.skatehousemedia.com/Dont-die.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Dont-die.jpg",
    title: "Dont Die",
  },
  {
    slug: "dont-get-slapped",
    src: "https://assets.skatehousemedia.com/Dont-Get-Slapped.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Dont-Get-Slapped.jpg",
    title: "Dont Get Slapped",
  },
  {
    slug: "dont-sweat-it",
    src: "https://assets.skatehousemedia.com/Dont-Sweat-It.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Dont-Sweat-It.jpg",
    title: "Dont Sweat It",
  },
  {
    slug: "dont-trust-duke",
    src: "https://assets.skatehousemedia.com/Dont-trust-Duke.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Dont-trust-Duke.jpg",
    title: "Dont Trust Duke",
  },
  {
    slug: "drop-teaser",
    src: "https://assets.skatehousemedia.com/Drop-Teaser.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Drop-Teaser.jpg",
    title: "Drop Teaser",
  },
  {
    slug: "dubstep-nyan",
    src: "https://assets.skatehousemedia.com/Dubstep-Nyan.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Dubstep-Nyan.jpg",
    title: "Dubstep Nyan",
  },
  {
    slug: "ekstremsportveko-saturday",
    src: "https://assets.skatehousemedia.com/Ekstremsportveko-Saturday.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Ekstremsportveko-Saturday.jpg",
    title: "Ekstremsportveko Saturday",
  },
  {
    slug: "el-gringo-negro",
    src: "https://assets.skatehousemedia.com/El-Gringo-Negro.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/El-Gringo-Negro.jpg",
    title: "El Gringo Negro",
  },
  {
    slug: "el-salvador",
    src: "https://assets.skatehousemedia.com/El-Salvador.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/El-Salvador.jpg",
    title: "El Salvador",
  },
  {
    slug: "emma-daigle-at-knk",
    src: "https://assets.skatehousemedia.com/Emma-Daigle-at-KNK.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Emma-Daigle-at-KNK.jpg",
    title: "Emma Daigle at KNK",
  },
  {
    slug: "euro-road-trip-with-danny-carlson",
    src: "https://assets.skatehousemedia.com/Euro-Road-Trip-with-Danny-Carlson.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Road-Trip-with-Danny-Carlson.jpg",
    title: "Euro Road Trip with Danny Carlson",
  },
  {
    slug: "euro-tour-2012-part-2-special-place",
    src: "https://assets.skatehousemedia.com/Euro-Tour-2012-Part-2-Special-Place.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-2012-Part-2-Special-Place.jpg",
    title: "Euro Tour 2012 Part 2: Special Place",
  },
  {
    slug: "euro-tour-2012-part-3-igsa-padova",
    src: "https://assets.skatehousemedia.com/Euro-Tour-2012-Part-3-IGSA-Padova.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-2012-Part-3-IGSA-Padova.jpg",
    title: "Euro TOur 2012 Part 3: IGSA Padova",
  },
  {
    slug: "euro-tour-2012-part-3-land-boat-special",
    src: "https://assets.skatehousemedia.com/Euro-Tour-2012-Part-3-Land-Boat-Special.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-2012-Part-3-Land-Boat-Special.jpg",
    title: "Euro Tour 2012 Part 4: Land Boat Special",
  },
  {
    slug: "euro-tour-2012-part-5-session-with-the-s9-italy-crew",
    src: "https://assets.skatehousemedia.com/Euro-Tour-2012-Part-5-Session-with-the-S9-Italy-Crew.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-2012-Part-5-Session-with-the-S9-Italy-Crew.jpg",
    title: "Euro Tour 2012 Part 4: Session with the S9 Italy Crew",
  },
  {
    slug: "euro-tour-part-1-norway",
    src: "https://assets.skatehousemedia.com/Euro-Tour-Part-1-Norway.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-Part-1-Norway.mp4",
    title: "Euro Tour Part 1: Norway",
  },
  {
    slug: "euro-tour-part-2-voss-downhill-championship",
    src: "https://assets.skatehousemedia.com/Euro-Tour-Part-2-Voss-Downhill-Championship.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-Part-2-Voss-Downhill-Championship.jpg",
    title: "Euro Tour Part 2: Voss Downhill Championship",
  },
  {
    slug: "euro-tour-part-3",
    src: "https://assets.skatehousemedia.com/Euro-Tour-Part-3.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-Part-3.jpg",
    title: "Euro Tour Part 3",
  },
  {
    slug: "euro-tour-part-4-sweden",
    src: "https://assets.skatehousemedia.com/Euro-Tour-Part-4-Sweden.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Euro-Tour-Part-4-Sweden.jpg",
    title: "Euro Tour Part 4: Sweden",
  },
  {
    slug: "event-2012-mt-kiera-dh-challenge",
    src: "https://assets.skatehousemedia.com/Event-2012-Mt-Kiera-DH-Challenge.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-2012-Mt-Kiera-DH-Challenge.jpg",
    title: "Event: Mt Kiera DH Challenge 2012",
  },
  {
    slug: "event-coast-slide-jam",
    src: "https://assets.skatehousemedia.com/Event-Coast-Slide-Jam.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coast-Slide-Jam.jpg",
    title: "Event: Coast Slide Jam",
  },
  {
    slug: "event-collingrove-cup",
    src: "https://assets.skatehousemedia.com/Event-Collingrove-Cup.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Collingrove-Cup.jpg",
    title: "Event: Collingrove Cup",
  },
  {
    slug: "event-coverage-britannia-classic-open-final",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Britannia-Classic-Open-Final.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Britannia-Classic-Open-Final.jpg",
    title: "Event: Britannia Classic Open Final",
  },
  {
    slug: "event-coverage-buffalo-bill",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Buffalo-Bill.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Buffalo-Bill.jpg",
    title: "Event: Buffalo Bill",
  },
  {
    slug: "event-coverage-el-bueno-freeride-2017",
    src: "https://assets.skatehousemedia.com/Event-Coverage-El-Bueno-Freeride-2017.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-El-Bueno-Freeride-2017.jpg",
    title: "Event: El Bueno Freeride 2017",
  },
  {
    slug: "event-coverage-first-round-peyragudes",
    src: "https://assets.skatehousemedia.com/Event-Coverage-First-Round-Peyragudes.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-First-Round-Peyragudes.jpg",
    title: "Event: Peyragudes First Round",
  },
  {
    slug: "event-coverage-muir-skates-downhill-disco",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Muir-Skates-Downhill-Disco.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Muir-Skates-Downhill-Disco.jpg",
    title: "Event: Muir Skate Downhill Disco",
  },
  {
    slug: "event-coverage-skate-sun-peaks",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Skate-Sun-Peaks.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Skate-Sun-Peaks.jpg",
    title: "Event: Skate Sun Peaks",
  },
  {
    slug: "event-coverage-switchbacks",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Switchbacks.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Switchbacks.jpg",
    title: "Event: Switchbacks",
  },
  {
    slug: "event-coverage-titaweekend",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Titaweekend.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Titaweekend.jpg",
    title: "Event: Titaweekend",
  },
  {
    slug: "event-coverage-wham-bam-666",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Wham-Bam-666.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Wham-Bam-666.jpg",
    title: "Event: Wham Bam 666",
  },
  {
    slug: "event-coverage-wham-bam-slide-jam-4",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Wham-Bam-Slide-Jam-4.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Wham-Bam-Slide-Jam-4.jpg",
    title: "Event: Wham Bam 4",
  },
  {
    slug: "event-coverage-whistler-quarter-final-heats",
    src: "https://assets.skatehousemedia.com/Event-Coverage-Whistler-Quarter-Final-Heats.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-Whistler-Quarter-Final-Heats.jpg",
    title: "Event: Whistler Quarter Final Heats",
  },
  {
    slug: "event-coverage-ww3-womens-final",
    src: "https://assets.skatehousemedia.com/Event-Coverage-WW3-Womens-FInal.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Coverage-WW3-Womens-FInal.jpg",
    title: "Event: WW3 Womens Final",
  },
  {
    slug: "event-giants-head-freeride-2015",
    src: "https://assets.skatehousemedia.com/Event-Giants-Head-Freeride-2015.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Giants-Head-Freeride-2015.jpg",
    title: "Event: Giants Head Freeride 2015",
  },
  {
    slug: "event-giants-head-freeride-dayz",
    src: "https://assets.skatehousemedia.com/Event-Giants-Head-Freeride-Dayz.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Giants-Head-Freeride-Dayz.jpg",
    title: "Event: Giants Head Freeride Dayz",
  },
  {
    slug: "event-giants-head-teaser",
    src: "https://assets.skatehousemedia.com/Event-Giants-Head-Teaser.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Giants-Head-Teaser.jpg",
    title: "Event: Giants Head Teaser",
  },
  {
    slug: "event-igsa-winsport-final-run",
    src: "https://assets.skatehousemedia.com/Event-IGSA-WinSport-Final-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-IGSA-WinSport-Final-Run.jpg",
    title: "Event: IGSA Winsport Final",
  },
  {
    slug: "event-kewlona-skylands-2012",
    src: "https://assets.skatehousemedia.com/Event-Kewlona-Skylands-2012.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Kewlona-Skylands-2012.jpg",
    title: "Event: Kelowna Skylands 2012",
  },
  {
    slug: "event-santa-barbara-slide-jam-2010",
    src: "https://assets.skatehousemedia.com/Event-Santa-Barbara-Slide-Jam-2010.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Santa-Barbara-Slide-Jam-2010.jpg",
    title: "Event: Santa Barbara Slide Jam 2010",
  },
  {
    slug: "event-spring-maryhill-freeride-2011",
    src: "https://assets.skatehousemedia.com/Event-Spring-Maryhill-Freeride-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Spring-Maryhill-Freeride-2011.jpg",
    title: "Event: Maryhill Freeride 2011",
  },
  {
    slug: "event-the-scorcher",
    src: "https://assets.skatehousemedia.com/Event-The-Scorcher.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-The-Scorcher.jpg",
    title: "Event: The Scorcher",
  },
  {
    slug: "event-wild-wild-west",
    src: "https://assets.skatehousemedia.com/Event-Wild-Wild-West.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Event-Wild-Wild-West.jpg",
    title: "Event: Wild Wild West",
  },
  {
    slug: "events-atomic-bomb",
    src: "https://assets.skatehousemedia.com/Events-Atomic-Bomb.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Atomic-Bomb.jpg",
    title: "Event: Atomic bomb",
  },
  {
    slug: "events-barrett-junction-outlaw-2010",
    src: "https://assets.skatehousemedia.com/Events-Barrett-Junction-Outlaw-2010.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Barrett-Junction-Outlaw-2010.jpg",
    title: "Event: Barrett Junction Outlaw 2010",
  },
  {
    slug: "events-britannia-classic-freeride",
    src: "https://assets.skatehousemedia.com/Events-Britannia-Classic-Freeride.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Britannia-Classic-Freeride.jpg",
    title: "Event: Britannia Classic Freeride",
  },
  {
    slug: "events-comet-ridge-slopestyle",
    src: "https://assets.skatehousemedia.com/Events-Comet-Ridge-Slopestyle.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Comet-Ridge-Slopestyle.jpg",
    title: "Event: Comet Ridge Slopestyle",
  },
  {
    slug: "events-dh-throwdown",
    src: "https://assets.skatehousemedia.com/Events-DH-Throwdown.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-DH-Throwdown.jpg",
    title: "Event: DH Throwdown",
  },
  {
    slug: "events-downhill-disco",
    src: "https://assets.skatehousemedia.com/Events-Downhill-Disco.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Downhill-Disco.jpg",
    title: "Event: Downhill Disco",
  },
  {
    slug: "events-dump-road-outlaw",
    src: "https://assets.skatehousemedia.com/Events-Dump-Road-Outlaw.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Dump-Road-Outlaw.jpg",
    title: "Event: Dump Road Outlaw",
  },
  {
    slug: "events-hawaii-death-slalom",
    src: "https://assets.skatehousemedia.com/Events-Hawaii-Death-Slalom.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Hawaii-Death-Slalom.jpg",
    title: "Event: Hawaii Death Slalom",
  },
  {
    slug: "events-kelowna-skylands-2011",
    src: "https://assets.skatehousemedia.com/Events-Kelowna-Skylands-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Kelowna-Skylands-2011.jpg",
    title: "Event: Kelowna Skylands 2011",
  },
  {
    slug: "events-kozakov-2012",
    src: "https://assets.skatehousemedia.com/Events-Kozakov-2012.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Kozakov-2012.jpg",
    title: "Event: Kozakov 2012",
  },
  {
    slug: "events-maryhill-freeride-raw-run",
    src: "https://assets.skatehousemedia.com/Events-Maryhill-Freeride-Raw-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Maryhill-Freeride-Raw-Run.jpg",
    title: "Event: Maryhill Freeride Raw Run",
  },
  {
    slug: "events-san-pedro-shred",
    src: "https://assets.skatehousemedia.com/Events-San-Pedro-Shred.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-San-Pedro-Shred.jpg",
    title: "Event: San Pedro Shred",
  },
  {
    slug: "events-vernon-dh-2011",
    src: "https://assets.skatehousemedia.com/Events-Vernon-DH-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Events-Vernon-DH-2011.jpg",
    title: "Event: Vernon DH 2011",
  },
  {
    slug: "facetime-brian-peck-and-skatesgiving",
    src: "https://assets.skatehousemedia.com/Facetime-Brian-Peck-and-Skatesgiving.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Facetime-Brian-Peck-and-Skatesgiving.jpg",
    title: "Facetime: Brian Peck and Skatesgiving",
  },
  {
    slug: "facetime-cody-shea-and-barrett-johnson",
    src: "https://assets.skatehousemedia.com/Facetime-Cody-Shea-and-Barrett-Johnson.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Facetime-Cody-Shea-and-Barrett-Johnson.jpg",
    title: "Facetime: Cody Shea and Barrett Johnson",
  },
  {
    slug: "facetime-graham-buksa",
    src: "https://assets.skatehousemedia.com/Facetime-Graham-Buksa.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Facetime-Graham-Buksa.jpg",
    title: "Facetime: Graham Buksa",
  },
  {
    slug: "facetime-victor-earhart",
    src: "https://assets.skatehousemedia.com/Facetime-Victor-Earhart.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Facetime-Victor-Earhart.jpg",
    title: "Facetime: Victor Earhart",
  },
  {
    slug: "facetime-with-calvin-staub",
    src: "https://assets.skatehousemedia.com/Facetime-with-Calvin-Staub.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Facetime-with-Calvin-Staub.jpg",
    title: "Facetime: Calvin Staub",
  },
  {
    slug: "facetime-with-cliff-coleman",
    src: "https://assets.skatehousemedia.com/Facetime-with-Cliff-Coleman.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Facetime-with-Cliff-Coleman.jpg",
    title: "Facetime: Cliff Coleman",
  },
  {
    slug: "fernando-yuppie-in-hollywood",
    src: "https://assets.skatehousemedia.com/Fernando-Yuppie-in-Hollywood.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Fernando-Yuppie-in-Hollywood.jpg",
    title: "Frenando Yuppie in Hollywood",
  },
  {
    slug: "festival-de-la-bajada",
    src: "https://assets.skatehousemedia.com/Festival-de-la-bajada.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Festival-de-la-bajada.jpg",
    title: "Festival de la Bajada",
  },
  {
    slug: "final-heat-north-carolina-downhill-at-mount-jefferson",
    src: "https://assets.skatehousemedia.com/Final-Heat-North-Carolina-Downhill-at-Mount-Jefferson.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Final-Heat-North-Carolina-Downhill-at-Mount-Jefferson.jpg",
    title: "NCDH Mount Jefferson Finals",
  },
  {
    slug: "final-kozakov",
    src: "https://assets.skatehousemedia.com/final-kozakov.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/final-kozakov.jpg",
    title: "Kozakov Finals",
  },
  {
    slug: "finals-guajataca-downhill-2012",
    src: "https://assets.skatehousemedia.com/Finals-Guajataca-Downhill-2012.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Finals-Guajataca-Downhill-2012.jpg",
    title: "Guajataca 2012 Finals",
  },
  {
    slug: "finals-the-scorcher",
    src: "https://assets.skatehousemedia.com/Finals-The-Scorcher.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Finals-The-Scorcher.jpg",
    title: "The Scorcher Finals",
  },
  {
    slug: "fingerbang-shm",
    src: "https://assets.skatehousemedia.com/Fingerbang-SHM.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Fingerbang-SHM.jpg",
    title: "Fingerbang",
  },
  {
    slug: "fireballin",
    src: "https://assets.skatehousemedia.com/Fireballin.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Fireballin.jpg",
    title: "Fireballin",
  },
  {
    slug: "flare",
    src: "https://assets.skatehousemedia.com/flare.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/flare.jpg",
    title: "Flare",
  },
  {
    slug: "flashback-australian-extreme-games-1999",
    src: "https://assets.skatehousemedia.com/Flashback-Australian-Extreme-Games-1999.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Flashback-Australian-Extreme-Games-1999.jpg",
    title: "Flashback: Australian Extreme Games 1999",
  },
  {
    slug: "flashback-danger-bay-to-la-2008",
    src: "https://assets.skatehousemedia.com/Flashback-Danger-Bay-to-LA-2008.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Flashback-Danger-Bay-to-LA-2008.jpg",
    title: "Flashback: Danger Bay to LA 2008",
  },
  {
    slug: "flashback-giants-head-freeride-2011",
    src: "https://assets.skatehousemedia.com/Flashback-Giants-Head-Freeride-2011.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Flashback-Giants-Head-Freeride-2011.jpg",
    title: "Flashback: Giants Head Freeride 2011",
  },
  {
    slug: "flashback-gone-mining",
    src: "https://assets.skatehousemedia.com/Flashback-Gone-Mining.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Flashback-Gone-Mining.jpg",
    title: "Flashback: Gone Mining",
  },
  {
    slug: "fossefall",
    src: "https://assets.skatehousemedia.com/Fossefall.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Fossefall.jpg",
    title: "Fossefall",
  },
  {
    slug: "fresh-road-fresh-visitors",
    src: "https://assets.skatehousemedia.com/Fresh-Road-Fresh-Visitors.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Fresh-Road-Fresh-Visitors.jpg",
    title: "Fresh Road, Fresh Visitors",
  },
  {
    slug: "fullpipin-it",
    src: "https://assets.skatehousemedia.com/Fullpipin-It.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Fullpipin-It.jpg",
    title: "Fullpipin It",
  },
  {
    slug: "g-mack-raw-run",
    src: "https://assets.skatehousemedia.com/G-Mack-Raw-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/G-Mack-Raw-Run.jpg",
    title: "Raw Run: Gmack",
  },
  {
    slug: "g-munnnnny",
    src: "https://assets.skatehousemedia.com/G-Munnnnny.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/G-Munnnnny.jpg",
    title: "Gmunnnnny",
  },
  {
    slug: "gaberun",
    src: "https://assets.skatehousemedia.com/gaberun.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/gaberun.jpg",
    title: "Gabe Run",
  },
  {
    slug: "garret-shm-1",
    src: "https://assets.skatehousemedia.com/Garret-SHM-1.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Garret-SHM-1.jpg",
    title: "Garret",
  },
  {
    slug: "ghf-edit-copy-01",
    src: "https://assets.skatehousemedia.com/GHF-Edit-Copy-01.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/GHF-Edit-Copy-01.jpg",
    title: "GHF",
  },
  {
    slug: "giants-head-race-day",
    src: "https://assets.skatehousemedia.com/Giants-Head-Race-Day.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Giants-Head-Race-Day.jpg",
    title: "Giants Head Race Day",
  },
  {
    slug: "gjkguipu",
    src: "https://assets.skatehousemedia.com/gjkguipu.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/gjkguipu.jpg",
    title: "Gjkguipu",
  },
  {
    slug: "gmack-final",
    src: "https://assets.skatehousemedia.com/GMACK-FINAL.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/GMACK-FINAL.jpg",
    title: "GMACK",
  },
  {
    slug: "gofreeride",
    src: "https://assets.skatehousemedia.com/GoFreeride.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/GoFreeride.jpg",
    title: "Go Freeride",
  },
  {
    slug: "gonna-have-a-good-day",
    src: "https://assets.skatehousemedia.com/Gonna-Have-a-Good-Day.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Gonna-Have-a-Good-Day.jpg",
    title: "Gonna Have a Good Day",
  },
  {
    slug: "good-times-in-hawaii",
    src: "https://assets.skatehousemedia.com/Good-Times-in-Hawaii.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Good-Times-in-Hawaii.jpg",
    title: "Good Times in Hawaii",
  },
  {
    slug: "gourly-2-shm",
    src: "https://assets.skatehousemedia.com/gourly-2-shm.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/gourly-2-shm.jpg",
    title: "Gourly 2",
  },
  {
    slug: "griffin-tuna-run",
    src: "https://assets.skatehousemedia.com/Griffin-Tuna-Run.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Griffin-Tuna-Run.jpg",
    title: "Griffin on Tuna",
  },
  {
    slug: "group-more-runs",
    src: "https://assets.skatehousemedia.com/Group-More-Runs.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Group-More-Runs.jpg",
    title: "More Group Runs",
  },
  {
    slug: "group-riding-one-year-ago",
    src: "https://assets.skatehousemedia.com/Group-Riding-One-Year-Ago.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Group-Riding-One-Year-Ago.jpg",
    title: "Group Riding One Year Ago",
  },
  {
    slug: "group-run-gnarness",
    src: "https://assets.skatehousemedia.com/Group-Run-Gnarness.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Group-Run-Gnarness.jpg",
    title: "Group Run Gnarness",
  },
  {
    slug: "guns-and-skateboarding",
    src: "https://assets.skatehousemedia.com/Guns-and-Skateboarding.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Guns-and-Skateboarding.jpg",
    title: "Guns and Skateboarding",
  },
  {
    slug: "psa-use-your-head",
    src: "https://assets.skatehousemedia.com/PSA-Use-Your-Head.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/PSA-Use-Your-Head.jpg",
    title: "PSA: Use Your Head",
  },
  {
    slug: "kai-24fps",
    src: "https://assets.skatehousemedia.com/KAI-24fps.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/KAI-24fps.jpg",
    title: "KAI",
  },
  {
    slug: "kaimana-and-bobby-003",
    src: "https://assets.skatehousemedia.com/Kaimana-and-Bobby-003.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Kaimana-and-Bobby-003.jpg",
    title: "Kaimana and Bobby",
  },
  {
    slug: "kalil",
    src: "https://assets.skatehousemedia.com/Kalil.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Kalil.jpg",
    title: "Kalil",
  },
  {
    slug: "kebbek-ben-giveway",
    src: "https://assets.skatehousemedia.com/Kebbek-Ben-Giveway.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Kebbek-Ben-Giveway.jpg",
    title: "Kebbek Giveaway",
  },
  {
    slug: "kebbek",
    src: "https://assets.skatehousemedia.com/Kebbek.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Kebbek.jpg",
    title: "Kebbek",
  },
  {
    slug: "keeponfuckintour-test",
    src: "https://assets.skatehousemedia.com/KEEPONFUCKINTOUR-TEST.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/KEEPONFUCKINTOUR-TEST.jpg",
    title: "Keep on Fuckin Tour",
  },
  {
    slug: "kj",
    src: "https://assets.skatehousemedia.com/KJ.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/KJ.jpg",
    title: "KJ",
  },
  {
    slug: "kk-run",
    src: "https://assets.skatehousemedia.com/KK-RUN.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/KK-RUN.jpg",
    title: "KK Run",
  },
  {
    slug: "knkrobmustard",
    src: "https://assets.skatehousemedia.com/KnkRobMustard.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/KnkRobMustard.jpg",
    title: "KnK Rob Mustartd",
  },
  {
    slug: "kody-and-the-south-van-alleys",
    src: "https://assets.skatehousemedia.com/Kody-and-The-South-Van-Alleys.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Kody-and-The-South-Van-Alleys.jpg",
    title: "Kody and the South Van Alleys",
  },
  {
    slug: "kody-noble",
    src: "https://assets.skatehousemedia.com/Kody-Noble.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Kody-Noble.jpg",
    title: "Kody Noble",
  },
  {
    slug: "kody-nobles-san-francisco-trip",
    src: "https://assets.skatehousemedia.com/Kody-Nobles-San-Francisco-Trip.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Kody-Nobles-San-Francisco-Trip.jpg",
    title: "Kody Noble in San Francisco",
  },
  {
    slug: "kodygapmontreal",
    src: "https://assets.skatehousemedia.com/kodygapmontreal.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/kodygapmontreal.jpg",
    title: "Kody Gap Montreal",
  },
  {
    slug: "kona-quick-clip",
    src: "https://assets.skatehousemedia.com/Kona-Quick-Clip.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Kona-Quick-Clip.jpg",
    title: "Quick Clip: Kona",
  },
  {
    slug: "kozakov-2015-rad",
    src: "https://assets.skatehousemedia.com/Kozakov-2015-RAD.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Kozakov-2015-RAD.jpg",
    title: "Kozakov 2015",
  },
  {
    slug: "la-bougere-with-rayne",
    src: "https://assets.skatehousemedia.com/La-Bougere-with-Rayne.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/La-Bougere-with-Rayne.jpg",
    title: "La Bougere with Rayne",
  },
  {
    slug: "la-teta-shm_1",
    src: "https://assets.skatehousemedia.com/la-teta-shm_1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/la-teta-shm_1.jpg",
    title: "La Teta",
  },
  {
    slug: "laguna",
    src: "https://assets.skatehousemedia.com/Laguna.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Laguna.jpg",
    title: "Laguna",
  },
  {
    slug: "learning-curve-check-yoself",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Check-Yoself.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Check-Yoself.jpg",
    title: "Learning Curve: Check Yoself",
  },
  {
    slug: "learning-curve-dont-cross-the-line",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Dont-Cross-the-Line.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Dont-Cross-the-Line.jpg",
    title: "Learning Curve: Don't Cross the Line",
  },
  {
    slug: "learning-curve-dubler-chub-scrub",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Dubler-Chub-Scrub.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Dubler-Chub-Scrub.jpg",
    title: "Learning Curve: Max Duble Chub Scrub",
  },
  {
    slug: "learning-curve-max-dubler",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Max-Dubler.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Max-Dubler.jpg",
    title: "Learning Curve: Max Dubler",
  },
  {
    slug: "learning-curve-scott-lembach",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Scott-Lembach.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Scott-Lembach.jpg",
    title: "Learning Curve: Scott Lembach",
  },
  {
    slug: "learning-curve-skatesgiving",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Skatesgiving.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Skatesgiving.jpg",
    title: "Learning Curve: Skatesgiving",
  },
  {
    slug: "learning-curve-slide-early",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Slide-Early.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Slide-Early.jpg",
    title: "Learning Curve: Slide Early",
  },
  {
    slug: "learning-curve-smash-it",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Smash-It.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Smash-It.jpg",
    title: "Learning Curve: Smash It",
  },
  {
    slug: "learning-curve-toe-stop",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Toe-Stop.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Toe-Stop.jpg",
    title: "Learning Curve: Toe Stop",
  },
  {
    slug: "learning-curve-vol-2-with-max-capps",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Vol-2-with-Max-Capps.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Vol-2-with-Max-Capps.jpg",
    title: "Learning Curve: Max Capps",
  },
  {
    slug: "learning-curve-vol-3-featuring-kevin-reimer",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Vol-3-Featuring-Kevin-Reimer.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Vol-3-Featuring-Kevin-Reimer.jpg",
    title: "Learning Curve: Kevin Reimer",
  },
  {
    slug: "learning-curve-vol-4",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Vol-4.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Vol-4.jpg",
    title: "Learning Curve: Vol. 4",
  },
  {
    slug: "learning-curve-vol-5",
    src: "https://assets.skatehousemedia.com/Learning-Curve-Vol-5.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-Vol-5.jpg",
    title: "Learning Curve: Vol. 5",
  },
  {
    slug: "learning-curve-with-no-play",
    src: "https://assets.skatehousemedia.com/Learning-Curve-with-No-Play.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curve-with-No-Play.jpg",
    title: "Learning Curve: NO PLAY",
  },
  {
    slug: "learning-curving-clapping-pucks",
    src: "https://assets.skatehousemedia.com/Learning-Curving-Clapping-Pucks.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Learning-Curving-Clapping-Pucks.jpg",
    title: "Learning Curve: Clapping Pucks",
  },
  {
    slug: "legends-ethan-lau",
    src: "https://assets.skatehousemedia.com/Legends-Ethan-Lau.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Legends-Ethan-Lau.jpg",
    title: "Legens: Ethan Lau",
  },
  {
    slug: "leonera",
    src: "https://assets.skatehousemedia.com/Leonera.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Leonera.jpg",
    title: "Leonera",
  },
  {
    slug: "let-go",
    src: "https://assets.skatehousemedia.com/LET-GO.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/LET-GO.jpg",
    title: "Let Go",
  },
  {
    slug: "levi-shm-chunderbunny",
    src: "https://assets.skatehousemedia.com/Levi-SHM-Chunderbunny.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Levi-SHM-Chunderbunny.jpg",
    title: "Levi Chunderbunny",
  },
  {
    slug: "lgc-clip",
    src: "https://assets.skatehousemedia.com/lgc-clip.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/lgc-clip.jpg",
    title: "Longboard Girls Crew",
  },
  {
    slug: "liam-morgan-shreds-hawaii",
    src: "https://assets.skatehousemedia.com/Liam-Morgan-shreds-Hawaii.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Liam-Morgan-shreds-Hawaii.jpg",
    title: "Liam Morgan in Hawaii",
  },
  {
    slug: "livergnar-outlaw",
    src: "https://assets.skatehousemedia.com/Livergnar-Outlaw.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Livergnar-Outlaw.jpg",
    title: "Livegnar Outlaw",
  },
  {
    slug: "local-andrew-mercado",
    src: "https://assets.skatehousemedia.com/Local-Andrew-Mercado.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Local-Andrew-Mercado.jpg",
    title: "Locals: Andrew Mercado",
  },
  {
    slug: "local-dustin-hampton",
    src: "https://assets.skatehousemedia.com/Local-Dustin-Hampton.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Local-Dustin-Hampton.jpg",
    title: "Locals: Dustin Hampton",
  },
  {
    slug: "local-stephen-beckman",
    src: "https://assets.skatehousemedia.com/Local-Stephen-Beckman.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Local-Stephen-Beckman.jpg",
    title: "Locals: Stephen Beckman",
  },
  {
    slug: "locals-adam-and-louis-go-switch",
    src: "https://assets.skatehousemedia.com/Locals-Adam-and-Louis-Go-Switch.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Adam-and-Louis-Go-Switch.jpg",
    title: "Locals: Adam and Louis Go Switch",
  },
  {
    slug: "locals-adam-colton",
    src: "https://assets.skatehousemedia.com/Locals-Adam-Colton.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Adam-Colton.jpg",
    title: "Locals: Adam Colton",
  },
  {
    slug: "locals-boulder-creek",
    src: "https://assets.skatehousemedia.com/Locals-Boulder-Creek.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Boulder-Creek.jpg",
    title: "Locals: Boulder Creek",
  },
  {
    slug: "locals-kyle-chin-in-hollywood",
    src: "https://assets.skatehousemedia.com/Locals-Kyle-Chin-in-Hollywood.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Kyle-Chin-in-Hollywood.jpg",
    title: "Locals: Kyle Chin in Hollywood",
  },
  {
    slug: "locals-learning-curve-vol-1",
    src: "https://assets.skatehousemedia.com/Locals-Learning-Curve-Vol-1.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Learning-Curve-Vol-1.jpg",
    title: "Learning Curve: Vol. 1",
  },
  {
    slug: "locals-max-ballesteros",
    src: "https://assets.skatehousemedia.com/Locals-Max-Ballesteros.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Max-Ballesteros.jpg",
    title: "Locals: Max Ballesteros",
  },
  {
    slug: "locals-piuma",
    src: "https://assets.skatehousemedia.com/Locals-Piuma.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Locals-Piuma.jpg",
    title: "Locals: Piuma",
  },
  {
    slug: "locals-raw-pack-skating",
    src: "https://assets.skatehousemedia.com/Locals-Raw-Pack-Skating.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Raw-Pack-Skating.jpg",
    title: "Locals: Pack Skating",
  },
  {
    slug: "locals-tadaichi-nakayama",
    src: "https://assets.skatehousemedia.com/Locals-Tadaichi-Nakayama.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Tadaichi-Nakayama.jpg",
    title: "Locals: Tadaichi Nakayama",
  },
  {
    slug: "locals-tai-nakayama",
    src: "https://assets.skatehousemedia.com/Locals-Tai-Nakayama.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Locals-Tai-Nakayama.jpg",
    title: "Locals: Tai Nakayama",
  },
  {
    slug: "longboarders-go-to-santa-cruz-what-happens-next-you-wont-believe",
    src: "https://assets.skatehousemedia.com/Longboarders-go-to-Santa-Cruz-WHAT-HAPPENS-NEXT-YOU-WONT-BELIEVE.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Longboarders-go-to-Santa-Cruz-WHAT-HAPPENS-NEXT-YOU-WONT-BELIEVE.jpg",
    title:
      "Lonbgboarders go to Santa Cruz. What happnes next you won't believe.",
  },
  {
    slug: "loudog",
    src: "https://assets.skatehousemedia.com/LouDog.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/LouDog.jpg",
    title: "Loudog",
  },
  {
    slug: "lousrawmanlyskatepark",
    src: "https://assets.skatehousemedia.com/Lousrawmanlyskatepark.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/Lousrawmanlyskatepark.jpg",
    title: "Lou's Raw Manly Skatepark",
  },
  {
    slug: "loveletter",
    src: "https://assets.skatehousemedia.com/Loveletter.mp4",
    thumbnail: "https://assets.skatehousemedia.com/thumbnails/Loveletter.jpg",
    title: "Loveletter",
  },
  {
    slug: "lundberg-double",
    src: "https://assets.skatehousemedia.com/LUNDBERG-DOUBLE.mp4",
    thumbnail:
      "https://assets.skatehousemedia.com/thumbnails/LUNDBERG-DOUBLE.jpg",
    title: "Lundberg Double",
  },
];

export default videos;
