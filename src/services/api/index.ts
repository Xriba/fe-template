/* istanbul ignore file */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginatedUsers, User } from "src/types";
import { SERVER_URL } from "src/constants";
import "src/services/i18n";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        prepareHeaders: (headers) => {
            headers.set("Accept", "application/json");

            return headers;
        },
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<PaginatedUsers, void>({
            query: () => "/users",
            providesTags: [{ type: "User", id: "LIST" }],
        }),
    }),
});

export const { useGetUsersQuery } = api;
