import { User } from 'app/core';

export class Event {
    constructor(
        public id?: any,
        public creator?: User,
        public createDate?: Date,
        public startDate?: Date,
        public endDate?: Date,
        public latitude?: number,
        public longtitude?: number,
        public title?: string,
        public description?: string,
        public rating?: number
    ) {}
}
