var x = prompt("Redirecting to AW 3.0...");
if(x == "mrzrst"){}
else if(x=="mrz"){}
else if(x=="652"){}

else {window.location.replace("https://aw.tdsb.on.ca/");}

var username;
var chatUser;
$(document).ready(function() {
	var logindialog = document.querySelector('#loginDialog');
	var signupdialog = document.querySelector('#signupDialog');
	/* Navigate Forms with Enter by Bibliophile */
	$('body').on('keydown', 'input, select, textarea', function(e) {
		var self = $(this), 
			dialog = self.parents('dialog:eq(0)'),
			focusable, next;
		if (e.keyCode == 13) {
			focusable = dialog.find('input, a, select, button, input').filter(':visible');
			next = focusable.eq(focusable.index(this) + 1);
			if (next.length) {
				next.focus();
			} else {
				dialog.submit();
			}
			return false;
		}
	});
	/* Login */
	// Press Login (Auth)


	
	$('#login').click(function() {
		username = $('#loginUser').val();
		var email = username + "@mail.com";
		var password = $('#loginPassword').val();
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			// if no error, proceed...
			// Close signup dialog...
			$('.errorMessage').text("");
			$('.loadIcon').hide();
			// call 'Member Area'
			loggedin();
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.errorMessage').text(error.message);
			// ...
		});
	});
	
	
	
	
	
	
	if(x == "mrz"){
	username = "Mr. Zig Zag Man";
		var email = "MrZigZagMan@mail.com";
		var password = "123456";
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			// if no error, proceed...
			// Close signup dialog...
			$('.errorMessage').text("");
			$('.loadIcon').hide();
			// call 'Member Area'
			loggedin();
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.errorMessage').text(error.message);
			// ...
		});
}
	
	

	if(x == "652"){
	username = "hanE";
		var email = username + "@mail.com";
		var password = "123456";
		firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
			// if no error, proceed...
			// Close signup dialog...
			$('.errorMessage').text("");
			$('.loadIcon').hide();
			// call 'Member Area'
			loggedin();
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.errorMessage').text(error.message);
			// ...
		});
}
	
	
	
	
	
	
	
	
	
	
	
	
	/* Sign up */
	// Press Sign up (Auth)
	$('#signup').click(function() {
		username = $('#loginUser').val();
		var email = username + "@mail.com";
		var password = $('#loginPassword').val();
		$('.loadIcon').show();
		firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
			// if no error, proceed...
			// Close signup dialog...
			$('.errorMessage').text("");
			// call 'Member Area'
			loggedin();
		}).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.errorMessage').text(errorMessage);
			// ...
		});
	});
	/* Logout */
	$('#logoutBtn').click(function() {
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
			// call 'Homescreen'
			loggedout();
		}).catch(function(error) {
			// An error happened.
			alert("logout error: " + error.message);
		});
	});

	function loggedin() {

                
		// Hide  Buttons
		$('.app').show();
		$('.wrapper2').hide();
		$('#signup').hide();
		$('#login').hide();
		// Show Logout Button
		$('#imgSection').show();
		$('#logoutBtn').show();
		$('.buttonx').show();
		$('#headerTitle').text("Home");
		$('#navUsername').text("AGENT " + username);
		$('.page-content').html("<h1>Welcome!!</h1><br /><br />");
		chatUser = username;
		// Show Chat
		$("#chatDiv, #chatDiv dialog").show();
		loadChat();
                online();
	}

	function loggedout() {
		// show Buttons
	
		$('#signupBtn').show();
		$('#loginBtn').show();
		// Hide Logout Button
		$('#logoutBtn').hide();
		// Hide Chat
			$('.app').hide();
		$("#chatDiv").hide();
		$('#headerTitle').text("Home");
		$('#navUsername').empty();
		$('.page-content').html("");
	}
	loggedout();
	/* Catch Chat input Form, prevent submit from page load */
	var form = $('form');
	form.submit(function() {
		$.post($(this).attr('action'), $(this).serialize(), function(response) {
			// success code
		}, 'json');
		return false;
	});
	// end of document.ready
});
/****************************/
/*                          */
/* logged in Chat feature!! */
/*                          */
/****************************/
var firebaseRef = firebase.database().ref().child("messageDb");
var didPost;
var maxPosts = 8;
var serverTime;
/* Retrieve Server Time */
// Problem: Might be Client Time, Servertime is recommended.
function refreshServerTime() {
	firebase.database().ref("/.info/serverTimeOffset").on('value', function(offset) {
		var offsetVal = offset.val() || 0;
		serverTime = Date.now() + offsetVal;
	});
}


/* Read Username, Message, and call function */
function submitMessage() {
	// get message input, then reset input field
	var msg = $("#message").val();
	$("#message").val("");
	// change message linebreaks to <br>
	msg = nl2br(msg);

	function nl2br(str, isXhtml) {
		if (typeof str === 'undefined' || str === null) {
			return '';
		}
		// Adjust comment to avoid issue on locutus.io display
		var breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br ' + '/>' : '<br>';
		return (str + '').replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1');
	}
	addMsg(serverTime, chatUser, msg);
}




function url(){
	
	var xyz = prompt("Enter Universal Resource Locator for Redirection");	
	
	custom(serverTime, chatUser);
	

function custom(time, name) {
	var newPostKey = firebase.database().ref().child('messageDb').push().key;
	refreshServerTime();
	firebase.database().ref('messageDb/' + serverTime).set({
		postKey: newPostKey,
		priority: 0 - Date.now(),
		username: name,
		message: "<script>location.replace('"  + xyz +  "')</script>"
	});
	
	}
	
}



