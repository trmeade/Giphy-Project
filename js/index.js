const APIKey = "WDjX0wXcHh8Tt4Y9eyvuqCreubygcpcz";

function submit(event) {
  event.preventDefault(); //Prevent page reload

  const searchText = document.getElementById("search-term").value;
  const url = "https://api.giphy.com/v1/gifs/";
  const endpoint = "search?";
  const api_parm = "api_key=" + APIKey;
  const q_parm = "&q=" + searchText;
  const offset_parm = "&offset=" + "0";
  const limit = "&limit=" + "1";
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
/*
content array items to destructure
{
  type: "",
  title: "",
  images: {
    downsized: {
      url: ""
    },
    downsized_still: {
      url: ""
    }
  }
}
*/
function displayImages(images) {
  for (const image of images) {
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    let fc = document.createElement("figcaption");

    img.src = image.images.downsized.url;
    img.alt = image.title;
    fc.textContent = image.title;
    fig.appendChild(img);
    fig.appendChild(fc);
    let out = document.getElementById("gif-area");
    out.insertAdjacentElement("afterbegin", fig);
    document.getElementById("search-term").value = "";
  }
}

window.onload = () => {
  //document.getElementById("search-btn").addEventListener("submit", submit);
  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", submit);
};

/*
content array items to destructure
{
  type: "",
  title: "",
  images: {
    downsized: {
      url: ""
    },
    downsized_still: {
      url: ""
    }
  }
}
*/
