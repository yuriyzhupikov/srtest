// import {Sports} from "./types"
// import {IApi} from "./IApi";
//
// //'https://api.sportradar.com/soccer/trial/v4/en'
//
// export class Api implements IApi {
//
//     static SPORT_RADAR_KEY = process.env.SPORTRADAR_KEY
//
//     constructor(
//         private baseUrl: string,
//         private sport: Sports,
//         private level: string,
//         private version: string,
//         private language:string
//     ) {}
//
//     public getSeasons(competitionId) {
//         return `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/competitions/${competitionId}/seasons.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
//
//     public getAllResults(season_id) {
//         return `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/seasons/${season_id}/schedules.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
//
//     public getSeasonalStats(season_id) {
//         return  `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/seasons/${season_id}/standings.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
//
//     public getDetailedMatchStats(match_id) {
//         return `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/sport_events/${match_id}/summary.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
//
//     public getDetailedMatchLineUp(match_id) {
//         return `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/sport_events/${match_id}/lineups.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
//
//     public getSeasonLeaders() {
//         return `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/seasons/sr:season:84320/leaders.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
//
//     public getFactsAboutMatch(match_id) {
//         return `${this.baseUrl}/${this.sport}/${this.level}/${this.version}/${this.language}/sport_events/${match_id}/fun_facts.json?api_key=${this.SPORT_RADAR_KEY}`
//     }
// }