const images = {
  football: {
      bundesliga: require('./football/bundesliga.png'),
      europeanChampionship: require('./football/european_championship.png'),
      laliga: require('./football/la-liga.png'),
      ligue1: require('./football/ligue-1.png'),
      premierLeague: require('./football/premier_league.jpeg'),
      serieA: require('./football/serie-a.png'),
      turkishLeague: require('./football/turkiye.png'),
      worldCup: require('./football/world_cup.png'),
  },
  basketball: {
      eurobasket: require('./basketball/eurobasket.jpg'),
      euroleague: require('./basketball/euroleague.jpg'),
      eurocup: require('./basketball/eurocup.png'),
      nba: require('./basketball/nba.jpg'),
      turkishLeague: require('./basketball/tbl.jpg'),
      worldCup: require('./basketball/worldcup.jpg'),
  },
  tennis: {
      wimbledon: require('./tennis/wimbledon.png'),
      rolandgarros: require('./tennis/rolandgarros.png'),
      usopen: require('./tennis/usopen.png'),
      australianopen: require('./tennis/australianopen.png')
  },
  motorsport: {
    formulaOne: require('./motorsports/formula1.jpg'),
    motogp: require('./motorsports/motogp.png'),
  },
  teams: {
    fenerbahce: require('./teams/fenerbahce.png'),
    galatasaray: require('./teams/galatasaray.png'),
    besiktas: require('./teams/besiktas.png'),
  },
  other:{
    americanFootball: require('./others/american_football.png'),
    baseball: require('./others/baseball.png'),
    cycling: require('./others/cycling.jpg'),
    olympics: require('./others/olympics.jpg'),
    snooker: require('./others/snooker.png'),
  }

}

const interests = [
  //#region football
    {
      type: "bundesliga",
      imgSource: images.football.bundesliga,
      category: "football",
    },
    {
      type: "premierLeague",
      imgSource: images.football.premierLeague,
      category: "football",
    },
    {
      type: "laliga",
      imgSource: images.football.laliga,
      category: "football",
    },
    {
      type: "serieA",
      imgSource: images.football.serieA,
      category: "football",
    },
    {
      type: "ligueOne",
      imgSource: images.football.ligue1,
      category: "football",
    },
    {
      type: "turkishLeague",
      imgSource: images.football.turkishLeague,
      category: "football",
    },
    // {
    //   type: "worldCup",
    //   imgSource: images.football.worldCup,
    //   category: "football",
    // },
    // {
    //   type: "europeanChampionship",
    //   imgSource: images.football.europeanChampionship,
    //   category: "football",
    // },
    //#endregion

    //#region basketball
    {
      type: "nba",
      imgSource: images.basketball.nba,
      category: "basketball",
    },
    {
      type: "euroleague",
      imgSource: images.basketball.euroleague,
      category: "basketball",
    },
    {
      type: "eurocup",
      imgSource: images.basketball.eurocup,
      category: "basketball",
    },
    {
      type: "tbl",
      imgSource: images.basketball.turkishLeague,
      category: "basketball",
    },
    // {
    //   type: "FIBA World Cup",
    //   imgSource: images.basketball.worldCup,
    //   category: "basketball",
    // },
    // {
    //   type: "eurobasket",
    //   imgSource: images.basketball.eurobasket,
    //   category: "basketball",
    // },
    //#endregion

    //#region tennis
    {
      type: "wimbledon",
      imgSource: images.tennis.wimbledon,
      category: "tennis",
    },
    {
      type: "rolandgarros",
      imgSource: images.tennis.rolandgarros,
      category: "tennis",
    },
    {
      type: "usopen",
      imgSource: images.tennis.usopen,
      category: "tennis",
    },
    {
      type: "australianopen",
      imgSource: images.tennis.australianopen,
      category: "tennis",
    },
    //#endregion
    //#region motorsports
    {
      type: "formula1",
      imgSource: images.motorsport.formulaOne,
      category: "motorsports",
    },
    {
      type: "motogp",
      imgSource: images.motorsport.motogp,
      category: "motorsports",
    },
    //#endregion
    {
      type: "americanfootball",
      imgSource: images.other.americanFootball,
      category: "others",
    },
    {
      type: "baseball",
      imgSource: images.other.baseball,
      category: "others",
    },
    {
      type: "cycling",
      imgSource: images.other.cycling,
      category: "others",
    },
    {
      type: "olympics",
      imgSource: images.other.olympics,
      category: "others",
    },
    
    //#region teams
    {
      type: "fenerbahce",
      imgSource: images.teams.fenerbahce,
      category: "teams",
    },
    {
      type: "galatasaray",
      imgSource: images.teams.galatasaray,
      category: "teams",
    },
    {
      type: "besiktas",
      imgSource: images.teams.besiktas,
      category: "teams",
    }
    //#endregion
  ];



module.exports = interests;