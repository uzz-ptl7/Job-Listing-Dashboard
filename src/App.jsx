import React from "react";
import JobList from "./components/JobList";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <h1>Job Listing Dashboard</h1>
        <JobList />
      </div>
    </AuthProvider>
  );
};

export default App;
