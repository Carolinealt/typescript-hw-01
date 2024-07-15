type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const defaultParams = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultParams, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
