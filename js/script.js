const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

// Exercise #1

// Skills practiced: fetch(), async/await syntax, .json(), function expression, innerHTML, 
//for…of loop, createElement(), append()


// Get Data Async Function

const getData = async function (numUsers) {
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); // will only access 5v results 
    const data = await userRequest.json();
    //console.log(data); //{results: Array(5), info: {…}}
    const userResults = data.results;
//  console.log(userResults);
//     (5) [{…}, {…}, {…}, {…}, {…}]
//      0: {gender: 'female', name: {…}, location: {…}, email: 'susan.may@example.com', login: {…}, …}
//      1: {gender: 'male', name: {…}, location: {…}, email: 'jayden.holmes@example.com', login: {…}, …}
//      2: {gender: 'male', name: {…}, location: {…}, email: 'luke.holt@example.com', login: {…}, …}
//      3: {gender: 'male', name: {…}, location: {…}, email: 'lauri.kuusisto@example.com', login: {…}, …}
//      4: {gender: 'male', name: {…}, location: {…}, email: 'melvin.adams@example.com', login: {…}, …}
//      length: 5
//      [[Prototype]]: Array(0)
    displayUsers(userResults);
};
getData(1);

//Display Users Function 
const displayUsers = function (userResults) { 
    randomFolks.innerHTML = ""; //empty out this element to dbl check you dont duplicate DOM

    for (const user of userResults) {
       const country = user.location.country 
       const name = user.name.first
       const imageUrl = user.picture.medium

       const userDiv = document.createElement("div");
       userDiv.innerHTML = `
         <h3>${name}</h3>
         <p>${country}</p>
         <img src=${imageUrl} alt="User avatar" />
        `;
        randomFolks.append(userDiv);

    }
    
};

//----------------------------------------------
// Exercise #2

// Skills practiced: async functions, fetch, template literals, change event

// selectUserNumber Variable was added to top of doc.

selectUserNumber.addEventListener("change", function (e) {
   const numUsers = e.target.value; 

   getData(numUsers); 
   //you then modify by added "numUsers" to the previous getData(); to accept numUsers
   //in fetch(), edit the APL URL to use the results of the numUsers: https://randomuser.me/api?results=${numUsers}
   //provide an argument to the call back of getData() of "1", only 1 user will apear, chnage number to change numb of users display
});

//----------------------------------------------
//Exercise #3

// Skills practiced: querySelector(), fetch(), JSON files, async/await syntax, append()