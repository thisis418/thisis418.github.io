import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as _,a as d,b as a,s as r,n as e,t as U}from"../chunks/BWp35gWV.js";import{T as Mr}from"../chunks/CR7k0xtG.js";import{P as O}from"../chunks/DPzc5wQr.js";import{P as t}from"../chunks/B7flgP-x.js";/* empty css                *//* empty css                */import{S as B}from"../chunks/CBbFRhrb.js";import{C as F}from"../chunks/BvAJckrt.js";import"../chunks/i9XClpbl.js";/* empty css                */import{H as Sr}from"../chunks/DXKx2xvL.js";import{M as o}from"../chunks/BqyEoRxA.js";/* empty css                */import{L as I}from"../chunks/NE91WFFs.js";import{T as Or}from"../chunks/y0AHHn4v.js";import{D as Tr}from"../chunks/DlTIf4aM.js";import{P as Lr}from"../chunks/BBkyo9uE.js";import{E as Ur}from"../chunks/BJkbutPt.js";var Cr=_(`Чтобы узнать, является ли <!> простым числом, нужно взять случайное число <!> и
    проверить, выполняется ли <!>. Число <!> называется <b>свидетелем
    простоты</b>. Если равенство не выполняется, то с полной уверенностью можно сказать, что число составное.
    Если же <!> прошло тест, то всё равно есть вероятность, что оно не простое.`,1),Er=_(`Заметьте, что в малой теореме Ферма импликация идёт только в одну сторону:
    из взаимной простоты следует сравнение, но обратная импликация не всегда верна.
    Составные числа <!>, удовлетворяющие сравнению <!> для всех целых <!>, взаимнопростых с <!>, называются <b>числами Кармайкла</b>.
    Числа Кармайкла успешно проходят тест Ферма, хотя являются составными.`,1),Hr=_(`Давайте посмотрим на наименьшее число Кармайкла &mdash; <!>.
    Из китайской теоремы об остатках следует, что <!>.
    Возьмём <!> взаимнопростое со всеми делителями <!>, то есть`,1),Ir=_(`<!>, <!> и <!> являются делителями <!>,
    значит <!>.`,1),Ar=_("Вероятность ошибки одного теста будет <!>. Выполнив тест Ферма <!> раз, получим вероятность верного ответа <!>.",1),Br=_("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Fr=_("Используя алгоритмы быстрого возведения в степень по модулю, можно получить время работы <!>.",1),Gr=_("<!> &mdash; простое, <!> и <!>",1),Jr=_("<!> <!>",1),Kr=_("Существует такой <!>, что <!>",1),Rr=_("<!> <!> <!>",1),Wr=_("Рассмотрим три утверждения: <!>",1),Xr=_(`Из <!> следует, что <!>, а это то же самое, что <!>, поэтому утверждения <!> и <!> не могут выполняться
    одновременно.`,1),Yr=_(`Пусть существует <!> такое, что <!>. Возведём левую и правую
    часть в <!> степень и получим <!>. По малой теореме
    Ферма <!>, а значит <!>. Получается,
    что утверждения <!> и <!> всегда выполняются вместе.`,1),ro=_("Из <!> следует",1),oo=_(`Получается, что сущетвует ровно <!> квадратов по модулю <!>. Обозначим их <!>. Если <!> равно <!>, то сравнение <!> имеет решение, а это значит, что и второе выполняется для любого <!>. Следовательно,
    сравнение <!> имеет ровно <!> решений, отсюда же следует, что <!> также
    имеет <!> решений, при каждом из которых первое сравнение не выполняется.`,1),eo=_("<!> <!> <!> <!> <!> <!> <!> <!>",1),ao=_(`Если число <!> простое, то <!>, где <!> целое, а <!> нечётное. Очевидно, что <!>. Значит, если мы возьмём
    случайное <!>, то оно должно быть либо квадратичным вычетом, либо невычетом по модулю <!>.
    Это можно выразить через символы Якоби следующим образом:`,1),no=_("<!> <!> <!> <!> <!>",1),_o=_("Асимптотическая сложность этого алгоритма равняется <!>, а вероятность ошибки <!>.",1),to=_(`Давайте усовершенствуем разобранные нами тесты. В предыдущем пункте мы выяснили, что <!>,
    значит мы можем брать корень из <!>, пока не выполнится одно из двух:`,1),vo=_(`Если при взятии корня мы получили сравнимость по модулю <!> с чем-то кроме <!>, то
    число точно составное. Вероятность ошибки этого теста <!>. Значит, повторив тест
    Миллера-Рабина <!> раз, мы получим вероятность верного ответа не меньше <!>, что
    является очень хорошим результатом.`,1),mo=_("<!> <!> <!>",1),so=_("Тест Миллера-Рабина способен определять некоторые числа Кармайкла, например, <!>, но вот <!>, третье число Кармайкла, успешно проходит тест.",1),io=_("Сложность этого алгоритма составляет <!>.",1),lo=_("<!> <!>",1),po=_(`Для использования теста Фробениуса нужно рассмотреть такое понятие как <b>квадратичная иррациональность</b>.
    Квадратичной иррациональностью будем называть число <!>, где <!>, <!> и <!> &mdash; целые и <!> свободно от квадратов. Сопряжённым к <!> будет <!>. А остаток от деления определим как <!>.`,1),$o=_("Пусть <!> &mdash; простое, символ Якоби <!> и <!>, тогда",1),co=_("<!> <!>",1),fo=_(`Сутью теста Фробениуса является подбор подходящих коэффициентов <!>, <!> и <!>.
    Начать проще всего с последнего. Чтобы выполнялась теорема Фробениуса, нам нужно такое <!>, что <!>, в качестве значения <!> возьмём <!> или
    наименьшее простое число, удовлетворяющее условию. Если <!>, то <!>,
    иначе <!>. Если <!>, то число простое с
    вероятностью <!>. Несмотря на то, что тест вероятностный, на данный момент неизвестно ни
    одно составное число, проходящее его, и строго доказано, что таких чисел меньше <!> не существует.`,1),ho=_(`Мы уже выяснили, что <!>. Можно разложить <!> на произведение простых
    множителей <!>. Если число <!> простое, то <!>. В таком случае для каждого <!> выполняется`,1),Po=_(`Если <!> составное, то либо для него не выполняется тест Ферма, тогда мы точно знаем, что оно не простое,
    либо <!>. Если во втором случае будет выполняться <!> и поскольку <!>, мы получим, что в группе есть элемент
    порядка <!>. При этом порядок самой группы равен <!>, а это меньше <!>, так как число составное. То есть получается, что порядок какого-то элемента группы больше порядка
    самой группы, что противоречит теореме Лагранжа. Получается, что для составных чисел такое невозможно.`,1),uo=_("<!> <!> <!>",1),go=_(`Преимуществом этого алгоритма является его точность, он никогда не примет составное число за простое, но тест Люка
    имеет два существенных недостатка: нам нужно знать делители <!> и перебирать большое количество <!>.`,1),qo=_(`Одними из самых лёгких для проверки на простоту являются числа Мерсена, имеющие вид <!>.
    Этот метод использует рекуррентную последовательность <!>, в которой <!>,
    а первый элемент равен четырём.`,1),xo=_(`Если <!> &mdash; простое нечётное число, то число Мерсена <!> простое только
    когда оно делит <!>. Получается, что для проверки простоты <!> нам всего-то нужно
    проверить, делится ли <!> на <!>.`,1),bo=_("<!> <!> <!>",1),No=_(`Асимптотическая сложнось этого теста равна <!>, но при использовании алгоритмов быстрого умножения
    больших чисел сложность уменьшается до <!>`,1),yo=_("Где <!> и <!> &mdash; это корни квадратного уравнения",1),Vo=_("Если <!>, <!>, <!> и <!>, то",1),ko=_("<!> <!>",1),zo=_("Если <!> простое, такое, что <!>, то <!>, где <!>, а <!> &mdash; символ Лежандра.",1),Qo=_("<!> <!> <!> <!> <!>",1),Do=_("Пусть <!>, <!> и <!>.",1),So=_("<!>, поэтому если <!> простое, то <!>.",1),Uo=_("Из свойств <!> и <!> следует, что <!> делит <!>",1),Zo=_("А из свойств <!> и <!> получаем, что",1),jo=_(`И в итоге получаем, что <!>. Таким образом мы доказали необходимость условий. Но,
    чтобы называть тест детерменированным, нам нужно также доказать достаточность.`,1),wo=_(`Если <!>, то оно делит и <!>. По первому свойству <!>, а по второму <!>. Тогда каждый простой делитель <!> можно представить как <!>, это больше, чем <!>,
    а значит, что <!> простое.`,1),Mo=_("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1),Oo=_("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function ne(Zr){var rr=Oo(),or=d(rr);Mr(or,{title:"Тесты на простоту"});var er=r(or,2);O(er,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=U(`Определять, является ли число простым можно с помощью решёт, но этот способ нельзя назвать полноценным тестом на
    простоту, так как попутно мы проверяем на простоту все числа до исходного. Тесты на простоту делятся на два типа:
    истинные и вероятностные. Истинные тесты точно отвечают, является ли число простым, вероятностные же могут
    дать ответ, который будет верным с некоторой возможностью ошибки. Зачастую такие тесты используют в связке: сначала
    проверяют число вероятностным тестом, а потом подтверждают это детерменированным.`);a(n,i)}})}});var ar=r(er,2);Sr(ar,{children:(m,D)=>{e();var n=U("Вероятностные тесты");a(m,n)}});var nr=r(ar,2);B(nr,{children:(m,D)=>{e();var n=U("Тест Ферма");a(m,n)}});var dr=r(nr,2);O(dr,{children:(m,D)=>{var n=Br(),b=d(n);t(b,{children:(p,g)=>{e();var c=U("Тест Ферма основывается на малой теореме Ферма, которая гласит");a(p,c)}});var i=r(b,2);o(i,{display:!0,m:"a \\rprime p \\implies a^{p-1} \\equiv 1 \\pmod p \\quad\\text{где}~ p ~\\text{простое}"});var f=r(i,2);t(f,{children:(p,g)=>{e();var c=Cr(),q=r(d(c));o(q,{m:"n"});var N=r(q,2);o(N,{m:"a < n"});var V=r(N,2);o(V,{m:"a^{n-1} \\equiv 1 \\pmod n"});var w=r(V,2);o(w,{m:"a"});var Z=r(w,4);o(Z,{m:"n"}),e(),a(p,c)}});var P=r(f,2);t(P,{children:(p,g)=>{e();var c=Er(),q=r(d(c));o(q,{m:"n"});var N=r(q,2);o(N,{m:"a^{n-1} \\equiv 1 \\pmod n"});var V=r(N,2);o(V,{m:"a"});var w=r(V,2);o(w,{m:"n"}),e(3),a(p,c)}});var y=r(P,2);t(y,{children:(p,g)=>{e();var c=Hr(),q=r(d(c));o(q,{m:"561 = 3 \\cdot 11 \\cdot 17"});var N=r(q,2);o(N,{m:"\\ZZ_{561} = \\ZZ_{3} \\times \\ZZ_{11} \\times \\ZZ_{17}"});var V=r(N,2);o(V,{m:"a"});var w=r(V,2);o(w,{m:"561"}),e(),a(p,c)}});var s=r(y,2);o(s,{display:!0,m:`\\align{
      a \\rprime 3 &\\implies a^2 \\eqmod{3} 1 \\\\
      a \\rprime 11 &\\implies a^{10} \\eqmod{11} 1 \\\\
      a \\rprime 17 &\\implies a^{16} \\eqmod{17} 1
      }`});var $=r(s,2);t($,{children:(p,g)=>{var c=Ir(),q=d(c);o(q,{m:"2"});var N=r(q,2);o(N,{m:"10"});var V=r(N,2);o(V,{m:"16"});var w=r(V,2);o(w,{m:"560"});var Z=r(w,2);o(Z,{m:"a^{560} \\eqmod{561} 1"}),e(),a(p,c)}});var l=r($,2);t(l,{children:(p,g)=>{e();var c=U("Такие числа встречаются довольно редко, но их бесконечно много.");a(p,c)}});var u=r(l,2);t(u,{children:(p,g)=>{e();var c=Ar(),q=r(d(c));o(q,{m:"\\varepsilon \\le \\phi(n)/n"});var N=r(q,2);o(N,{m:"k"});var V=r(N,2);o(V,{m:"1 - \\varepsilon^k"}),e(),a(p,c)}}),a(m,n)}});var _r=r(dr,2);F(_r,{code:`
function fermat_test(int n, int k) -> bool:
    for int i = 0; i < k; i++:
        select a = random uniform int [2, n-1]
        if pow(a, n-1) % n != 1:
            return false
    return true
`});var tr=r(_r,2);O(tr,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=Fr(),f=r(d(i));o(f,{m:`O(k \\log^2n
    \\cdot \\log \\log n \\cdot \\log \\log \\log n)`}),e(),a(n,i)}})}});var vr=r(tr,2);B(vr,{children:(m,D)=>{e();var n=U("Тест Соловея-Штрассена");a(m,n)}});var mr=r(vr,2);O(mr,{children:(m,D)=>{var n=no(),b=d(n);t(b,{children:(s,$)=>{e();var l=U("Тест Соловея-Штрассена предполагает проверку квадратичных вычетов, для этого нам понадобится критерий Эйлера.");a(s,l)}});var i=r(b,2);Tr(i,{title:"Критерий Эйлера",children:(s,$)=>{var l=Jr(),u=d(l);t(u,{children:(g,c)=>{var q=Gr(),N=d(q);o(N,{m:"p"});var V=r(N,2);o(V,{m:"p > 2"});var w=r(V,2);o(w,{m:"a \\rprime p"}),a(g,q)}});var p=r(u,2);o(p,{display:!0,m:`\\align{&a^{(p-1)/2} \\equiv 1 \\pmod p ~ \\text{когда} ~ a ~ \\text{квадратичный вычет по модулю} ~ p
        \\\\ &a^{(p-1)/2} \\equiv -1 \\pmod p ~ \\text{когда} ~ a ~ \\text{квадратичный невычет}}`}),a(s,l)}});var f=r(i,2);Lr(f,{children:(s,$)=>{var l=eo(),u=d(l);t(u,{children:(Z,H)=>{e();var S=Wr(),M=r(d(S));Ur(M,{children:(L,h)=>{var z=Rr(),v=d(z);I(v,{children:(Q,T)=>{e();var C=Kr(),j=r(d(C));o(j,{m:"x"});var E=r(j,2);o(E,{m:"x^2 \\equiv a \\pmod p"}),a(Q,C)}});var x=r(v,2);I(x,{children:(Q,T)=>{o(Q,{m:"a^{(p-1)/2} \\equiv 1 \\pmod p"})}});var k=r(x,2);I(k,{children:(Q,T)=>{o(Q,{m:"a^{(p-1)/2} \\equiv -1 \\pmod p"})}}),a(L,z)}}),a(Z,S)}});var p=r(u,2);t(p,{children:(Z,H)=>{e();var S=Xr(),M=r(d(S));o(M,{m:"p > 2"});var L=r(M,2);o(L,{m:"1 \\notequiv p-1 \\pmod p"});var h=r(L,2);o(h,{m:"1 \\notequiv -1 \\pmod p"});var z=r(h,2);o(z,{m:"2"});var v=r(z,2);o(v,{m:"3"}),e(),a(Z,S)}});var g=r(p,2);t(g,{children:(Z,H)=>{e();var S=Yr(),M=r(d(S));o(M,{m:"x"});var L=r(M,2);o(L,{m:"x^2 \\equiv a \\pmod p"});var h=r(L,2);o(h,{m:"(p-1)/2"});var z=r(h,2);o(z,{m:"x^{p-1} \\equiv a^{(p-1)/2} \\pmod p"});var v=r(z,2);o(v,{m:"x^{p-1} \\equiv 1 \\pmod p"});var x=r(v,2);o(x,{m:"a^{(p-1)/2} \\equiv 1 \\pmod p"});var k=r(x,2);o(k,{m:"1"});var Q=r(k,2);o(Q,{m:"2"}),e(),a(Z,S)}});var c=r(g,2);t(c,{children:(Z,H)=>{e();var S=U("Рассмотрим последовательность");a(Z,S)}});var q=r(c,2);o(q,{display:!0,m:"1, \\, 2, \\, \\dotsc, \\, \\frac{p-1}{2} , \\, \\frac{p+1}{2} , \\, \\dotsc , \\ p-1"});var N=r(q,2);t(N,{children:(Z,H)=>{e();var S=ro(),M=r(d(S));o(M,{m:"-1 \\equiv p-1 \\pmod p"}),e(),a(Z,S)}});var V=r(N,2);o(V,{display:!0,m:`1^2 \\equiv (p-1)^2, \\, 2^2 \\equiv (p-2)^2, \\, \\dotsc, \\, \\left( \\frac{p-1}{2} \\right)^2
        \\equiv \\left( \\frac{p+1}{2} \\right)^2 \\quad \\pmod p`});var w=r(V,2);t(w,{children:(Z,H)=>{e();var S=oo(),M=r(d(S));o(M,{m:"(p-1)/2"});var L=r(M,2);o(L,{m:"p"});var h=r(L,2);o(h,{m:"a_1, \\, a_2, \\, \\dotsm, \\, a_{(p-1)/2}"});var z=r(h,2);o(z,{m:"a"});var v=r(z,2);o(v,{m:"a_j"});var x=r(v,2);o(x,{m:"1"});var k=r(x,2);o(k,{m:"a_j"});var Q=r(k,2);o(Q,{m:"2"});var T=r(Q,2);o(T,{m:"(p-1)/2"});var C=r(T,2);o(C,{m:"3"});var j=r(C,2);o(j,{m:"(p-1)/2"}),e(),a(Z,S)}}),a(s,l)}});var P=r(f,2);t(P,{children:(s,$)=>{e();var l=ao(),u=r(d(l));o(u,{m:"n"});var p=r(u,2);o(p,{m:"n-1 = 2^s \\cdot d"});var g=r(p,2);o(g,{m:"s"});var c=r(g,2);o(c,{m:"d"});var q=r(c,2);o(q,{m:"{\\sqrt {a^{n-1}}} \\eqmod{n} \\pm 1"});var N=r(q,2);o(N,{m:"a"});var V=r(N,2);o(V,{m:"n"}),e(),a(s,l)}});var y=r(P,2);o(y,{display:!0,m:"a^{n-1} \\equiv 1 \\quad \\text{и} \\quad a^{(n-1)/2} \\equiv \\legendre{a}{p} \\pmod n"}),a(m,n)}});var sr=r(mr,2);F(sr,{code:`
function solovay_strassen_test(int n, int k) -> bool:
    for int i = 0; i < k; i++:
        select a = random uniform int [2, n-1]
        if pow(a, (n-1)/2) % n != jacobi(a, p):
            return false
    return true
`});var ir=r(sr,2);O(ir,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=_o(),f=r(d(i));o(f,{m:"O(k\\log^3 n)"});var P=r(f,2);o(P,{m:"\\varepsilon \\le 1/2^k"}),e(),a(n,i)}})}});var lr=r(ir,2);B(lr,{children:(m,D)=>{e();var n=U("Тест Миллера-Рабина");a(m,n)}});var pr=r(lr,2);O(pr,{children:(m,D)=>{var n=mo(),b=d(n);t(b,{children:(P,y)=>{e();var s=to(),$=r(d(s));o($,{m:"n-1=2^s \\cdot d"});var l=r($,2);o(l,{m:"a"}),e(),a(P,s)}});var i=r(b,2);o(i,{display:!0,m:`a^d \\equiv \\pm 1 \\quad \\text{или} \\quad a^{2^r \\cdot d} \\equiv -1 \\quad \\pmod n, ~
\\text{где} ~ r < s`});var f=r(i,2);t(f,{children:(P,y)=>{e();var s=vo(),$=r(d(s));o($,{m:"n"});var l=r($,2);o(l,{m:"\\pm 1"});var u=r(l,2);o(u,{m:"\\varepsilon \\le 1/4"});var p=r(u,2);o(p,{m:"k"});var g=r(p,2);o(g,{m:"1 - 1/4^k"}),e(),a(P,s)}}),a(m,n)}});var $r=r(pr,2);F($r,{code:`
function miller_rabin_test(int n, int k) -> bool:
    for int i = 0; i < k; i++:
        select a = random uniform int [2, n-1]
        for int j = n-1; j % 2 == 0; j /= 2:
            if pow(a, j) % n == n-1:
                break
            else if pow(a, j) % n != 1:
                return false
    return true
`});var cr=r($r,2);O(cr,{children:(m,D)=>{var n=lo(),b=d(n);t(b,{children:(f,P)=>{e();var y=so(),s=r(d(y));o(s,{m:"561"});var $=r(s,2);o($,{m:"1729"}),e(),a(f,y)}});var i=r(b,2);t(i,{children:(f,P)=>{e();var y=io(),s=r(d(y));o(s,{m:"O(k \\log^3 n)"}),e(),a(f,y)}}),a(m,n)}});var fr=r(cr,2);B(fr,{children:(m,D)=>{e();var n=U("Тест Фробениуса");a(m,n)}});var hr=r(fr,2);O(hr,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=po(),f=r(d(i),3);o(f,{m:"z = a +b \\sqrt c"});var P=r(f,2);o(P,{m:"a"});var y=r(P,2);o(y,{m:"b"});var s=r(y,2);o(s,{m:"c"});var $=r(s,2);o($,{m:"c"});var l=r($,2);o(l,{m:"z"});var u=r(l,2);o(u,{m:"\\bar{z} = a - b \\sqrt c"});var p=r(u,2);o(p,{m:"z \\mod n = (a \\mod n) + (b \\mod n) \\cdot \\sqrt c"}),e(),a(n,i)}})}});var Pr=r(hr,2);Or(Pr,{title:"Теорема Фробениуса",children:(m,D)=>{var n=co(),b=d(n);t(b,{children:(f,P)=>{e();var y=$o(),s=r(d(y));o(s,{m:"n"});var $=r(s,2);o($,{m:"\\legendre{a}{n} = -1"});var l=r($,2);o(l,{m:`z \\in \\ZZ_n
    [\\sqrt c]`}),e(),a(f,y)}});var i=r(b,2);o(i,{display:!0,m:"z^n \\equiv \\bar{z} \\pmod n"}),a(m,n)}});var ur=r(Pr,2);O(ur,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=fo(),f=r(d(i));o(f,{m:"a"});var P=r(f,2);o(P,{m:"b"});var y=r(P,2);o(y,{m:"c"});var s=r(y,2);o(s,{m:"c"});var $=r(s,2);o($,{m:"\\legendre{c}{n} = -1"});var l=r($,2);o(l,{m:"c"});var u=r(l,2);o(u,{m:"-1"});var p=r(u,2);o(p,{m:"c \\le 2"});var g=r(p,2);o(g,{m:"z = 2 + \\sqrt c"});var c=r(g,2);o(c,{m:"z = 1 + \\sqrt c"});var q=r(c,2);o(q,{m:"z^n \\equiv \\bar{z} \\pmod n"});var N=r(q,2);o(N,{m:"1 - 7710^{-1}"});var V=r(N,2);o(V,{m:"2^{60}"}),e(),a(n,i)}})}});var gr=r(ur,2);F(gr,{code:`
function frobenius_test(int n) -> bool:
    tuple [int, complex] z
    for int c in [-1, 2, 3, 5, 7, ...]:
        if jacobi(c, n) == -1:
            if c <= 2:
                z.first = 2
                z.second = sqrt(c)
            else:
                z.first = 1
                z.second = sqrt(c)
            if  pow(z, n) % n == !z:
                return true
            else:
                return false
`});var qr=r(gr,2);Sr(qr,{children:(m,D)=>{e();var n=U("Истинные тесты");a(m,n)}});var xr=r(qr,2);B(xr,{children:(m,D)=>{e();var n=U("Тест Люка");a(m,n)}});var br=r(xr,2);O(br,{children:(m,D)=>{var n=uo(),b=d(n);t(b,{children:(P,y)=>{e();var s=ho(),$=r(d(s));o($,{m:"n-1 = 2^s \\cdot d"});var l=r($,2);o(l,{m:"d"});var u=r(l,2);o(u,{m:"d = q_1 \\cdot q_2 \\cdot \\dotsc \\cdot q_m"});var p=r(u,2);o(p,{m:"n"});var g=r(p,2);o(g,{m:"\\lvert \\ZZ_n ^ \\times \\rvert = n-1"});var c=r(g,2);o(c,{m:"q"}),e(),a(P,s)}});var i=r(b,2);o(i,{display:!0,m:"a^{(p-1)/q} \\notequiv 1 \\pmod n"});var f=r(i,2);t(f,{children:(P,y)=>{e();var s=Po(),$=r(d(s));o($,{m:"n"});var l=r($,2);o(l,{m:"a^{n-1} \\equiv 1 \\pmod n"});var u=r(l,2);o(u,{m:`a^{(p-1)/q}
    \\notequiv 1 \\pmod n`});var p=r(u,2);o(p,{m:"((n-1)/q) \\divides n-1"});var g=r(p,2);o(g,{m:"n-1"});var c=r(g,2);o(c,{m:"\\phi(n)"});var q=r(c,2);o(q,{m:"n-1"}),e(),a(P,s)}}),a(m,n)}});var Nr=r(br,2);F(Nr,{code:`
function lucas_test(int n) -> bool:
while select a = random uniform int [2, n-1]:
    if pow(a, n-1) % n != n-1:
        return false
    bool flag = true
    for int q in divisors(n-1):
        if pow(a, (n-1)/q) % n == 1:
            flag = false
            break
    if flag:
        return true
`});var yr=r(Nr,2);O(yr,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=go(),f=r(d(i));o(f,{m:"n-1"});var P=r(f,2);o(P,{m:"a"}),e(),a(n,i)}})}});var Vr=r(yr,2);B(Vr,{children:(m,D)=>{e();var n=U("Тест Люка-Лемера");a(m,n)}});var kr=r(Vr,2);O(kr,{children:(m,D)=>{var n=bo(),b=d(n);t(b,{children:(P,y)=>{e();var s=qo(),$=r(d(s));o($,{m:"M_p = 2^p - 1"});var l=r($,2);o(l,{m:"S"});var u=r(l,2);o(u,{m:"S_j = S_{j-1}^2 - 2"}),e(),a(P,s)}});var i=r(b,2);o(i,{display:!0,m:"S = \\{ 4, \\, 14, \\, 194, \\, 37634, \\, \\dotsc \\}"});var f=r(i,2);t(f,{children:(P,y)=>{e();var s=xo(),$=r(d(s));o($,{m:"n"});var l=r($,2);o(l,{m:"M_n = 2^n - 1"});var u=r(l,2);o(u,{m:"S_{n-1}"});var p=r(u,2);o(p,{m:"M_n"});var g=r(p,2);o(g,{m:"S_{n-1}"});var c=r(g,2);o(c,{m:"M_n"}),e(),a(P,s)}}),a(m,n)}});var zr=r(kr,2);F(zr,{code:`
function lucas_lehmer_test(int n) -> bool:
    int s = 4
    int m = 2 << n - 1
    for int i = 1; i < n-1; i++:
        s = (s * s - 2) % m
    if s == 0:
        return true
    else:
        return false
`});var Qr=r(zr,2);O(Qr,{children:(m,D)=>{t(m,{children:(n,b)=>{e();var i=No(),f=r(d(i));o(f,{m:"O(n^3)"});var P=r(f,2);o(P,{m:"O(n^2 \\cdot \\log n \\cdot \\log \\log n)"}),a(n,i)}})}});var jr=r(Qr,2);O(jr,{children:(m,D)=>{var n=Mo(),b=d(n);t(b,{children:(h,z)=>{e();var v=U("Для доказательства работы этого теста нам понадобятся последовательности Люка. Напомню, что");a(h,v)}});var i=r(b,2);o(i,{display:!0,m:"U_n(P, Q) = \\frac{\\alpha^n - \\beta^n}{\\alpha - \\beta} \\\\! V_n(P, Q) = \\alpha^n + \\beta^n "});var f=r(i,2);t(f,{children:(h,z)=>{e();var v=yo(),x=r(d(v));o(x,{m:"\\alpha"});var k=r(x,2);o(k,{m:"\\beta"}),e(),a(h,v)}});var P=r(f,2);o(P,{display:!0,m:`x^2 - Px + Q = 0 \\\\!! D = P^2 - 4Q \\\\!! \\alpha = \\frac{P + \\sqrt D } {2} \\quad \\beta =
        \\frac{P^2 - \\sqrt D } {2}`});var y=r(P,2);t(y,{children:(h,z)=>{e();var v=U("Также нам понадобятся следующие свойства таких последовательностей:");a(h,v)}});var s=r(y,2);Ur(s,{children:(h,z)=>{var v=Qo(),x=d(v);I(x,{children:(j,E)=>{o(j,{display:!0,m:"V_n ^2 - D U_n ^2 = 4Q^n"})}});var k=r(x,2);I(k,{children:(j,E)=>{o(j,{display:!0,m:"V_{2n} = V_n ^2 - 2Q^n \\qquad U_{2n} = U_n V_n"})}});var Q=r(k,2);I(Q,{children:(j,E)=>{o(j,{display:!0,m:"\\frac{V_n + U_n \\sqrt D}{2} = \\left( \\frac{P + \\sqrt D }{2} \\right) ^n"})}});var T=r(Q,2);I(T,{children:(j,E)=>{var A=ko(),X=d(A);t(X,{children:(R,Y)=>{e();var G=Vo(),J=r(d(G));o(J,{m:"P' \\equiv P \\pmod N"});var W=r(J,2);o(W,{m:"Q' \\equiv Q \\pmod N"});var Dr=r(W,2);o(Dr,{m:"Q \\rprime N"});var wr=r(Dr,2);o(wr,{m:"QP' = P^2 - 2Q \\pmod N"}),e(),a(R,G)}});var K=r(X,2);o(K,{display:!0,m:`\\begin{cases} Q^n V_n (P', 1) \\equiv V_{2n} (P, Q) \\pmod N \\\\
        PQ^{n-1}U_n(P', 1) \\equiv U_{2n}(P, Q) \\pmod N \\end{cases}`}),a(j,A)}});var C=r(T,2);I(C,{children:(j,E)=>{t(j,{children:(A,X)=>{e();var K=zo(),R=r(d(K));o(R,{m:"p"});var Y=r(R,2);o(Y,{m:"2QD \\rprime p"});var G=r(Y,2);o(G,{m:`p \\divides
    U_{\\Phi (p)}(P, Q)`});var J=r(G,2);o(J,{m:"\\Phi(p) = p - \\legendre{\\sqrt D }{p}"});var W=r(J,2);o(W,{m:"\\legendre{\\sqrt D }{p}"}),e(),a(A,K)}})}}),a(h,v)}});var $=r(s,2);t($,{children:(h,z)=>{e();var v=Do(),x=r(d(v));o(x,{m:"N = M_p"});var k=r(x,2);o(k,{m:"P = 2"});var Q=r(k,2);o(Q,{m:"Q = -2"}),e(),a(h,v)}});var l=r($,2);t(l,{children:(h,z)=>{e();var v=U("Из четвёртого свойства следует, что");a(h,v)}});var u=r(l,2);o(u,{display:!0,m:"2^n V_n(-4, 1) \\equiv V_{2n} (2, -2) \\pmod N"});var p=r(u,2);t(p,{children:(h,z)=>{e();var v=U("А по второму свойству");a(h,v)}});var g=r(p,2);o(g,{display:!0,m:"V_{2n}(-4, 1) = V_n ^2(-4, 1) - 2"});var c=r(g,2);t(c,{children:(h,z)=>{e();var v=U("Таким образом получаем, что");a(h,v)}});var q=r(c,2);o(q,{display:!0,m:`S_{p-1} \\equiv V_{(N+1)/2}(-4, 1) \\pmod N \\\\!! V_{(N+1)/2}(2, -2) \\equiv 2 ^{(N+1)/4} S_{p-1}
        \\pmod N`});var N=r(q,2);t(N,{children:(h,z)=>{var v=So(),x=d(v);o(x,{m:"D = 2^2 -4 \\cdot (-2) = 12"});var k=r(x,2);o(k,{m:"N"});var Q=r(k,2);o(Q,{m:`\\legendre{D}{N} = -
    1`}),e(),a(h,v)}});var V=r(N,2);t(V,{children:(h,z)=>{e();var v=Uo(),x=r(d(v));o(x,{m:"4"});var k=r(x,2);o(k,{m:"5"});var Q=r(k,2);o(Q,{m:"N"});var T=r(Q,2);o(T,{m:"U_{N+1} = V_{(N+1)/2}(2, -2) \\cdot U_{(N+1)/2}(2, -2)"}),a(h,v)}});var w=r(V,2);t(w,{children:(h,z)=>{e();var v=Zo(),x=r(d(v));o(x,{m:"1"});var k=r(x,2);o(k,{m:"2"}),e(),a(h,v)}});var Z=r(w,2);o(Z,{display:!0,m:"V_{N+1} = V_{(N+1)/2}^2 - 2 \\cdot (-2)^{(N+1)/2} \\equiv 8 +4 = 12 \\pmod N"});var H=r(Z,2);t(H,{children:(h,z)=>{e();var v=U("По третьему свойству");a(h,v)}});var S=r(H,2);o(S,{display:!0,m:"V_{N+1} \\equiv 2(1 + \\sqrt 3 )^{N+1} \\equiv 2(1-3) = -4 \\pmod N"});var M=r(S,2);t(M,{children:(h,z)=>{e();var v=jo(),x=r(d(v));o(x,{m:"N \\divides S_{p-1}"}),e(),a(h,v)}});var L=r(M,2);t(L,{children:(h,z)=>{e();var v=wo(),x=r(d(v));o(x,{m:"N \\divides S_{p-1}"});var k=r(x,2);o(k,{m:"V_{(n+1)/2}"});var Q=r(k,2);o(Q,{m:"N \\rprime U_{(N+1)/2}"});var T=r(Q,2);o(T,{m:"N \\divides U_{N+1}"});var C=r(T,2);o(C,{m:"N"});var j=r(C,2);o(j,{m:"\\pm 1 + k \\cdot 2^p"});var E=r(j,2);o(E,{m:"\\sqrt N"});var A=r(E,2);o(A,{m:"N = M_p"}),e(),a(h,v)}}),a(m,n)}}),a(Zr,rr)}export{ne as component};
