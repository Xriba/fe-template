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
    pagination: {
        current_page: 1,
        has_next: false,
        has_prev: false,
        items_per_page: 30,
        number_of_pages: 1,
        total_items: 20,
    },
    results: { ...users },
});
