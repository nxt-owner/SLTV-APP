/**
 * SLTV Live Player - Browser Script
 */

const API_BASE_URL = 'https://webtv.thundercat.workers.dev/';

const CHANNEL_CATEGORIES = [
  {
    id: 'cat-1',
    title: 'Local',
    channels: [
      { id: 'arttelevision', name: 'ART Television', image: 'https://api3.viu.lk/api/client/v1/global/images/25672?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'channelone', name: 'Channel One', image: 'https://api3.viu.lk/api/client/v1/global/images/25660?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'harithatv', name: 'Haritha TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25675?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hirutv', name: 'Hiru TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25670?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'itn', name: 'ITN', image: 'https://api3.viu.lk/api/client/v1/global/images/25663?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'jayatv', name: 'Jaya TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25684?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nethratv', name: 'Nethra TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25662?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'rangiri', name: 'Rangiri Sri Lanka', image: 'https://api3.viu.lk/api/client/v1/global/images/25680?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'rideetv', name: 'Ridee TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25677?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'rupavahini', name: 'Rupavahini', image: 'https://api3.viu.lk/api/client/v1/global/images/25661?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'shakthitv', name: 'Shakthi TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25668?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sirasatv', name: 'Sirasa TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25667?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'siyathatv', name: 'Siyatha TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25674?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'swarnavahini', name: 'Swarnavahini', image: 'https://api3.viu.lk/api/client/v1/global/images/25666?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'tv1', name: 'TV 1', image: 'https://api3.viu.lk/api/client/v1/global/images/25669?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'tvderana', name: 'TV Derana', image: 'https://api3.viu.lk/api/client/v1/global/images/25665?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'tvdidula', name: 'TV Didula', image: 'https://api3.viu.lk/api/client/v1/global/images/25676?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'supreme', name: 'TV Supreme', image: 'https://api3.viu.lk/api/client/v1/global/images/25679?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'vasanthamtv', name: 'Vasantham TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25664?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-2',
    title: 'News',
    channels: [
      { id: 'adaderana24', name: 'Ada Derana 24', image: 'https://api3.viu.lk/api/client/v1/global/images/25673?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'aljazeera', name: 'Al Jazeera', image: 'https://api3.viu.lk/api/client/v1/global/images/25689?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'bbcworld', name: 'BBC World', image: 'https://api3.viu.lk/api/client/v1/global/images/25691?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'bloomberg', name: 'Bloomberg', image: 'https://api3.viu.lk/api/client/v1/global/images/25698?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'CGTN', name: 'CGTN', image: 'https://api3.viu.lk/api/client/v1/global/images/25692?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'cnbc', name: 'CNBC', image: 'https://api3.viu.lk/api/client/v1/global/images/25699?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'cnn', name: 'CNN', image: 'https://api3.viu.lk/api/client/v1/global/images/25693?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'euronews', name: 'Euro News', image: 'https://api3.viu.lk/api/client/v1/global/images/25696?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'france24', name: 'France 24', image: 'https://api3.viu.lk/api/client/v1/global/images/25695?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'ndtv', name: 'NDTV', image: 'https://api3.viu.lk/api/client/v1/global/images/25694?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-3',
    title: 'Sports',
    channels: [
      { id: 'eurosport', name: 'Eurosport', image: 'https://api3.viu.lk/api/client/v1/global/images/25727?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sonysports1', name: 'Sony Sports 1', image: 'https://api3.viu.lk/api/client/v1/global/images/25724?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sonysports2', name: 'Sony Sports 2', image: 'https://api3.viu.lk/api/client/v1/global/images/25726?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sonysports2hd', name: 'Sony Sports 2 HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25781?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sonysports5hd', name: 'Sony Sports 5 HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25782?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starsports1', name: 'Star Sports 1', image: 'https://api3.viu.lk/api/client/v1/global/images/25728?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starsports2', name: 'Star Sports 2', image: 'https://api3.viu.lk/api/client/v1/global/images/25729?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starsports3', name: 'Star Sports 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlO664_5AAUtA7mbWZMxApEk9kaJyKXXOsrwP2jAAF0CIsfiAEb4pwiKA&s=10' },
      { id: 'tencricket', name: 'Ten Cricket', image: 'https://api3.viu.lk/api/client/v1/global/images/25725?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'paparetv1', name: 'The Papare TV 1', image: 'https://api3.viu.lk/api/client/v1/global/images/130717?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'paparesd', name: 'The Papare TV 2', image: 'https://api3.viu.lk/api/client/v1/global/images/130719?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starsportshd1', name: 'Star Sports HD 1', image: 'https://api3.viu.lk/api/client/v1/global/images/25778?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'premiersports', name: 'Premier Sports HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25783?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starsselecthd1', name: 'Star Sports Select 1 HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25779?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starsselecthd2', name: 'Star Sports Select 2 HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25780?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'thepaparehd', name: 'The Papare TV 1 HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25784?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'thepapare2hd', name: 'The Papare TV 2 HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25785 accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-4',
    title: 'Entertainment',
    channels: [
      { id: 'andflix', name: '&flix', image: 'https://api3.viu.lk/api/client/v1/global/images/25732?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'axn', name: 'AXN', image: 'https://api3.viu.lk/api/client/v1/global/images/25737?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'b4umovies', name: 'B4U Movies', image: 'https://api3.viu.lk/api/client/v1/global/images/25749?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'channelc', name: 'Channel C', image: 'https://api3.viu.lk/api/client/v1/global/images/25702?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'colors', name: 'Colors', image: 'https://api3.viu.lk/api/client/v1/global/images/25747?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'colorsinfinity', name: 'Colors Cineplex', image: 'https://api3.viu.lk/api/client/v1/global/images/71893?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'colorstamil', name: 'Colors Tamil', image: 'https://api3.viu.lk/api/client/v1/global/images/25752?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'disneyint', name: 'Disney International', image: 'https://api3.viu.lk/api/client/v1/global/images/17428:?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'fashiontv', name: 'Fashion TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25739?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'foodnetwork', name: 'Food Network', image: 'https://api3.viu.lk/api/client/v1/global/images/25714?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hbofamily', name: 'HBO Family', image: 'https://api3.viu.lk/api/client/v1/global/images/25731?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hbosignature', name: 'HBO Signature', image: 'https://api3.viu.lk/api/client/v1/global/images/25730?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hgtv', name: 'HGTV', image: 'https://api3.viu.lk/api/client/v1/global/images/25722?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hitv', name: 'Hi TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25681?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hits', name: 'HITS', image: 'https://api3.viu.lk/api/client/v1/global/images/25734?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hitsmovies', name: 'HITS MOVIES', image: 'https://api3.viu.lk/api/client/v1/global/images/25733?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'jayamax', name: 'Jaya Max', image: 'https://api3.viu.lk/api/client/v1/global/images/185457?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'jayamovies', name: 'Jaya Movies', image: 'https://api3.viu.lk/api/client/v1/global/images/185459?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'jayaplus', name: 'Jaya Plus', image: 'https://api3.viu.lk/api/client/v1/global/images/185452?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'kalaignartv', name: 'Kalaignar TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25756?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'setmax', name: 'SET Max', image: 'https://api3.viu.lk/api/client/v1/global/images/25745?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'siripollitv', name: 'Sirippoli TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25795?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sonypix', name: 'Sony PIX', image: 'https://api3.viu.lk/api/client/v1/global/images/25708?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'sonyset', name: 'Sony SET', image: 'https://api3.viu.lk/api/client/v1/global/images/25744?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starbharath', name: 'Star Bharath', image: 'https://api3.viu.lk/api/client/v1/global/images/25743?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'stargold', name: 'Star Gold', image: 'https://api3.viu.lk/api/client/v1/global/images/25746?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'stargoldromance', name: 'Star Gold Romance', image: 'https://api3.viu.lk/api/client/v1/global/images/25750?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starplus', name: 'Star Plus', image: 'https://api3.viu.lk/api/client/v1/global/images/25748?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starvijay', name: 'Star Vijay', image: 'https://api3.viu.lk/api/client/v1/global/images/25755?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'jayatvind', name: 'Sun TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25753?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'warnertv', name: 'Warner TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25736?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'zeecafe', name: 'Zee Cafe', image: 'https://api3.viu.lk/api/client/v1/global/images/25735?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'zeecinema', name: 'Zee Cinema', image: 'https://api3.viu.lk/api/client/v1/global/images/25751?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'zeetamil', name: 'Zee Tamil', image: 'https://api3.viu.lk/api/client/v1/global/images/25757?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'zeethirai', name: 'Zee Thirai', image: 'https://api3.viu.lk/api/client/v1/global/images/188921?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'zingtv', name: 'Zing TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25704?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-5',
    title: 'Kids',
    channels: [
      { id: 'aplus', name: 'A Plus Kids TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25709?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'babytv', name: 'Baby TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25711?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'cartoonnetwork', name: 'Cartoon Network', image: 'https://api3.viu.lk/api/client/v1/global/images/25707?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'cbeebies', name: 'CBeebies', image: 'https://api3.viu.lk/api/client/v1/global/images/25706?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'davinci', name: 'Da Vinci', image: 'https://api3.viu.lk/api/client/v1/global/images/25705?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'disneyjr', name: 'Disney Jr', image: 'https://api3.viu.lk/api/client/v1/global/images/25712?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'moonbug', name: 'Moonbug', image: 'https://api3.viu.lk/api/client/v1/global/images/101113?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nickjr', name: 'Nick Jr', image: 'https://api3.viu.lk/api/client/v1/global/images/25713?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nickelodeon', name: 'Nickelodeon', image: 'https://api3.viu.lk/api/client/v1/global/images/25710?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'pogo', name: 'Pogo', image: 'https://api3.viu.lk/api/client/v1/global/images/47360?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-6',
    title: 'Documentary',
    channels: [
      { id: 'animalplanet', name: 'Animal Planet', image: 'https://api3.viu.lk/api/client/v1/global/images/25716?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'discovery', name: 'Discovery', image: 'https://api3.viu.lk/api/client/v1/global/images/25717?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'discoveryscience', name: 'Discovery Science', image: 'https://api3.viu.lk/api/client/v1/global/images/25718?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'discoveryturbo', name: 'Discovery Turbo', image: 'https://api3.viu.lk/api/client/v1/global/images/47362?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'historytv18', name: 'History TV 18', image: 'https://api3.viu.lk/api/client/v1/global/images/25720?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'ngcwild', name: 'Nat Geo Wild', image: 'https://api3.viu.lk/api/client/v1/global/images/25715?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'natgeo', name: 'National Geographic', image: 'https://api3.viu.lk/api/client/v1/global/images/25719?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'bbcearth', name: 'Sony BBC Earth', image: 'https://api3.viu.lk/api/client/v1/global/images/25742?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'tlc', name: 'TLC', image: 'https://api3.viu.lk/api/client/v1/global/images/25194?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-7',
    title: 'Religious',
    channels: [
      { id: 'damsathara', name: 'Damsathara TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25683?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'godtv', name: 'GOD TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25687?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'pragna', name: 'Pragna TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25682?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'shraddhatv', name: 'Shraddha TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25686?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'buddhisttv', name: 'The Buddhist TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25685?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'ewtn', name: 'Verbum TV', image: 'https://api3.viu.lk/api/client/v1/global/images/25688?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-8',
    title: 'Music',
    channels: [
      { id: 'B4UMusic', name: 'B4U Music', image: 'https://api3.viu.lk/api/client/v1/global/images/25700?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'citihitz', name: 'Citi Hitz', image: 'https://api3.viu.lk/api/client/v1/global/images/25678?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'romantico', name: 'MTV 90s', image: 'https://api3.viu.lk/api/client/v1/global/images/161765?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-9',
    title: 'Education',
    channels: [
      { id: 'nenasasinhalaal', name: 'Nenasa Sinhala Grade 1-5', image: 'https://api3.viu.lk/api/client/v1/global/images/25760?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nenasasinhalagrade6to9', name: 'Nenasa Sinhala Grade 6-9', image: 'https://api3.viu.lk/api/client/v1/global/images/25762?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nenasasinhalaol', name: 'Nenasa Sinhala O/L', image: 'https://api3.viu.lk/api/client/v1/global/images/25764?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nenasatamilal', name: 'Nenasa Tamil Grade 6-9', image: 'https://api3.viu.lk/api/client/v1/global/images/25763?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'nenasatamilol', name: 'Nenasa Tamil O/L', image: 'https://api3.viu.lk/api/client/v1/global/images/25765?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-10',
    title: 'International',
    channels: [
      { id: 'abcaustralia', name: 'ABC Australia', image: 'https://api3.viu.lk/api/client/v1/global/images/25690?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'dwprogram', name: 'DW', image: 'https://api3.viu.lk/api/client/v1/global/images/25789?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'kbskorea', name: 'KBS Korea', image: 'https://api3.viu.lk/api/client/v1/global/images/25793?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'phoenixinfo', name: 'Phoenix Info News', image: 'https://api3.viu.lk/api/client/v1/global/images/25791?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'raiitalia', name: 'RAI Italia', image: 'https://api3.viu.lk/api/client/v1/global/images/25790?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'trtworld', name: 'TRT World', image: 'https://api3.viu.lk/api/client/v1/global/images/25787?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'tv5monde', name: 'TV5 Monde Asie', image: 'https://api3.viu.lk/api/client/v1/global/images/25792?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  },
  {
    id: 'cat-11',
    title: 'HD Channels',
    channels: [
      { id: 'animalplanethd', name: 'Animal Planet HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25769?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'axnhd', name: 'AXN HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25770?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'cinemaworldhd', name: 'CinemaWorld HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25774?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'cinemaxhd', name: 'Cinemax HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25775?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'discoveryhdworld', name: 'Discovery HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25768?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hbohd', name: 'HBO HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25772?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hbohitshd', name: 'HBO Hits HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25776?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'hitsnow', name: 'HITS NOW HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25771?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'rockentertainmenthd', name: 'ROCK Entertainment HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25794?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starmovieshd', name: 'Star Movies HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25773?accessKey=WkVjNWNscFhORDBLCg==' },
      { id: 'starmoviesselecthd', name: 'Star Movies Select HD', image: 'https://api3.viu.lk/api/client/v1/global/images/25777?accessKey=WkVjNWNscFhORDBLCg==' }
    ]
  }
];

let statusElement = null;

/**
 * Builds and renders the channel grid categorized by domain
 */
function buildChannelGrid() {
  const container = document.getElementById('channelsContainer');
  if (!container) return;

  let html = '';
  CHANNEL_CATEGORIES.forEach(category => {
    html += `
      <section class="cat-section">
        <div class="cat-title">${category.title}</div>
        <div class="app-grid">`;
    category.channels.forEach(channel => {
      html += `
          <div class="channel-card" data-channel-id="${channel.id}" data-channel-name="${channel.name}" data-channel-image="${channel.image}">
            <div class="icon-box">
              <img src="${channel.image}" loading="lazy" alt="${channel.name}">
            </div>
            <span>${channel.name}</span>
          </div>`;
    });
    html += `
        </div>
      </section>`;
  });

  container.innerHTML = html;
}

/**
 * Displays fixed status notification bar
 */
function updateStatus(message, isError = false) {
  if (!statusElement) {
    statusElement = document.createElement('div');
    statusElement.id = 'status-msg';
    statusElement.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 24px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(statusElement);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  statusElement.textContent = message;
  statusElement.style.backgroundColor = isError ? '#e50914' : '#0056b3';
  statusElement.style.display = 'block';

  if (!isError) {
    setTimeout(() => {
      if (statusElement) {
        statusElement.style.display = 'none';
      }
    }, 3000);
  }
}

function showError(message) {
  updateStatus(message, true);
}

/**
 * Initializes Shaka Player and sets up event listeners
 */
async function initApp() {
  if (!window.shaka) {
    showError('Player library failed to load.');
    return;
  }

  shaka.polyfill.installAll();

  if (!shaka.Player.isBrowserSupported()) {
    showError('Browser does not support DRM playback.');
    return;
  }

  const videoElement = document.getElementById('video');
  const videoWrapper = document.querySelector('.video-wrapper');
  const player = new shaka.Player(videoElement);
  const ui = new shaka.ui.Overlay(player, videoWrapper, videoElement);

  ui.configure({
    controlPanelElements: [
      'play_pause',
      'time_and_duration',
      'spacer',
      'mute',
      'volume',
      'fullscreen',
      'overflow_menu'
    ],
    overflowMenuButtons: [
      'quality',
      'playback_rate',
      'picture_in_picture'
    ]
  });

  player.getNetworkingEngine().registerRequestFilter((type, request) => {
    request.headers['User-Agent'] = 'Mozilla/5.0';
    request.headers['Referer'] = 'https://watch.dialog.lk/';
    request.headers['Origin'] = 'https://watch.dialog.lk/';
    request.headers['Accept'] = '*/*';
  });

  const loadingSpinner = document.getElementById('loadingSpinner');

  function showSpinner() {
    if (loadingSpinner) loadingSpinner.style.display = 'block';
  }

  function hideSpinner() {
    if (loadingSpinner) loadingSpinner.style.display = 'none';
  }

  player.addEventListener('buffering', (event) => {
    event.buffering ? showSpinner() : hideSpinner();
  });

  videoElement.addEventListener('playing', hideSpinner);
  videoElement.addEventListener('waiting', showSpinner);

  player.addEventListener('error', (event) => {
    showError('Playback error');
    hideSpinner();
  });

  // Setup Search Input Filter
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      const catSections = document.querySelectorAll('.cat-section');

      catSections.forEach(section => {
        const channelCards = section.querySelectorAll('.channel-card');
        let hasVisibleChannel = false;

        channelCards.forEach(card => {
          const channelName = (card.dataset.channelName || '').toLowerCase();
          if (channelName.includes(searchTerm)) {
            card.style.display = 'flex';
            hasVisibleChannel = true;
          } else {
            card.style.display = 'none';
          }
        });

        section.style.display = hasVisibleChannel ? 'block' : 'none';
      });
    });
  }

  async function loadChannel(channelId = 'hirutv', channelName = null, channelImage = null) {
    if (!channelId) channelId = 'hirutv';

    showSpinner();
    updateStatus('Fetching stream data...');

    try {
      const endpointUrl = API_BASE_URL + channelId;
      const response = await fetch(endpointUrl);

      if (!response.ok) {
        throw new Error('Network error ' + response.status);
      }

      const responseData = await response.json();

      if (!responseData.data || !responseData.data.url) {
        throw new Error('Invalid API response');
      }

      const streamUrl = responseData.data.url;
      const licenseProxyUrl = responseData.data.wv_license_proxy_url;

      if (responseData.data.drm && responseData.data.drm.widevine && licenseProxyUrl) {
        player.configure({
          drm: {
            servers: {
              'com.widevine.alpha': licenseProxyUrl
            },
            advanced: {
              'com.widevine.alpha': {
                videoRobustness: 'SW_SECURE_CRYPTO',
                audioRobustness: 'SW_SECURE_CRYPTO'
              }
            }
          }
        });
      }

      updateStatus('Loading stream...');

      document.querySelectorAll('.channel-card').forEach(card => {
        card.classList.remove('active');
      });

      const activeCard = document.querySelector(`.channel-card[data-channel-id="${channelId}"]`);
      if (activeCard) {
        activeCard.classList.add('active');
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      await player.load(streamUrl);
      await videoElement.play().catch(() => {});
      updateStatus('Stream loaded successfully');
    } catch (err) {
      showError('Cannot play channel');
      hideSpinner();
    }
  }

  // Bind click handlers to channel cards
  document.querySelectorAll('.channel-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const channelId = card.dataset.channelId;
      const channelName = card.dataset.channelName;
      const channelImage = card.dataset.channelImage;
      loadChannel(channelId, channelName, channelImage);
    });
  });

  // Handle Fullscreen Screen Orientation Lock
  document.addEventListener('fullscreenchange', async () => {
    if (document.fullscreenElement) {
      if (screen.orientation && screen.orientation.lock) {
        try {
          await screen.orientation.lock('landscape');
        } catch (err) {}
      }
    } else {
      if (screen.orientation && screen.orientation.unlock) {
        try {
          screen.orientation.unlock();
        } catch (err) {}
      }
    }
  });

  // Load default channel
  await loadChannel('hirutv');
}

/**
 * Handles optional Telegram modal popup logic
 */
function initTelegramPopup() {
  const telegramPopup = document.getElementById('telegramPopup');
  const closePopup = document.getElementById('closePopup');
  const joinTelegramBtn = document.getElementById('joinTelegramBtn');
  const isJoined = localStorage.getItem('sltv_telegram_joined');

  if (!isJoined && telegramPopup) {
    setTimeout(() => {
      telegramPopup.style.display = 'flex';
    }, 2000);
  }

  function dismissPopup() {
    if (telegramPopup) {
      telegramPopup.style.display = 'none';
      localStorage.setItem('sltv_telegram_joined', 'true');
    }
  }

  if (closePopup) closePopup.addEventListener('click', dismissPopup);

  if (joinTelegramBtn) {
    joinTelegramBtn.addEventListener('click', () => {
      setTimeout(dismissPopup, 500);
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === telegramPopup) {
      dismissPopup();
    }
  });
}

// Kickstart application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  buildChannelGrid();
  initTelegramPopup();
  initApp().catch(() => {
    showError('Player failed to initialize.');
  });
});