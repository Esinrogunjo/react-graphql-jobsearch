import React from "react";
import JobGroup from "./JobGroup";

const JobList = ({ groupedData }: { groupedData: any }) => {
  if (groupedData) {
    groupedData.map((item: any) => {
      return <JobGroup itemGroup={item} />;
    });
  } else {
    return <h1>Data not available</h1>;
  }
};

export default JobList;
