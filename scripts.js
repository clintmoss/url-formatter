

const formatArea = document.getElementById("formattedUrl");
const form = document.getElementById("myForm");
const copyBtn = document.getElementById("copy")

form.addEventListener('submit', formatUrl);

function formatUrl (e) {

  e.preventDefault();

// Selectors
let url = document.querySelector("#rawUrl").value;
let formattedUrlArea = document.querySelector("#formattedUrl");

//Formatting JS
  url = url.toString();

  //lower case first letter
  url = url.charAt(0).toLowerCase() + url.slice(1);

  //match uppercase
  let upperCase = /[A-Z]/;
  let arrayUrl = url.split("");

  let i = arrayUrl.length - 1;

  while(arrayUrl[i] != ".") {
    arrayUrl[i] = arrayUrl[i].toLowerCase();
    i--;
  }

  arrayUrl.map(function(letter,index){
    if(letter.match(upperCase)){
      arrayUrl.splice(index,1,"-" + letter.toLowerCase());
    }
    return arrayUrl
  });

  url = arrayUrl.join("");
  console.log(url)

  console.log(formatArea)

  formatArea.innerHTML  = url;

  copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(formatArea.textContent).then(
      () => {
        console.log("copied")
      },
      () => {
        console.log("not copied")
      }
    )
  })


  }
  