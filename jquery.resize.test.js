describe("resize jQuery plugin", () => {
    let options = {
        change: () => {
        }
    };

    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("jquery.resize.fixture.html");
    });

    afterEach(() => fixture.cleanup());

    it("should return itself when the plugin is installed", () => {
        let $target = $(".resize-test");
        let $pluginResult = $target.resize(options);

        expect($pluginResult).toBe($target);
    });

    describe("installed behavior", () => {
        beforeEach(() => $(".resize-test").resize(options));

        it("should invole the event log correctly", () => {
            let logEvent = $.Event(".event-log", { pageX: 20 });
            $(".resize-test").trigger(logEvent);

        });

        it("should not think it is always in a resizing state", () => {
            expect($("event.target.resizing").hasClass("resizing")).toBe(false);
        });

        it("should invoke the callback correctly", () => {
            let mousedown = $.Event("mousedown", { pageX: 20 });
            $(".resize-test").trigger(mousedown);

            let mousemove = $.Event("mouseup", { pageX: 10 });
            $(".resize-test").trigger(mousemove);

        });
    });
});
