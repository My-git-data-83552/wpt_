
function DoSomething() {
    ValidateEmpty("demo", "errorDiv1", "Name is required");
    ValidateEmpty("email", "errorDiv2", "Email is required");
    ValidateEmpty("password", "errorDiv3", "Password is required");
  }

  function ValidateEmpty(controlId, errControlId, errorMessage) {
    var refToControl = document.getElementById(controlId);
    var refToErrControl = document.getElementById(errControlId);
    refToErrControl.innerText = "";

    if (refToControl.value == "") {
      refToErrControl.innerText = errorMessage;
    } else {
      console.log(refToControl.value);
    }
  }

  function DoClear(){
        
      var formDetails = document.getElementById('formDetails')

      if(formDetails){
        formDetails.reset();
      }

    // var name = document.getElementById('demo')
        
    //     var birthDate = document.getElementById('birthDate')
        
    //     var email = document.getElementById('email')
        
    //     var password = document.getElementById('password')
        
    //     var gender2 = document.getElementById('gender2')
    //     var gender3 = document.getElementById('gender3')


        
    //     name.value = "";
    //     birthDate.value = "dd/mm/yyyy " 
    //     email.value = "";
    //     password.value = "";

    //     gender2.checked = false;
    //     gender3.checked = false;
      }