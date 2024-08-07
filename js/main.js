// import customSelect from "custom-select";
const bodyElement = document.querySelector("body")


// Yandex Map 

// const YBox = document.getElementById("YMap");

let center = [59.907471, 30.324903];

function init() {
	let map = new ymaps.Map("YMap", {
		center: center,
		zoom: 15
	});

    let firstBranch = new ymaps.Placemark([59.907471, 30.324903], {}, {
		iconLayout: "default#image",
		iconImageHref: "../images/pin.svg",
		iconImageSize: [70, 70],
		iconImageOffset: [-19, -44]
	});
    let secondBranch = new ymaps.Placemark([55.801019, 37.592513], {}, {
		iconLayout: "default#image",
		iconImageHref: "../images/pin.svg",
		iconImageSize: [70, 70],
		iconImageOffset: [-19, -44]
	});



    map.controls.remove("searchControl"); 
    map.controls.remove("trafficControl"); 
    map.controls.remove("fullscreenControl");// переход в полноэкранный режим
    map.controls.remove("rulerControl"); 
    map.behaviors.disable(["scrollZoom"]); //  скролл карты

    map.geoObjects
        .add(firstBranch)
        .add(secondBranch);
}

ymaps.ready(init);


// Order Phone Modal 

const orderPhoneMaskInput = bodyElement.querySelector("#orderPhone_inp");
const orderPhoneFrom = bodyElement.querySelector("#orderPhone_form");

const orderPhoneMask = new IMask(
    orderPhoneMaskInput,
    {
        mask: "+{7}(000)000-00-00",
        lazy: false
    }
)

orderPhoneFrom.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!orderPhoneMaskInput.value || !orderPhoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        orderPhoneMaskInput.classList.add("is-invalid");
    } else {
        orderPhoneMaskInput.classList.remove("is-invalid");
        const modalElement = bodyElement.querySelector("#orderPhoneModal")
        const myFormModal = new bootstrap.Modal(modalElement)
        // myFormModal.hide()
        modalElement.classList.remove("show");
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "0px";
        document.body.style.overflow = "visible";
        document.querySelector(".modal-backdrop").remove();
        const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
        mySuccessModal.show()
    }
})

orderPhoneMaskInput.addEventListener("blur", function(event) {
    if (!orderPhoneMaskInput.value || !orderPhoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        orderPhoneMaskInput.classList.add("is-invalid");
    } else {
        orderPhoneMaskInput.classList.remove("is-invalid");
    }
})



// Number placeholder 
const phoneMaskInput = bodyElement.querySelector("#phone_inp");
const phoneMaskFrom = bodyElement.querySelector("#phone_form");

const maskPhone = new IMask(
    phoneMaskInput,
    {
        mask: "+{7}(000)000-00-00",
        lazy: false
    }
)


// Form Modal 
phoneMaskFrom.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!phoneMaskInput.value || !phoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        phoneMaskInput.classList.add("is-invalid");
    } else {
        phoneMaskInput.classList.remove("is-invalid");
        const modalElement = bodyElement.querySelector("#questionFormModal")
        const myFormModal = new bootstrap.Modal(modalElement)
        // myFormModal.hide()
        modalElement.classList.remove("show");
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "0px";
        document.body.style.overflow = "visible";
        document.querySelector(".modal-backdrop").remove();
        const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
        mySuccessModal.show()
    }
})

phoneMaskInput.addEventListener("blur", function(event) {
    if (!phoneMaskInput.value || !phoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        phoneMaskInput.classList.add("is-invalid");
    } else {
        phoneMaskInput.classList.remove("is-invalid");
    }
})

const orderFrom = bodyElement.querySelector("#order_modal");

orderFrom.addEventListener("submit", function(event) {
    event.preventDefault();

    const modalElement = bodyElement.querySelector("#formModal")
    const myFormModal = new bootstrap.Modal(modalElement)
    // myFormModal.hide()
    modalElement.classList.remove("show");
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "0px";
    document.body.style.overflow = "visible";
    document.querySelector(".modal-backdrop").remove();
    const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
    mySuccessModal.show()
})


// Custom Select 
if (typeof require !== "undefined") {
    var customSelect = require("custom-select").default;
    require("./node_modules/custom-select/build/custom-select.css");
}

const mySelects = customSelect("select");

// Submit application form 
const submitAppMaskFrom = bodyElement.querySelector("#submit_app_form");
const submitAppPhoneMaskInput = bodyElement.querySelector("#submit_app_phone");
const submitAppPhoneSelect = bodyElement.querySelector("#submit_app_select");
const submitAppPhoneSelectBox = bodyElement.querySelector(".pagecrm_manageBusiness-form-select-box");

const submitAppTelMask = new IMask(
    submitAppPhoneMaskInput,
    {
        mask: "+{7}(000)000-00-00",
        lazy: false
    }
)


