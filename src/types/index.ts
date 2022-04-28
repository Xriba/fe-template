import { TableResult } from "@xriba/ui";

export interface Pagination {
    current_page: number;
    has_next: boolean;
    has_prev: boolean;
    items_per_page: number;
    number_of_pages: number;
    total_items: number;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserResult extends TableResult, User {
    id: string;
    created_at: string;
    updated_at: string;
}

export interface UserResults {
    by_id: {
        [index: string]: UserResult;
    };
    all_ids: string[];
}

export interface PaginatedUsers {
    pagination: Pagination;
    results: UserResults;
}
