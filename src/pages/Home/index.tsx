import { useState } from "react";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useProfiler } from "../../contexts/UserContext";

import { api } from "../../services/api";
import "./styles.scss";

export default function Home() {
  const [inputSearch, setInputSearch] = useState("");

  const { setUserData } = useProfiler();

  const history = useHistory();

  function toastError() {
    toast.error("Usuário não encontrado ou taxa de requisição excedida!", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    await api
      .get(inputSearch)
      .then((response) => {
        setUserData(response?.data);
        history.push("profile");
      })
      .catch(() => {
        toastError();
      });
  }

  return (
    <>
      <main>
        <svg
          width="257"
          height="250"
          viewBox="0 0 257 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M128.166 0C57.391 0 0 57.3067 0 128.001C0 184.555 36.7233 232.536 87.6475 249.461C94.0528 250.646 96.4044 246.684 96.4044 243.303C96.4044 240.251 96.2855 230.168 96.2303 219.472C60.5745 227.215 53.0507 204.37 53.0507 204.37C47.2206 189.575 38.8203 185.641 38.8203 185.641C27.1918 177.696 39.6968 177.859 39.6968 177.859C52.5668 178.762 59.3436 191.05 59.3436 191.05C70.7746 210.618 89.3263 204.961 96.6399 201.691C97.7903 193.418 101.112 187.771 104.777 184.574C76.3098 181.338 46.3844 170.362 46.3844 121.316C46.3844 107.341 51.391 95.9224 59.5898 86.9584C58.259 83.7344 53.8721 70.7156 60.8313 53.0844C60.8313 53.0844 71.5939 49.6442 96.086 66.205C106.309 63.3689 117.274 61.9466 128.166 61.8979C139.058 61.9466 150.03 63.3689 160.273 66.205C184.735 49.6442 195.483 53.0844 195.483 53.0844C202.459 70.7156 198.07 83.7344 196.739 86.9584C204.957 95.9224 209.93 107.341 209.93 121.316C209.93 170.479 179.947 181.304 151.408 184.473C156.005 188.445 160.101 196.235 160.101 208.177C160.101 225.303 159.952 239.087 159.952 243.303C159.952 246.71 162.259 250.701 168.756 249.444C219.652 232.5 256.329 184.536 256.329 128.001C256.329 57.3067 198.947 0 128.166 0ZM48.0022 182.34C47.7199 182.976 46.7182 183.167 45.8055 182.73C44.8759 182.313 44.3538 181.446 44.6552 180.808C44.9311 180.153 45.935 179.97 46.8625 180.409C47.7942 180.827 48.3248 181.702 48.0022 182.34ZM54.3065 187.958C53.6953 188.524 52.5004 188.261 51.6896 187.367C50.8513 186.475 50.6942 185.281 51.314 184.707C51.9443 184.141 53.1031 184.406 53.9436 185.298C54.7819 186.201 54.9453 187.386 54.3065 187.958ZM58.6315 195.146C57.8462 195.691 56.5622 195.18 55.7684 194.042C54.9832 192.904 54.9832 191.539 55.7854 190.992C56.5813 190.445 57.8462 190.937 58.6506 192.067C59.4338 193.224 59.4338 194.589 58.6315 195.146ZM65.946 203.471C65.2435 204.245 63.7473 204.037 62.6521 202.982C61.5315 201.949 61.2195 200.485 61.9241 199.711C62.6351 198.935 64.1399 199.153 65.2435 200.201C66.3556 201.231 66.6952 202.706 65.946 203.471ZM75.3993 206.282C75.0895 207.284 73.6484 207.74 72.1967 207.314C70.7471 206.875 69.7984 205.701 70.0913 204.688C70.3927 203.679 71.8401 203.204 73.3024 203.66C74.7499 204.096 75.7007 205.262 75.3993 206.282ZM86.1576 207.474C86.1936 208.529 84.9627 209.405 83.4388 209.424C81.9065 209.458 80.667 208.603 80.65 207.565C80.65 206.499 81.8534 205.632 83.3857 205.606C84.9096 205.577 86.1576 206.424 86.1576 207.474ZM96.7263 207.069C96.9089 208.099 95.8498 209.157 94.3365 209.439C92.8488 209.71 91.4714 209.074 91.2825 208.053C91.0978 206.997 92.176 205.939 93.6616 205.666C95.177 205.403 96.5332 206.022 96.7263 207.069Z"
              fill="white"
            />
          </g>
        </svg>

        <h1>GitHub Search</h1>

        <form action="" onSubmit={handleSubmit}>
          <input
            className={inputSearch !== "" ? "active" : ""}
            type="text"
            placeholder="Search for a user"
            autoFocus
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <button type="submit" className={inputSearch !== "" ? "active" : ""}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 19L5.35 14.65M3 9C3 13.4183 6.58172 17 11 17C15.4183 17 19 13.4183 19 9C19 4.58172 15.4183 1 11 1C6.58172 1 3 4.58172 3 9Z"
                stroke="#F0F6FC"
                strokeOpacity="0.75"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
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
      </main>
    </>
  );
}
