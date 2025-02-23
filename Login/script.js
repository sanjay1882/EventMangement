const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
const MobileForm=document.getElementById('phone-auth');
const NumberForm=document.getElementById('number-verify');
signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
    NumberForm.style.display="none";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
    NumberForm.style.display="none";
})
MobileForm.addEventListener('click', function(){
    NumberForm.style.display="block";
    signInForm.style.display="none";
    signUpForm.style.display="none";
})
document.addEventListener('keydown', (event) => {
    // Prevent F12
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
    }
  
    // Prevent Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), and Ctrl+U (View Source)
    if (
        (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
    }
  });
  //document.addEventListener('contextmenu', (event) => event.preventDefault());
  