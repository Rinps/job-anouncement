import React from "react";
import "./App.css";
import Header from "./components/Header";
import Job from "./components/Job";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header title="The Job Board" />
      <div className="jobs">
        <Job
          color="red"
          className="job"
          description="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          color="green"
          className="job"
          description="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          color="yellow"
          className="job"
          description="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          color="blue"
          className="job"
          description="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          color="indigo"
          className="job"
          description="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          color="red"
          className="job"
          description="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          color="green"
          className="job"
          description="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          color="yellow"
          className="job"
          description="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <Job
          color="blue"
          className="job"
          description="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
