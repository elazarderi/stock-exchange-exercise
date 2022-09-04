import { TDealPreformerType } from "./deal-preformer-type.type";
import { TOfferType } from "./offer-type.type";

export interface IOffer {
    id: number;
	type: TOfferType;
	offeredId: number;
	offeredType: TDealPreformerType;
	shareId: number;
	isPerformed: boolean;
	requestDate: Date;
	isDeleted: boolean;
}