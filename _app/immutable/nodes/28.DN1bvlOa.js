import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as c,a as $,b as a,s as r,n as e,t as b}from"../chunks/B1HoO4k0.js";import{H as z}from"../chunks/VyKLllFE.js";import{P as m}from"../chunks/B8FEnsbH.js";import{M as v}from"../chunks/e5qaD0UW.js";import{T as F}from"../chunks/CcX1cm_-.js";/* empty css                *//* empty css                */import{P as h}from"../chunks/ClksMsit.js";import{C as A}from"../chunks/DunPP-_K.js";var G=c("<!> <!>",1),I=c("<b>Наибольший общий делитель</b> чисел <!> и <!> &mdash; число",1),J=c("<!> <!>",1),K=c(`Когда оба числа равны <!>, результат <!> не определен,
    так как подойдет любое число.
    Будем в таком случае считать, что <!>.
    Тогда <!>.`,1),L=c(`Несколько примеров таких колец.
    Целые числа <!> и евклидова норма <!>,
    кольца многочленов <!> и евклидова норма <!>,
    гауссовы числа <!> и евклидова норма <!>.`,1),N=c("<!> <!> <!>",1),Q=c(`Для нахождения наибольшего общего делителя двух чисел можно применить <b>алгоритм Евклида</b>.
    Основан этот алгоритм на следующем факте`,1),S=c("<!> <!> <!> <!> <!>",1),U=c("Отсюда получается, что алгоритм работает за время <!>.",1),V=c("<!> <!>",1),W=c("<!> <!>",1),X=c("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function ir(B){var u=X(),w=$(u);F(w,{title:"Алгоритм Евклида"});var y=r(w,2);h(y,{children:(s,f)=>{var o=G(),t=$(o);m(t,{children:(_,l)=>{e();var n=b(`Безумно часто требуется вычислять наибольший общий делитель.
    Можно, конечно, делать как в школе: раскладывать числа на простые множители,
    искать пересечение множеств и перемножать все числа в результате.
    Но такой подход максимально неэффективен.`);a(_,n)}});var i=r(t,2);m(i,{children:(_,l)=>{e();var n=b("Здесь я рассмотрю алгоритмы быстрого и очень быстрого нахождения наибольшего общего делителя.");a(_,n)}}),a(s,o)}});var Z=r(y,2);h(Z,{children:(s,f)=>{var o=J(),t=$(o);m(t,{children:(_,l)=>{var n=I(),d=r($(n),2);v(d,{m:"a"});var g=r(d,2);v(g,{m:"b"}),e(),a(_,n)}});var i=r(t,2);v(i,{display:!0,m:"\\gcd(a, b) \\defeq \\max\\{ g : g \\divides a \\land g \\divides b \\}"}),a(s,o)}});var q=r(Z,2);h(q,{children:(s,f)=>{var o=N(),t=$(o);m(t,{children:(l,n)=>{e();var d=K(),g=r($(d));v(g,{m:"0"});var p=r(g,2);v(p,{m:"\\gcd(0, 0)"});var P=r(p,2);v(P,{m:"\\gcd(0, 0) \\defeq 0"});var x=r(P,2);v(x,{m:"\\gcd(a, 0) = a"}),e(),a(l,d)}});var i=r(t,2);m(i,{children:(l,n)=>{e();var d=b(`Тут надо сразу сказать важную вещь.
    Наибольший общий делитель существует не только для чисел, а для всего, что может делиться.
    Это определение, все дальнейшие утверждения и алгоритмы будут справедливы для любых
    коммутативных колец с единицей, в которых есть евклидова норма.`);a(l,d)}});var _=r(i,2);m(_,{children:(l,n)=>{e();var d=L(),g=r($(d));v(g,{m:"\\ZZ"});var p=r(g,2);v(p,{m:"a \\mapsto |a|"});var P=r(p,2);v(P,{m:"\\RR[x]"});var x=r(P,2);v(x,{m:"P \\mapsto \\deg P"});var j=r(x,2);v(j,{m:"\\ZZ[i]"});var E=r(j,2);v(E,{m:"(a + bi) \\mapsto a^2 + b^2"}),e(),a(l,d)}}),a(s,o)}});var C=r(q,2);h(C,{children:(s,f)=>{var o=S(),t=$(o);m(t,{children:(d,g)=>{e();var p=Q();e(2),a(d,p)}});var i=r(t,2);v(i,{display:!0,m:"\\gcd(a, b) = \\cases{a & \\if b = 0 \\\\ \\gcd(b, a - b) & \\otherwise}"});var _=r(i,2);m(_,{children:(d,g)=>{e();var p=b(`Для ускорения вычислений можно сразу вычитать столько, сколько возможно.
    Получаем формулу, которую уже можно использовать`);a(d,p)}});var l=r(_,2);v(l,{display:!0,m:"\\gcd(a, b) = \\cases{a & \\if b = 0 \\\\ \\gcd(b, a \\bmod b) & \\otherwise}"});var n=r(l,2);m(n,{children:(d,g)=>{e();var p=b("Ну вот мы и получили алгоритм Евклида.");a(d,p)}}),a(s,o)}});var H=r(C,2);A(H,{code:`function gcd(int a, int b) -> int:
    if b == 0:
        return a
    else:
        return gcd(b, a % b)`});var M=r(H,2);h(M,{children:(s,f)=>{m(s,{children:(o,t)=>{e();var i=b("Можно избавиться от небольшого оверхеда в рекурсии, переписав через цикл");a(o,i)}})}});var R=r(M,2);A(R,{code:`function gcd(int a, int b) -> int:
    while b > 0:
        a %= b
        swap a, b
    return a`});var T=r(R,2);h(T,{children:(s,f)=>{var o=V(),t=$(o);m(t,{children:(_,l)=>{e();var n=b(`Давайте грубо оценим время работы алгоритма.
    Каждую итерацию мы берем остаток от деления наибольшего числа на наименьшее,
    поэтому наибольшее число уменьшается минимум в два раза.`);a(_,n)}});var i=r(t,2);m(i,{children:(_,l)=>{e();var n=U(),d=r($(n));v(d,{m:"O\\left( \\log \\big( \\min(a, b) \\big) \\right)"}),e(),a(_,n)}}),a(s,o)}});var k=r(T,2);z(k,{children:(s,f)=>{e();var o=b("Расширенный алгоритм Евклида");a(s,o)}});var O=r(k,2);z(O,{children:(s,f)=>{e();var o=b("Быстрый алгоритм Евклида");a(s,o)}});var D=r(O,2);h(D,{children:(s,f)=>{var o=W(),t=$(o);m(t,{children:(_,l)=>{e();var n=b("Для быстрого вычисления наибольшего общего делителя двух чисел можно применить следующий факт");a(_,n)}});var i=r(t,2);v(i,{display:!0,m:"\\gcd(a \\cdot b, a \\cdot c) = a \\cdot \\gcd(b, c)"}),a(s,o)}}),a(B,u)}export{ir as component};
