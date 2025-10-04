import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{m as _,n as t,o as e,p as r,q as o,r as c}from"../chunks/BEXab77u.js";import{I as tr}from"../chunks/C53nBpOw.js";import{P as d}from"../chunks/C_D4TOu8.js";import{T as sr}from"../chunks/CMyx6b9d.js";import{M as l}from"../chunks/BTDwyb5B.js";import{S as _r}from"../chunks/Dck_Hiah.js";import{C as j}from"../chunks/BrnW0Io5.js";import{C as D}from"../chunks/DPRrKhiz.js";import{E as vr}from"../chunks/RGDVPBE4.js";import{L as S}from"../chunks/T-LY4wMq.js";import{P as E}from"../chunks/M3lTRSDe.js";import{P as ir}from"../chunks/DhmHaxb7.js";const fr=""+new URL("../assets/skip-list.Dsdec6ik.svg",import.meta.url).href,hr=""+new URL("../assets/skip-list-insertion.Bd-NDEGq.svg",import.meta.url).href;var mr=_(`Список с пропусками (skip list) &mdash; вероятностная структура данных,
    построенная на основе связного списка. Позволяет добавлять, удалять и
    искать элементы за время <!>.`,1),gr=_(`Элемент появляется в слое выше с фиксированной вероятностью <!>.
    В среднем каждый элемент появляется в <!> слоях,
    а ожидаемое общее количество слоев равно <!>.`,1),cr=_("<!> <!>",1),$r=_("Докажем, что ожидаемое количество уровней в списке с пропусками равно <!>.",1),ur=_(`Пусть случайная величина <!> &mdash; высота <!>-го элемента,
    и <!> &mdash; максимальная высота элементов aka высота списка.`,1),xr=_("<!> <!>",1),br=_("Вероятность того, что высота элемента <!> будет превышать <!> равна",1),Pr=_("Тогда можно оценить <!> и <!> при фиксированном <!>:",1),kr=_("<!> <!> <!> <!> <!> <!> <!>",1),Hr=_(`Разобьём формулу вычисления математического ожидания на две суммы:
    первая от <!> до <!> и вторая от <!> до <!>.`,1),yr=_(`Со второй посложнее.
    Если <!>,
    то <!>.
    Также используем то, что при <!> выражение <!>.`,1),Lr=_("<!> <!> <!> <!> <!> <!> <!>",1),wr=_(`Теперь оценим снизу.
    Выберем константу <!> и будем все считать от неё.`,1),Br=_(`Начнём с того, что <!>.
    Используем следующий факт: при <!> выражение <!>.
    Теперь можно посчитать вероятности`,1),Tr=_("<!> <!> <!> <!> <!> <!>",1),Cr=_("<!> <!> <!> <!>",1),Ir=_("<!> <!> <!> <!> <!>",1),Sr=_(`Первому, низшему уровню соответствует индекс <!>. Длина
    массива у узла соответствует тому, на сколько элемент простирается
    вверх. Наибольшее количество ссылок у первого узла, оно же
    свидетельствует о максимальной высоте списка.`,1),Er=_("Все узлы списка с пропусками можно обернуть в один тип <!>, хранящий первый узел.",1),jr=_("Нужно найти первый элемент, значение которого не меньше данного <!>.",1),qr=_("Переместимся на уровень ниже и перейдем к шагу <!>.",1),Dr=_("<!> <!> <!>",1),Mr=_(`Во время поиска мы на каждом уровне нашли узел, который не
    превосходит <!>. Эту информацию можно запомнить и
    использовать в дальнейшем.`,1),Rr=_(`Для вставки элемента в список с пропусками нужно вставить его в
    нужное место в нижнем списке, а затем с вероятностью <!> проталкивать вверх, создавая новые связи. Каждый слой должен
    оставаться упорядоченным, поэтому сначала нужно найти место вставки.`,1),Ur=_(`Пока роляет вероятность <!> проталкивать элемент вверх,
создавая новые ссылки.`,1),Gr=_("<!> <!> <!>",1),Nr=_("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function eo(dr){var M=Nr(),R=t(M);sr(R,{title:"Список с пропусками"});var U=r(R,2);d(U,{children:(a,u)=>{o();var n=mr(),p=r(t(n));l(p,{m:"O(\\log n)"}),o(),e(a,n)}});var G=r(U,2);tr(G,{get src(){return fr}});var N=r(G,2);E(N,{children:(a,u)=>{var n=cr(),p=t(n);d(p,{children:(C,h)=>{o();var y=c(`Список с пропусками состоит из слоев. Нижний слой — обычный
    упорядоченный связный список. Каждый более высокий уровень действует
    как экспресс-полоса для списков ниже.`);e(C,y)}});var T=r(p,2);d(T,{children:(C,h)=>{o();var y=gr(),v=r(t(y));l(v,{m:"p"});var B=r(v,2);l(B,{m:"1/(1-p)"});var m=r(B,2);l(m,{m:"\\log_{1/p} n + \\Theta(1)"}),o(),e(C,y)}}),e(a,n)}});var O=r(N,2);ir(O,{children:(a,u)=>{var n=Ir(),p=t(n);E(p,{children:(v,B)=>{var m=xr(),x=t(m);d(x,{children:($,L)=>{o();var i=$r(),b=r(t(i));l(b,{m:"\\log_{1/p} n + \\Theta(1)"}),o(),e($,i)}});var H=r(x,2);d(H,{children:($,L)=>{o();var i=ur(),b=r(t(i));l(b,{m:"L(k)"});var g=r(b,2);l(g,{m:"k"});var f=r(g,2);l(f,{m:"H = \\max \\{ L(1), L(2), \\dotsc, L(n)\\}"}),o(),e($,i)}}),e(v,m)}});var T=r(p,2);E(T,{children:(v,B)=>{var m=kr(),x=t(m);d(x,{children:(f,P)=>{o();var s=br(),k=r(t(s));l(k,{m:"k"});var w=r(k,2);l(w,{m:"h"}),o(),e(f,s)}});var H=r(x,2);l(H,{display:!0,m:"\\prob \\bigl( L(k) > h \\bigr) = \\sum_{j=h+1}^\\oo (1-p) \\cdot p^{j-1} = p^h"});var $=r(H,2);d($,{children:(f,P)=>{o();var s=Pr(),k=r(t(s));l(k,{m:"\\prob (H > h)"});var w=r(k,2);l(w,{m:"\\prob(H \\le h)"});var I=r(w,2);l(I,{m:"h"}),o(),e(f,s)}});var L=r($,2);l(L,{display:!0,m:"\\prob (H \\le h) = \\prob \\left( \\bigsect_{k=1}^n \\bigl\\{ L(k) \\le h \\bigr\\} \\right) = \\prod_{k=1}^n \\prob \\bigl( L(k) \\le h \\bigr) = \\bigl( 1 - p^h \\bigr)^n"});var i=r(L,2);l(i,{display:!0,m:"\\prob (H > h) = 1 - \\prob (H \\le h) = 1 - \\bigl( 1 - p^h \\bigr)^n"});var b=r(i,2);d(b,{children:(f,P)=>{o();var s=c("Интересующее нас математическое ожидание равно");e(f,s)}});var g=r(b,2);l(g,{display:!0,m:"\\expect H = \\sum_{h=0}^\\oo \\prob (H > h)"}),e(v,m)}});var C=r(T,2);E(C,{children:(v,B)=>{var m=Lr(),x=t(m);d(x,{children:(f,P)=>{o();var s=Hr(),k=r(t(s));l(k,{m:"0"});var w=r(k,2);l(w,{m:"\\lfloor \\log_{1/p} n \\rfloor"});var I=r(w,2);l(I,{m:"\\lfloor \\log_{1/p} n \\rfloor + 1"});var q=r(I,2);l(q,{m:"\\oo"}),o(),e(f,s)}});var H=r(x,2);d(H,{children:(f,P)=>{o();var s=c("Первая сумма легко оценивается сверху");e(f,s)}});var $=r(H,2);l($,{display:!0,m:"\\sum_{h=0}^{\\lfloor \\log_{1/p} n \\rfloor} \\prob(H > h) \\le \\sum_{h=0}^{\\lfloor \\log_{1/p} n \\rfloor} 1 = \\lfloor \\log_{1/p} n \\rfloor + 1"});var L=r($,2);d(L,{children:(f,P)=>{o();var s=yr(),k=r(t(s));l(k,{m:"h \\ge \\lfloor \\log_{1/p} n \\rfloor + 1"});var w=r(k,2);l(w,{m:"p^h \\le p^{\\lfloor \\log_{1/p} n \\rfloor + 1} < 1/n"});var I=r(w,2);l(I,{m:"0 \\le x \\le 1"});var q=r(I,2);l(q,{m:"1 - (1 - x)^n \\le nx"}),o(),e(f,s)}});var i=r(L,2);l(i,{display:!0,m:`\\sum_{h = \\lfloor \\log_{1/p} n \\rfloor + 1}^\\oo \\prob(H > h)
          = \\sum_{h = \\lfloor \\log_{1/p} n \\rfloor + 1}^\\oo \\Bigl( 1 - \\bigl( 1 - p^h \\bigr)^n \\Bigr)
          \\le \\sum_{h = \\lfloor \\log_{1/p} n \\rfloor + 1}^\\oo n p^h
          = \\frac{n p^{\\lfloor \\log_{1/p} n \\rfloor + 1}}{1-p}
          < \\frac{n / n}{1-p} = \\frac{1}{1-p} `});var b=r(i,2);d(b,{children:(f,P)=>{o();var s=c("Получили оценку сверху");e(f,s)}});var g=r(b,2);l(g,{display:!0,m:"\\expect H < \\lfloor \\log_{1/p} n \\rfloor + 1 + \\frac{1}{1-p}"}),e(v,m)}});var h=r(C,2);E(h,{children:(v,B)=>{var m=Tr(),x=t(m);d(x,{children:(g,f)=>{o();var P=wr(),s=r(t(P));l(s,{m:"\\lfloor \\log_{1/p} n \\rfloor - 2"}),o(),e(g,P)}});var H=r(x,2);d(H,{children:(g,f)=>{o();var P=Br(),s=r(t(P));l(s,{m:"p^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\ge p^{\\log_{1/p} n - 2} = 1 / np^2"});var k=r(s,2);l(k,{m:"x \\ge 0"});var w=r(k,2);l(w,{m:"(1-x)^n \\le e^{-nx}"}),o(),e(g,P)}});var $=r(H,2);l($,{display:!0,m:`\\prob \\bigl( H \\le \\lfloor \\log_{1/p} n \\rfloor - 2 \\bigr)
          = \\bigl( 1 - p^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\bigr)^n
          \\le \\exp \\Bigl( -np^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\Bigr)
          \\le e^{-n/np^2} = e^{-1/p^2}`});var L=r($,2);l(L,{display:!0,m:`\\prob \\bigl( H \\ge \\lfloor \\log_{1/p} n \\rfloor - 2 \\bigr)
          \\ge 1 - \\prob \\bigl( H \\le \\lfloor \\log_{1/p} n \\rfloor - 2 \\bigr)
          = 1 - e^{-1/p^2}`});var i=r(L,2);d(i,{children:(g,f)=>{o();var P=c("Теперь можно подставить в формулу математического ожидания");e(g,P)}});var b=r(i,2);l(b,{display:!0,m:`\\expect H \\ge \\sum_{h=0}^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\prob (H > h)
      \\ge \\bigl( \\lfloor \\log_{1/p} n \\rfloor - 1 \\bigr) \\cdot \\bigl( 1 - e^{-1/p^2} \\bigr)`}),e(v,m)}});var y=r(h,2);E(y,{children:(v,B)=>{var m=Cr(),x=t(m);d(x,{children:(i,b)=>{o();var g=c("В итоге мы получили, что");e(i,g)}});var H=r(x,2);l(H,{display:!0,m:"\\bigl( \\lfloor \\log_{1/p} n \\rfloor - 1 \\bigr) \\cdot \\bigl( 1 - e^{-1/p^2} \\bigr) \\le \\expect H \\le \\lfloor \\log_{1/p} n \\rfloor + 1 + \\frac{p}{1-p}"});var $=r(H,2);d($,{children:(i,b)=>{o();var g=c("или, в асимптотическом виде,");e(i,g)}});var L=r($,2);l(L,{display:!0,m:"\\expect H = \\log_{1/p} n + \\Theta(1)"}),e(v,m)}}),e(a,n)}});var z=r(O,2);d(z,{children:(a,u)=>{o();var n=c(`Список с пропусками состоит из узлов. У каждого узла есть значение и
    массив ссылок на следующие узлы. Ссылки распределены по уровням.`);e(a,n)}});var A=r(z,2);d(A,{children:(a,u)=>{o();var n=Sr(),p=r(t(n));l(p,{m:"0"}),o(),e(a,n)}});var F=r(A,2);j(F,{code:`struct node:
    array[node*] next
    value`});var J=r(F,2);d(J,{children:(a,u)=>{o();var n=Er(),p=r(t(n));D(p,{c:"skiplist"}),o(),e(a,n)}});var K=r(J,2);j(K,{code:`type skiplist:
    node head

    constructor(self):
        self.head = none`});var Q=r(K,2);_r(Q,{children:(a,u)=>{o();var n=c("Поиск");e(a,n)}});var V=r(Q,2);d(V,{children:(a,u)=>{o();var n=jr(),p=r(t(n));D(p,{c:"value"}),o(),e(a,n)}});var W=r(V,2);d(W,{children:(a,u)=>{o();var n=c("Алгоритм поиска элемента.");e(a,n)}});var X=r(W,2);vr(X,{wide:!0,children:(a,u)=>{var n=Dr(),p=t(n);S(p,{children:(h,y)=>{o();var v=c("Начинаем поиск с первого элемента верхнего уровня.");e(h,v)}});var T=r(p,2);S(T,{children:(h,y)=>{o();var v=c(`Переходим к следующему элементу, пока значение следующего элемента
меньше искомого.`);e(h,v)}});var C=r(T,2);S(C,{children:(h,y)=>{o();var v=qr(),B=r(t(v));l(B,{m:"2"}),o(),e(h,v)}}),e(a,n)}});var Y=r(X,2);j(Y,{code:`method find(skiplist self, value):
    current = self.first
    height = length of current.next

    for level = height, level >= 0, level--:
        while level < length of current.next and current.next[level].value < value:
            current = current.next[level]

    return current.next[0]`});var Z=r(Y,2);d(Z,{children:(a,u)=>{o();var n=Mr(),p=r(t(n));D(p,{c:"value"}),o(),e(a,n)}});var rr=r(Z,2);j(rr,{code:`method find_path(skiplist self, value):
    current = self.first
    height = length of current.next
    array path[height] = [none, ..., none]

    for level = height, level >= 0, level--:
        while level < length of current.next and current.next[level].value < value:
            current = current.next[level]
        
        path[level] = current

    return path`});var or=r(rr,2);_r(or,{children:(a,u)=>{o();var n=c("Вставка");e(a,n)}});var er=r(or,2);d(er,{children:(a,u)=>{o();var n=Rr(),p=r(t(n));l(p,{m:"p"}),o(),e(a,n)}});var lr=r(er,2);d(lr,{children:(a,u)=>{o();var n=c("Алгоритм вставки элемента.");e(a,n)}});var nr=r(lr,2);vr(nr,{wide:!0,children:(a,u)=>{var n=Gr(),p=t(n);S(p,{children:(h,y)=>{o();var v=c(`На каждом уровне найти элемент, который не превосходит вставляемое
значение.`);e(h,v)}});var T=r(p,2);S(T,{children:(h,y)=>{o();var v=c("Вставить элемент на последний уровень на найденную позицию.");e(h,v)}});var C=r(T,2);S(C,{children:(h,y)=>{o();var v=Ur(),B=r(t(v));l(B,{m:"p"}),o(),e(h,v)}}),e(a,n)}});var ar=r(nr,2);tr(ar,{get src(){return hr}});var pr=r(ar,2);j(pr,{code:`
method insert(skiplist self, value):
    path = self.find_path(value)
    level = 0

    while level == 0 or random(true, false):
        if level >= length of self.head.next:
            self.head.next.append(none)
        if level >= length of path:
            path.append(self.head)
        what.next.append(none)
        path[level].next[level], what.next[level] = what, path[level].next[level]`}),e(dr,M)}export{eo as component};
