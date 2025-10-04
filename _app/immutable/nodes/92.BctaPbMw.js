import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{m as f,n as v,o as t,p as r,q as o,r as $}from"../chunks/BEXab77u.js";import{T as A}from"../chunks/CMyx6b9d.js";import{P as u}from"../chunks/M3lTRSDe.js";import{P as m}from"../chunks/C_D4TOu8.js";import{M as d}from"../chunks/BTDwyb5B.js";import{L as B}from"../chunks/BjJhFedE.js";import{C as S}from"../chunks/DPRrKhiz.js";import{C as D}from"../chunks/BrnW0Io5.js";/* empty css                */import{S as E}from"../chunks/Dck_Hiah.js";var F=f("<!> <!>",1),G=f(`У нас есть массив упорядоченных ключей <!>.
        При этом на ключах нам задано не только линейное отношение порядка, но и способ мерить масштаб.
        Формально, нам нужно, чтобы ключи были элементами
        линейного упорядоченного аффинного пространства над линейным упорядоченным полем.
        Но можно не думать об этих страшных словах и просто считать, что мы ищем среди чисел.`,1),H=f(`Нам нужно найти в этом массиве номер ключа <!>,
        то есть такое <!>, что <!>.`,1),I=f("<!> <!> <!>",1),J=f(`Как и с <!>, заведем переменные,
        указывающие на границы области поиска <!> и <!>.
        Но опорный индекс мы будем выбирать не как середину, а будем пытаться предсказывать положение целевого элемента <!>.`,1),N=f(`В итоге мы просто линейно интерполируем по двум точкам <!> и <!>, и вычисляем индекс <!>,
        с надеждой, что <!>. Формула вычисления индекса получается`,1),Q=f("<!> <!> <!> <!> <!>",1),R=f("Оно <!>. Надо будет написать доказательство.",1),U=f("<!> <!> <!> <!> <!> <!> <!>",1);function _r(T){var x=U(),C=v(x);A(C,{title:"Интерполяционный поиск"});var k=r(C,2);u(k,{children:(l,j)=>{var a=F(),s=v(a);m(s,{children:(_,c)=>{o();var g=$(`Давайте снова возьмем словарь и будем искать в нйм слова.
        Если нам поступил запрос на поиск слова «абака», то, кажется, нет смысла открывать словарь
        в середине, ведь слово прям очень близко к началу словаря.
        Такой подход свойственен нам, людям, и абсолютно чужд для машин. Так научим же их!`);t(_,g)}});var i=r(s,2);m(i,{children:(_,c)=>{o();var g=$("Мы хотим научиться предсказывать позицию искомого элемента, и корректировать область поиска в случае промаха.");t(_,g)}}),t(l,a)}});var q=r(k,2);u(q,{children:(l,j)=>{var a=I(),s=v(a);m(s,{children:(c,g)=>{o();var e=G(),p=r(v(e));d(p,{m:"K_1, K_2, K_3, \\dotsc, K_{n-1}, K_n"}),o(),t(c,e)}});var i=r(s,2);d(i,{display:!0,m:"K_1 < K_2 < K_3 < \\dotsb < K_{n-1} < K_n"});var _=r(i,2);m(_,{children:(c,g)=>{o();var e=H(),p=r(v(e));d(p,{m:"K"});var n=r(p,2);d(n,{m:"j"});var h=r(n,2);d(h,{m:"K_j = K"}),o(),t(c,e)}}),t(l,a)}});var y=r(q,2);u(y,{children:(l,j)=>{var a=Q(),s=v(a);m(s,{children:(e,p)=>{o();var n=J(),h=r(v(n));B(h,{to:"comparison-search",children:(O,V)=>{o();var z=$("бинарным поиском");t(O,z)},$$slots:{default:!0}});var P=r(h,2);S(P,{c:"left"});var K=r(P,2);S(K,{c:"right"});var b=r(K,2);d(b,{m:"K"}),o(),t(e,n)}});var i=r(s,2);m(i,{children:(e,p)=>{o();var n=$(`Для того, чтобы что-то предположить, нам нужно какое-то основание.
        Пусть мы будем надеяться на то, что элементы по индексам подчиняются линейной зависимости.`);t(e,n)}});var _=r(i,2);m(_,{children:(e,p)=>{o();var n=N(),h=r(v(n));d(h,{m:"\\big( \\code{left}, a[\\code{left}] \\big)"});var P=r(h,2);d(P,{m:"\\big( \\code{right}, a[\\code{right}] \\big)"});var K=r(P,2);d(K,{m:"j"});var b=r(K,2);d(b,{m:"a[j] = K"}),o(),t(e,n)}});var c=r(_,2);d(c,{display:!0,m:"j = \\code{left} + \\frac{\\big( K - a[\\code{left}] \\big) \\cdot (\\code{right} - \\code{left})}{a[\\code{right}] - a[\\code{left}]}"});var g=r(c,2);m(g,{children:(e,p)=>{o();var n=$("В остальном алгоритм полностью аналогичен бинарному поиску.");t(e,n)}}),t(l,a)}});var L=r(y,2);D(L,{code:`function interpolation_search(sequence a, target) -> int:
    int left = 0
    int right = length(a) - 1

    while left <= right:
        int j = left + (target - a[left]) * (right - left) / (a[right] - a[left])

        if a[j] == target:
            return j
        else if a[j] < target:
            left = j + 1
        else:
            right = j - 1

    return not found`});var M=r(L,2);E(M,{children:(l,j)=>{o();var a=$("Анализ количества сравнений");t(l,a)}});var w=r(M,2);u(w,{children:(l,j)=>{m(l,{children:(a,s)=>{o();var i=R(),_=r(v(i));d(_,{m:"O(\\log \\log n)"}),o(),t(a,i)}})}}),t(T,x)}export{_r as component};
