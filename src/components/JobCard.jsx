import { useNavigate } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="job-card fade-in">
      <h3>{job.title}</h3>

      
      <p className="company">{job.company}</p>

     
      <p>{job.location}</p>

      
      <p className="salary">{job.salary}</p>

     
      <p className="job-type">{job.type}</p>

      
      <p className="posted">⏱ {job.posted}</p>

      <button onClick={() => navigate(`/job/${job.id}`)}>
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;