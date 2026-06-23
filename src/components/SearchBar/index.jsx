import { useState } from "react";

function SearchBar({ fetchJobsCustom }) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 my-10 px-4">
      <input
        type="text"
        value={value}
onChange={(e) => {
  const text = e.target.value;
  setValue(text);
  fetchJobsCustom(text);
}}        placeholder="Search by role or skill"
        className="w-full max-w-md px-4 py-3 bg-zinc-200 text-black rounded-md"
      />

      <button
        type="button"
        onClick={() => fetchJobsCustom(value)}
        className="w-full max-w-md bg-lime-600 text-white font-bold py-3 rounded-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
