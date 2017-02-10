$(() => {
    let $log = $(".event-log");
    let logEvent = (message) => {
        $log.text($log.text() + message + "\n")
            .scrollTop($log[0].scrollHeight - $log.height());
    };

    $("img").resizing({
        change: function (originalWidth, originalHeight, pageWidth, pageHeight) {
            logEvent("Resize: Resized from " + "(" + originalWidth + ',' + originalHeight + ")" +
                " to " + "(" + pageWidth + ',' + pageHeight + ")");
        }
    });
});
