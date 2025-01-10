import { cardInformationFunc, Price_Description } from "../models/bookingModel";

export const priceDescription = async (req,res) => {
    const { totalAmountQuoted, MCO_Description, AirlineName, TypeOfCharge, AirlineCost} = req.body;
    console.log(req.body);
    try {
        const newTotalAmountQuoted =  totalAmountQuoted;
        const newMCO_Description =  MCO_Description;
        const newAirlineName =  AirlineName;
        const newTypeOfCharge =  TypeOfCharge;
        const newAirlineCost =  AirlineCost;
        const sql = await Price_Description(newTotalAmountQuoted,newMCO_Description,newAirlineName,newTypeOfCharge,newAirlineCost);
        if (sql) {
            res.status(201).json({
                totalAmountQuoted: totalAmountQuoted,
                MCO_Description: MCO_Description,
                AirlineName: AirlineName,
                TypeOfCharge: TypeOfCharge,
                AirlineCost: AirlineCost
            });
        }
    } catch (error) {
        console.log("Error in Bookings Controller: " + error.message);
       return res.status(500).json({message: "Server Error"})
    }
}

export const cardInformation = async (req, res) => {
    const {CardNumber,Expiration,Arl_Confirmation,CardType,CVV,Email,Currency,Billing_Phone} = req.body;
    try {
        const newCardNumber = CardNumber;
        const newExpiration = Expiration;
        const newArl_Confirmation = Arl_Confirmation;
        const newCardType = CardType;
        const newCVV = CVV;
        const newEmail = Email;
        const newCurrency = Currency;
        const newBilling_Phone = Billing_Phone;
        const sql = await cardInformationFunc(newCardNumber,newExpiration,newArl_Confirmation,newCardType,newCVV,newEmail,newCurrency,newBilling_Phone)

    } catch (error) {
        console.log("Error in cardInformation Controller: " + error.message);
        res.status(500).json({message: "Server Error"})
    }
}
export const headerController = async (req,res) => {
    const {subjectLine,cardHolderName,TFN,billingAddress}=req.body;
}