export class Clarity {
    id: number = 0;
    name: string = '';

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static default: Clarity = new Clarity(0, 'Select clarity...');
}
