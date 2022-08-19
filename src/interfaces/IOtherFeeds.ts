import {SportEventsRemoved, SportEventsUpdated, SportEventsCreated} from "@/types"

export interface IOtherFeeds {
    getSportEventsCreated(offset: number, start: number, limit: number): Promise<SportEventsCreated>
    getSportEventsRemoved(offset: number, start: number, limit: number): Promise<SportEventsRemoved>
    getSportEventsUpdated(offset: number, start: number, limit: number): Promise<SportEventsUpdated>
}