import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { characterConverter, quoteConverter } from "../../utils/converter";
import { CharacterApi, CharacterCustom } from "../../type/character";
import { QuoteApi, QuoteCustom } from "../../type/quote";
import { MovieApi } from "../../type/movie";

export const ringsAPI = createApi({
    reducerPath: "ringsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://the-one-api.dev/v2",
        prepareHeaders: (headers) => {
            headers.set("Authorization", "Bearer " + process.env.REACT_APP_API);
            headers.set("Content-Type", "application/json");
            return headers;
        }
    }),
    tagTypes: ["character"],
    endpoints: (build) => ({
        getCharacters: build.query<CharacterCustom, { page: number, name: string, sort: string, race: string }>({
            query: ({ page, name, sort, race }) => ({
                url: "/character",
                params: { page: page, limit: 100, name: `/${name}/i`, sort: `name:${sort}`, race: race }
            }),
            transformResponse: (response: CharacterApi) => {
                const newData = characterConverter(response);

                return {
                    docs: newData,
                    limit: response.limit,
                    page: response.page,
                    pages: response.pages
                }
            },
            providesTags: (result) => ["character"],
        }),
        getCharacter: build.query<CharacterCustom, string>({
            query: (id: string) => ({
                url: `/character/${id}`
            }),
            transformResponse: (response: CharacterApi) => {
                const newData = characterConverter(response);
                return {
                    docs: newData,
                    limit: response.limit,
                    page: response.page,
                    pages: response.pages
                }
            },
            providesTags: (result) => ["character"],
        }),
        getCharacterQuot: build.query<QuoteCustom, string>({
            query: (id: string) => ({
                url: `/character/${id}/quote`
            }),
            transformResponse: (response: QuoteApi) => {
                const newData = quoteConverter(response);
                return {
                    docs: newData,
                };
            },
            providesTags: (result) => ["character"],
        }),
        getMovieId: build.query<MovieApi, string>({
            query: (id: string) => ({
                url: `/movie/${id}`
            }),
            providesTags: (result) => ["character"],
        }),
        getCharacterSpecific: build.query<CharacterCustom, void>({
            query: () => ({
                url: "/character",
                params: { name: `Frodo Baggins,Aragorn II Elessar,Gandalf,Legolas,Gimli,Sauron,Faramir` }
            }),
            transformResponse: (response: CharacterApi) => {
                const newData = characterConverter(response);

                return {
                    docs: newData,
                    limit: response.limit,
                    page: response.page,
                    pages: response.pages
                }
            },
            providesTags: (result) => ["character"],
        }),
    })
})
