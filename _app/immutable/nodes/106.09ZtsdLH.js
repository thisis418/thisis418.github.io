import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as d,a as m,b as e,s as r,n as o,t as y,c as T,r as H}from"../chunks/B1HoO4k0.js";import{T as lr}from"../chunks/CcX1cm_-.js";import{P as w}from"../chunks/Dm5OXtVt.js";import{P as v}from"../chunks/B8FEnsbH.js";import{M as a}from"../chunks/DeNBXx_4.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */import{C as _r}from"../chunks/DjaYINj5.js";import{H as L}from"../chunks/VyKLllFE.js";import{T as mr}from"../chunks/CYEUtE_3.js";import{P as cr}from"../chunks/BOV-mclC.js";import{L as pr}from"../chunks/DGFEnqK6.js";import{C as M}from"../chunks/BnnrIVR6.js";var fr=d(`Рассмотрим методы сортировок, основными операциями в которых является обмен элементов.
    Да, эта та самая операция <!>.`,1),gr=d("Мы снова решаем задачу сортировки: нам нужно упорядочить ключи <!> по возрастанию относительного какого-то линейного порядка.",1),$r=d(`Наверное, самый очевидный метод сортировки &mdash; сравнивать ключи <!> и <!>,
    и, если <!>, поменять местами записи <!> и <!>.
    Такой операцией мы последовательно устраняем инверсии в перестановке.
    Значит в какой-то момент мы дойдем до перестановки без инверсий. Это и будет наш отсортированный массив.`,1),hr=d(`Пусть <!> &mdash; перестановка элементов <!>,
    и <!> &mdash; соответствующая ей таблица инверсий.`,1),br=d(`После очередного прохода при сортировке пузырьком перестановка <!> преобразуется в перестановку <!>.
    Таблица инверсий получившейся перестановки <!>.
    Новая таблица инверсий получается из старой путём уменьшения каждого ненулевого элемента на <!>.`,1),ur=d("<!> <!>",1),Pr=d(`Если перед <!> имеется больший элемент,
    то <!> поменяется местами с наибольшим из предшествующих элементов.
    Получается, что <!> уменьшится на <!>.
    А если перед <!> нет большего элемента, то <!> никогда ни с кем не
    поменяется,
    и <!> так и останется равным <!>.`,1),jr=d(`Если <!> &mdash; таблица инверсий
    исходной перестановки <!>, то`,1),kr=d("где <!> &mdash; значение <!> перед началом <!>-го прохода.",1),xr=d("После <!> проходов сортировки значение переменной <!> будет равно",1),qr=d("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),wr=d("<b>Анализ распределения <!> &mdash; количества обменов</b>"),Ar=d(`Значение <!> равно числу инверсий
    в перестановке <!>.
    Распределение числа инверсий мы знаем, его параметры`,1),yr=d("<!> <!> <!>",1),Cr=d("<b>Анализ распределения <!> &mdash; количества проходов</b>"),Kr=d("Вероятность того, что нам потребуется не более <!> проходов, равна произведению <!> и числа таблиц инверсий, не содержащих компонент равных <!> или больше.",1),Or=d("Значит вероятность того, что нам потребуется ровно <!> проходов равна",1),Sr=d(`Величина <!> подробно анализировалась в <!>.
    Нам достаточно асимптотического поведения <!>.`,1),Br=d("Подставляем асимптотическое выражение для <!> и получаем",1),Rr=d("Получаем результат анализа распределения <!> &mdash; количества проходов при сортировке пузырьком",1),Tr=d("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Hr=d("<b>Анализ распределения <!> &mdash; количества сравнений.</b>"),Lr=d(`Итак, нам нужно проанализировать величину <!>,
    где <!>.
    Пусть <!> &mdash; число таких таблиц инверсий <!>,
    для которых при <!> либо <!>, либо <!>.`,1),Mr=d(`Тогда вероятность того, что количество сравнений <!> будет
    не больше <!> выражается через <!>`,1),Nr=d("Значит вероятность того, что количество сравнений <!> будет в точности <!> равна",1),zr=d("<!> <!> <!> <!> <!> <!> <!>",1),Dr=d(`Сортировка пузырьком, конечно, рабочая, но она относительно медленная.
    В процессе сортировки пузырьком совершается довольно много лишних сравнений,
    и элемент не может за один проход переместиться более чем на <!> позицию,
    поэтому если наименьший элемент будет самым крайним, то нам потребуется максимальное количество сравнений.`,1),Er=d(`Все эти особенности процесса сортировки пузырьком наталкивают на мысли о сортировке,
    которая будет чередовать направления прохода по массиву.
    Кеннет Айверсон в 1962 году сделал интересное наблюдение:
    если две записи <!> и <!> не поменялись местами
    при двух последовательных проходах в обоих направлениях,
    то они уже стоят на своих местах и их можно исключить из дальнейшего рассмотрения.`,1),Fr=d("<!> <!>",1),Gr=d(`Пусть снова <!> &mdash; таблица инверсий
    исходной перестановки <!>.
    Считаем величины <!> &mdash; количество проходов, <!> &mdash; количество обменов и <!> &mdash; количество сравнений.`,1),Ir=d("где <!> &mdash; значение <!> перед началом <!>-го прохода.",1),Jr=d("<!> <!> <!>",1),Qr=d("<!> <!>",1),Ur=d("Алгоритм будет работать для <!>.",1),Vr=d(`Вычислим <!> &mdash;
    наименьшее такое целое число, для которого <!>.`,1),Wr=d("<!> <!>",1),Xr=d("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function $a(tr){var N=Xr(),z=m(N);lr(z,{title:"Сортировка обменами"});var D=r(z,2);w(D,{children:(p,x)=>{v(p,{children:(n,$)=>{o();var l=fr(),i=r(m(l));_r(i,{c:"swap"}),o(),e(n,l)}})}});var E=r(D,2);w(E,{children:(p,x)=>{v(p,{children:(n,$)=>{o();var l=gr(),i=r(m(l));a(i,{m:"K_1, K_2, \\dotsc, K_n"}),o(),e(n,l)}})}});var F=r(E,2);L(F,{anchor:"bubble-sort",children:(p,x)=>{o();var n=y("Сортировка пузырьком");e(p,n)}});var G=r(F,2);w(G,{children:(p,x)=>{v(p,{children:(n,$)=>{o();var l=$r(),i=r(m(l));a(i,{m:"K_i"});var f=r(i,2);a(f,{m:"K_j"});var t=r(f,2);a(t,{m:"K_i > K_j"});var _=r(t,2);a(_,{m:"R_i"});var c=r(_,2);a(c,{m:"R_j"}),o(),e(n,l)}})}});var I=r(G,2);M(I,{code:`
