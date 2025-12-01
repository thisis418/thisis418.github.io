import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as m,a as h,b as _,s as r,n,t as f}from"../chunks/BWp35gWV.js";import{T as Y}from"../chunks/CR7k0xtG.js";import{P}from"../chunks/DPzc5wQr.js";import{P as c}from"../chunks/B7flgP-x.js";import{M as t}from"../chunks/BqyEoRxA.js";/* empty css                */import{C as y}from"../chunks/BmgYHZay.js";import{C as x}from"../chunks/BvAJckrt.js";/* empty css                */import{S as j}from"../chunks/CBbFRhrb.js";import{D as U}from"../chunks/DlTIf4aM.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */var Z=m(`<b>Биномиальное дерево</b> <!> ранга <!> &mdash; дерево, определяемое рекурсивно: <!> &mdash; дерево, состоящее просто из одного узла. <!> состоит из двух биномиальных деревьев ранга <!>,
    при корень одного из этих деревьев становится крайним левым ребёнком другого.`,1),rr=m(`Можно раскрыть рекурсию и получить эквивалентное определение. <!> состоит из корня, у которого есть ровно <!> детей &mdash;
    корни поддеревьев <!>, расположенных в порядке убывания рангов.`,1),er=m("<!> <!> <!> <!>",1),nr=m(`В биномиальном дереве ранга <!> содержится ровно <!> вершин.
    Отсюда следует, что если в биномиальном дереве содержится <!> вершин,
    то оно имеет ранг <!>.`,1),or=m(`Биномиальное дерево ранга <!> имеет высоту <!>, при этом
    на глубине <!> содержится <!> вершин.
    Корень такого дерева имеет степень <!>, а все потомки имеют степень меньше <!>.
    То есть если в биномиальном дереве содержится <!> элементов,
    то максимальная степень произвольного узла равна <!>.`,1),tr=m("<!> <!> <!>",1),ar=m(`<b>Биномиальная куча</b> &mdash; лес из биномиальных деревьев различных рангов.
    Каждое биномиальное дерево в этом лесу удовлетворяет свойству кучи:
    приоритет любого узла больше приоритетов его детей.`,1),_r=m("<!> <!> <!>",1),dr=m(`Саму кучу будем представлять в виде еще одной структуры.
    Там обязательно должно быть поле <!>, содержащее ссылку на самый левый корень.
    Напомню, что деревья в нашем лесу располагаются в порядке возрастания рангов.
    Также для обеспечения быстрого получения элемента с максимальным приоритетом
    нужно хранить ссылку на этот максимальный элемент.`,1),ir=m("Если <!> оказывается равным <!>, то это значит, что куча пустая.",1),sr=m(`Так как корней биномиальных деревьев в лесу не более <!>,
    операция поиска максимума выполнится за <!>.`,1),cr=m(`Два биномиальных дерева одинакового ранга можно соединить в одно биномиальное дерево,
    ранг которого будет на <!> больше.
    Если вдруг среди деревьев сливаемых куч окажется еще и дерево получившегося ранга, то их снова можно соединить.`,1),lr=m(`Представим ранги деревьев в биномиальной куче как двоичное число: <!>-й бит этого числа будет установлен в <!> только если в биномиальной куче будет дерево ранга <!>.
    Тогда процесс слияния двух биномиальных куч можно представить как сложение в двоичной системе двух чисел,
    представляющих собой ранги деревьев в обоих кучах.`,1),vr=m("<!> <!> <!>",1),mr=m("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Or(V){var w=mr(),C=h(w);Y(C,{title:"Биномиальные кучи"});var k=r(C,2);U(k,{title:"Биномиальное дерево",children:(a,u)=>{var e=er(),s=h(e);c(s,{children:(g,i)=>{var v=Z(),p=r(h(v),2);t(p,{m:"B_r"});var $=r(p,2);t($,{m:"r"});var H=r($,2);t(H,{m:"B_0"});var b=r(H,2);t(b,{m:"B_r"});var B=r(b,2);t(B,{m:"r-1"}),n(),_(g,v)}});var o=r(s,2);t(o,{display:!0,m:"B_r = \\cases{ \\{\\cdot\\} & \\if r = 0 \\\\ B_{r-1} \\djunion \\{ B_{r-1} \\} & \\if r \\ge 1 }"});var l=r(o,2);c(l,{children:(g,i)=>{n();var v=rr(),p=r(h(v));t(p,{m:"B_r"});var $=r(p,2);t($,{m:"r"});var H=r($,2);t(H,{m:"B_0, B_1, \\dotsc, B_{r-1}"}),n(),_(g,v)}});var d=r(l,2);t(d,{display:!0,m:"B_r = \\cases{ \\{\\cdot\\} & \\if r = 0 \\\\ \\{ B_0 \\} \\djunion \\{ B_1 \\} \\djunion \\dotsb \\djunion \\{ B_{r-1} \\} & \\if r \\ge 1 }"}),_(a,e)}});var D=r(k,2);P(D,{children:(a,u)=>{var e=tr(),s=h(e);c(s,{children:(d,g)=>{n();var i=f("Отмечу сразу несколько очевидных свойств биномиальных деревьев.");_(d,i)}});var o=r(s,2);c(o,{children:(d,g)=>{n();var i=nr(),v=r(h(i));t(v,{m:"r"});var p=r(v,2);t(p,{m:"2^r"});var $=r(p,2);t($,{m:"n"});var H=r($,2);t(H,{m:"\\log_2 n"}),n(),_(d,i)}});var l=r(o,2);c(l,{children:(d,g)=>{n();var i=or(),v=r(h(i));t(v,{m:"r"});var p=r(v,2);t(p,{m:"r+1"});var $=r(p,2);t($,{m:"k"});var H=r($,2);t(H,{m:"\\binom{r}{k}"});var b=r(H,2);t(b,{m:"r"});var B=r(b,2);t(B,{m:"r"});var R=r(B,2);t(R,{m:"n"});var X=r(R,2);t(X,{m:"\\log_2 n"}),n(),_(d,i)}}),_(a,e)}});var M=r(D,2);U(M,{title:"Биномиальная куча",children:(a,u)=>{c(a,{children:(e,s)=>{var o=ar();n(),_(e,o)}})}});var S=r(M,2);P(S,{children:(a,u)=>{var e=_r(),s=h(e);c(s,{children:(d,g)=>{n();var i=f(`Поскольку технически детей у каждого узла может быть много, создать статическую структуру не получится.
    Давайте у каждого узла всех детей хранить в односвязном списке,
    тогда в самом узле нужно будет хранить только ссылку на самого левого ребёнка.
    Поскольку поддеревья у каждого корня упорядочены по убыванию ранга, порядок детей всегда фиксированный,
    и хранить детей в такой структуре можно.`);_(d,i)}});var o=r(s,2);c(o,{children:(d,g)=>{n();var i=f(`Обязательно для каждого узла нужно хранить ранг поддерева с корнем в этом узле.
    Учтём, что ранг узла совпадает с его степенью.`);_(d,i)}});var l=r(o,2);c(l,{children:(d,g)=>{n();var i=f("Получается такая структура у узла");_(d,i)}}),_(a,e)}});var T=r(S,2);x(T,{code:`
