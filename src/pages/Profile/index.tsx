import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { css } from "@emotion/react";

import { useProfiler } from "../../contexts/UserContext";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { RepoItem } from "../../components/RepoItem";
import { Spinner } from "../../components/Spinner";

interface RepoItemProps {
  name: string;
}

export default function Profile() {
  const { reposURL } = useProfiler();

  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<RepoItemProps[]>([]);

  function toastError() {
    toast.error(
      "Ocorreu um erro durante a requisição por favor, tente novamente!",
      {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      }
    );
  }

  useEffect(() => {
    api
      .get(`${reposURL}?per_page=100`)
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(() => {
        toastError();
      });
  }, [reposURL]);

  return (
    <>
      <Header />
      <div className="container">
        <ul>
          {loading && (
            <Spinner
              loading={loading}
              css={css`
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              `}
            />
          )}
          {repos.map((item) => {
            return <RepoItem name={item.name} key={item.name} />;
          })}
        </ul>
        <Card />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </>
  );
}
