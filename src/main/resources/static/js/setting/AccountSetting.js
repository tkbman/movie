/**
 * Created by Maibenben on 2017/4/3.
 */
$(function () {
    $('.name-modify,.name').click(function () {
        $('.name').hide(500);
        $('.set-name').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.close').click(function () {
        $('.name').show(500);
        $('.set-name').hide(500);

    });
    $('.tel-modify,.tel').click(function () {
        $('.tel').hide(500);
        $('.set-tel').show(500);
        if ($('.set-name').is(':visible')) {
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.tel-close').click(function () {
        $('.tel').show(500);
        $('.set-tel').hide(500);
    });
    $('.birth,.birth-modify').click(function () {
        $('.birth').hide(500);
        $('.set-birth').show(500);
        if ($('.set-name').is(':visible')) {
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.birth-close').click(function () {
        $('.birth').show(500);
        $('.set-birth').hide(500);
    });
    $('.sex,.sex-modify').click(function () {
        $('.sex').hide(500);
        $('.set-sex').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-name').is(':visible')){
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
        if ($('.set-address').is(':visible')) {
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.sex-close').click(function () {
        $('.sex').show(500);
        $('.set-sex').hide(500);
    });
    $('.introduction,.introduction-modify').click(function () {
        $('.introduction').hide(500);
        $('.set-introduction').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-name').is(':visible')){
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-address').is(':visible')){
            $('.set-address').hide(500);
            $('.address').show(500);
        }
    });
    $('.introduction-close').click(function () {
        $('.introduction').show(500);
        $('.set-introduction').hide(500);
    });
    $('.address,.address-modify').click(function () {
        $('.address').hide(500);
        $('.set-address').show(500);
        if ($('.set-tel').is(':visible')) {
            $('.set-tel').hide(500);
            $('.tel').show(500);
        }
        if ($('.set-birth').is(':visible')){
            $('.set-birth').hide(500);
            $('.birth').show(500);
        }
        if ($('.set-name').is(':visible')){
            $('.set-name').hide(500);
            $('.name').show(500);
        }
        if ($('.set-sex').is(':visible')){
            $('.set-sex').hide(500);
            $('.sex').show(500);
        }
        if ($('.set-introduction').is(':visible')){
            $('.set-introduction').hide(500);
            $('.introduction').show(500);
        }
    });
    $('.address-close').click(function () {
        $('.address').show(500);
        $('.set-address').hide(500);
    });
});
var where = new Array(35);

function comefrom(loca, locacity) {
    this.loca = loca;
    this.locacity = locacity;
}

where[0] = new comefrom("??????????????????", "??????????????????");
where[1] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|?????????|??????|?????????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[2] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[3] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[4] = new comefrom("?????????","|??????|??????|??????|?????????|??????|?????????|?????????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[5] = new comefrom("?????????","|?????????|??????|??????|??????|?????????|??????|??????|??????|?????????|??????|??????");
where[6] = new comefrom("?????????", "|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[7] = new comefrom("??????????????????","|????????????|??????|??????|??????|???????????????|????????????|????????????|?????????|???????????????|???????????????|???????????????|????????????");
where[8] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|?????????");
where[9] = new comefrom("?????????", "|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[10] = new comefrom("????????????","|?????????|????????????|?????????|?????????|??????|??????|??????|??????|??????|?????????|??????|?????????|????????????");
where[11] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|?????????|??????|??????|??????|??????|??????");
where[12] = new comefrom("?????????", "|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[13] = new comefrom("?????????","|??????|??????|??????|?????????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[14] = new comefrom("?????????", "|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[15] = new comefrom("?????????","|?????????|?????????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[16] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[17] = new comefrom("?????????","|??????|??????|??????|?????????|??????|??????|??????|??????|??????|??????|??????|?????????|??????|??????|??????|??????|?????????|??????");
where[18] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[19] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|?????????");
where[20] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[21] = new comefrom("?????????????????????","|??????|??????|??????|??????|??????|?????????|??????|??????|??????|????????????|????????????|??????|??????|??????");
where[22] = new comefrom("?????????", "|??????|??????");
where[23] = new comefrom("?????????","|??????|??????|??????|??????|?????????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[24] = new comefrom("?????????", "|??????|?????????|??????|??????|??????|?????????|??????|?????????|??????");
where[25] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|????????????|??????|??????|??????|??????|??????|??????");
where[26] = new comefrom("???????????????", "|??????|?????????|??????|??????|??????|??????|??????");
where[27] = new comefrom("?????????", "|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[28] = new comefrom("?????????","|??????|?????????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[29] = new comefrom("?????????????????????", "|??????|?????????|??????|??????");
where[30] = new comefrom("?????????", "|??????|??????|??????|??????|??????|??????|??????|??????");
where[31] = new comefrom("????????????????????????","|????????????|?????????|????????????|??????|????????????|??????|????????????????????????|????????????|?????????|??????|??????|??????|?????????");
where[32] = new comefrom("?????????????????????", "");
where[33] = new comefrom("?????????????????????", "");
where[34] = new comefrom("?????????","|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????|??????");
where[35] = new comefrom("??????", "|?????????|?????????|??????|??????|??????|?????????");

function select(id, sid) {
    with (document.getElementById(id)) {
        var loca2 = options[selectedIndex].value;
    }
    for (i = 0; i < where.length; i++) {
        if (where[i].loca == loca2) {
            loca3 = (where[i].locacity).split("|");
            for (j = 1; j < loca3.length; j++) {
                with (document.getElementById(sid)) {
                    length = loca3.length;
                    options[j].text = loca3[j];
                    options[j].value = loca3[j];
                    var loca4 = options[selectedIndex].value;
                }
            }
            break;
        }
    }
}

function init(id, sid) {
    with (document.getElementById(id)) {
        length = where.length;
        for (k = 0; k < where.length; k++) {
            options[k].text = where[k].loca;
            options[k].value = where[k].loca;
        }
        options[selectedIndex].text = where[0].loca;
        options[selectedIndex].value = where[0].loca;
    }
    with (document.getElementById(sid)) {
        loca3 = (where[0].locacity).split("|");
        length = loca3.length;
        for (l = 0; l < length; l++) {
            options[l].text = loca3[l];
            options[l].value = loca3[l];
        }
        options[selectedIndex].text = loca3[0];
        options[selectedIndex].value = loca3[0];
    }
}