import {
    CompetitionInfo,
    Competitions,
    CompetitionSeasons,
    DailySummaries,
    LiveSummaries,
    LiveTimelines,
    LiveTimelinesDelta, Seasons
} from "@/types"

export interface IPrimaryFeeds {
    getCompetitions(): Promise<Competitions>
    getCompetitionInfo(competitionId: string): Promise<CompetitionInfo>
    getCompetitionSeasons(competitionId: string): Promise<CompetitionSeasons>
    getDailySummaries(date: Date, offset: number, limit: number): Promise<DailySummaries>
    getLiveSummaries(): Promise<LiveSummaries>
    getLiveTimelines(): Promise<LiveTimelines>
    getLiveTimelinesDelta(): Promise<LiveTimelinesDelta>
    getSeasons(): Promise<Seasons>
}