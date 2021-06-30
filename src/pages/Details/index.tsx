import { useEffect, useState } from "react";
import { css } from "@emotion/react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Spinner } from "../../components/Spinner";

import { useProfiler } from "../../contexts/UserContext";
import { api } from "../../services/api";

import { formatDate } from "../../utils/formatDate";

import "./styles.scss";

export default function Details() {
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [created, setCreated] = useState("");
  const [updated, setUpdated] = useState("");
  const [size, setSize] = useState();
  const [stars, setStars] = useState();
  const [language, setLanguage] = useState();
  const [branch, setBranch] = useState();
  const [loading, setLoading] = useState(true);

  const { repoName, login } = useProfiler();

  useEffect(() => {
    api
      .get(`https://api.github.com/repos/${login}/${repoName}`)
      .then((response) => {
        let createdFormat = formatDate(response.data.created_at);
        let updatedFormat = formatDate(response.data.updated_at);

        setOwner(response.data.owner.login);
        setDescription(response.data.description);
        setCreated(createdFormat);
        setUpdated(updatedFormat);
        setSize(response.data.size);
        setStars(response.data.stargazers_count);
        setLanguage(response.data.language);
        setBranch(response.data.default_branch);
        setLoading(false);
      });
  }, [repoName, login]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          {loading ? (
            <Spinner
              loading={loading}
              css={css`
                top: calc(50% - 2.25rem);
                left: calc(50% - 2.25rem);
                transform: translate(-50%, -50%);
              `}
            />
          ) : (
            <>
              <header>
                <h2>{repoName}</h2>
                <div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2.66667L20.12 11.0133L29.3333 12.36L22.6666 18.8533L24.24 28.0267L16 23.6933L7.75996 28.0267L9.33329 18.8533L2.66663 12.36L11.88 11.0133L16 2.66667Z"
                      stroke="#F0F6FC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{stars}</span>
                </div>
              </header>
              <h5>Descrição:</h5>
              <p>{description === null ? "-" : description}</p>

              <h5>Proprietário:</h5>
              <p>{owner}</p>

              <h5>Criado em:</h5>
              <p>{created}</p>

              <h5>Atualizado em:</h5>
              <p>{updated}</p>

              <h5>Linguagem:</h5>
              <p>{language === null ? "-" : language}</p>

              <h5>Branch padrão:</h5>
              <p>{branch}</p>

              <h5>Tamanho:</h5>
              <p>{size}KB</p>
            </>
          )}
        </div>

        <Card />
      </div>
    </>
  );
}
