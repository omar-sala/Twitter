const input = document.getElementById("Text");
const input2 = document.getElementById("Text2");
const show_tweet = document.getElementById("ShowTweet");
const show_tweet2 = document.getElementById("ShowTweet2");
const show = document.getElementById("showdialog");
const dialog = document.getElementById("popup");
const Close_dialog = document.getElementById("close_dialog");
const follow = document.getElementById("btnfollow");
const packup = document.getElementById("backup");
const packup2 = document.getElementById("Backup");

packup.addEventListener("click", fun);
packup2.addEventListener("click", fun);
function fun() {
  window.location.href = "Profile.html";
}

follow.addEventListener("click", changefollow);
function changefollow() {
  if (follow.value === "Follow") {
    follow.style.backgroundColor = "#B1ACAC";
    follow.value = "Follwing";
    follow.style.marginLeft = "35px";
  } else {
    follow.style.backgroundColor = "#000000";
    follow.value = "Follow";
    follow.style.marginLeft = "45px";
  }
}

follow.addEventListener("mouseover", mouseOver);
function mouseOver() {
  if (follow.value == "Follwing") {
    follow.style.color = "red";
    follow.style.backgroundColor = "#E4ACAC";
  }
}

follow.addEventListener("mouseout", mouseOut);
function mouseOut() {
  if (follow.value == "Follwing") {
    follow.style.color = "black";
  } else {
    follow.style.color = "white";
  }
}

show.addEventListener("click", opendialog);
function opendialog() {
  dialog.showModal();
}

document.addEventListener('click', closeDialog);
function closeDialog(event) {
  if (!event.target.contains(dialog)) return;
    dialog.close();
}

Close_dialog.addEventListener("click", closefunctin);
function closefunctin() {
  dialog.close();
}

input.addEventListener("change", stateHandle);
function stateHandle() {
  if (input != "") {
    show_tweet.disabled = false;
  }
  else {
    show_tweet.disabled = true;
  }
}

input.addEventListener('keyup', function () {

  if (show_tweet.disabled = false || input.value == "") {
    show_tweet.style.backgroundColor = "#76c1ff";
  }
  else {
    show_tweet.style.backgroundColor = "#207fce";
  }
});

show_tweet.addEventListener("click", input_text);
function input_text() {
  const tweetList = document.getElementById("tweetlist");
  const tweetText = input.value;
  var addtweet =
  `<div class="hover_div">
      <div style="margin-right: 15px;">
        <img class="img" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/omar.png"alt=""/>
        <div class="parg">
          <div class="sty"><b class="name">Omar Salama</b><span class="name2"> @omarsalama . </span><span class="name name2">13h</span></div>
          <p>${tweetText}</p>
        </div>
      </div>

      <div>
          <a href="#"> <img class="comment" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/consultation-svgrepo-com.svg"
              alt=""><span class="iconlik">127</span></a>
          <a href="#"> <img class="retweet" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/retweet-svgrepo-com.svg" alt=""><span
              class="iconlik">127</span></a>
          <a href="#"> <img class="atr3" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/like-svgrepo-com.svg" alt=""><span
              class="iconlik">127</span></a>
          <a href="#"> <img class="atr4" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/share-svgrepo-com.svg" alt=""></a>
        </div>
  </div>`

  if (document.querySelector("#Text").value != "") {
      const tweetDiv = document.createElement("div");
      tweetDiv.innerHTML = addtweet;
      tweetList.prepend(tweetDiv);
      document.getElementById("Text").value = "";
      show_tweet.style.backgroundColor = "#76c1ff";
  }
}

input2.addEventListener("change", stateHandle2);
function stateHandle2() {
  if (input2 != "") {
    show_tweet2.disabled = false;
  }
  else {
    show_tweet2.disabled = true;
  }
}

input2.addEventListener('keyup', function () {

  if (show_tweet2.disabled = false || input2.value == "") {
    show_tweet2.style.backgroundColor = "#76c1ff";
  }
  else {
    show_tweet2.style.backgroundColor = "#207fce";
  }
});

