export class Exercise {
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        public sets: number,
        public reps: number,
        public weight: number,
        public todayDate: Date,
        public userId: string,
    ) {}
}

