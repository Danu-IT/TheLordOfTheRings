import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { characterConverter, quoteConverter } from "../utils";

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
        getCharacters: build.query<CharacterCustom, null>({
            query: () => ({
                url: "/character",
                params: {page: 1, limit: 100}
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
        }) 
    })
})