export const hasFavoriteMovie = (movieId, profiles) => {
	var hasFavorite;
	for (let i = 0; i < profiles.length; i++) {
	  if (movieId === profiles[i].favoriteMovieID) {
		hasFavorite = true;
		break;
	  } else {
		hasFavorite = false;
	  }
	}
	return hasFavorite;
  };
  
   
  const sum = (a, b, c) => {
	return a + b + c;
  };
  
  const profiles = [
	{
	  id: 1,
	  userID: "1",
	  favoriteMovieID: "1",
	},
	{
	  id: 2,
	  userID: "2",
	  favoriteMovieID: "1",
	},
	{
	  id: 3,
	  userID: "4",
	  favoriteMovieID: "5",
	},
	{
	  id: 4,
	  userID: "5",
	  favoriteMovieID: "2",
	},
	{
	  id: 5,
	  userID: "3",
	  favoriteMovieID: "5",
	},
	{
	  id: 6,
	  userID: "6",
	  favoriteMovieID: "4",
	},
  ];
  
 export const getUsersArray = (profiles, movieID) => {
	var usersList = [];
  
	profiles.forEach((profile) => {
	  if (profile.favoriteMovieID === movieID) {
		 usersList.push(profile.userID);
	  }
	});
	return usersList;
  };
  
  getUsersArray(profiles, "5");

  const users = [
	 {
	  id: 101,
	  name: "Jane Cruz",
	  userName: "coder",
	},
	 {
	  id: 265,
	  name: "Matthew Johnson",
	  userName: "mpage",
	},
	 {
	  id: 948,
	  name: "Autumn Green",
	  userName: "user123",
	},
	 {
	  id: 678,
	  name: "John Doe",
	  userName: "user123",
	},
	 {
	  id: 890,
	  name: "Lauren Carlson",
	  userName: "user123",
	},
	 {
	  id: 896,
	  name: "Nicholas Lain",
	  userName: "user123",
	},
];
  
const mapUserNames1 = (usersList, users) =>{
      var usersName={};

	 
	 // for(let i=0; i<usersList.length;i++){
          // usersName.push(users[i]);
		   usersName = users.filter((x) => usersList.includes(x.id)).map((y) => y.name);
	  //}

	  return usersName;

}
 mapUserNames1([896,101],users);

 export const mapUserNames = (usersList,users)=> {
       var usersName =[];
	 for(let i=0; i<usersList.length;i++){
		usersName.push( users[usersList[i]].name); 
		

	 }
    return usersName;

  }
 
  