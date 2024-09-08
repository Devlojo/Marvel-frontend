import Loading from "../components/Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowBigDown } from "react-icons/lu";

import "./css/Home.css";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--bf7zj7wtgltq.code.run/characters`
      );

      //Récupération de tout les éléments de la response en créant une instance de la classe Array
      let items = Array.from(response.data.results);
      // recupération d'éléments aléatoires parmis la response en utilisant les methodes Math.floor(pour retourner un nombre entier) et Math.random(pour avoir un nombre aléatoire) qui est alors utilisé en tant qu'index du tableau items
      let randomItem = items[Math.floor(Math.random() * items.length)];

      setData(randomItem);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <main className="home-container">
      <h1>
        Welcome, more information about your favorite super-hero ? &#128515;
      </h1>
      <p>click here</p>
      <LuArrowBigDown className="arrow-down" />

      <div className="home-character-container">
        <Link to={`/character/${data._id}`}>
          <article className="home-character-item">
            <img
              src={
                data.thumbnail.path +
                "/portrait_fantastic." +
                data.thumbnail.extension
              }
              alt={`photo de ${data.name}`}
            />
            <h2>{data.name}</h2>
          </article>
        </Link>
      </div>
    </main>
  );
};

export default Home;