input mutable array[int] a[n]

int last_swap
int bound = n - 1
bool exchanges_occurred = true

while exchanges_occurred and bound > 0:
    exchanges_occurred = false
    last_swap = 0

    for j = 0; j < bound; j++:
        if a[j] > a[j + 1]:
            swap a[j], a[j + 1]
            exchanges_occurred = true
            last_swap = j

    bound = last_swap
`});var J=r(I,2);mr(J,{title:"Процесс сортировки пузырьком",children:(p,x)=>{w(p,{children:(n,$)=>{var l=ur(),i=m(l);v(i,{children:(t,_)=>{o();var c=hr(),g=r(m(c));a(g,{m:"\\sigma_1, \\sigma_2, \\dotsc, \\sigma_n"});var P=r(g,2);a(P,{m:"\\{1, 2, \\dotsc, n\\}"});var s=r(P,2);a(s,{m:"b_1, b_2, \\dotsc, b_n"}),o(),e(t,c)}});var f=r(i,2);v(f,{children:(t,_)=>{o();var c=br(),g=r(m(c));a(g,{m:"\\sigma_1, \\sigma_2, \\dotsc, \\sigma_n"});var P=r(g,2);a(P,{m:"\\sigma_1', \\sigma_2', \\dotsc, \\sigma_n'"});var s=r(P,2);a(s,{m:"b_1', b_2', \\dotsc, b_n'"});var b=r(s,2);a(b,{m:"1"}),o(),e(t,c)}}),e(n,l)}})}});var Q=r(J,2);cr(Q,{children:(p,x)=>{w(p,{children:(n,$)=>{v(n,{children:(l,i)=>{o();var f=Pr(),t=r(m(f));a(t,{m:"\\sigma_j"});var _=r(t,2);a(_,{m:"\\sigma_j"});var c=r(_,2);a(c,{m:"b_{\\sigma_j}"});var g=r(c,2);a(g,{m:"1"});var P=r(g,2);a(P,{m:"\\sigma_j"});var s=r(P,2);a(s,{m:"\\sigma_j"});var b=r(s,2);a(b,{m:"b_{\\sigma_j}"});var u=r(b,2);a(u,{m:"0"}),o(),e(l,f)}})}})}});var U=r(Q,2);w(U,{children:(p,x)=>{var n=qr(),$=m(n);v($,{children:(s,b)=>{o();var u=y("Каждый алгоритм сортировки обменами, в том числе и сортировка пузырьком, характеризуется тремя величинами:");e(s,u)}});var l=r($,2);a(l,{display:!0,m:`\\align{A &= \\text{количество проходов} \\\\
                  S &= \\text{количество обменов} \\\\
                  C &= \\text{количество сравнений}}`});var i=r(l,2);v(i,{children:(s,b)=>{o();var u=jr(),k=r(m(u));a(k,{m:"b_1, b_2, \\dotsc, b_n"});var A=r(k,2);a(A,{m:"\\sigma_1, \\sigma_2, \\dotsc, \\sigma_n"}),o(),e(s,u)}});var f=r(i,2);a(f,{display:!0,m:`\\align{
          A &= 1 + \\max(b_1, b_2, \\dotsc, b_n) \\\\
          S &= b_1 + b_2 + \\dotsb + b_n \\\\
          C &= c_1 + c_2 + \\dotsb + c_A}`});var t=r(f,2);v(t,{children:(s,b)=>{o();var u=kr(),k=r(m(u));a(k,{m:"c_j"});var A=r(k,2);a(A,{m:"\\code{bound} - 1"});var K=r(A,2);a(K,{m:"j"}),o(),e(s,u)}});var _=r(t,2);v(_,{children:(s,b)=>{o();var u=xr(),k=r(m(u));a(k,{m:"t"});var A=r(k,2);_r(A,{c:"bound"}),o(),e(s,u)}});var c=r(_,2);a(c,{display:!0,m:"\\max~ \\{b_i + i \\mid \\forall b_i \\ge t \\} - t \\quad\\text{при}~ 0 \\le t \\le \\max(b_1, b_2, \\dotsc, b_n)"});var g=r(c,2);v(g,{children:(s,b)=>{o();var u=y("Их этого факта получаем, что");e(s,u)}});var P=r(g,2);a(P,{display:!0,m:"c_j = \\max~ \\{ b_i + i \\mid \\forall b_i \\ge j - 1 \\} - j"}),e(p,n)}});var V=r(U,2);w(V,{children:(p,x)=>{var n=yr(),$=m(n);v($,{children:(f,t)=>{var _=wr(),c=r(T(_));a(c,{m:"S"}),o(),H(_),e(f,_)}});var l=r($,2);v(l,{children:(f,t)=>{o();var _=Ar(),c=r(m(_));a(c,{m:"S = b_1 + b_2 + \\dotsb + b_n"});var g=r(c,2);a(g,{m:"\\sigma_1, \\sigma_2, \\dotsc, \\sigma_n"}),o(),e(f,_)}});var i=r(l,2);a(i,{display:!0,m:`{\\large S :} \\quad
          \\min = 0 ,\\quad
          \\ave = n \\, (n-1) / 4  ,\\quad
          \\max = n \\, (n-1) / 2  ,\\quad
          \\dev = \\frac{1}{6}\\sqrt{n \\, (n-1) \\, (n + 5/2)}
          `}),e(p,n)}});var W=r(V,2);w(W,{children:(p,x)=>{var n=Tr(),$=m(n);v($,{children:(j,C)=>{var h=Cr(),q=r(T(h));a(q,{m:"A"}),o(),H(h),e(j,h)}});var l=r($,2);v(l,{children:(j,C)=>{o();var h=Kr(),q=r(m(h));a(q,{m:"k"});var S=r(q,2);a(S,{m:"1/n!"});var R=r(S,2);a(R,{m:"k"}),o(),e(j,h)}});var i=r(l,2);a(i,{display:!0,m:"\\prob (A \\le k) = \\frac{k^{n-k} \\, k!}{n!} \\quad\\text{при}~ 1 \\le k \\le n"});var f=r(i,2);v(f,{children:(j,C)=>{o();var h=Or(),q=r(m(h));a(q,{m:"k"}),o(),e(j,h)}});var t=r(f,2);a(t,{display:!0,m:"\\prob (A = k) = \\prob (A \\le k) - \\prob(A \\le k-1) = \\frac{1}{n!} \\Bigl( k^{n-k} \\, k! - (k-1)^{n-k+1} \\, (k-1)! \\Bigr)"});var _=r(t,2);v(_,{children:(j,C)=>{o();var h=y("Среднее значение вычисляем просто по формуле математического ожидания, выполнив суммирование по частям");e(j,h)}});var c=r(_,2);a(c,{display:!0,m:"\\expect A = \\sum_{k=1}^n k \\cdot \\prob(A = k) = n + 1 - \\sum_{k=0}^n \\frac{k^{n-k} \\, k!}{n!} = n + 1 - P(n)"});var g=r(c,2);v(g,{children:(j,C)=>{o();var h=Sr(),q=r(m(h));a(q,{m:"P(n)"});var S=r(q,2);pr(S,{to:"/calculus/function-properties/asymptotics#sums-factorial",children:(ir,Yr)=>{o();var vr=y("разделе «Факториальные суммы» статьи «Асимптотика»");e(ir,vr)},$$slots:{default:!0}});var R=r(S,2);a(R,{m:"P(n) = \\sqrt{\\pi n/2} - 2/3 + O(1/\\sqrt{n})"}),o(),e(j,h)}});var P=r(g,2);v(P,{children:(j,C)=>{o();var h=y("В итоге получаем, что");e(j,h)}});var s=r(P,2);a(s,{display:!0,m:"\\expect A = n - \\sqrt{\\frac{\\pi n}{2}} + \\frac{5}{3} + O \\left( \\frac{1}{\\sqrt{n}} \\right)"});var b=r(s,2);v(b,{children:(j,C)=>{o();var h=y("Теперь посчитаем дисперсию");e(j,h)}});var u=r(b,2);a(u,{display:!0,m:`\\align{
      \\var A &= \\sum_{k=1}^n k^2 \\cdot \\prob(A = k) - (\\expect A)^2
      = \\left( (n+1)^2 - 2 \\sum_{k=0}^n k \\cdot \\frac{k^{n-k} \\, k!}{n!} - \\sum_{k=0}^n \\frac{k^{n-k} \\, k!}{n!} \\right) - \\left( n + 1 - \\sum_{k=0}^n \\frac{k^{n-k} \\, k!}{n!} \\right)^2 =\\\\
      &= \\Bigl( (n+1)^2 - 2 \\bigl( P(n+1) \\cdot (n+1) - (n+1) \\bigr) - P(n) \\Bigr) - \\bigl( n + 1 - P(n) \\bigr)^2 = \\\\
      &= 2 \\, (n+1) \\, \\bigl( 1 + P(n) - P(n+1) \\bigr) - P(n) - P(n)^2
      }`});var k=r(u,2);v(k,{children:(j,C)=>{o();var h=Br(),q=r(m(h));a(q,{m:"P(n)"}),o(),e(j,h)}});var A=r(k,2);a(A,{display:!0,m:"\\var A = \\left( 2 - \\frac{\\pi}{2} \\right) \\cdot n - \\frac{2}{3} \\sqrt{\\frac{\\pi n}{2}} + \\frac{2}{9} + O \\left( \\frac{1}{\\sqrt{n}} \\right)"});var K=r(A,2);v(K,{children:(j,C)=>{o();var h=y("Теперь можно вычислить стандартное отклонение");e(j,h)}});var O=r(K,2);a(O,{display:!0,m:`\\dev A
      = \\sqrt{\\left( 2 - \\frac{\\pi}{2} \\right) \\cdot n - \\frac{2}{3} \\sqrt{\\frac{\\pi n}{2}} + \\frac{2}{9} + O \\left( \\frac{1}{\\sqrt{n}} \\right)}
      = \\sqrt{2 - \\frac{\\pi}{2}} \\cdot \\sqrt{n} - \\frac{\\sqrt{\\pi/2}}{3 \\sqrt{2 - \\pi/2}} + O\\left(\\frac{1}{\\sqrt{n}}\\right)`});var B=r(O,2);v(B,{children:(j,C)=>{o();var h=Rr(),q=r(m(h));a(q,{m:"A"}),o(),e(j,h)}});var sr=r(B,2);a(sr,{display:!0,m:`\\align{
          {\\large A :} \\quad&
          \\min = 1 ,\\quad
          \\ave = n - \\sqrt{\\frac{\\pi n}{2}} + \\frac{5}{3} + O \\left( \\frac{1}{\\sqrt{n}} \\right)  ,\\quad
          \\max = n  ,\\\\&
          \\dev = \\sqrt{2 - \\frac{\\pi}{2}} \\cdot \\sqrt{n} - \\frac{\\sqrt{\\pi/2}}{3 \\sqrt{2 - \\pi/2}} + O\\left(\\frac{1}{\\sqrt{n}}\\right)
          }`}),e(p,n)}});var X=r(W,2);w(X,{children:(p,x)=>{var n=zr(),$=m(n);v($,{children:(g,P)=>{var s=Hr(),b=r(T(s));a(b,{m:"C"}),o(),H(s),e(g,s)}});var l=r($,2);v(l,{children:(g,P)=>{o();var s=Lr(),b=r(m(s));a(b,{m:"C = c_1 + c_2 + \\dotsb + c_A"});var u=r(b,2);a(u,{m:"c_j = \\max~ \\{ b_i + i \\mid \\forall b_i \\ge j - 1 \\} - j"});var k=r(u,2);a(k,{m:"f_j (k)"});var A=r(k,2);a(A,{m:"b_1, b_2, \\dotsc, b_n"});var K=r(A,2);a(K,{m:"1 \\le i \\le n"});var O=r(K,2);a(O,{m:"b_i < j-1"});var B=r(O,2);a(B,{m:"b_i + i - j \\le k"}),o(),e(g,s)}});var i=r(l,2);a(i,{display:!0,m:"f_j (k) = (j+k)! \\, (j-1)^{n-j-k} \\quad\\text{для}~ 0 \\le k \\le n - j"});var f=r(i,2);v(f,{children:(g,P)=>{o();var s=Mr(),b=r(m(s));a(b,{m:"c_j"});var u=r(b,2);a(u,{m:"k"});var k=r(u,2);a(k,{m:"f_j (k)"}),e(g,s)}});var t=r(f,2);a(t,{display:!0,m:"\\prob (c_j \\le k) = \\frac{f_j (k)}{n!}"});var _=r(t,2);v(_,{children:(g,P)=>{o();var s=Nr(),b=r(m(s));a(b,{m:"c_j"});var u=r(b,2);a(u,{m:"k"}),o(),e(g,s)}});var c=r(_,2);a(c,{display:!0,m:"\\prob (c_j = k) = \\frac{f_j (k) - f_j (k-1)}{n!} \\quad\\text{при}~ k \\ge 1"}),e(p,n)}});var Y=r(X,2);L(Y,{children:(p,x)=>{o();var n=y("Шейкерная сортировка");e(p,n)}});var Z=r(Y,2);w(Z,{children:(p,x)=>{var n=Fr(),$=m(n);v($,{children:(i,f)=>{o();var t=Dr(),_=r(m(t));a(_,{m:"1"}),o(),e(i,t)}});var l=r($,2);v(l,{children:(i,f)=>{o();var t=Er(),_=r(m(t));a(_,{m:"R_j"});var c=r(_,2);a(c,{m:"R_{j+1}"}),o(),e(i,t)}}),e(p,n)}});var rr=r(Z,2);M(rr,{code:`
