const videos = [
    {
        slug: '15-crashes-at-angies',
        src: 'https://assets.skatehousemedia.com/15-Crashes-at-Angies-Final.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/15-Crashes-at-Angies-Final.jpg',
        title: '15 Crashes at Angies',
    },
    {
        slug: '2011-compilation-part-1',
        src: 'https://assets.skatehousemedia.com/2011-Compilation-Part-1.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/2011-Compilation-Part-1.jpg',
        title: '2011 Compilation Part 1',
    },
    {
        slug: '2011-compilation-part-2',
        src: 'https://assets.skatehousemedia.com/2011-Compilation-Part-2.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/2011-Compilation-Part-2.jpg',
        title: '2011 Compilation Part 2',
    },
    {
        slug: '2012-compilation-part-1',
        src: 'https://assets.skatehousemedia.com/2012-Compilation-Part-1.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/2012-Compilation-Part-1.jpg',
        title: '2012 Compilation Part 1',
    },
    {
        slug: '2012-compilation-part-2',
        src: 'https://assets.skatehousemedia.com/2012-Compilation-Part-2.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/2012-Compilation-Part-2.jpg',
        title: '2012 Compilation Part 2',
    },
    {
        slug: '2012-winsport-igsa-world-championship-finals',
        src: 'https://assets.skatehousemedia.com/2012-Winsport-IGSA-World-Championship-Finals.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/2012-Winsport-IGSA-World-Championship-Finals.jpg',
        title: '2012 Winsport IGSA World Championship Finals',
    },
    {
        slug: 'a-day-well-spent',
        src: 'https://assets.skatehousemedia.com/a-day-well-spent.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/a-day-well-spent.jpg',
        title: 'A Day Well Spent',
    },
    {
        slug: 'a-day-with-the-van',
        src: 'https://assets.skatehousemedia.com/A-Day-With-The-Van.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/A-Day-With-The-Van.jpg',
        title: 'A Day with the Van',
    },
    {
        slug: 'a-ha-featuring-max-myers',
        src: 'https://assets.skatehousemedia.com/A-HA-Featuring-Max-Myers.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/A-HA-Featuring-Max-Myers.jpg',
        title: 'A-ha featuring Max Myers',
    },
    {
        slug: 'a-quick-clip-from-the-road',
        src: 'https://assets.skatehousemedia.com/A-Quick-Clip-From-The-Road.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/A-Quick-Clip-From-The-Road.jpg',
        title: 'A Quick Clip from the Road',
    },
    {
        slug: 'a-quick-run-with-ethan-lau',
        src: 'https://assets.skatehousemedia.com/A-Quick-Run-with-Ethan-Lau.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/A-Quick-Run-with-Ethan-Lau.jpg',
        title: 'A Quick Run with Ethan Lau',
    },
    {
        slug: 'a-run-with-josephmyles',
        src: 'https://assets.skatehousemedia.com/A-Run-With-Josephmyles.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/A-Run-With-Josephmyles.jpg',
        title: 'A Run with Josephmyles',
    },
    {
        slug: 'aaron-from-the-block',
        src: 'https://assets.skatehousemedia.com/Aaron-from-the-Block.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Aaron-from-the-Block.jpg',
        title: 'Aaron from the Block',
    },
    {
        slug: 'adam-astor-shm',
        src: 'https://assets.skatehousemedia.com/Adam-Astor-SHM.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Adam-Astor-SHM.jpg',
        title: 'Adam Astor SHM',
    },
    {
        slug: 'adam-coltons-summer-vacation',
        src: 'https://assets.skatehousemedia.com/Adam-Coltons-Summer-Vacation.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Adam-Coltons-Summer-Vacation.jpg',
        title: 'Adam Coltons Summer Vacation',
    },
    {
        slug: 'aidan-spain-raw-run-skatehouse',
        src: 'https://assets.skatehousemedia.com/Aidan-Spain-Raw-Run-Skatehouse.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Aidan-Spain-Raw-Run-Skatehouse.jpg',
        title: 'Aidan Spain Raw Run Skatehouse',
    },
    {
        slug: 'ali-learning-curve',
        src: 'https://assets.skatehousemedia.com/ALI-LEARING-CURVE.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/ALI-LEARING-CURVE.jpg',
        title: 'Learning Curve: Ali',
    },
    {
        slug: 'ali-nas-shm',
        src: 'https://assets.skatehousemedia.com/Ali-Nas-SHM.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Ali-Nas-SHM.jpg',
        title: 'Ali Nas',
    },
    {
        slug: 'all-in-a-day',
        src: 'https://assets.skatehousemedia.com/All-in-a-Day.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/All-in-a-Day.jpg',
        title: 'All in a Day',
    },
    {
        slug: 'all-stars-slide-jam',
        src: 'https://assets.skatehousemedia.com/all-stars-slide-jam.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/all-stars-slide-jam.jpg',
        title: 'All-Starts Slide Jam',
    },
    {
        slug: 'all',
        src: 'https://assets.skatehousemedia.com/ALL.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/ALL.jpg',
        title: 'All',
    },
    {
        slug: 'almabtriebrawrun2013',
        src: 'https://assets.skatehousemedia.com/AlmabtriebRawRun2013.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/AlmabtriebRawRun2013.jpg',
        title: 'Raw Run: Almatrieb 2013',
    },
    {
        slug: 'anaconda-edit',
        src: 'https://assets.skatehousemedia.com/anaconda-edit.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/anaconda-edit.jpg',
        title: 'Anaconda',
    },
    {
        slug: 'anaconda',
        src: 'https://assets.skatehousemedia.com/Anaconda.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Anaconda.jpg',
        title: 'Anaconda???',
    },
    {
        slug: 'andres-zarate-2',
        src: 'https://assets.skatehousemedia.com/Andres-Zarate-2.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Andres-Zarate-2.jpg',
        title: 'Andres Zarate 2',
    },
    {
        slug: 'angelopolis-outlaw',
        src: 'https://assets.skatehousemedia.com/Angelopolis-Outlaw.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Angelopolis-Outlaw.jpg',
        title: 'Angelopolis Outlaw',
    },
    {
        slug: 'angies-speed-bump-crashes',
        src: 'https://assets.skatehousemedia.com/Angies-Speed-Bump-Crashes.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Angies-Speed-Bump-Crashes.jpg',
        title: 'Angies Speed Bump Crashes',
    },
    {
        slug: 'archives-ditch-slap-09',
        src: 'https://assets.skatehousemedia.com/Archives-Ditch-Slap-09.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Archives-Ditch-Slap-09.jpg',
        title: 'Archives: Ditch Slap 09',
    },
    {
        slug: 'asheville-edit',
        src: 'https://assets.skatehousemedia.com/Asheville-Edit.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Asheville-Edit.jpg',
        title: 'Asheville',
    },
    {
        slug: 'attention-deficit-session',
        src: 'https://assets.skatehousemedia.com/Attention-Deficit-Session.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Attention-Deficit-Session.jpg',
        title: 'Attention Deficit Session',
    },
    {
        slug: 'austin-pedroni-raw-ish-run',
        src: 'https://assets.skatehousemedia.com/Austin-Pedroni-Raw-ish-Run.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Austin-Pedroni-Raw-ish-Run.jpg',
        title: 'Austin Pedroni Raw-ish Run',
    },
    {
        slug: 'axel-angies-deep-short',
        src: 'https://assets.skatehousemedia.com/axel-angies-deep-short.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/axel-angies-deep-short.jpg',
        title: 'Axel Angies Deep Short',
    },
    {
        slug: 'axel-barcelona-1',
        src: 'https://assets.skatehousemedia.com/Axel-Barcelona1.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Axel-Barcelona1.jpg',
        title: 'Axel Barcelona 1',
    },
    {
        slug: 'axel-barcelona-2',
        src: 'https://assets.skatehousemedia.com/Axel-Barcelona-2.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Axel-Barcelona-2.jpg',
        title: 'Axel Barcelona 2',
    },
    {
        slug: 'axel-bcn-shm',
        src: 'https://assets.skatehousemedia.com/Axel-BCN-SHM.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Axel-BCN-SHM.jpg',
        title: 'Axel BCN',
    },
    {
        slug: 'axel-in-barcelona',
        src: 'https://assets.skatehousemedia.com/Axel-in-Barcelona.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Axel-in-Barcelona.jpg',
        title: 'Axel in Barcelona',
    },
    {
        slug: 'axel-shm',
        src: 'https://assets.skatehousemedia.com/Axel-SHM.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Axel-SHM.jpg',
        title: 'Axel',
    },
    {
        slug: 'backyard-blues',
        src: 'https://assets.skatehousemedia.com/Backyard-Blues.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Backyard-Blues.jpg',
        title: 'Backyard Blues',
    },
    {
        slug: 'barna-bacon-slide-jam',
        src: 'https://assets.skatehousemedia.com/Barna-Bacon-Slide-Jam.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Barna-Bacon-Slide-Jam.jpg',
        title: 'Barna Bacon Slide Jam',
    },
    {
        slug: 'barrett-junction-outlaw-2011',
        src: 'https://assets.skatehousemedia.com/Barrett-Junction-Outlaw-2011.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Barrett-Junction-Outlaw-2011.jpg',
        title: 'Barrett Junction Outlaw 2011',
    },
    {
        slug: 'batesrun',
        src: 'https://assets.skatehousemedia.com/batesrun.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/batesrun.jpg',
        title: 'Bates Run',
    },
    {
        slug: 'bay-sessions',
        src: 'https://assets.skatehousemedia.com/Bay-Sessions.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bay-Sessions.jpg',
        title: 'Bay Sessions',
    },
    {
        slug: 'bbdh-race-footage',
        src: 'https://assets.skatehousemedia.com/BBDH-Race-Footage.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/BBDH-Race-Footage.jpg',
        title: 'BBDH Race Footage',
    },
    {
        slug: 'bda-does-boulder',
        src: 'https://assets.skatehousemedia.com/BDA-does-Boulder.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/BDA-does-Boulder.jpg',
        title: 'BDA Does Boulder',
    },
    {
        slug: 'beast-coast',
        src: 'https://assets.skatehousemedia.com/Beast-Coast.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Beast-Coast.jpg',
        title: 'Beast Coast',
    },
    {
        slug: 'bees-steez-slide-jam',
        src: 'https://assets.skatehousemedia.com/Bees-Steez-Slide-Jam.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bees-Steez-Slide-Jam.jpg',
        title: 'Bees Steez Slide Jam',
    },
    {
        slug: 'bela-joyride-2015',
        src: 'https://assets.skatehousemedia.com/Bela-JoyRide-2015.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bela-JoyRide-2015.jpg',
        title: 'Bela JoyRide 2015',
    },
    {
        slug: 'ben-dub-hits-a-guardrail',
        src: 'https://assets.skatehousemedia.com/Ben-Dub-hits-a-Guardrail.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Ben-Dub-hits-a-Guardrail.jpg',
        title: 'Ben Dub Hits a Guardrail',
    },
    {
        slug: 'ben-hot-pants',
        src: 'https://assets.skatehousemedia.com/Ben-Hot-Pants.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Ben-Hot-Pants.jpg',
        title: 'Ben Hot Pants',
    },
    {
        slug: 'benny-ds-not-so-magic-puck-004',
        src: 'https://assets.skatehousemedia.com/Benny-Ds-Not-So-Magic-Puck-004.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Benny-Ds-Not-So-Magic-Puck-004.jpg',
        title: 'Benny Ds Not So Magic Puck',
    },
    {
        slug: 'best-of-2010-compilation-part-1',
        src: 'https://assets.skatehousemedia.com/Best-of-2010-Compilation-Part-1.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Best-of-2010-Compilation-Part-1.jpg',
        title: 'Best of 2010 Compilation Part 1',
    },
    {
        slug: 'best-of-2010-compilation-part-2',
        src: 'https://assets.skatehousemedia.com/Best-of-2010-Compilation-Part-2.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Best-of-2010-Compilation-Part-2.jpg',
        title: 'Best of 2010 Compilation Part 2',
    },
    {
        slug: 'best-of-2013-max-dubler-edition',
        src: 'https://assets.skatehousemedia.com/Best-of-2013-Max-Dubler-Edition.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Best-of-2013-Max-Dubler-Edition.jpg',
        title: 'Best of 2013 Max Dubler Edition',
    },
    {
        slug: 'beware-nicolas-marty',
        src: 'https://assets.skatehousemedia.com/beware-nicolas-marty.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/beware-nicolas-marty.jpg',
        title: 'Beware Nicolas Marty',
    },
    {
        slug: 'big-dave-micd-at-the-slap',
        src: 'https://assets.skatehousemedia.com/Big-Dave-Micd-at-the-SLAP.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Big-Dave-Micd-at-the-SLAP.jpg',
        title: 'Big Dave Micd at the SLAP',
    },
    {
        slug: 'big-poppa-schep-s1-lifer-helmet',
        src: 'https://assets.skatehousemedia.com/Big-Poppa-Schep-S1-Lifer-Helmet.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Big-Poppa-Schep-S1-Lifer-Helmet.jpg',
        title: 'Big Poppa Schep S1 Lifer Helmet',
    },
    {
        slug: 'bigboy',
        src: 'https://assets.skatehousemedia.com/BIGBOY.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/BIGBOY.jpg',
        title: 'BIGBOY',
    },
    {
        slug: 'billy-and-zak-do-la',
        src: 'https://assets.skatehousemedia.com/Billy-And-Zak-Do-LA.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Billy-And-Zak-Do-LA.jpg',
        title: 'Billy And Zak Do LA',
    },
    {
        slug: 'black-easter-raw-run-louis-pilloni',
        src: 'https://assets.skatehousemedia.com/Black-Easter-Raw-Run-Louis-Pilloni.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Black-Easter-Raw-Run-Louis-Pilloni.jpg',
        title: 'Black Easter Raw Run Louis Pilloni',
    },
    {
        slug: 'black-top-and-big-bird',
        src: 'https://assets.skatehousemedia.com/Black-Top-and-Big-Bird.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Black-Top-and-Big-Bird.jpg',
        title: 'Black Top and Big Bird',
    },
    {
        slug: 'blacktop-freeride',
        src: 'https://assets.skatehousemedia.com/Blacktop-Freeride.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Blacktop-Freeride.jpg',
        title: 'Blacktop Freeride',
    },
    {
        slug: 'blaxel',
        src: 'https://assets.skatehousemedia.com/blaxel.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/blaxel.jpg',
        title: 'Blaxel',
    },
    {
        slug: 'bobby-k-on-matts-rash',
        src: 'https://assets.skatehousemedia.com/Bobby-k-on-matts-rash.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bobby-k-on-matts-rash.jpg',
        title: 'Bobby K on Matts Rash',
    },
    {
        slug: 'bogota-finals',
        src: 'https://assets.skatehousemedia.com/Bogota-Finals.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bogota-Finals.jpg',
        title: 'Bogota Finals',
    },
    {
        slug: 'bonelli-weekend',
        src: 'https://assets.skatehousemedia.com/Bonelli-Weekend.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bonelli-Weekend.jpg',
        title: 'Bonellie Weekend',
    },
    {
        slug: 'bonus-footage',
        src: 'https://assets.skatehousemedia.com/Bonus-Footage.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bonus-Footage.jpg',
        title: 'Bonus Footage',
    },
    {
        slug: 'borderland-final',
        src: 'https://assets.skatehousemedia.com/Borderland-final.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Borderland-final.jpg',
        title: 'Borderland',
    },
    {
        slug: 'boulder-creek-final',
        src: 'https://assets.skatehousemedia.com/Boulder-creek-final.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Boulder-creek-final.jpg',
        title: 'Boulder Creek',
    },
    {
        slug: 'bps-shm',
        src: 'https://assets.skatehousemedia.com/bps-shm.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/bps-shm.jpg',
        title: 'BPs',
    },
    {
        slug: 'braden-north-van',
        src: 'https://assets.skatehousemedia.com/Braden-North-Van.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Braden-North-Van.jpg',
        title: 'Braden North Van',
    },
    {
        slug: 'brian-and-spacers',
        src: 'https://assets.skatehousemedia.com/Brian-and-Spacers.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Brian-and-Spacers.jpg',
        title: 'Brian and Spacers',
    },
    {
        slug: 'brian-cortright-in-south-africa',
        src: 'https://assets.skatehousemedia.com/Brian-Cortright-in-South-Africa.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Brian-Cortright-in-South-Africa.jpg',
        title: 'Chubbs in South Africa',
    },
    {
        slug: 'brian-holden-raw-run',
        src: 'https://assets.skatehousemedia.com/Brian-Holden-Raw-Run.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Brian-Holden-Raw-Run.jpg',
        title: 'Raw Run: Brian Holden',
    },
    {
        slug: 'brian-peck-and-max-erwin',
        src: 'https://assets.skatehousemedia.com/Brian-Peck-and-Max-Erwin.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Brian-Peck-and-Max-Erwin.jpg',
        title: 'Brian Peck and Max Erwin',
    },
    {
        slug: 'brian-peck-and-smaller-swiss',
        src: 'https://assets.skatehousemedia.com/Brian-Peck-and-Smaller-Swiss.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Brian-Peck-and-Smaller-Swiss.jpg',
        title: 'Brian-Peck-and-Smaller-Swiss',
    },
    {
        slug: 'britannia2013',
        src: 'https://assets.skatehousemedia.com/Britannia2013.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Britannia2013.jpg',
        title: 'Britannia 2013',
    },
    {
        slug: 'broadway-bomb-2011',
        src: 'https://assets.skatehousemedia.com/Broadway-Bomb-2011.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Broadway-Bomb-2011.jpg',
        title: 'Broadway Bomb 2011',
    },
    {
        slug: 'broadway-bomb-2013',
        src: 'https://assets.skatehousemedia.com/Broadway-Bomb-2013.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Broadway-Bomb-2013.jpg',
        title: 'Broadway Bomb 2013',
    },
    {
        slug: 'bu-fun',
        src: 'https://assets.skatehousemedia.com/Bu-Fun.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Bu-Fun.jpg',
        title: 'Bu Fun',
    },
    {
        slug: 'buffalo-bill-downhill-2010-final-heat',
        src: 'https://assets.skatehousemedia.com/Buffalo-Bill-Downhill-2010-Final-Heat.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Buffalo-Bill-Downhill-2010-Final-Heat.jpg',
        title: 'Buffalo Bill Downhill 2010 Final Heat',
    },
    {
        slug: 'buffalo-bill-downhill-raw-run',
        src: 'https://assets.skatehousemedia.com/Buffalo-Bill-Downhill-Raw-Run.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Buffalo-Bill-Downhill-Raw-Run.jpg',
        title: 'Buffalo Bill Downhill Raw Run',
    },
    {
        slug: 'byron-essert-skating-a-classic',
        src: 'https://assets.skatehousemedia.com/Byron-Essert-skating-a-Classic.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/Byron-Essert-skating-a-Classic.jpg',
        title: 'Byron Essert Skating a Classic',
    },
    {
        slug: 'byronandliamshm',
        src: 'https://assets.skatehousemedia.com/ByronandliamSHM.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/ByronandliamSHM.jpg',
        title: 'Byron and Liam',
    },
    {
        slug: 'psa-use-your-head',
        src: 'https://assets.skatehousemedia.com/PSA-Use-Your-Head.mp4',
        thumbnail: 'https://assets.skatehousemedia.com/thumbnails/PSA-Use-Your-Head.jpg',
        title: 'PSA: Use Your Head',
    },

]

export default videos;