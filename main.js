function myForm() {
    if (!(document.getElementById('select-course-1').checked) && !(document.getElementById('select-course-2').checked) && !(document.getElementById('select-course-3').checked)) {
        alert("Select any program");
    }
}

$(document).on('click', 'input[type="checkbox"]', function () {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});


$(function () {
    $("#select-course-1").click(function () {
        if ($(this).is(":checked")) {
            console.log("working");
            $("#AIform").show();
            $("#ProgramName").text("Global Certificate in Data Science & AI");
            $("#optiond").text("8 May 2021");
            $("#GCDform").hide();
            $("#CDFform").hide();
            $("#form").hide();
        } else {
            $("#AIform").hide();
            $("#form").show();
        }
    });
});



$(function () {
    $("#select-course-2").click(function () {
        if ($(this).is(":checked")) {
            $("#ProgramName").text("Global Certificate in Data Science");
            $("#optiond").text("30 April 2021");
            $("#GCDform").show();
            $("#AIform").hide();
            $("#CDFform").hide();
            $("#form").hide();

        } else {
            $("#GCDform").hide();
            $("#form").show();

        }
    });
});


$(function () {
    $("#select-course-3").click(function () {
        if ($(this).is(":checked")) {
            $("#ProgramName").text("Certificate in Data Science Foundation");
            $("#optiond").text("10 June 2021");
            $("#CDFform").show();
            $("#AIform").hide();
            $("#GCDform").hide();
            $("#form").hide();

        } else {
            $("#CDFform").hide();
            $("#form").show();

        }
    });
});