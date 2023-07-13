var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Why<span> </span>booking with us",
        "What<span> </span>is travel booking services?",
        "Working<span> </span>Hours",
        "What<span> </span> if I have other questions or need help?"]
    },
    why: {
        title:["Your time is important. When you choose US,"," we dedicate time to organising a first-rate experience using our regional knowledge,"," so you can spend your own time however you please."," And once you are travelling, each day of your personalised itinerary is set up to be memorable."],
        options: ["Why<span> </span>booking with us",
        "What<span> </span>is travel booking services?",
        "Working<span> </span>Hours",
        "What<span> </span> if I have other questions or need help?"],
        url : {
            
        }
    },
    
    what: {
        title:["A travel booking service is a service that provides reservations for travel-related products and services, ","including air tickets, hotels, travel packages, excursions, car rentals, etc."," We aim to make it easy for travelers to book and organize their travel itineraries."],
        options: ["Why<span> </span>booking with us",
        "What<span> </span>is travel booking services?",
        "Working<span> </span>Hours",
        "What<span> </span> if I have other questions or need help?"],
        url : {

        }
    },
    working: {
        title:["You can speak directly to an agent by calling the Customer Service Center during normal business hours, ","Monday through Friday, 8:00 a.m. to 6:00 p.m."," Outside business hours and public holidays, ","our self-service telephone information service system will provide you with answers to your questions."],
        options: ["Why<span> </span>booking with us",
        "What<span> </span>is travel booking services?",
        "Working<span> </span>Hours",
        "What<span> </span> if I have other questions or need help?"],
        url : {
            
        }
    },
    what: {
        title:["If you have any questions,"," needs or need assistance,"," please do not hesitate to contact our customer service team."," You can get in touch with us through the contact methods provided on our website ","(such as customer service phone Tel:852-2456 4562, email:abc@hotmail.com). ","Our team is here to support you and answer your questions."],
        options: ["Why<span> </span>booking with us",
        "What<span> </span>is travel booking services?",
        "Working<span> </span>Hours",
        "What<span> </span> if I have other questions or need help?"],
        url : {
          
        }
    
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}