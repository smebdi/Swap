export class Message {
    archived?: number;
    read?: number;
    id?: string;
    subject?: string;
    message: string;
    recipient?: string;
    sender?: string;
    dateTime?: Date;
}