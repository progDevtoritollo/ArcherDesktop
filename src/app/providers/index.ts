import compose from "compose-function";
import { withRouter } from "./with-router";
import { withQuery } from "./with-query";
import { withStore } from "./with-store";

export const withProviders = compose(withRouter, withStore,withQuery );