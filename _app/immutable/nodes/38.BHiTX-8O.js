import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as c,a as l,b as t,s as r,n as e,t as R}from"../chunks/BWp35gWV.js";import{T as nr}from"../chunks/CR7k0xtG.js";import{P as b}from"../chunks/DPzc5wQr.js";import{P as p}from"../chunks/B7flgP-x.js";/* empty css                *//* empty css                */import{S as C}from"../chunks/CBbFRhrb.js";import{C as y}from"../chunks/BvAJckrt.js";import{C as q}from"../chunks/BmgYHZay.js";import{H as rr}from"../chunks/DXKx2xvL.js";import{M as o}from"../chunks/BqyEoRxA.js";/* empty css                *//* empty css                *//* empty css                */var tr=c(`Вместо работы с числами в обычном виде <!>, Питер Монтгомери предложил
    переходить в специальное представление &mdash; <b>представление Монтгомери</b>,
    где умножение выполняется быстрее, чем классическое модульное умножение.`,1),dr=c(`Представление Монтгомери можно построить по любому модулю <!>.
    Для этого представления надо сначала выбрать число <!>,
    которое будет взаимнопросто с <!>: <!>.`,1),vr=c("Обычное число <!> преобразуется в представление Монтгомери следующим образом",1),_r=c("<!> <!> <!> <!> <!>",1),mr=c(`Умножение Монтгомери <!> не совпадает с обычным модульном умножением <!>.
    Для того, чтобы после умножения получилось число, которое является представлением Монтгомери
    произведения операндов, нужно дополнительно домножить на <!>:`,1),sr=c(`Вся прелесть в представлении Монтгомери в том, что операцию <!> можно выполнить без взятия по модулю.
    Эта операция называется <b>сокращение Монтгомери</b> (Montgomery reduction).`,1),ir=c("<!> <!> <!>",1),lr=c("Расширенный алгоритм Евклида позволяет найти два числа <!> и <!> такое, что",1),cr=c("Тогда можно получить способ вычисления <!>",1),pr=c(`Здесь <!> &mdash; любое целое число.
    Давайте выберем <!>.
    Тогда <!>, и`,1),Mr=c(`Осталась небольшая проблемка: <!> и <!>,
    поэтому результат вычитания находится в интервале <!>.
    Для решения этой проблемки надо просто добавить <!> к результату, если надо.`,1),$r=c("<!> <!> <!> <!> <!> <!> <!> <!>",1),ur=c(`Что у нас в итоге получилось?
    Вместо одного умножения и одного взятия по модулю мы выполняем два умножения,
    одно сложение, одно взятие по модулю и одно деление.
    Прикол в том, что мы выполняем деление не на данное нам число <!>,
    а на почти произвольное число <!>.`,1),fr=c(`Мы можем выбрать <!> удобным для себя. Например, степень двойки!
    Деление на степень двойки можно реализовать через сдвиг, а взятие по модулю реализовывать вообще не нужно,
    если подобрать правильный тип данных.`,1),xr=c("Итого мы получаем очень эффективный и быстрый код. Здесь я взял <!>.",1),gr=c("<!> <!> <!>",1),hr=c(`Если мы можем позволить себе вернуть число в диапазоне от <!> до <!>,
    то можно отказаться от последней проверки и всегда прибавлять <!>.
    В итоге получится код <!> без ветвлений.`,1),Rr=c(`Можно также битовый сдвиг <!> выполнять раньше
    и вычислять <!> вместо <!>.
    Так делать можно, потому что первые <!> бита в <!> и <!> совпадают: <!>.`,1),Pr=c(`В нашем случае два битовых сдвига эффективнее одного.
    Причина в том, что при вычислении <!> мы считаем <!>,
    а при умножении <!>-битных чисел друг на друга
    процессоры x86/x64 старшие <!> бита пишут в отдельный регистр <!>.`,1),br=c("<!> <!> <!>",1),yr=c("Быстрое обратное по модулю <!>",1),qr=c(`Для того, чтобы инициализировать пространство Монтгомери, нам нужно вычислить <!>.
    Обычно это находится с помощью расширенного алгоритма Евклида.
    Но этот метод может оказаться долговатым.`,1),kr=c(`Можно использовать тот факт, что <!> &mdash; степень двойки.
    Тогда`,1),Cr=c(`Этот факт можно использовать для нахождения <!>.
    Начнём с <!> как с обратного для <!> по модулю <!> и будем увеличивать степень модуля, пока не дойдем до модуля <!>.
    Нам понадобится для этого <!> итераций.`,1),Hr=c("<!> <!> <!> <!>",1),Sr=c(`Банальный пример: нужно посчитать сумму чисел в массиве <!> по модулю <!>,
    при этом все числа массива меньше модуля <!>.`,1),Tr=c("<!> <!> <!>",1),jr=c("Можно заметить, что раз <!>, и в начале каждой итерации <!>, то <!>, а значит операцию взятия остатка можно заменить на простое условие и вычитание",1),wr=c("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Wr(or){var H=wr(),S=l(H);nr(S,{title:"Пространство Монтгомери"});var T=r(S,2);b(T,{children:(_,h)=>{p(_,{children:(n,M)=>{e();var i=R(`В модулярной арифметике основная операция — само вычисление остатка от деления числа на модуль.
    Эта операция очень дорогая — целых 15–30 тактов.`);t(n,i)}})}});var j=r(T,2);b(j,{children:(_,h)=>{var n=_r(),M=l(n);p(M,{children:(a,d)=>{e();var v=tr(),s=r(l(v));o(s,{m:"a \\bmod M"}),e(3),t(a,v)}});var i=r(M,2);p(i,{children:(a,d)=>{e();var v=dr(),s=r(l(v));o(s,{m:"M"});var x=r(s,2);o(x,{m:"R"});var $=r(x,2);o($,{m:"M"});var g=r($,2);o(g,{m:"R \\rprime M"}),e(),t(a,v)}});var f=r(i,2);p(f,{children:(a,d)=>{e();var v=vr(),s=r(l(v));o(s,{m:"x"}),e(),t(a,v)}});var m=r(f,2);o(m,{display:!0,m:"\\overline{x} = x \\cdot R \\bmod M"});var u=r(m,2);p(u,{children:(a,d)=>{e();var v=R(`Для того, чтобы вычислить это преобразование, понадобится выполнить ту самую дорогую операцию взятия по модулю.
    К счастью, это придётся проделать только два раза для каждого числа: чтобы перевести в пространство Монтгомери
    и чтобы перевести обратно.
    Все промежуточные вычисления выполняются без этой дорогой операции.`);t(a,v)}}),t(_,n)}});var w=r(j,2);C(w,{children:(_,h)=>{e();var n=R("Умножение Монтгомери");t(_,n)}});var z=r(w,2);b(z,{children:(_,h)=>{var n=ir(),M=l(n);p(M,{children:(m,u)=>{e();var a=mr(),d=r(l(a));o(d,{m:"*"});var v=r(d,2);o(v,{m:"\\cdot"});var s=r(v,2);o(s,{m:"R^{-1}"}),e(),t(m,a)}});var i=r(M,2);o(i,{display:!0,m:`\\overline{a} * \\overline{b} \\defeq \\overline{a \\cdot b}
          = (a \\cdot b) \\cdot R \\bmod M = (\\overline{a} \\cdot \\overline{b}) \\cdot R^{-1} \\bmod M`});var f=r(i,2);p(f,{children:(m,u)=>{e();var a=sr(),d=r(l(a));o(d,{m:"x \\cdot R^{-1} \\bmod M"}),e(3),t(m,a)}}),t(_,n)}});var A=r(z,2);b(A,{children:(_,h)=>{var n=$r(),M=l(n);p(M,{children:(s,x)=>{e();var $=lr(),g=r(l($));o(g,{m:"R^{-1}"});var P=r(g,2);o(P,{m:"M'"}),e(),t(s,$)}});var i=r(M,2);o(i,{display:!0,m:"R \\cdot R^{-1} + M \\cdot M' = 1"});var f=r(i,2);p(f,{children:(s,x)=>{e();var $=cr(),g=r(l($));o(g,{m:"x \\cdot R^{-1}"}),t(s,$)}});var m=r(f,2);o(m,{display:!0,m:`\\align{
          x \\cdot R^{-1} &= x \\cdot R \\cdot R^{-1} / R = \\\\
          &= x \\cdot (1 - M \\cdot M') / R \\equiv \\\\
          &\\equiv (x - x \\cdot M \\cdot M' + k \\cdot R \\cdot M) / R \\pmod{M} \\equiv \\\\
          &\\equiv \\bigl( x - (x \\cdot M' - k \\cdot R) \\cdot M \\bigr) / R \\pmod{M}
          }`});var u=r(m,2);p(u,{children:(s,x)=>{e();var $=pr(),g=r(l($));o(g,{m:"k"});var P=r(g,2);o(P,{m:"k = \\lfloor x \\cdot M' / R \\rfloor"});var k=r(P,2);o(k,{m:"x \\cdot M' - k \\cdot R = x \\cdot M' \\bmod R"}),e(),t(s,$)}});var a=r(u,2);o(a,{display:!0,m:"x \\cdot R^{-1} \\equiv (x - x \\cdot M' \\bmod R \\cdot M) / R \\pmod{M}"});var d=r(a,2);p(d,{children:(s,x)=>{e();var $=Mr(),g=r(l($));o(g,{m:"x/R < M"});var P=r(g,2);o(P,{m:"x \\cdot M' \\bmod R \\cdot M / R < M"});var k=r(P,2);o(k,{m:"(-M, M)"});var ar=r(k,2);o(ar,{m:"M"}),e(),t(s,$)}});var v=r(d,2);p(v,{children:(s,x)=>{e();var $=R("Получаем уже полный алгоритм усечения");t(s,$)}}),t(_,n)}});var B=r(A,2);y(B,{code:`
const int M, R
const int Mr = inverse(M, mod R)

function reduce(int x):
    int q = x * Mr % R
    int m = q * M
    int y = (x - m) / R

    if y < 0:
        return y + M
    else:
        return y`});var D=r(B,2);b(D,{children:(_,h)=>{p(_,{children:(n,M)=>{e();var i=R("Это же усечение применяется для того, чтобы перевести число из представления Монтгомери в обычное представление.");t(n,i)}})}});var E=r(D,2);C(E,{children:(_,h)=>{e();var n=R("Компьютерная реализация");t(_,n)}});var F=r(E,2);b(F,{children:(_,h)=>{var n=gr(),M=l(n);p(M,{children:(m,u)=>{e();var a=ur(),d=r(l(a));o(d,{m:"M"});var v=r(d,2);o(v,{m:"R"}),e(),t(m,a)}});var i=r(M,2);p(i,{children:(m,u)=>{e();var a=fr(),d=r(l(a));o(d,{m:"R"}),e(),t(m,a)}});var f=r(i,2);p(f,{children:(m,u)=>{e();var a=xr(),d=r(l(a));o(d,{m:"R = 2^{32}"}),e(),t(m,a)}}),t(_,n)}});var G=r(F,2);y(G,{language:"cpp",code:`typedef uint32_t u32;
typedef uint64_t u64;

constexpr u32 M = 1e9 + 7;
const u32 Mr = inverse(M, 1ull << 32);

u32 reduce(const u64 x) {
    u32 q = static_cast<u32>(x) * Mr;
    u64 m = static_cast<u64>(q) * M;
    u32 y = (x - m) >> 32;
    return x - m ? y + M : y;
}`});var I=r(G,2);b(I,{children:(_,h)=>{var n=br(),M=l(n);p(M,{children:(m,u)=>{e();var a=hr(),d=r(l(a));o(d,{m:"0"});var v=r(d,2);o(v,{m:"2n-2"});var s=r(v,2);o(s,{m:"M"});var x=r(s,2);q(x,{language:"cpp",c:"return y + M"}),e(),t(m,a)}});var i=r(M,2);p(i,{children:(m,u)=>{e();var a=Rr(),d=r(l(a));q(d,{language:"cpp",c:">> 32"});var v=r(d,2);o(v,{m:"\\lfloor x / R \\rfloor - \\lfloor m / R \\rfloor"});var s=r(v,2);o(s,{m:"(x - m) / R"});var x=r(s,2);o(x,{m:"32"});var $=r(x,2);o($,{m:"x"});var g=r($,2);o(g,{m:"m"});var P=r(g,2);o(P,{m:"m = x \\cdot M \\cdot M' \\equiv x \\pmod R"}),e(),t(m,a)}});var f=r(i,2);p(f,{children:(m,u)=>{e();var a=Pr(),d=r(l(a));o(d,{m:"\\lfloor m / R \\rfloor"});var v=r(d,2);q(v,{language:"cpp",c:"((u64) q * n) >> 32"});var s=r(v,2);o(s,{m:"32"});var x=r(s,2);o(x,{m:"32"});var $=r(x,2);q($,{language:"asm",c:"edx"}),e(),t(m,a)}}),t(_,n)}});var J=r(I,2);y(J,{language:"cpp",code:`u32 reduce(const u64 x) {
    u32 q = static_cast<u32>(x) * Mr;
    u32 m = (static_cast<u64>(q) * M) >> 32;
    return (x >> 32) + M - m;
}`});var K=r(J,2);C(K,{children:(_,h)=>{e();var n=yr(),M=r(l(n));o(M,{m:"R"}),t(_,n)}});var L=r(K,2);b(L,{children:(_,h)=>{var n=Hr(),M=l(n);p(M,{children:(u,a)=>{e();var d=qr(),v=r(l(d));o(v,{m:"M' = M^{-1} \\bmod R"}),e(),t(u,d)}});var i=r(M,2);p(i,{children:(u,a)=>{e();var d=kr(),v=r(l(d));o(v,{m:"R"}),e(),t(u,d)}});var f=r(i,2);o(f,{display:!0,m:"M \\cdot x \\equiv 1 \\pmod{2^k} \\implies M \\cdot x \\cdot (2 - M \\cdot x) \\equiv 1 \\pmod{2^{2k}}"});var m=r(f,2);p(m,{children:(u,a)=>{e();var d=Cr(),v=r(l(d));o(v,{m:"M'"});var s=r(v,2);o(s,{m:"x = 1"});var x=r(s,2);o(x,{m:"M"});var $=r(x,2);o($,{m:"2"});var g=r($,2);o(g,{m:"R"});var P=r(g,2);o(P,{m:"\\log_2 R"}),e(),t(u,d)}}),t(_,n)}});var N=r(L,2);y(N,{code:`function inverse(int M, mod int R):
    Mr = 1
    repeat log2(R) times:
        Mr *= 2 - M * Mr
    return Mr`});var O=r(N,2);b(O,{children:(_,h)=>{p(_,{children:(n,M)=>{e();var i=R("Код инициализации в C++ будет абсолютно такой же");t(n,i)}})}});var Q=r(O,2);y(Q,{language:"cpp",code:`struct Montgomery {
    u32 M, Mr;

    constexpr explicit Montgomery(const u32 M) : M(M), Mr(1) {
        for (int i = 0; i < 5; i++)
            Mr *= 2 - M * Mr;
    }

    ...
}`});var U=r(Q,2);C(U,{children:(_,h)=>{e();var n=R("Быстрое обратное преобразование");t(_,n)}});var V=r(U,2);rr(V,{children:(_,h)=>{e();var n=R("Сокращение Барретта");t(_,n)}});var W=r(V,2);rr(W,{children:(_,h)=>{e();var n=R("Деление без деления");t(_,n)}});var X=r(W,2);b(X,{children:(_,h)=>{var n=Tr(),M=l(n);p(M,{children:(m,u)=>{e();var a=R("Вообще надо всегда по возможности отказываться от операций взятия по модулю.");t(m,a)}});var i=r(M,2);p(i,{children:(m,u)=>{e();var a=Sr(),d=r(l(a));q(d,{c:"a"});var v=r(d,2);o(v,{m:"M"});var s=r(v,2);o(s,{m:"M"}),e(),t(m,a)}});var f=r(i,2);p(f,{children:(m,u)=>{e();var a=R("Интуитивно понятный код может оказаться медленным. Вот наивная реализация");t(m,a)}}),t(_,n)}});var Y=r(X,2);y(Y,{language:"c",code:`const int M = 1000000009;

int sum(int *a, int n) {
    int s = 0;
    for (int i = 0; i < n; i++) {
        s = (s + a[i]) % M;
    }
    return s;
}`});var Z=r(Y,2);b(Z,{children:(_,h)=>{p(_,{children:(n,M)=>{e();var i=jr(),f=r(l(i));o(f,{m:"\\code{a}[i] < M"});var m=r(f,2);o(m,{m:"s < M"});var u=r(m,2);o(u,{m:"s + \\code{a}[i] < 2M"}),e(),t(n,i)}})}});var er=r(Z,2);y(er,{language:"c",code:`const int M;
int *a, int n;

int s = 0;
for (int i = 0; i < n; i++) {
    s += a[i];
    if (s >= M) {
        s = s - M;
    }
}`}),t(or,H)}export{Wr as component};
