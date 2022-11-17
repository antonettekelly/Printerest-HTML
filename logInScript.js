// form validation
$(document).ready(function () {
    $("#logInBtn").click(function () {

        //fetch form to apply custom Bootstrap validation
        var form = $("#logInForm")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
    })
})