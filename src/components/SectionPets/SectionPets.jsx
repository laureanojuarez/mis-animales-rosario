import {ItemPets} from "./ItemPets";
import {SectionPetStyled} from "./sectionpet-styled";
import {Pets} from "./arraypets";

export const SectionPets = ({search}) => {
  const filteredPets = Pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SectionPetStyled>
      {filteredPets.map((pet) => (
        <ItemPets key={pet.id} pet={pet} />
      ))}
    </SectionPetStyled>
  );
};
