import {CompetitionPart} from "@/types"

export type CompetitionInfo = {
    competition: {
        children: [CompetitionPart] & CompetitionPart
    }
    generated_at: Date
    info: {
        competition_status: string
        venue_reduced_capacity: boolean
        venue_reduced_capacity_max: null
    }
}