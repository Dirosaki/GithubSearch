import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import "./styles.scss";

export function Header() {
  const [inputSearch, setInputSearch] = useState("");

  const router = useLocation();

  const page = router.pathname;

  return (
    <header className="cabecalho">
      {page !== "/profile" ? (
        <div>
          <Link to="/profile">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 13.3333L13.3334 20M13.3334 20L20 26.6667M13.3334 20L26.6667 20M36.6667 20C36.6667 29.2048 29.2048 36.6667 20 36.6667C10.7953 36.6667 3.33337 29.2048 3.33337 20C3.33337 10.7953 10.7953 3.33334 20 3.33334C29.2048 3.33334 36.6667 10.7953 36.6667 20Z"
                stroke="#F0F6FC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1>Voltar</h1>
        </div>
      ) : (
        <h1>Repositórios</h1>
      )}

      <div>
        <form action="">
          <input
            className={inputSearch !== "" ? "active" : ""}
            type="text"
            placeholder="Search for a user"
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <button className={inputSearch !== "" ? "active" : ""} type="submit">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
        <Link to="/">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 38.5V21H26.25V38.5M5.25 15.75L21 3.5L36.75 15.75V35C36.75 35.9283 36.3813 36.8185 35.7249 37.4749C35.0685 38.1313 34.1783 38.5 33.25 38.5H8.75C7.82174 38.5 6.9315 38.1313 6.27513 37.4749C5.61875 36.8185 5.25 35.9283 5.25 35V15.75Z"
              stroke="#F0F6FC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
