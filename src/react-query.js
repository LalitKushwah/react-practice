import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const ReactQuery = () => {
  const fetchPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return response.data.results;
  };

  const { loading, error, data } = useQuery("pokemon", fetchPokemon);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error while fetching</p>;
  return (
    <div>
      {data?.map((item) => (
        <div key={item.name}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ReactQuery;
