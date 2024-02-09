import React, { useEffect, useState, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LogsDataFetch = ({ onDataLoaded }) => {
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDataLoadedCallback = useCallback(onDataLoaded, []);

  useEffect(() => {
    const jsonDataPaths = [
      "/cifar10_example/trained_models/test/resnet18/logs/metrics.jsonl",
      "/cifar10_example/trained_models/test/mobilenetv3_small_100/logs/metrics.jsonl",
      "/cifar10_example/trained_models/history.jsonl",
    ];

    const fetchData = async () => {
      try {
        const promises = jsonDataPaths.map(async (path) => {
          const response = await fetch(path, {
            headers: {
              Accept: "application/json",
            },
          });

          const textContent = await response.text();

          console.log("Response for", path, ":", textContent);

          const jsonObjects = textContent.split("\n").map((line) => {
            try {
              if (line.trim() === "") {
                return null;
              }

              console.log("Parsing JSON:", line);

              const formattedJSON = JSON.stringify(JSON.parse(line), null, 2);

              console.log("Formatted JSON:", formattedJSON);

              const parsedJSON = JSON.parse(formattedJSON);

              return parsedJSON;
            } catch (parseError) {
              console.error("FehlerParsen ", parseError);
              return null;
            }
          });

          const filteredData = jsonObjects.filter((obj) => obj !== null);

          console.log(
            "Formatted JSON Array:",
            JSON.stringify(filteredData, null, 3)
          );

          return {
            path: path,
            data: filteredData,
          };
        });

        const results = await Promise.all(promises);
        setData(results);
        onDataLoadedCallback(results);
      } catch (error) {
        console.error("FehlerLaden der Daten:", error.message);
      }
    };

    fetchData();
  }, [onDataLoadedCallback]);

  if (!data) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <div></div>
    </div>
  );
};

export default LogsDataFetch;
