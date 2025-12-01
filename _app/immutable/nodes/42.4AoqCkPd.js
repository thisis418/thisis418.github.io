import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as c,a as g,b as t,s as r,n,t as b}from"../chunks/BWp35gWV.js";import{T as R}from"../chunks/CR7k0xtG.js";import{P as j}from"../chunks/DPzc5wQr.js";import{P as $}from"../chunks/B7flgP-x.js";/* empty css                *//* empty css                *//* empty css                */import{C as J}from"../chunks/BvAJckrt.js";import{C as y}from"../chunks/BmgYHZay.js";import{H as K}from"../chunks/DXKx2xvL.js";import{M as o}from"../chunks/BqyEoRxA.js";/* empty css                *//* empty css                */var S=c("Здесь мы будем находить все простые числа от <!> до <!>.",1),U=c("<b>Решето Эратосфена</b> &mdash; алгоритм нахождения списка простых чисел.",1),V=c(`Идея простая. Запишем ряд чисел <!>.
    Вычеркнем из него все числа, делящиеся на <!>, кроме, конечно, <!>.
    Затем вычеркнем все числа, делящиеся на <!>, кроме <!>.
    Число <!> уже вычеркнуто, и все числа, кратные <!>, тоже. Поэтому идём дальше.
    Вычеркиваем все числа, делящиеся на <!>, кроме <!>.
    Ну и продолжаем так, пока не дойдем до конца.`,1),W=c("<!> <!> <!>",1),X=c(`Реализовывать программно это можно по-разному, но самый простой способ &mdash;
    завести битовый массив <!>.
    Если число <!> вычеркнуто, то <!>.
    Вообще можно оставить лишние <!> бита в начале и сделать нормальную индексацию.`,1),Y=c(`Во-первых, начинать вычёркивать кратные числа <!> можно с <!>, а не с <!>.
    Ведь все составные числа, кратные <!> и меньшие <!> были вычеркнуты до этого,
    потому что у них был делитель, меньший <!>.`,1),Z=c(`Во-вторых, внешний цикл можно сделать до <!>.
    Пусть <!> &mdash; простое число, большее <!>.
    Его наименьшее кратное, которое можно вычеркнуть &mdash; <!>.
    Оно будет находиться за диапазоном поиска простых, ведь <!>.`,1),rr=c("<!> <!> <!> <!>",1),or=c(`Проанализируем время работы алгоритма.
    Будем измерять число установок в битовом массиве <!>.`,1),nr=c(`Для каждого простого числа <!> в диапазоне от <!> до <!> мы сделаем <!> установок.
    Количество чисел в диапазоне от <!> до <!>, которые кратны <!>,
    равно <!>.
    Тогда общее количество установок, сделанное алгоритмом, равно`,1),ar=c("где <!> &mdash; константа Мейсселя-Мертенса.",1),er=c("<!> <!> <!> <!> <!> <!>",1),tr=c(`Пусть <!> &mdash;
    минимальный простой делитель числа <!>.
    Любое число <!> тогда представимо в виде <!>,
    где у <!> нет простых делителей, меньших <!>.`,1),dr=c("<!> <!>",1),_r=c(`Давайте для каждого числа <!> считать <!>.
    Заведем массив <!>, в котором будем хранить найденные значения.`,1),vr=c("<!> <!>",1),ir=c("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function qr(L){var B=ir(),C=g(B);R(C,{title:"Решета"});var H=r(C,2);j(H,{children:(p,x)=>{$(p,{children:(d,h)=>{n();var m=S(),i=r(g(m));o(i,{m:"1"});var s=r(i,2);o(s,{m:"n"}),n(),t(d,m)}})}});var O=r(H,2);K(O,{children:(p,x)=>{n();var d=b("Решето Эратосфена");t(p,d)}});var T=r(O,2);j(T,{children:(p,x)=>{var d=W(),h=g(d);$(h,{children:(s,e)=>{var v=U();n(),t(s,v)}});var m=r(h,2);$(m,{children:(s,e)=>{n();var v=V(),a=r(g(v));o(a,{m:"2, 3, 4, \\dotsc, n-1, n"});var f=r(a,2);o(f,{m:"2"});var _=r(f,2);o(_,{m:"2"});var l=r(_,2);o(l,{m:"3"});var P=r(l,2);o(P,{m:"3"});var u=r(P,2);o(u,{m:"4"});var k=r(u,2);o(k,{m:"4"});var q=r(k,2);o(q,{m:"5"});var M=r(q,2);o(M,{m:"5"}),n(),t(s,v)}});var i=r(m,2);$(i,{children:(s,e)=>{n();var v=b("Итого, мы для каждого простого числа вычёркиваем все дальнейшие числа, кратные ему.");t(s,v)}}),t(p,d)}});var w=r(T,2);j(w,{children:(p,x)=>{$(p,{children:(d,h)=>{n();var m=X(),i=r(g(m));y(i,{c:"is_prime"});var s=r(i,2);o(s,{m:"i"});var e=r(s,2);o(e,{m:"\\code{is\\_prime}[i-2] = 0"});var v=r(e,2);o(v,{m:"2"}),n(),t(d,m)}})}});var z=r(w,2);J(z,{code:`input const int n
array[bool] is_prime[n+1] = [true, true, ..., true]

for int i = 2; i <= n; i++:
    if is_prime[i]:
        for int j = 2 * i; j <= n; j += i:
            is_prime[j] = false`});var A=r(z,2);j(A,{children:(p,x)=>{var d=rr(),h=g(d);$(h,{children:(e,v)=>{n();var a=b("Есть несколько очевидных оптимизаций, которые стоит сразу же применить.");t(e,a)}});var m=r(h,2);$(m,{children:(e,v)=>{n();var a=Y(),f=r(g(a));o(f,{m:"p"});var _=r(f,2);o(_,{m:"p^2"});var l=r(_,2);o(l,{m:"2p"});var P=r(l,2);o(P,{m:"p"});var u=r(P,2);o(u,{m:"p^2"});var k=r(u,2);o(k,{m:"p^2/p = p"}),n(),t(e,a)}});var i=r(m,2);$(i,{children:(e,v)=>{n();var a=Z(),f=r(g(a));o(f,{m:"\\sqrt{n}"});var _=r(f,2);o(_,{m:"p"});var l=r(_,2);o(l,{m:"\\sqrt{n}"});var P=r(l,2);o(P,{m:"p^2"});var u=r(P,2);o(u,{m:"p^2 > n"}),n(),t(e,a)}});var s=r(i,2);$(s,{children:(e,v)=>{n();var a=b("С учётом всех оптимизаций, получаем код");t(e,a)}}),t(p,d)}});var D=r(A,2);J(D,{code:`input const int n
array[bool] is_prime[n+1] = [true, true, ..., true]

for int i = 2; i * i <= n; i++:
    if is_prime[i]:
        for int j = i * i; j <= n; j += i:
            is_prime[j] = false`});var E=r(D,2);j(E,{children:(p,x)=>{var d=er(),h=g(d);$(h,{children:(a,f)=>{n();var _=or(),l=r(g(_));y(l,{c:"is_prime"}),n(),t(a,_)}});var m=r(h,2);$(m,{children:(a,f)=>{n();var _=nr(),l=r(g(_));o(l,{m:"p"});var P=r(l,2);o(P,{m:"2"});var u=r(P,2);o(u,{m:"\\sqrt{n}"});var k=r(u,2);o(k,{m:"\\lfloor n / p \\rfloor - (p-1)"});var q=r(k,2);o(q,{m:"1"});var M=r(q,2);o(M,{m:"n"});var I=r(M,2);o(I,{m:"p"});var Q=r(I,2);o(Q,{m:"\\lfloor n/p \\rfloor"}),n(),t(a,_)}});var i=r(m,2);o(i,{display:!0,m:`\\sum_{\\substack{p ~\\text{простое} \\\\ p \\le \\sqrt{n}}} \\Biggl( \\left\\lfloor \\frac{n}{p} \\right\\rfloor - p + 1 \\Biggr)
          = n \\ln \\ln n + (M - \\ln 2) \\cdot n - \\frac{n}{\\ln n} + O \\left( \\frac{n}{\\ln^2 n} \\right)`});var s=r(i,2);$(s,{children:(a,f)=>{n();var _=ar(),l=r(g(_));o(l,{m:"M \\approx 0.261\\,497"}),n(),t(a,_)}});var e=r(s,2);$(e,{children:(a,f)=>{n();var _=b("При этом в не оптимизированном алгоритме количество установок равно");t(a,_)}});var v=r(e,2);o(v,{display:!0,m:`\\sum_{\\substack{p ~\\text{простое} \\\\ p \\le n}} \\Biggl( \\left\\lfloor \\frac{n}{p} \\right\\rfloor - 1 \\Biggr)
          = n \\ln \\ln n + M n + O \\left( \\frac{n}{\\ln^2 n} \\right)`}),t(p,d)}});var F=r(E,2);K(F,{children:(p,x)=>{n();var d=b("Линейное решето Эратосфена");t(p,d)}});var G=r(F,2);j(G,{children:(p,x)=>{var d=dr(),h=g(d);$(h,{children:(i,s)=>{n();var e=b(`Основная проблема решета Эратосфена в том, что мы неизбежно помечаем некоторые числа как составные несколько раз.
    Мы помечаем число как составное столько раз, сколько у него различных простых делителей.`);t(i,e)}});var m=r(h,2);$(m,{children:(i,s)=>{n();var e=tr(),v=r(g(e));o(v,{m:"d(k) \\defeq \\min_{p ~\\text{простое}} \\{ p \\divides k\\}"});var a=r(v,2);o(a,{m:"k"});var f=r(a,2);o(f,{m:"k"});var _=r(f,2);o(_,{m:"k = d(k) \\cdot r"});var l=r(_,2);o(l,{m:"r"});var P=r(l,2);o(P,{m:"d(k)"}),n(),t(i,e)}}),t(p,d)}});var N=r(G,2);j(N,{children:(p,x)=>{var d=vr(),h=g(d);$(h,{children:(i,s)=>{n();var e=_r(),v=r(g(e));o(v,{m:"k"});var a=r(v,2);o(a,{m:"d(k)"});var f=r(a,2);y(f,{c:"d"}),n(),t(i,e)}});var m=r(h,2);$(m,{}),t(p,d)}}),t(L,B)}export{qr as component};
