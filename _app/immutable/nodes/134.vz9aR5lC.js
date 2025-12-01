import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as c,a as h,b as t,s as r,n as e,t as P}from"../chunks/BWp35gWV.js";import{T as Hr}from"../chunks/CR7k0xtG.js";import{P as z}from"../chunks/DPzc5wQr.js";import{P as m}from"../chunks/B7flgP-x.js";import{M as o}from"../chunks/BqyEoRxA.js";import{L as wr}from"../chunks/DDpIWRRY.js";import{C as w}from"../chunks/BmgYHZay.js";import{C as H}from"../chunks/BvAJckrt.js";import{H as br}from"../chunks/DXKx2xvL.js";import{S as F}from"../chunks/CBbFRhrb.js";import{D as Fr}from"../chunks/DlTIf4aM.js";/* empty css                */import{T as qr}from"../chunks/y0AHHn4v.js";import{P as Cr}from"../chunks/BBkyo9uE.js";/* empty css                *//* empty css                *//* empty css                */var Or=c(`Давайте вспомним, как работает <!>.
    Биномиальная куча представляет собой лес из куч.
    Слияние двух биномиальных куч реализовывалось соединением списков корней деревьев в обоих лесах.
    Потом мы, конечно, восстанавливали свойства биномиальной кучи после слияния,
    что как раз и давало нам временную сложность <!>.
    Но сама идея реализации слияния двух куч через обычное соединение списков корней не такая уж и плохая.`,1),Tr=c("<!> <!>",1),Ar=c(`<b>Фибоначчиева куча</b> &mdash; набор деревьев, каждое из которых удовлетворяет свойству кучи:
    приоритет каждого узла не меньше приоритетов его детей.`,1),Lr=c("<b>Степенью</b> фибоначчиевой кучи <!> будем называть максимальную степень узла в этой куче:",1),Mr=c("<!> <!>",1),Sr=c("<!> <!>",1),Br=c("<!> <!>",1),Er=c(`При анализе времени работы операций будем использовать метод потенциалов.
    Пусть потенциал кучи <!> будет равен`,1),Gr=c(`где <!> &mdash; количество деревьев в корневом списке кучи <!>,
    и <!> &mdash; количество отмеченных вершин в куче <!>,
    то есть узлов, у которых поле <!> установлено в <!>.`,1),Ir=c("<!> <!> <!>",1),Jr=c(`Для создания пустой кучи достаточно просто создать объект класса <!>,
    у которого <!> и <!>.`,1),Kr=c(`Потенциал только что созданной кучи равен <!>,
    потому что в ней нет ни деревьев, ни тем более помеченных вершин.`,1),Nr=c("Сама операция создания пустой кучи выполняется за <!>.",1),Qr=c("<!> <!>",1),Rr=c(`Потенциал не меняется, поскольку до слияния куч <!> и <!> общий потенциал был равен <!>,
    а после слияния потенциал у полученной кучи равен <!>.
    Общее число узлов в корневых списках и общее число помеченных вершин остаётся тем же.`,1),Ur=c("Временная сложность работы операции слияния <!>.",1),Vr=c("<!> <!>",1),Wr=c("<!> <!>",1),Xr=c(`В отличие от вставки в биномиальную кучу, здесь мы не выполняем никаких операций объединения деревьев.
    То есть если мы подряд вставим <!> новых узлов в фибоначчиеву кучу,
    то список корней увеличится на <!> элементов.`,1),Yr=c(`После этой операции в корневой список добавилась один узел, значит потенциал увеличился на <!>.
    Время работы операции вставки составляет <!>.`,1),Zr=c(`Максимум в куче находится по ссылке <!>.
    Можно разрушить дерево с корнем <!>, удалить узел <!>,
    а получившийся список детей рассмотреть как новую кучу.
    Тогда просто слить эту кучу из детей с исходной кучей без дерева с корнем в <!>.`,1),re=c(`Проблема в том, что после удаления старого максимума нам нужно найти новый максимум.
    Также именно на этом этапе нам нужно перестроить кучу, чтобы деревьев в ней было не слишком много,
    и будущие операции занимали небольшое количество времени.
    Обе эти задачи может решить операция consolidate (уплотнение), которую я буду именовать <b>окучиванием</b>.
    Окучивание разберем чуть позже, а пока код самого извлечения:`,1),ee=c("<!> <!>",1),oe=c(`Вспомогательная операция окучивания принимает на вход фибоначчиеву кучу <!> и преобразует её таким образом, что в списке корней деревьев результирующей кучи
    будет содержаться не более <!> узлов.`,1),ae=c("<!> <!>",1),te=c(`Заведём таблицу <!>, в которой будем хранить ссылки на корни.
    Точнее, <!> будет содержать в себе ссылку на корень дерева,
    степень которого равна <!>.`,1),ne=c(`Теперь мы можем организовать процесс, аналогичный процессу слияния биномиальных куч.
    Проходимся поочередно по всем корням деревьев в кусе, смотря на его степень.
    Пусть степень текущего корня равна <!>.
    Если в ячейке <!> нет ссылки, то записываем туда ссылку на текущий корень.
    Если там что-то есть, то соединяем то дерево, на которое ссылается <!> и текущее дерево,
    и включим получившееся дерево в наш проход следующим.`,1),de=c("<!> <!> <!>",1),_e=c(`Посмотрим, сколько времени занимает операция извлечения максимума.
    Пусть до извлечения максимума в куче было <!> деревьев и <!> помеченных узлов.
    И пусть у максимального элемента в куче степень равна <!>.`,1),le=c(`До разрушения дерева с максимальным корнем потенциал кучи был равен <!>.
    После разрушения и добавления детей потенциал стал равен <!>.
    Получается, что разность потенциалов равна <!>,
    а реальная стоимость чистого извлечения равна <!>.`,1),ie=c(`После этого шага в списке корней у нас находится <!> узлов.
    После окучивания останется не более <!> деревьев.
    Тогда разность потенциалов <!>,
    а реальная стоимость окучивания <!>.`,1),ve=c(`Поскольку <!> &mdash; максимальная степень узла, то <!>.
    Получаем верхнюю оценку`,1),se=c("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),me=c(`Нам бы очень сильно хотелось, чтобы учётная стоимость операции увеличения приоритета была <!>.
    Для этого нам нужно, чтобы узел не всплывал до корня, тогда дерево не нужно будет сильно перестраивать.`,1),ce=c(`Будем следить, чтобы у каждой вершины, не входящих в корневой список, удалялось не более одного ребёнка.
    Для этого мы и заводили бинарную метку <!>.
    Если у узла <!> удаляли ребёнка, то <!>.
    По этому после вырезания ребёнка у узла этот узел помечается,
    если он ранее не был отмечен и если он не является корнем.
    Если же он был отмечен, то он тоже вырезается, и процедура уходит дальше по родителям.
    Описанная процедура последовательного вырезания отмеченных вершин называется <b>каскадным вырезанием</b>.`,1),he=c("<!> <!> <!> <!>",1),pe=c("<b>Вырезание узла.</b>"),$e=c("Когда мы вырезаем узел, мы убираем его из списка детей его родителя, уменьшаем степень родителя на <!> и вставляем его в корневой список. Обязательно нужно снять метку, так как узел стал корнём.",1),fe=c("<!> <!> <!>",1),ge=c("<b>Каскадное вырезание.</b>"),xe=c("<!> <!>",1),Pe=c(`Реальная стоимость всех этих операций описывается длиной цепочки рекурсивных вызовов.
    Обозначим эту длину за <!>.
    А сама цепочка рекурсивных вызовов соответствует цепочке помеченных узлов,
    каждый из которых является ребёнком следующего.
    Все вершины из этой цепочки помещаются в корень и остаются непомеченными,
    так что реальная стоимость всей операции увеличения приоритета равна <!>.`,1),ue=c("<!> <!> <!>",1),ye=c(`Пусть <!> &mdash; какой-то узел в фибоначчиевой куче, <!> &mdash; количество детей этого узла <!>,
    и <!> &mdash; минимально возможный размер поддерева с корнем в <!>.`,1),ze=c("Минимальный возможный размер поддерева с корнем степени <!> не меньше <!>, то есть",1),De=c("<!> <!> <!>",1),be=c(`Доказать эту лемму можно индукцией по <!>.
    База <!>: дерево состоит только из корня, <!>,
    и <!>: дерево состоит из корня и одного его ребёнка, <!>.`,1),je=c(`Пусть у узла <!> детьми являются узлы <!>,
    при этом дети упорядочены по времени добавления.
    Когда узел <!> стал ребёнком узла <!>,
    у узла <!> уже было <!> детей,
    поэтому в момент добавления <!>,
    поскольку соединяются деревья с одинаковой степенью корня.`,1),ke=c(`Далее у узла <!> могли вырезать ребёнка, если выполнялась операция увеличения приоритета.
    Но у узла <!> могли вырезать максимум одного ребёнка,
    ведь после вырезания первого ребёнка узел <!> стал помеченным,
    то есть <!>,
    а при удалении второго ребёнка сработало бы каскадное вырезание,
    и узел <!> перестал бы быть ребёнком узла <!>.
    Значит, за всё время у узла <!> могли удалить только одного ребёнка из тех,
    что были в момент добавления, то есть`,1),He=c("<!> <!> <!> <!> <!> <!> <!> <!>",1),we=c("Используем результат леммы, чтобы оценить <!>, максимальная степень узла.",1),Fe=c(`Суммарное количество узлов в куче не меньше размера поддерева с корнем в узле, имеющем максимальную степень.
    То есть, если в куче <!> элементов, то`,1),qe=c("Отсюда можно получить оценку для <!>, логарифмируя неравенство <!>",1),Ce=c("<!> <!> <!> <!> <!> <!> <!>",1),Oe=c("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Ze(jr){var O=Oe(),T=h(O);Hr(T,{title:"Фибоначчиева куча"});var A=r(T,2);z(A,{children:(_,g)=>{var a=Tr(),i=h(a);m(i,{children:(d,s)=>{e();var n=Or(),l=r(h(n));wr(l,{to:"/sorting/mergeable-heaps/binomial-heaps",children:($,x)=>{e();var f=P("биномиальная куча");t($,f)},$$slots:{default:!0}});var p=r(l,2);o(p,{m:"O(\\log n)"}),e(),t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=P(`Давайте уберем жёсткую структуру леса и каждого дерева в лесе.
    У нас получилась основа для фибоначчиевой кучи, которую можно доделать
    и превратить в приоритетную очередь с очень хорошими оценками времени работы.`);t(d,n)}}),t(_,a)}});var L=r(A,2);Fr(L,{title:"Фибоначчиева куча",children:(_,g)=>{m(_,{children:(a,i)=>{var v=Ar();e(),t(a,v)}})}});var M=r(L,2);z(M,{children:(_,g)=>{var a=Mr(),i=h(a);m(i,{children:(d,s)=>{var n=Lr(),l=r(h(n),2);o(l,{m:"H"}),e(),t(d,n)}});var v=r(i,2);o(v,{display:!0,m:"\\deg H \\defeq \\max \\{ \\deg v \\mid \\forall v \\in H \\} = D"}),t(_,a)}});var S=r(M,2);z(S,{children:(_,g)=>{var a=Sr(),i=h(a);m(i,{children:(d,s)=>{e();var n=P(`Хранить фибоначчиеву кучу будем почти так же, как биномиальную.
    Единственное, из-за свободной структуры, нам не будет хватать односвязного списка для хранения детей узла.
    Чтобы была возможность удалять узлы из произвольного места и вставлять узлы в произвольное место,
    будем хранить детей в циклическом двузвязном списке.`);t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=P(`Ещё нам понадобится хранить бинарную метку для каждой вершины.
    Это нужно для эффективной реализации операций удаления узла и изменения приоритета узла.`);t(d,n)}}),t(_,a)}});var B=r(S,2);H(B,{code:`
struct node:
    node* parent  # ссылка на родителя
    node* left    # ссылка на левого брата
    node* right   # ссылка на правого брата
    node* child   # ссылка на какого-то ребёнка

    int degree
    bool mark

    object priority
`});var E=r(B,2);z(E,{children:(_,g)=>{var a=Br(),i=h(a);m(i,{children:(d,s)=>{e();var n=P(`Для доступа ко всем деревьям леса нам достаточно всего одного указателя,
    ведь корни тоже хранятся в двусвязном списке.
    Разумно хранить именно указатель на элемент с максимальным приоритетом.
    Такой элемент всегда является корнем одного из деревьев в лесу.`);t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=P("Также будем хранить размер кучи для обеспечения константного времени получения этого размера");t(d,n)}}),t(_,a)}});var G=r(E,2);H(G,{code:`
class heap:
    int size
    node* max
`});var I=r(G,2);z(I,{children:(_,g)=>{m(_,{children:(a,i)=>{e();var v=P("Нам очень часто нужно будет объединять списки узлов, поэтому стоит оформить эту операцию как отдельную функцию");t(a,v)}})}});var J=r(I,2);H(J,{code:`
function union_lists(node* first, node* second):
    node* left = first.left
    node* right = second.right

    second.right = first
    first.left = second

    left.right = right
    right.left = left
`});var K=r(J,2);z(K,{children:(_,g)=>{var a=Ir(),i=h(a);m(i,{children:(s,n)=>{e();var l=Er(),p=r(h(l));o(p,{m:"H"}),e(),t(s,l)}});var v=r(i,2);o(v,{display:!0,m:"\\Phi(H) \\defeq t(H) + 2 \\cdot m(H)"});var d=r(v,2);m(d,{children:(s,n)=>{e();var l=Gr(),p=r(h(l));o(p,{m:"t(H)"});var $=r(p,2);o($,{m:"H"});var x=r($,2);o(x,{m:"m(H)"});var f=r(x,2);o(f,{m:"H"});var u=r(f,2);w(u,{c:"marked"});var y=r(u,2);w(y,{c:"true"}),e(),t(s,l)}}),t(_,a)}});var N=r(K,2);F(N,{children:(_,g)=>{e();var a=P("Создание пустой кучи");t(_,a)}});var Q=r(N,2);z(Q,{children:(_,g)=>{m(_,{children:(a,i)=>{e();var v=Jr(),d=r(h(v));w(d,{c:"heap"});var s=r(d,2);o(s,{m:"\\code{size} = 0"});var n=r(s,2);o(n,{m:"\\code{max} = \\code{\\htmlClass{boolean}{null}}"}),e(),t(a,v)}})}});var R=r(Q,2);H(R,{code:`
initialize(self):
    self.size = 0
    self.max = null
`});var U=r(R,2);z(U,{children:(_,g)=>{var a=Qr(),i=h(a);m(i,{children:(d,s)=>{e();var n=Kr(),l=r(h(n));o(l,{m:"0"}),e(),t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=Nr(),l=r(h(n));o(l,{m:"O(1)"}),e(),t(d,n)}}),t(_,a)}});var V=r(U,2);F(V,{children:(_,g)=>{e();var a=P("Слияние");t(_,a)}});var W=r(V,2);z(W,{children:(_,g)=>{m(_,{children:(a,i)=>{e();var v=P(`Слияние двух фибоначчиевых куч, как мы и хотели,
    состоит в обычном соединении связных списков корней деревьев в обоих кучах и обновлении указателя на максимум.`);t(a,v)}})}});var X=r(W,2);H(X,{code:`
method merge(heap self, heap other):
   if other.size == 0:
       return

   if self.size == 0:
       self.max = other.max
       self.size = other.size
       return

   union_lists(self.max, other.max)
   self.size += other.size

   if other.max > self.max:
       self.max = other.max
`});var Y=r(X,2);z(Y,{children:(_,g)=>{var a=Vr(),i=h(a);m(i,{children:(d,s)=>{e();var n=Rr(),l=r(h(n));o(l,{m:"H_1"});var p=r(l,2);o(p,{m:"H_2"});var $=r(p,2);o($,{m:"\\Phi(H_1) + \\Phi(H_2)"});var x=r($,2);o(x,{m:"\\Phi(H_1 \\union H_2) = \\Phi(H_1) + \\Phi(H_2)"}),e(),t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=Ur(),l=r(h(n));o(l,{m:"O(1)"}),e(),t(d,n)}}),t(_,a)}});var Z=r(Y,2);F(Z,{children:(_,g)=>{e();var a=P("Вставка");t(_,a)}});var rr=r(Z,2);z(rr,{children:(_,g)=>{var a=Wr(),i=h(a);m(i,{children:(d,s)=>{e();var n=P(`Вставка нового элемента в кучу очень просто реализуется слиянием.
    Создаём новую биномиальную кучу, состоящую только из одного элемента — вставляемого.
    Далее сливаем нашу новую кучу с исходной кучей, в которую вставляем элемент.`);t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=P(`Можно оптимизировать эту операцию, избавившись от парочки ветвлений и присвоений указателей.
    Нам надо просто создать новый узел и добавить его в список корней, пересчитав максимум.`);t(d,n)}}),t(_,a)}});var er=r(rr,2);H(er,{code:`
method insert(heap self, object priority):
    node new_node = {
        priority = priority,
        degree = 0,
        child = null,
        mark = false,
    }

    if size == 0:
         self.max = new_node
         self.max.left = new_node
         self.max.right = new_node
    else:
         node previous_right = self.max.right
         self.max.right = new_node
         new_node.left = self.max
         new_node.right = previous_right
         previous_right.left = node_node

    if node_node.priority > self.max.priority:
         self.max = node_node

    self.size++
`});var or=r(er,2);z(or,{children:(_,g)=>{m(_,{children:(a,i)=>{e();var v=Xr(),d=r(h(v));o(d,{m:"k"});var s=r(d,2);o(s,{m:"k"}),e(),t(a,v)}})}});var ar=r(or,2);z(ar,{children:(_,g)=>{m(_,{children:(a,i)=>{e();var v=Yr(),d=r(h(v));o(d,{m:"1"});var s=r(d,2);o(s,{m:"O(1)"}),e(),t(a,v)}})}});var tr=r(ar,2);F(tr,{children:(_,g)=>{e();var a=P("Извлечение максимума");t(_,a)}});var nr=r(tr,2);z(nr,{children:(_,g)=>{var a=ee(),i=h(a);m(i,{children:(d,s)=>{e();var n=Zr(),l=r(h(n));w(l,{c:"max"});var p=r(l,2);w(p,{c:"max"});var $=r(p,2);w($,{c:"max"});var x=r($,2);w(x,{c:"max"}),e(),t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=re();e(2),t(d,n)}}),t(_,a)}});var dr=r(nr,2);H(dr,{code:`
method extract_max(heap self) -> node:
    node z = self.max
    if z is null: return null

    if z.child is not null:
        node child = z.child
        node start_child = child

        do:
            node next_child = child.right

            # Добавляем child в корневой список
            child.parent = null
            child.left = self.max
            child.right = self.max.right
            self.max.right.left = child
            self.max.right = child

            child = next_child

        while child != start_child

    # Удаляем z из корневого списка
    z.left.right = z.right
    z.right.left = z.left

    # Обновляем self.max
    if z.right == z:  # В корневом списке был только z
        self.max = null
    else:
        self.max = z.right
        self.consolidate()

    self.size--
    return z
`});var _r=r(dr,2);F(_r,{children:(_,g)=>{e();var a=P("Окучивание");t(_,a)}});var lr=r(_r,2);z(lr,{children:(_,g)=>{var a=ae(),i=h(a);m(i,{children:(d,s)=>{e();var n=oe(),l=r(h(n));o(l,{m:"H"});var p=r(l,2);o(p,{m:"D + 1"}),e(),t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=P(`При окучивании будут соединяться пары деревьев с корнями одинаковой степенями.
    Мы будем соединять деревья до тех пор, пока в списке корней будут оставаться узлы одинаковой степени.`);t(d,n)}}),t(_,a)}});var ir=r(lr,2);z(ir,{children:(_,g)=>{var a=de(),i=h(a);m(i,{children:(s,n)=>{e();var l=te(),p=r(h(l));o(p,{m:"\\code{p} \\bigl[ 0 \\dots D \\bigr]"});var $=r(p,2);o($,{m:"\\code{p}[j]"});var x=r($,2);o(x,{m:"j"}),e(),t(s,l)}});var v=r(i,2);m(v,{children:(s,n)=>{e();var l=ne(),p=r(h(l));o(p,{m:"d"});var $=r(p,2);o($,{m:"\\code{p}[d]"});var x=r($,2);o(x,{m:"\\code{p}[d]"}),e(),t(s,l)}});var d=r(v,2);m(d,{children:(s,n)=>{e();var l=P(`Два дерева надо соединять так, чтобы сохранялось свойство кучи.
    То есть мы выбираем то дерево, у которого корень имеет максимальный приоритет, и к нему подвешиваем второе дерево.`);t(s,l)}}),t(_,a)}});var vr=r(ir,2);H(vr,{code:`
method consolidate(heap self):
    table[node*] p[]

    node* current = self.max
    node* start = self.max

    do:
        node* next = current.right
        degree = current.degree

        while p[degree] is not null:
            node* conflict = p[degree]
            if conflict.priority > current.priority:
                swap current, conflict

            # удалить узел conflict из списка корней
            conflict.left.right = conflict.right
            conflict.right.left = conflict.left
            conflict.parent = null

            # добавить к current ребёнка conflict
            conflict.parent = current
            conflict.left = conflict
            conflict.right = conflict
            if current.child == null:
                current.child = conflict
            else:
                union_lists(current.child, conflict)
            current.degree++

            p[degree] = null
            degree += 1

        p[degree] = current
        if current.priority > self.max.priority:
            self.max = current

        current = next

    while current != start
`});var sr=r(vr,2);z(sr,{children:(_,g)=>{var a=se(),i=h(a);m(i,{children:(f,u)=>{e();var y=_e(),D=r(h(y));o(D,{m:"t"});var b=r(D,2);o(b,{m:"m"});var j=r(b,2);o(j,{m:"d"}),e(),t(f,y)}});var v=r(i,2);m(v,{children:(f,u)=>{e();var y=le(),D=r(h(y));o(D,{m:"t + 2m"});var b=r(D,2);o(b,{m:"(t-1+d) + 2m"});var j=r(b,2);o(j,{m:"\\Delta \\Phi_1 = \\bigl( (t-1+d) + 2m \\bigr) - (t + 2m) = d-1"});var k=r(j,2);o(k,{m:"c_1 = d+1"}),e(),t(f,y)}});var d=r(v,2);m(d,{children:(f,u)=>{e();var y=ie(),D=r(h(y));o(D,{m:"t' = t-1+d"});var b=r(D,2);o(b,{m:"D+1"});var j=r(b,2);o(j,{m:"\\Delta \\Phi_2 \\le (D + 1 + 2m) - (t' + 2m) = D+1-t'"});var k=r(j,2);o(k,{m:"c_2 = t' + D"}),e(),t(f,y)}});var s=r(d,2);m(s,{children:(f,u)=>{e();var y=P("Получается, что суммарное изменение потенциала");t(f,y)}});var n=r(s,2);o(n,{display:!0,m:"\\Delta \\Phi = \\Delta \\Phi_1 + \\Delta \\Phi_2 \\le (d-1) + (D+1-t') = d + D - (t-1+d) = D-t+1"});var l=r(n,2);m(l,{children:(f,u)=>{e();var y=P("Получаем, что амортизированная сложность извлечения максимума вместе с окучванием");t(f,y)}});var p=r(l,2);o(p,{display:!0,m:"A = c_1 + c_2 + \\Delta \\Phi \\le (d + 1) + (t' + D) + (D - t + 1) = 2d + 2D + 1"});var $=r(p,2);m($,{children:(f,u)=>{e();var y=ve(),D=r(h(y));o(D,{m:"D = \\deg H"});var b=r(D,2);o(b,{m:"d \\le D"}),e(),t(f,y)}});var x=r($,2);o(x,{display:!0,m:"A \\le 4D + 1"}),t(_,a)}});var mr=r(sr,2);br(mr,{children:(_,g)=>{e();var a=P("Изменение приоритетов");t(_,a)}});var cr=r(mr,2);F(cr,{children:(_,g)=>{e();var a=P("Увеличение приоритета");t(_,a)}});var hr=r(cr,2);z(hr,{children:(_,g)=>{var a=he(),i=h(a);m(i,{children:(n,l)=>{e();var p=me(),$=r(h(p));o($,{m:"O(1)"}),e(),t(n,p)}});var v=r(i,2);m(v,{children:(n,l)=>{e();var p=P(`Если приоритет узла после увеличения остался меньше приоритета родителя, то ничего делать не надо.
    В противном случае будем вырезать поддерево полностью и перемещать его в корневой список.`);t(n,p)}});var d=r(v,2);m(d,{children:(n,l)=>{e();var p=P(`Если мы позволим постоянно вырезать узлы без перестраивания дерева, то дерево быстро выродится в бамбук,
    и у нас потеряются хорошие оценки на степени вершин.`);t(n,p)}});var s=r(d,2);m(s,{children:(n,l)=>{e();var p=ce(),$=r(h(p));w($,{c:"mark"});var x=r($,2);o(x,{m:"x"});var f=r(x,2);o(f,{m:"x.\\code{mark} = \\true"}),e(3),t(n,p)}}),t(_,a)}});var pr=r(hr,2);H(pr,{code:`
method promote(heap self, node* x, object new_priority):
   if new_priority > x.parent.key:
       x.priority = new_priority
       return

   node parent = x.parent
   self.cut(x)
   self.cascading_cut(parent)
`});var $r=r(pr,2);z($r,{children:(_,g)=>{var a=fe(),i=h(a);m(i,{children:(s,n)=>{var l=pe();t(s,l)}});var v=r(i,2);m(v,{children:(s,n)=>{e();var l=$e(),p=r(h(l));o(p,{m:"1"}),e(),t(s,l)}});var d=r(v,2);m(d,{children:(s,n)=>{e();var l=P(`После нам нужно обновить максимум кучи.
    Максимальный приоритет может быть или предыдущий максимальный узел, или тот узел, приоритет которого мы повышали.
    При каскадном вырезании максимум поменяться не может.`);t(s,l)}}),t(_,a)}});var fr=r($r,2);H(fr,{code:`
method cut(heap self, node* x)
   node left = x.left
   node right = x.right
   right.left = left
   left.right = right
   x.parent.degree--

   if x.parent.child == x:
       if x.right == x:
           x.parent.child
       else:
           x.parent.child = x.right

   x.right = x
   x.left = x
   x.parent = null
   x.mark = false

   union_lists(self.min, x)  # вставляем наше поддерево в корневой список
`});var gr=r(fr,2);z(gr,{children:(_,g)=>{var a=xe(),i=h(a);m(i,{children:(d,s)=>{var n=ge();t(d,n)}});var v=r(i,2);m(v,{children:(d,s)=>{e();var n=P(`Как я уже описывал, мы поднимаемся вверх по ссылкам на родителей и вырезаем все отмеченные узлы.
    Как только мы дойдем до узла, который не был помечен, мы его пометим.`);t(d,n)}}),t(_,a)}});var xr=r(gr,2);H(xr,{code:`
method cascading_cut(heap self, node* x)
   while x.mark == true:
       self.cut(x)
       x = x.parent
   x.mark = true
`});var Pr=r(xr,2);z(Pr,{children:(_,g)=>{var a=ue(),i=h(a);m(i,{children:(s,n)=>{e();var l=P(`Посмотрим, сколько времени занимает операция увеличения приоритета.
    Внутри себя эта операция вызывает еще вспомогательные операции вырезания и каскадного вырезания.`);t(s,l)}});var v=r(i,2);m(v,{children:(s,n)=>{e();var l=Pe(),p=r(h(l));o(p,{m:"c"});var $=r(p,2);o($,{m:"c"}),e(),t(s,l)}});var d=r(v,2);m(d,{}),t(_,a)}});var ur=r(Pr,2);br(ur,{children:(_,g)=>{e();var a=P("Анализ алгоритмов");t(_,a)}});var yr=r(ur,2);z(yr,{children:(_,g)=>{m(_,{children:(a,i)=>{e();var v=P("Давайте теперь оценим размеры поддеревьев.");t(a,v)}})}});var zr=r(yr,2);qr(zr,{title:"Лемма о размере поддеревьев в фибоначчиевой куче",children:(_,g)=>{var a=De(),i=h(a);m(i,{children:(s,n)=>{e();var l=ye(),p=r(h(l));o(p,{m:"x"});var $=r(p,2);o($,{m:"\\deg x"});var x=r($,2);o(x,{m:"x"});var f=r(x,2);o(f,{m:"\\size x"});var u=r(f,2);o(u,{m:"x"}),e(),t(s,l)}});var v=r(i,2);m(v,{children:(s,n)=>{e();var l=ze(),p=r(h(l));o(p,{m:"k"});var $=r(p,2);o($,{m:"F_{k+2}"}),e(),t(s,l)}});var d=r(v,2);o(d,{display:!0,m:"\\deg x = k \\implies \\size x \\ge F_{k+2}"}),t(_,a)}});var Dr=r(zr,2);Cr(Dr,{children:(_,g)=>{var a=He(),i=h(a);m(i,{children:(x,f)=>{e();var u=be(),y=r(h(u));o(y,{m:"k"});var D=r(y,2);o(D,{m:"k=0"});var b=r(D,2);o(b,{m:"\\size(x) = 1 = F_2"});var j=r(b,2);o(j,{m:"k=1"});var k=r(j,2);o(k,{m:"\\size(x) = 2 = F_3"}),e(),t(x,u)}});var v=r(i,2);m(v,{children:(x,f)=>{e();var u=je(),y=r(h(u));o(y,{m:"x"});var D=r(y,2);o(D,{m:"y_1, y_2, \\dotsc, y_k"});var b=r(D,2);o(b,{m:"y_j"});var j=r(b,2);o(j,{m:"x"});var k=r(j,2);o(k,{m:"x"});var q=r(k,2);o(q,{m:"j-1"});var C=r(q,2);o(C,{m:"\\deg y_j = j - 1"}),e(),t(x,u)}});var d=r(v,2);m(d,{children:(x,f)=>{e();var u=ke(),y=r(h(u));o(y,{m:"y_j"});var D=r(y,2);o(D,{m:"y_j"});var b=r(D,2);o(b,{m:"y_j"});var j=r(b,2);o(j,{m:"y_j.\\code{mark} = \\code{\\htmlClass{boolean}{true}}"});var k=r(j,2);o(k,{m:"y_j"});var q=r(k,2);o(q,{m:"x"});var C=r(q,2);o(C,{m:"y_j"}),e(),t(x,u)}});var s=r(d,2);o(s,{display:!0,m:"\\deg y_j \\ge j-2 \\quad\\text{для всех}~ 1 \\le j \\le k ~\\text{в любой момент после добавления}"});var n=r(s,2);m(n,{children:(x,f)=>{e();var u=P("Получается, что по предположению индукции,");t(x,u)}});var l=r(n,2);o(l,{display:!0,m:"\\size(y_j) \\ge F_{\\deg y_j + 2} \\ge F_{(j-2)+2} = F_j"});var p=r(l,2);m(p,{children:(x,f)=>{e();var u=P("Тогда");t(x,u)}});var $=r(p,2);o($,{display:!0,m:"\\size x \\ge 1 + \\sum_{j=1}^k \\size y_j \\ge 1 + \\sum_{j=1}^k F_j = F_{k+2}"}),t(_,a)}});var kr=r(Dr,2);z(kr,{children:(_,g)=>{var a=Ce(),i=h(a);m(i,{children:($,x)=>{e();var f=we(),u=r(h(f));o(u,{m:"D"}),e(),t($,f)}});var v=r(i,2);m(v,{children:($,x)=>{e();var f=Fe(),u=r(h(f));o(u,{m:"n"}),e(),t($,f)}});var d=r(v,2);o(d,{display:!0,m:"n \\ge \\size (\\text{узел степени}~ D) \\ge F_{D+2}"});var s=r(d,2);m(s,{children:($,x)=>{e();var f=qe(),u=r(h(f));o(u,{m:"D"});var y=r(u,2);o(y,{m:"n \\ge F_{D+2}"}),t($,f)}});var n=r(s,2);o(n,{display:!0,m:"\\log_\\varphi n \\ge \\log_\\varphi F_{D+2} = D + 2 - \\log_\\varphi \\sqrt{5} + O(\\varphi^{-2D}) \\implies D \\le \\log_\\varphi n + \\log_\\varphi \\sqrt{5} - 2 + o(1)"});var l=r(n,2);m(l,{children:($,x)=>{e();var f=P(`Запишем отдельно наш результат, из которого следуют временные оценки сложности операций извлечения минимума и
    увеличения приоритета`);t($,f)}});var p=r(l,2);o(p,{display:!0,m:"D \\le \\log_\\varphi n + \\log_\\varphi \\sqrt{5} - 2 + o(1) \\quad\\text{и}\\quad D \\le \\lfloor \\log_\\varphi n \\rfloor + 1"}),t(_,a)}}),t(jr,O)}export{Ze as component};
