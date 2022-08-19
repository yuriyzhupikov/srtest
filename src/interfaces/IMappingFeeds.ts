import {CompetitorMergeMappings, PlayerMappings, PlayerMergeMappings, CompetitorMappings} from "@/types"

export interface IMappingFeeds {
    getCompetitorMappings(): Promise<CompetitorMappings>
    getCompetitorMergeMappings(): Promise<CompetitorMergeMappings>
    getPlayerMapping(): Promise<PlayerMappings>
    getPlayerMergeMappings(): Promise<PlayerMergeMappings>
}