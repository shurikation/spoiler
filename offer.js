// purchace block toggle

(function ($) {
    $(document).on('click', '.purchase__arrow', function (e) {
        purchaceBlockToggle.call(this, e);
    });
})(jQuery);

function purchaceBlockToggle(event) {

    let openedClassName = "opened";
    let scrollClassName = "scroll";

    let purchaseBlocksJs = $(this).closest(".purchase__block--js");
    if (!purchaseBlocksJs.length)
        return;

    let purchaseBlock = purchaseBlocksJs[0];
    let purchaseTopBlock = $(purchaseBlocksJs).find(".purchase__top-block").first();
    let purchaseLine = $(purchaseBlock).find('.purchase__line')[0];
    let purchaseArrow = $(purchaseBlock).find('.purchase__arrow')[0];

    let purchaseBlockOpen = $(purchaseBlock).hasClass(openedClassName);
    let purchaseBlockscroll = $(purchaseTopBlock).hasClass(scrollClassName);

    if (purchaseBlockOpen === false) {
        $(purchaseBlock).addClass(openedClassName);

        if (purchaseBlockscroll === false) {
            $(purchaseTopBlock).addClass(scrollClassName);
        }

        // totalHeight :
        let line = 350;
        let totalHeight = line;
        totalHeight += purchaseBlock.offsetHeight;

        let closePurchaseBlock = gsap.timeline();
        closePurchaseBlock.to(purchaseArrow, { duration: .2, rotation: 0 })
            .to(purchaseBlock, { duration: .2, height: totalHeight })
            .to(purchaseLine, { duration: .2, height: 70 })

    } else if (purchaseBlockOpen) {

        $(purchaseBlock).removeClass(openedClassName);

        if (purchaseBlockscroll === true) {
            $(purchaseTopBlock).removeClass(scrollClassName);
        }

        let openPurchaseBlock = gsap.timeline();
        openPurchaseBlock.to(purchaseArrow, { duration: .2, rotation: 180 })
            .to(purchaseBlock, { duration: .2, height: 190 })
            .to(purchaseLine, { duration: .01, height: 80 })
    }
}




