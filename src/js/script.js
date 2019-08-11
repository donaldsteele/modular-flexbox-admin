jQuery(function ($) {
    $(".actionable").click(function (event) {
        actionable();
    });
});


(function ($) {
        //  All Alternate stylesheets Selector
        var $links = $('link[rel*=alternate][title]');

        $('#topBar').prepend('<div id="toolbar" class="flex child-right select"><select id="css-selector"></select></div>');
        var options = '<option value="">Change Theme:</option>';
        $links.each(function (index, value) {
            options += '<option value="' + $(this).attr('href') + '">' + $(this).attr('title') + '</option>';
        });
        $links.remove();

        $('#css-selector').append(options)
            .bind('change', function () {
                $('link[rel*=jquery]').remove();
                $('head').append('<link rel="stylesheet jquery" href="' + $(this).val() + '" type="text/css" />');
            });

    }
)(jQuery);


function actionable() {
    event.preventDefault();
    let elem = event.target;
    let target = $(elem).data('target');
    if (target) {
        let action = $(elem).data('action');

        if (action === 'toggleClass') {
            let newclass = $(elem).data('params');
            if (newclass) {
                $(target).toggleClass(newclass);
            }
        }
    }
    return false;
}
