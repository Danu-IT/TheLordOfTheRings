/** Конвертация серверных данных под клиента */
export const characterConverter = (response: CharacterApi): CharacterCustomElement[] => {
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

/** Конвертация серверных данных под клиента */
export const quoteConverter = (response: QuoteApi): QuoteCustomElement[] => {
    return response.docs.map((el: QuoteApiElement) => ({
        id: el._id,
        dialog: el.dialog,
        movie: el.movie,
        character: el.character
    }))
}