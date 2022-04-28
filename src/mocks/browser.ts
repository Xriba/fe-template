/* istanbul ignore file */
import { setupWorker } from "msw";
import { handlers } from "src/mocks/handlers";

const worker = setupWorker(...handlers);

export default worker;
