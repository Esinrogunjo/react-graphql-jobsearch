import { client } from "./../../main";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_JOBS } from "../query";
import { getAllJobs } from "../services";

// if (data.jobs.length > 0) {
//   const fetchedDates = data.jobs.map((item: any, _index: number) => {
//     const date = new Date(item.postedAt).toDateString();
//     return date;
//   });
// }

const groupBy = (keys: any) => (array: any) =>
  array.reduce((objectsByKeyValue: any, obj: any) => {
    const fetchedDates = array.map((item: any, _index: number) => {
      const date = new Date(item.postedAt).toDateString();
      return date;
    });
    // const uniqueDates = [...new Set(fetchedDates)];

    const value = keys.map((key: any) => obj[key]).join("-");

    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const initialData = async () => {
  const fetchedJobs = await getAllJobs();
  if (fetchedJobs?.loading) return "loading";
  if (fetchedJobs?.error) return "error";
  const groupByDate = groupBy(["postedAt"]);
  const newData = fetchedJobs?.data.jobs.map((item: any) => {
    return { ...item, postedAt: new Date(item.postedAt).toDateString() };
  });

  const newGroup = groupByDate(newData);

  return newGroup;
};
