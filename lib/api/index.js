import axios from "axios";
import { PATHS } from "@/constants/paths";

export const sendComments = async (data) => {
  const req = {
    url: PATHS.COMMENTS_API,
    headers: { "content-type": "application/json" },
    method: "POST",
    data: data,
  };

  return new Promise((resolve, reject) => {
    axios(req)
      .then(() => {
        resolve("Your comments were sent successfully, thank you.");
      })
      .catch((error) => {
        console.warn(error);
        reject(
          "We're sorry, unfortunately an error occurred.  Please, send us an email at 'info@songeraudio.com"
        );
      });
  });
};
