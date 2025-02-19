import {useState} from "react";
import {Header} from "./components/Header/Header";
import {Search} from "./components/Search/Search";
import {SectionPets} from "./components/SectionPets/SectionPets";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Search search={search} setSearch={setSearch} />
      <SectionPets search={search} />
    </>
  );
};
