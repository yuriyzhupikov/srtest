import {
    LiveProbabilities,
    SeasonOutrightProbabilities,
    SportEventProbabilities,
    SportEventUpcomingProbabilities
} from "@/types"

export interface IProbabilitiesFeeds {
    getLiveProbabilities(): Promise<LiveProbabilities>
    getSportEventProbabilities(): Promise<SportEventProbabilities>
    getSeasonOutrightProbabilities(): Promise<SeasonOutrightProbabilities>
    getSportEventUpcomingProbabilities(): Promise<SportEventUpcomingProbabilities>
}