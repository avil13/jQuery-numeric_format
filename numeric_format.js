/**
* use
jQuery(document).ready(function($) {
    $('p.nead-formatting').numeric_format({thSep:' ', dcSep:','});
});
*/

(function($) {
    $.fn.numeric_format = function(options) {
        if (this === undefined) {
            return ("error");
        }

        var settings = $.extend({
            'thSep': ' ', // Проверка указания разделителя разрядов
            'dcSep': ',' // Проверка указания десятичного разделителя
        }, options);


        var str = $(this).html().toString();

        var val = str.replace(/[^\d\.\,]/g, "");



        var res = val.toString();
        var lZero = (val < 0); // Признак отрицательного числа

        // Определение длины форматируемой части
        var fLen = res.lastIndexOf('.'); // До десятичной точки
        fLen = (fLen > -1) ? fLen : res.length;

        // Выделение временного буфера
        settings.tmpRes = res.substring(fLen);
        var cnt = -1;
        for (var ind = fLen; ind > 0; ind--) {
            cnt++; // Формируем временный буфер

            if (((cnt % 3) === 0) && (ind !== fLen) && (!lZero || (ind > 1))) {
                settings.tmpRes = settings.thSep + settings.tmpRes;
            }

            settings.tmpRes = res.charAt(ind - 1) + settings.tmpRes;
        }


        var r = str.replace(new RegExp(val, 'g'), settings.tmpRes.replace('.', settings.dcSep));

        $(this).html(r);
    };
})(jQuery);
