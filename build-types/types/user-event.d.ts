export interface IHullUserEventProps {
    [propName: string]: string | number | boolean | string[] | null | undefined;
}
export interface IHullUserEventContext {
    location?: any;
    page?: {
        referrer?: string;
    };
    referrer?: {
        url: string;
    } | string | null;
    os?: any;
    useragent?: string;
    ip?: string | number;
    event_id?: string | null;
    source?: string | null;
    _sid?: string | null;
    type?: string | null;
    created_at?: string | number | null;
}
export default interface IHullUserEvent {
    id?: string;
    event_id?: string;
    event: string;
    created_at: string;
    event_source?: string;
    event_type?: string;
    track_id?: string;
    user_id?: string;
    anonymous_id?: string;
    session_id?: string;
    ship_id?: string;
    app_id?: string;
    app_name?: string;
    context: IHullUserEventContext;
    properties: IHullUserEventProps;
}
