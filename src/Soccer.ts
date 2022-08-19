import got from 'got'

import * as type from '@/types'
import {IPrimaryFeeds} from "@/interfaces/IPrimaryFeeds"
import {ISportEventFeeds} from "@/interfaces/ISportEventFeeds"

export default class Soccer implements IPrimaryFeeds, ISportEventFeeds {
    //private readonly key: string
    //private readonly sport: string
    private readonly lang: string
    //private readonly version: string
    //private readonly access_level: string
    private readonly base: string

    constructor(options?: any) {
        //this.key = API_KEY

        //this.sport = options?.sport ||'soccer'
        this.lang = options?.language || 'en'
        //this.access_level = options?.access_level ||'trial'
        //this.version = options?.version || 'v4'

        this.base = `https://67aa4d5c-9c56-41be-850c-91eacac5642c.mock.pstmn.io/${this.lang}` // https://api.sportradar.com/soccer/trial/v4
    }

    public get client() {
        return got.extend({
            prefixUrl: this.base,
            //searchParams: { api_key: this.key }
        })
    }

    //IPrimaryFeeds
    public async getCompetitions(): Promise<type.Competitions> {
        return this.client.get('/competitions.json').json<type.Competitions>()
    }

    public async getCompetitionInfo(competitionId: string): Promise<type.CompetitionInfo> {
        return got.get(`${this.base}/competitions/${competitionId}/info.json`).json<type.CompetitionInfo>()
    }

    public async getCompetitionSeasons(competitionId: string): Promise<type.CompetitionSeasons> {
        return got.get(`${this.base}/competitions/${competitionId}/seasons.json`).json<type.CompetitionSeasons>()
    }

    public async getDailySummaries(date: Date, offset: number = 0, limit: number = 5): Promise<type.DailySummaries> {
        return got.get(`${this.base}/schedules/${date}/summaries.json`, { searchParams: { offset, limit }}).json<type.DailySummaries>()
    }

    public async getLiveSummaries(): Promise<type.LiveSummaries> {
        return got.get(`${this.base}/schedules/live/summaries.json`).json<type.LiveSummaries>()
    }

    public async getLiveTimelines(): Promise<type.LiveTimelines> {
        return got.get(`${this.base}/schedules/live/timelines.json`).json<type.LiveTimelines>()
    }

    public async getLiveTimelinesDelta(): Promise<type.LiveTimelinesDelta> {
        return got.get(`${this.base}/schedules/live/timelines_delta.json`).json<type.LiveTimelinesDelta>()
    }

    public async getSeasons(): Promise<type.Seasons> {
        return got.get(`${this.base}/schedules/live/timelines_delta.json`).json<type.Seasons>()
    }

    //ISportEventFeeds
    public async getLeagueTimeline(sportEvent: string): Promise<type.LeagueTimeline> {
        return got.get(`${this.base}/sport_events/${sportEvent}/league_timeline.json`).json<type.Seasons>()
    }

    public async getSportEventFunFacts(sportEvent: string): Promise<type.SportEventFunFacts> {
        return got.get(`${this.base}/sport_events/${sportEvent}/fun_facts.json`).json<type.Seasons>()
    }

    public async getSportEventLineups(sportEvent: string): Promise<type.SportEventLineups> {
        return got.get(`${this.base}/sport_events/${sportEvent}/lineups.json`).json<type.Seasons>()
    }

    public async getSportEventSummary(sportEvent: string): Promise<type.SportEventSummary> {
        return got.get(`${this.base}/sport_events/${sportEvent}/summary.json`).json<type.Seasons>()
    }

    public async getSportEventTimeline(sportEvent: string): Promise<type.SportEventTimeline> {
        return got.get(`${this.base}/sport_events/${sportEvent}/timeline.json`).json<type.Seasons>()
    }



    // schedule (date: string) {
    //     return new Promise((resolve, reject) => {
    //         this.client.get(`schedules/${date}/schedule.${this.format}`)
    //             .then(response => resolve(response))
    //             .catch(error => reject(error));
    //     })
    // }
    //
    // result (date: string) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.base}/schedules/${date}/results.json?api_key=${this.key}`)
    //             .then(response => resolve(response))
    //             .catch(error => reject(error));
    //     });
    // }
    //
    // match (type: string, matchId: string) {
    //     const validTypes = {
    //         timeline: true, lineups: true,
    //         probabilities: true, summary: true
    //     };
    //
    //     if (type === 'timeline' && this.sport !== 'csgo') {
    //         throw new Error('Match timeline is only available for Counter-Strike Global Offensive.');
    //     }
    //
    //     return new Promise((resolve, reject) => {
    //         if (!validTypes[type]) {
    //             return reject('Invalid type');
    //         }
    //
    //         axios.get(`${this.base}/matches/${matchId}/${type}.json?api_key=${this.key}`)
    //             .then(response => resolve(response))
    //             .catch(error => reject(error));
    //     });
    // }
    //
    // head2head (teamId1: string, teamId2: string) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.base}/teams/${teamId1}/versus/${teamId2}/matches.json?api_key=${this.key}`)
    //             .then(response => resolve(response))
    //             .catch(error => reject(error));
    //     });
    // }
    //
    // player (playerId: string) {
    //     const validTypes = {
    //         timeline: true, lineups: true,
    //         probabilities: true, summary: true
    //     };
    //
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.base}/player/${playerId}/profile.json?api_key=${this.key}`)
    //             .then(response => resolve(response))
    //             .catch(error => reject(error));
    //     });
    // }
    //
    // team (type: string, teamId: string) {
    //     const validTypes = {
    //         profile: true, results: true, schedule: true
    //     };
    //
    //     return new Promise((resolve, reject) => {
    //         if (!validTypes[type]) {
    //             axios.get(`${this.base}/teams.json?api_key=${this.key}`)
    //                 .then(response => resolve(response))
    //                 .catch(error => reject(error));
    //         } else {
    //             axios.get(`${this.base}/teams/${teamId}/${type}.json?api_key=${this.key}`)
    //                 .then(response => resolve(response))
    //                 .catch(error => reject(error));
    //         }
    //     });
    //
    // }
}