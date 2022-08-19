import Soccer from "./Soccer";

//const radarKey = process.env.SPORT_RADAR_KEY || '9yj54d8rp2raaq4jjjezzu6y'

;(async () => {
    const soccerApi = new Soccer()
    const result = await soccerApi.getCompetitions()
    console.log(result)
})()