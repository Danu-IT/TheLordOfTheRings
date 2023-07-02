interface QuoteApi {
    docs: QuoteApiElement [];
}

interface QuoteApiElement {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
}

interface QuoteCustom {
    docs: QuoteCustomElement [];
}

interface QuoteCustomElement {
    id: string;
    dialog: string;
    movie: string;
    character: string;
}