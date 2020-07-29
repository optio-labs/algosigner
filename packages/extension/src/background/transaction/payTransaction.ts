import { PaymentTx } from "@algosigner/common/interfaces/pay";
import { FieldType, validate } from "../utils/validator";

///
// Mapping, validation and error checking for transaction pay transactions prior to sign.
///
export class PayTransaction implements PaymentTx {
    type: string;
    to: string;
    amount: number;
    closeRemainderTo?: string;
    from?: string;
    fee: number;
    firstRound: number;
    lastRound: number;
    note?: any;
    genesisID: string;
    genesisHash: any;
    group?: any;
    lease?: any;

    constructor(params: PayTransaction){
        // Verify there are no additional properties beyond the known property types
        for (let prop in params){
            var validProperties = ["type","to","amount","closeRemainderTo","from","fee","firstRound","lastRound","note","genesisID","genesisHash","group","lease"];

            if(!(validProperties.includes(prop))){
                throw new Error(`Transaction has additional unknown fields.`);
            }

            // Validate the property type
            let propValid = validate(prop, params[prop], FieldType.Any);
            if(!propValid)
            {
                throw Error(`Property ${prop} is not valid with a value of ${params[prop]}.`);
            }
            
            // Assign the property
            this[prop] = params[prop];
        }
    }
}
