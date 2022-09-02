import { TOfferType } from "./offer-type.type";

export interface IOffer {
    id: number,
	type: TOfferType,
	shareId: number,
	isPerformed: boolean,
	requestDate: Date,
	isDeleted: boolean
}