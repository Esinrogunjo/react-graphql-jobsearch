import { client } from "../../main";
import { GET_JOBS } from "../query";

export const getAllJobs = async () => {
  try {
    const response = await client.query({ query: GET_JOBS });
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
