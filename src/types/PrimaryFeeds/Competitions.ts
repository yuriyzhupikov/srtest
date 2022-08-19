export type Competitions = {
    competitions: [Competition]
}

export type CompetitionPart = {
    id: string
    name: string
    gender: string
    parent_id: string
    type: string
}

type Competition = {
    category: {
        id: string
        name: string
        country_code: string
    } & CompetitionPart
}