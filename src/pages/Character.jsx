import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Character = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8000/character/${characterId}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <>
      <h1>{data.name}</h1>
      <article className="character-container">
        <img
          src={
            data.thumbnail.path +
            "/portrait_uncanny." +
            data.thumbnail.extension
          }
          alt={`photo de ${data.name}`}
        />
        <p>{data.description}</p>
      </article>
    </>
  );
};

export default Character;
