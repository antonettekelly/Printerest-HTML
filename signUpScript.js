// form validation
$(document).ready(function () {
    $("#signUpBtn").click(function () {

        //fetch form to apply custom Bootstrap validation
        var form = $("#signUpForm")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
    })
})