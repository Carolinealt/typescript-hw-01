interface User {
  name: string;
  age: number;
  email: string;
  address?: { city: string; country: string };
}
const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};
