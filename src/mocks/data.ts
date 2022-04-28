import { UserResults } from "src/types";

const now = new Date().toISOString();
const UsersIndex = 20;
const users: UserResults = [...Array(UsersIndex).keys()].reduce(
    (obj: UserResults, index: number) => {
        const id = index.toString();

        obj.by_id[id] = {
            id,
            email: "user_" + id + "@example.com",
            firstName: "First name " + id,
            lastName: "Last name " + id,
            created_at: now,
            updated_at: now,
        };
        obj.all_ids.push(id);

        return obj;
    },
    { by_id: {}, all_ids: [] }
);

export const getPaginatedUsers = () => ({
    metadata: {
        pagination: {
            rowsPerPage: 20,
            pageNumber: 0,
            sortBy: null,
            sortDirection: null,
            totalPages: 5,
            totalElements: 103,
        },
    },
    data: { ...users },
});
