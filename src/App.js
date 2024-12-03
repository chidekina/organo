import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Data-Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [workers, setWorkers] = useState([]);

  const newWorkerAdded = (worker) => {
    setWorkers([...workers, worker]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        teams={teams.map((team) => team.name)}
        workerAdded={(worker) => newWorkerAdded(worker)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          workers={workers.filter((worker) => worker.team === team.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
