$(document).on('click',function(e) {
    if(!$(e.target).closest('.fa-bars,.menu').length) {
        // ターゲット要素の外側をクリックした時の操作
        $("body").removeClass('open');
    } else {
        // ターゲット要素をクリックした時の操作
        $("body").addClass('open');
    }
    });