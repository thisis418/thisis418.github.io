import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as s,a as c,b as n,s as r,t as w,n as t}from"../chunks/BWp35gWV.js";import{T as wr}from"../chunks/CR7k0xtG.js";import{P as x}from"../chunks/DPzc5wQr.js";import{P as h}from"../chunks/B7flgP-x.js";import{M as e}from"../chunks/BqyEoRxA.js";import{C as V}from"../chunks/BvAJckrt.js";import{H as br}from"../chunks/DXKx2xvL.js";import{S as R}from"../chunks/CBbFRhrb.js";import{C as gr}from"../chunks/BmgYHZay.js";/* empty css                *//* empty css                *//* empty css                */import{I as U}from"../chunks/Cv_jjTLk.js";import{P as kr}from"../chunks/BBkyo9uE.js";const yr=""+new URL("../assets/rotate.CB3UqdHU.svg",import.meta.url).href,Nr=""+new URL("../assets/big-rotate-right.DHV2BuZt.svg",import.meta.url).href,Lr=""+new URL("../assets/big-rotate-left.D5h7hwUi.svg",import.meta.url).href;var Gr=s(`Для каждой узла <!> определим <b>height balance factor (фактор балансировки)</b> &mdash;
    разницу высот правого и левого поддеревьев.`,1),Vr=s("<!> <!> <!> <!>",1),Ar=s(`Давайте возьмём наименьшее из возможных требований для фактора балансировки.
    Потребуем, чтобы у всех узлов нашего дерева фактор балансировки по модулю не превосходил <!>.`,1),Or=s(`Это требование, как мы убедимся дальше, очень легко поддерживать.
    В 1962 году советские математики Георгий Максимович Адельсон-Вельский и Евгений Михайлович Ландис
    описали такой метод балансировки деревьев.
    Самобалансирующиеся деревья, которые мы с вами дальше будем строить и изучать, носят их имя &mdash; <b>AVL-деревья</b>.`,1),Rr=s("<!> <!> <!>",1),Ur=s(`Узел AVL-дерева содержит те же поля, что и узел обычного бинарного дерева поиска,
    плюс дополнительное поле <!> для хранения своего фактора балансировки.`,1),Cr=s(`Также, для нормальной реализации всех алгоритмов без рекурсии, добавим поле <!>,
    которое будет хранить ссылку на родителя узла.`,1),Br=s("<!> <!>",1),Hr=s(`Можно, конечно, в узле хранить высоту его поддерева.
    Но если мы храним фактор балансировки, который может принимать только значения <!>, <!> и <!>,
    то мы дополнительно тратим всего <!> бита вместо полного числа.`,1),qr=s(`Итак, после операции вставки или удаления узла дерево может перестать быть сбалансированным,
    то есть у какой-то узла <!>. Надо научиться возвращать дереву баланс.`,1),Dr=s(`Ключевое свойство, которое делает AVL-деревья эффективными: после вставки или удалении узла фактор балансировки
    может измениться только тех у узлов, которые лежат на пути от корня до вставленного или удаленного узла.
    И изменяется фактор балансировки на <!> или на <!>.
    То есть это значит, что для восстановления баланса нам достаточно подняться от изменённого узла к корню,
    на каждом уровне проверить и при необходимости исправить баланс.
    Остановимся мы тогда, когда баланс перестанет меняться.`,1),Ir=s("<!> <!>",1),Mr=s(`Иногда так случается, что для какого-то узла <!> перестаёт
    выполняться свойство <!>.
    Нужно это свойство восстанавливать.`,1),Sr=s(`Если у узла <!> случилась разбалансировка, то обязательно <!>.
    Связано это с тем, что у AVL-дерева всегда <!>,
    а модифицирующие операции (вставка узла и удаление узла)
    могут изменить фактор балансировки максимум на <!>.`,1),Tr=s(`Для восстановления баланса узла нам нужно немного изменить структуру дерева.
    Это можно сделать с помощью операций, называемых <b>поворотами</b>.
    Повороты &mdash; это <b>локальные</b> перестройки дерева,
    которые изменяют относительные высоты поддеревьев определённого узла, сохраняя при этом порядок ключей,
    то есть свойство бинарного дерева поиска остаётся выполненным:
    ключи в левом поддереве узла после поворота остаются меньше ключа этого узла,
    и ключи в правом поддереве узла после поворота остаются больше ключа этого узла.`,1),Zr=s(`Повороты происходят относительно узла с нарушенным балансом и затрагивают только его детей и внуков &mdash;
    всего <!> узлов.
    При этом высота всего его поддерева обычно уменьшается на <!>,
    что помогает восстановить баланс у родительских узлов при подъёме от изменённого узла к корню.`,1),jr=s("<!> <!> <!> <!>",1),zr=s("<b>Обычные повороты.</b>"),Er=s(`Если фактор балансировки узла равен <!>,
    а у его левого ребёнка фактор балансировки равен <!>,
    то нужно выполнить правый поворот (на рисунке стрелка вправо).`,1),Fr=s(`Аналогично, если фактор балансировки узла равен <!>,
    а у его правого ребёнка фактор балансировки равен <!>,
    то нужно выполнить левый поворот (на рисунке стрелка влево).
    Результат симметричен результату правого поворота.`,1),Jr=s("<!> <!> <!> <!>",1),Kr=s("<b>Большие повороты.</b>"),Qr=s(`Если знаки у факторов балансировки узла и его ребёнка разные,
    то есть если направления разбалансировки не совпадают,
    то после обычного поворота узла дерево снова будет разбалансированным, но уже в другую сторону.
    Для того, чтобы исправлять такие ситуации, нам нужно совершать не один, а два поворота.
    Такой двойной поворот называется <b>большим поворотом</b>.`,1),Wr=s("<!> <!>",1),Xr=s(`Большой правый поворот совершается, если поддерево разбалансировано влево,
    то есть если фактор балансировки у узла <!>,
    а фактор балансировки у левого ребёнка узла равен <!>.`,1),Yr=s(`Большой левый поворот совершается, если поддерево разбалансировано вправо,
    то есть если фактор балансировки у узла <!>,
    а фактор балансировки у правого ребёнка узла равен <!>.`,1),re=s("<!> <!>",1),ee=s(`Пусть нам надо добавить в дерево узел с ключом <!>.
    Будем спускаться по дереву как при поиске ключа <!>.
    Если мы стоим в узле <!> и нам надо спуститься в поддерево, которого нет,
    то делаем новый узел листом, и узел <!> его корнем.`,1),te=s(`Далее нам нужно подниматься вверх до корня, пересчитывая фактор балансировки у вершин и выполняя повороты.
    Если мы поднялись в вершину <!> из левого поддерева,
    то <!> увеличивается на <!>,
    а если из правого поддерева, то <!> уменьшается на <!>.`,1),oe=s(`После пересчёта фактора балансировки надо понять, что делать дальше.
    Если он равен <!> или <!>, то мы продолжаем подниматься.
    Если он равен <!>, то высота поддерева не изменилась, а значит можно заканчивать пересчёт.
    Если он оказался равным <!> или <!>, делаем нужный поворот
    и снова смотрим на фактор балансировки нового корня поддерева.`,1),ne=s(`Для каждого узла на пути от листа до корня мы сделаем не более одного поворота,
    и в любом случае будем подниматься вверх. Значит, на пересчёт факторов балансировки и на восстановление баланса
    мы потратим время <!>, а точнее ...`,1),ae=s("<!> <!> <!> <!>",1),le=s(`Если удаляемый узел <!> является листом, то удалим его.
    Если у него есть дети, то найдем ему замену <!> &mdash;
    узел с наименьшим ключом в правом поддереве удаляемого узла <!>,
    или узел с наибольшим ключом в левом поддереве удаляемого узла <!>.
    Скопируем данные из <!> в <!> и удалим уже узел <!>.`,1),_e=s(`Далее нам нужно подниматься вверх от родителя фактически удалённого узла до корня,
    пересчитывая фактор балансировки у вершин и выполняя повороты.
    Если мы поднялись в вершину <!> из левого поддерева,
    то <!> уменьшается на <!>,
    а если из правого поддерева, то <!> увеличивается на <!>.`,1),de=s(`После пересчёта фактора балансировки надо понять, что делать дальше.
    Если он равен <!>, то высота поддерева уменьшилась, и мы продолжаем подниматься.
    Если он равен <!> или <!>, то высота поддерева не изменилась,
    а значит можно заканчивать пересчёт.
    Если он оказался равным <!> или <!>, делаем нужный поворот
    и снова смотрим на фактор балансировки нового корня поддерева.`,1),se=s(`Для каждого узла на пути от листа до корня мы сделаем не более одного поворота,
    и в любом случае будем подниматься вверх. Значит, на пересчёт факторов балансировки и на восстановление баланса
    мы потратим время <!>, а точнее ...`,1),ce=s("<!> <!> <!> <!>",1),ve=s(`Пусть <!> для всех узлов дерева.
    Давайте получим оценку высоты дерева.`,1),ie=s(`Пусть <!> &mdash; минимальное количество узлов в дереве высоты <!>.
    Из определения следует, что <!> (пустое дерево) и <!> (только один узел).`,1),fe=s(`Для этого дерева выполнено условие баланса: <!> для всех узлов дерева.
    Тогда для дерева высоты <!> можно взять корень и разбить его на два поддерева.
    При этом для корня будет выполнено условие баланса. Значит,`,1),he=s(`Решение уравнения этого экспоненциальное.
    Давайте найдем точную оценку для <!>, и, как следствие, для высоты <!>.`,1),me=s("<!> <!> <!> <!> <!>",1),pe=s("Запишем сразу производящую функцию для <!>, учитывая, что <!>.",1),ue=s("Подставим внутрь функции уравнение <!>",1),be=s(`Пусть полюсы функции <!> &mdash; точка <!> и <!> точка <!>,
    при этом точки <!> являются решением уравнения <!>.
    Тогда <!> можно разложить в сумму простых дробей`,1),ge=s("<!> <!> <!> <!> <!> <!> <!> <!>",1),$e=s(`Для удобства можно ввести другие переменные <!>,
    которые являются корнями уравнения <!>.
    Тогда формула для <!> преобразуется в`,1),Pe=s("<!> <!>",1),xe=s("Коэффициент <!> при <!> в производящей функции <!> вычисляются по теореме о представлении коэффициента рациональной производящей функции",1),we=s(`Можно вывести отсюда грубоватую асимптотическую оценку <!>.
    Обозначим за <!> единственный действительный положительный корень.
    У него же будет максимальный модуль, а значит он вносит наибольший вклад в асимптотику.`,1),ke=s("<!> <!> <!> <!>",1),ye=s("<!> <!> <!>",1),Ne=s("Теперь, зная <!>, мы можем получить оценку высоты сбалансированного дерева",1),Le=s(`Какие выводы можно сделать?
    Если сильно нагрубить, можно сказать, что <!>,
    что было ясно еще при первом взгляде на рекурсивную формулу.
    А ещё, константы довольно маленькие, то есть мы можем позволить себе много свободы
    (в смысле взять довольно большое значение <!> без существенной просадки по высоте).`,1),Ge=s("<!> <!> <!>",1),Ve=s("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Ee($r){var C=Ve(),B=c(C);wr(B,{title:"AVL дерево"});var H=r(B,2);x(H,{children:(v,$)=>{var l=Vr(),p=c(l);h(p,{children:(a,d)=>{t();var o=w(`Все проблемы несбалансированных деревьев из-за высоты. Точнее, из-за большой разности высот поддеревьев.
    Давайте на основе этой разности введем фактор балансировки.`);n(a,o)}});var m=r(p,2);h(m,{children:(a,d)=>{t();var o=Gr(),_=r(c(o));e(_,{m:"v"}),t(3),n(a,o)}});var i=r(m,2);e(i,{display:!0,m:"\\bf v = \\height(v.\\code{left}) - \\height(v.\\code{right})"});var u=r(i,2);h(u,{children:(a,d)=>{t();var o=w(`Если фактор балансировки у каких-то узлов по модулю большой, то это значит наше дерево перекашивает,
    и высота дерева становится неприемлемой.
    Нам нужно, чтобы этот фактор балансировки был небольшим для всех узлов дерева.
    Тогда само дерево будет больше похоже на полное дерево, а не на бамбук.`);n(a,o)}}),n(v,l)}});var q=r(H,2);x(q,{children:(v,$)=>{var l=Rr(),p=c(l);h(p,{children:(u,a)=>{t();var d=Ar(),o=r(c(d));e(o,{m:"1"}),t(),n(u,d)}});var m=r(p,2);e(m,{display:!0,m:"|\\bf v| \\le 1 \\quad\\text{для всех узлов}~ v"});var i=r(m,2);h(i,{children:(u,a)=>{t();var d=Or();t(2),n(u,d)}}),n(v,l)}});var D=r(q,2);R(D,{children:(v,$)=>{t();var l=w("Структура AVL дерева");n(v,l)}});var I=r(D,2);x(I,{children:(v,$)=>{var l=Br(),p=c(l);h(p,{children:(i,u)=>{t();var a=Ur(),d=r(c(a));gr(d,{c:"balance"}),t(),n(i,a)}});var m=r(p,2);h(m,{children:(i,u)=>{t();var a=Cr(),d=r(c(a));gr(d,{c:"parent"}),t(),n(i,a)}}),n(v,l)}});var M=r(I,2);V(M,{code:`
struct node:
    ref node left
    ref node right
    ref node parent
    int balance

    key key
    some additional data
`});var S=r(M,2);x(S,{children:(v,$)=>{h(v,{children:(l,p)=>{t();var m=Hr(),i=r(c(m));e(i,{m:"0"});var u=r(i,2);e(u,{m:"1"});var a=r(u,2);e(a,{m:"-1"});var d=r(a,2);e(d,{m:"2"}),t(),n(l,m)}})}});var T=r(S,2);x(T,{children:(v,$)=>{var l=Ir(),p=c(l);h(p,{children:(i,u)=>{t();var a=qr(),d=r(c(a));e(d,{m:"|\\bf v| > 1"}),t(),n(i,a)}});var m=r(p,2);h(m,{children:(i,u)=>{t();var a=Dr(),d=r(c(a));e(d,{m:"1"});var o=r(d,2);e(o,{m:"-1"}),t(),n(i,a)}}),n(v,l)}});var Z=r(T,2);R(Z,{children:(v,$)=>{t();var l=w("Повороты и восстановление баланса");n(v,l)}});var j=r(Z,2);x(j,{children:(v,$)=>{var l=jr(),p=c(l);h(p,{children:(a,d)=>{t();var o=Mr(),_=r(c(o));e(_,{m:"v"});var f=r(_,2);e(f,{m:"|\\bf v| \\le 1"}),t(),n(a,o)}});var m=r(p,2);h(m,{children:(a,d)=>{t();var o=Sr(),_=r(c(o));e(_,{m:"v"});var f=r(_,2);e(f,{m:"|\\bf v| = 2"});var b=r(f,2);e(b,{m:"|\\bf v| \\le 1"});var g=r(b,2);e(g,{m:"1"}),t(),n(a,o)}});var i=r(m,2);h(i,{children:(a,d)=>{t();var o=Tr();t(4),n(a,o)}});var u=r(i,2);h(u,{children:(a,d)=>{t();var o=Zr(),_=r(c(o));e(_,{m:"O(1)"});var f=r(_,2);e(f,{m:"1"}),t(),n(a,o)}}),n(v,l)}});var z=r(j,2);x(z,{children:(v,$)=>{var l=Jr(),p=c(l);h(p,{children:(a,d)=>{var o=zr();n(a,o)}});var m=r(p,2);h(m,{children:(a,d)=>{t();var o=w(`Если знаки у факторов балансировки узла и его ребёнка одинаковые,
    то есть если направления разбалансировки совпадают,
    то нам достаточно просто совершить самый обычный поворот:
    ребёнок с перевешивающей стороны становится новым корнем поддерева,
    а разбалансированный узел сползает на место второго ребёнка.`);n(a,o)}});var i=r(m,2);h(i,{children:(a,d)=>{t();var o=Er(),_=r(c(o));e(_,{m:"2"});var f=r(_,2);e(f,{m:"1"}),t(),n(a,o)}});var u=r(i,2);h(u,{children:(a,d)=>{t();var o=Fr(),_=r(c(o));e(_,{m:"-2"});var f=r(_,2);e(f,{m:"-1"}),t(),n(a,o)}}),n(v,l)}});var E=r(z,2);U(E,{get src(){return yr}});var F=r(E,2);x(F,{children:(v,$)=>{var l=Wr(),p=c(l);h(p,{children:(i,u)=>{var a=Kr();n(i,a)}});var m=r(p,2);h(m,{children:(i,u)=>{t();var a=Qr();t(2),n(i,a)}}),n(v,l)}});var J=r(F,2);x(J,{children:(v,$)=>{h(v,{children:(l,p)=>{t();var m=Xr(),i=r(c(m));e(i,{m:"2"});var u=r(i,2);e(u,{m:"-1"}),t(),n(l,m)}})}});var K=r(J,2);U(K,{get src(){return Nr},children:(v,$)=>{t();var l=w("Большой правый поворот");n(v,l)},$$slots:{default:!0}});var Q=r(K,2);x(Q,{children:(v,$)=>{h(v,{children:(l,p)=>{t();var m=Yr(),i=r(c(m));e(i,{m:"-2"});var u=r(i,2);e(u,{m:"1"}),t(),n(l,m)}})}});var W=r(Q,2);U(W,{get src(){return Lr},children:(v,$)=>{t();var l=w("Большой левый поворот");n(v,l)},$$slots:{default:!0}});var X=r(W,2);x(X,{children:(v,$)=>{var l=re(),p=c(l);h(p,{children:(i,u)=>{t();var a=w(`После поворота нам нужно пересчитать фактор балансировки затронутых узлов.
    Важно, что операция поворота локальная, поэтому мы не поднимаемся выше,
    хотя фактически фактор балансировки мог измениться у всех узлов, чьи поддеревья мы затронули в процессе поворота.
    Подниматься наверх мы будем при исполнении модифицирующих операций.`);n(i,a)}});var m=r(p,2);h(m,{children:(i,u)=>{t();var a=w("Для удобства и чистоты реализации функции поворота должны возвращать новый корень поддерева.");n(i,a)}}),n(v,l)}});var Y=r(X,2);V(Y,{code:`
function rotate_right(ref node a) -> ref node:
    ref node b = a.left

    assert a.balance == 2
    assert b.balance >= 0

    a.left = b.right

    if b.right is not null:
        b.right.parent = a

    b.right = a
    b.parent = a.parent
    a.parent = b

    if b.balance == 1:
        a.balance = 0
        b.balance = 0

    else if b.balance == 0:
        a.balance = 1
        b.balance = -1

    return b
`});var rr=r(Y,2);V(rr,{code:`
function rotate_left(ref node a) -> ref node:
    ref node b = a.right

    assert a.balance == -2
    assert b.balance <= 0

    a.right = b.left

    if b.left is not null:
        b.left.parent = a

    b.left = a
    b.parent = a.parent
    a.parent = b

    if b.balance == -1:
        a.balance = 0
        b.balance = 0

    else if b.balance == 0:
        a.balance = -1
        b.balance = 1

    return b
`});var er=r(rr,2);x(er,{children:(v,$)=>{h(v,{children:(l,p)=>{t();var m=w(`Большие повороты можно явно реализовать по картинке, но, чтобы не мучаться с пересчётом
    факторов балансировки у вершин, можно реализовать каждый большой поворот через два обычных.`);n(l,m)}})}});var tr=r(er,2);V(tr,{code:`
function big_rotate_left(ref node a) -> ref node:
    ref node b = a.right

    assert a.balance == -2
    assert b.balance == 1

    a.right = rotate_right(b)  # правый поворот вокруг b
    return rotate_left(a)      # левый поворот вокруг a
`});var or=r(tr,2);V(or,{code:`
function big_rotate_right(ref node a) -> ref node:
    ref node b = a.left

    assert a.balance == 2
    assert b.balance == -1

    a.left = rotate_left(b)  # левый поворот вокруг b
    return rotate_right(a)   # правый поворот вокруг a
`});var nr=r(or,2);R(nr,{children:(v,$)=>{t();var l=w("Вставка в AVL-дерево");n(v,l)}});var ar=r(nr,2);x(ar,{children:(v,$)=>{var l=ae(),p=c(l);h(p,{children:(a,d)=>{t();var o=ee(),_=r(c(o));e(_,{m:"t"});var f=r(_,2);e(f,{m:"t"});var b=r(f,2);e(b,{m:"v"});var g=r(b,2);e(g,{m:"v"}),t(),n(a,o)}});var m=r(p,2);h(m,{children:(a,d)=>{t();var o=te(),_=r(c(o));e(_,{m:"w"});var f=r(_,2);e(f,{m:"w.\\code{balance}"});var b=r(f,2);e(b,{m:"1"});var g=r(b,2);e(g,{m:"w.\\code{balance}"});var P=r(g,2);e(P,{m:"1"}),t(),n(a,o)}});var i=r(m,2);h(i,{children:(a,d)=>{t();var o=oe(),_=r(c(o));e(_,{m:"1"});var f=r(_,2);e(f,{m:"-1"});var b=r(f,2);e(b,{m:"0"});var g=r(b,2);e(g,{m:"2"});var P=r(g,2);e(P,{m:"-2"}),t(),n(a,o)}});var u=r(i,2);h(u,{children:(a,d)=>{t();var o=ne(),_=r(c(o));e(_,{m:"O(\\text{высота дерева}) = O(\\log n)"}),t(),n(a,o)}}),n(v,l)}});var lr=r(ar,2);V(lr,{code:`
function new_node(key t) -> ref node:
    return new node = {
        left = null,
        right = null,
        parent = null,
        balance = 0,
        key = t
    }

function insert(ref node root, key t) -> ref node:
    if root == null:
        return new_node(t)

    current = root
    while current is not null:
        if t < current.key:
            if current.left == null:
                current.left = new_node(t)
                current.left.parent = current
                current = current.left
                break
            current = current.left

        else if t > current.key:
            if current.right == null:
                current.right = new_node(t)
                current.right.parent = current
                current = current.right
                break
            current = current.right

        else:
            return root  # ключ уже существует

    # Поднимаемся вверх и балансируем
    while current is not null:
        parent = current.parent

        if parent is not null:  # Если есть родитель, обновляем его баланс
            if current == parent.left:
                parent.balance += 1
            else:
                parent.balance -= 1

            if parent.balance == 0: # высота не изменилась
                break

            else if parent.balance == 1 or parent.balance == -1:  # продолжаем подъем
                current = parent
                continue

            else if parent.balance == 2:  # нарушен баланс влево
                if parent.left.balance == 1:
                    new_root = rotate_right(parent)
                else:
                    new_root = big_rotate_right(parent)

            else if parent.balance == -2:  # нарушен баланс вправо
                if parent.right.balance == -1:
                    new_root = rotate_left(parent)
                else:
                    new_root = big_rotate_left(parent)

            # Обновляем ссылку у дедушки
            grandparent = parent.parent
            if grandparent is not null:
                if grandparent.left == parent:
                    grandparent.left = new_root
                else:
                    grandparent.right = new_root
            else:
                root = new_root  # обновили корень дерева

            # Решаем, продолжать ли подъем
            if new_root.balance == 0:
                break
            else:
                current = new_root

        else:  # current - корень, проверяем его баланс
            if current.balance == 2:
                if current.left.balance == 1:
                    root = rotate_right(current)
                else:
                    root = big_rotate_right(current)

            else if current.balance == -2:
                if current.right.balance == -1:
                    root = rotate_left(current)
                else:
                    root = big_rotate_left(current)

            break

    return root
`});var _r=r(lr,2);R(_r,{children:(v,$)=>{t();var l=w("Удаление вершины");n(v,l)}});var dr=r(_r,2);x(dr,{children:(v,$)=>{var l=ce(),p=c(l);h(p,{children:(a,d)=>{t();var o=le(),_=r(c(o));e(_,{m:"d"});var f=r(_,2);e(f,{m:"v"});var b=r(f,2);e(b,{m:"d"});var g=r(b,2);e(g,{m:"d"});var P=r(g,2);e(P,{m:"v"});var k=r(P,2);e(k,{m:"d"});var N=r(k,2);e(N,{m:"d"}),t(),n(a,o)}});var m=r(p,2);h(m,{children:(a,d)=>{t();var o=_e(),_=r(c(o));e(_,{m:"w"});var f=r(_,2);e(f,{m:"w.\\code{balance}"});var b=r(f,2);e(b,{m:"1"});var g=r(b,2);e(g,{m:"w.\\code{balance}"});var P=r(g,2);e(P,{m:"1"}),t(),n(a,o)}});var i=r(m,2);h(i,{children:(a,d)=>{t();var o=de(),_=r(c(o));e(_,{m:"0"});var f=r(_,2);e(f,{m:"1"});var b=r(f,2);e(b,{m:"-1"});var g=r(b,2);e(g,{m:"2"});var P=r(g,2);e(P,{m:"-2"}),t(),n(a,o)}});var u=r(i,2);h(u,{children:(a,d)=>{t();var o=se(),_=r(c(o));e(_,{m:"O(\\text{высота дерева}) = O(\\log n)"}),t(),n(a,o)}}),n(v,l)}});var sr=r(dr,2);V(sr,{code:`
function delete(ref node root, key t):
    if root == null:
        return

    # Поиск удаляемого узла
    current = root
    while current is not null:
        if t < current.key:
            current = current.left
        else if t > current.key:
            current = current.right
        else:
            break  # нашли узел для удаления

    if current == null:
        throw error  # узел не найден

    start_balance_from = null  # откуда начинать балансировку

    if current.left == null and current.right == null:  # узел - лист
        if current.parent is not null:
            if current.parent.left == current:
                current.parent.left = null
            else:
                current.parent.right = null
            start_balance_from = current.parent
        else:
            root = null  # удаляем единственный узел

        free current

    else if current.left == null:  # есть только правый ребёнок
        if current.parent is not null:
            if current.parent.left == current:
                current.parent.left = current.right
            else:
                current.parent.right = current.right
            current.right.parent = current.parent
            start_balance_from = current.parent
        else:
            root = current.right
            root.parent = null

        free current

    else if current.right == null:  # есть только левый ребёнок
        if current.parent is not null:
            if current.parent.left == current:
                current.parent.left = current.left
            else:
                current.parent.right = current.left
            current.left.parent = current.parent
            start_balance_from = current.parent
        else:
            root = current.left
            root.parent = null
        free current

    else:  # оба ребёнка
        successor = current.right
        while successor.left is not null:
            successor = successor.left

        copy from successor to current

        if successor.parent.left == successor:
            successor.parent.left = successor.right
        else:
            successor.parent.right = successor.right

        if successor.right is not null:
            successor.right.parent = successor.parent

        start_balance_from = successor.parent
        free successor

    if start_balance_from is null:
        return

    current = start_balance_from
    while current is not null:
        parent = current.parent

        if parent is not null:
            if current == parent.left:
                parent.balance -= 1
            else:
                parent.balance += 1

        if current.balance == 1 or current.balance == -1:  # высота не изменилась
            break

        else if current.balance == 0:  # продолжаем подъем
            current = current.parent
            continue

        else if current.balance == 2:  # нарушен баланс влево
            if current.left.balance >= 0:
                new_root = rotate_right(current)
            else:
                new_root = big_rotate_right(current)

        else if current.balance == -2:  # нарушен баланс вправо
            if current.right.balance <= 0:
                new_root = rotate_left(current)
            else:
                new_root = big_rotate_left(current)

        # Обновляем ссылки у родителя нового корня
        if new_root.parent is not null:
            if new_root.parent.left == current:
                new_root.parent.left = new_root
            else:
                new_root.parent.right = new_root
        else:
            root = new_root

        # Решаем, продолжать ли подъем
        if new_root.balance == 0:
            current = new_root.parent
        else:
            break
`});var cr=r(sr,2);br(cr,{children:(v,$)=>{t();var l=w("Разбалансировка деревьев");n(v,l)}});var vr=r(cr,2);x(vr,{children:(v,$)=>{var l=me(),p=c(l);h(p,{children:(d,o)=>{t();var _=ve(),f=r(c(_));e(f,{m:"|\\bf v| \\le b"}),t(),n(d,_)}});var m=r(p,2);h(m,{children:(d,o)=>{t();var _=ie(),f=r(c(_));e(f,{m:"N(h)"});var b=r(f,2);e(b,{m:"h"});var g=r(b,2);e(g,{m:"N(0) = 0"});var P=r(g,2);e(P,{m:"N(1) = 1"}),t(),n(d,_)}});var i=r(m,2);h(i,{children:(d,o)=>{t();var _=fe(),f=r(c(_));e(f,{m:"|\\bf v| \\le b"});var b=r(f,2);e(b,{m:"h"}),t(),n(d,_)}});var u=r(i,2);e(u,{display:!0,m:"N(h) = 1 + N(h-1) + N(h-1-b)"});var a=r(u,2);h(a,{children:(d,o)=>{t();var _=he(),f=r(c(_));e(f,{m:"N(h)"});var b=r(f,2);e(b,{m:"h"}),t(),n(d,_)}}),n(v,l)}});var ir=r(vr,2);kr(ir,{children:(v,$)=>{var l=ye(),p=c(l);x(p,{children:(u,a)=>{var d=ge(),o=c(d);h(o,{children:(y,A)=>{t();var L=pe(),G=r(c(L));e(G,{m:"N(h)"});var O=r(G,2);e(O,{m:"h \\ge 0"}),t(),n(y,L)}});var _=r(o,2);e(_,{display:!0,m:"G(x) = \\sum_{h=0}^\\oo N(h) \\cdot x^h"});var f=r(_,2);h(f,{children:(y,A)=>{t();var L=ue(),G=r(c(L));e(G,{m:"N(h) = 1 + N(h-1) + N(h-1-b)"}),n(y,L)}});var b=r(f,2);e(b,{display:!0,m:"G(x) = \\sum_{h=0}^\\oo \\big(1 + N(h-1) + N(h-1-b) \\big) \\cdot x^h = \\frac{1}{1-x} + x \\cdot G(x) + x^{b+1} \\cdot G(x)"});var g=r(b,2);h(g,{children:(y,A)=>{t();var L=w("Мы получили производящую функцию");n(y,L)}});var P=r(g,2);e(P,{display:!0,m:"G(x) = \\frac{1}{(1-x) \\cdot \\big( 1 - x - x^{b+1} \\big)}"});var k=r(P,2);h(k,{children:(y,A)=>{t();var L=be(),G=r(c(L));e(G,{m:"G(x)"});var O=r(G,2);e(O,{m:"1"});var hr=r(O,2);e(hr,{m:"b+1"});var mr=r(hr,2);e(mr,{m:"\\rho_k"});var pr=r(mr,2);e(pr,{m:"\\rho_k"});var ur=r(pr,2);e(ur,{m:"1-x-x^{b+1} = 0"});var xr=r(ur,2);e(xr,{m:"G(x)"}),t(),n(y,L)}});var N=r(k,2);e(N,{display:!0,m:"G(x) = - \\frac{1}{1-x} + \\sum_{k=0}^b \\frac{1}{(\\rho_k - 1) \\cdot (b \\rho_k - b - 1)} \\cdot \\frac{1}{1-x/\\rho_k}"}),n(u,d)}});var m=r(p,2);x(m,{children:(u,a)=>{var d=Pe(),o=c(d);h(o,{children:(f,b)=>{t();var g=$e(),P=r(c(g));e(P,{m:"\\phi_k = 1/\\rho_k"});var k=r(P,2);e(k,{m:"\\phi_k^{b+1} - \\phi_k^b - 1 = 0"});var N=r(k,2);e(N,{m:"G(x)"}),t(),n(f,g)}});var _=r(o,2);e(_,{display:!0,m:"G(x) = - \\frac{1}{1-x} + \\sum_{k=0}^b \\frac{\\phi_k^2}{(\\phi_k - 1) \\cdot (b \\phi_k - b + \\phi_k)} \\cdot \\frac{1}{1 - \\phi_k \\cdot x}"}),n(u,d)}});var i=r(m,2);x(i,{children:(u,a)=>{var d=ke(),o=c(d);h(o,{children:(g,P)=>{t();var k=xe(),N=r(c(k));e(N,{m:"N(h)"});var y=r(N,2);e(y,{m:"x^h"});var A=r(y,2);e(A,{m:"G(x)"}),t(),n(g,k)}});var _=r(o,2);e(_,{display:!0,m:"N(h) = -1 + \\sum_{k=0}^b \\frac{\\phi_k^{h+2}}{(\\phi_k - 1) \\cdot (b \\phi_k - b + \\phi_k)}"});var f=r(_,2);h(f,{children:(g,P)=>{t();var k=we(),N=r(c(k));e(N,{m:"N(h)"});var y=r(N,2);e(y,{m:"\\phi"}),t(),n(g,k)}});var b=r(f,2);e(b,{display:!0,m:"N(h) = \\frac{\\phi^2}{(\\phi - 1) \\cdot (b \\phi - b + \\phi)} \\cdot \\phi^h - 1 + O \\big( \\phi^{-h} \\big)"}),n(u,d)}}),n(v,l)}});var fr=r(ir,2);x(fr,{children:(v,$)=>{var l=Ge(),p=c(l);h(p,{children:(u,a)=>{t();var d=Ne(),o=r(c(d));e(o,{m:"N(h) = n"}),t(),n(u,d)}});var m=r(p,2);e(m,{display:!0,m:`h = \\frac{1}{\\log \\phi} \\cdot \\log n - \\frac{1}{\\log \\phi} \\cdot
          \\left( \\frac{\\phi^2}{(\\phi - 1) \\cdot (b \\phi - b + \\phi)} \\right)
                  + \\frac{1}{n \\cdot \\log \\phi} + O \\left( \\frac{1}{n^2} \\right)`});var i=r(m,2);h(i,{children:(u,a)=>{t();var d=Le(),o=r(c(d));e(o,{m:"h = O \\big( \\log n \\big)"});var _=r(o,2);e(_,{m:"b"}),t(),n(u,d)}}),n(v,l)}});var Pr=r(fr,2);br(Pr,{children:(v,$)=>{t();var l=w("Слабые AVL деревья");n(v,l)}}),n($r,C)}export{Ee as component};
