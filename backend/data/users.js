import bcrypt from "bcryptjs";

const users = [
  {
    name: "Diego Jota",
    email: "jota@mmail.com",
    password: bcrypt.hashSync("123456", 10),
    bio: "Hello, I am Diego Jota",
    avatar: "/images/jota.png",
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123", 10),
    bio: "Hello, I am John Doe",
    avatar: "/images/john.png",
  },
  {
    name: "Kering Kante",
    email: "kante@gmail.com",
    password: bcrypt.hashSync("123", 10),
    bio: "Hello, I am Kante",
    avatar: "/images/kante.png",
  },
  {
    name: "Mason Mount",
    email: "mason@gmail.com",
    password: bcrypt.hashSync("123", 10),
    bio: "Hello, I am Mason Mount",
    avatar: "/images/mount.png",
  },
];

export default users;
