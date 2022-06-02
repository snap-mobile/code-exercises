import { Person } from "./person"

export const generateToken = (person: Person): Person => {
  const token = "abc123";
  console.log(`Token generated at ${new Date()}`);

  return { ...person, token };
};
