type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "#home",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    path: "#welcome",
    newTab: false,
  },
  // {
  //   id: 3,
  //   title: "Pricing",
  //   path: "#price-section",
  //   newTab: false,
  // },
  {
    id: 4,
    title: "About",
    path: "#about",
    newTab: false,
  },

  {
    id: 5,
    title: "Contact Us",
    path: "#contact",
    newTab: false,
  },
];
export default menuData;
