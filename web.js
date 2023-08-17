function startTime() {
    // Lấy ngày,gio hiện tại
    var today = new Date();

    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    document.getElementById("clock-time").innerText ="Time now : "+ h + " h " + m + " m " + s + " s";

    setTimeout(() => {
        startTime();
    }, 500);
}
startTime();
