import {PlayerProfile, PlayerSummaries} from "@/types"

export interface IPlayerFeeds {
    getPlayerProfile(): Promise<PlayerProfile>
    getPlayerSummaries(): Promise<PlayerSummaries>
}