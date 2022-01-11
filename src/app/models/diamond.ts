import { Clarity } from "./clarity";
import { Color } from "./color";
import { Shape } from "./shape";

export class Diamond {
    id: number | undefined;
    carat: number | undefined;
    shapeId: number | undefined;
    shape: Shape | undefined;
    colorId: number | undefined;
    color: Color | undefined;
    clarityId: number | undefined;
    clarity: Clarity | undefined;
    imageUrl: string | undefined;
    price: number | undefined;
}