show_tweet2.addEventListener("click", input_text2);
function input_text2() {
  const tweetList = document.getElementById("tweetlist");
  const tweetText = input2.value;
  const addtweet =
      `<div class="hover_div">
        <div style="margin-right: 15px;">
          <img class="img" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/omar.png"alt=""/>
          <div class="parg">
            <div class="sty"><b class="name">Omar Salama</b><span class="name2"> @omarsalama . </span><span class="name name2">13h</span></div>
            <p>${tweetText}</p>
          </div>
        </div>
        <div>
          <a href="#"> <img class="comment" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/consultation-svgrepo-com.svg"
              alt=""><span class="iconlik">127</span></a>
          <a href="#"> <img class="retweet" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/retweet-svgrepo-com.svg" alt=""><span
              class="iconlik">127</span></a>
          <a href="#"> <img class="atr3" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/like-svgrepo-com.svg" alt=""><span
              class="iconlik">127</span></a>
          <a href="#"> <img class="atr4" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/share-svgrepo-com.svg" alt=""></a>
        </div>
      </div>`

  if (document.querySelector("#Text2").value != "") {
    const tweetDiv = document.createElement("div");
    tweetDiv.innerHTML = addtweet;
    tweetList.prepend(tweetDiv);
    document.getElementById("Text2").value = "";
    show_tweet2.style.backgroundColor = "#76c1ff";
    dialog.close();
  }
}



