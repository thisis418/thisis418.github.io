import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as l,a as c,b as e,s as r,n as a,t as b}from"../chunks/BWp35gWV.js";import{T as U}from"../chunks/CR7k0xtG.js";import{P as u}from"../chunks/DPzc5wQr.js";import{P as $}from"../chunks/B7flgP-x.js";/* empty css                *//* empty css                */import{S as V}from"../chunks/CBbFRhrb.js";import{C as I}from"../chunks/BvAJckrt.js";import{C as j}from"../chunks/BmgYHZay.js";import{H as J}from"../chunks/DXKx2xvL.js";import{M as o}from"../chunks/BqyEoRxA.js";/* empty css                *//* empty css                */var W=l("Пусть у нас есть два многочлена <!> и <!> степени <!>.",1),X=l("Этот метод требует <!> умножений.",1),Y=l("<!> <!> <!> <!> <!> <!>",1),Z=l(`Каждый многочлен <!> степени <!> может быть представлен списком своих <!> коэффициентов <!>,
    а может быть представлен списком значений в <!> точках <!>.`,1),rr=l(`Если два многочлена представлены значениями, а не коэффициентами, то их произведение считается быстро.
    Пусть многочлены <!> и <!> имеют в точках <!> значения <!> и <!>.
    Тогда многочлен <!> имеет в этих точках значения <!>.`,1),or=l(`Такой способ вычисления требует <!> умножений.
    Получаем следующий код`,1),ar=l("<!> <!> <!>",1),nr=l(`Нам осталось придумать эффективную реализацию операций <!> &mdash; вычисление значений многочлена,
    заданного коэффициентами <!>, в точках <!> и <!> &mdash; восстановление коэффициентов многочлена
    по его значениям <!> в точках <!>.`,1),tr=l(`Стандартными методами можно реализовать
    операцию <!> за <!> умножений с помощью схемы Горнера
    и операцию <!> за <!> методами обычной интерполяции.
    Можно, конечно, попробовать оптимизировать интерполяцию до <!>, но это тоже не подходит,
    потому что школьный метод всё еще эффективнее.`,1),_r=l("Мы вольны выбирать узлы <!>, и эта способность является ключом к построению эффективного алгоритма.",1),er=l("<!> <!> <!>",1),dr=l(`Выберем число <!>, чтобы иметь запас на будущее
    (мы из двух многочленов степени <!> хотим сделать многочлен степени <!>)
    и чтобы было проще считать.`,1),vr=l("Для того, чтобы все операции делать эффективно, можно выбрать узлы <!> следующим образом",1),sr=l("где <!> &mdash; первый комплексный корень из единицы.",1),mr=l("<!> <!> <!> <!>",1),ir=l(`<b>Дискретное преобразование Фурье</b> многочлена <!>,
    заданного коэффициентами <!>,
    называется вычисление его значений в <!> точках <!>.
    При этом список коэффициентов <!> дополнен нулями до длины <!>.`,1),cr=l("<!> <!> <!>",1),lr=l(`Алгоритм Кули-Тьюки находит дискретного преобразования Фурье
    многочлена <!>.`,1),pr=l(`Перед всеми манипуляциями нам надо дополнить массив коэффициентов <!> нулями так,
    чтобы его длина равнялась степени двойки.
    То есть, если исходная степень многочлена <!> равнялась <!>,
    то после дополнения его степень будет <!>,
    а коэффициенты <!> при <!>.
    Исходный многочлен теперь выглядит так`,1),xr=l(`Представим многочлен в виде <!>,
    где <!> состоит из коэффициентов при чётных степенях <!>,
    а <!> состоит из коэффициентов при нечётных степенях <!>.`,1),$r=l("При <!> можно использовать равенство",1),Pr=l("С помощью этого можно разделить задачу вычисления дискретного преобразования Фурье <!> к двум вдвое меньшим задачам",1),wr=l("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1),fr=l(`Что нам нужно было от <!>?
    Только то, что все они являются корнями из единицы, то есть образуют циклическую группу порядка <!>.
    Мы выбрали первый попавшийся объект &mdash;
    дискретную подгруппу группы <!>, имеющую порядок <!>.`,1),gr=l("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Mr(K){var T=gr(),C=c(T);U(C,{title:"Дискретное преобразование Фурье"});var S=r(C,2);u(S,{children:(w,h)=>{var m=Y(),f=c(m);$(f,{children:(n,v)=>{a();var d=b("Давайте научимся быстро умножать многочлены.");e(n,d)}});var P=r(f,2);$(P,{children:(n,v)=>{a();var d=W(),_=r(c(d));o(_,{m:"A(x)"});var x=r(_,2);o(x,{m:"B(x)"});var i=r(x,2);o(i,{m:"n"}),a(),e(n,d)}});var g=r(P,2);o(g,{display:!0,m:`\\align{
          A(x) &= \\sum_{k=0}^n a_k \\cdot x^k = a_{n} \\cdot x^n + a_{n-1} \\cdot x^{n-1} + \\dotsb + a_2 \\cdot x^2 + a_1 \\cdot x + a_0 \\\\
          B(x) &= \\sum_{k=0}^n b_k \\cdot x^k = b_{n} \\cdot x^n + b_{n-1} \\cdot x^{n-1} + \\dotsb + b_2 \\cdot x^2 + b_1 \\cdot x + b_0
          }`});var s=r(g,2);$(s,{children:(n,v)=>{a();var d=b("В школе изучался неэффективный метод умножения «в столбик»");e(n,d)}});var p=r(s,2);o(p,{display:!0,m:"A(x) \\cdot B(x) = \\sum_{k=0}^n x^k \\sum_{i+j=k} a_i b_j"});var t=r(p,2);$(t,{children:(n,v)=>{a();var d=X(),_=r(c(d));o(_,{m:"(n+1)(n+2)/2 = \\Theta(n^2)"}),a(),e(n,d)}}),e(w,m)}});var O=r(S,2);u(O,{children:(w,h)=>{var m=ar(),f=c(m);$(f,{children:(s,p)=>{a();var t=Z(),n=r(c(t));o(n,{m:"P(x) = \\sum_{k=0}^n a_k \\cdot x^k"});var v=r(n,2);o(v,{m:"n"});var d=r(v,2);o(d,{m:"n+1"});var _=r(d,2);o(_,{m:"a_0, a_1, \\dotsc, a_n"});var x=r(_,2);o(x,{m:"n+1"});var i=r(x,2);o(i,{m:"\\bigl( x_0, P(x_0) \\bigr), \\bigl( x_1, P(x_1) \\bigr), \\dotsc, \\bigl( x_n, P(x_n) \\bigr)"}),a(),e(s,t)}});var P=r(f,2);$(P,{children:(s,p)=>{a();var t=rr(),n=r(c(t));o(n,{m:"A(x)"});var v=r(n,2);o(v,{m:"B(x)"});var d=r(v,2);o(d,{m:"x_0, x_1, \\dotsc, x_{2n+1}"});var _=r(d,2);o(_,{m:"A_0, A_1, \\dotsc, A_{2n+1}"});var x=r(_,2);o(x,{m:"B_0, B_1, \\dotsc, B_{2n+1}"});var i=r(x,2);o(i,{m:"A(x) \\cdot B(x)"});var N=r(i,2);o(N,{m:"A_0 B_0, A_1 B_1, \\dotsc, A_{2n+1} B_{2n+1}"}),a(),e(s,t)}});var g=r(P,2);$(g,{children:(s,p)=>{a();var t=or(),n=r(c(t));o(n,{m:"2n+1 = O(n)"}),a(),e(s,t)}}),e(w,m)}});var q=r(O,2);I(q,{code:`input const int n
input array[int] a[n+1]
input array[int] b[n+1]

array[int] x[2*n+1] = [???, ???, ..., ???]

array[int] A[2*n+1] = evaluate(a, x)
array[int] B[2*n+1] = evaluate(b, x)

array[int] C[2*n+1]
for int i = 0; i < 2*n+1; i++:
    C[i] = A[i] * B[i]

array[int] c[2*n+1] = interpolate(x, C)`});var H=r(q,2);u(H,{children:(w,h)=>{var m=er(),f=c(m);$(f,{children:(s,p)=>{a();var t=nr(),n=r(c(t));j(n,{c:"evaluate(p, x)"});var v=r(n,2);j(v,{c:"p"});var d=r(v,2);j(d,{c:"x"});var _=r(d,2);j(_,{c:"interpolate(x, P)"});var x=r(_,2);j(x,{c:"P"});var i=r(x,2);j(i,{c:"x"}),a(),e(s,t)}});var P=r(f,2);$(P,{children:(s,p)=>{a();var t=tr(),n=r(c(t));j(n,{c:"evaluate(p, x)"});var v=r(n,2);o(v,{m:"n+1"});var d=r(v,2);j(d,{c:"interpolate(x, P)"});var _=r(d,2);o(_,{m:"O(n^3)"});var x=r(_,2);o(x,{m:"O(n^2)"}),a(),e(s,t)}});var g=r(P,2);$(g,{children:(s,p)=>{a();var t=_r(),n=r(c(t));o(n,{m:"x_j"}),a(),e(s,t)}}),e(w,m)}});var M=r(H,2);J(M,{children:(w,h)=>{a();var m=b("Дискретное преобразование Фурье");e(w,m)}});var R=r(M,2);u(R,{children:(w,h)=>{var m=mr(),f=c(m);$(f,{children:(p,t)=>{a();var n=dr(),v=r(c(n));o(v,{m:"N \\ge n+1"});var d=r(v,2);o(d,{m:"n"});var _=r(d,2);o(_,{m:"2n"}),a(),e(p,n)}});var P=r(f,2);$(P,{children:(p,t)=>{a();var n=vr(),v=r(c(n));o(v,{m:"x_j"}),a(),e(p,n)}});var g=r(P,2);o(g,{display:!0,m:"x_j = e^{2 \\pi i j / N} = w^j"});var s=r(g,2);$(s,{children:(p,t)=>{a();var n=sr(),v=r(c(n));o(v,{m:"w = e^{2 \\pi / N}"}),a(),e(p,n)}}),e(w,m)}});var z=r(R,2);u(z,{children:(w,h)=>{var m=cr(),f=c(m);$(f,{children:(s,p)=>{var t=ir(),n=r(c(t),2);o(n,{m:"P(x)"});var v=r(n,2);o(v,{m:"P(x) = \\sum_{j=0}^{N-1} p_j \\cdot x^j"});var d=r(v,2);o(d,{m:"N"});var _=r(d,2);o(_,{m:"w^0, w^1, w^2, \\dotsc, w^{N-1}"});var x=r(_,2);o(x,{m:"a_0, a_1, a_2, \\dotsc, a_n"});var i=r(x,2);o(i,{m:"n"}),a(),e(s,t)}});var P=r(f,2);$(P,{children:(s,p)=>{a();var t=b("Можно сформулировать задачу поиска дискретного преобразования Фурье в матричных терминах");e(s,t)}});var g=r(P,2);o(g,{big:!0,display:!0,m:`\\pmatrix{
          ~ 1 & 1 & 1 & 1 & \\cdots & 1 & 1 \\\\!
          ~ 1 & w & w^2 & w^3 & \\cdots & w^{N-2} & w^{N-1} \\\\!
          ~ 1 & w^2 & w^4 & w^6 & \\cdots & w^{2 (N-2)} & w^{2 (N-1)} \\\\!
          ~ 1 & w^3 & w^6 & w^9 & \\cdots & w^{3 (N-2)} & w^{3 (N-1)} \\\\
          ~ \\vdots & \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\!
          ~ 1 & w^{(N-2)} & w^{(N-2) \\cdot 3} & w^{(N-2) \\cdot 4} & \\cdots & w^{(N-2) \\cdot (N-2)} & w^{(N-2) \\cdot (N-1)} \\\\!
          ~ 1 & w^{(N-1)} & w^{(N-1) \\cdot 3} & w^{(N-1) \\cdot 4} & \\cdots & w^{(N-1) \\cdot (N-2)} & w^{(N-1) \\cdot (N-1)}
          }
          \\cdot
          \\pmatrix{p_0 \\\\ p_1 \\\\ p_2 \\\\ p_3 \\\\ \\vdots \\\\ p_{N-2} \\\\ p_{N-1}}
          =
          \\pmatrix{P_0 \\\\ P_1 \\\\ P_2 \\\\ P_3 \\\\ \\vdots \\\\ P_{N-2} \\\\ P_{N-1}}
          `}),e(w,m)}});var D=r(z,2);V(D,{children:(w,h)=>{a();var m=b("Алгоритм Кули-Тьюки");e(w,m)}});var E=r(D,2);u(E,{children:(w,h)=>{var m=wr(),f=c(m);$(f,{children:(_,x)=>{a();var i=lr(),N=r(c(i));o(N,{m:"P(x) = \\sum_{j=0}^{n} p_j \\cdot x^j"}),a(),e(_,i)}});var P=r(f,2);$(P,{children:(_,x)=>{a();var i=pr(),N=r(c(i));o(N,{m:"p_j"});var k=r(N,2);o(k,{m:"P(x)"});var y=r(k,2);o(y,{m:"n"});var A=r(y,2);o(A,{m:"N = 2^{\\lceil \\log_2 n \\rceil}"});var B=r(A,2);o(B,{m:"p_j = 0"});var Q=r(B,2);o(Q,{m:"j > n"}),a(),e(_,i)}});var g=r(P,2);o(g,{display:!0,m:"P(x) = \\sum_{j=0}^{N-1} p_j \\cdot x^j"});var s=r(g,2);$(s,{children:(_,x)=>{a();var i=xr(),N=r(c(i));o(N,{m:"P(x) = S(x^2) + x \\cdot T(x^2)"});var k=r(N,2);o(k,{m:"S(x)"});var y=r(k,2);o(y,{m:"P(x)"});var A=r(y,2);o(A,{m:"T(x)"});var B=r(A,2);o(B,{m:"P(x)"}),a(),e(_,i)}});var p=r(s,2);o(p,{display:!0,m:"S(x) = \\sum_{j=0}^{N/2-1} p_{2j} \\cdot x^j \\qquad T(x) = \\sum_{j=0}^{N/2-1} p_{2j+1} \\cdot x^j"});var t=r(p,2);$(t,{children:(_,x)=>{a();var i=$r(),N=r(c(i));o(N,{m:"N = 2k"}),a(),e(_,i)}});var n=r(t,2);o(n,{display:!0,m:"w^{2j} = w^{2j \\bmod 2k} = w^{2 \\cdot (j \\bmod k)}"});var v=r(n,2);$(v,{children:(_,x)=>{a();var i=Pr(),N=r(c(i));o(N,{m:"P(x)"}),a(),e(_,i)}});var d=r(v,2);o(d,{display:!0,m:"P(w^j) = S(w^{2j}) + w^j \\cdot T(w^{2j}) = S \\big( (w^2)^{j \\bmod k} \\big) + w^j \\cdot T \\big( (w^2)^{j \\bmod k} \\big)"}),e(w,m)}});var F=r(E,2);I(F,{code:`function fft(array[int] p[N], complex w) -> array[N]:
    if N == 1: return P

    const int k = N / 2

    array[int] s[k], t[k]

    for int i = 0; i < N; i++:
        if i % 2 == 0:
            s[i/2] = p[i]
        else:
            t[i/2] = p[i]

    S = fft(s, w * w)
    T = fft(t, w * w)

    array[int] result[N]
    complex wt = 1

    for int i = 0; i < N; i++:
        result[i] = S[i % k] + wt * T[i % k]
        wt *= w

    return result`});var G=r(F,2);J(G,{children:(w,h)=>{a();var m=b("Другие основания");e(w,m)}});var L=r(G,2);u(L,{children:(w,h)=>{$(w,{children:(m,f)=>{a();var P=fr(),g=r(c(P));o(g,{m:"w^j"});var s=r(g,2);o(s,{m:"n"});var p=r(s,2);o(p,{m:"\\CC / \\RR"});var t=r(p,2);o(t,{m:"n"}),a(),e(m,P)}})}}),e(K,T)}export{Mr as component};