input mutable array[int] a[n]

int last_swap
int left_bound = 0
int right_bound = n - 1
bool exchanges_occurred = true

while exchanges_occurred and left_bound < right_bound:
    exchanges_occurred = false
    last_swap = left_bound

    for j = left_bound; j < right_bound; j++:
        if a[j] > a[j + 1]:
            swap a[j], a[j + 1]
            exchanges_occurred = true
            last_swap = j

    right_bound = last_swap

    if not exchanges_occurred:
        break

    exchanges_occurred = false
    last_swap = right_bound

    for j = right_bound; j > left_bound; j--:
        if a[j] < a[j - 1]:
            swap a[j], a[j - 1]
            exchanges_occurred = true
            last_swap = j

    left_bound = last_swap
`});var ar=r(rr,2);w(ar,{children:(p,x)=>{var n=Jr(),$=m(n);v($,{children:(f,t)=>{o();var _=Gr(),c=r(m(_));a(c,{m:"b_1, b_2, \\dotsc, b_n"});var g=r(c,2);a(g,{m:"\\sigma_1, \\sigma_2, \\dotsc, \\sigma_n"});var P=r(g,2);a(P,{m:"A"});var s=r(P,2);a(s,{m:"S"});var b=r(s,2);a(b,{m:"C"}),o(),e(f,_)}});var l=r($,2);a(l,{display:!0,m:`\\align{
          A &= 1 + \\lceil \\max(b_1, b_2, \\dotsc, b_n) / 2 \\rceil \\\\
          S &= b_1 + b_2 + \\dotsb + b_n \\\\
          C &= c_1 + c_2 + \\dotsb + c_A}`});var i=r(l,2);v(i,{children:(f,t)=>{o();var _=Ir(),c=r(m(_));a(c,{m:"c_j"});var g=r(c,2);a(g,{m:"2 \\cdot (\\code{right\\_bound} - \\code{left\\_bound})"});var P=r(g,2);a(P,{m:"j"}),o(),e(f,_)}}),e(p,n)}});var or=r(ar,2);L(or,{children:(p,x)=>{o();var n=y("Сортировка Бетчера");e(p,n)}});var er=r(or,2);w(er,{children:(p,x)=>{var n=Qr(),$=m(n);v($,{children:(i,f)=>{o();var t=y(`Пока у нас получались только сортировки, которые имеют квадратичную временную сложность.
    Если мы хотим, чтобы наш алгоритм работал быстрее, нам необходимо сравнивать несоседние пары ключей,
    иначе иначе нам придётся сделать столько сравнений, сколько инверсий в перестановке.`);e(i,t)}});var l=r($,2);v(l,{children:(i,f)=>{o();var t=y(`В 1964 году Кеннет Бетчер открыл интересный способ организации сравнений,
    который позволяет значительно ускорить сортировку и даёт возможность её параллелить.`);e(i,t)}}),e(p,n)}});var nr=r(er,2);w(nr,{children:(p,x)=>{var n=Wr(),$=m(n);v($,{children:(i,f)=>{o();var t=Ur(),_=r(m(t));a(_,{m:"n \\ge 2"}),o(),e(i,t)}});var l=r($,2);v(l,{children:(i,f)=>{o();var t=Vr(),_=r(m(t));a(_,{m:"t = \\lceil \\log_2 n \\rceil"});var c=r(_,2);a(c,{m:"2^t \\ge n"}),o(),e(i,t)}}),e(p,n)}});var dr=r(nr,2);M(dr,{code:`
input mutable array[int] records[n]

t = 0
while (1 << t) < N:
    t += 1
p = 1 << (t - 1)

while p > 0:
    q = 1 << (t - 1)
    r = 0
    d = p

    while q != p:
        for int i = 0; i < n - d; i++:
            if i & p == r:
                if records[i] > records[i + d]:
                    swap records[i], records[i + d]

        d = q - p
        q = q // 2
        r = p

    for int i = 0; i < n - d; i++:
        if (i & p) == r:
            if records[i][0] > records[i + d][0]:
                swap records[i], records[i + d]

    p = p // 2
`}),e(tr,N)}export{$a as component};
