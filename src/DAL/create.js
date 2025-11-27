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
export const createSubscriber = async (data) => {
  const reqObj = {
    path: "/api/CreateSubscriber",
    method: "POST",
    headers: {
  
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

