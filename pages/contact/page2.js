const paramString = window.location.search;
const urlParams = new URLSearchParams(paramString);
const id = urlParams.get("id");

const stories = [
  {
    id: "1",
    title: "First Object",
    description: "This is the description for the first object.",
  },
  {
    id: "2",
    title: "Second Object",
    description: "This is the description for the second object.",
  },
  {
    id: "3",
    title: "Third Object",
    description: "This is the description for the third object.",
  },
];

if(id === "1") {
    document.getElementById("content").innerText = stories[0].title;
}else if(id === "2"){
    document.getElementById("content").innerText = stories[1].title;
}else {
    document.getElementById("content").innerText = stories[2].title;
}