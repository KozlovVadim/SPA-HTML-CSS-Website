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

function Erase() {
    document.getElementById("registration").reset();
}
//*********************************************************************************************************

function validateORnot() {
    var FirstName = document.forms["registration"]["FirstName"].value;
    if (FirstName == "") {
      alert("First Name must be filled out");
      return false;
  }
  var LastName = document.forms["registration"]["LastName"].value;
  if (LastName == "") {
    alert("Last Name must be filled out");
    return false;
}
var phone = document.forms["registration"]["phone"].value;
if (phone == "") {
  alert("Telephone must be filled out");
  return false;
}
var Email = document.forms["registration"]["Email"].value;
if (Email == "") {
  alert("Email Address must be filled out");
  return false;
}
var date = document.forms["registration"]["date"].value;
if (date == "") {
  alert("Date must be filled out");
  return false;
}
var Address = document.forms["registration"]["Address"].value;
if (Address == "") {
  alert("Address must be filled out");
  return false;
}
var State = document.forms["registration"]["State"].value;
if (State== "") {
  alert("State must be filled out");
  return false;
}
var Postcode = document.forms["registration"]["Postcode"].value;
if (Postcode== "") {
  alert("Postcode must be filled out");
  return false;
}
var Country = document.forms["registration"]["Country"].value;
if (Country== "") {
  alert("Country must be filled out");
  return false;
}
var selectmembership = document.forms["registration"]["selectmembership"].selectedIndex;
if (selectmembership== 0) {
  alert("Please choose type of Membership Regular or Premium");
  return false;
}
var selectPackage = document.forms["registration"]["selectPackage"].selectedIndex;
if (selectPackage== 0) {
  alert("Please choose a Package");
  return false;
}

  }


//**************************************************************
//For slide show
