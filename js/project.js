

let fullNameReg = new RegExp("^[a-zA-Z]{3,20}(\\s[a-zA-Z]{3,20})?$"); 
let phoneReg = new RegExp("^01[0125][0-9]{8}$");

window.addEventListener("load", function () {
    let BookApointmentButton = document.querySelector("button[name=validationbtn]");
    let fullNameInput = document.querySelector("input[name=fullname]");
    let fullNameSpan = document.getElementById("FullNamespanvalid");
    
    let PhoneInput = document.querySelector("input[name=phonenum]");
    let PhoneSpan = document.getElementById("PhoneNumberspanvalid");
    
    let dateInput = document.getElementById("PreferredDate");
    let dateSpan = document.getElementById("PreferredDatespanvalid"); 

    BookApointmentButton.onclick = function (e) {
        let fullNameflag = fullNameReg.test(fullNameInput.value.trim());
        let Phoneflag = phoneReg.test(PhoneInput.value.trim());

        let dateValue = dateInput.value;
        let currentDate = new Date().toISOString().split("T")[0]; // Format: yyyy-mm-dd    and T بتفصل بين الزمن والتاريخ
        let dateFlag = dateValue !== "" && dateValue >= currentDate;

        if (!fullNameflag) {
            fullNameSpan.innerText = "Full Name must be valid as: Hussein Mohamed";
            e.preventDefault();
        } else {
            fullNameSpan.innerText = "";
        }

        if (!Phoneflag) {
            PhoneSpan.innerText = "Phone must be a valid Egyptian number (e.g. 01012345678)";
            e.preventDefault();
        } else {
            PhoneSpan.innerText = "";
        }

        if (!dateFlag) {
            dateSpan.innerText = "Please select a valid date that is not in the past.";
            e.preventDefault();
        } else {
            dateSpan.innerText = "";
        }
    };
});
