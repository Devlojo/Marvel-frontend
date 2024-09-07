import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/Character.css";
import Loading from "../components/Loading";
import { MdFavoriteBorder } from "react-icons/md";

const Character = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--bf7zj7wtgltq.code.run/character/${characterId}`
      );

      // On stocke l'id des comics pour préparer une requete et recupérer les infos du comic
      const comicsId = response.data.comics;

      // On créer un tableau vide qui va servir à stocker les données de la réponse de la requête
      const comicsCopy = [];

      // ComicsId étant un tableau, on boucle en faisant une requête à chaque tour de boucle en mettant en params l'id du comic
      for (let comicId of comicsId) {
        // récupération des informations liés à un comic particulier via le params comicId
        const comicsData = await axios.get(
          `http://localhost:8000/comic/${comicId}`
        );

        // Ajout des données dans le tableau
        comicsCopy.push(comicsData.data);
      }
      // Ajout de tout les données extrait depuis la requête dans le state comics
      setComics(comicsCopy);

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <main>
        <article className="character-container">
          <div className="character-description-container">
            <img
              src={
                data.thumbnail.path +
                "/portrait_uncanny." +
                data.thumbnail.extension
              }
              alt={`photo de ${data.name}`}
              className="character-image"
            />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
          {/*<MdFavoriteBorder className="heart-icon" />*/}

          <div className="comics-container">
            {comics.map((comic) => {
              return (
                <Link to={`/comic/${comic._id}`} key={comic._id}>
                  <div className="comics-items">
                    <img
                      src={
                        comic.thumbnail.path +
                        "/portrait_medium." +
                        comic.thumbnail.extension
                      }
                      alt={`photo de ${comic.title}`}
                    />
                    <div className="comic-description-container">
                      <h2>{comic.title}</h2>
                      <p>{comic.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
};

export default Character;
