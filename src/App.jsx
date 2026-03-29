import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JobList from "./components/JobList";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";

const allJobs = [
  { id: 1, title: "Delivery Boy", company: "Swiggy", location: "Kolkata", salary: "₹10,000/month", type: "Full-time", posted: "2 days ago" },
  { id: 2, title: "Shop Helper", company: "Reliance Mart", location: "Howrah", salary: "₹8,000/month", type: "Part-time", posted: "1 day ago" },
  { id: 3, title: "Office Assistant", company: "Tata Services", location: "Durgapur", salary: "₹12,000/month", type: "Full-time", posted: "3 days ago" },
  { id: 4, title: "Data Entry Operator", company: "Wipro", location: "Kolkata", salary: "₹15,000/month", type: "Full-time", posted: "Today" },
  { id: 5, title: "Receptionist", company: "Apollo Clinic", location: "Salt Lake", salary: "₹13,000/month", type: "Full-time", posted: "2 days ago" },
  { id: 6, title: "Warehouse Worker", company: "Amazon", location: "Howrah", salary: "₹11,000/month", type: "Full-time", posted: "4 days ago" },
  { id: 7, title: "Sales Executive", company: "Flipkart", location: "Kolkata", salary: "₹18,000/month", type: "Full-time", posted: "1 day ago" },
  { id: 8, title: "Security Guard", company: "SIS Security", location: "Durgapur", salary: "₹9,000/month", type: "Night Shift", posted: "5 days ago" },
  { id: 9, title: "Restaurant Helper", company: "Domino's", location: "Kolkata", salary: "₹8,500/month", type: "Part-time", posted: "Today" },
  { id: 10, title: "Electrician Assistant", company: "L&T", location: "Asansol", salary: "₹14,000/month", type: "Full-time", posted: "3 days ago" },
  { id: 11, title: "Delivery Executive", company: "Zomato", location: "Haldia", salary: "₹12,000/month", type: "Full-time", posted: "1 day ago" },
  { id: 12, title: "Cleaner", company: "Urban Company", location: "Howrah", salary: "₹7,000/month", type: "Part-time", posted: "6 days ago" },
  { id: 13, title: "Frontend Intern", company: "Infosys", location: "Kolkata", salary: "₹5,000/month", type: "Internship", posted: "Today" },
  { id: 14, title: "Back Office Staff", company: "HDFC Bank", location: "Salt Lake", salary: "₹11,000/month", type: "Full-time", posted: "2 days ago" },
  { id: 15, title: "Delivery Partner (Bike)", company: "Dunzo", location: "Kolkata", salary: "₹20,000/month", type: "Full-time", posted: "Today" },
  { id: 16, title: "Call Center Executive", company: "Tech Mahindra", location: "Howrah", salary: "₹16,000/month", type: "Full-time", posted: "3 days ago" },
  { id: 17, title: "Computer Operator", company: "TCS", location: "Durgapur", salary: "₹13,500/month", type: "Full-time", posted: "4 days ago" },
  { id: 18, title: "Housekeeping Staff", company: "ITC Hotels", location: "Kolkata", salary: "₹9,500/month", type: "Full-time", posted: "5 days ago" },
  { id: 19, title: "Part-time Tutor", company: "UrbanPro", location: "Kolkata", salary: "₹6,000/month", type: "Part-time", posted: "Today" },
  { id: 20, title: "Mobile Repair Assistant", company: "Mi Service Center", location: "Asansol", salary: "₹10,500/month", type: "Full-time", posted: "2 days ago" },
  { id: 21, title: "Delivery Associate", company: "Shadowfax", location: "Howrah", salary: "₹11,500/month", type: "Full-time", posted: "1 day ago" },
  { id: 22, title: "Field Sales Executive", company: "Paytm", location: "Kolkata", salary: "₹17,000/month", type: "Full-time", posted: "3 days ago" },
  { id: 23, title: "Office Boy", company: "Axis Bank", location: "Salt Lake", salary: "₹9,000/month", type: "Full-time", posted: "Today" },
  { id: 24, title: "Helper (Construction)", company: "DLF", location: "Durgapur", salary: "₹12,000/month", type: "Full-time", posted: "4 days ago" },
  { id: 25, title: "Packing Staff", company: "BigBasket", location: "Howrah", salary: "₹10,000/month", type: "Full-time", posted: "2 days ago" }
];

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = allJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero setSearch={setSearch} setLocation={setLocation} />
              <JobList jobs={filteredJobs} />
            </>
          }
        />

        <Route path="/job/:id" element={<JobDetails jobs={allJobs} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;