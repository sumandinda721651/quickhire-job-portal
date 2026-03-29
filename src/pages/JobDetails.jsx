import { useParams } from "react-router-dom";
import { useState } from "react";
import "./JobDetails.css";

function JobDetails({ jobs }) {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!job) return <h2>Job not found</h2>;

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.resume) {
    alert("Please upload your resume");
    return;
  }

  const application = {
    ...formData,
    jobTitle: job.title,
    location: job.location,
    id: Date.now(),
  };

  const existing = JSON.parse(localStorage.getItem("applications")) || [];

  localStorage.setItem(
    "applications",
    JSON.stringify([...existing, application])
  );

  setSubmitted(true);
};

  return (
    <div className="job-details">
  <div className="job-container">
    
    <h1>{job.title}</h1>

    
    <p className="company">{job.company}</p>

    
    <div className="job-meta">
      <span>📍 {job.location}</span>
      <span>💰 {job.salary}</span>
      <span className="badge">{job.type}</span>
    </div>

    
    <p className="posted">⏱ Posted: {job.posted}</p>

    <hr />

    
    <h3>Job Description</h3>
    <p>
      We are looking for a motivated candidate to join our team.
      You will be responsible for daily operations and ensuring smooth workflow.
    </p>

    
    <h3>Responsibilities</h3>
    <ul>
      <li>Handle daily tasks efficiently</li>
      <li>Work with team members</li>
      <li>Maintain quality and productivity</li>
    </ul>

    
    <h3>Requirements</h3>
    <ul>
      <li>Basic communication skills</li>
      <li>Willingness to learn</li>
      <li>Hardworking and punctual</li>
    </ul>

    <hr />

    {/* APPLY FORM */}
    <h2 className="form-title">Apply for this Job</h2>

    {submitted ? (
      <p className="success">✅ Application submitted successfully!</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />

        <label>Upload Resume (PDF/DOC)</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />

        <button type="submit">Submit Application</button>
      </form>
    )}

  </div>
</div>
  );
}

export default JobDetails;