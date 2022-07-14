import { useEffect, useState } from "react";

import "./App.css";
import SearchBtn from "./components/organisms/SearchBtn";
import FilterBox from "./components/organisms/FilterBox";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./components/store";
import { JobActions } from "./components/store/JobSlice";
import { initialData } from "./components/helper";
import JobGroup from "./components/organisms/JobGroup";

function App() {
  const dispatch = useDispatch();
  const [sorting, setSorting] = useState(true);
  const [remote, setRemote] = useState(false);
  const [commitment, setCommitment] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [searching, setSearching] = useState("");

  const initialJobData = async () => {
    const jobData = await initialData();
    dispatch(JobActions.getJobs(jobData));
  };

  useEffect(() => {
    initialJobData();
  }, []);

  let jobs = useSelector((state: RootState) => state.jobReducer.data);
  const jobArray = Object.entries(jobs);

  if (sorting) {
    jobArray.sort((a: any, b: any) => +new Date(a[0]) - +new Date(b[0]));
  } else {
    jobArray.sort((a: any, b: any) => +new Date(b[0]) - +new Date(a[0]));
  }

  return (
    <div className="w-full ">
      <main className="mx-auto  w-[70rem] flex flex-col items-center mt-[8.9375rem]">
        <>
          <SearchBtn setSearching={setSearching} />
          <FilterBox
            setSorting={setSorting}
            setRemote={setRemote}
            setCommitment={setCommitment}
            setFeatured={setFeatured}
            setSearching={setSearching}
          />
          {jobArray.map((job, index) => {
            return (
              <JobGroup
                remote={remote}
                commitment={commitment}
                key={`group-Key- ${index}`}
                itemGroup={job}
                featured={featured}
                searching={searching}
              />
            );
          })}
        </>
      </main>
    </div>
  );
}

export default App;