submitAppMaskFrom.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!submitAppPhoneMaskInput.value || !submitAppPhoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        submitAppPhoneMaskInput.classList.add("is-invalid");
    } else if (submitAppPhoneSelect.value == "Выберите систему*") {
        submitAppPhoneSelectBox.classList.add("is-invalid");
    } else {
        submitAppPhoneMaskInput.classList.remove("is-invalid");
        submitAppPhoneSelectBox.classList.remove("is-invalid");
        const modalElement = bodyElement.querySelector(".pagecrm_form-modal-top")
        const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
        mySuccessModal.show()
    }
})

submitAppPhoneMaskInput.addEventListener("blur", function(event) {
    if (!submitAppPhoneMaskInput.value || !submitAppPhoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        submitAppPhoneMaskInput.classList.add("is-invalid");
    } else {
        submitAppPhoneMaskInput.classList.remove("is-invalid");
    }
})
submitAppPhoneSelect.addEventListener("change", function(event) {
    if (submitAppPhoneSelect.value == "Выберите систему*") {
        submitAppPhoneSelectBox.classList.add("is-invalid");
    } else {
        submitAppPhoneSelectBox.classList.remove("is-invalid");
    }
})
// CRM System form 
const crmSystemMaskFrom = bodyElement.querySelector("#crm_system_form");
const crmSystemMaskInput = bodyElement.querySelector("#crm_system_phone");
const crmSystemPhoneSelect = bodyElement.querySelector("#crm_system_select");
const crmSystemPhoneSelectBox = bodyElement.querySelector(".pagecrm_crmSystem-form-select-box");



const crmSystemTelMask = new IMask(
    crmSystemMaskInput,
    {
        mask: "+{7}(000)000-00-00",
        lazy: false
    }
)


crmSystemMaskFrom.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!crmSystemMaskInput.value || !crmSystemMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        crmSystemMaskInput.classList.add("is-invalid");
    } else if (crmSystemPhoneSelect.value == "Выберите услугу*") {
        crmSystemPhoneSelectBox.classList.add("is-invalid");
    } else {
        crmSystemMaskInput.classList.remove("is-invalid");
        crmSystemPhoneSelectBox.classList.remove("is-invalid");
        const modalElement = bodyElement.querySelector(".pagecrm_form-modal-top")
        const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
        mySuccessModal.show()
    }
})

crmSystemMaskInput.addEventListener("blur", function(event) {
    if (!crmSystemMaskInput.value || !crmSystemMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        crmSystemMaskInput.classList.add("is-invalid");
    } else {
        crmSystemMaskInput.classList.remove("is-invalid");
    }
})
crmSystemPhoneSelect.addEventListener("change", function(event) {
    if (crmSystemPhoneSelect.value == "Выберите услугу*") {
        crmSystemPhoneSelectBox.classList.add("is-invalid");
    } else {
        crmSystemPhoneSelectBox.classList.remove("is-invalid");
    }
})



// Contact us Form 
const contactUsFrom = bodyElement.querySelector("#contactUs_from");
const contactUsMaskInput = bodyElement.querySelector("#contactUs_tel");


const contactUsMaskPhone = new IMask(
    contactUsMaskInput,
    {
        mask: "+{7}(000)000-00-00",
        lazy: false
    }
)

contactUsFrom.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!contactUsMaskInput.value || !contactUsMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        contactUsMaskInput.classList.add("is-invalid");
    } else {
        contactUsMaskInput.classList.remove("is-invalid");

        const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
        mySuccessModal.show()
    }
})

contactUsMaskInput.addEventListener("blur", function(event) {
    if (!contactUsMaskInput.value || !contactUsMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        contactUsMaskInput.classList.add("is-invalid");
    } else {
        contactUsMaskInput.classList.remove("is-invalid");
    }
})



// Service Modal 
const servicePhoneFrom = bodyElement.querySelector("#servicePhone_form");
const chooseServiceForm = bodyElement.querySelector("#choose_service");
const contextualAdvertisingForm = bodyElement.querySelector("#contextual_advertising");
const designForm = bodyElement.querySelector("#design");
const crmForm = bodyElement.querySelector("#crm");
const telephonyForm = bodyElement.querySelector("#telephony");
const websiteDevelopmentForm = bodyElement.querySelector("#website_development");
const serverForm = bodyElement.querySelector("#server");

chooseServiceForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.type === "radio");
    
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].checked) {
            selectedOptionValue = formElements[i].value;
            
            // chooseServiceForm.classList.add("hide");
            break;
        }
    }

    if (selectedOptionValue) {
        switch (selectedOptionValue) {
            case "choose_service":
                chooseServiceForm.classList.remove("hide")
                break;
            case "contextual_advertising":
                contextualAdvertisingForm.classList.remove("hide")
                break;
            case "design":
                designForm.classList.remove("hide")
                break;
            case "crm":
                crmForm.classList.remove("hide")
                break;
            case "telephony":
                telephonyForm.classList.remove("hide")
                break;
            case "website_development":
                websiteDevelopmentForm.classList.remove("hide")
                break;
            case "server":
                serverForm.classList.remove("hide")
                break;

        }
        chooseServiceForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})

