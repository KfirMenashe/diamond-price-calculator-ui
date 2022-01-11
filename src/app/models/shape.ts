export class Shape {

    id: number = 0;
    name: string = '';

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static default: Shape = new Shape(0, 'Select shape...');
}
