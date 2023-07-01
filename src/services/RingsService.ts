import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

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
            transformResponse: (response: any) => {
                const newData = response.docs.map((el: CharacterApiElement) => ({
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
                }));
                return {
                    docs: newData,
                    limit: response.limit,
                    page: response.page,
                    pages: response.pages
                }
            },
            providesTags: ["character"]
        })
    })
})