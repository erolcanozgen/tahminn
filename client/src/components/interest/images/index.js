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
    otherSports: {
        americanFootball: require('./others/american_football.png'),
        baseball: require('./others/baseball.png'),
        cycling: require('./others/cycling.jpg'),
        formulaOne: require('./others/formula1.jpg'),
        olympics: require('./others/olympics.jpg'),
        snooker: require('./others/snooker.png'),
        tennis: require('./others/tennis.png'),
    }
}

module.exports = images;