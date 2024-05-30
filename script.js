const quote = document.querySelector('.quote');

const url = "https://api.quotable.io/random"

const getQuote = async() => {
   const response = await fetch(url);
   let data = await response.json();

   var ans = [];
   ans.push(data["author"]);
   ans.push(data["content"]);
   return ans;
}

document.querySelector(".get").addEventListener("click",async()=>{
  let response = await getQuote();
  const author = document.createElement('p');
  author.classList.add("pa")
  author.innerText = "written by "+response[0];
  const content = document.createElement('p');
  content.classList.add("pc")
  content.innerText = response[1]
  author.style.textAlign="right";
  quote.innerHTML="";
  quote.appendChild(content);
  quote.appendChild(author);
})


document.querySelector('.twit').addEventListener('click',()=>{
    const content = document.querySelector('.pc');
    const author = document.querySelector('.pa');
    
    if(content===null){
        alert("please generate quote first");
        return;
    }
    window.open("https://twitter.com/intent/tweet?text="+content.innerText+" written by "+author.innerText,"Tweet Window","width=500","height=300");
})
