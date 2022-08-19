import {LeagueTimeline, SportEventFunFacts, SportEventLineups, SportEventSummary, SportEventTimeline} from "@/types"

export interface ISportEventFeeds {
    getLeagueTimeline(sportEvent: string): Promise<LeagueTimeline>
    getSportEventFunFacts(sportEvent: string): Promise<SportEventFunFacts>
    getSportEventLineups(sportEvent: string): Promise<SportEventLineups>
    getSportEventSummary(sportEvent: string): Promise<SportEventSummary>
    getSportEventTimeline(sportEvent: string): Promise<SportEventTimeline>
}