import CryptoModel from "../models/coins.mjs"
import axios from "axios"

const getCrypto = async(req,res) => {
    try{
        let deleted = await CryptoModel.deleteMany({})
        let cryptodata = await axios.get("https://api.wazirx.com/api/v2/tickers")
        const data = cryptodata.data;
        console.log(data);
        const tickers = Object.keys(data).slice(0, 10).map(key => {
            const { name, last, buy, sell, volume, base_unit } = data[key];
            return { name, last, buy, sell, volume, base_unit };
          });
        
        let inserted = await CryptoModel.insertMany(tickers);
        return res.send(inserted)
    }catch(e){
        return res.status(401).send({message:"error"});
    }
}


export default getCrypto;

