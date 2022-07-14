import React from "react";
import Button from "../atoms/forms/Button";

const FilterBox = ({
  setSorting,
  setRemote,
  setCommitment,
  setFeatured,
  setSearching,
}: {
  setSorting: React.Dispatch<React.SetStateAction<boolean>>;
  setRemote: React.Dispatch<React.SetStateAction<boolean>>;
  setCommitment: React.Dispatch<React.SetStateAction<boolean>>;
  setFeatured: React.Dispatch<React.SetStateAction<boolean>>;
  setSearching: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-start mt-4 md:justify-center w-full">
      <div
        onClick={() => {
          setSearching("");
          setSorting(true);
          setRemote(false);
          setCommitment(false);
          setFeatured(false);
        }}
      >
        <Button className="filter-btn mt-4 md:mt-0" label="Oldest"></Button>
      </div>
      <div
        onClick={() => {
          setSearching("");
          setSorting(false);
          setRemote(false);
          setCommitment(false);
          setFeatured(false);
        }}
      >
        <Button className="filter-btn mt-4 md:mt-0" label="Latest"></Button>
      </div>
      <div
        onClick={() => {
          setSearching("");
          setRemote(true);
          setSorting(false);
          setCommitment(false);
          setFeatured(false);
        }}
      >
        <Button className="filter-btn mt-4 md:mt-0" label="Remote"></Button>
      </div>
      {/* <div
        onClick={() => {
          setCommitment(true);
          setSorting(false);
          setRemote(false);
          setFeatured(false);
        }}
      >
        <Button className="filter-btn mt-4 md:mt-0" label="Part time"></Button>
      </div> */}

      <div
        onClick={() => {
          setSearching("");
          setFeatured(true);
          setCommitment(false);
          setSorting(false);
          setRemote(false);
        }}
      >
        <Button className="filter-btn mt-4 md:mt-0" label="Featured"></Button>
      </div>
    </div>
  );
};

export default FilterBox;
