var types = [
  {
    type: "cloth",
    title: "تبرع بالملابس",
    icon: "cloth",
  },
];

donateTypes = {};

types.map((item) => {
  const { type, ...other } = item;
  donateTypes[type] = other;
});

export default donateTypes;
