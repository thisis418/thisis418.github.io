import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as n,a as v,b as a,s as r,n as e,t as R}from"../chunks/BWp35gWV.js";import{T as ir}from"../chunks/CR7k0xtG.js";import{P as B}from"../chunks/DPzc5wQr.js";import{P as l}from"../chunks/B7flgP-x.js";import{S as L}from"../chunks/CBbFRhrb.js";import{M as o}from"../chunks/BqyEoRxA.js";import{C as vr}from"../chunks/BmgYHZay.js";import{L as mr}from"../chunks/DDpIWRRY.js";import{H as lr}from"../chunks/DXKx2xvL.js";import{C as O}from"../chunks/BvAJckrt.js";var sr=n(`В разделе <!> мы убедились, что деревья облегчают понимание бинарного поиска и его модификаций.
    Деревья там вводились не явно, а как иллюстрация дерева решений при выполнении алгоритмов.
    Явная структура дерева помогает обрести дополнительные возможности в виде быстрой вставки и удаления элементов.`,1),pr=n(`<b>Бинарное дерево поиска</b> (BST, binary search tree) &mdash; бинарное дерево,
    в котором для каждого узла все узлы левого поддерева меньше его, и все узлы правого поддерева больше его.
    BST позволяет добавлять, удалять и искать элементы за время <!>.`,1),cr=n("<!> <!>",1),$r=n("<b>Обход по порядку</b> (inorder)",1),fr=n(`Необходимо вывести все узлы BST в отсортированном порядке.
    Для этого, по свойству BST, необходимо обойти в отсортированном порядке левое от корня поддерево,
    затем пройти по корню, затем обойти в отсортированном порядке правое от корня поддерево.
    Временная сложность <!> при <!> на итерацию.`,1),jr=n("<!> <!>",1),hr=n("<b>Прямой обход</b> (preorder)",1),gr=n(`Необходимо вывести все узлы BST в порядке: вершина, все левое поддерево, все правое поддерево.
    Временная сложность <!> при <!> на итерацию.`,1),ur=n("<!> <!>",1),br=n("<b>Обратный обход</b> (postorder)",1),Pr=n(`Необходимо вывести все узлы BST в порядке: все левое поддерево, все правое поддерево, вершина.
    Временная сложность <!> при <!> на итерацию.`,1),qr=n(`Такой обход полезен, например при удалении всех вершин, ведь сначала обходятся вершины без детей,
    а дети всех последующих вершин гарантированно были выведены ранее.
    Поэтому можно освобождать память без риска словить <!>.`,1),xr=n("<!> <!> <!>",1),kr=n(`Как мы уже убедились, эффективность алгоритмов сильно зависит от структуры дерева.
    А поскольку бинарных деревьев поиска, построенных на заданном массиве длины <!> много,
    аж целых <!> штук,
    встаёт вопрос о выборе оптимального бинарного дерева поиска для ключей с заданными частотами.`,1),yr=n(`Давайте для начала поймём, как считать оптимальность.
    Пусть <!>, то есть массив состоит из <!> ключей <!>,
    и <!>. Пусть также вероятности ключей <!> соответственно.
    Всего возможно <!> деревьев`,1),Kr=n("<!> <!>",1),wr=n("Итак, мы ищем в бинарном дереве поиска с <!> ключами <!> ключ <!>",1),Tr=n("<!> <!>",1),Br=n("Определим <!> вероятностей <!> и <!>:",1),Rr=n(`Обозначим за <!> ожидаемое количество сравнений при поиске,
    а точнее сумму количеств сравнений при успешном и неудачном поиске.
    Получаем формулу`,1),Ar=n(`здесь <!> &mdash; узел с номером <!> при in-order обходе дерева,
    и <!> &mdash; фиктивный лист с номером <!>.`,1),Cr=n(`Ожидаемое количество сравнений при поиске <!> будем называть <b>ценой дерева</b>.
    Оптимальное дерево будет иметь наименьшую цену.
    При этом можно убрать требование на то, что сумма вероятностей должна быть <!>,
    и рассматривать произвольный набор чисел <!>,
    который далее буду именовать <b>весами</b> дерева.`,1),Sr=n("<!> <!> <!> <!> <!> <!> <!> <!>",1),Or=n(`Как же находить оптимальные деревья?
    В лоб минимизировать <!> не получится &mdash; задача вычислительно очень сложная.`,1),Hr=n(`Пусть <!> &mdash; цена оптимального поддерева, содержащего ключи
    с <!> по <!> с весами <!>.
    Пусть также <!> &mdash; сумма
    этих весов.
    Оба показателя определены для <!>.`,1),Lr=n("Минимально возможная цена дерева с корнем <!> равна <!>. Значит",1),Mr=n(`Обозначим за <!> при <!> множество всех <!>,
    при которых достигается минимум в формуле динамики.
    Это множество определяет корни оптимальных поддеревьев.`,1),zr=n(`Теперь можем вычислять значения <!> с помощью восходящего динамического программирования,
    рассматривая интервалы <!> в порядке от <!> до <!>.`,1),Dr=n(`Нам нужно посчитать значения <!> для всех <!>.
    Всего нам потребуется ячеей памяти`,1),Er=n(`Каждый подсчёт <!> требует <!> выполнений блока минимизации,
    значит всего для вычисления всей динамики понадобится операций`,1),Fr=n(`Итого на подсчёт динамики нам нужно <!> ячеек памяти
    и время <!>.`,1),Gr=n("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Ir=n("Мы можем использовать <b>оптимизацию Кнута</b> и добиться временной сложности <!>.",1),Jr=n("Введём для произвольных множеств действительных чисел <!> и <!> отношение <!>:",1),Nr=n(`На русский язык это отношение можно перевести так:
    &laquo;если какой-то элемент <!> из множества <!> меньше какого-то элемента <!> из множества <!>,
    то эти два элемента должны принадлежать обоим множествам одновременно&raquo;.
    Другими словами, минимальный элемент объединения <!> лежит в <!>,
    если <!>.`,1),Qr=n("По индукции по <!> доказывается следующее &laquo;неравенство&raquo; для <!>",1),Ur=n(`Можно не хранить всё <!>, а брать только одного представителя <!>.
    Наше &laquo;неравенство&raquo; для множеств <!> превращается в неравенство для представителей <!>:`,1),Vr=n(`Получается, что в рекуррентной формуле при вычислении минимального <!> можно брать
    всего <!> значений от <!> до <!> вместо <!> значений от <!> до <!>.`,1),Wr=n("Для интервала фиксированной длины <!> общее количество проверяемых значений <!> при вычислении всех <!> равно",1),Xr=n("Тогда общее количество проверяемых значений <!> равно",1),Yr=n(`Точное значение зависит от <!>, поэтому в общем виде его вычислить нельзя.
    Грубую оценку можно получить, оценив величину <!>, поэтому <!>.`,1),Zr=n("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),ro=n(`Нам даны <!> весов <!>.
    Алгоритм будет строить оптимальное бинарное дерево поиска, при этом дерево будет представлено как каскад вложенных поддеревьев.`,1),oo=n("<!> <!>",1),eo=n(`Алгоритм рабочий, но, к сожалению, для больших <!> не подходит.
    Поскольку алгоритм требует <!> ячейки памяти для хранения цен, в <!> ГБ оперативной памяти сможет поместиться расчёт для <!>.`,1),ao=n("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function jo(_r){var M=ao(),z=v(M);ir(z,{title:"Бинарные деревья поиска"});var D=r(z,2);B(D,{children:(p,y)=>{l(p,{children:(d,$)=>{e();var f=sr(),m=r(v(f));mr(m,{to:"/search/simple-search/comparison-search",children:(c,t)=>{e();var s=R("Поиск сравнениями");a(c,s)},$$slots:{default:!0}}),e(),a(d,f)}})}});var E=r(D,2);L(E,{children:(p,y)=>{e();var d=R("Бинарное дерево поиска");a(p,d)}});var F=r(E,2);B(F,{children:(p,y)=>{var d=cr(),$=v(d);l($,{children:(m,c)=>{var t=pr(),s=r(v(t),2);o(s,{m:"O(\\text{высота дерева})"}),e(),a(m,t)}});var f=r($,2);l(f,{children:(m,c)=>{e();var t=R(`Бинарное дерево поиска построить на любом отношении тотального порядка.
    Это отношение порядка может быть задано не на самих данных, а на их ключах.`);a(m,t)}}),a(p,d)}});var G=r(F,2);L(G,{children:(p,y)=>{e();var d=R("Обходы бинарного дерева");a(p,d)}});var I=r(G,2);B(I,{children:(p,y)=>{var d=jr(),$=v(d);l($,{children:(m,c)=>{var t=$r();e(),a(m,t)}});var f=r($,2);l(f,{children:(m,c)=>{e();var t=fr(),s=r(v(t));o(s,{m:"\\Theta(n)"});var u=r(s,2);o(u,{m:"O(1)"}),e(),a(m,t)}}),a(p,d)}});var J=r(I,2);O(J,{code:`
iterator inorder(node root):
    if root == none:
        stop

    yield from inorder(root.left)
    yield root
    yield from inorder(root.right)
`});var N=r(J,2);B(N,{children:(p,y)=>{var d=ur(),$=v(d);l($,{children:(m,c)=>{var t=hr();e(),a(m,t)}});var f=r($,2);l(f,{children:(m,c)=>{e();var t=gr(),s=r(v(t));o(s,{m:"\\Theta(n)"});var u=r(s,2);o(u,{m:"O(1)"}),e(),a(m,t)}}),a(p,d)}});var Q=r(N,2);O(Q,{code:`
iterator preorder(node root):
    if root == none:
        stop

    yield root
    yield from preorder(root.left)
    yield from preorder(root.right)
`});var U=r(Q,2);B(U,{children:(p,y)=>{var d=xr(),$=v(d);l($,{children:(c,t)=>{var s=br();e(),a(c,s)}});var f=r($,2);l(f,{children:(c,t)=>{e();var s=Pr(),u=r(v(s));o(u,{m:"\\Theta(n)"});var w=r(u,2);o(w,{m:"O(1)"}),e(),a(c,s)}});var m=r(f,2);l(m,{children:(c,t)=>{e();var s=qr(),u=r(v(s));vr(u,{language:"cpp",c:"nullptr"}),e(),a(c,s)}}),a(p,d)}});var V=r(U,2);O(V,{code:`
iterator postorder(node root):
    if root == none:
        stop

    yield from postorder(root.left)
    yield from postorder(root.right)
    yield root
`});var W=r(V,2);lr(W,{anchor:"optimal-trees",children:(p,y)=>{e();var d=R("Оптимальные деревья");a(p,d)}});var X=r(W,2);L(X,{anchor:"optimal-trees-building",children:(p,y)=>{e();var d=R("Построение оптимальных деревьев");a(p,d)}});var Y=r(X,2);B(Y,{children:(p,y)=>{l(p,{children:(d,$)=>{e();var f=kr(),m=r(v(f));o(m,{m:"n"});var c=r(m,2);o(c,{m:"\\binom{2n}{n} \\big/ (n+1)"}),e(),a(d,f)}})}});var Z=r(Y,2);B(Z,{children:(p,y)=>{var d=Kr(),$=v(d);l($,{children:(m,c)=>{e();var t=yr(),s=r(v(t));o(s,{m:"n = 3"});var u=r(s,2);o(u,{m:"3"});var w=r(u,2);o(w,{m:"K_1, K_2, K_3"});var q=r(w,2);o(q,{m:"K_1 < K_2 < K_3"});var T=r(q,2);o(T,{m:"p_1, p_2, p_3"});var P=r(T,2);o(P,{m:"5"}),e(),a(m,t)}});var f=r($,2);l(f,{children:(m,c)=>{e();var t=R("наверное картинка");a(m,t)}}),a(p,d)}});var rr=r(Z,2);B(rr,{children:(p,y)=>{var d=Tr(),$=v(d);l($,{children:(m,c)=>{e();var t=R(`Интересует нас как успешный, так и неудачный поиск.
    В некоторых специфических задачах неудачный поиск даже являются определяющим, причём настолько,
    что при анализе эффективности успешным поиском пренебрегают.`);a(m,t)}});var f=r($,2);l(f,{children:(m,c)=>{e();var t=wr(),s=r(v(t));o(s,{m:"n"});var u=r(s,2);o(u,{m:"K_1, K_2, \\dotsc, K_n"});var w=r(u,2);o(w,{m:"K"}),a(m,t)}}),a(p,d)}});var or=r(rr,2);B(or,{children:(p,y)=>{var d=Sr(),$=v(d);l($,{children:(q,T)=>{e();var P=Br(),K=r(v(P));o(K,{m:"2n+1"});var g=r(K,2);o(g,{m:"p_1, p_2, p_3, \\dotsc, p_{n-1}, p_n"});var x=r(g,2);o(x,{m:"q_0, q_1, q_2, \\dotsc, q_{n-1}, q_n"}),e(),a(q,P)}});var f=r($,2);o(f,{display:!0,m:`\\align{
          p_j &= \\prob ( K_j = K \\bigr) \\\\!
          q_j &= \\prob ( K_j < K < K_{j+1} ) \\quad \\text{при этом}~ K_0 = -\\oo ~\\text{и}~ K_{n+1} = +\\oo
          }`});var m=r(f,2);l(m,{children:(q,T)=>{e();var P=R("Получается, что");a(q,P)}});var c=r(m,2);o(c,{display:!0,m:"p_1 + p_2 + \\dotsb + p_n + q_0 + q_1 + \\dotsb + q_n = 1"});var t=r(c,2);l(t,{children:(q,T)=>{e();var P=Rr(),K=r(v(P));o(K,{m:"C"}),e(),a(q,P)}});var s=r(t,2);o(s,{display:!0,m:`C = \\sum_{j=1}^n p_j \\cdot \\bigl( \\depth \\boxed{j} + 1 \\bigr)
            + \\sum_{k=0}^n q_k \\cdot \\depth \\weakboxed{k}`});var u=r(s,2);l(u,{children:(q,T)=>{e();var P=Ar(),K=r(v(P));o(K,{m:"\\boxed{j}"});var g=r(K,2);o(g,{m:"j"});var x=r(g,2);o(x,{m:"\\weakboxed{k}"});var _=r(x,2);o(_,{m:"k+1"}),e(),a(q,P)}});var w=r(u,2);l(w,{children:(q,T)=>{e();var P=Cr(),K=r(v(P));o(K,{m:"C"});var g=r(K,4);o(g,{m:"1"});var x=r(g,2);o(x,{m:"(p_1, p_2, \\dotsc, p_n,~ q_0, q_1, \\dotsc, q_n)"}),e(3),a(q,P)}}),a(p,d)}});var er=r(or,2);B(er,{children:(p,y)=>{var d=Gr(),$=v(d);l($,{children:(g,x)=>{e();var _=Or(),h=r(v(_));o(h,{m:"C"}),e(),a(g,_)}});var f=r($,2);l(f,{children:(g,x)=>{e();var _=R(`Важный факт, делающий возможным достаточно эффективные алгоритмы:
    все поддеревья оптимального дерева тоже оптимальны.
    Запахло динамикой.`);a(g,_)}});var m=r(f,2);l(m,{children:(g,x)=>{e();var _=Hr(),h=r(v(_));o(h,{m:"c(i, j)"});var i=r(h,2);o(i,{m:"i+1"});var j=r(i,2);o(j,{m:"j"});var b=r(j,2);o(b,{m:"(p_{i+1}, p_{i+2}, \\dotsc, p_j,~ q_i, q_{i+1}, \\dotsc, q_j)"});var k=r(b,2);o(k,{m:"w(i, j) = p_{i+1} + p_{i+2} + \\dotsb + p_j + q_i + q_{i+1} + \\dotsb + q_j"});var A=r(k,2);o(A,{m:"0 \\le i \\le j \\le n"}),e(),a(g,_)}});var c=r(m,2);l(c,{children:(g,x)=>{e();var _=Lr(),h=r(v(_));o(h,{m:"\\boxed{k}"});var i=r(h,2);o(i,{m:"w(i, j) + c(i, k-1) + c(k, j)"}),e(),a(g,_)}});var t=r(c,2);o(t,{display:!0,m:`\\align{
             c(i, i) &= 0 \\\\
             c(i, j) &= w(i, j) + \\min_{i < k \\le j} \\bigl( c(i, k-1) + c(k, j) \\bigr) \\quad \\text{при}~ i < j
         }`});var s=r(t,2);l(s,{children:(g,x)=>{e();var _=Mr(),h=r(v(_));o(h,{m:"R(i, j)"});var i=r(h,2);o(i,{m:"i < j"});var j=r(i,2);o(j,{m:"k"}),e(),a(g,_)}});var u=r(s,2);l(u,{children:(g,x)=>{e();var _=zr(),h=r(v(_));o(h,{m:"c(i, j)"});var i=r(h,2);o(i,{m:"j - i"});var j=r(i,2);o(j,{m:"1"});var b=r(j,2);o(b,{m:"n"}),e(),a(g,_)}});var w=r(u,2);l(w,{children:(g,x)=>{e();var _=Dr(),h=r(v(_));o(h,{m:"c(i, j)"});var i=r(h,2);o(i,{m:"0 \\le i \\le j \\le n"}),e(),a(g,_)}});var q=r(w,2);o(q,{display:!0,m:"\\sum_{0 \\le i \\le j \\le n} 1 = \\sum_{i=0}^n \\sum_{j=i}^n 1 = \\frac{(n+1)(n+2)}{2}"});var T=r(q,2);l(T,{children:(g,x)=>{e();var _=Er(),h=r(v(_));o(h,{m:"\\min_{i < k \\le j} (\\cdots)"});var i=r(h,2);o(i,{m:"j - i"}),e(),a(g,_)}});var P=r(T,2);o(P,{display:!0,m:"\\sum_{i=0}^{n-1} \\sum_{j=i+1}^n (j-i) = \\frac{n (n+1) (n+2)}{6}"});var K=r(P,2);l(K,{children:(g,x)=>{e();var _=Fr(),h=r(v(_));o(h,{m:"(n+1)(n+2)/2 = O \\bigl( n^2 \\bigr)"});var i=r(h,2);o(i,{m:"n (n+1) (n+2) / 6 = O \\bigl( n^3 \\bigr)"}),e(),a(g,_)}}),a(p,d)}});var ar=r(er,2);B(ar,{children:(p,y)=>{var d=Zr(),$=v(d);l($,{children:(_,h)=>{e();var i=Ir(),j=r(v(i),3);o(j,{m:"O \\bigl( n^2 \\bigr)"}),e(),a(_,i)}});var f=r($,2);l(f,{children:(_,h)=>{e();var i=Jr(),j=r(v(i));o(j,{m:"A"});var b=r(j,2);o(b,{m:"B"});var k=r(b,2);o(k,{m:"\\le"}),e(),a(_,i)}});var m=r(f,2);o(m,{display:!0,m:"A \\le B \\defequiv (a \\in A \\land b \\in B \\land a < b) \\implies (a \\in B \\land b \\in A)"});var c=r(m,2);l(c,{children:(_,h)=>{e();var i=Nr(),j=r(v(i));o(j,{m:"b"});var b=r(j,2);o(b,{m:"B"});var k=r(b,2);o(k,{m:"a"});var A=r(k,2);o(A,{m:"A"});var C=r(A,2);o(C,{m:"A \\union B"});var S=r(C,2);o(S,{m:"A"});var H=r(S,2);o(H,{m:"A \\le B"}),e(),a(_,i)}});var t=r(c,2);l(t,{children:(_,h)=>{e();var i=Qr(),j=r(v(i));o(j,{m:"j-i"});var b=r(j,2);o(b,{m:"R(i, j)"}),a(_,i)}});var s=r(t,2);o(s,{display:!0,m:"R(i, j-1) \\le R(i, j) \\le R(i+1, j) \\quad \\text{для}~ j - i \\ge 2"});var u=r(s,2);l(u,{children:(_,h)=>{e();var i=Ur(),j=r(v(i));o(j,{m:"R(i, j)"});var b=r(j,2);o(b,{m:"r(i, j) \\in R(i, j)"});var k=r(b,2);o(k,{m:"R"});var A=r(k,2);o(A,{m:"r"}),e(),a(_,i)}});var w=r(u,2);o(w,{display:!0,m:"r(i, j-1) \\le r(i, j) \\le r(i+1, j) \\quad \\text{для}~ j - i \\ge 2"});var q=r(w,2);l(q,{children:(_,h)=>{e();var i=Vr(),j=r(v(i));o(j,{m:"k"});var b=r(j,2);o(b,{m:"r(i+1, j) - r(i, j-1) + 1"});var k=r(b,2);o(k,{m:"r(i, j-1)"});var A=r(k,2);o(A,{m:"r(i+1, j)"});var C=r(A,2);o(C,{m:"j-i"});var S=r(C,2);o(S,{m:"i+1"});var H=r(S,2);o(H,{m:"j"}),e(),a(_,i)}});var T=r(q,2);l(T,{children:(_,h)=>{e();var i=Wr(),j=r(v(i));o(j,{m:"j-i = d"});var b=r(j,2);o(b,{m:"k"});var k=r(b,2);o(k,{m:"c(i, j)"}),e(),a(_,i)}});var P=r(T,2);o(P,{display:!0,m:"T(d) = \\sum_{i=0}^{n-d} \\bigl( r(i+1, i+d) - r(i, i+d-1) + 1 \\bigr) = r(n-d+1, n) - r(0, d-1) + (n-d+1)"});var K=r(P,2);l(K,{children:(_,h)=>{e();var i=Xr(),j=r(v(i));o(j,{m:"k"}),e(),a(_,i)}});var g=r(K,2);o(g,{display:!0,m:"T = \\sum_{d=1}^n T(d) = \\sum_{d=1}^n r(n-d+1, n) - \\sum_{d=1}^n r(0, d-1) + \\frac{n \\, (n+1)}{2}"});var x=r(g,2);l(x,{children:(_,h)=>{e();var i=Yr(),j=r(v(i));o(j,{m:"r(i, j)"});var b=r(j,2);o(b,{m:"T(d) \\le 2n"});var k=r(b,2);o(k,{m:"T \\le 2n^2"}),e(),a(_,i)}}),a(p,d)}});var nr=r(ar,2);B(nr,{children:(p,y)=>{var d=oo(),$=v(d);l($,{children:(m,c)=>{e();var t=R("Давайте теперь составим алгоритм.");a(m,t)}});var f=r($,2);l(f,{children:(m,c)=>{e();var t=ro(),s=r(v(t));o(s,{m:"2n+1"});var u=r(s,2);o(u,{m:"(p_1, p_2, \\dotsc, p_n,~ q_0, q_1, \\dotsc, q_n)"}),e(),a(m,t)}}),a(p,d)}});var tr=r(nr,2);O(tr,{code:`
function knuth_bst(array[real] p, array[real] q)
               -> (matrix[real] c, matrix[int] r, matrix[real] w):

    # p: array of n probabilities for successful search [p1, p2, ..., pn]
    # q: array of n+1 probabilities for unsuccessful search [q0, q1, ..., qn]

    # Returns
    # c: cost matrix
    # r: root matrix
    # w: weight matrix

    matrix[real] c[n+1, n+1]
    matrix[int] r[n+1, n+1]
    matrix[real] w[n+1, n+1]

    for int i = 0; i <= n; i++:
        c[i][i] = 0
        w[i][i] = q[i]

        for int j = i+1; j <= n; j++:
            w[i][j] = w[i][j-1] + p[j-1] + q[j]

    for int j = 1; j <= n; j++:
        int i = j - 1
        c[i][j] = w[i][j]
        r[i][j] = j

    real current_val
    real min_val
    int min_k

    for int d = 2; d <= n; d++:
        for int j = d; j <= n; j++:
            int i = j - d

            min_val = inf
            min_k = -1

            for int k = r[i][j-1]; k <= r[i+1][j]; k++:
                current_val = c[i][k-1] + c[k][j]
                if current_val < min_val:
                    min_val = current_val
                    min_k = k

            c[i][j] = w[i][j] + min_val
            r[i][j] = min_k

    return c, r, w

struct tree:
    int root
    tree left
    tree right

function build_optimal_tree(matrix[int] r, int i, int j) -> tree:
    # r: root matrix
    # i, j: subtree indexes

    if i == j:
        return empty

    return tree(
        root = r[i][j],
        left = build_optimal_tree(r, i, r[i][j] - 1),
        right = build_optimal_tree(r, r[i][j], j)
    )

input array[real] p[n]
input array[real] q[n+1]

c, r, w = knuth_optimal_bst(p, q)
tree bst = build_optimal_tree(r, 0, n)
output bst
`});var dr=r(tr,2);B(dr,{children:(p,y)=>{l(p,{children:(d,$)=>{e();var f=eo(),m=r(v(f));o(m,{m:"n"});var c=r(m,2);o(c,{m:"(n+1)(n+2)/2"});var t=r(c,2);o(t,{m:"8"});var s=r(t,2);o(s,{m:"n \\le 65\\,535"}),e(),a(d,f)}})}}),a(_r,M)}export{jo as component};