struct node:
    node* parent   # ссылка на родителя
    node* sibling  # ссылка на правого брата
    node* child    # ссылка на самого левого ребёнка

    int degree

    object priority
`});var O=r(T,2);P(O,{children:(a,u)=>{c(a,{children:(e,s)=>{n();var o=dr(),l=r(h(o));y(l,{c:"head"}),n(),_(e,o)}})}});var q=r(O,2);x(q,{code:`
class heap:
    node* head
    node* max
`});var z=r(q,2);P(z,{children:(a,u)=>{c(a,{children:(e,s)=>{n();var o=ir(),l=r(h(o));y(l,{c:"heap.head"});var d=r(l,2);y(d,{c:"none"}),n(),_(e,o)}})}});var A=r(z,2);j(A,{children:(a,u)=>{n();var e=f("Поиск и получение максимума");_(a,e)}});var E=r(A,2);P(E,{children:(a,u)=>{c(a,{children:(e,s)=>{n();var o=f("Для получения максимума кучи достаточно просто пройти по ссылке на максимальный элемент");_(e,o)}})}});var F=r(E,2);x(F,{code:`
method get_max(heap h) -> node*:
    return h.max
`});var G=r(F,2);P(G,{children:(a,u)=>{c(a,{children:(e,s)=>{n();var o=f(`Допустим, что нам нужно именно найти максимум.
    Поскольку каждое биномиальное дерево в нашем лесу удовлетворяет свойству кучи, значит максимум находится среди корней всех деревьев.
    Получается, что для поиска максимального элемента надо просто пройтись по всем корням.`);_(e,o)}})}});var I=r(G,2);x(I,{code:`
