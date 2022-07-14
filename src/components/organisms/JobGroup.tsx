import React from "react";
import JobRow from "./jobRow";

const JobGroup = ({
  itemGroup,
  remote,
  commitment,
  featured,
  searching,
}: {
  itemGroup: any;
  remote: boolean;
  commitment: boolean;
  featured: boolean;
  searching: string;
}) => {
  let itemToDisplay: any[] = [];

  if (remote) {
    itemGroup[1].map((job: any, index: number) => {
      if (job.remotes[0]?.name) itemToDisplay.push(job);
    });
  } else if (commitment) {
    itemGroup[1].map((job: any, index: number) => {
      if (job.commitment.title !== "Full-time") itemToDisplay.push(job);
    });
  } else if (featured) {
    itemGroup[1].map((job: any, index: number) => {
      if (job.isFeatured) itemToDisplay.push(job);
    });
  } else if (searching.trim()) {
    itemGroup[1].map((job: any, index: number) => {
      if (
        job.title.toLowerCase().includes(searching.toLowerCase()) ||
        job.description.toLowerCase().includes(searching.toLowerCase()) ||
        job.company.name.toLowerCase().includes(searching.toLowerCase())
      )
        itemToDisplay.push(job);
    });
  } else {
    itemToDisplay = itemGroup[1];
  }

  return (
    <div className="mt-4 mb-8 w-full  flex flex-col">
      {itemToDisplay.length > 0 && (
        <div className="h-16 flex items-center pl-4 max-w-[30%]  bg-[#F5F5F5]">
          {itemGroup[0]}
        </div>
      )}

      <div
        className="w-full flex flex-col mt-8"
        style={{ gridTemplateColumns: "auto auto" }}
      >
        {itemToDisplay.map((job: any, index: number) => {
          return <JobRow job={job} key={`job-row-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default JobGroup;
