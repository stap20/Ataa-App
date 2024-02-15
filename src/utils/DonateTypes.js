var types = [
  {
    type: "cloth",
    title: "تبرع بالملابس",
    icon: "cloth",
  },
  {
    type: "school",
    title: "تبرع بالادوات المدرسية",
    icon: "school-tools",
  },
  {
    type: "games",
    title: "تبرع بالالعاب",
    icon: "games",
  },
];

donateTypes = {};

types.map((item) => {
  const { type, ...other } = item;
  donateTypes[type] = other;
});

export default donateTypes;
