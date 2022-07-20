import _ from "lodash"

declare module 'lodash'{
    interface LoDashStatic{
        multiply(multiplier:number, multiplicand:number):number
        add(augend: number, addend: number): number;
    }
}