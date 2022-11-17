// sticky navbar
$(document).ready(function () {
    // custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        // insert hidden element to maintain actual top offset on page
        var stickyWrapper = $('<div>').addClass('sticky-wrapper');
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // on page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});

// enable and disable specific select options
function EnableDisablePayMethod() {
    var selectedValue = del.options[del.selectedIndex].value;
    var payMethod = document.getElementById("payMethod");
    if (selectedValue == 1) {
        payMethod.options[1].disabled = false;
        payMethod.options[2].disabled = true;
        payMethod.options[3].disabled = true;
        payMethod.options[4].disabled = true;
        payMethod.options[5].disabled = true;
    } else {
        payMethod.options[1].disabled = true;
        payMethod.options[2].disabled = false;
        payMethod.options[3].disabled = false;
        payMethod.options[4].disabled = false;
        payMethod.options[5].disabled = false;
    }
    $('#del').change(function () {
        $('#payMethod option:first').prop('selected', 'selected');
    });
};

// function EnableDisableDel() {
//     var selectedValue = payMethod.options[payMethod.selectedIndex].value;
//     var del = document.getElementById("del");
//     if (selectedValue == 1) {
//         del.options[1].disabled = false;
//         del.options[2].disabled = true;
//         del.options[3].disabled = true;
//         del.options[4].disabled = true;
//     } else {
//         del.options[1].disabled = true;
//         del.options[2].disabled = false;
//         del.options[3].disabled = false;
//         del.options[4].disabled = false;
//         del.options[5].disabled = false;
//     }
//     $('#payMethod').change(function () {
//         $('#del option:first').prop('selected', 'selected');
//     });
// };

// form validation
$(document).ready(function () {
    $("#submitBtn").click(function () {

        //fetch form to apply custom Bootstrap validation
        var form = $("#payment-form")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
    });
});