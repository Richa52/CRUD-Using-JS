function formValidation(){
debugger;
	
	
var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
var fname = txtName.value,
	lname = txtLName.value,
	fphone = txtPhone.value,
	femail = txtEmail.value;
     
 if(fname == "")
	{
		txtName.focus() ;
		 alert("Enter the first name.");
		return false;
	}
 if(lname == "")
	{
		txtLName.focus() ;
		alert("Enter the last name.");
		return false;
	}
     if(allnumeric(fphone)){
		 
	 }
	if(femail == "" )
	{
		txtEmail.focus();
		alert("Enter the email.");
		return false;
	}
	else{
		ValidateEmail(femail) ;
	}
	if(rdMale.checked)   
	{  
		var m = rdMale.value;
		alert(m);
	}
	else
	{	
		var f = rdFemale.value;
		alert(f);
	}
if(country.value == ""){
	alert("Select country. ");
}
else{
	countryselect(country.value);
}

if(operation == "A") return Add(); else return Edit();	

function Add(){ 
	var client = JSON.stringify({ ID : , 
	Name : txtName.value, 
	Last Name: txtLName.value,
	Phone :  txtPhone.value,
	Email : $("#txtEmail").val() }); 
	tbClients.push(client); localStorage.setItem("tbClients", JSON.stringify(tbClients)); 
	alert("The data was saved."); 
	return true; 
} 


}

function ValidateEmail(femail)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  


	if(txtEmail.value.match(mailformat))  
	{	  
		return true;  
	}  
 
	else  
	{ 
		alert("You have entered an invalid email address!");  
		femail.focus();  
		return false;  
	}  
}  

function allnumeric(fphone)  
{   
	var numbers = /^[0-9]+$/;
if(fphone!=""){
 
          var regphn = /^[0-9]*$/;
 
          if(fphone.match(regphn)){
 
                   if(fphone.length!=10){
 
                             alert('Contact Number Should be 10 digits');
 
                             fphone.focus();
 
                             return false;
 
                   }
 
          }else{
 
                   alert("Contact Number Should be numeric");
 
                   fphone.focus();
 
                   return false;
 
          }
 
}else{
 
          alert("Phone No must have numeric characters only");
 
          fphone.focus();
 
          return false;
 
}	
	
}


function countryselect(ucountry)  
{  
if(ucountry == "Default")  
{  
alert('Select your country from the list');  
ucountry.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  