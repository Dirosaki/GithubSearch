import { createContext, ReactNode, useContext, useState } from "react";

interface ProfileContextProviderProps {
  children: ReactNode;
}

export interface DataProps {
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface UserContextData {
  login: string;
  avatar: string;
  urlProfile: string;
  reposURL: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  twitter: string;
  repositories: number;
  followers: number;
  following: number;
  setUserData: (data: DataProps) => void;
  repoName: string;
  setRepoView: (value: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [urlProfile, setUrlProfile] = useState("");
  const [reposURL, setReposURL] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [blog, setBlog] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [repositories, setRepositories] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repoName, setRepoName] = useState("");

  function setRepoView(value: string) {
    setRepoName(value);
  }

  function setUserData({
    login,
    avatar_url,
    html_url,
    repos_url,
    name,
    company,
    blog,
    location,
    email,
    twitter_username,
    public_repos,
    followers,
    following,
  }: DataProps) {
    setLogin(login);
    setAvatar(avatar_url);
    setUrlProfile(html_url);
    setReposURL(repos_url);
    setName(name);
    setCompany(company);
    setBlog(blog);
    setLocation(location);
    setEmail(email);
    setTwitter(twitter_username);
    setRepositories(public_repos);
    setFollowers(followers);
    setFollowing(following);
  }

  return (
    <UserContext.Provider
      value={{
        login,
        avatar,
        urlProfile,
        reposURL,
        name,
        company,
        blog,
        location,
        email,
        twitter,
        repositories,
        followers,
        following,
        setUserData,
        repoName,
        setRepoView,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useProfiler = () => {
  return useContext(UserContext);
};
