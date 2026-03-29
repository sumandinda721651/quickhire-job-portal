import JobCard from "./JobCard";
import "./JobList.css";

function JobList({ jobs }) {
  return (
    <div className="job-list">
      <h2>Latest Jobs</h2>

      <div className="jobs">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found ..!!</p>
        )}
      </div>
    </div>
  );
}

export default JobList;