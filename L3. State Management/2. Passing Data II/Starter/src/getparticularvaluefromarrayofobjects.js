var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];
  
  let result = (list,pilots) => {
    return pilots.filter(({id}) => list.includes(id)).map(({name}) => name)};
  
  console.log(result([2,40],pilots));
    