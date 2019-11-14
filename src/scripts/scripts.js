// burger menu
document.querySelector('.main-header__responsive-icon').addEventListener('click', function(){
    document.querySelector('.main-header').classList.toggle('main-header--open');
});

document.querySelector('.main-header__overlay').addEventListener('click', function(){
    document.querySelector('.main-header').classList.toggle('main-header--open');
});


$(function () {
    // tabs
    var tabsComponent = $('.tabs__tab-bar');
    if (tabsComponent) {
        $('.tabs__tab-item').on('click', function (event) {
            event.preventDefault();
            var $scope = $(this).parents('.tabs');
            var tabTarget = this.hash;
            $scope.find('.tabs__tab-item').removeClass('tabs__tab-item--active');
            $(this).addClass('tabs__tab-item--active');

            $scope.find('.tabs__tab-panel').removeClass('tabs__tab-panel--active');
            $scope.find('.tabs__tab-panel').find('[data-animation]').removeClass('is-animated');
            $(tabTarget).addClass('tabs__tab-panel--active');
            setTimeout(() => {
                $(tabTarget).find('[data-animation]').addClass('is-animated');
            }, 10);
        });
    }

    // search box
    $(".search-box__icon").on("click", function(e){
        e.preventDefault();
        $(".search-box__input").focus();
        $(".search-box").toggleClass("is-open");
    });

    // body grey scale
    $("#enableGreyScale").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("body--grayscale");
    });
});



