export type CompetitionSeasons = {
    generated_at: Date
    seasons: [CompetitionSeason]
}

type CompetitionSeason = {
    id: string
    name: string
    start_date: Date
    end_date: Date
    year: string
    competition_id: string
}