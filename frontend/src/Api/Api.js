
const axios = require("axios");

const getNumber = async (url) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  try {
    const response = await axios.get(url, { crossdomain: true });
    console.log("response",response);
    return response.data;
    
  } catch (error) {
    console.log("error",error);
  }

}
export default getNumber;