jQuery(function ($) {
    $(".actionable").click(function (event) {
        actionable()
    })
});

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

