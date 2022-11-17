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


// form validation
$(document).ready(function () {
    $("#shopBtn").click(function () {

        //fetch form to apply custom Bootstrap validation
        var form = $("#order-form")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
    })

    $("#payBtn").click(function () {

        //fetch form to apply custom Bootstrap validation
        var form = $("#order-form")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
    })
})

// show uploaded image
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

// show uploaded image name
var input = document.getElementById('upload');
var infoArea = document.getElementById('upload-label');

input.addEventListener('change', showFileName);

function showFileName(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
}