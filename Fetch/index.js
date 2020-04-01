// let response = await fetch(url);

// if (response.ok) {
//   let json = await response.json()
// } else{
//   alert('http error' + response.status)
// }

// let url = 'https://5e8437e5a8fdea00164ac426.mockapi.io/listPeserta'

let url = "https://swapi.co/api/people/1";
const getPost = async () => {
  let response = await fetch(url);
  console.log(response);
  let post = await response.json();
  console.log(post);
};

getPost();

let url = "https://api.github.com/users/thoriqnf";
fetch(url)
  .then(response => response.json())
  .then(res => console.log(res));
