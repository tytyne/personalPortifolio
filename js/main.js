
  var firebaseConfig = {
    apiKey: "AIzaSyBEsvn9WWua4na2tCtnIyQSsR3mfUTYmms",
    authDomain: "contactform-245bd.firebaseapp.com",
    databaseURL: "https://contactform-245bd.firebaseio.com",
    projectId: "contactform-245bd",
    storageBucket: "contactform-245bd.appspot.com",
    messagingSenderId: "1048743630231",
    appId: "1:1048743630231:web:aa50f9e99ae7e8e98260d2",
    measurementId: "G-F5LSXDEFKQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//  Reference Messages collection
var messagesRef = firebase.database().ref('messages');

// Listen to the Form 
document.getElementById('contactForm').addEventListener('submit',submitForm);

//submit Form
function submitForm(e){
    e.preventDefault();
   
    var name = getInputVal('name')
    var email = getInputVal('email')
    var subject = getInputVal('subject')
    var message = getInputVal('message')


    // save messages
    saveMessage(name,email,subject,message)



    //show alert message
    document.querySelector('.alert').style.display='block';


    //hide alert message
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000)


    //clear form
    document.getElementById('contactForm').reset()

}


//functions to get dform values
function getInputVal(id){
   return  document.getElementById(id).value

}
//save message to database
function saveMessage(name,email,subject,message){
    var newMessageRef=messagesRef.push()
    newMessageRef.set({
        name:name,
        email:email,
        subject:subject,
        message:message
    })

}