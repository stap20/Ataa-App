var types = [
  {
    type: "cloth",
    title: "تبرع بالملابس",
    icon: "cloth",
  },
  {
    type: "school",
    title: "تبرع بالملابس",
    icon: "school-tools",
  },
  {
    type: "games",
    title: "تبرع بالملابس",
    icon: "games",
  },
];

donateTypes = {};

types.map((item) => {
  const { type, ...other } = item;
  donateTypes[type] = other;
});

export default donateTypes;
