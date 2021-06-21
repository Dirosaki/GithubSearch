import { Link } from "react-router-dom";
import { useProfiler } from "../../contexts/UserContext";
import "./styles.scss";

interface RepoItemProps {
  name: string;
}

export function RepoItem({ name }: RepoItemProps) {
  const { setRepoView } = useProfiler();

  return (
    <Link
      to={`/details/${name}`}
      className="item"
      onClick={() => setRepoView(name)}
    >
      <li>
        {name}
        <svg
          width="33"
          height="34"
          viewBox="0 0 33 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5834 10.8333V23.1667M10.4167 17H22.75M32 17C32 25.5144 25.0977 32.4167 16.5834 32.4167C8.06896 32.4167 1.16669 25.5144 1.16669 17C1.16669 8.48561 8.06896 1.58333 16.5834 1.58333C25.0977 1.58333 32 8.48561 32 17Z"
            stroke="#F0F6FC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </li>
    </Link>
  );
}
