/* istanbul ignore file */
/* eslint-disable */
/* tslint:disable */
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
