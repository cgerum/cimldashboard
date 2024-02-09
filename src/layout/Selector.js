import React from "react";

const Selector = ({
  selectedExperiment,
  setSelectedExperiment,
  experimentsConfig,
}) => {
  const handleOptionChange = (event) => {
    setSelectedExperiment(event.target.value);
  };

  return (
    <div>
      <select value={selectedExperiment} onChange={handleOptionChange}>
        <option value="">Expermint</option>
        {experimentsConfig.map((exp) => (
          <option key={exp.id} value={exp.id}>
            {exp.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
