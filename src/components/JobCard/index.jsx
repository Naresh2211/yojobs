import dayjs from "dayjs";

function JobCard(props) {
  const diffInDays = dayjs().diff(dayjs(props.postedOn), "day");

  return (
<div className="mx-4 md:mx-40 mb-4">
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:scale-105 transition-transform text-black">
  <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {props.title} - {props.company}
          </h1>

          <p>
            {props.type} • {props.experience} • {props.location}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {props.skills.map((skill) => (
              <p
                key={skill}
                className="text-gray-500 py-1 px-2 rounded-md border border-black"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-gray-500">
            Posted {diffInDays} day{diffInDays !== 1 && "s"} ago
          </p>

          <a href={props.jobLink} target="_blank" rel="noreferrer">
            <button className="text-white border bg-violet-400 border-teal-500 px-10 py-2 rounded-md">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
