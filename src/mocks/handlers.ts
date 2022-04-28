import { rest } from "msw";
import { SERVER_URL } from "src/constants";
import { getPaginatedUsers } from "src/mocks/data";

export const handlers = [
    /* QUERIES */
    rest.get(SERVER_URL + "/users", (req, res, ctx) => res(ctx.status(200), ctx.json(getPaginatedUsers()))),
];
