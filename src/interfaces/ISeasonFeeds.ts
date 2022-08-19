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
    getSeasonInfo(): Promise<SeasonInfo>
    getSeasonLeader(): Promise<SeasonLeaders>
    getSeasonLineups(): Promise<SeasonLineups>
    getSeasonLinks(): Promise<SeasonLinks>
    getSeasonMissingPlayers(): Promise<SeasonMissingPlayers>
    getSeasonPlayers(): Promise<SeasonPlayers>
    getSeasonProbabilities(): Promise<SeasonProbabilities>
    getSeasonOverUnderStatistics(): Promise<SeasonOverUnderStatistics>
    getSeasonSchedule(): Promise<SeasonSchedule>
    getSeasonStandings(): Promise<SeasonStandings>
    getSeasonSummaries(): Promise<SeasonSummaries>
    getSeasonTransfers(): Promise<SeasonTransfers>
}