let mails = [
    {
        from: "Borge Refsnes",
        subject: "Remember Me.",
        body: " <p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Best Regards, <br>Borge Refsnes</p>",
        date: " Sep 27, 2015.",
        emailpic:"img/avatar3.png"
    },
    {
        from: " Jane Doe",
        subject: "None.",
        body: " <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Forever yours,<br>Jane</p>",
        date: " Sep 25, 2015.",
        emailpic: "img/avatar5.png"
    },
    {
        from: "John Doe",
        subject: "None.",
        body: "<p>Welcome.</p><p>That's it!</p>",
        date: " Sep 23, 2015.",
        emailpic: "img/avatar2.png"
    }
]

// document.getElementById("fullname1").innerText=mails[0].from;
// document.getElementById("fullname2").innerText=mails[1].from;
// document.getElementById("fullname3").innerText=mails[2].from;


// let images=document.getElementsByClassName("emailtombnail");
// images[0].src=mails[0].emailpic;
// images[1].src=mails[1].emailpic;
// images[2].src=mails[2].emailpic;
 debugger
let fullnames=document.getElementsByClassName('fullname');
let images=document.getElementsByClassName("emailtombnail");
let subjects=document.getElementsByClassName("subject");
let emailbodies=document.getElementsByClassName("emailbody")
for (let index = 0; index < mails.length; index++) {
   
   fullnames[index].innerHTML=mails[index].from;
 images[index].src=mails[index].emailpic;
  subjects[index].innerHTML=mails[index].subject;
   emailbodies[index].innerHTML=mails[index].body.substring(0,50)+"...";
}

let sub=document.getElementById("subjectt");
let from=document.getElementById("froom");
let description=document.getElementById("desc");
let emailpicture=document.getElementById("email-pic");
function show(i){
    sub.innerHTML="Subject:"+" "+mails[i].subject;
    from.innerHTML=`<i class="bi bi-clock "></i>`+"From"+" "+mails[i].from+","+mails[i].date;
    description.innerHTML=mails[i].body;
    emailpicture.src=mails[i].emailpic;
}

