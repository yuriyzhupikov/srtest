import {SportEventsRemoved, SportEventsUpdated, SportEventsCreated} from "@/types"

export interface IOtherFeeds {
    getSportEventsCreated(): Promise<SportEventsCreated>
    getSportEventsRemoved(): Promise<SportEventsRemoved>
    getSportEventsUpdated(): Promise<SportEventsUpdated>
}