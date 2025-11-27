import { invokeApi } from "../utils/invokeApi.js";

export const createLead = async (data) => {
  const reqObj = {
    path: "/api/CreateLeads",
    method: "POST",
    headers: {
  
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

