import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f,a as $,b as n,s as r,n as a,t as _}from"../chunks/BWp35gWV.js";import{T as tr}from"../chunks/CR7k0xtG.js";import{P}from"../chunks/DPzc5wQr.js";import{P as d}from"../chunks/B7flgP-x.js";import{M as m}from"../chunks/BqyEoRxA.js";import{C as b}from"../chunks/BvAJckrt.js";import{H as nr}from"../chunks/DXKx2xvL.js";import{S as Z}from"../chunks/CBbFRhrb.js";import{C as y}from"../chunks/BmgYHZay.js";/* empty css                *//* empty css                */import{L as k}from"../chunks/NE91WFFs.js";import{I as q}from"../chunks/Cv_jjTLk.js";import{P as ar}from"../chunks/BBkyo9uE.js";import{B as lr}from"../chunks/CZ1-HcAj.js";import{T as ir}from"../chunks/y0AHHn4v.js";var dr=f(`Давайте покрасим все вершины бинарного дерева поиска в красный или чёрный цвета.
    Будем считать, что у каждого реального листа есть по <!> фиктивных ребёнка,
    которые будем называть фиктивными листами.`,1),sr=f("<!> <!>",1),pr=f("<!> <!> <!> <!>",1),vr=f(`<b>Чёрная высота</b> узла <!> &mdash;
    количество чёрных узлов на пути от узла <!> до фиктивного листа (любого).
    При этом сам узел <!> мы не считаем.`,1),_r=f("<!> <!> <!>",1),cr=f(`Красно-чёрное дерево с <!> внутренними узлами
    имеет высоту не более <!>`,1),xr=f(`Поддерево любого узла <!> содержит как минимум <!> внутренних узлов.
    Это утверждение доказывается индукцией по высоте узла <!>.`,1),$r=f(`Обозначим высоту дерева за <!>.
    Тогда, согласно требованию для красных узлов, по крайней мере половина узлов на пути
    от корня к листу, не считая сам корень, должны быть чёрными.
    Значит, чёрная высота дерева должна быть минимум <!>.
    Тогда`,1),fr=f("<!> <!> <!> <!> <!>",1),hr=f(`При этом фиктивный лист имеет такую же структуру, имеет чёрный цвет, не имеет детей, и,
    очевидно, не несёт никакой полезной информации.
    Мы не будем явно задавать структуру этого фиктивного листа,
    а просто скажем, что фиктивными листами являются <!>`,1),mr=f("<!> <!>",1),gr=f("<!> <!> <!>",1),Pr=f(`Всю эту процедуру можно запихнуть в отдельную функцию <!>,
    для того чтобы не захламлять основной код вставки.`,1),br=f(`И теперь мы можем написать полный код вставки.
    При вставке мы спускаемся вниз, пока не дойдём до фиктивного листа.
    Далее заменяем этот фиктивный лист на новую вершину, добавляем её два фиктивных листа, красим её в красный
    и выполняем процедуру <!> для восстановления свойств красно-чёрного дерева.`,1),ur=f("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Er(rr){var C=ur(),w=$(C);tr(w,{title:"Красно-чёрное дерево"});var L=r(w,2);P(L,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=_("Балансировка на основе высоты требует дополнительных вычислений и проверок на каждую модифицирующую операцию.");n(o,e)}})}});var T=r(L,2);P(T,{children:(t,c)=>{var o=sr(),l=$(o);d(l,{children:(i,v)=>{a();var s=dr(),p=r($(s));m(p,{m:"2"}),a(),n(i,s)}});var e=r(l,2);d(e,{children:(i,v)=>{a();var s=_(`Потребуем, чтобы для каждого узла все пути от него до фиктивных листьев содержат одинаковое количество чёрных узлов.
    Это свойство как раз обеспечит нам балансировку, но при условии, что чёрные узлы будут в дереве присутствовать.
    Покрасим корень в чёрный цвет, все фиктивные листы в чёрный цвет
    и потребуем, чтобы у каждого красного узла все дети были чёрными.`);n(i,s)}}),n(t,o)}});var I=r(T,2);P(I,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=_("Итак, красно-чёрное дерево — бинарное дерево поиска, у которого");n(o,e)}})}});var j=r(I,2);lr(j,{wide:!0,children:(t,c)=>{var o=pr(),l=$(o);k(l,{children:(s,p)=>{d(s,{children:(g,h)=>{a();var x=_("все реальные листы имеют фиктивных детей, называемых фиктивными листами");n(g,x)}})}});var e=r(l,2);k(e,{children:(s,p)=>{d(s,{children:(g,h)=>{a();var x=_("все узлы покрашены в красный или чёрный цвета");n(g,x)}})}});var i=r(e,2);k(i,{children:(s,p)=>{d(s,{children:(g,h)=>{a();var x=_("корень и все фиктивные листы чёрного цвета");n(g,x)}})}});var v=r(i,2);k(v,{children:(s,p)=>{d(s,{children:(g,h)=>{a();var x=_("у каждого красного узла оба ребёнка чёрные");n(g,x)}})}}),n(t,o)}});var B=r(j,2);q(B,{src:"",alt:"Пример красно-чёрного дерево"});var H=r(B,2);P(H,{children:(t,c)=>{var o=_r(),l=$(o);d(l,{children:(v,s)=>{var p=vr(),g=r($(p),2);m(g,{m:"x"});var h=r(g,2);m(h,{m:"x"});var x=r(h,2);m(x,{m:"x"}),a(),n(v,p)}});var e=r(l,2);m(e,{display:!0,m:"\\bh x \\defeq \\text{количество чёрных узлов на пути от}~ x ~\\text{до фиктивного листа}"});var i=r(e,2);d(i,{children:(v,s)=>{a();var p=_("Чёрной высотой дерева называется чёрная высота его корня.");n(v,p)}}),n(t,o)}});var M=r(H,2);ir(M,{title:"Лемма о чёрной высоте",children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=cr(),i=r($(e));m(i,{m:"n"});var v=r(i,2);m(v,{m:"2 \\lfloor \\log_2 n \\rfloor + 2"}),n(o,e)}})}});var N=r(M,2);ar(N,{children:(t,c)=>{var o=fr(),l=$(o);d(l,{children:(p,g)=>{a();var h=xr(),x=r($(h));m(x,{m:"x"});var u=r(x,2);m(u,{m:"2^{\\bh x} - 1"});var er=r(u,2);m(er,{m:"x"}),a(),n(p,h)}});var e=r(l,2);d(e,{children:(p,g)=>{a();var h=$r(),x=r($(h));m(x,{m:"h"});var u=r(x,2);m(u,{m:"h/2"}),a(),n(p,h)}});var i=r(e,2);m(i,{display:!0,m:"n \\ge 2^{h/2} - 1"});var v=r(i,2);d(v,{children:(p,g)=>{a();var h=_("Отсюда получаем, что");n(p,h)}});var s=r(v,2);m(s,{display:!0,m:"h \\le 2 \\lfloor \\log_2 n \\rfloor + 2"}),n(t,o)}});var S=r(N,2);Z(S,{children:(t,c)=>{a();var o=_("Хранение красно-чёрного дерева");n(t,o)}});var A=r(S,2);P(A,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=_(`Красно-чёрное дерево будет реализовано нами на указателях.
    При этом в каждом узле помимо ссылок на левого и правого ребёнка будем хранить ссылку на родителя.
    Это нужно для реализации поворотов без использования стека.`);n(o,e)}})}});var V=r(A,2);b(V,{code:`
Color = 'red' | 'black'

struct node:
    literal[Color] color
    node* left
    node* right
    node* parent

    object key
`});var z=r(V,2);P(z,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=hr(),i=r($(e));y(i,{c:"none"}),n(o,e)}})}});var D=r(z,2);nr(D,{children:(t,c)=>{a();var o=_("Повороты красно-чёрного дерева");n(t,o)}});var E=r(D,2);P(E,{children:(t,c)=>{var o=mr(),l=$(o);d(l,{children:(i,v)=>{a();var s=_(`После модифицирующих операций нужно восстановить все свойства красно-чёрного дерева.
    Делается это обычно двумя разными операциями: поворотами и перекрашиваниями.
    Перекрашивания зависят от выполняемой операции, а вот повороты универсальны, поэтому их разберем отдельно.
    За изменения структуры красно-чёрного дерева отвечают только повороты.`);n(i,s)}});var e=r(l,2);d(e,{children:(i,v)=>{a();var s=_("Повороты здесь схожи с поворотами AVL деревьев.");n(i,s)}}),n(t,o)}});var F=r(E,2);b(F,{code:`
function left_rotate(node x):
    node pivot = x.right  # устанавливаем pivot

    # перенос родителя x в pivot
    pivot.parent = x.parent
    if x.parent is not none:
        if x.parent.left == x:
            x.parent.left = pivot
        else:
            x.parent.right = pivot

    # левое поддерево pivot становится правым поддеревом x
    x.right = pivot.left
    if pivot.left is not none:
        pivot.left.parent = x

    # x становится левым дочерним узлом pivot
    pivot.left = x
    x.parent = pivot
`});var G=r(F,2);b(G,{code:`
function right_rotate(node x):
    node pivot = x.left  # устанавливаем pivot

    # перенос родителя x в pivot
    pivot.parent = x.parent
    if x.parent is not none:
        if x.parent.left == x:
            x.parent.left = pivot
        else:
            x.parent.right = pivot

    # правое поддерево pivot становится левым поддеревом x
    x.left = pivot.right
    if pivot.right is not none:
        pivot.right.parent = x

    # x становится правым дочерним узлом pivot
    pivot.right = x
    x.parent = pivot
`});var J=r(G,2);Z(J,{children:(t,c)=>{a();var o=_("Вставка");n(t,o)}});var K=r(J,2);P(K,{children:(t,c)=>{var o=gr(),l=$(o);d(l,{children:(v,s)=>{a();var p=_(`Выполняя вставку в красно-чёрное дерево, мы просто выполним обычную вставку как в бинарное дерево поиска.
    После нам нужно будет восстановить свойства красно-чёрного дерева, вращая рёбра и перекрашивая узлы.`);n(v,p)}});var e=r(l,2);d(e,{children:(v,s)=>{a();var p=_(`При вставке нового узла он встаёт на место одного из фиктивных листьев.
    Поэтому мы окрасим его в красный цвет и прикрепим к нему два фиктивных листа.
    Дальше действия зависят от цветов родственных узлов.`);n(v,p)}});var i=r(e,2);d(i,{children:(v,s)=>{a();var p=_(`Если родитель ребёнка черный, то никакие свойства деревьев не нарушены, и процедура завершается.
    Если же он красный, то нарушается свойство красных узлов, и нам нужно перекрашивать вершины.
    Наши действия зависят от цвета дяди вставленного узла.`);n(v,p)}}),n(t,o)}});var O=r(K,2);P(O,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=_(`Если дядя вставленного узла красный, то мы просто перекрашиваем родителя и дядю в чёрный, а деда в красный.
    Получается, что на всех путях от деда одинаковое количество чёрных вершин и у всех красных вершин все дети чёрные.`);n(o,e)}})}});var Q=r(O,2);q(Q,{src:"",alt:"Перекрашивание дерева, когда дядя вставляемого узла красный"});var R=r(Q,2);P(R,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=_(`Если дядя вставленного узла чёрный (включая ситуацию, когда дяди нет, то есть когда дядя является фиктивным листом),
    то одного перекрашивания недостаточно.
    Если вставляемый узел находится с родителем в разной ориентации
    (например, родитель левый ребёнок деда, а вставляемый узел правый ребёнок родителя),
    то выполняем поворот вокруг родителя, выравнивая линию от деда до вставляемого узла.
    Затем родитель становится чёрным, дед становится красным, и выполняется финальный поворот вокруг деда.`);n(o,e)}})}});var U=r(R,2);q(U,{src:"",alt:"Перекрашивание дерева, когда дядя вставляемого узла чёрный"});var W=r(U,2);P(W,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=Pr(),i=r($(e));y(i,{c:"fix_insert(node x)"}),a(),n(o,e)}})}});var X=r(W,2);b(X,{code:`
function fix_insertion(node x):
    if x.parent is none:  # если x является корнем, то просто красим его в чёрный
        x.color = 'black'
        return

    while x.parent.color is 'red':
        grandfather = x.parent.parent

        # родитель - левый ребенок деда
        if x.parent == grandfather.left:
            uncle = grandfather.right
            if uncle.color is 'red':
                x.parent.color = 'black'
                uncle.color = 'black'
                grandfather.color = 'red'
                x = grandfather
            else:
                if x == x.parent.right:
                    x = x.parent
                    left_rotate(x)
                x.parent.color = 'black'
                grandfather.color = 'red'
                right_rotate(grandfather)

        # родитель - правый ребенок деда
        else:
            uncle = grandfather.left
            if uncle.color is 'red':
                x.parent.color = 'black'
                uncle.color = 'black'
                grandfather.color = 'red'
                x = grandfather
            else:
                if x == x.parent.left:
                    x = x.parent
                    right_rotate(x)
                x.parent.color = 'black'
                grandfather.color = 'red'
                left_rotate(grandfather)

    root.color = 'black'
`});var Y=r(X,2);P(Y,{children:(t,c)=>{d(t,{children:(o,l)=>{a();var e=br(),i=r($(e));y(i,{c:"fix_insertion()"}),a(),n(o,e)}})}});var or=r(Y,2);b(or,{code:`
function insert(node* root, object key)
    node x = new node(key, color='red', left=none, right=none)

    if root is none:  # дерево пустое
        root = x
        x.parent = none

    else
        Node p = root
        Node q = nil
        while p is not none:  # спускаемся вниз, пока не дойдем до подходящего листа
            q = p
            if p.key < x.key
                p = p.right
            else
                p = p.left

        x.parent = q

        # добавляем новый узел x
        if q.key < x.key
            q.right = x
        else
            q.left = x

     fix_insertion(x)
`}),n(rr,C)}export{Er as component};
