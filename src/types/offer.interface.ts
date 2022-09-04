import { TDealPreformerType, TOfferType, ITrader, IShare } from ".";

export interface IOffer {
	id: number;
	type: TOfferType;
	offeredType: TDealPreformerType;
	offeredTraderId?: number;
	shareId: number;
	isPerformed: boolean;
	requestDate: Date;
	isDeleted: boolean;

	offeredTrader?: ITrader;
	share?: IShare;
}