import axios from "axios";

export const getAddress = async (): Promise<void> => {
  const response = await axios.get("https://zipcoda.net/api", {
    adapter: require("axios-jsonp"),
    params: {
      zipcode: "1050011",
    },
  });
  console.log(response.data.items[0])
};
