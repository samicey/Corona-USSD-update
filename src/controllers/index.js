const axios = require("axios");

exports.USSDConnect = async (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

      
  
   let response = "", data;
 
  
   switch (text) {
     case "":
       response = "CON Welcome to Corona Update in Nigeria \n 1. Nigeria Update \n 2. World Update"
       break;

      case "1":
      data = await axios.get("https://corona.lmao.ninja/v2/countries/nigeria?yesterday=true");
      response = `CON 
      Nigeria 
      Total Cases: ${data.data.cases}
      Number Recovered: ${data.data.recovered}
      Total Active Cases: ${data.data.active}
      Number of Death: ${data.data.deaths}
      Number of Cases (24HRS): ${data.data.todayCases}

      Please Wash your hands and stay at home. For more information visit
      ncdc.gov.ng
      @built by Obikaonu Samuel
      `;
      break;
 
     case "2":
      data = await axios.get("https://corona.lmao.ninja/v2/all");
      response = `CON 
      World Wide 
      Total Cases: ${data.data.cases}
      Number Recovered: ${data.data.recovered}
      Total Active Cases: ${data.data.active}
      Number of Death: ${data.data.deaths}
      Number of Cases Today: ${data.data.todayCases}

      Please Wash your hands and stay at home. For more information visit
      ncdc.gov.ng
      @built by Obikaonu Samuel
      `;
      break;      
     default:
       response = "";
       break;
   }
  return res.send(response);
};


exports.Home = (req,res)=>{

  res.status(200).json({success:true, message:"App Connected Successfully" })
}