var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Chatbot Momo","How can I help you?"],
        options: [
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
    ]
    },
    destinations: {
        title:["Thanks for your response","We offer specific destinations in Greece, including popular tourist spots and off-the-beaten-path locations in 3 areas : Athens ,Corfu, Santorini."],
        options:[        
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
    ],
        url : {}
    },
    
    plan: {
        title:["Thanks for your response","Yes, we offer itinerary planning services and can help you create a customized travel plan based on your interests and budget."],
        options:[
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
        ],
        url : {}
    },
    accommodations: {
        title:["Thanks for your response","We offer a variety of accommodations, including hotels, resorts, vacation rentals, and more that depends on your budget. Contact us for 1:1 consultation. We are pleased to help you plan your trip."],
        options:[
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
        ],
        url : {}
    },
    book: {
        title:["Thanks for your response"," Yes, we can help you book flights to your desired destination and find the best deals available.","Contact us for 1:1 consultation. We are pleased to assist you to book your trip."],
        options:[
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
        ],
        url : {}
    },
    activities: {
        title:["Thanks for your response",
        "We offer a wide range of activities and tours,",
        " including sightseeing tours, adventure activities,",
        " cultural experiences like cooking class,",
        " and more. Link : <a href='./tour.html'>Tour</a>"],
        options:[
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
        ],
        url : {}
    },
    travel: {
        title:["Thanks for your response",
        "Yes, we can help you find and purchase travel insurance to protect you during your trip.",
        "For more details, Contact us for 1:1 consultation. ",
        "We are pleased to assist you. Link :"],
        options:[
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
        ],
        url : {},
        
    },
    customer: {
    title:[
        "Thanks for your response",
        "You can contact our customer support team through our website, email or phone. ",
        "We are available 24/7 to assist you with any questions or concerns.",
        "Email: contact us hk@grecianjourneys.com ",
        "Phone: +852 2111 1111",
        "Email: contact us greece@grecianjourneys.com",
        "Phone: +350 214726 3185"],
    options:[
        "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
    ],
    url : {},    
    },
    promotion: {
        title:["Thanks for your response","Yes,we offer seasonal special discount , please contact us for more details. Book Now!"],
        options:[
            "Destinations",
            "Plan<span> Your Trip</span>",
            "Accommodations",
            "Book<span> a Flight</span>",
            "Activities ",
            "travel<span> Insurance</span>",
            "Customer<span> Support</span>",
            "Promotion<span> & Special Diacount</span>"
        ],
        url : {},    
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