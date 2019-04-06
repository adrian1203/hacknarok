import { User } from 'app/core';

export class Event {
    id?: any;
    creator?: User;
    createDate?: Date;
    startDate?: Date;
    endDate?: Date;
    latitude?: number;
    longtitude?: number;
    title?: string;
    description?: string;
    rating?: number;
}