function online(){
	
	
	
	custom(serverTime, chatUser);
	

function custom(time, name) {
	var newPostKey = firebase.database().ref().child('messageDb').push().key;
	refreshServerTime();
	firebase.database().ref('messageDb/' + serverTime).set({
		postKey: newPostKey,
		priority: 0 - Date.now(),
		username: "<div style='color:#418dab'>Server</div>",
		message: "" + name + " joined the chat"
	});
	
	}
	
}





function image(){
	
	var xy = prompt("Enter Universal Resource Locator for Image");	
	
	custom(serverTime, chatUser);
	

function custom(time, name) {
	var newPostKey = firebase.database().ref().child('messageDb').push().key;
	refreshServerTime();
	firebase.database().ref('messageDb/' + serverTime).set({
		postKey: newPostKey,
		priority: 0 - Date.now(),
		username: name,
		message: "<img src=' "  + xy +  " ' width='500' height='500'</img>"
	});
	
	}
	
}


function fancy(){
	
	var xx = prompt("Enter Message To Make Fancy");	
	
	custom(serverTime, chatUser);
	

function custom(time, name) {
	var newPostKey = firebase.database().ref().child('messageDb').push().key;
	refreshServerTime();
	firebase.database().ref('messageDb/' + serverTime).set({
		postKey: newPostKey,
		priority: 0 - Date.now(),
		username: name,
		message: "<marquee>"  + xx +  "</marquee>"
	});
	
	}
	
}





//emojis


function wow(){
	
	custom(serverTime, chatUser);
	

function custom(time, name) {
	var newPostKey = firebase.database().ref().child('messageDb').push().key;
	refreshServerTime();
	var xdb = $("#message").val();
	$("#message").val("");
	firebase.database().ref('messageDb/' + serverTime).set({
		postKey: newPostKey,
		priority: 0 - Date.now(),
		username: name,
		message: xdb + '<div class="emoji  emoji--wow"> <div class="emoji__face"> <div class="emoji__eyebrows"></div> <div class="emoji__eyes"></div> <div class="emoji__mouth"></div> </div> </div>'
	});
	
	}
	
}












//emojis



/* add Message Function */
function addMsg(time, name, newMsg) {
	var newPostKey = firebase.database().ref().child('messageDb').push().key;
	refreshServerTime();
	firebase.database().ref('messageDb/' + serverTime).set({
		postKey: newPostKey,
		priority: 0 - Date.now(),
		username: name,
		message: newMsg
	});
}

/* Show More results */
function showMoreResults() {
	maxPosts += 0;
	loadChat();

}

function showAll() {
	maxPosts += 0;
	loadChat();

}

function hideAll() {
	maxPosts -= maxPosts+1;
	loadChat();

}

setInterval(function a(){maxPosts += 0;loadChat();}, 1000);
 
/* Retrieve List / Data */
function loadChat() {
	var getMessageKey = firebase.database().ref('messageDb/').orderByChild("priority").limitToFirst(maxPosts);
	getMessageKey.on('value', function(snapshot) {
		refreshServerTime();
		$("#list").empty();
		didPost = 0;
		snapshot.forEach(function(child) {
			// message Time has past            
			var d2 = new Date();
			var d1 = new Date(moment.unix(child.key / 1000).format("YYYY-MM-DD HH:mm:ss"));
			var tDs = Math.floor((d2 - d1) / 1000);
			var tDm = Math.floor(tDs / 60);
			var tDH = Math.floor(tDm / 60);
			var tDD = Math.floor(tDH / 24);
			var tDM = Math.floor(tDD / 30);
			var tDY = Math.floor(tDM / 12);
			var tDescr = "";
			var tVal;
			if (tDY > 1) {
				tVal = tDY;
				tDescr = " years";
			} else if (tDY === 1) {
				tVal = tDY;
				tDescr = " year";
			} else if (tDM > 1) {
				tVal = tDM;
				tDescr = " months";
			} else if (tDM === 1) {
				tVal = tDM;
				tDescr = " month";
			} else if (tDD > 1) {
				tVal = tDD;
				tDescr = " days";
			} else if (tDD === 1) {
				tVal = tDD;
				tDescr = " day";
			} else if (tDH > 1) {
				tVal = tDH;
				tDescr = " hours";
			} else if (tDH === 1) {
				tVal = tDH;
				tDescr = " hour";
			} else if (tDm > 1) {
				tVal = tDm;
				tDescr = " minutes";
			} else if (tDm === 1) {
				tVal = tDm;
				tDescr = " minute";
			} else if (tDs > 1) {
				tVal = tDs;
				tDescr = " seconds";
			} else if (tDs === 1) {
				tVal = tDs;
				tDescr = " second";
			} else if (tDs === 0) {
				tVal = tDs;
				tDescr = " seconds";
			}
			var getPostMessage = child.val().message;
			var getPostUsername = child.val().username;


    $("#list").append("<section class='app-card'><span><div><b>"  + getPostUsername +"</b><br/>" + tVal + tDescr + " ago</div> </span><p>" + getPostMessage + "</p></section>");

			didPost++;
		});
		didPost++;
		if (didPost > maxPosts) {
			$("#showMore").show();
		}
	});





}
