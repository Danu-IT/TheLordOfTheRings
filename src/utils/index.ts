export const sliceEmail = (email: string | null) => {
    return !email ? false : email.charAt(0).toUpperCase() + email.split('@')[0].slice(1) 
}

export const characterConverter = (response: CharacterApi) => {
    return response.docs.map((el: CharacterApiElement) => ({
        id: el._id,
        birth: el.birth,
        death: el.death,
        gender: el.gender,
        hair: el.hair,
        name: el.name,
        race: el.race,
        realm: el.realm,
        spouse: el.spouse,
        wikiUrl: el.wikiUrl,
        like: false,
    }))
}


export const quoteConverter = (response: QuoteApi) => {
    return response.docs.map((el: QuoteApiElement) => ({
        id: el._id,
        dialog: el.dialog,
        movie: el.movie,
        character: el.character
    }))
}