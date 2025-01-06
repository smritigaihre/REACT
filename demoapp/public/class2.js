//  const promise = new Promise((resolve, reject) => {
//       let success = true;
//       if (success) {
//         resolve("DONE");
//       } else {
//         reject("FAILED");
//       }
//     });
//     promise
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });


    //----------Fetch----------
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
    
    //-------------async/await----------
    
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("Error:",error);
      }
    }
    fetchData();
    
    async function fetchUserData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        data.forEach((user) => {
          console.log(user.name);
        });
      } catch (error) {
        console.log("Error:" + error);
      }
    }
    fetchUserData();