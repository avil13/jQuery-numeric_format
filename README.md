jQuery-numeric_format
=====================


[Demo](http://avil13.github.io/demo/numeric_format/ "demo")
===



Заменяет форматирование чисел в указанных селекторах  
Переписано из исходников взятых из интернета


```js
jQuery(document).ready(function($) {
    $('p.nead-formatting').numeric_format({thSep:' ', dcSep:','});
});
```

вместо  
```html
<p class="nead-formatting">123123.12 рублей</p>
```  
Получаем  
```html
<p class="nead-formatting">123 123,12 рублей</p>
```

**Опции**  
*thSep*  - разделитель разрядов  
*dcSep*  - указатель десятичного делителя
