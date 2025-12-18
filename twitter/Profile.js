const follow2 = document.getElementById('btnfollow2')
const packdown = document.getElementById('backdown')
const packdown2 = document.getElementById('Backdown')
const dialog2 = document.getElementById('popup2')
const Close_dialog2 = document.getElementById('close_dialog2')
const edit = document.getElementById('btnedit')
const save = document.getElementById('save')
const input_name = document.getElementById('input_name')
const change_name = document.getElementById('changename')
const border_name = document.getElementById('bordername')
const color_name = document.getElementById('colorname')
const input_bio = document.getElementById('input_bio')
const change_bio = document.getElementById('changebio')
const border_bio = document.getElementById('borderbio')
const color_bio = document.getElementById('colorbio')
const input_location = document.getElementById('input_location')
const change_location = document.getElementById('changelocation')
const border_location = document.getElementById('borderlocation')
const color_location = document.getElementById('colorlocation')
const tweets = document.getElementById('tweets')
const replies = document.getElementById('replies')
const media = document.getElementById('media')
const likes = document.getElementById('likes')

// functionName();

edit.addEventListener('click', functionName)
function functionName() {
  var x = 'Omar Salama'
  input_name.value = x
}

input_name.addEventListener('change', state_Handle)
input_bio.addEventListener('change', state_Handle)
input_location.addEventListener('change', state_Handle)
function state_Handle() {
  var text_name = input_name.value
  var text_bio = input_bio.value
  var text_location = input_location.value
  if (text_name != '' || text_bio != '' || text_location != '') {
    save.disabled = false
  } else {
    save.disabled = true
  }
}

input_name.addEventListener('keyup', fun_name)
function fun_name() {
  if (input_name.value == '') {
    border_name.style.borderColor = 'red'
    color_name.style.color = 'red'
  } else {
    border_name.style.borderColor = 'blue'
    color_name.style.color = 'blue'
  }
}

input_bio.addEventListener('keyup', fun_bio)
function fun_bio() {
  if (input_bio.value == '') {
    border_bio.style.borderColor = 'red'
    color_bio.style.color = 'red'
  } else {
    border_bio.style.borderColor = 'blue'
    color_bio.style.color = 'blue'
  }
}

input_location.addEventListener('keyup', fun_location)
function fun_location() {
  if (input_location.value == '') {
    border_location.style.borderColor = 'red'
    color_location.style.color = 'red'
  } else {
    border_location.style.borderColor = 'blue'
    color_location.style.color = 'blue'
  }
}

save.addEventListener('click', Save_Edit)
function Save_Edit() {
  var text_name = input_name.value
  var text_bio = input_bio.value
  var text_location = input_location.value
  if (text_name != '' && text_bio != '' && text_location != '') {
    change_name.textContent = text_name
    change_bio.textContent = text_bio
    change_location.textContent = text_location
    dialog2.close()
  }
}

tweets.addEventListener('click', fun_tweets)
function fun_tweets() {
  var replie = (replies.style.borderBottom = '3px solid blue')
  var Media = (media.style.borderBottom = '3px solid blue')
  var like = (likes.style.borderBottom = '3px solid blue')
  if (replie || Media || like) {
    replies.style.borderBottom = 'none'
    media.style.borderBottom = 'none'
    likes.style.borderBottom = 'none'
    tweets.style.borderBottom = '3px solid blue'
  }
}
replies.addEventListener('click', fun_replies)
function fun_replies() {
  var tweet = (tweets.style.borderBottom = '3px solid blue')
  var Media = (media.style.borderBottom = '3px solid blue')
  var like = (likes.style.borderBottom = '3px solid blue')
  if (tweet || Media || like) {
    tweets.style.borderBottom = 'none'
    media.style.borderBottom = 'none'
    likes.style.borderBottom = 'none'
    replies.style.borderBottom = '3px solid blue'
  }
}
media.addEventListener('click', fun_media)
function fun_media() {
  var tweet = (tweets.style.borderBottom = '3px solid blue')
  var replie = (replies.style.borderBottom = '3px solid blue')
  var like = (likes.style.borderBottom = '3px solid blue')
  if (tweet || replie || like) {
    replies.style.borderBottom = 'none'
    tweets.style.borderBottom = 'none'
    likes.style.borderBottom = 'none'
    media.style.borderBottom = '3px solid blue'
  }
}
likes.addEventListener('click', fun_likes)
function fun_likes() {
  var tweet = (tweets.style.borderBottom = '3px solid blue')
  var replie = (replies.style.borderBottom = '3px solid blue')
  var Media = (media.style.borderBottom = '3px solid blue')
  if (tweet || replie || Media) {
    tweets.style.borderBottom = 'none'
    replies.style.borderBottom = 'none'
    media.style.borderBottom = 'none'
    likes.style.borderBottom = '3px solid blue'
  }
}

edit.addEventListener('click', opendialog)
function opendialog() {
  dialog2.showModal()
}

document.addEventListener('click', closeDialog)
function closeDialog(event) {
  if (!event.target.contains(dialog2)) return
  dialog2.close()
}

Close_dialog2.addEventListener('click', closefunctin)
function closefunctin() {
  dialog2.close()
}

packdown.addEventListener('click', Back_down)
packdown2.addEventListener('click', Back_down)
function Back_down() {
  window.location.href = 'index.html'
}

follow2.addEventListener('click', changefollow)
function changefollow() {
  if (follow2.value === 'Follow') {
    follow2.style.backgroundColor = '#B1ACAC'
    follow2.value = 'Follwing'
    follow2.style.marginLeft = '35px'
  } else {
    follow2.style.backgroundColor = '#000000'
    follow2.value = 'Follow'
    follow2.style.marginLeft = '45px'
  }
}

follow2.addEventListener('mouseover', mouseOver)
function mouseOver() {
  if (follow2.value == 'Follwing') {
    follow2.style.color = 'red'
    follow2.style.backgroundColor = '#E4ACAC'
  }
}

follow2.addEventListener('mouseout', mouseOut)
function mouseOut() {
  if (follow2.value == 'Follwing') {
    follow2.style.color = 'black'
  } else {
    follow2.style.color = 'white'
  }
}
