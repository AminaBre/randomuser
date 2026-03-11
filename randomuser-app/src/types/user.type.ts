export type User = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  dob: {
    date: string;
    age: number;
  };
  gender: "female" | "male";
};
