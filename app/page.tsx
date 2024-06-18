import Image from "next/image";
import GithubStackOverFlowCard from "./components/GithubStackOverflowCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>GitHub Profiles</h1>
      <GithubStackOverFlowCard
        githubUsername="preetgur"
        stackOverflowId="preetgur"
      />
    </main>
  );
}
