$(document).ready(function () {
    setColors();

    //get daily tasks from local storage

    for (var i = 9; i < 18; i++) {
        var id = "hr" + i;
        var description = localStorage.getItem(id);
        $("#" + id).val(description);
    }

    //function that saves tasks to the textarea when user clicks save button

    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var hourId = $(this).attr("name");
        var hourString = "#" + hourId;
        var task = $(hourString).val();
        localStorage.setItem(hourId, task);
    });

    //timer function

    setInterval(function () {
        $("#timeDisplay").text(moment().format("MMMM DD, YYYY hh:mm:ss"))
        setColors();
    }, 1000);

    // function to change colors of time slots based on whether they are in the past, present, and future 
    function setColors() {
        for (i = 9; i < 18; i++) {
            var h = moment().hour();
            var id = "hr" + i;

            if (h === i) {
                $("#hour" + i).attr("style", "background-color: gold");
                $("#hr" + i).attr("style", "background-color: gold");
            }
            else if (h > i) {
                $("#hour" + i).attr("style", "background-color: WhiteSmoke");
                $("#hr" + i).attr("style", "background-color: WhiteSmoke");
            }
            else {
                $("#hour" + i).attr("style", "background-color: PaleGreen");
                $("#hr" + i).attr("style", "background-color: PaleGreen");
            }
        }
    }

});
