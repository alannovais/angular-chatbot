import { User } from "./user";

export interface PayloadMessage {
    id: number;
    text: string;
    sender: User;
}
