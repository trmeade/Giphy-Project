const APIKey = "WDjX0wXcHh8Tt4Y9eyvuqCreubygcpcz";

function submit(event) {
  event.preventDefault(); //Prevent page reload

  const searchText = document.getElementById("search-term").value;
  const url = "https://api.giphy.com/v1/gifs/";
  const endpoint = "search?";
  const api_parm = "api_key=" + APIKey;
  const q_parm = "&q=" + searchText;
  const offset_parm = "&offset=" + "0";
  const limit = "&limit=" + document.getElementById("max-gifs").value;
  const fetchStr = url + endpoint + api_parm + q_parm + offset_parm + limit;

  console.log(`Searching for: ${fetchStr}`);

  fetch(fetchStr)
    .then((response) => response.json())
    .then((content) => {
      //Check status and handle error
      console.log(`META: ${JSON.stringify(content.meta, null, 4)}`);
      console.log(`Pagination: ${JSON.stringify(content.pagination, null, 4)}`);
      console.log(`Content: ${JSON.stringify(content.data, null, 4)}`);
      displayImages(content.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

/*
META: {
    "status": 200,
    "msg": "OK",
    "response_id": "qucny92qqe6ciqh3kio3vc4v0c1lfe2yk5wj59th"
}
*/
/*
Pagination: {
    "total_count": 500,
    "count": 1,
    "offset": 0
}
*/

function displayImages(images) {
  document.getElementById("container-area").innerHTML = "";

  for (const image of images) {
    let str = "";
    str += "<div class='multi-column-container'>";
    str += `<img class='multi-column-item' src='${image.images.downsized_medium.url}' alt='${image.title}'>`;
    str += "</div>";
    document.getElementById("container-area").innerHTML += str;
    document.getElementById("search-term").value = "";
  }
}

window.onload = () => {
  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", submit);
};
