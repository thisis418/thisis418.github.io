import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as _,a as t,b as e,s as r,n as o,t as g}from"../chunks/BWp35gWV.js";import{I as vr}from"../chunks/Cv_jjTLk.js";import{P as v}from"../chunks/B7flgP-x.js";import{T as hr}from"../chunks/CR7k0xtG.js";import{M as l}from"../chunks/BqyEoRxA.js";import{S as dr}from"../chunks/CBbFRhrb.js";import{C as j}from"../chunks/BvAJckrt.js";import{C as M}from"../chunks/BmgYHZay.js";import{E as sr}from"../chunks/BJkbutPt.js";import{L as S}from"../chunks/NE91WFFs.js";import{P as C}from"../chunks/DPzc5wQr.js";import{P as fr}from"../chunks/BBkyo9uE.js";import{H as gr}from"../chunks/DXKx2xvL.js";import{E as cr}from"../chunks/CYdjygJj.js";import{E as pr}from"../chunks/C5ZJ-BW2.js";const $r=""+new URL("../assets/skip-list.Dsdec6ik.svg",import.meta.url).href,ur=""+new URL("../assets/skip-list-insertion.Bd-NDEGq.svg",import.meta.url).href;var Pr=_(`Список с пропусками (skip list) &mdash; вероятностная структура данных,
    построенная на основе связного списка. Позволяет добавлять, удалять и
    искать элементы за время <!>.`,1),br=_(`Элемент появляется в слое выше с фиксированной вероятностью <!>.
    В среднем каждый элемент появляется в <!> слоях,
    а ожидаемое общее количество слоев равно <!>.`,1),xr=_("<!> <!>",1),Hr=_("Докажем, что ожидаемое количество уровней в списке с пропусками равно <!>.",1),kr=_(`Пусть случайная величина <!> &mdash; высота <!>-го элемента,
    и <!> &mdash; максимальная высота элементов aka высота списка.`,1),yr=_("<!> <!>",1),Lr=_("Вероятность того, что высота элемента <!> будет превышать <!> равна",1),wr=_("Тогда можно оценить <!> и <!> при фиксированном <!>:",1),Er=_("<!> <!> <!> <!> <!> <!> <!>",1),Tr=_(`Разобьём формулу вычисления математического ожидания на две суммы:
    первая от <!> до <!> и вторая от <!> до <!>.`,1),Br=_(`Со второй посложнее.
    Если <!>,
    то <!>.
    Также используем то, что при <!> выражение <!>.`,1),Cr=_("<!> <!> <!> <!> <!> <!> <!>",1),Ir=_(`Теперь оценим снизу.
    Выберем константу <!> и будем все считать от неё.`,1),Sr=_(`Начнём с того, что <!>.
    Используем следующий факт: при <!> выражение <!>.
    Теперь можно посчитать вероятности`,1),jr=_("<!> <!> <!> <!> <!> <!>",1),Dr=_("<!> <!> <!> <!>",1),Mr=_("<!> <!> <!> <!> <!>",1),Rr=_(`Первому, низшему уровню соответствует индекс <!>. Длина
    массива у узла соответствует тому, на сколько элемент простирается
    вверх. Наибольшее количество ссылок у первого узла, оно же
    свидетельствует о максимальной высоте списка.`,1),Ur=_("Все узлы списка с пропусками можно обернуть в один тип <!>, хранящий первый узел.",1),qr=_("Нужно найти первый элемент, значение которого не меньше данного <!>.",1),Gr=_("Переместимся на уровень ниже и перейдем к шагу <!>.",1),Nr=_("<!> <!> <!>",1),Or=_(`Во время поиска мы на каждом уровне нашли узел, который не
    превосходит <!>. Эту информацию можно запомнить и
    использовать в дальнейшем.`,1),zr=_(`Для вставки элемента в список с пропусками нужно вставить его в
    нужное место в нижнем списке, а затем с вероятностью <!> проталкивать вверх, создавая новые связи. Каждый слой должен
    оставаться упорядоченным, поэтому сначала нужно найти место вставки.`,1),Ar=_(`Пока роляет вероятность <!> проталкивать элемент вверх,
создавая новые ссылки.`,1),Fr=_("<!> <!> <!>",1),Jr=_(`<b>Самоорганизующийся список с пропусками.</b> Вероятность <!> пропихнуть элемент наверх фиксирована и никогда не меняется.
    Получается, что структура списка не зависит от частот элементов.`,1),Kr=_("<!> <!> <!>",1),Qr=_(`Мы знаем, что в списке с пропусками средняя высота равна <!>.
    Насколько вероятны значительные отклонения?
    Оцените хвост распределения.
    Получите верхнюю оценку вероятности того,
    что относительное отклонение будет превышать константу <!>.`,1),Vr=_("<!> <!>",1),Wr=_("<!> <!>",1),Xr=_("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function go(ir){var R=Xr(),U=t(R);hr(U,{title:"Список с пропусками"});var q=r(U,2);v(q,{children:(a,H)=>{o();var n=Pr(),p=r(t(n));l(p,{m:"O(\\log n)"}),o(),e(a,n)}});var G=r(q,2);vr(G,{get src(){return $r}});var N=r(G,2);C(N,{children:(a,H)=>{var n=xr(),p=t(n);v(p,{children:(L,c)=>{o();var k=g(`Список с пропусками состоит из слоев. Нижний слой — обычный
    упорядоченный связный список. Каждый более высокий уровень действует
    как экспресс-полоса для списков ниже.`);e(L,k)}});var T=r(p,2);v(T,{children:(L,c)=>{o();var k=br(),d=r(t(k));l(d,{m:"p"});var b=r(d,2);l(b,{m:"1/(1-p)"});var i=r(b,2);l(i,{m:"\\log_{1/p} n + \\Theta(1)"}),o(),e(L,k)}}),e(a,n)}});var O=r(N,2);fr(O,{children:(a,H)=>{var n=Mr(),p=t(n);C(p,{children:(d,b)=>{var i=yr(),f=t(i);v(f,{children:(m,$)=>{o();var s=Hr(),u=r(t(s));l(u,{m:"\\log_{1/p} n + \\Theta(1)"}),o(),e(m,s)}});var x=r(f,2);v(x,{children:(m,$)=>{o();var s=kr(),u=r(t(s));l(u,{m:"L(k)"});var y=r(u,2);l(y,{m:"k"});var P=r(y,2);l(P,{m:"H = \\max \\{ L(1), L(2), \\dotsc, L(n)\\}"}),o(),e(m,s)}}),e(d,i)}});var T=r(p,2);C(T,{children:(d,b)=>{var i=Er(),f=t(i);v(f,{children:(P,w)=>{o();var h=Lr(),E=r(t(h));l(E,{m:"k"});var B=r(E,2);l(B,{m:"h"}),o(),e(P,h)}});var x=r(f,2);l(x,{display:!0,m:"\\prob \\bigl( L(k) > h \\bigr) = \\sum_{j=h+1}^\\oo (1-p) \\cdot p^{j-1} = p^h"});var m=r(x,2);v(m,{children:(P,w)=>{o();var h=wr(),E=r(t(h));l(E,{m:"\\prob (H > h)"});var B=r(E,2);l(B,{m:"\\prob(H \\le h)"});var I=r(B,2);l(I,{m:"h"}),o(),e(P,h)}});var $=r(m,2);l($,{display:!0,m:"\\prob (H \\le h) = \\prob \\left( \\bigsect_{k=1}^n \\bigl\\{ L(k) \\le h \\bigr\\} \\right) = \\prod_{k=1}^n \\prob \\bigl( L(k) \\le h \\bigr) = \\bigl( 1 - p^h \\bigr)^n"});var s=r($,2);l(s,{display:!0,m:"\\prob (H > h) = 1 - \\prob (H \\le h) = 1 - \\bigl( 1 - p^h \\bigr)^n"});var u=r(s,2);v(u,{children:(P,w)=>{o();var h=g("Интересующее нас математическое ожидание равно");e(P,h)}});var y=r(u,2);l(y,{display:!0,m:"\\expect H = \\sum_{h=0}^\\oo \\prob (H > h)"}),e(d,i)}});var L=r(T,2);C(L,{children:(d,b)=>{var i=Cr(),f=t(i);v(f,{children:(P,w)=>{o();var h=Tr(),E=r(t(h));l(E,{m:"0"});var B=r(E,2);l(B,{m:"\\lfloor \\log_{1/p} n \\rfloor"});var I=r(B,2);l(I,{m:"\\lfloor \\log_{1/p} n \\rfloor + 1"});var D=r(I,2);l(D,{m:"\\oo"}),o(),e(P,h)}});var x=r(f,2);v(x,{children:(P,w)=>{o();var h=g("Первая сумма легко оценивается сверху");e(P,h)}});var m=r(x,2);l(m,{display:!0,m:"\\sum_{h=0}^{\\lfloor \\log_{1/p} n \\rfloor} \\prob(H > h) \\le \\sum_{h=0}^{\\lfloor \\log_{1/p} n \\rfloor} 1 = \\lfloor \\log_{1/p} n \\rfloor + 1"});var $=r(m,2);v($,{children:(P,w)=>{o();var h=Br(),E=r(t(h));l(E,{m:"h \\ge \\lfloor \\log_{1/p} n \\rfloor + 1"});var B=r(E,2);l(B,{m:"p^h \\le p^{\\lfloor \\log_{1/p} n \\rfloor + 1} < 1/n"});var I=r(B,2);l(I,{m:"0 \\le x \\le 1"});var D=r(I,2);l(D,{m:"1 - (1 - x)^n \\le nx"}),o(),e(P,h)}});var s=r($,2);l(s,{display:!0,m:`\\sum_{h = \\lfloor \\log_{1/p} n \\rfloor + 1}^\\oo \\prob(H > h)
          = \\sum_{h = \\lfloor \\log_{1/p} n \\rfloor + 1}^\\oo \\Bigl( 1 - \\bigl( 1 - p^h \\bigr)^n \\Bigr)
          \\le \\sum_{h = \\lfloor \\log_{1/p} n \\rfloor + 1}^\\oo n p^h
          = \\frac{n p^{\\lfloor \\log_{1/p} n \\rfloor + 1}}{1-p}
          < \\frac{n / n}{1-p} = \\frac{1}{1-p} `});var u=r(s,2);v(u,{children:(P,w)=>{o();var h=g("Получили оценку сверху");e(P,h)}});var y=r(u,2);l(y,{display:!0,m:"\\expect H < \\lfloor \\log_{1/p} n \\rfloor + 1 + \\frac{1}{1-p}"}),e(d,i)}});var c=r(L,2);C(c,{children:(d,b)=>{var i=jr(),f=t(i);v(f,{children:(y,P)=>{o();var w=Ir(),h=r(t(w));l(h,{m:"\\lfloor \\log_{1/p} n \\rfloor - 2"}),o(),e(y,w)}});var x=r(f,2);v(x,{children:(y,P)=>{o();var w=Sr(),h=r(t(w));l(h,{m:"p^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\ge p^{\\log_{1/p} n - 2} = 1 / np^2"});var E=r(h,2);l(E,{m:"x \\ge 0"});var B=r(E,2);l(B,{m:"(1-x)^n \\le e^{-nx}"}),o(),e(y,w)}});var m=r(x,2);l(m,{display:!0,m:`\\prob \\bigl( H \\le \\lfloor \\log_{1/p} n \\rfloor - 2 \\bigr)
          = \\bigl( 1 - p^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\bigr)^n
          \\le \\exp \\Bigl( -np^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\Bigr)
          \\le e^{-n/np^2} = e^{-1/p^2}`});var $=r(m,2);l($,{display:!0,m:`\\prob \\bigl( H \\ge \\lfloor \\log_{1/p} n \\rfloor - 2 \\bigr)
          \\ge 1 - \\prob \\bigl( H \\le \\lfloor \\log_{1/p} n \\rfloor - 2 \\bigr)
          = 1 - e^{-1/p^2}`});var s=r($,2);v(s,{children:(y,P)=>{o();var w=g("Теперь можно подставить в формулу математического ожидания");e(y,w)}});var u=r(s,2);l(u,{display:!0,m:`\\expect H \\ge \\sum_{h=0}^{\\lfloor \\log_{1/p} n \\rfloor - 2} \\prob (H > h)
      \\ge \\bigl( \\lfloor \\log_{1/p} n \\rfloor - 1 \\bigr) \\cdot \\bigl( 1 - e^{-1/p^2} \\bigr)`}),e(d,i)}});var k=r(c,2);C(k,{children:(d,b)=>{var i=Dr(),f=t(i);v(f,{children:(s,u)=>{o();var y=g("В итоге мы получили, что");e(s,y)}});var x=r(f,2);l(x,{display:!0,m:"\\bigl( \\lfloor \\log_{1/p} n \\rfloor - 1 \\bigr) \\cdot \\bigl( 1 - e^{-1/p^2} \\bigr) \\le \\expect H \\le \\lfloor \\log_{1/p} n \\rfloor + 1 + \\frac{p}{1-p}"});var m=r(x,2);v(m,{children:(s,u)=>{o();var y=g("или, в асимптотическом виде,");e(s,y)}});var $=r(m,2);l($,{display:!0,m:"\\expect H = \\log_{1/p} n + \\Theta(1)"}),e(d,i)}}),e(a,n)}});var z=r(O,2);v(z,{children:(a,H)=>{o();var n=g(`Список с пропусками состоит из узлов. У каждого узла есть значение и
    массив ссылок на следующие узлы. Ссылки распределены по уровням.`);e(a,n)}});var A=r(z,2);v(A,{children:(a,H)=>{o();var n=Rr(),p=r(t(n));l(p,{m:"0"}),o(),e(a,n)}});var F=r(A,2);j(F,{code:`struct node:
    array[node*] next
    value`});var J=r(F,2);v(J,{children:(a,H)=>{o();var n=Ur(),p=r(t(n));M(p,{c:"skiplist"}),o(),e(a,n)}});var K=r(J,2);j(K,{code:`type skiplist:
    node head

    constructor(self):
        self.head = none`});var Q=r(K,2);dr(Q,{children:(a,H)=>{o();var n=g("Поиск");e(a,n)}});var V=r(Q,2);v(V,{children:(a,H)=>{o();var n=qr(),p=r(t(n));M(p,{c:"value"}),o(),e(a,n)}});var W=r(V,2);v(W,{children:(a,H)=>{o();var n=g("Алгоритм поиска элемента.");e(a,n)}});var X=r(W,2);sr(X,{wide:!0,children:(a,H)=>{var n=Nr(),p=t(n);S(p,{children:(c,k)=>{o();var d=g("Начинаем поиск с первого элемента верхнего уровня.");e(c,d)}});var T=r(p,2);S(T,{children:(c,k)=>{o();var d=g(`Переходим к следующему элементу, пока значение следующего элемента
меньше искомого.`);e(c,d)}});var L=r(T,2);S(L,{children:(c,k)=>{o();var d=Gr(),b=r(t(d));l(b,{m:"2"}),o(),e(c,d)}}),e(a,n)}});var Y=r(X,2);j(Y,{code:`method find(skiplist self, value):
    current = self.first
    height = length of current.next

    for level = height, level >= 0, level--:
        while level < length of current.next and current.next[level].value < value:
            current = current.next[level]

    return current.next[0]`});var Z=r(Y,2);v(Z,{children:(a,H)=>{o();var n=Or(),p=r(t(n));M(p,{c:"value"}),o(),e(a,n)}});var rr=r(Z,2);j(rr,{code:`method find_path(skiplist self, value):
    current = self.first
    height = length of current.next
    array path[height] = [none, ..., none]

    for level = height, level >= 0, level--:
        while level < length of current.next and current.next[level].value < value:
            current = current.next[level]
        
        path[level] = current

    return path`});var or=r(rr,2);dr(or,{children:(a,H)=>{o();var n=g("Вставка");e(a,n)}});var er=r(or,2);v(er,{children:(a,H)=>{o();var n=zr(),p=r(t(n));l(p,{m:"p"}),o(),e(a,n)}});var lr=r(er,2);v(lr,{children:(a,H)=>{o();var n=g("Алгоритм вставки элемента.");e(a,n)}});var nr=r(lr,2);sr(nr,{wide:!0,children:(a,H)=>{var n=Fr(),p=t(n);S(p,{children:(c,k)=>{o();var d=g(`На каждом уровне найти элемент, который не превосходит вставляемое
значение.`);e(c,d)}});var T=r(p,2);S(T,{children:(c,k)=>{o();var d=g("Вставить элемент на последний уровень на найденную позицию.");e(c,d)}});var L=r(T,2);S(L,{children:(c,k)=>{o();var d=Ar(),b=r(t(d));l(b,{m:"p"}),o(),e(c,d)}}),e(a,n)}});var ar=r(nr,2);vr(ar,{get src(){return ur}});var tr=r(ar,2);j(tr,{code:`
method insert(skiplist self, value):
    path = self.find_path(value)
    level = 0

    while level == 0 or random(true, false):
        if level >= length of self.head.next:
            self.head.next.append(none)
        if level >= length of path:
            path.append(self.head)
        what.next.append(none)
        path[level].next[level], what.next[level] = what, path[level].next[level]`});var _r=r(tr,2);gr(_r,{children:(a,H)=>{o();var n=g("Упражнения");e(a,n)}});var mr=r(_r,2);cr(mr,{children:(a,H)=>{var n=Wr(),p=t(n);pr(p,{number:1,children:(L,c)=>{C(L,{children:(k,d)=>{var b=Kr(),i=t(b);v(i,{children:(m,$)=>{var s=Jr(),u=r(t(s),2);l(u,{m:"p"}),o(),e(m,s)}});var f=r(i,2);v(f,{children:(m,$)=>{o();var s=g(`Если некоторые элементы запрашиваются чаще других, было бы эффективнее иметь их на более высоких уровнях.
    Разработайте стратегию пропихивания вверх частых элементов.
    Подумайте, можно ли обойтись без дополнительной памяти.`);e(m,s)}});var x=r(f,2);v(x,{children:(m,$)=>{o();var s=g(`Как избежать постоянного роста высоты?
    Нужно ли вводить пропихивание вниз для редких элементов?`);e(m,s)}}),e(k,b)}})}});var T=r(p,2);pr(T,{number:2,children:(L,c)=>{C(L,{children:(k,d)=>{var b=Vr(),i=t(b);v(i,{children:(x,m)=>{o();var $=Qr(),s=r(t($));l(s,{m:"\\expect H = \\log_{1/p} n + \\Theta(1)"});var u=r(s,2);l(u,{m:"\\epsilon > 0"}),o(),e(x,$)}});var f=r(i,2);l(f,{display:!0,m:"\\prob \\bigl( H > (1+\\epsilon) \\cdot \\log_{1/p} n \\bigr)"}),e(k,b)}})}}),e(a,n)}}),e(ir,R)}export{go as component};