const follow2 = document.getElementById("btnfollow2");
  const packdown = document.getElementById("backdown");
  const packdown2 = document.getElementById("Backdown");
  const dialog2 = document.getElementById("popup2");
  const Close_dialog2 = document.getElementById("close_dialog2");
  const edit = document.getElementById("btnedit");

  edit.addEventListener("click", opendialog);
  function opendialog() {
    dialog2.showModal();
  }

  document.addEventListener('click', closeDialog);
  function closeDialog(event) {
    if (!event.target.contains(dialog2)) return;
      dialog2.close();
  }

  Close_dialog2.addEventListener("click", closefunctin);
  function closefunctin() {
    dialog2.close();
  }

  packdown.addEventListener("click", Back_down);
  packdown2.addEventListener("click", Back_down);
  function Back_down() {
    window.location.href = "index.html";
  }

  follow2.addEventListener("click", changefollow);
  function changefollow() {
    if (follow2.value === "Follow") {
      follow2.style.backgroundColor = "#B1ACAC";
      follow2.value = "Follwing";
      follow2.style.marginLeft = "35px";
    } else {
      follow2.style.backgroundColor = "#000000";
      follow2.value = "Follow";
      follow2.style.marginLeft = "45px";
    }
  }

  follow2.addEventListener("mouseover", mouseOver);
  function mouseOver() {
    if (follow2.value == "Follwing") {
      follow2.style.color = "red";
      follow2.style.backgroundColor = "#E4ACAC";
    }
  }

  follow2.addEventListener("mouseout", mouseOut);
  function mouseOut() {
    if (follow2.value == "Follwing") {
      follow2.style.color = "black";
    } else {
      follow2.style.color = "white";
    }
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // const input = document.getElementById("Text");
  // const input2 = document.getElementById("Text2");
  // const show_tweet = document.getElementById("ShowTweet");
  // const show_tweet2 = document.getElementById("ShowTweet2");
  // const show = document.getElementById("showdialog");
  // const show2 = document.getElementById("showdialog2");
  // const dialog = document.getElementById("popup");
  // const Close_dialog = document.getElementById("close_dialog");
  // const follow = document.getElementById("btnfollow");
  // const follow2 = document.getElementById("btnfollow2");
  // const packup = document.getElementById("backup");
  // const packup2 = document.getElementById("Backup");
  // const packdown = document.getElementById("backdown");
  // const packdown2 = document.getElementById("Backdown");

  // packup.addEventListener("click", fun);
  // packup2.addEventListener("click", fun);
  // function fun() {
  //   window.location.href = "Profile.html";
  // }

  // packdown.addEventListener("click", Back_down, false);
  // packdown2.addEventListener("click", Back_down, false);
  // function Back_down() {
  //   window.location.href = "index.html";
  // }

  // follow.addEventListener("click", changefollow);
  // follow2.addEventListener("click", changefollow);
  // function changefollow() {
  //   if (follow.value === "Follow") {
  //     follow.style.backgroundColor = "#B1ACAC";
  //     follow.value = "Follwing";
  //     follow.style.marginLeft = "35px";
  //   } else {
  //     follow.style.backgroundColor = "#000000";
  //     follow.value = "Follow";
  //     follow.style.marginLeft = "45px";
  //   }
  // }

  // follow.addEventListener("mouseover", mouseOver);
  // follow2.addEventListener("mouseover", mouseOver);
  // function mouseOver() {
  //   if (follow.value == "Follwing") {
  //     follow.style.color = "red";
  //     follow.style.backgroundColor = "#E4ACAC";
  //   }
  // }

  // follow.addEventListener("mouseout", mouseOut);
  // follow2.addEventListener("mouseout", mouseOut);
  // function mouseOut() {
  //   if (follow.value == "Follwing") {
  //     follow.style.color = "black";
  //   } else {
  //     follow.style.color = "white";
  //   }
  // }

  // show.addEventListener("click", opendialog);
  // function opendialog() {
  //   dialog.showModal();
  // }

  // document.addEventListener('click', closeDialog);
  // function closeDialog(event) {
  //   if (!event.target.contains(dialog)) return;
  //     dialog.close();
  // }

  // Close_dialog.addEventListener("click", closefunctin);
  // function closefunctin() {
  //   dialog.close();
  // }

  // input.addEventListener("change", stateHandle);
  // function stateHandle() {
  //   if (input != "") {
  //     show_tweet.disabled = false;
  //   }
  //   else {
  //     show_tweet.disabled = true;
  //   }
  // }

  // input.addEventListener('keyup', function () {

  //   if (show_tweet.disabled = false || input.value == "") {
  //     show_tweet.style.backgroundColor = "#76c1ff";
  //   }
  //   else {
  //     show_tweet.style.backgroundColor = "#207fce";
  //   }
  // });

  // show_tweet.addEventListener("click", input_text);
  // function input_text() {
  //   const tweetList = document.getElementById("tweetlist");
  //   const tweetText = input.value;
  //   var addtweet =
  //   `<div class="hover_div">
  //       <div style="margin-right: 15px;">
  //         <img class="img" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/omar.png"alt=""/>
  //         <div class="parg">
  //           <div class="sty"><b class="name">Omar Salama</b><span class="name2"> @omarsalama . </span><span class="name name2">13h</span></div>
  //           <p>${tweetText}</p>
  //         </div>
  //       </div>

  //       <div>
  //           <a href="#"> <img class="comment" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/consultation-svgrepo-com.svg"
  //               alt=""><span class="iconlik">127</span></a>
  //           <a href="#"> <img class="retweet" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/retweet-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr3" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/like-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr4" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/share-svgrepo-com.svg" alt=""></a>
  //         </div>
  //   </div>`

  //   if (document.querySelector("#Text").value != "") {
  //       const tweetDiv = document.createElement("div");
  //       tweetDiv.innerHTML = addtweet;
  //       tweetList.prepend(tweetDiv);
  //       document.getElementById("Text").value = "";
  //       show_tweet.style.backgroundColor = "#76c1ff";
  //   }
  // }

  // input2.addEventListener("change", stateHandle2);
  // function stateHandle2() {
  //   if (input2 != "") {
  //     show_tweet2.disabled = false;
  //   }
  //   else {
  //     show_tweet2.disabled = true;
  //   }
  // }

  // input2.addEventListener('keyup', function () {

  //   if (show_tweet2.disabled = false || input2.value == "") {
  //     show_tweet2.style.backgroundColor = "#76c1ff";
  //   }
  //   else {
  //     show_tweet2.style.backgroundColor = "#207fce";
  //   }
  // });

  // show_tweet2.addEventListener("click", input_text2);
  // function input_text2() {
  //   const tweetList = document.getElementById("tweetlist");
  //   const tweetText = input2.value;
  //   const addtweet =
  //       `<div class="hover_div">
  //         <div style="margin-right: 15px;">
  //           <img class="img" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/omar.png"alt=""/>
  //           <div class="parg">
  //             <div class="sty"><b class="name">Omar Salama</b><span class="name2"> @omarsalama . </span><span class="name name2">13h</span></div>
  //             <p>${tweetText}</p>
  //           </div>
  //         </div>
  //         <div>
  //           <a href="#"> <img class="comment" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/consultation-svgrepo-com.svg"
  //               alt=""><span class="iconlik">127</span></a>
  //           <a href="#"> <img class="retweet" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/retweet-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr3" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/like-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr4" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/share-svgrepo-com.svg" alt=""></a>
  //         </div>
  //       </div>`

  //   if (document.querySelector("#Text2").value != "") {
  //     const tweetDiv = document.createElement("div");
  //     tweetDiv.innerHTML = addtweet;
  //     tweetList.prepend(tweetDiv);
  //     document.getElementById("Text2").value = "";
  //     show_tweet2.style.backgroundColor = "#76c1ff";
  //     dialog.close();
  //   }
  // }







  

  // const input = document.getElementById("Text");
  // const input2 = document.getElementById("Text2");
  // const show_tweet = document.getElementById("ShowTweet");
  // const show_tweet2 = document.getElementById("ShowTweet2");
  // const show = document.getElementById("showdialog");
  // const dialog = document.getElementById("popup");
  // const Close_dialog = document.getElementById("close_dialog");
  // const follow = document.getElementById("btnfollow");
  // const packup = document.getElementById("backup");
  // const packup2 = document.getElementById("Backup");

  // packup.addEventListener("click", fun);
  // packup2.addEventListener("click", fun);
  // function fun() {
  //   window.location.href = "Profile.html";
  // }

  // follow.addEventListener("click", changefollow);
  // function changefollow() {
  //   if (follow.value === "Follow") {
  //     follow.style.backgroundColor = "#B1ACAC";
  //     follow.value = "Follwing";
  //     follow.style.marginLeft = "35px";
  //   } else {
  //     follow.style.backgroundColor = "#000000";
  //     follow.value = "Follow";
  //     follow.style.marginLeft = "45px";
  //   }
  // }

  // follow.addEventListener("mouseover", mouseOver);
  // function mouseOver() {
  //   if (follow.value == "Follwing") {
  //     follow.style.color = "red";
  //     follow.style.backgroundColor = "#E4ACAC";
  //   }
  // }

  // follow.addEventListener("mouseout", mouseOut);
  // function mouseOut() {
  //   if (follow.value == "Follwing") {
  //     follow.style.color = "black";
  //   } else {
  //     follow.style.color = "white";
  //   }
  // }

  // show.addEventListener("click", opendialog);
  // function opendialog() {
  //   dialog.showModal();
  // }

  // document.addEventListener('click', closeDialog);
  // function closeDialog(event) {
  //   if (!event.target.contains(dialog)) return;
  //     dialog.close();
  // }

  // Close_dialog.addEventListener("click", closefunctin);
  // function closefunctin() {
  //   dialog.close();
  // }

  // input.addEventListener("change", stateHandle);
  // function stateHandle() {
  //   if (input != "") {
  //     show_tweet.disabled = false;
  //   }
  //   else {
  //     show_tweet.disabled = true;
  //   }
  // }

  // input.addEventListener('keyup', function () {

  //   if (show_tweet.disabled = false || input.value == "") {
  //     show_tweet.style.backgroundColor = "#76c1ff";
  //   }
  //   else {
  //     show_tweet.style.backgroundColor = "#207fce";
  //   }
  // });

  // show_tweet.addEventListener("click", input_text);
  // function input_text() {
  //   const tweetList = document.getElementById("tweetlist");
  //   const tweetText = input.value;
  //   var addtweet =
  //   `<div class="hover_div">
  //       <div style="margin-right: 15px;">
  //         <img class="img" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/omar.png"alt=""/>
  //         <div class="parg">
  //           <div class="sty"><b class="name">Omar Salama</b><span class="name2"> @omarsalama . </span><span class="name name2">13h</span></div>
  //           <p>${tweetText}</p>
  //         </div>
  //       </div>

  //       <div>
  //           <a href="#"> <img class="comment" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/consultation-svgrepo-com.svg"
  //               alt=""><span class="iconlik">127</span></a>
  //           <a href="#"> <img class="retweet" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/retweet-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr3" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/like-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr4" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/share-svgrepo-com.svg" alt=""></a>
  //         </div>
  //   </div>`

  //   if (document.querySelector("#Text").value != "") {
  //       const tweetDiv = document.createElement("div");
  //       tweetDiv.innerHTML = addtweet;
  //       tweetList.prepend(tweetDiv);
  //       document.getElementById("Text").value = "";
  //       show_tweet.style.backgroundColor = "#76c1ff";
  //   }
  // }

  // input2.addEventListener("change", stateHandle2);
  // function stateHandle2() {
  //   if (input2 != "") {
  //     show_tweet2.disabled = false;
  //   }
  //   else {
  //     show_tweet2.disabled = true;
  //   }
  // }

  // input2.addEventListener('keyup', function () {

  //   if (show_tweet2.disabled = false || input2.value == "") {
  //     show_tweet2.style.backgroundColor = "#76c1ff";
  //   }
  //   else {
  //     show_tweet2.style.backgroundColor = "#207fce";
  //   }
  // });

  // show_tweet2.addEventListener("click", input_text2);
  // function input_text2() {
  //   const tweetList = document.getElementById("tweetlist");
  //   const tweetText = input2.value;
  //   const addtweet =
  //       `<div class="hover_div">
  //         <div style="margin-right: 15px;">
  //           <img class="img" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/omar.png"alt=""/>
  //           <div class="parg">
  //             <div class="sty"><b class="name">Omar Salama</b><span class="name2"> @omarsalama . </span><span class="name name2">13h</span></div>
  //             <p>${tweetText}</p>
  //           </div>
  //         </div>
  //         <div>
  //           <a href="#"> <img class="comment" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/consultation-svgrepo-com.svg"
  //               alt=""><span class="iconlik">127</span></a>
  //           <a href="#"> <img class="retweet" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/retweet-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr3" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/like-svgrepo-com.svg" alt=""><span
  //               class="iconlik">127</span></a>
  //           <a href="#"> <img class="atr4" src="file:///home/omar/Workspace/Web%20Projects/twitter/images/share-svgrepo-com.svg" alt=""></a>
  //         </div>
  //       </div>`

  //   if (document.querySelector("#Text2").value != "") {
  //     const tweetDiv = document.createElement("div");
  //     tweetDiv.innerHTML = addtweet;
  //     tweetList.prepend(tweetDiv);
  //     document.getElementById("Text2").value = "";
  //     show_tweet2.style.backgroundColor = "#76c1ff";
  //     dialog.close();
  //   }
  // }





  // const follow2 = document.getElementById("btnfollow2");
  // const packdown = document.getElementById("backdown");
  // const packdown2 = document.getElementById("Backdown");

  // packdown.addEventListener("click", Back_down);
  // packdown2.addEventListener("click", Back_down);
  // function Back_down() {
  //   window.location.href = "index.html";
  // }

  // follow2.addEventListener("click", changefollow);
  // function changefollow() {
  //   if (follow2.value === "Follow") {
  //     follow2.style.backgroundColor = "#B1ACAC";
  //     follow2.value = "Follwing";
  //     follow2.style.marginLeft = "35px";
  //   } else {
  //     follow2.style.backgroundColor = "#000000";
  //     follow2.value = "Follow";
  //     follow2.style.marginLeft = "45px";
  //   }
  // }

  // follow2.addEventListener("mouseover", mouseOver);
  // function mouseOver() {
  //   if (follow2.value == "Follwing") {
  //     follow2.style.color = "red";
  //     follow2.style.backgroundColor = "#E4ACAC";
  //   }
  // }

  // follow2.addEventListener("mouseout", mouseOut);
  // function mouseOut() {
  //   if (follow2.value == "Follwing") {
  //     follow2.style.color = "black";
  //   } else {
  //     follow2.style.color = "white";
  //   }
  // }