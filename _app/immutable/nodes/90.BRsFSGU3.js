import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{m as v,n as i,o as n,p as r,q as s,r as P}from"../chunks/vUuJ8Ryo.js";import{T as G}from"../chunks/DqnZMk7a.js";import{P as u}from"../chunks/9ERiZpYr.js";import{P as p}from"../chunks/Bmbs4jhX.js";import{M as o}from"../chunks/BLaOouyV.js";import{D as H}from"../chunks/CWwBPb0q.js";import{C as z}from"../chunks/DgQHwt6I.js";import{S as I}from"../chunks/CZSxeg5_.js";var J=v(`Мы научились хешировать числа. Теперь мы хотим научиться хешировать последовательности чисел.
        Точнее, формально, мы хотим научиться хешировать строки из языка <!>,
        где каждый символ в алфавите <!> закодирован каким-то числом.`,1),K=v(`Строку <!> будем представлять как упорядоченный набор символов <!>,
        которые будем воспринимать как числа.`,1),L=v("<!> <!> <!>",1),N=v("<b>Прямым полиномиальным хешем</b> строки <!> называется число",1),O=v("<b>Обратным полиномиальным хешем</b> строки <!> называется число",1),Q=v(`Здесь <!> &mdash; произвольное число, большее размера алфавита,
        а <!> &mdash; достаточно большой модуль, взаимнопростый с <!>.`,1),R=v("<!> <!> <!> <!> <!>",1),U=v("<!> <!>",1),V=v(`Если нам известны хеши двух строк <!> и <!>,
        то мы можем быстро посчитать хеш конкатенации этих строк <!>.`,1),W=v(`А для удаления префикса придется делить по модулю <!>,
        то есть умножать на обратный по модулю <!> элемент`,1),X=v("<!> <!> <!> <!> <!> <!> <!>",1),Y=v(`Нам нужна некоторая подготовка. Если мы хотим для данной строки быстро находить хеш любого её среза,
        то нам придется предварительно посчитать хеши всех префиксов этой строки.
        Хранить всё будем в массиве <!>,
        где <!> &mdash; хеш префикса, состоящего из <!> символов.`,1),Z=v("<!> <!>",1),rr=v("Теперь хеш среза <!> строки <!> легко считается по формуле",1),or=v("<!> <!>",1),ar=v("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function lr(B){var k=ar(),w=i(k);G(w,{title:"Полиномиальное хеширование"});var A=r(w,2);u(A,{children:($,x)=>{var e=L(),d=i(e);p(d,{children:(c,_)=>{s();var t=J(),h=r(i(t));o(h,{m:"A^*"});var a=r(h,2);o(a,{m:"A"}),s(),n(c,t)}});var l=r(d,2);p(l,{children:(c,_)=>{s();var t=K(),h=r(i(t));o(h,{m:"s"});var a=r(h,2);o(a,{m:"s_i"}),s(),n(c,t)}});var m=r(l,2);o(m,{display:!0,m:"s = s_0 \\, s_1 \\, s_2 \\, s_3 \\dotsm s_{n-3} \\, s_{n-2} \\, s_{n-1} \\, s_n"}),n($,e)}});var C=r(A,2);H(C,{title:"Полиномиальный хеш",children:($,x)=>{var e=R(),d=i(e);p(d,{children:(t,h)=>{var a=N(),g=r(i(a),2);o(g,{m:"s"}),s(),n(t,a)}});var l=r(d,2);o(l,{display:!0,m:"\\hash(s) = \\sum_{i=0}^{n} s_i \\cdot x^i \\bmod m = \\big( s_0 + s_1 \\cdot x + s_2 \\cdot x^2 + \\dotsb + s_{n-1} \\cdot x^{n-1} + s_n \\cdot x^n \\big) \\bmod m"});var m=r(l,2);p(m,{children:(t,h)=>{var a=O(),g=r(i(a),2);o(g,{m:"s"}),s(),n(t,a)}});var c=r(m,2);o(c,{display:!0,m:"\\hash(s) = \\sum_{i=0}^{n} s_i \\cdot x^{n-i} \\bmod m = \\big( s_0 \\cdot x^n + s_1 \\cdot x^{n-1} + s_2 \\cdot x^{n-2} + \\dotsb + s_{n-1} \\cdot x + s_n \\big) \\bmod m"});var _=r(c,2);p(_,{children:(t,h)=>{s();var a=Q(),g=r(i(a));o(g,{m:"x"});var f=r(g,2);o(f,{m:"m"});var b=r(f,2);o(b,{m:"x"}),s(),n(t,a)}}),n($,e)}});var D=r(C,2);u(D,{children:($,x)=>{var e=U(),d=i(e);p(d,{children:(m,c)=>{s();var _=P(`Считаются прямые и обратные полиномиальные хеши почти в лоб.
        Сами значения многочленов можно быстро считать с помощью индуктивных вычислений,
        ведь сам многочлен — индуктивная функция.`);n(m,_)}});var l=r(d,2);p(l,{children:(m,c)=>{s();var _=P("Обратный хеш еще и красиво пишется. Однако, он немного непривычен из-за обратного порядка символов.");n(m,_)}}),n($,e)}});var M=r(D,2);z(M,{code:`const int x = ...
const int m = ...

function forward_hash(string s) -> int:
    int hash = 0
    int monome = 1

    for c of s:
        hash = (hash + monome * c) % m
        monome = (monome * x) % m

    return hash

function backward_hash(string s) -> int:
    int hash = 0

    for c of s:
        hash = (hash * x + c) % m

    return hash`});var S=r(M,2);I(S,{children:($,x)=>{s();var e=P("Свойства и быстрый пересчет");n($,e)}});var T=r(S,2);u(T,{children:($,x)=>{var e=X(),d=i(e);p(d,{children:(a,g)=>{s();var f=V(),b=r(i(f));o(b,{m:"a"});var y=r(b,2);o(y,{m:"b"});var F=r(y,2);o(F,{m:"ab"}),s(),n(a,f)}});var l=r(d,2);o(l,{display:!0,m:"\\hash(ab) = \\hash(a) + x^{|a|} \\cdot \\hash(b)"});var m=r(l,2);p(m,{children:(a,g)=>{s();var f=P("Отсюда легко выводятся алгоритмы удаления префикса и суффикса строки");n(a,f)}});var c=r(m,2);p(c,{children:(a,g)=>{s();var f=P("Для удаления суффикса достаточно просто вычесть хеш суффикса");n(a,f)}});var _=r(c,2);o(_,{display:!0,m:"\\hash(a) = \\hash(ab) - x^{|a|} \\cdot \\hash(b)"});var t=r(_,2);p(t,{children:(a,g)=>{s();var f=W(),b=r(i(f));o(b,{m:"m"});var y=r(b,2);o(y,{m:"m"}),s(),n(a,f)}});var h=r(t,2);o(h,{display:!0,m:"\\hash(b) = \\big( \\hash(ab) - \\hash(a) \\big) \\cdot \\big( x^{|a|} \\big)^{-1}"}),n($,e)}});var q=r(T,2);u(q,{children:($,x)=>{var e=Z(),d=i(e);p(d,{children:(m,c)=>{s();var _=P("Использовав две предыдущие формулы, можно получить формулу вычисления любого среза строки.");n(m,_)}});var l=r(d,2);p(l,{children:(m,c)=>{s();var _=Y(),t=r(i(_));o(t,{m:"h"});var h=r(t,2);o(h,{m:"h_i"});var a=r(h,2);o(a,{m:"i"}),s(),n(m,_)}}),n($,e)}});var j=r(q,2);z(j,{code:`const int x = ...
const int m = ...

string s
array[int] h

h[0] = 0  # Хеш пустой строки равен 0

for i = 1; i <= length(s); i++:
    h[i+1] = (h[i] + x ** i * s[i]) % m`});var E=r(j,2);u(E,{children:($,x)=>{var e=or(),d=i(e);p(d,{children:(m,c)=>{s();var _=rr(),t=r(i(_));o(t,{m:"s_{l:r}"});var h=r(t,2);o(h,{m:"s"}),s(),n(m,_)}});var l=r(d,2);o(l,{display:!0,m:"\\hash(s_{l:r}) = (h_r - h_l) \\cdot \\big( x^l \\big)^{-1}"}),n($,e)}}),n(B,k)}export{lr as component};
