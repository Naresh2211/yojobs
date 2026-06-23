import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase/firebase.config";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  const fetchJobs = async () => {
    const q = query(collection(db, "jobs"), orderBy("postedOn", "desc"));
    const snapshot = await getDocs(q);

    const temp = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      postedOn: doc.data().postedOn?.toDate(),
    }));

    setAllJobs(temp);
    setJobs(temp);
  };

  const fetchJobsCustom = (text) => {
  if (!text.trim()) {
    setJobs(allJobs);
    return;
  }

  const searchText = text.toLowerCase();

  const filtered = allJobs.filter((job) =>
  job.title.toLowerCase().includes(searchText) ||
  job.company.toLowerCase().includes(searchText) ||
  job.location.toLowerCase().includes(searchText) ||
  job.experience.toLowerCase().includes(searchText) ||
  job.skills.some((skill) =>
    skill.toLowerCase().includes(searchText)
  )
);

  setJobs(filtered);
};

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />

      {jobs.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 font-medium">
            No jobs found
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Try searching with a different role
          </p>
        </div>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))
      )}
    </div>
  );
}

export default App;
