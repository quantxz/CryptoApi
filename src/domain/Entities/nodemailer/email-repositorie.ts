import { ExcludeTypes } from "../types/Exclude-default-types";

export interface emailRepositorie {
    sendEmail({}, {}, arg3: Exclude<any, ExcludeTypes>): any
}