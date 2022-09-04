import { TDealPreformerType,TOfferType } from "./index";

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