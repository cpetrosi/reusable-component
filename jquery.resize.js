(($) => {
    $.fn.resizing = function (options) {
        let $this = this;
        let $current = null;
        var originalWidth;
        var originalHeight;

        $this.addClass('resizing').mousedown((event) => {
            $current = $(event.currentTarget);
            originalWidth = $current.width();
            originalHeight = $current.height();

            var startOffset = $(event.target);
            event.target.deltaX = startOffset.offset().left;
            event.target.deltaY = startOffset.offset().top;
        });
        
        $(document).mousemove((event) => {
            if ($current && $current.hasClass('resizing')) {
                var pageWidth = (event.pageX - event.target.deltaX) * 2;
                var pageHeight = (event.pageY - event.target.deltaY) * 2;

                $current.width(pageWidth);
                $current.height(pageHeight);

                if ($.isFunction(options.change)) {
                    options.change.call($current, originalWidth, originalHeight, pageWidth, pageHeight);
                }
            }
            event.stopPropagation();
            event.preventDefault();

        }).mouseup((event) => {
            $current = null;
            event.target.resizing = false;
            event.stopPropagation();
            event.preventDefault();
        });
        return $this;
    };
})(jQuery);