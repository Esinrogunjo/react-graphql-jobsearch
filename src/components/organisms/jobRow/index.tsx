import React from "react";
import Button from "../../atoms/forms/Button";
import BitsmartIcon from "../../atoms/vectors/BitsmartIcon";

const JobRow = ({ job }: { job: any }) => {
  return (
    <div
      className="w-full grid mt-8"
      style={{ gridTemplateColumns: "auto auto" }}
    >
      <div className="h-32 flex my-4 border-[1px] border-black pl-4 w-32  bg-[#F5F5F5] items-center">
        {job.company.logoUrl ? (
          <img src={job.company.logoUrl} alt="" className="w-full h-full" />
        ) : (
          <BitsmartIcon className="w-full h-full" />
        )}
      </div>
      <div className="flex  ml-8  flex-col pl-4 w-[90%]  bg-[#F5F5F5]">
        <div>
          <span className="my-4 text-xl font-bold">Title: {job.title}</span>
          <br />
          <span>Company:{job.company.name} </span>
          <br />
          <span>Featured:{job.isFeatured ? " Yes" : " No"} </span>
          <br />
          <span>
            Type:
            {job.remotes[0]?.name !== "Remote"
              ? "On-site"
              : job.remotes[0]?.name}
          </span>
        </div>

        <div className="flex flex-col w-full">
          {job.description.substring(0, 600) + "..."}
          <Button
            label="Read more"
            className="text-baseText bg-black px-8 py-4 w-[10rem] my-4"
          />
        </div>
      </div>
    </div>
  );
};

export default JobRow;
