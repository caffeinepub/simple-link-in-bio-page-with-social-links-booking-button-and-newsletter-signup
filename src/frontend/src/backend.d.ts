import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface backendInterface {
    getAllSubscribers(): Promise<Array<[string, Time]>>;
    getSubscriber(email: string): Promise<Time>;
    isSubscribed(email: string): Promise<boolean>;
    joinNewsletter(email: string): Promise<void>;
    unsubscribe(email: string): Promise<void>;
}
