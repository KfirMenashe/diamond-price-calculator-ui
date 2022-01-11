export class Color {
    id:number = 0;
    name:string = '';

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static default: Color = new Color(0, 'Select color...');

}
