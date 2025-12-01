import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as t,a as v,b as o,s as r,n,t as x}from"../chunks/BWp35gWV.js";import{T as pr}from"../chunks/CR7k0xtG.js";import{P as B}from"../chunks/DPzc5wQr.js";import{M as a}from"../chunks/BqyEoRxA.js";import{P as i}from"../chunks/B7flgP-x.js";import{H as S}from"../chunks/DXKx2xvL.js";import{C as mr}from"../chunks/BvAJckrt.js";import{C as sr}from"../chunks/BmgYHZay.js";import{S as gr}from"../chunks/CBbFRhrb.js";import"../chunks/DsAObCLR.js";var hr=t("Мы решаем задачу сортировки: нам нужно упорядочить ключи <!> по возрастанию относительного какого-то линейного порядка.",1),br=t("Допустим, мы уже отсортировали <!> записей так, что",1),ur=t(`Теперь нам нужно вставить следующий ключ <!>.
    Будем сравнивать его по очереди с ключами <!>, пока не обнаружим,
    что его нужно вставить между ключами <!> и <!>.
    Сдвинем все ключи, начиная с <!>, на одну позицию и вставим запись <!> на место <!>.`,1),Pr=t("<!> <!> <!> <!>",1),kr=t("Количество сравнений в этом алгоритме равно числу инверсий перестановки <!> плюс количество выходных сравнений в цикле <!> &mdash; <!>",1),xr=t("Количество записей (присваиваний элементов <!>) совпадает с количеством сравнений.",1),yr=t("<!> <!> <!>",1),Or=t(`В алгоритме простых вставок новый <!>-й элемент сравнивался
    в среднем с <!> уже отсортированными элементами по порядку.
    В итоге общее количество сравнений в среднем равно <!>.`,1),Br=t(`Итого мы для каждого элемента с номером <!> проводим бинарный поиск
    в подмассиве размера <!> (все, что находится спереди).
    В итоге максимальное количество сравнений`,1),Kr=t("<!> <!> <!> <!>",1),qr=t(`Мы получили, что количество сравнений близко к оптимальному, и это не может не радовать.
    Однако, наша сортировка всё равно выполняет <!> записей,
    что сводит на нет все наши старания.`,1),Dr=t(`Проблема в том, что вставка в массив выполняется за <!> записей.
    Вообще, <b>не существует</b> линейной структуры данных,
    обеспечивающей одновременно поиск и вставку быстрее, чем за <!> операций.
    Можно использовать нелинейные структуры, например сбалансированные деревья поиска или список с пропусками,
    но тогда у нас будет нехилый временной оверхед на саму структуру.`,1),Tr=t("Смягчить проблему можно, рассмотрев особый метод <b>двухпутевых вставок</b>.",1),Sr=t("<!> <!> <!>",1),Cr=t(`Выделим под массив участок памяти размером <!>, а сам массив поместим в середину.
    Будем поддерживать указатели на начало массива и его длину, чтобы не потерять массив в аллоцированном участке.`,1),wr=t(`При вставке элемента в массив определяем, к какому краю ближе место вставки <!>,
    и расширяем массив в сторону этого края, копируя <!> элементов вместо <!>.
    Таким образом мы в <!> раза уменьшили ожидаемое количество записей,
    получив алгоритм со средним количество записей <!> вместо <!>.`,1),Hr=t("<!> <!>",1),Mr=t(`Массив представляем в виде блочного списка с размером блока <!>.
    Поиск в блочном списке длины <!> занимает <!> операций,
    а вставка занимает <!> операций, если мы знаем, в какой блок вставлять (имеем на него ссылку).`,1),zr=t(`Минимум достигается при <!>,
    общее количество операций при сортировке блочными вставками
    получается равным <!>.`,1),Ar=t("<!> <!> <!> <!> <!>",1),Er=t(`Если в процессе сортировки мы перемещаем элементы на <!> позицию за операцию,
    время выполнение будет в любом случае <!>.`,1),Fr=t("Пусть <!> &mdash; случайная перестановка <!> элементов массива.",1),Gr=t(`Рассмотрим величину <!> &mdash;
    расстояние от элемента исходном массиве до его правильного положения в отсортированном массиве.
    Предположив равномерное распределение перестановок <!>, найдём среднее`,1),Ir=t("<b>Полное расстояние перемещения</b> &mdash; величина",1),Jr=t(`Это сумма расстояний, на которые элементы уехали от своих правильных позиций при перестановке <!>.
    Величина <!> служит оценкой сложности предстоящего процесса сортировки.`,1),Lr=t("Минимум считается просто: <!> при <!>.",1),Nr=t(`Максимум достигается на перестановке, которая максимально далеко перемещает каждый элемент.
    При чётном <!> это полный разворот,
    а при нечётном <!> надо центральный элемент оставить на месте.
    Итого <!>.`,1),Qr=t("Для подсчёта среднего значения воспользуемся результатом для величины <!>:",1),Rr=t("Для вычисления дисперсии необходимо сначала найти дисперсию <!> и ковариации расстояний для разных элементов, то есть для величин <!> и <!>.",1),Ur=t(`Давайте введем величину <!>, характеризующую совместную удалённость элементов массива от двух
    фиксированных элементов <!>.`,1),Vr=t(`<!>, поэтому можно предположить, что <!>,
    разбить отрезок суммирования на <!> подотрезка,
    раскрыть модули в каждом подотрезке и найти представление <!>:`,1),Wr=t("Нужны все эти страшные формулы для расчёта дисперсии <!>",1),Xr=t(`Многочлен получен подставлением асимптотических оценок для всех компонент суммы.
    Если очень надо, можно подставить все формулы и посчитать точное значение дисперсии.
    В <!>, кстати, скрыто что-то около <!>.`,1),Yr=t("Можем заключить, что полное расстояние перемещения <!> распределено в соответствии с",1),Zr=t("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),ra=t(`Анализ величины <!> показывает,
    что для эффективного метода сортировки вставками необходим механизм,
    который позволил бы перемещать элементы большими скачками.`,1),aa=t("<!> <!> <!>",1),na=t("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function $a(cr){var C=na(),w=v(C);pr(w,{title:"Сортировка вставками"});var H=r(w,2);B(H,{children:($,y)=>{i($,{children:(d,p)=>{n();var j=hr(),h=r(v(j));a(h,{m:"K_1, K_2, \\dotsc, K_n"}),n(),o(d,j)}})}});var M=r(H,2);S(M,{children:($,y)=>{n();var d=x("Метод простых вставок");o($,d)}});var z=r(M,2);B(z,{children:($,y)=>{var d=Pr(),p=v(d);i(p,{children:(c,_)=>{n();var l=br(),g=r(v(l));a(g,{m:"j-1"}),n(),o(c,l)}});var j=r(p,2);a(j,{display:!0,m:"K_1 \\le K_2 \\le \\dotsb \\le K_{j-2} \\le K_{j-1}"});var h=r(j,2);i(h,{children:(c,_)=>{n();var l=ur(),g=r(v(l));a(g,{m:"K_j"});var u=r(g,2);a(u,{m:"K_{j-1}, K_{j-2}, \\dotsc K_1"});var k=r(u,2);a(k,{m:"K_i"});var O=r(k,2);a(O,{m:"K_{i+1}"});var K=r(O,2);a(K,{m:"K_{i+1}"});var D=r(K,2);a(D,{m:"K_j"});var T=r(D,2);a(T,{m:"i+1"}),n(),o(c,l)}});var f=r(h,2);i(f,{children:(c,_)=>{n();var l=x("Другими словами, мы каждый раз берем новый ключ и вставляем его в правильное место.");o(c,l)}}),o($,d)}});var A=r(z,2);mr(A,{code:`function insertion_sort(mutable array a[n]):
    for int j = 1; j < n; j++:
        int i = j - 1
        key = a[j]

        while i >= 0 and a[i] > key:
            a[i+1] = a[i]
            i -= 1

        a[i+1] = key`});var E=r(A,2);B(E,{children:($,y)=>{var d=yr(),p=v(d);i(p,{children:(f,c)=>{n();var _=kr(),l=r(v(_));a(l,{m:"(K_1, K_2, \\dotsc, K_n)"});var g=r(l,2);sr(g,{c:"while"});var u=r(g,2);a(u,{m:"n-1"}),o(f,_)}});var j=r(p,2);a(j,{display:!0,m:`\\min = n-1  ,\\quad
          \\ave = (n^2 + 3n - 4) / 4  ,\\quad
          \\max = (n^2 + n - 2) / 2  ,\\quad
          \\dev = \\frac{1}{6}\\sqrt{n \\, (n-1) \\, (n + 5/2)}
          `});var h=r(j,2);i(h,{children:(f,c)=>{n();var _=xr(),l=r(v(_));sr(l,{c:"a"}),n(),o(f,_)}}),o($,d)}});var F=r(E,2);S(F,{children:($,y)=>{n();var d=x("Бинарные и двухпутевые вставки");o($,d)}});var G=r(F,2);B(G,{children:($,y)=>{var d=Kr(),p=v(d);i(p,{children:(c,_)=>{n();var l=Or(),g=r(v(l));a(g,{m:"j"});var u=r(g,2);a(u,{m:"(j-1)/2"});var k=r(u,2);a(k,{m:"\\sum_{j=2}^n (j-1)/2 = (n^2 - n) / 4 = O(n^2)"}),n(),o(c,l)}});var j=r(p,2);i(j,{children:(c,_)=>{n();var l=x(`Можно использовать то, что элементы, в которые мы хотим вставить новый ключ, уже отсортированы.
    Будем искать место вставки с помощью бинарного поиска.
    До конца это проблему не решит, ведь кроме поиска места вставки нужно её произвести.
    Но даже так это неплохой буст к производительности`);o(c,l)}});var h=r(j,2);i(h,{children:(c,_)=>{n();var l=Br(),g=r(v(l));a(g,{m:"j+1"});var u=r(g,2);a(u,{m:"j"}),n(),o(c,l)}});var f=r(h,2);a(f,{display:!0,m:`\\sum_{j=1}^{n-1} \\bigl( \\lfloor \\log_2 j \\rfloor + 1 \\bigr)
          = n \\cdot \\lceil \\log_2 n \\rceil - 2^{\\lceil \\log_2 n \\rceil} + 1 = n \\log_2 n - n + O(1)`}),o($,d)}});var I=r(G,2);B(I,{children:($,y)=>{var d=Sr(),p=v(d);i(p,{children:(f,c)=>{n();var _=qr(),l=r(v(_));a(l,{m:"O \\bigr( n^2 \\bigr)"}),n(),o(f,_)}});var j=r(p,2);i(j,{children:(f,c)=>{n();var _=Dr(),l=r(v(_));a(l,{m:"O(n)"});var g=r(l,4);a(g,{m:"O(n)"}),n(),o(f,_)}});var h=r(j,2);i(h,{children:(f,c)=>{n();var _=Tr();n(2),o(f,_)}}),o($,d)}});var J=r(I,2);gr(J,{children:($,y)=>{n();var d=x("Двухпутевые вставки");o($,d)}});var L=r(J,2);B(L,{children:($,y)=>{var d=Hr(),p=v(d);i(p,{children:(h,f)=>{n();var c=Cr(),_=r(v(c));a(_,{m:"3n"}),n(),o(h,c)}});var j=r(p,2);i(j,{children:(h,f)=>{n();var c=wr(),_=r(v(c));a(_,{m:"j"});var l=r(_,2);a(l,{m:"\\min(n-j, j)"});var g=r(l,2);a(g,{m:"n-j"});var u=r(g,2);a(u,{m:"2"});var k=r(u,2);a(k,{m:"n^2/8 + O(n)"});var O=r(k,2);a(O,{m:"n^2/4 + O(n)"}),n(),o(h,c)}}),o($,d)}});var N=r(L,2);gr(N,{children:($,y)=>{n();var d=x("Блочные вставки");o($,d)}});var Q=r(N,2);B(Q,{children:($,y)=>{var d=Ar(),p=v(d);i(p,{children:(_,l)=>{n();var g=x(`Есть способ немного сгладить проблему линейных структур данных.
    Нужно использовать блочный список.`);o(_,g)}});var j=r(p,2);i(j,{children:(_,l)=>{n();var g=Mr(),u=r(v(g));a(u,{m:"k"});var k=r(u,2);a(k,{m:"n"});var O=r(k,2);a(O,{m:"O(n/k + \\log k)"});var K=r(O,2);a(K,{m:"O(k)"}),n(),o(_,g)}});var h=r(j,2);i(h,{children:(_,l)=>{n();var g=x("Получается, что общее время работы алгоритма сортировки блочными вставками равно");o(_,g)}});var f=r(h,2);a(f,{display:!0,m:"\\sum_{j=1}^n \\bigl( O(j/k + \\log k) + O(k) \\bigr) = O \\left( \\frac{n^2}{k} + n \\log k + nk \\right)"});var c=r(f,2);i(c,{children:(_,l)=>{n();var g=zr(),u=r(v(g));a(u,{m:"k = \\sqrt{n}"});var k=r(u,2);a(k,{m:"O \\bigl( n^{3/2} \\bigr)"}),n(),o(_,g)}}),o($,d)}});var R=r(Q,2);B(R,{children:($,y)=>{i($,{children:(d,p)=>{n();var j=x(`Метод экзотический, имеет какой-то оверхед на структуру и не является широко универсальным,
    так как приходится следить за размерами блоков, совершать реаллокации и слияния.`);o(d,j)}})}});var U=r(R,2);S(U,{children:($,y)=>{n();var d=x("Сортировка Шелла");o($,d)}});var V=r(U,2);B(V,{children:($,y)=>{var d=Zr(),p=v(d);i(p,{children:(s,P)=>{n();var e=Er(),m=r(v(e));a(m,{m:"1"});var b=r(m,2);a(b,{m:"\\Omega \\bigl( n^2 \\bigr)"}),n(),o(s,e)}});var j=r(p,2);i(j,{children:(s,P)=>{n();var e=Fr(),m=r(v(e));a(m,{m:"\\sigma \\in \\S_n"});var b=r(m,2);a(b,{m:"n"}),n(),o(s,e)}});var h=r(j,2);i(h,{children:(s,P)=>{n();var e=Gr(),m=r(v(e));a(m,{m:"\\delta_j (\\sigma) \\defeq \\bigl| \\sigma(j) - j \\bigr|"});var b=r(m,2);a(b,{m:"\\sigma"}),n(),o(s,e)}});var f=r(h,2);a(f,{display:!0,m:`\\expect \\bigl( \\delta_j (\\sigma) \\bigr)
         = \\frac{1}{n} \\sum_{i=1}^n |i-j| = \\frac{1}{n} \\Bigg( \\frac{j \\, (j-1)}{2} + \\frac{(n-j) \\, (n-j+1)}{2} \\Bigg)`});var c=r(f,2);i(c,{children:(s,P)=>{var e=Ir();n(),o(s,e)}});var _=r(c,2);a(_,{display:!0,m:"D(\\sigma) \\defeq \\sum_{j=1}^n \\delta_j (n) = \\sum_{j=1}^n \\bigl| \\sigma(j) - j \\bigr|"});var l=r(_,2);i(l,{children:(s,P)=>{n();var e=Jr(),m=r(v(e));a(m,{m:"\\sigma"});var b=r(m,2);a(b,{m:"D(\\sigma)"}),n(),o(s,e)}});var g=r(l,2);i(g,{children:(s,P)=>{n();var e=Lr(),m=r(v(e));a(m,{m:"\\min_{\\sigma \\in \\S_n} D(\\sigma) = 0"});var b=r(m,2);a(b,{m:"\\sigma = \\1"}),n(),o(s,e)}});var u=r(g,2);i(u,{children:(s,P)=>{n();var e=Nr(),m=r(v(e));a(m,{m:"n"});var b=r(m,2);a(b,{m:"n"});var q=r(b,2);a(q,{m:"\\max_{\\sigma \\in \\S_n} D(\\sigma) = \\lfloor n^2 / 2 \\rfloor"}),n(),o(s,e)}});var k=r(u,2);i(k,{children:(s,P)=>{n();var e=Qr(),m=r(v(e));a(m,{m:"\\delta_j (\\sigma)"}),n(),o(s,e)}});var O=r(k,2);a(O,{display:!0,m:`\\expect \\bigl( D(\\sigma) \\bigr)
          = \\sum_{j=1}^n \\expect \\bigl( \\delta_j (\\sigma) \\bigr)
          = \\frac{2}{n} \\sum_{j=1}^n \\binom{j}{2} = \\frac{n^2-1}{3}`});var K=r(O,2);i(K,{children:(s,P)=>{n();var e=Rr(),m=r(v(e));a(m,{m:"\\delta_j (\\sigma)"});var b=r(m,2);a(b,{m:"\\delta_i (\\sigma)"});var q=r(b,2);a(q,{m:"\\delta_j (\\sigma)"}),n(),o(s,e)}});var D=r(K,2);a(D,{display:!0,m:`\\align{
          \\var \\delta_j (\\sigma)
          &= \\frac{1}{n} \\sum_{i=1}^n (i-j)^2 - \\left( \\frac{1}{n} \\sum_{i=1}^n |i-j| \\right)^2 = \\\\
          &= \\frac{1}{n} \\Biggl( 2 \\binom{j}{3} + \\binom{j}{2} + 2 \\binom{n-j+1}{3} + \\binom{n-j+1}{2} \\Biggr) - \\frac{1}{n^2} \\Biggl( \\binom{j}{2} + \\binom{n-j+1}{2} \\Biggr)^2 = \\\\!
          &= - \\frac{j^4}{n^2} + \\frac{2j^3}{n} - j^2 + \\frac{n^2}{12} + \\frac{2j^3}{n^2} - \\frac{3j^2}{n} + j - \\frac{j^2}{n^2} + \\frac{j}{n} - \\frac{1}{12}
          }`});var T=r(D,2);i(T,{children:(s,P)=>{n();var e=x("Ковариацию придётся вычислять через разбиение суммы");o(s,e)}});var X=r(T,2);a(X,{display:!0,m:`\\align{
          \\cov \\bigl( \\delta_i (\\sigma), \\delta_j (\\sigma) \\bigr)
          &= \\frac{1}{n \\, (n-1)} \\sum_{\\substack{1 \\le k, l \\le n \\\\! k \\neq l}} |k-i| \\cdot |l-j| \\\\!!
          &= \\frac{1}{n \\, (n-1)} \\Biggl( \\sum_{k=1}^n \\sum_{l=1}^n |k-i| \\cdot |l-j| - \\sum_{\\ell=1}^n |\\ell-i| \\cdot |\\ell-j| \\Biggr) = \\\\!!
          &= \\frac{1}{n \\, (n-1)} \\Biggl( \\sum_{k=1}^n |k-i| \\cdot \\sum_{l=1}^n |l-j| - \\sum_{\\ell=1}^n |\\ell-i| \\cdot |\\ell-j| \\Biggr)
          }`});var Y=r(X,2);i(Y,{children:(s,P)=>{n();var e=Ur(),m=r(v(e));a(m,{m:"T(i, j)"});var b=r(m,2);a(b,{m:"i, j"}),n(),o(s,e)}});var Z=r(Y,2);a(Z,{display:!0,m:"T(i, j) = \\sum_{\\ell=1}^n |\\ell-i| \\cdot |\\ell-j|"});var rr=r(Z,2);i(rr,{children:(s,P)=>{var e=Vr(),m=v(e);a(m,{m:"T(i, j) = T(j, i)"});var b=r(m,2);a(b,{m:"i > j"});var q=r(b,2);a(q,{m:"3"});var fr=r(q,2);a(fr,{m:"T(i, j)"}),n(),o(s,e)}});var ar=r(rr,2);a(ar,{display:!0,m:`\\align{
          T(i, j) &= \\bigl( |i-j| + 1 \\bigr) \\cdot \\binom{\\min(i,j)}{2} + 2 \\binom{\\min(i,j)}{3} + \\\\!!
                  &+ \\bigl( |i-j| - 1 \\bigr) \\cdot \\binom{|i-j|}{2} - 2 \\binom{|i-j|}{3} + \\\\!!
                  &+ \\bigl( |i-j| + 1 \\bigr) \\cdot \\binom{n - \\max(i,j) + 1}{2} + 2 \\binom{n - \\max(i,j) + 1}{3}
             }`});var nr=r(ar,2);i(nr,{children:(s,P)=>{n();var e=x("Далее, посчитав значение сумм");o(s,e)}});var or=r(nr,2);a(or,{display:!0,m:`\\sum_{k=1}^n |k-i| = \\binom{i}{2} + \\binom{n-i+1}{2} \\quad\\text{и}\\quad
          \\sum_{l=1}^n |l-j| = \\binom{j}{2} + \\binom{n-j+1}{2}`});var er=r(or,2);i(er,{children:(s,P)=>{n();var e=x("выражаем ковариацию");o(s,e)}});var _r=r(er,2);a(_r,{display:!0,m:`\\align{
          \\cov \\bigl( \\delta_i (\\sigma), \\delta_j (\\sigma) \\bigr)
          &= \\frac{1}{n \\, (n-1)} \\Biggl( \\sum_{k=1}^n |k-i| \\cdot \\sum_{l=1}^n |l-j| - \\sum_{\\ell=1}^n |\\ell-i| \\cdot |\\ell-j| \\Biggr) \\\\!!
          &= \\frac{1}{n \\, (n-1)} \\Biggl( \\Biggl( \\binom{i}{2} + \\binom{n-i+1}{2} \\Biggr) \\cdot \\Biggl( \\binom{j}{2} + \\binom{n-j+1}{2} \\Biggr) - T(i, j) \\Biggr)
          }`});var ir=r(_r,2);i(ir,{children:(s,P)=>{n();var e=Wr(),m=r(v(e));a(m,{m:"\\var D(\\sigma)"}),o(s,e)}});var tr=r(ir,2);a(tr,{display:!0,m:`\\var D(\\sigma)
          = \\sum_{j=1}^n \\var \\delta_j (\\sigma) + 2 \\sum_{1 \\le i < j \\le n} \\cov \\bigl( \\delta_i (\\sigma), \\delta_j (\\sigma) \\bigr)
          = \\frac{n^4}{9} - \\frac{13}{180} n^3 - \\frac{8}{45} n^2 + O(n)`});var dr=r(tr,2);i(dr,{children:(s,P)=>{n();var e=Xr(),m=r(v(e));a(m,{m:"O(n)"});var b=r(m,2);a(b,{m:"0.4 n + 0.3"}),n(),o(s,e)}});var lr=r(dr,2);a(lr,{display:!0,m:"\\dev D(\\sigma) = \\sqrt{\\frac{n^4}{9} - \\frac{13}{180} n^3 - \\frac{8}{45} n^2 + O(n)} = \\frac{n^2}{3} - \\frac{13}{360} n + O(1)"});var vr=r(lr,2);i(vr,{children:(s,P)=>{n();var e=Yr(),m=r(v(e));a(m,{m:"D(\\sigma)"}),n(),o(s,e)}});var jr=r(vr,2);a(jr,{display:!0,m:`\\min = 0  ,\\quad
          \\ave = \\frac{n^2-1}{3}  ,\\quad
          \\max = \\left\\lfloor \\frac{n^2}{2} \\right\\rfloor  ,\\quad
          \\dev = \\frac{n^2}{3} - \\frac{13}{360} n + O(1)
          `}),o($,d)}});var W=r(V,2);B(W,{children:($,y)=>{var d=aa(),p=v(d);i(p,{children:(f,c)=>{n();var _=ra(),l=r(v(_));a(l,{m:"D(\\sigma)"}),n(),o(f,_)}});var j=r(p,2);i(j,{children:(f,c)=>{n();var _=x(`Такой механизм предложил Дональд Льюис Шелл в 1959 году.
    На основе этого механизма построена сортировка Шелла.`);o(f,_)}});var h=r(j,2);i(h,{children:(f,c)=>{n();var _=x(`Основная идея — разбивать элементы на пары так,
    чтобы расстояние между элементами в одной паре было равно степени двойки.`);o(f,_)}}),o($,d)}});var $r=r(W,2);mr($r,{code:`
input mutable array[int] a[n]
input array[int] h[t]

for gap in h :
    for int j = gap; j < n; j++:
        current = a[j]
        i = j - gap

        while i >= 0 and current < a[i]:
            a[i + gap] = a[i]
            i -= gap

        a[i + gap] = current
`}),o(cr,C)}export{$a as component};