// Other Options 
contextualAdvertisingForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.type === "radio");;
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === "radio" && formElements[i].checked) {
            selectedOptionValue = formElements[i].value;
            break;
        }
    }

    if (selectedOptionValue) {
        servicePhoneFrom.classList.remove("hide")
        contextualAdvertisingForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})
designForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.tagName === "INPUT");;
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        console.log();
        if (formElements[i].checked || (formElements[i].value != "" && formElements[i].type === "text")) {
            selectedOptionValue = formElements[i].value;
            break;
        }
    }

    if (selectedOptionValue) {
        servicePhoneFrom.classList.remove("hide")
        designForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})
crmForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.tagName === "INPUT");;
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        console.log();
        if (formElements[i].checked || (formElements[i].value != "" && formElements[i].type === "text")) {
            selectedOptionValue = formElements[i].value;
            break;
        }
    }

    if (selectedOptionValue) {
        servicePhoneFrom.classList.remove("hide")
        crmForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})
telephonyForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.tagName === "INPUT");;
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        console.log();
        if (formElements[i].checked || (formElements[i].value != "" && formElements[i].type === "text")) {
            selectedOptionValue = formElements[i].value;
            break;
        }
    }

    if (selectedOptionValue) {
        servicePhoneFrom.classList.remove("hide")
        telephonyForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})
websiteDevelopmentForm.addEventListener("submit", function(event) {0
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.tagName === "INPUT");;
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        console.log();
        if (formElements[i].checked || (formElements[i].value != "" && formElements[i].type === "text")) {
            selectedOptionValue = formElements[i].value;
            break;
        }
    }

    if (selectedOptionValue) {
        servicePhoneFrom.classList.remove("hide")
        websiteDevelopmentForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})
serverForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const formElements = Array.from(event.target.elements).filter(element => element.tagName === "INPUT");;
    let selectedOptionValue = null;

    for (let i = 0; i < formElements.length; i++) {
        console.log();
        if (formElements[i].checked || (formElements[i].value != "" && formElements[i].type === "text")) {
            selectedOptionValue = formElements[i].value;
            break;
        }
    }

    if (selectedOptionValue) {
        servicePhoneFrom.classList.remove("hide")
        serverForm.classList.add("hide");
    } else {
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].classList.add("is-invalid");
        }
    }
})

// Return Back Function 
const serviceReturnBackbButtons = document.querySelectorAll(".pagecrm_form-service-return-back");
serviceReturnBackbButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const backId = event.target.getAttribute("data-back-id")
        switch (backId) {
            case "choose_service":
                chooseServiceForm.classList.add("hide")
                break;
            case "contextual_advertising":
                contextualAdvertisingForm.classList.add("hide")
                break;
            case "design":
                designForm.classList.add("hide")
                break;
            case "crm":
                crmForm.classList.add("hide")
                break;
            case "telephony":
                telephonyForm.classList.add("hide")
                break;
            case "website_development":
                websiteDevelopmentForm.classList.add("hide")
                break;
            case "server":
                serverForm.classList.add("hide")
                break;

        }
        chooseServiceForm.classList.remove("hide");
    });
});




const servicePhoneMaskInput = bodyElement.querySelector("#servicePhone_inp");

const servicePhoneMask = new IMask(
    servicePhoneMaskInput,
    {
        mask: "+{7}(000)000-00-00",
        lazy: false
    }
)


servicePhoneFrom.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!servicePhoneMaskInput.value || !servicePhoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        servicePhoneMaskInput.classList.add("is-invalid");
    } else {
        chooseServiceForm.classList.remove("hide")
        servicePhoneFrom.classList.add("hide")
        servicePhoneMaskInput.classList.remove("is-invalid");
        const modalElement = bodyElement.querySelector("#serviceModal")
        const myFormModal = new bootstrap.Modal(modalElement)
        // myFormModal.hide()
        modalElement.classList.remove("show");
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "0px";
        document.body.style.overflow = "visible";
        document.querySelector(".modal-backdrop").remove();
        const mySuccessModal = new bootstrap.Modal(bodyElement.querySelector(".pagecrm_success-modal"))
        mySuccessModal.show()
    }
})

servicePhoneMaskInput.addEventListener("blur", function(event) {
    if (!servicePhoneMaskInput.value || !servicePhoneMaskInput.value.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
        servicePhoneMaskInput.classList.add("is-invalid");
    } else {
        servicePhoneMaskInput.classList.remove("is-invalid");
    }
})