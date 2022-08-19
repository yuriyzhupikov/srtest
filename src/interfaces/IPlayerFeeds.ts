import {PlayerProfile, PlayerSummaries} from "@/types"

export interface IPlayerFeeds {
    getPlayerProfile(player: string): Promise<PlayerProfile>
    getPlayerSummaries(player: string): Promise<PlayerSummaries>
}