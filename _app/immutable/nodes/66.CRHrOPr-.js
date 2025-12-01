import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as p,a as s,b as v,s as r,n,t as B}from"../chunks/BWp35gWV.js";/* empty css                */import{P}from"../chunks/DPzc5wQr.js";import{P as c}from"../chunks/B7flgP-x.js";/* empty css                *//* empty css                */import{M as o}from"../chunks/BqyEoRxA.js";import{T as G}from"../chunks/CR7k0xtG.js";import{S as H}from"../chunks/CBbFRhrb.js";/* empty css                */import{C as b}from"../chunks/BvAJckrt.js";/* empty css                */var I=p(`Начнём с простого. Пусть нам нужно сгенерировать все <!> бинарных строк длины <!>.
    Точнее, нам нужно сделать итератор, который выдает нам все возможные битовые строки по одному разу.`,1),J=p(`Битовую строку можно рассматривать как число в двоичной системе счисления.
    Тогда нам достаточно просто перебирать все числа от <!> до <!> и переводить их в двоичную систему счисления:`,1),K=p("<!> <!>",1),L=p(`Точно также можно поступить и когда нам нужно сгенерировать <!>-арные строки длины <!>.
    Это строки из множества <!>.`,1),N=p("Представляем все числа от <!> до <!> в системе счисления по основанию <!> и выдаём их по порядку.",1),O=p("<!> <!>",1),Q=p(`Перевод числа <!> в систему счисления по основанию <!> требует <!> итераций,
    а каждая итерация выполняет одно деление на <!> и одно взятие по модулю <!>.
    Итого для полной генерации количество итераций равно`,1),R=p("<!> <!> <!>",1),U=p(`На самом деле нам не нужно каждый раз переводить число в систему счисления по основанию <!>.
    Следующее число отличается от предыдущего только на <!>,
    поэтому можно просто прибавлять <!>, но уже в позиционном представлении числа.
    Добавление происходит прям также, как при сложении в столбик: переносим разряды когда надо.`,1),V=p(`Вообще, для такой задачи генерации есть обобщение: сгенерировать все возможные кортежи длины <!>,
    где на позиции <!> стоит число <!>, которое <!>.`,1),W=p(`Получается, задача генерации сводится к задаче &laquo;добавления <!>&raquo; к &laquo;числу&raquo; <!>, записанному
    в смешанной позиционной счисления по основанию <!>:`,1),X=p("<!> <!> <!>",1),Y=p("Для удобства введем дополнительные переменные <!> и <!>.",1),Z=p("Всего будет сгенерировано <!> кортежей в лексикографическом порядке.",1),rr=p("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function fr(D){var y=rr(),x=s(y);G(x,{title:"Генерация кортежей"});var j=r(x,2);P(j,{children:(l,g)=>{var e=K(),$=s(e);c($,{children:(t,i)=>{n();var m=I(),a=r(s(m));o(a,{m:"2^n"});var d=r(a,2);o(d,{m:"n"}),n(),v(t,m)}});var _=r($,2);c(_,{children:(t,i)=>{n();var m=J(),a=r(s(m));o(a,{m:"0"});var d=r(a,2);o(d,{m:"2^n-1"}),n(),v(t,m)}}),v(l,e)}});var q=r(j,2);b(q,{code:`generator binary_tuples(int n) -> tuple[{0, 1}]:
    for int i = 0; i < 2 ** n; i++:
        yield convert(n, to base 2)`});var k=r(q,2);P(k,{children:(l,g)=>{var e=O(),$=s(e);c($,{children:(t,i)=>{n();var m=L(),a=r(s(m));o(a,{m:"d"});var d=r(a,2);o(d,{m:"n"});var f=r(d,2);o(f,{m:"\\{0, 1, 2, \\dotsc, d-1, d\\}^n"}),n(),v(t,m)}});var _=r($,2);c(_,{children:(t,i)=>{n();var m=N(),a=r(s(m));o(a,{m:"0"});var d=r(a,2);o(d,{m:"d^n-1"});var f=r(d,2);o(f,{m:"d"}),n(),v(t,m)}}),v(l,e)}});var C=r(k,2);b(C,{code:`generator tuples(int n, int d) -> tuple[int]:
    for int i = 0; i < d ** n; i++:
        yield convert(n, to base d)`});var M=r(C,2);P(M,{children:(l,g)=>{var e=R(),$=s(e);c($,{children:(i,m)=>{n();var a=B("Такой лобовой метод, конечно, имеет право на существования, но он немного неэффективен.");v(i,a)}});var _=r($,2);c(_,{children:(i,m)=>{n();var a=Q(),d=r(s(a));o(d,{m:"n"});var f=r(d,2);o(f,{m:"d"});var h=r(f,2);o(h,{m:"\\lfloor \\log_d n \\rfloor + 1"});var u=r(h,2);o(u,{m:"d"});var F=r(u,2);o(F,{m:"d"}),n(),v(i,a)}});var t=r(_,2);o(t,{display:!0,m:"1 + \\sum_{k=1}^{d^n-1} \\bigl( \\lfloor \\log_d n \\rfloor + 1\\bigr) = n \\cdot d^n - \\frac{d^n - 1}{d - 1} + 1"}),v(l,e)}});var S=r(M,2);P(S,{children:(l,g)=>{c(l,{children:(e,$)=>{n();var _=U(),t=r(s(_));o(t,{m:"d"});var i=r(t,2);o(i,{m:"1"});var m=r(i,2);o(m,{m:"1"}),n(),v(e,_)}})}});var T=r(S,2);H(T,{children:(l,g)=>{n();var e=B("Смешанная система счисления");v(l,e)}});var w=r(T,2);P(w,{children:(l,g)=>{var e=X(),$=s(e);c($,{children:(i,m)=>{n();var a=V(),d=r(s(a));o(d,{m:"n"});var f=r(d,2);o(f,{m:"j"});var h=r(f,2);o(h,{m:"a_j"});var u=r(h,2);o(u,{m:"0 \\le a_j < m_j"}),n(),v(i,a)}});var _=r($,2);c(_,{children:(i,m)=>{n();var a=W(),d=r(s(a));o(d,{m:"1"});var f=r(d,2);o(f,{m:"a_1 \\, a_2 \\, a_3 \\, \\dotsm \\, a_{n-1} \\, a_n"});var h=r(f,2);o(h,{m:"(m_1, m_2, m_3, \\dotsc, m_{n-1}, m_n)"}),n(),v(i,a)}});var t=r(_,2);o(t,{display:!0,m:"\\bmatrix{a_1 & a_2 & a_3 & \\cdots & a_{n-1} & a_n \\\\ m_1 & m_2 & m_3 & \\cdots & m_{n-1} & m_n}"}),v(l,e)}});var z=r(w,2);P(z,{children:(l,g)=>{c(l,{children:(e,$)=>{n();var _=Y(),t=r(s(_));o(t,{m:"a_0"});var i=r(t,2);o(i,{m:"m_0"}),n(),v(e,_)}})}});var A=r(z,2);b(A,{code:`generator radix_tuples(tuple[int] m[n]) -> tuple[int]:
    array[int] a = [0, 0, ..., 0]

    yield tuple(a)

    forever:
        a[-1] += 1

        for int i = n - 1; i >= 0; i--:
            if a[i] >= m[i]:
                if i == 0: stop
                a[i] = 0
                a[i - 1] += 1
            else:
                break

        yield tuple(a)`});var E=r(A,2);P(E,{children:(l,g)=>{c(l,{children:(e,$)=>{n();var _=Z(),t=r(s(_));o(t,{m:"\\prod_{j=1}^n m_j"}),n(),v(e,_)}})}}),v(D,y)}export{fr as component};
