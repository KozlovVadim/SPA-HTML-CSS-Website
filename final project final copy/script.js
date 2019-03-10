function OpenNewDiv(select){
   if(select.value=="Regular Spa Packages"){
    document.getElementById('RegularSpaPackage').style.display = "block";
    document.getElementById('PremiumSpaPackage').style.display = "none";
  } else if(select.value=="Premium Spa Packages") {
    document.getElementById('PremiumSpaPackage').style.display = "block";
    document.getElementById('RegularSpaPackage').style.display = "none";
  } else {
    document.getElementById('PremiumSpaPackage').style.display = "none";
    document.getElementById('RegularSpaPackage').style.display = "none";
  }
}
//*********************************************************************************************************


//**********************************************************************************************

function validateORnot(registration) {

  if(document.forms.registration.FirstName.value==""){
    alert("You did not include your First Name in the form");
    document.forms.registration.FirstName.focus();
    return false;
  }
  if (!document.forms.registration.FirstName.value.match(/^[A-Za-z]*$/)){
    alert("Enter letters only in First name form box");
    document.forms.registration.FirstName.focus();
    return false;
}
  if (document.forms.registration.LastName.value==""){
    alert("You did not include your Last Name in the form");
    document.forms.registration.LastName.focus();
    return false;
  }
  if (!document.forms.registration.LastName.value.match(/^[A-Za-z]*$/)){
    alert("Enter letters only in Last Name form box");
    document.forms.registration.LastName.focus();
    return false;
}
  if (document.forms.registration.phone.value==""){
    alert("Please include your Cellphone Number");
    document.forms.registration.phone.focus();
    return false;
  }
  if (!document.forms.registration.phone.value.match(/^[0-9]*$/)){
    alert("Enter numbers only in the Cellphone Number form box");
    document.forms.registration.phone.focus();
    return false;
  }
  if (document.forms.registration.Email.value==""){
    alert("Please input your current Email address on the form");
    document.forms.registration.Email.focus();
    return false;
  }
  var x = document.forms["registration"]["Email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        document.forms.registration.Email.focus();
        return false;
  }
  if (document.forms.registration.dob.value==""){
    alert("Please include your Date of Birth in the form");
    document.forms.registration.dob.focus();
    return false;
  }
  if (!document.forms.registration.dob.value.match(/^[0-9]*$/)){
    alert("Enter numbers only in the DOB form box");
    document.forms.registration.dob.focus();
    return false;
  }
  if (document.forms.registration.date.value==""){
    alert("You need to include Today's date");
    document.forms.registration.date.focus();
    return false;
  }
  if (!document.forms.registration.date.value.match(/^[0-9]*$/)){
    alert("Enter numbers only in the Date form box");
    document.forms.registration.date.focus();
    return false;
  }
  if(document.forms.registration.ref.value=="select one"){
    alert("Choose a Refered by type; Or just 'None of the above'");
    document.forms.registration.ref.focus();
    return false;
}
  if((document.forms.registration.gender[0].checked==false) &&
    (document.forms.registration.gender[1].checked==false)){
      alert("Please choose Male or Female");
      return false;
    }
  if((document.forms.registration.contact[0].checked==false) &&
    (document.forms.registration.contact[1].checked==false) &&
    (document.forms.registration.contact[2].checked==false) &&
    (document.forms.registration.contact[3].checked==false)){
      alert("Please choose at least 1 type of Contact");
      return false;
    }
  if(document.forms.registration.name_emergency.value==""){
    alert("Please include the name of your Emergency Contact");
    document.forms.registration.name_emergency.focus();
    return false;
  }
  if (!document.forms.registration.name_emergency.value.match(/^[A-Za-z]*$/)){
    alert("Enter letters only in name of your Emergency Contact form box");
    document.forms.registration.name_emergency.focus();
    return false;
}
  if(document.forms.registration.rel_emergency.value==""){
    alert("Please include your relationship to the Emergency Contact");
    document.forms.registration.rel_emergency.focus();
    return false;
  }
  if (!document.forms.registration.rel_emergency.value.match(/^[A-Za-z]*$/)){
    alert("Enter letters only in your relationship to the Emergency Contact form box");
    document.forms.registration.rel_emergency.focus();
    return false;
}
  if(document.forms.registration.cell_emergency.value==""){
    alert("Please include the Cellphone number of your Emergency Contact");
    document.forms.registration.cell_emergency.focus();
    return false;
  }
  if (!document.forms.registration.cell_emergency.value.match(/^[0-9]*$/)){
    alert("Enter numbers only in the Cellphone of emergency contact form box");
    document.forms.registration.cell_emergency.focus();
    return false;
  }
  if(document.forms.registration.Address.value==""){
    alert("Please include your current Address in the form");
    document.forms.registration.Address.focus();
    return false;
  }
  if(document.forms.registration.State.value==""){
    alert("Please include your current State in the form");
    document.forms.registration.State.focus();
    return false;
  }
  if (!document.forms.registration.State.value.match(/^[A-Za-z]*$/)){
    alert("Enter letters only in State form box");
    document.forms.registration.State.focus();
    return false;
}
  if(document.forms.registration.City.value==""){
    alert("Please include your current City in the form");
    document.forms.registration.City.focus();
    return false;
  }
  if (!document.forms.registration.City.value.match(/^[A-Za-z]*$/)){
    alert("Enter letters only in City form box");
    document.forms.registration.City.focus();
    return false;
}
  if(document.forms.registration.zipcode.value==""){
    alert("You did not fill out the zipcode");
    document.forms.registration.zipcode.focus();
    return false;
  }
  if (!document.forms.registration.zipcode.value.match(/^[0-9]*$/)){
    alert("Enter numbers only in the Zipcode form box");
    document.forms.registration.zipcode.focus();
    return false;
  }
  if(document.forms.registration.zipcode.value.length!=5){
    alert("Your zipcode is not 5 characters long");
    document.forms.registration.zipcode.focus();
    return false;
  }
  if(document.forms.registration.country.value=="select country"){
    alert("Please select your current Country");
    document.forms.registration.country.focus();
    return false;
  }
  if(document.forms.registration.selectmembership.value=="blank"){
    alert("Please select a type of Spa Package you want to view")
    document.forms.registration.selectmembership.focus();
    return false;
  }
  if(document.forms.registration.selectPackage.value=="blank"){
    alert("Please select a type of Spa Package you want to purchase")
    document.forms.registration.selectPackage.focus();
    return false;
  }
  if(document.forms.registration.creditcard.value==""){
    alert("Please enter your Credit Card information");
    document.forms.registration.creditcard.focus();
    return false;
  }
  if(!document.forms.registration.creditcard.value.match(/^[0-9]*$/)){
    alert("Please use numbers only when entering your Credit Card");
    document.forms.registration.creditcard.focus();
    return false;
  }
  if(document.forms.registration.creditcard.value.length!=20){
    alert("Please enter the 16 digits for your creditcard with spaces instead of '-'");
    document.forms.registration.creditcard.focus();
    return false;
  }
  if((document.forms.registration.card[0].checked==false) &&
    (document.forms.registration.card[1].checked==false) &&
    (document.forms.registration.card[2].checked==false)){
      alert("Please choose the type of card you are using");
      return false;
    }
  if(document.forms.registration.username.value==""){
    alert("You did not enter a Username");
    document.forms.registration.username.focus();
    return false;
  }
  if(!document.forms.registration.username.value.match(/^[0-9a-zA-Z]*$/)){
    alert("Please use Numbers and Letters only in your usernames, no special characters");
    document.forms.registration.username.focus();
    return false;
  }
  if(document.forms.registration.username.value.length<6){
    alert("Your Username must have more than 6 characters")
    document.forms.registration.username.focus();
    return false;
  }
  if(document.forms.registration.passcode.value==""){
    alert("You did not enter a password");
    document.forms.registration.passcode.focus();
    return false;
  }
  if(!document.forms.registration.passcode.value.match(/^[0-9a-zA-Z]*$/)){
    alert("Please use Letters and Numbers only in your password");
    document.forms.registration.passcode.focus();
    return false;
  }
  if(document.forms.registration.passcode.value.length<6){
    alert("Your password cannot be less than 6 characters");
    document.forms.registration.passcode.focus();
    return false;
  }
  if(document.forms.registration.passcode1.value==""){
    alert("Enter your password again to comfirm it matches");
    document.forms.registration.passcode1.focus();
    return false;
  }
  if(document.forms.registration.passcode.value!=document.forms.registration.passcode1.value){
    alert("Your Passwords do not match, make sure you entered it correctly");
    document.forms.registration.passcode1.focus();
    return false;
  }


  alert("Thank you for registering with us, We look forward to seeing you create your own Small World Sanctuary!")
return true;
}
//*****************************************************************************************************************


/*Validate amount of characters for credit card and zipcode*/


/*var x = document.forms["registration"]["Email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      alert("Not a valid e-mail address");
      document.forms.registration.Email.focus();
      return false;
    }*/
