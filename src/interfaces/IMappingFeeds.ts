import {CompetitorMergeMappings, PlayerMappings, PlayerMergeMappings, CompetitorMappings} from "@/types"

export interface IMappingFeeds {
    getCompetitorMappings(offset: number, start: number, limit: number): Promise<CompetitorMappings>
    getCompetitorMergeMappings(): Promise<CompetitorMergeMappings>
    getPlayerMapping(offset: number, start: number, limit: number): Promise<PlayerMappings>
    getPlayerMergeMappings(): Promise<PlayerMergeMappings>
}