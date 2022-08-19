import {
    CompetitorProfile,
    CompetitorSummaries,
    CompetitorVsCompetitor,
    SeasonalCompetitorPlayers,
    SeasonalCompetitorStatistics
} from "@/types"

export interface ICompetitorFeeds {
    getCompetitorProfile(competitionId: string): Promise<CompetitorProfile>
    getCompetitorSummaries(competitionId: string): Promise<CompetitorSummaries>
    getCompetitorVsCompetitor(competitionId1: string, competitionId2: string): Promise<CompetitorVsCompetitor>
    getSeasonalCompetitorPlayers(season: string): Promise<SeasonalCompetitorPlayers>
    getSeasonalCompetitorStatistics(season: string, competition: string): Promise<SeasonalCompetitorStatistics>
}