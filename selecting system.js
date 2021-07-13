// when document is ready!!
$(document).ready(function() {
    // once we change selecting value
    // this will happen
    $(".select").on("change", function() {
        // alert($(this).val());
        $(".dis").hide();
        $("#" + $(this).val()).fadeIn(500);
    }).change();
});