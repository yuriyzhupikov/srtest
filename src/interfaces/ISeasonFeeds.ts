import {
    SeasonInfo,
    SeasonLeaders,
    SeasonLineups,
    SeasonLinks,
    SeasonMissingPlayers, SeasonOverUnderStatistics,
    SeasonPlayers,
    SeasonProbabilities, SeasonSchedule, SeasonStandings, SeasonSummaries, SeasonTransfers
} from "@/types"

export interface ISeasonFeeds {
    getSeasonInfo(season: string): Promise<SeasonInfo>
    getSeasonLeader(season: string): Promise<SeasonLeaders>
    getSeasonLineups(season: string, offset: number, start: number, limit: number): Promise<SeasonLineups>
    getSeasonLinks(season: string): Promise<SeasonLinks>
    getSeasonMissingPlayers(season: string): Promise<SeasonMissingPlayers>
    getSeasonPlayers(season: string, offset: number, limit: number, start: number): Promise<SeasonPlayers>
    getSeasonProbabilities(season: string): Promise<SeasonProbabilities>
    getSeasonOverUnderStatistics(season: string): Promise<SeasonOverUnderStatistics>
    getSeasonSchedule(season: string): Promise<SeasonSchedule>
    getSeasonStandings(season: string): Promise<SeasonStandings>
    getSeasonSummaries(season: string, offset: number, limit: number, start: number): Promise<SeasonSummaries>
    getSeasonTransfers(season: string): Promise<SeasonTransfers>
}