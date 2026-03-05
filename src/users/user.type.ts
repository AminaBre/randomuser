export type User = {
  gender: "male" | "female";
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    medium: string;
  };
};