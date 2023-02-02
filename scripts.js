

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

  let upperCase = /[A-Z]/;
  let character = /" "[a-z]/;
  let arrayUrl = url.split("");

  //replace all underscores
  arrayUrl.forEach ((letter,index) => {
    if(letter == "_") {
      arrayUrl.splice(index, 1, "-");
    }
  })

    //replace all spaces
    arrayUrl.forEach ((letter,index) => {
      if(letter == " ") {
        arrayUrl.splice(index, 1,"-");
      }

    })

  //turn file type into lowercase
  let i = arrayUrl.length - 1;

  while(arrayUrl[i] != ".") {
    arrayUrl[i] = arrayUrl[i].toLowerCase();
    i--;
  }

  //replace uppercase letters with - and lowercase letter
  arrayUrl.map(function(letter,index){
    if(letter.match(upperCase)){
      arrayUrl.splice(index,1,"-" + letter.toLowerCase());
    }
    return arrayUrl
  });

  //remove any double dashes
  for(let i = 0; i < arrayUrl.length;i++) {
    if(arrayUrl[i] == "-") {
      console.log("dash found at " + i)
      console.log(arrayUrl[i-1])
      if(arrayUrl[i + 1] == "-") {
        console.log("double dash found at -" + i)
        arrayUrl.splice(i, 1)
      }
    }
  }

  //turn array into string
  url = arrayUrl.join("");
  formatArea.innerHTML  = url;

  //click to copy button
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
  