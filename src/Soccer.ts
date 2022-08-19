import got from 'got'

import * as type from '@/types'
import {IPrimaryFeeds} from "@/interfaces/IPrimaryFeeds"
import {ISportEventFeeds} from "@/interfaces/ISportEventFeeds"
import {ICompetitorFeeds} from "@/interfaces/ICompetitorFeeds"
import {ISeasonFeeds} from "@/interfaces/ISeasonFeeds"
import {IMappingFeeds} from "@/interfaces/IMappingFeeds"
import {IPlayerFeeds} from "@/interfaces/IPlayerFeeds"
import {IOtherFeeds} from "@/interfaces/IOtherFeeds"

export default class Soccer implements IPrimaryFeeds, ISportEventFeeds, ICompetitorFeeds, ISeasonFeeds, IMappingFeeds, IPlayerFeeds, IOtherFeeds {
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

    //Primary Feeds
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

    //Sport Event Feeds
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

    //Competitor Feeds
    public async getCompetitorProfile(competitionId: string): Promise<type.CompetitorProfile> {
        return got.get(`${this.base}/competitors/${competitionId}/profile.json`).json<type.CompetitorProfile>()
    }
    public async getCompetitorSummaries(competitionId: string): Promise<type.CompetitorSummaries> {
        return got.get(`${this.base}/competitors/${competitionId}/summaries.json`).json<type.CompetitorSummaries>()
    }
    public async getCompetitorVsCompetitor(competitionId1: string, competitionId2: string): Promise<type.CompetitorVsCompetitor> {
        return got.get(`${this.base}/competitors/${competitionId1}/versus/${competitionId2}/summaries.json`).json<type.CompetitorVsCompetitor>()
    }
    public async getSeasonalCompetitorPlayers(season: string): Promise<type.SeasonalCompetitorPlayers> {
        return got.get(`${this.base}/seasons/${season}/competitor_players.json`).json<type.SeasonalCompetitorPlayers>()
    }
    public async getSeasonalCompetitorStatistics(season: string, competition: string): Promise<type.SeasonalCompetitorStatistics> {
        return got.get(`${this.base}/seasons/${season}/competitors/${competition}/summaries.json`).json<type.SeasonalCompetitorStatistics>()
    }

    //Season Feeds
    public async getSeasonInfo(season: string): Promise<type.SeasonInfo> {
        return got.get(`${this.base}/seasons/${season}/info.json`).json<type.SeasonInfo>()
    }
    public async getSeasonLeader(season: string): Promise<type.SeasonLeaders> {
        return got.get(`${this.base}/seasons/${season}/leader.json`).json<type.SeasonInfo>()
    }
    public async getSeasonLineups(season: string, offset: number = 0, start: number = 5, limit: number = 5): Promise<type.SeasonInfo> {
        return got.get(`${this.base}/seasons/${season}/lineups.json`, { searchParams: { offset, start, limit } }).json<type.SeasonInfo>()
    }
    public async getSeasonLinks(season: string): Promise<type.SeasonLinks> {
        return got.get(`${this.base}/seasons/${season}/stages_groups_cup_rounds.json`).json<type.SeasonLinks>()
    }
    public async getSeasonMissingPlayers(season: string): Promise<type.SeasonMissingPlayers> {
        return got.get(`${this.base}/seasons/${season}/missing_players.json`).json<type.SeasonMissingPlayers>()
    }
    public async getSeasonOverUnderStatistics(season: string): Promise<type.SeasonOverUnderStatistics> {
        return got.get(`${this.base}/seasons/${season}/over_under_statistics.json`).json<type.SeasonOverUnderStatistics>()
    }
    public async getSeasonPlayers(season: string, offset: number, limit: number, start: number): Promise<type.SeasonPlayers> {
        return got.get(`${this.base}/seasons/${season}/players.json`, { searchParams: { offset, start, limit } }).json<type.SeasonOverUnderStatistics>()
    }
    public async getSeasonProbabilities(season: string): Promise<type.SeasonProbabilities> {
        return got.get(`${this.base}/seasons/${season}/probabilities.json`).json<type.SeasonProbabilities>()
    }
    public async getSeasonSchedule(season: string): Promise<type.SeasonSchedule> {
        return got.get(`${this.base}/seasons/${season}/schedules.json`).json<type.SeasonSchedule>()
    }
    public async getSeasonStandings(season: string): Promise<type.SeasonStandings> {
        return got.get(`${this.base}/seasons/${season}/standings.json`).json<type.SeasonStandings>()
    }
    public async getSeasonSummaries(season: string, offset: number, limit: number, start: number): Promise<type.SeasonSummaries> {
        return got.get(`${this.base}/seasons/${season}/summaries.json`, { searchParams: { offset, start, limit } }).json<type.SeasonSummaries>()
    }
    public async getSeasonTransfers(season: string): Promise<type.SeasonTransfers> {
        return got.get(`${this.base}/seasons/${season}/transfers.json`).json<type.SeasonTransfers>()
    }

    //Mapping Feeds
    public async getCompetitorMappings(offset: number = 0, start: number = 5, limit: number = 5): Promise<type.CompetitorMappings> {
        return got.get(`${this.base}/competitors/mappings.json`, { searchParams: { offset, start, limit } }).json<type.CompetitorMappings>()
    }
    public async getCompetitorMergeMappings(): Promise<type.CompetitorMergeMappings> {
        return got.get(`${this.base}/competitors/merge_mappings.json`).json<type.CompetitorMergeMappings>()
    }
    public async getPlayerMapping(offset: number = 0, start: number = 5, limit: number = 5): Promise<type.PlayerMappings> {
        return got.get(`${this.base}/players/mappings.json`, { searchParams: { offset, start, limit } }).json<type.PlayerMappings>()
    }
    public async getPlayerMergeMappings(): Promise<type.PlayerMergeMappings> {
        return got.get(`${this.base}/players/merge_mappings.json`).json<type.PlayerMergeMappings>()
    }

    //Player Feeds
    public async getPlayerProfile(player: string): Promise<type.PlayerProfile> {
        return got.get(`${this.base}/${player}/profile.json`).json<type.PlayerProfile>()
    }
    public async getPlayerSummaries(player: string): Promise<type.PlayerSummaries> {
        return got.get(`${this.base}/${player}/summaries.json`).json<type.PlayerSummaries>()
    }

    //Other Feeds
    public async getSportEventsCreated(offset: number = 0, start: number = 5, limit: number = 5): Promise<type.SportEventsCreated> {
        return got.get(`${this.base}/sport_events/created.json`, { searchParams: { offset, start, limit } }).json<type.SportEventsCreated>()
    }
    public async getSportEventsRemoved(offset: number = 0, start: number = 5, limit: number = 5): Promise<type.SportEventsRemoved> {
        return got.get(`${this.base}/sport_events/removed.json`, { searchParams: { offset, start, limit } }).json<type.SportEventsRemoved>()
    }
    public async getSportEventsUpdated(offset: number = 0, start: number = 5, limit: number = 5): Promise<type.SportEventsUpdated> {
        return got.get(`${this.base}/sport_events/updated.json`, { searchParams: { offset, start, limit } }).json<type.SportEventsRemoved>()
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