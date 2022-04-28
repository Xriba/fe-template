import { PaginatedUsers, UserResults } from "src/types";

export interface ReceivedPagination {
    rowsPerPage: number;
    pageNumber: number;
    sortBy: null | string;
    sortDirection: null | string;
    totalPages: number;
    totalElements: number;
}

export interface ReceivedPaginatedUsers {
    data: UserResults;
    correlationId: string;
    metadata: {
        error: boolean;
        messages: string[];
        validations: { field: string; errors: string[] }[];
        pagination: ReceivedPagination;
    };
}

const PaginatedUsers = {
    // From the API
    fromAPI: (user: ReceivedPaginatedUsers): PaginatedUsers => {
        const {
            metadata: { pagination },
            data,
        } = user;

        return {
            results: data,
            pagination: {
                current_page: pagination.pageNumber + 1,
                has_next: pagination.pageNumber < pagination.totalPages - 1,
                has_prev: pagination.pageNumber > 0,
                items_per_page: pagination.rowsPerPage,
                number_of_pages: pagination.totalPages,
                total_items: pagination.totalElements,
            },
        };
    },
};

export default PaginatedUsers;
