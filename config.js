module.exports = {
  showStats: true, // Booleen | true / false
  website: {
    protocol: 'https://', // https:// or http://
    domain: 'https://ngdb.replit.app', // website link without protocol ex. discord-bot-dashboard.sexxxxx.repl.co
    port: 3000,
    cookieSecret: 'anythinghere' // Cookie secret | charaters used store client data
  },
  bot: {
    name: 'NGDB™', // Bot Name
    token: process.env.token, // Bot token if showing Stats
    logo: 'https://ngdb.replit.app/website/assets/img/ngdb.png', //Bot Logo used in embeds and favicon
    description: 'NGDB™ is an AI powered all-in-one Discord bot to make YOUR server BETTER. ', //description of your bot used in embed and website
    support: 'https://discord.gg/x6yjKV4Ux9', // support server url of your bot
    invite: 'https://discord.com/oauth2/authorize?client_id=990044779800825856', // invite link of your bot
    botlist: 'https://top.gg/bot/990044779800825856/vote', // Voting website Ex. top.gg
    feature1: {
      main: 'Unlimited AI', // Feature 1 Heading
      description: 'Have access to free unlimited generative AI and image generation.' // Feature 1 Description
    },
    feature2: {
      main: 'Customize your server completely and replace most Discord bots.', // Feature 2 Heading
      description: 'Utility' // Feature 1 Description
    },
    feature3: {
      main: 'Music', // Feature 3 Heading
      description: 'Stream 24/7 music in your Discord server from popular streaming platforms like YouTube & Spotify.' // Feature 1 Description
    }
  },
  img: {
    img1: 'https://cdn.discordapp.com/attachments/1186765829908476045/1231735534829834281/image.png?ex=66380a1c&is=6625951c&hm=68b47e4963f0f1268ffea1d57b86fe2dbfbe3b06bb50ac73c5e3f8ee297fdb7b&', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: 'https://cdn.discordapp.com/attachments/1186765829908476045/1231741466699632670/image.png?ex=66380fa2&is=66259aa2&hm=191aaf571f9a9f287f61b864d66b9eb446fa644c470ecbe36ce2366adf7e6d60&',
    img3: 'https://cdn.discordapp.com/attachments/1186765829908476045/1231736666092343347/image.png?ex=66380b29&is=66259629&hm=71dc651bc90077a489db51cec1f525b7bf92b00433b3f45b88b86175bffa6abf&',
    img4: 'https://cdn.discordapp.com/attachments/1186765829908476045/1231743715048030278/image.png?ex=663811ba&is=66259cba&hm=25dd098dbe934d5d07b3a6f2ac55887ff5400d3751abf93704e9b6ec7762af29&',
    img5: 'https://cdn.discordapp.com/attachments/1186765829908476045/1231770763799826514/image.png?ex=66382aeb&is=6625b5eb&hm=b2da9788dd4a3fd85926acf17b22ca50f0212f5ef4165830238938e99385e597&',
    img6: 'https://cdn.discordapp.com/attachments/1186765829908476045/1231774194434445422/image.png?ex=662ba7dd&is=662a565d&hm=4fdc4b217c56b3771d798e6bc71af274d1a616bd3e867a150d0cce30120e07a8&',
    img7: '',
  }

};
