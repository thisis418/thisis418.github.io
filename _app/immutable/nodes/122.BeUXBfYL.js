import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as i,a as m,b as a,s as r,c as wr,n as o,t as x,r as Ar}from"../chunks/BWp35gWV.js";import{T as Rr}from"../chunks/CR7k0xtG.js";import{P as C}from"../chunks/DPzc5wQr.js";import{P as f}from"../chunks/B7flgP-x.js";import{M as e}from"../chunks/BqyEoRxA.js";import{C as D}from"../chunks/BvAJckrt.js";import{S as T}from"../chunks/CBbFRhrb.js";import{C as E}from"../chunks/BmgYHZay.js";import{L as Hr}from"../chunks/DDpIWRRY.js";import{E as H}from"../chunks/BJkbutPt.js";import{L as F}from"../chunks/NE91WFFs.js";import{I as zr}from"../chunks/Cv_jjTLk.js";import{F as Or}from"../chunks/LJLd6mQS.js";import{H as O}from"../chunks/DXKx2xvL.js";import{C as I}from"../chunks/DGy4C96Q.js";import{E as Jr}from"../chunks/CYdjygJj.js";import{E as Nr}from"../chunks/C5ZJ-BW2.js";const Qr=""+new URL("../assets/binary-search-decision-tree.DaCgUG4n.svg",import.meta.url).href;var Vr=i("<!> <!> <!> <!> <!> <!>",1),Wr=i("<!> <!> <!> <!>",1),Xr=i(`Давайте представим, что мы ищем слово в словаре.
    Можно, конечно, воспользоваться <!>,
    переворачивать страницу за страницей, начав с самой первой.
    Но, кажется, есть вариант получше.`,1),Yr=i("<!> <!> <!> <!>",1),Zr=i("У нас есть массив упорядоченных ключей <!>.",1),ro=i(`Я хочу найти в этом массиве номер ключа <!>,
    то есть такое <!>, что <!>.`,1),oo=i("<!> <!> <!>",1),eo=i(`Допустим, я сейчас нахожусь на позиции <!> и смотрю на ключ <!>.
    Я сравниваю этот ключ <!> с искомым ключом <!>. У меня три варианта:`,1),ao=i("<!>. Все записи, меньшие <!>, мне не подходят.",1),no=i("<!>. Ура, я нашел ключ!",1),to=i("<!>. Все записи, бo&#x301;льшие <!>, мне не подходят.",1),_o=i("<!> <!> <!>",1),vo=i(`Этот алгоритм называется <b>бинарным поиском</b>.
    Слово &laquo;бинарный&raquo; здесь присутствует потому, что мы каждый раз делим область поиска пополам.`,1),lo=i(`Для начала надо завести переменные <!> и <!>, показывающие границы поиска.
    В самом начале <!>, а <!>.
    Серединный элемент будем постоянно выбирать как <!>,
    и на основе значения <!> будем менять или правую границу, или левую.`,1),so=i("<!> <!> <!>",1),io=i(`Область поиска мы каждую итерацию делим пополам.
    Получается, что временная сложность алгоритма <!>.`,1),mo=i(`Существует альтернативный подход к бинарному поиску — <b>однородный бинарный поиск</b>.
    Вместо хранения границ <!> и <!> он использует текущую позицию <!> и размер шага <!>,
    который уменьшается вдвое на каждой итерации.`,1),$o=i(`Этот алгоритм особенно полезен в системах с ограниченной памятью,
    ведь мы используем всего <!> переменные вместо <!>.`,1),co=i(`Последовательность шагов предсказуема, ведь шаг всегда равен <!>,
    поэтому можно создавать эффективные логические схемы.`,1),fo=i("<!> <!>",1),po=i(`Каждую итерацию цикла мы вынуждены вычислять новое значение <!>.
    Можно заранее посчитать все значения <!>, а потом многократно использовать посчитанные значения,
    ведь они зависят только от размера массива <!>.`,1),ho=i("Всего нам нужно хранить <!> значения в таблице",1),go=i("Тогда на <!>-м шаге нужно брать <!>",1),Po=i("<!> <!> <!> <!>",1),uo=i(`Для наглядности изобразим всю процедуру в виде дерева принятия решений
    для массива длины <!>.`,1),xo=i("<!> <!>",1),bo=i(`Начинаем мы с самой верхушки дерева.
    Каждую итерацию мы сравниваем искомое значение <!> со значением
    в вершине, и выбираем, куда пойти: вправо или влево.
    Дерево решений построено так, что левое поддерево каждой вершины меньше значения в этой вершине,
    а правое поддерево больше.`,1),Ko=i(`Количество уровней в дереве решений <!>.
    Каждую итерацию мы спускаемся вниз ровно на <!> уровень.`,1),qo=i(`Эффективность алгоритма оценивается количеством сравнений <!>.
    Получается, что
    успешный поиск при <!> требует минимум <!> и максимум <!> сравнений,
    и неудачный поиск при <!> требует <!> или <!> сравнений.`,1),jo=i("<!> <!> <!>",1),yo=i("<!> <!>",1),ko=i(`Оценим среднее количество сравнений, предположив равномерное распределение аргументов поиска.
    Поиск может закончиться успешно или неудачно.
    Пусть <!> &mdash; количество сравнений при успешном поиске,
    а <!> &mdash; количество сравнений при неудачном поиске.`,1),Co=i("<!> <!> <!> <!> <!>",1),Lo=i(`Глубина дерева решений <!>.
    При этом в дереве решений заполнены все уровни, кроме, возможно, последнего.
    На всех уровнях, кроме последнего, всего <!> элементов.
    На последнем уровне <!> элементов.`,1),Eo=i(`Подставляем это в формулу <!>,
    считаем и получаем`,1),Fo=i("<!> <!> <!> <!> <!>",1),Io=i(`Максимальная оценка количества сравнений &mdash; количество уровней в дереве, <!>.
        А <!>,
        что где-то на <!> меньше.`,1),To=i("<!> <!>",1),Do=i(`Посмотрим теперь на массив, который почти отсортирован.
    В нём каждый элемент находится не дальше чем на <!> элементов
    от своей правильной позиции в полностью отсортированном массиве.`,1),wo=i(`То есть, если элемент в отсортированном массиве должен находится на позиции <!>,
    то в почти отсортированном массиве он может находиться на любой позиции от <!> до <!>.`,1),Ao=i("<!> <!>",1),Ho=i("<!> <!> <!>",1),Oo=i(`Пусть нам нужно искать ключ <!> в отсортированном массиве
    с <!> ключами <!>.`,1),Bo=i(`Найдем такое наименьшее <!>, что <!> на <!> меньше какого-то числа Фибоначчи.
    То есть <!>.`,1),So=i(`Установим начальный индекс поиска <!>. Это будет наш текущий индекс-указатель.
    Будем вычислять шаги по двум числам <!> и <!>, которые всегда являются числами Фибоначчи.
    В начале <!> и <!>.`,1),Mo=i(`На каждой итерации нам нужно выполнять проверку <!> условий
    и совершать действия в зависимости от результата`,1),Uo=i("<!> <!> <!> <!> <!>",1),Go=i(`<!>. Тогда мы вышли за границу массива, и надо вернуться назад.
    Сдвигаемся на номер <!> и обновляем переменные: <!> и <!>.`,1),Ro=i(`<!>. Тогда искомый элемент лежит в левой части,
    и мы сдвигаемся назад на номер <!>.
    После обновляем переменные: <!>.`,1),zo=i(`<!>. Тогда искомый элемент лежит в правой части,
    и мы сдвигаемся вперёд на номер <!>.
    После обновляем переменные: <!> и <!>.`,1),Jo=i("<!>. Мы нашли ключ.",1),No=i("<!> <!> <!> <!>",1),Qo=i(`При этом поиск завершается неудачей,
    если после сравнения оказалось, что <!>, или, что то же самое, <!>.`,1),Vo=i(`В классическом алгоритме требуется вычисление дополнительного параметра <!> для виртуального расширения массива до размера <!>.
    В данной реализации этот шаг опущен,
    используется непосредственная работа с исходным массивом размера <!>.`,1),Wo=i(`Классический алгоритм использует начальную позицию <!>,
    тогда как здесь используется фиксированное начальное смещение <!>.
    Это устраняет необходимость вычисления <!> и упрощает логику работы с границами массива.`,1),Xo=i(`При этом проверки на выход за границы реализованы не через проверку условия <!>,
    а через функцию <!>, что еще больше упрощает реализацию.`,1),Yo=i(`И, наконец, алгоритм останавливается тогда, когда <!>,
    а не когда <!>. Получается на <!> итерацию меньше.`,1),Zo=i(`В итоге в реализации количество сравнений, совершаемых алгоритмов,
    на <!> меньше количества сравнений в классическом варианте.
    Но считать я буду все равно количество сравнений в классическом алгоритме.`,1),re=i("<!> <!> <!> <!> <!> <!>",1),oe=i(`Дерево решений при таком поиске будет представлять собой дерево Фибоначчи.
    У дерева Фибоначчи порядка <!> левым поддеревом является дерево Фибоначчи порядка <!>,
    а правым поддеревом является дерево Фибоначчи порядка <!>.`,1),ee=i(`При этом высота дерева Фибоначчи равна <!>, где <!>.
    Подставляя формулу Бине можно получить, что высота этого дерева Фибоначчи равна`,1),ae=i("<!> <!> <!>",1),ne=i(`В бинарном поиске мы делили область поиска пополам.
    В поиске Фибоначчи мы делили область поиска в соотношении <!>.
    Давайте рассмотрим общий случай, при котором область поиска делится в соотношении <!>.
    Алгоритм, соответствующий ткому произвольному разделению называется <b>разделённым поиском</b>.`,1),te=i(`Итак, пусть <!> и <!> &mdash; положительные числа и <!>.
    Алгоритм разделённого поиска ищет ключ <!> в отсортированном массиве с <!> ключами <!>.`,1),_e=i(`Мы сравниваем ключ с номером <!> с искомым ключом <!>,
    и в зависимости от результатов сравнения выбираем левую или правую часть массива.
    Продолжаем эту операцию с получившимся подмассивом.`,1),de=i("<!> <!> <!>",1),ve=i(`Пусть <!> &mdash; среднее количество сравнений,
    необходимых для разделённого поиска в массиве длины <!>.
    Тогда можно примерно оценить`,1),le=i(`Возникает такая формула потому, что после сравнения поиск в <!> элементах
    сводится с вероятностью <!> к поиску в примерно <!> элементах
    и с вероятностью <!> к поиску в примерно <!> элементах`,1),se=i("<!> <!> <!> <!> <!>",1),ie=i(`Давайте делить массив не на <!> части, а на <!> частей.
    Пусть относительные размеры частей будут <!>,
    при этом они такие, что <!>.`,1),me=i(`Нам нужно на каждой итерации определять, какой части области поиска принадлежит искомый элемент.
    Можно это делать, выполняя <!> сравнение с опорными элементами на границах частей.`,1),$e=i(`Пусть снова <!> &mdash; среднее количество сравнений,
    необходимых для разделённого поиска в массиве длины <!>.
    Тогда можно примерно оценить`,1),ce=i(`Формула получилась из тех же самых соображений, что и в случае с <!>: <!> &mdash; вероятность попадания в <!>-ю часть массива,
    в которой находится примерно <!> элементов.`,1),fe=i(`Слагаемое <!> присутствует в формуле потому,
    что мы совершаем <!> сравнения для определения части,
    в которой находится искомый ключ <!>.
    Если мы работаем в какой-то другой, небинарной логике, это слагаемое следует изменить.`,1),pe=i(`где <!> &mdash;
    энтропия распределения <!>.
    Основания логарифмов одинаковые.`,1),he=i(`В этой формуле скрыт глубокий смысл, отсылающий нас к основам теории информации. <!> &mdash; полное количество информации, которое нам нужно получить,
    чтобы найти элемент среди <!>. <!> &mdash; среднее количество информации, которое мы получаем за один шаг алгоритма,
    при этом каждый шаг требует <!> сравнений.`,1),ge=i("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Pe=i("<!> <!>",1),ue=i(`У нас есть массив упорядоченных ключей <!>.
    При этом на ключах нам задано не только линейное отношение порядка, но и способ мерить масштаб.
    Формально, нам нужно, чтобы ключи были элементами
    линейного упорядоченного аффинного пространства над линейным упорядоченным полем.
    Но можно не думать об этих страшных словах и просто считать, что мы ищем среди чисел.`,1),xe=i(`Нам нужно найти в этом массиве номер ключа <!>,
    то есть такое <!>, что <!>.`,1),be=i("<!> <!> <!>",1),Ke=i(`Как и с <!>, заведем переменные,
    указывающие на границы области поиска <!> и <!>.
    Но опорный индекс мы будем выбирать не как середину, а будем пытаться предсказывать положение целевого элемента <!>.`,1),qe=i(`В итоге мы просто линейно интерполируем по двум точкам <!> и <!>, и вычисляем индекс <!>,
    с надеждой, что <!>. Формула вычисления индекса получается`,1),je=i("<!> <!> <!> <!> <!>",1),ye=i("Оно <!>. Надо будет написать доказательство.",1),ke=i(`<b>Бинарный поиск в неупорядоченных массивах.</b> Довольно часто попадаются задачи, где нужно реализовать бинарный поиск в массиве,
    который когда-то был отсортирован, и над которым совершили какие-то надругательства.
    В этом упражнении предлагается попробовать свои силы
    в реализации бинарного поиска на некоторых неотсортированных массивах.`,1),Ce=i(`В каждой задаче массив <!> состоит из <!> различных элементов.
    Нужно написать код, который будет быстро находить в массиве данный элемент <!>,
    или устанавливать факт его отсутствия в массиве.`,1),Le=i("<!> <!>",1),Ee=i(`В отсортированном по возрастанию массиве некоторые элементы заменили на <!>.
    Несколько <!> могут идти подряд.
    В получившимся массиве нужно искать элементы, игнорируя <!>.`,1),Fe=i("<!> <!> <!> <!> <!> <!>",1),Ie=i("<!> <!>",1),Te=i("<!> <!> <section><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></section>   <section><!> <!> <!> <!> <!> <!> <!></section> <!> <!>",1);function Ze(Br){var B=Te(),S=m(B);Rr(S,{title:"Поиск сравнениями"});var M=r(S,2);I(M,{children:(p,K)=>{I.List(p,{children:(d,h)=>{var $=Wr(),c=m($);I.Item(c,{to:"#binary-search",children:(t,_)=>{o();var l=x("Бинарный поиск");a(t,l)},$$slots:{default:!0}});var s=r(c,2);I.List(s,{children:(t,_)=>{var l=Vr(),g=m(l);I.Item(g,{to:"#binary-search-in-array",children:(q,L)=>{o();var y=x("Бинарный поиск в массиве");a(q,y)},$$slots:{default:!0}});var u=r(g,2);I.Item(u,{to:"#binary-search-in-array-analysis",children:(q,L)=>{o();var y=x("Анализ бинарного поиска в массиве");a(q,y)},$$slots:{default:!0}});var P=r(u,2);I.Item(P,{to:"#binary-search-condition",children:(q,L)=>{o();var y=x("Бинарный поиск по условию");a(q,y)},$$slots:{default:!0}});var k=r(P,2);I.Item(k,{to:"#binary-search-in-nearly-sorted-array",children:(q,L)=>{o();var y=x("Почти отсортированный массив");a(q,y)},$$slots:{default:!0}});var b=r(k,2);I.Item(b,{to:"#binary-fibonacci-search",children:(q,L)=>{o();var y=x("Поиск Фибоначчи");a(q,y)},$$slots:{default:!0}});var j=r(b,2);I.Item(j,{to:"#proportional-search",children:(q,L)=>{o();var y=x("Разделённый поиск");a(q,y)},$$slots:{default:!0}}),a(t,l)},$$slots:{default:!0}});var v=r(s,2);I.Item(v,{to:"#interpolation-search",children:(t,_)=>{o();var l=x("Интерполяционный поиск");a(t,l)},$$slots:{default:!0}});var n=r(v,2);I.Item(n,{to:"#exercises",children:(t,_)=>{o();var l=x("Упражнения");a(t,l)},$$slots:{default:!0}}),a(d,$)},$$slots:{default:!0}})}});var w=r(M,2),U=wr(w);O(U,{anchor:"binary-search",children:(p,K)=>{o();var d=x("Бинарный поиск");a(p,d)}});var G=r(U,2);T(G,{anchor:"binary-search-in-array",children:(p,K)=>{o();var d=x("Бинарный поиск в массиве");a(p,d)}});var R=r(G,2);C(R,{children:(p,K)=>{var d=Yr(),h=m(d);f(h,{children:(v,n)=>{o();var t=Xr(),_=r(m(t));Hr(_,{to:"/search/simple-search/sequential-search",children:(l,g)=>{o();var u=x("алгоритмом последовательного поиска");a(l,u)},$$slots:{default:!0}}),o(),a(v,t)}});var $=r(h,2);f($,{children:(v,n)=>{o();var t=x(`В словарях все слова упорядочены. Можно воспользоваться этим свойством словаря.
    Вот пусть нам надо найти слово «мямлик».
    Откроем словарь посередине, и посмотрим на первое слово на странице.
    Оно начинается на букву «Н», которая идет после буквы «М» значит вторая, нижняя половина
    нам не нужна.
    Продолжаем поиск в первой, верхней половине.
    Снова располовиниваем половину, и смотрим на первую букву первого слова. Это буква «К».
    Теперь нужно отбросить уже первую половину половины, и оставить вторую половину половины.`);a(v,t)}});var c=r($,2);f(c,{children:(v,n)=>{o();var t=x(`Продолжаем этот процесс, смотрим на вторую букву слова, мы находимся внутри блока слов на букву «М»,
    на третью и так далее, пока, наконец, не найдем наше слово.`);a(v,t)}});var s=r(c,2);f(s,{children:(v,n)=>{o();var t=x(`Вообще, весь этот процесс описывался довольно долго, особенно по сравнению очень коротким описанием
    наивного алгоритма «перебирай по порядку».
    Но сейчас мы формализуем это наше действо, проанализируем алгоритм и поймем, что он очень эффективный.`);a(v,t)}}),a(p,d)}});var z=r(R,2);C(z,{children:(p,K)=>{var d=oo(),h=m(d);f(h,{children:(s,v)=>{o();var n=Zr(),t=r(m(n));e(t,{m:"K_1, K_2, K_3, \\dotsc, K_{n-1}, K_n"}),o(),a(s,n)}});var $=r(h,2);e($,{display:!0,m:"K_1 < K_2 < K_3 < \\dotsb < K_{n-1} < K_n"});var c=r($,2);f(c,{children:(s,v)=>{o();var n=ro(),t=r(m(n));e(t,{m:"K"});var _=r(t,2);e(_,{m:"j"});var l=r(_,2);e(l,{m:"K_j = K"}),o(),a(s,n)}}),a(p,d)}});var J=r(z,2);C(J,{children:(p,K)=>{f(p,{children:(d,h)=>{o();var $=eo(),c=r(m($));e(c,{m:"i"});var s=r(c,2);e(s,{m:"K_i"});var v=r(s,2);e(v,{m:"K_i"});var n=r(v,2);e(n,{m:"K"}),o(),a(d,$)}})}});var N=r(J,2);H(N,{children:(p,K)=>{var d=_o(),h=m(d);F(h,{children:(s,v)=>{var n=ao(),t=m(n);e(t,{m:"K_i < K"});var _=r(t,2);e(_,{m:"i"}),o(),a(s,n)}});var $=r(h,2);F($,{children:(s,v)=>{var n=no(),t=m(n);e(t,{m:"K_i = K"}),o(),a(s,n)}});var c=r($,2);F(c,{children:(s,v)=>{var n=to(),t=m(n);e(t,{m:"K_i > K"});var _=r(t,2);e(_,{m:"i"}),o(),a(s,n)}}),a(p,d)}});var Q=r(N,2);C(Q,{children:(p,K)=>{f(p,{children:(d,h)=>{o();var $=vo();o(2),a(d,$)}})}});var V=r(Q,2);C(V,{children:(p,K)=>{var d=so(),h=m(d);f(h,{children:(s,v)=>{o();var n=x("Перед тем, как превратить наше рукомахание в рабочий код, надо провести некоторые манипуляции.");a(s,n)}});var $=r(h,2);f($,{children:(s,v)=>{o();var n=lo(),t=r(m(n));E(t,{c:"left"});var _=r(t,2);E(_,{c:"right"});var l=r(_,2);e(l,{m:"\\code{left} = 0"});var g=r(l,2);e(g,{m:"\\code{right} = n - 1"});var u=r(g,2);e(u,{m:"\\code{middle} = \\lfloor (\\code{left} + \\code{right}) / 2 \\rfloor"});var P=r(u,2);e(P,{m:"K_{\\code{middle}}"}),o(),a(s,n)}});var c=r($,2);f(c,{children:(s,v)=>{o();var n=x(`Все действия будем делать до тех пор, пока в границе поиска не останется один элемент.
    В этом случае мы просто проверим, совпадает ли он с нашей целью.`);a(s,n)}}),a(p,d)}});var W=r(V,2);D(W,{code:`function binary_search(sequence a, target) -> int:
    int left = 0
    int right = length(a) - 1

    while left <= right:
        int middle = (left + right) / 2

        if a[middle] == target:
            return middle
        else if a[middle] < target:
            left = middle + 1
        else:
            right = middle - 1

    return not found`});var X=r(W,2);C(X,{children:(p,K)=>{f(p,{children:(d,h)=>{o();var $=io(),c=r(m($));e(c,{m:"O(\\log n)"}),o(),a(d,$)}})}});var Y=r(X,2);C(Y,{children:(p,K)=>{f(p,{children:(d,h)=>{o();var $=mo(),c=r(m($),3);E(c,{c:"left"});var s=r(c,2);E(s,{c:"right"});var v=r(s,2);E(v,{c:"i"});var n=r(v,2);E(n,{c:"m"}),o(),a(d,$)}})}});var Z=r(Y,2);D(Z,{code:`
function uniform_binary_search(sequence a, target) -> int:
    int n = length(a)
    int i = n / 2
    int m = n / 2

    while m > 0:
        m = m / 2

        if target == a[i]:
            return i
        else if target < a[i]:
            i = i - m
        else:
            i = i + m

    if i < n and a[i] == target:
        return i
    else:
        return not found
`});var rr=r(Z,2);C(rr,{children:(p,K)=>{var d=fo(),h=m(d);f(h,{children:(c,s)=>{o();var v=$o(),n=r(m(v));e(n,{m:"2"});var t=r(n,2);e(t,{m:"3"}),o(),a(c,v)}});var $=r(h,2);f($,{children:(c,s)=>{o();var v=co(),n=r(m(v));e(n,{m:"m, m/2, m/4, m/8, \\dotsc"}),o(),a(c,v)}}),a(p,d)}});var or=r(rr,2);C(or,{children:(p,K)=>{var d=Po(),h=m(d);f(h,{children:(v,n)=>{o();var t=po(),_=r(m(t));e(_,{m:"m"});var l=r(_,2);e(l,{m:"m"});var g=r(l,2);e(g,{m:"n"}),o(),a(v,t)}});var $=r(h,2);f($,{children:(v,n)=>{o();var t=ho(),_=r(m(t));e(_,{m:"\\lfloor \\log_2 n \\rfloor + 2"}),o(),a(v,t)}});var c=r($,2);e(c,{display:!0,m:"\\delta[j] = \\left\\lfloor \\frac{n - 2^{j-1}}{2^j} \\right\\rfloor \\quad \\text{для}~ 1 \\le j \\le \\lfloor \\log_2 n \\rfloor + 2"});var s=r(c,2);f(s,{children:(v,n)=>{o();var t=go(),_=r(m(t));e(_,{m:"j"});var l=r(_,2);e(l,{m:"m = \\delta[j]"}),a(v,t)}}),a(p,d)}});var er=r(or,2);D(er,{code:`
function uniform_binary_search(sequence a, target) -> int:
    int n = length(a)

    int max_j = floor(log2(n)) + 2

    array[int] DELTA[max_j+1]

    DELTA[0] = none
    for int j = 1; j <= max_j; j++:
        DELTA[j] = floor((n + 2^(j-1)) / 2^j)

    int i = DELTA[1]
    int j = 2

    while true:
        if DELTA[j] == 0: return not found

        if target < a[i]:
            i = i - DELTA[j]
        else if target > a[i]:
            i = i + DELTA[j]
        else:
            return i

        j++
`});var ar=r(er,2);T(ar,{anchor:"binary-search-in-array-analysis",children:(p,K)=>{o();var d=x("Анализ алгоритма");a(p,d)}});var nr=r(ar,2);C(nr,{children:(p,K)=>{var d=xo(),h=m(d);f(h,{children:(c,s)=>{o();var v=x("Давайте поподробнее проанализируем алгоритм и его время работы.");a(c,v)}});var $=r(h,2);f($,{children:(c,s)=>{o();var v=uo(),n=r(m(v));e(n,{m:"15"}),o(),a(c,v)}}),a(p,d)}});var tr=r(nr,2);zr(tr,{get src(){return Qr}});var _r=r(tr,2);C(_r,{children:(p,K)=>{var d=jo(),h=m(d);f(h,{children:(s,v)=>{o();var n=bo(),t=r(m(n));e(t,{m:"K"}),o(),a(s,n)}});var $=r(h,2);f($,{children:(s,v)=>{o();var n=Ko(),t=r(m(n));e(t,{m:"\\lfloor \\log_2 n \\rfloor + 1"});var _=r(t,2);e(_,{m:"1"}),o(),a(s,n)}});var c=r($,2);f(c,{children:(s,v)=>{o();var n=qo(),t=r(m(n));e(t,{m:"C"});var _=r(t,2);e(_,{m:"2^{k-1} \\le n < 2^k"});var l=r(_,2);e(l,{m:"1"});var g=r(l,2);e(g,{m:"k"});var u=r(g,2);e(u,{m:"2^{k-1} \\le n < 2^k - 1"});var P=r(u,2);e(P,{m:"k-1"});var k=r(P,2);e(k,{m:"k"}),o(),a(s,n)}}),a(p,d)}});var dr=r(_r,2);Or(dr,{title:"Распределение аргументов поиска",children:(p,K)=>{var d=yo(),h=m(d);f(h,{children:(c,s)=>{o();var v=x(`Структура массива (и, как следствие, дерева решений) у нас фиксированная.
        Поэтому никакие предположения о распределении аргументов поиска не дадут нам совершенно никакой пользы.`);a(c,v)}});var $=r(h,2);f($,{children:(c,s)=>{o();var v=x("Единственное, что нам остается делать — смотреть на ситуацию с максимальной энтропией.");a(c,v)}}),a(p,d)}});var vr=r(dr,2);C(vr,{children:(p,K)=>{var d=Co(),h=m(d);f(h,{children:(n,t)=>{o();var _=ko(),l=r(m(_));e(l,{m:"C"});var g=r(l,2);e(g,{m:"C'"}),o(),a(n,_)}});var $=r(h,2);f($,{children:(n,t)=>{o();var _=x(`При расчете количества сравнений в неудачном поиске мы суммируем глубину несуществующих фиктивных листьев,
    то есть «пустых» мест, куда попадает неудачный поиск. Получаем соотношения`);a(n,_)}});var c=r($,2);e(c,{display:!0,m:`\\expect C = 1 + \\frac{1}{n} \\sum_{\\text{вершина}~ v} \\depth v \\quad\\text{и}\\quad
    \\expect C' = \\frac{1}{n+1} \\sum_{\\text{фиктивный лист}~ v} \\depth v + 2n`});var s=r(c,2);f(s,{children:(n,t)=>{o();var _=x("Ну и можно вывести интересную связь между успешным и неудачном поиском");a(n,_)}});var v=r(s,2);e(v,{display:!0,m:"\\expect C = \\left(1 + \\frac{1}{n}\\right) \\cdot \\expect C' - 1"}),a(p,d)}});var lr=r(vr,2);C(lr,{children:(p,K)=>{var d=Fo(),h=m(d);f(h,{children:(n,t)=>{o();var _=Lo(),l=r(m(_));e(l,{m:"\\lfloor \\log_2 n \\rfloor"});var g=r(l,2);e(g,{m:"2^{\\lfloor \\log_2 n \\rfloor} - 1"});var u=r(g,2);e(u,{m:"n - 2^{\\lfloor \\log_2 n \\rfloor} + 1"}),o(),a(n,_)}});var $=r(h,2);f($,{children:(n,t)=>{o();var _=x("Для подсчета средней глубины элементов воспользуемся формулой");a(n,_)}});var c=r($,2);e(c,{display:!0,m:`\\expect(\\text{глубина элемента})
          = \\frac{1}{n} \\Bigg( \\sum_{d=0}^{\\lfloor \\log_2 n \\rfloor - 1} d \\cdot 2^d +
          \\lfloor \\log_2 n \\rfloor \\cdot \\big( n - 2^{\\lfloor \\log_2 n \\rfloor} + 1 \\big) \\Bigg)`});var s=r(c,2);f(s,{children:(n,t)=>{o();var _=Eo(),l=r(m(_));e(l,{m:"\\expect C = 1 + \\expect(\\text{глубина элемента})"}),o(),a(n,_)}});var v=r(s,2);e(v,{display:!0,m:`\\expect C = \\lfloor \\log_2 n \\rfloor
          \\cdot \\left( 1 + \\frac{1}{n} \\right)
          - \\frac{2^{\\lfloor \\log_2 n \\rfloor}}{n} + \\frac{2}{n} + 1
          = \\log_2 n + O \\left( \\frac{\\log n}{n} \\right)`}),a(p,d)}});var sr=r(lr,2);Or(sr,{title:"Внимание, ловушка!",children:(p,K)=>{var d=To(),h=m(d);f(h,{children:(c,s)=>{o();var v=x("Полученное значение может немного сбить с толку. Но все хорошо.");a(c,v)}});var $=r(h,2);f($,{children:(c,s)=>{o();var v=Io(),n=r(m(v));e(n,{m:"\\max C = \\lfloor \\log_2 n \\rfloor + 1"});var t=r(n,2);e(t,{m:"\\expect C = \\log_2 n + O \\big( \\log n / n \\big)"});var _=r(t,2);e(_,{m:"1"}),o(),a(c,v)}}),a(p,d)}});var ir=r(sr,2);T(ir,{anchor:"binary-search-condition",children:(p,K)=>{o();var d=x("Бинарный поиск по условию");a(p,d)}});var mr=r(ir,2);T(mr,{anchor:"binary-search-in-nearly-sorted-array",children:(p,K)=>{o();var d=x("Почти отсортированный массив");a(p,d)}});var $r=r(mr,2);C($r,{children:(p,K)=>{var d=Ao(),h=m(d);f(h,{children:(c,s)=>{o();var v=Do(),n=r(m(v));e(n,{m:"k"}),o(),a(c,v)}});var $=r(h,2);f($,{children:(c,s)=>{o();var v=wo(),n=r(m(v));e(n,{m:"j"});var t=r(n,2);e(t,{m:"j-k"});var _=r(t,2);e(_,{m:"j+k"}),o(),a(c,v)}}),a(p,d)}});var cr=r($r,2);T(cr,{anchor:"binary-fibonacci-search",children:(p,K)=>{o();var d=x("Поиск Фибоначчи");a(p,d)}});var fr=r(cr,2);C(fr,{children:(p,K)=>{var d=Ho(),h=m(d);f(h,{children:(s,v)=>{o();var n=x(`Числа Фибоначчи могут играть такую же роль, что и степени двойки.
    Числа Фибоначчи позволяют разработать альтернативу бинарному поиску,
    где не нужно будет выполнять никаких операций, кроме сложения.`);a(s,n)}});var $=r(h,2);f($,{children:(s,v)=>{o();var n=x(`Что, если у нас нет быстрой операции деления?
    Или мы хотим минимизировать количество сравнений для массивов, которые не идеально укладываются в степень двойки?
    Здесь на помощь приходят числа Фибоначчи.`);a(s,n)}});var c=r($,2);f(c,{children:(s,v)=>{o();var n=x(`Идея алгоритма заключается в том, чтобы использовать числа Фибоначчи для разбиения текущего отрезка поиска.
    Вместо деления пополам, мы делим отрезок в пропорции, заданной двумя последовательными числами Фибоначчи.`);a(s,n)}}),a(p,d)}});var pr=r(fr,2);C(pr,{children:(p,K)=>{var d=Uo(),h=m(d);f(h,{children:(n,t)=>{o();var _=Oo(),l=r(m(_));e(l,{m:"K"});var g=r(l,2);e(g,{m:"n"});var u=r(g,2);e(u,{m:"K_1 < K_2 < \\dotsb < K_n"}),o(),a(n,_)}});var $=r(h,2);f($,{children:(n,t)=>{o();var _=x(`Мы хотим делить массив на два подмассива так, чтобы длины подмассивов бли похожи на числа Фибоначчи.
    Поэтому в начале придётся совершить некоторые подготовительные действия.`);a(n,_)}});var c=r($,2);f(c,{children:(n,t)=>{o();var _=Bo(),l=r(m(_));e(l,{m:"m \\ge 0"});var g=r(l,2);e(g,{m:"n + m"});var u=r(g,2);e(u,{m:"1"});var P=r(u,2);e(P,{m:"n + m = F_{k+1} - 1"}),o(),a(n,_)}});var s=r(c,2);f(s,{children:(n,t)=>{o();var _=So(),l=r(m(_));e(l,{m:"j = F_k - m"});var g=r(l,2);e(g,{m:"p"});var u=r(g,2);e(u,{m:"q"});var P=r(u,2);e(P,{m:"p = F_{k-1}"});var k=r(P,2);e(k,{m:"q = F_{k-2}"}),o(),a(n,_)}});var v=r(s,2);f(v,{children:(n,t)=>{o();var _=Mo(),l=r(m(_));e(l,{m:"4"}),o(),a(n,_)}}),a(p,d)}});var hr=r(pr,2);H(hr,{children:(p,K)=>{var d=No(),h=m(d);F(h,{children:(v,n)=>{f(v,{children:(t,_)=>{var l=Go(),g=m(l);e(g,{m:"j \\le 0"});var u=r(g,2);e(u,{m:"j + q"});var P=r(u,2);E(P,{c:"p = p - q"});var k=r(P,2);E(k,{c:"q = q - p"}),o(),a(t,l)}})}});var $=r(h,2);F($,{children:(v,n)=>{f(v,{children:(t,_)=>{var l=Ro(),g=m(l);e(g,{m:"K_i > K"});var u=r(g,2);e(u,{m:"j - q"});var P=r(u,2);E(P,{c:"(p, q) = (q, p - q)"}),o(),a(t,l)}})}});var c=r($,2);F(c,{children:(v,n)=>{f(v,{children:(t,_)=>{var l=zo(),g=m(l);e(g,{m:"K_j < K"});var u=r(g,2);e(u,{m:"j + q"});var P=r(u,2);E(P,{c:"p = p - q"});var k=r(P,2);E(k,{c:"q = q - p"}),o(),a(t,l)}})}});var s=r(c,2);F(s,{children:(v,n)=>{f(v,{children:(t,_)=>{var l=Jo(),g=m(l);e(g,{m:"K_i = K"}),o(),a(t,l)}})}}),a(p,d)}});var gr=r(hr,2);C(gr,{children:(p,K)=>{f(p,{children:(d,h)=>{o();var $=Qo(),c=r(m($));e(c,{m:"q = 0"});var s=r(c,2);e(s,{m:"p = 1"}),o(),a(d,$)}})}});var Pr=r(gr,2);D(Pr,{code:`
function fibonacci_search(sequence a, target) -> int:
    n = length(K)

    if n == 0:
        return not found

    fib_m2 = 0  # F_{k-2}
    fib_m1 = 1  # F_{k-1}
    fib_k = 1  # F_k

    while fib_k < n:
        fib_m2, fib_m1, fib_k = fib_m1, fib_k, fib_m1 + fib_k

    offset = -1

    while fib_k > 1:
        i = min(offset + fib_m2, n - 1)

        if arr[i] < target:
            fib_k = fib_m1
            fib_m1 = fib_m2
            fib_m2 = fib_k - fib_m1
            offset = i

        else if arr[i] > target:
            fib_k = fib_m2
            fib_m1 = fib_m1 - fib_m2
            fib_m2 = fib_k - fib_m1

        else:
            return i

    if fib_m1 and offset + 1 < n and arr[offset + 1] == target:
        return offset + 1

    return not found
`});var ur=r(Pr,2);C(ur,{children:(p,K)=>{var d=re(),h=m(d);f(h,{children:(t,_)=>{o();var l=x("Реализация на псевдокоде чуть-чуть отличается от описанного классического алгоритма.");a(t,l)}});var $=r(h,2);f($,{children:(t,_)=>{o();var l=Vo(),g=r(m(l));e(g,{m:"m"});var u=r(g,2);e(u,{m:"F_{k+1}"});var P=r(u,2);e(P,{m:"n"}),o(),a(t,l)}});var c=r($,2);f(c,{children:(t,_)=>{o();var l=Wo(),g=r(m(l));e(g,{m:"F_k - m"});var u=r(g,2);e(u,{m:"\\code{offset} = -1"});var P=r(u,2);e(P,{m:"m"}),o(),a(t,l)}});var s=r(c,2);f(s,{children:(t,_)=>{o();var l=Xo(),g=r(m(l));e(g,{m:"j \\le 0"});var u=r(g,2);E(u,{c:"min(offset + fib_m2, n - 1)"}),o(),a(t,l)}});var v=r(s,2);f(v,{children:(t,_)=>{o();var l=Yo(),g=r(m(l));e(g,{m:"\\code{fib\\_k} \\le 1"});var u=r(g,2);e(u,{m:"q = 0 \\lor p = 1"});var P=r(u,2);e(P,{m:"1"}),o(),a(t,l)}});var n=r(v,2);f(n,{children:(t,_)=>{o();var l=Zo(),g=r(m(l));e(g,{m:"2"}),o(),a(t,l)}}),a(p,d)}});var xr=r(ur,2);C(xr,{children:(p,K)=>{var d=ae(),h=m(d);f(h,{children:(s,v)=>{o();var n=oe(),t=r(m(n));e(t,{m:"k"});var _=r(t,2);e(_,{m:"k-1"});var l=r(_,2);e(l,{m:"k-2"}),o(),a(s,n)}});var $=r(h,2);f($,{children:(s,v)=>{o();var n=ee(),t=r(m(n));e(t,{m:"k"});var _=r(t,2);e(_,{m:"F_k < n + 1 \\le F_{k+1}"}),o(),a(s,n)}});var c=r($,2);e(c,{display:!0,m:`\\bigl\\lfloor \\log_\\vphi \\bigl( \\sqrt{5} n + \\sqrt{5} - 1/2 \\bigr) \\bigr\\rfloor
          = \\log_\\vphi n + O(1)`}),a(p,d)}});var br=r(xr,2);T(br,{anchor:"proportional-search",children:(p,K)=>{o();var d=x("Разделённый поиск");a(p,d)}});var Kr=r(br,2);C(Kr,{children:(p,K)=>{var d=de(),h=m(d);f(h,{children:(s,v)=>{o();var n=ne(),t=r(m(n));e(t,{m:"\\vphi"});var _=r(t,2);e(_,{m:"p : q"}),o(3),a(s,n)}});var $=r(h,2);f($,{children:(s,v)=>{o();var n=te(),t=r(m(n));e(t,{m:"p"});var _=r(t,2);e(_,{m:"q"});var l=r(_,2);e(l,{m:"p + q = 1"});var g=r(l,2);e(g,{m:"K"});var u=r(g,2);e(u,{m:"n"});var P=r(u,2);e(P,{m:"K_1 < K_2 < \\dotsb < K_n"}),o(),a(s,n)}});var c=r($,2);f(c,{children:(s,v)=>{o();var n=_e(),t=r(m(n));e(t,{m:"np"});var _=r(t,2);e(_,{m:"K"}),o(),a(s,n)}}),a(p,d)}});var qr=r(Kr,2);D(qr,{code:`
function s_search(sequence a, target) -> int:
    return not found
`});var jr=r(qr,2);C(jr,{children:(p,K)=>{var d=se(),h=m(d);f(h,{children:(n,t)=>{o();var _=ve(),l=r(m(_));e(l,{m:"C(n)"});var g=r(l,2);e(g,{m:"n"}),o(),a(n,_)}});var $=r(h,2);e($,{display:!0,m:"C(1) = 0 \\qquad\\text{и}\\qquad C(n) \\approx 1 + p \\cdot C(pn) + q \\cdot C(qn) \\quad\\text{для}~ n > 1"});var c=r($,2);f(c,{children:(n,t)=>{o();var _=le(),l=r(m(_));e(l,{m:"n"});var g=r(l,2);e(g,{m:"p"});var u=r(g,2);e(u,{m:"pn"});var P=r(u,2);e(P,{m:"q"});var k=r(P,2);e(k,{m:"qn"}),o(),a(n,_)}});var s=r(c,2);f(s,{children:(n,t)=>{o();var _=x("Из этой рекурсивной формулы получаем, что");a(n,_)}});var v=r(s,2);e(v,{display:!0,m:"C \\approx \\log_{p^{-p} \\, q^{-q}} n = - \\frac{\\log n}{p \\log p + q \\log q}"}),a(p,d)}});var Sr=r(jr,2);C(Sr,{children:(p,K)=>{var d=ge(),h=m(d);f(h,{children:(P,k)=>{o();var b=x("В знаменателе получилась такая интересная формула не случайно.");a(P,b)}});var $=r(h,2);f($,{children:(P,k)=>{o();var b=ie(),j=r(m(b));e(j,{m:"2"});var q=r(j,2);e(q,{m:"m"});var L=r(q,2);e(L,{m:"p_1, p_2, \\dotsc, p_m"});var y=r(L,2);e(y,{m:"p_1 + p_2 + \\dotsb + p_m = 1"}),o(),a(P,b)}});var c=r($,2);f(c,{children:(P,k)=>{o();var b=me(),j=r(m(b));e(j,{m:"m-1"}),o(),a(P,b)}});var s=r(c,2);f(s,{children:(P,k)=>{o();var b=$e(),j=r(m(b));e(j,{m:"C(n)"});var q=r(j,2);e(q,{m:"n"}),o(),a(P,b)}});var v=r(s,2);e(v,{display:!0,m:"C(1) = 0 \\qquad\\text{и}\\qquad C(n) \\approx (m-1) + p_1 \\cdot C(p_1 n) + p_2 \\cdot C(p_2 n) + \\dotsc + p_m \\cdot C(p_m n) \\quad\\text{для}~ n > 1"});var n=r(v,2);f(n,{children:(P,k)=>{o();var b=ce(),j=r(m(b));e(j,{m:"m = 2"});var q=r(j,2);e(q,{m:"p_j"});var L=r(q,2);e(L,{m:"j"});var y=r(L,2);e(y,{m:"p_j n"}),o(),a(P,b)}});var t=r(n,2);f(t,{children:(P,k)=>{o();var b=fe(),j=r(m(b));e(j,{m:"m-1"});var q=r(j,2);e(q,{m:"m-1"});var L=r(q,2);e(L,{m:"K"}),o(),a(P,b)}});var _=r(t,2);f(_,{children:(P,k)=>{o();var b=x("Решая рекуррентное соотношение, получаем");a(P,b)}});var l=r(_,2);e(l,{display:!0,m:"C(n) \\approx (k-1) \\cdot \\frac{\\log n}{\\H}"});var g=r(l,2);f(g,{children:(P,k)=>{o();var b=pe(),j=r(m(b));e(j,{m:"\\H = - \\sum_{j=1}^m p_j \\log p_j"});var q=r(j,2);e(q,{m:"p_1, p_2, \\dotsc, p_m"}),o(),a(P,b)}});var u=r(g,2);f(u,{children:(P,k)=>{o();var b=he(),j=r(m(b));e(j,{m:"\\log n"});var q=r(j,2);e(q,{m:"n"});var L=r(q,2);e(L,{m:"\\H"});var y=r(L,2);e(y,{m:"m-1"}),o(),a(P,b)}}),a(p,d)}}),Ar(w);var A=r(w,2),yr=wr(A);O(yr,{anchor:"interpolation-search",children:(p,K)=>{o();var d=x("Интерполяционный поиск");a(p,d)}});var kr=r(yr,2);C(kr,{children:(p,K)=>{var d=Pe(),h=m(d);f(h,{children:(c,s)=>{o();var v=x(`Давайте снова возьмем словарь и будем искать в нйм слова.
    Если нам поступил запрос на поиск слова «абака», то, кажется, нет смысла открывать словарь
    в середине, ведь слово прям очень близко к началу словаря.
    Такой подход свойственен нам, людям, и абсолютно чужд для машин. Так научим же их!`);a(c,v)}});var $=r(h,2);f($,{children:(c,s)=>{o();var v=x("Мы хотим научиться предсказывать позицию искомого элемента, и корректировать область поиска в случае промаха.");a(c,v)}}),a(p,d)}});var Cr=r(kr,2);C(Cr,{children:(p,K)=>{var d=be(),h=m(d);f(h,{children:(s,v)=>{o();var n=ue(),t=r(m(n));e(t,{m:"K_1, K_2, K_3, \\dotsc, K_{n-1}, K_n"}),o(),a(s,n)}});var $=r(h,2);e($,{display:!0,m:"K_1 < K_2 < K_3 < \\dotsb < K_{n-1} < K_n"});var c=r($,2);f(c,{children:(s,v)=>{o();var n=xe(),t=r(m(n));e(t,{m:"K"});var _=r(t,2);e(_,{m:"j"});var l=r(_,2);e(l,{m:"K_j = K"}),o(),a(s,n)}}),a(p,d)}});var Lr=r(Cr,2);C(Lr,{children:(p,K)=>{var d=je(),h=m(d);f(h,{children:(n,t)=>{o();var _=Ke(),l=r(m(_));Hr(l,{to:"comparison-search",children:(k,b)=>{o();var j=x("бинарным поиском");a(k,j)},$$slots:{default:!0}});var g=r(l,2);E(g,{c:"left"});var u=r(g,2);E(u,{c:"right"});var P=r(u,2);e(P,{m:"K"}),o(),a(n,_)}});var $=r(h,2);f($,{children:(n,t)=>{o();var _=x(`Для того, чтобы что-то предположить, нам нужно какое-то основание.
    Пусть мы будем надеяться на то, что элементы по индексам подчиняются линейной зависимости.`);a(n,_)}});var c=r($,2);f(c,{children:(n,t)=>{o();var _=qe(),l=r(m(_));e(l,{m:"\\big( \\code{left}, a[\\code{left}] \\big)"});var g=r(l,2);e(g,{m:"\\big( \\code{right}, a[\\code{right}] \\big)"});var u=r(g,2);e(u,{m:"j"});var P=r(u,2);e(P,{m:"a[j] = K"}),o(),a(n,_)}});var s=r(c,2);e(s,{display:!0,m:"j = \\code{left} + \\frac{\\big( K - a[\\code{left}] \\big) \\cdot (\\code{right} - \\code{left})}{a[\\code{right}] - a[\\code{left}]}"});var v=r(s,2);f(v,{children:(n,t)=>{o();var _=x("В остальном алгоритм полностью аналогичен бинарному поиску.");a(n,_)}}),a(p,d)}});var Er=r(Lr,2);D(Er,{code:`function interpolation_search(sequence a, target) -> int:
    int left = 0
    int right = length(a) - 1

    while left <= right:
        int j = left + (target - a[left]) * (right - left) / (a[right] - a[left])

        if a[j] == target:
            return j
        else if a[j] < target:
            left = j + 1
        else:
            right = j - 1

    return not found`});var Fr=r(Er,2);T(Fr,{children:(p,K)=>{o();var d=x("Анализ количества сравнений");a(p,d)}});var Mr=r(Fr,2);C(Mr,{children:(p,K)=>{f(p,{children:(d,h)=>{o();var $=ye(),c=r(m($));e(c,{m:"O(\\log \\log n)"}),o(),a(d,$)}})}}),Ar(A);var Ir=r(A,2);O(Ir,{anchor:"exercises",children:(p,K)=>{o();var d=x("Упражнения");a(p,d)}});var Ur=r(Ir,2);Jr(Ur,{children:(p,K)=>{Nr(p,{number:1,children:(d,h)=>{var $=Ie(),c=m($);C(c,{children:(v,n)=>{var t=Le(),_=m(t);f(_,{children:(g,u)=>{var P=ke();o(),a(g,P)}});var l=r(_,2);f(l,{children:(g,u)=>{o();var P=Ce(),k=r(m(P));E(k,{c:"a"});var b=r(k,2);e(b,{m:"n"});var j=r(b,2);e(j,{m:"t"}),o(),a(g,P)}}),a(v,t)}});var s=r(c,2);H(s,{children:(v,n)=>{var t=Fe(),_=m(t);F(_,{children:(b,j)=>{f(b,{children:(q,L)=>{o();var y=x("Отсортированный по возрастанию массив был циклически сдвинут.");a(q,y)}})}});var l=r(_,2);F(l,{children:(b,j)=>{f(b,{children:(q,L)=>{o();var y=x("В отсортированном по возрастанию массиве поменяли местами два случайных элемента.");a(q,y)}})}});var g=r(l,2);F(g,{children:(b,j)=>{f(b,{children:(q,L)=>{o();var y=x("К отсортированному по возрастанию массиву приписали отсортированный по убыванию.");a(q,y)}})}});var u=r(g,2);F(u,{children:(b,j)=>{f(b,{children:(q,L)=>{o();var y=x("Склеили два отсортированных по возрастанию массива.");a(q,y)}})}});var P=r(u,2);F(P,{children:(b,j)=>{f(b,{children:(q,L)=>{o();var y=x(`К отсортированному по возрастанию массиву приписали отсортированный по убыванию.
    Получившийся массив циклически сдвинули.`);a(q,y)}})}});var k=r(P,2);F(k,{children:(b,j)=>{f(b,{children:(q,L)=>{o();var y=Ee(),Tr=r(m(y));E(Tr,{c:"none"});var Dr=r(Tr,2);E(Dr,{c:"none"});var Gr=r(Dr,2);E(Gr,{c:"none"}),o(),a(q,y)}})}}),a(v,t)}}),a(d,$)}})}}),a(Br,B)}export{Ze as component};
