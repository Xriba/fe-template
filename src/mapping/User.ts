import { UserResult } from "src/types";

export default {
    // To the API
    toAPI: (user: UserResult) => ({
        ...user,
    }),
    // From the API
    fromAPI: (user: UserResult) => ({
        ...user,
    }),
};
