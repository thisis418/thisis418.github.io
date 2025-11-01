import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as l,a as p,b as n,s as r,n as e,t as h}from"../chunks/B1HoO4k0.js";import{T as N}from"../chunks/CcX1cm_-.js";import{P as g}from"../chunks/ClksMsit.js";import{P as v}from"../chunks/B8FEnsbH.js";import{M as _}from"../chunks/e5qaD0UW.js";/* empty css                */import{C as Q}from"../chunks/0Rd6UPhr.js";import{C as y}from"../chunks/DunPP-_K.js";import{H as R}from"../chunks/VyKLllFE.js";import{S as b}from"../chunks/D2QCM4hc.js";/* empty css                *//* empty css                *//* empty css                */import{T as U}from"../chunks/CYEUtE_3.js";import{P as V}from"../chunks/BOV-mclC.js";/* empty css                *//* empty css                *//* empty css                */var W=l(`<b>Свободная позиция</b> в двоичном дереве &mdash; место, куда может быть вставлена новый узел.
    То есть если у какого-то узла нет какого-то ребёнка,
    то место этого несуществующего ребёнка является свободной позицией.`,1),X=l(`В бинарном дереве, содержащем <!> вершин,
    существует свободная позиция на глубине не более <!>.`,1),Y=l(`Если бы каждая свободная позиция была бы на глубине более <!>,
    то мы получили бы полное совершенное бинарное дерево с более чем <!> элементами.`,1),Z=l("<!> <!>",1),rr=l(`Пусть <!> (free distance) &mdash; расстояние от узла <!> до ближайшей свободной позиции в поддереве с корнем в <!>.
    У пустых узлов <!>.
    Теперь наше требование можно переформулировать в более приятной форме:`,1),or=l("<!> <!> <!> <!>",1),tr=l(`Узлы такой левосторонней кучи должны хранить указатели на левого и правого ребёнка,
    а так же значение <!>, для того чтобы не нужно было его пересчитывать каждый раз.`,1),er=l("<!> <!>",1),nr=l(`При вычислении <!> для узла <!> нужно отдельно проверить,
    не является ли этот узел <!>. Для удобства можно завести отдельную функцию,
    которую, кстати, надо инлайнить.`,1),ar=l(`Воспользуемся тем, что куча левосторонняя.
    Правое поддерево &mdash; самое короткое и не длиннее <!>.
    Поэтому пойдём направо и сольем правое поддерево с кучей.`,1),dr=l(`Мы вызываем слияние рекурсивно, при этом каждый рекурсивный вызов у одной из сливаемых куч уменьшается высота.
    Значит, слияние будет работать за время <!>.`,1),sr=l("Более точно, слияние двух куч <!> и <!> с размерами <!> и <!> потребует <!> рекурсивных вызовов.",1),_r=l("<!> <!>",1),ir=l("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function kr(J){var H=ir(),C=p(H);N(C,{title:"Скошенные и левосторонние кучи"});var T=r(C,2);R(T,{children:(t,m)=>{e();var o=h("Левосторонняя куча");n(t,o)}});var w=r(T,2);g(w,{children:(t,m)=>{v(t,{children:(o,i)=>{var a=W();e(),n(o,a)}})}});var M=r(w,2);U(M,{title:"Теорема о минимальной свободной позиции",children:(t,m)=>{v(t,{children:(o,i)=>{e();var a=X(),s=r(p(a));_(s,{m:"n"});var $=r(s,2);_($,{m:"\\lfloor \\log_2 (n+1) \\rfloor"}),e(),n(o,a)}})}});var S=r(M,2);V(S,{children:(t,m)=>{var o=Z(),i=p(o);v(i,{children:(s,$)=>{e();var d=Y(),f=r(p(d));_(f,{m:"\\log_2 n"});var c=r(f,2);_(c,{m:"n"}),e(),n(s,d)}});var a=r(i,2);v(a,{children:(s,$)=>{e();var d=h(`Для получения точной оценки достаточно рассмотреть полное бинарное дерево,
    в котором все свободные позиции находятся наиболее низко.`);n(s,d)}}),n(t,o)}});var k=r(S,2);g(k,{children:(t,m)=>{var o=or(),i=p(o);v(i,{children:(d,f)=>{e();var c=h(`Давайте используем этот факт и сконструируем левостороннее дерево.
    Нам нужно потребовать выполнение следующего условия:
    ближайшая к корню свободная позиция должна быть самой правой позицией в дереве.
    Давайте формализуем и переформулируем в полее приятном виде.`);n(d,c)}});var a=r(i,2);v(a,{children:(d,f)=>{e();var c=rr(),P=r(p(c));_(P,{m:"\\dist v"});var x=r(P,2);_(x,{m:"v"});var u=r(x,2);_(u,{m:"v"});var L=r(u,2);_(L,{m:"\\dist (\\code{\\htmlClass{boolean}{none}}) = 0"}),e(),n(d,c)}});var s=r(a,2);_(s,{display:!0,m:"\\dist ( v.\\code{left} ) \\ge \\dist (v.\\code{right}) \\quad\\text{для всех узлов}~ v"});var $=r(s,2);v($,{children:(d,f)=>{e();var c=h(`Если вдруг для какого-то узла это свойство не выполняется,
    то можно поменять местами указатели на правого и левого детей местами.
    После этого свойство левостороннего дерева для этой вершины будет выполняться.`);n(d,c)}}),n(t,o)}});var q=r(k,2);g(q,{children:(t,m)=>{var o=er(),i=p(o);v(i,{children:(s,$)=>{e();var d=h(`Возьмём левостороннее дерево и потребуем еще дополнительно чтобы для него выполнялось свойство кучи:
    приоритет любого узла больше приоритета его детей.
    Мы превратили левостороннее дерево в левостороннюю кучу.`);n(s,d)}});var a=r(i,2);v(a,{children:(s,$)=>{e();var d=tr(),f=r(p(d));_(f,{m:"\\dist(\\cdot)"}),e(),n(s,d)}}),n(t,o)}});var O=r(q,2);y(O,{code:`
struct node:
    node* left
    node* right
    int dist
`});var j=r(O,2);g(j,{children:(t,m)=>{v(t,{children:(o,i)=>{e();var a=nr(),s=r(p(a));_(s,{m:"\\dist(v)"});var $=r(s,2);_($,{m:"v"});var d=r($,2);Q(d,{c:"none"}),e(),n(o,a)}})}});var z=r(j,2);y(z,{code:`
function get_dist(node x):
    if x is none:
        return 0
    else:
        return x.dist
`});var A=r(z,2);b(A,{children:(t,m)=>{e();var o=h("Слияние левосторонних куч");n(t,o)}});var B=r(A,2);g(B,{children:(t,m)=>{v(t,{children:(o,i)=>{e();var a=ar(),s=r(p(a));_(s,{m:"\\log n"}),e(),n(o,a)}})}});var D=r(B,2);y(D,{code:`
function merge(node* x, node* y):  # x и y являются корнями сливаемых куч
    if x is none:
        return y

    if y is none:
        return x

   if y.priority > x.priority:
       swap x, y

   x.right = merge(x.right, y)

   if get_dist(x.right) > get_dist(x.left):
       swap x.left, x.right

   x.dist = get_dist(x.right) + 1

   return x
`});var E=r(D,2);g(E,{children:(t,m)=>{var o=_r(),i=p(o);v(i,{children:(s,$)=>{e();var d=dr(),f=r(p(d));_(f,{m:"O(\\log n)"}),e(),n(s,d)}});var a=r(i,2);v(a,{children:(s,$)=>{e();var d=sr(),f=r(p(d));_(f,{m:"H_1"});var c=r(f,2);_(c,{m:"H_2"});var P=r(c,2);_(P,{m:"n_1"});var x=r(P,2);_(x,{m:"n_2"});var u=r(x,2);_(u,{m:"\\dist H_1 + \\dist H_2 = \\lfloor \\log_2 (n_1 + 1) \\rfloor + \\lfloor \\log_2 (n_2 + 1) \\rfloor"}),e(),n(s,d)}}),n(t,o)}});var F=r(E,2);b(F,{children:(t,m)=>{e();var o=h("Вставка");n(t,o)}});var G=r(F,2);g(G,{children:(t,m)=>{v(t,{children:(o,i)=>{e();var a=h(`Вставка нового элемента в кучу очень просто реализуется слиянием.
    Создаём новую левостороннюю кучу, состоящую только из одного элемента — вставляемого.
    Далее сливаем нашу новую кучу с исходной кучей, в которую вставляем элемент.`);n(o,a)}})}});var I=r(G,2);b(I,{children:(t,m)=>{e();var o=h("Извлечение минимума");n(t,o)}});var K=r(I,2);g(K,{children:(t,m)=>{v(t,{children:(o,i)=>{e();var a=h(`Минимум находится в корне, поэтому для извлечения минимума
    достаточно просто удалить корень и слить его правое и левое поддеревья.`);n(o,a)}})}}),n(J,H)}export{kr as component};
