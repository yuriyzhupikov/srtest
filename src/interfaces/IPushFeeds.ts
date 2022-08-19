import {PushEvents, PushStatistics} from "@/types"

export interface IPushFeeds {
    getPushEvents(): Promise<PushEvents>
    getPushStatistics(): Promise<PushStatistics>
}