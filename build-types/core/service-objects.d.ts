import { DateTime } from "luxon";
import { GaxiosError } from "gaxios";
export declare type OutgoingOperationType = "enrich" | "skip";
export declare type OutgoingOperationObjectType = "user";
export interface OutgoingOperationEnvelope<T, U> {
    message: T;
    serviceObject?: U;
    operation: OutgoingOperationType;
    objectType: OutgoingOperationObjectType;
    notes?: string[];
}
export interface OutgoingOperationEnvelopesFiltered<T, U> {
    enrichs: OutgoingOperationEnvelope<T, U>[];
    skips: OutgoingOperationEnvelope<T, U>[];
}
export interface GoogleAnalyticsUserActivityRequestData {
    clientIdentifiers: string[];
    userIdentifiers: string[];
    startDate: DateTime;
    endDate: DateTime;
}
export declare type GoogleAnalyticsUserIdType = "CLIENT_ID" | "USER_ID";
export declare type ApiMethod = "query";
export declare type GoogleAnalyticsMetadataType = "dimensions" | "metrics" | "customdimensions";
export interface ApiResultObject<T, U> {
    endpoint: string;
    method: ApiMethod;
    record: T | undefined;
    data: U | undefined;
    success: boolean;
    error?: string | string[];
    errorDetails?: GaxiosError;
}
export interface GoogleAnalyticsInboundParseFileInfo {
    path: string;
    name: string;
    type: string;
}
export declare type CacheScenarioType = "inboundparse" | "inboundparse_files" | "customdimensions" | "uas" | "columns";
export interface GoogleAnalyticsDimensionFilter {
    logical: "IS" | "IS NOT" | null | undefined;
    operator: "EQUAL" | "LESS_THAN" | "GREATER_THAN" | "IS_MISSING" | null | undefined;
    comparisonValue: string | null | undefined;
}
export declare type PeriodicReportType = "schedule" | "manual";
