import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as $,a as c,b as d,s as r,n as a,t as f}from"../chunks/BWp35gWV.js";import{T as er}from"../chunks/CR7k0xtG.js";import{P}from"../chunks/DPzc5wQr.js";import{P as i}from"../chunks/B7flgP-x.js";import{M as g}from"../chunks/BqyEoRxA.js";import{D as Y}from"../chunks/DlTIf4aM.js";import{C as m}from"../chunks/BmgYHZay.js";import{H as b}from"../chunks/DXKx2xvL.js";import{F as ar}from"../chunks/LJLd6mQS.js";import{C as u}from"../chunks/BvAJckrt.js";var tr=$(`Пусть нам нужен read-only линейный список, в котором по порядку хранятся натуральные числа
        от <!> до <!>.
        Конечно, хранить почти гигабайт данных в каком-нибудь связном списке или массиве не выгодно.`,1),nr=$(`В этом примере первый элемент <!>.
        Для получения элемента, следующего за текущим, нужно к текущему прибавить <!>.
        Конца списка мы достигнем тогда, когда дойдем до элемента <!>.`,1),dr=$("<!> <!> <!>",1),vr=$(`<b>Итератор</b> (iterator) &mdash; изменяемый объект, хранящий свое состояние и
        функция <!>, которая возвращает или следующий элемент, или <!>,
        если итератор закончится.`,1),sr=$(`<b>Двусторонний</b> итератор (doubly-iterator, next-prev iterator) &mdash;
        изменяемый объект, хранящий свое состояние,
        функция <!>, которая возвращает следующий элемент
        и функция <!>, которая возвращает предыдущий элемент.`,1),_r=$("<!> <!>",1),lr=$("<!> <!> <!>",1),ir=$(`Любой итератор можно сконструировать с помощью обычной функции и инструкции <!>.
        Эта операция &laquo;возвращает&raquo; значение из функции, но выполнение функции не прекращается.
        Функция выполняется до тех пор, пока она не закончится или пока не встретится инструкция <!>.`,1),$r=$("<!> <!>",1),cr=$("Посмотрим на итератор, который возвращает квадраты чисел от <!> до <!>.",1),pr=$(`Обращаю внимание на то, что <!> &mdash; это объект.
        Это не функция, возвращающая итератор.`,1),mr=$(`Итерирование по итератору &mdash; последовательные получения следующего элемента,
        то есть последовательные вызовы функции <!>,
        пока однажды мы не получим <!>.`,1),hr=$("<!> <!>",1),Pr=$("Этот шаблонный код обычно сокращается до привычного всем программистам <!>",1),fr=$("<b>Генератор</b> &mdash; функция, создающая и возвращающая итератор.",1),gr=$("Итак, <b>чистая</b> функция принимает аргументы <!>, создает итератор и возвращает его.",1),ur=$("<!> <!>",1),xr=$("Выражение <!>, определяющее итератор, пишется сразу в определении генератора. Синтаксис следующий",1),br=$("Пусть нам нужно создать итератор, который возвращает все целые числа от <!> до <!>.",1),yr=$(`Получается, что огрызки кода <!> и <!> имеют
        абсолютно одинаковый смысл и могут друг друга заменять без потери функционала.`,1),qr=$(`Важно понимать, что вариант с использованием генератора сильно дольше.
        Там создаются новые локальные переменные, в стек кладется еще одна функция, внутри происходит <!> высокоуровневых вызовов и еще куча другого оверхеда.`,1),Cr=$("<!> <!>",1),wr=$(`В питоне есть только итераторы.
        Питоновская конструкция <!> эквивалентна нашей
        конструкции <!>.`,1),Dr=$("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Ir(Z){var y=Dr(),q=c(y);er(q,{title:"Итераторы"});var C=r(q,2);P(C,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=f("Посмотрим на read-only линейные списки — такие линейные списки, которые нам нужно только читать.");d(o,e)}})}});var w=r(C,2);P(w,{children:(t,p)=>{var o=dr(),_=c(o);i(_,{children:(l,v)=>{a();var s=tr(),h=r(c(s));g(h,{m:"1"});var x=r(h,2);g(x,{m:"10^9"}),a(),d(l,s)}});var e=r(_,2);i(e,{children:(l,v)=>{a();var s=f(`Единственная операция, которую мы хотим совершать — чтение.
        Получается, нам достаточно определить только первый элемент, способ для любого элемента получить следующий
        и какой-то индикатор конца списка.`);d(l,s)}});var n=r(e,2);i(n,{children:(l,v)=>{a();var s=nr(),h=r(c(s));g(h,{m:"1"});var x=r(h,2);g(x,{m:"1"});var or=r(x,2);g(or,{m:"10^9"}),a(),d(l,s)}}),d(t,o)}});var D=r(w,2);P(D,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=f("Read-only линейный список не обязательно должен содержать в себе все свои элементы.");d(o,e)}})}});var F=r(D,2);Y(F,{title:"Итератор",children:(t,p)=>{var o=_r(),_=c(o);i(_,{children:(n,l)=>{var v=vr(),s=r(c(v),2);m(s,{c:"next()"});var h=r(s,2);m(h,{c:"stop"}),a(),d(n,v)}});var e=r(_,2);i(e,{children:(n,l)=>{var v=sr(),s=r(c(v),2);m(s,{c:"next()"});var h=r(s,2);m(h,{c:"previous()"}),a(),d(n,v)}}),d(t,o)}});var H=r(F,2);ar(H,{title:"Итератор и итерируемый объект",children:(t,p)=>{var o=lr(),_=c(o);i(_,{children:(l,v)=>{a();var s=f(`Существует несколько разных и полностью адекватных способов определить всё это.
        Здесь я придерживаюсь классического высокоуровневого определения.`);d(l,s)}});var e=r(_,2);i(e,{children:(l,v)=>{a();var s=f(`Поэтому итератор это итератор, а итерируемый объект (iterable) — любой объект,
        который можно нормально превратить в итератор.`);d(l,s)}});var n=r(e,2);i(n,{children:(l,v)=>{a();var s=f("Например любой массив и любая строка являются итерируемыми объектами, но не итераторами.");d(l,s)}}),d(t,o)}});var M=r(H,2);b(M,{children:(t,p)=>{a();var o=f("Функциональное представление итерируемого");d(t,o)}});var T=r(M,2);P(T,{children:(t,p)=>{var o=$r(),_=c(o);i(_,{children:(n,l)=>{a();var v=ir(),s=r(c(v));m(s,{c:"yield"});var h=r(s,2);m(h,{c:"stop"}),a(),d(n,v)}});var e=r(_,2);i(e,{children:(n,l)=>{a();var v=f(`Фактически, итератор не может возвращать значения, ведь в этом слове подразумевается завершение работы функции.
        В разговорной речи для этого используется термин «йелдить».
        Здесь я все-же буду писать слово «возвращать».`);d(n,v)}}),d(t,o)}});var k=r(T,2);P(k,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=cr(),n=r(c(e));g(n,{m:"1"});var l=r(n,2);g(l,{m:"100"}),a(),d(o,e)}})}});var R=r(k,2);u(R,{code:`int current = 1

function next() -> int:
    if current > 100:
        stop
    else:
        to_return = current ** 2
        current += 1
        return to_return`});var j=r(R,2);P(j,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=f("Этот итератор можно легко записать в функциональной форме");d(o,e)}})}});var z=r(j,2);u(z,{code:`iterator squares:
    int current = 1

    while current <= 100:
        yield current ** 2
        current += 1

    stop`});var A=r(z,2);P(A,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=pr(),n=r(c(e));m(n,{c:"squares"}),a(),d(o,e)}})}});var B=r(A,2);P(B,{children:(t,p)=>{var o=hr(),_=c(o);i(_,{children:(n,l)=>{a();var v=f("Теперь, имея на руках итератор, можно по нему итерироваться.");d(n,v)}});var e=r(_,2);i(e,{children:(n,l)=>{a();var v=mr(),s=r(c(v));m(s,{c:"next()"});var h=r(s,2);m(h,{c:"stop"}),a(),d(n,v)}}),d(t,o)}});var E=r(B,2);u(E,{code:`iterator i

do:
    value = i.next()
    ...
while value != stop`});var G=r(E,2);P(G,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=Pr(),n=r(c(e));m(n,{c:"for"}),d(o,e)}})}});var I=r(G,2);u(I,{code:`iterator i

for each value of i:
    ...`});var J=r(I,2);b(J,{children:(t,p)=>{a();var o=f("Генераторы");d(t,o)}});var K=r(J,2);P(K,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=f("В чистом виде итераторы нужны не так часто, как функции, создающие итераторы.");d(o,e)}})}});var L=r(K,2);Y(L,{title:"Генератор",children:(t,p)=>{i(t,{children:(o,_)=>{var e=fr();a(),d(o,e)}})}});var N=r(L,2);P(N,{children:(t,p)=>{var o=ur(),_=c(o);i(_,{children:(n,l)=>{a();var v=f("Эта конструкция настолько часто встречается, что для нее не жалко определить свой синтаксис.");d(n,v)}});var e=r(_,2);i(e,{children:(n,l)=>{a();var v=gr(),s=r(c(v),3);m(s,{c:"...arguments"}),a(),d(n,v)}}),d(t,o)}});var O=r(N,2);u(O,{code:`function gen(arguments):
    iterator i:
        ...
    return i`});var Q=r(O,2);P(Q,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=xr(),n=r(c(e));m(n,{c:"..."}),a(),d(o,e)}})}});var S=r(Q,2);u(S,{code:`generator gen(arguments):
    ...`});var U=r(S,2);P(U,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=br(),n=r(c(e));g(n,{m:"a"});var l=r(n,2);g(l,{m:"b"}),a(),d(o,e)}})}});var V=r(U,2);u(V,{code:`generator range(int a, int b) -> int:
    int i = a
    while i <= b:
        yield i
        i += 1
    stop`});var W=r(V,2);P(W,{children:(t,p)=>{var o=Cr(),_=c(o);i(_,{children:(n,l)=>{a();var v=yr(),s=r(c(v));m(s,{c:"for i = a; i <= b; i++"});var h=r(s,2);m(h,{c:"for i of range(a, b)"}),a(),d(n,v)}});var e=r(_,2);i(e,{children:(n,l)=>{a();var v=qr(),s=r(c(v));g(s,{m:"b-a+2"}),a(),d(n,v)}}),d(t,o)}});var X=r(W,2);b(X,{children:(t,p)=>{a();var o=f("Итераторы и Python");d(t,o)}});var rr=r(X,2);P(rr,{children:(t,p)=>{i(t,{children:(o,_)=>{a();var e=wr(),n=r(c(e));m(n,{language:"python",c:"for i in iterable"});var l=r(n,2);m(l,{c:"for each i of iterable"}),a(),d(o,e)}})}}),d(Z,y)}export{Ir as component};
