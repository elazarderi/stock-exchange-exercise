SET FOREIGN_KEY_CHECKS=0;

-- shares init
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Apple', '230', '1500');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Microsoft', '330', '10000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Tesla', '1500', '1000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Ford', '33', '100000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Gamestop', '2', '230000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Meta', '100', '35000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Uniliver', '75', '17000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('BMW', '50', '10000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('McDonalds', '132', '45000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Burger King', '99', '30000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Xiaomi', '18', '100000');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('HP', '830', '1500');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('Dyson', '980', '160');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('GoldenShare', '10000000', '1');
INSERT INTO `shares` (`name`, `currentPrice`, `amount`) VALUES ('CheapShare', '1', '100000000');

-- traders init
INSERT INTO `traders` (`name`, `money`) VALUES ('Amit', '10000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Tal', '5000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Ran', '1000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Uri', '9000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Dana', '4500000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Rona', '2000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Vered', '7000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Naftali', '1000050');
INSERT INTO `traders` (`name`, `money`) VALUES ('Ronen', '8000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Samuel', '5000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Avishay', '987654321');
INSERT INTO `traders` (`name`, `money`) VALUES ('Rinat', '1234567');
INSERT INTO `traders` (`name`, `money`) VALUES ('Ella', '4567890');
INSERT INTO `traders` (`name`, `money`) VALUES ('Melany', '1000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Nicco', '100000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Dan', '50000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Eldad', '17000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Hadar', '5000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Galit', '3000000');
INSERT INTO `traders` (`name`, `money`) VALUES ('Liat', '100000');
INSERT INTO `traders` (`name`, `money`) VALUES ('lala', '100000');

-- offers init
INSERT INTO `offers` (`type`, `offeredType`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('sell', 'company', '10', '0', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('sell', 'company', '8', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('sell', 'company', '9', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('buy', 'trader', '1', '8', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('buy', 'trader', '9', '4', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('buy', 'trader', '5', '8', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('sell', 'company', '8', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('buy', 'trader', '21', '8', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('sell', 'trader', '22', '8', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('buy', 'trader', '4', '1', '1', '2022-09-04 22:05:45', '0');
INSERT INTO `offers` (`type`, `offeredType`, `offeredTraderId`, `shareId`, `isPerformed`, `requestDate`, `isDeleted`) VALUES ('sell', 'trader', '22', '1', '1', '2022-09-04 22:05:45', '0');

-- deals init
INSERT INTO `deals` (`sellerOfferId`, `buyerOfferId`, `price`) VALUES ('2', '4', '50');
INSERT INTO `deals` (`sellerOfferId`, `buyerOfferId`, `price`) VALUES ('3', '5', '330');
INSERT INTO `deals` (`sellerOfferId`, `buyerOfferId`, `price`) VALUES ('6', '7', '50');
INSERT INTO `deals` (`sellerOfferId`, `buyerOfferId`, `price`) VALUES ('9', '8', '50');
INSERT INTO `deals` (`sellerOfferId`, `buyerOfferId`, `price`) VALUES ('11', '10', '50');

-- traders-owns init
INSERT INTO `tradersOwns` (`traderId`, `shareId`) VALUES ('4', '8');
INSERT INTO `tradersOwns` (`traderId`, `shareId`) VALUES ('2', '9');

-- users init
INSERT INTO `users` (`firstName`, `lastName`, `userName`, `password`, `traderId`) VALUES ('lala', 'lala', 'lala', '$2b$10$6MRqKl0sTjztNgYABF.XJe.tCr389nvi3UK4UwFcRidlWKFiVcSf.', '21');
INSERT INTO `users` (`firstName`, `lastName`, `userName`, `password`, `traderId`) VALUES ('baba', 'baba', 'baba', '$2b$10$5tiF5RuACDKO/wKoFIKn.OgO.QNWNn.hc73Wty1xLJ38o3arC3PyW', '22');