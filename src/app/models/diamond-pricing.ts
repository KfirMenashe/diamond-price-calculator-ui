import { Clarity } from "./clarity";
import { Color } from "./color";
import { Shape } from "./shape";

export class DiamondPricing {
    carat: number | undefined;
    shape: Shape | undefined;
    color: Color | undefined;
    clarity: Clarity | undefined;
    price: number | undefined;

    get valid() {
        return this.carat && (this.carat as number) > 0.01 &&
            this.shape && this.shape.id > 0 &&
            this.color && this.color.id > 0 &&
            this.clarity && this.clarity.id > 0;
    }
}