method search_max(heap h) -> node*:
    node* candidate = none
    object max_priority = -infinity

    node* current = h.head

    while current is not none:
        if current.priority > max_priority:
            max_priority = current.priority
            candidate = current

        current = current.sibling

    return candidate
`});var J=r(I,2);P(J,{children:(a,u)=>{c(a,{children:(e,s)=>{n();var o=sr(),l=r(h(o));t(l,{m:"\\lfloor \\log_2 n \\rfloor + 1"});var d=r(l,2);t(d,{m:"O(\\log n)"}),n(),_(e,o)}})}});var K=r(J,2);j(K,{children:(a,u)=>{n();var e=f("Слияние двух биномиальных куч");_(a,e)}});var L=r(K,2);P(L,{children:(a,u)=>{var e=vr(),s=h(e);c(s,{children:(d,g)=>{n();var i=f(`Пусть у нас есть две биномиальные кучи.
    Соединив связные списки корней мы получим одну биномиальную кучу,
    каждое поддерево которой удовлетворяет свойству кучи.
    Единственное, в сливаемых кучах могут оказаться деревья одинакового ранга.`);_(d,i)}});var o=r(s,2);c(o,{children:(d,g)=>{n();var i=cr(),v=r(h(i));t(v,{m:"1"}),n(),_(d,i)}});var l=r(o,2);c(l,{children:(d,g)=>{n();var i=lr(),v=r(h(i));t(v,{m:"j"});var p=r(v,2);t(p,{m:"1"});var $=r(p,2);t($,{m:"j"}),n(),_(d,i)}}),_(a,e)}});var N=r(L,2);x(N,{code:`
classmethod merge(heap H1, heap H2) -> heap:
    if H1 is none:
        return H2
    if H2 is none:
        return H1

    heap H = {head = none}

    current_H = H.head
    current_H1 = H1.head
    current_H2 = H2.head

    # слияние корневых списков куч
    while current_H1 is not none and current_H2 is not none:
         if current_H1.degree < current_H2.degree:
             current_H.sibling = current_H1
             current_H = current_H1
             current_H1 = current_H1.sibling
        else:
             current_H.sibling = current_H2
             current_H = current_H2
             current_H2 = current_H2.sibling

    if current_H1 is none:
         while current_H2 is not none:
             current_H.sibling = current_H2
             current_H2 = current_H2.sibling

    else if current_H2 is none:
         while current_H1 is not none:
             current_H.sibling = current_H1
             current_H1 = current_H1.sibling

    # объединение деревьев одной степени
    current = H.head
    while current.sibling is not none:
         if current.degree == current.sibling.degree
             current.parent = current.sibling
             tmp = current.sibling
             current.sibling = current.sibling.child
             current = tmp
             continue
         current = current.sibling
    return H
`});var Q=r(N,2);j(Q,{children:(a,u)=>{n();var e=f("Вставка");_(a,e)}});var W=r(Q,2);P(W,{children:(a,u)=>{c(a,{children:(e,s)=>{n();var o=f(`Вставка нового элемента в кучу очень просто реализуется слиянием.
    Создаём новую биномиальную кучу, состоящую только из одного элемента — вставляемого.
    Далее сливаем нашу новую кучу с исходной кучей, в которую вставляем элемент.`);_(e,o)}})}}),_(V,w)}export{Or as component};
