import { Clarity } from "./clarity";
import { Color } from "./color";
import { Shape } from "./shape";

export class DiamondCharacteristics {

    shapes: Shape[] | undefined | null = null;
    colors: Color[] | undefined | null = null;
    clarities: Clarity[] | undefined | null = null;

    static create(response: DiamondCharacteristics | null): DiamondCharacteristics {
        const diamondCharacteristics = new DiamondCharacteristics();
        diamondCharacteristics.shapes = response?.shapes?.map(s => new Shape(s.id, s.name));
        diamondCharacteristics.colors = response?.colors?.map(c => new Color(c.id, c.name));
        diamondCharacteristics.clarities = response?.clarities?.map(c => new Shape(c.id, c.name));
        return diamondCharacteristics;
    }


}
