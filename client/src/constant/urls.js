export let urls = {
  home: {
    name: "Home",
    slug: "/",
  },
  auth: {
    baseSlug: "auth",
    signin: {
      name: "Signin",
      slug: "signin",
      link: "/auth/signin",
    },
    signup: {
      name: "Signup",
      slug: "signup",
      link: "/auth/signup",
    },
  },
  profile: {
    name: "Profile",
    slug: "profile/:profileID",
    link: "/profile",
  },
};
