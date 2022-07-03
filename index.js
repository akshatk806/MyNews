// b4f8d2a3de3b4601b4c5659d1d659000

// Grab the news container
let newsAccordian=document.getElementById('accordionFlushExample');

const xhr=new XMLHttpRequest();
// xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b4f8d2a3de3b4601b4c5659d1d659000',true);
// xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=b4f8d2a3de3b4601b4c5659d1d659000',true);
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=b4f8d2a3de3b4601b4c5659d1d659000',true);

xhr.onload=function(){
    if(this.status===200){
        console.log("Inside onload function");
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(json);
        console.log(Array.isArray(json));
        console.log(articles);
        console.log(Array.isArray(articles));
        // articles.forEach(function(news){
        //     console.log(news);
        // });
        let newsHtml="";
        articles.forEach(function(element,index){
            let news=`<div class="accordion-item noteCard">
                        <h2 class="accordion-header" id="flush-heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                            <b>Breaking News ${index+1} : </b>${element["title"]}
                        </button>
                        </h2>
                        <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a></div>
                            </div>
                      </div>`;
            newsHtml+=news;
        });
        newsAccordian.innerHTML=newsHtml;
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send();


// To search in news website
let search=document.getElementById('search');
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase();
    console.log(inputVal);
    // console.log("Input event fired",inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByClassName('accordion-button')[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
        // console.log(cardTxt);
    });
});







