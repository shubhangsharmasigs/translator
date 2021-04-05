var btnTranslate = document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
var outputDiv =document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/groot.json";  //the main server link

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){   // error handler
    console.log("error occured",error);
    alert("something wrong with the server!!! please try again later");
}


function clickHandler(){
    var inputText = txtInput.value;   //taking input

    // calling server for translating
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>{
            console.log(json);
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
    
    
};

btnTranslate.addEventListener("click", clickHandler)


