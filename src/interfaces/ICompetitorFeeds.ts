import {
    CompetitorProfile,
    CompetitorSummaries,
    CompetitorVsCompetitor,
    SeasonalCompetitorPlayers,
    SeasonalCompetitorStatistics
} from "@/types"

export interface ICompetitorFeeds {
    getCompetitorProfile(): Promise<CompetitorProfile>
    getCompetitorSummaries(): Promise<CompetitorSummaries>
    getCompetitorVsCompetitor(): Promise<CompetitorVsCompetitor>
    getSeasonalCompetitorPlayers(): Promise<SeasonalCompetitorPlayers>
    getSeasonalCompetitorStatistics(): Promise<SeasonalCompetitorStatistics>
}