import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as v,a as s,b as d,s as o,n as t,t as M}from"../chunks/BWp35gWV.js";import{T as I}from"../chunks/CR7k0xtG.js";import{P as b}from"../chunks/DPzc5wQr.js";import{P as k}from"../chunks/B7flgP-x.js";import{M as r}from"../chunks/BqyEoRxA.js";/* empty css                */import"../chunks/i9XClpbl.js";/* empty css                *//* empty css                */import{H as C}from"../chunks/DXKx2xvL.js";/* empty css                */import{D as J}from"../chunks/DlTIf4aM.js";/* empty css                */import{T as K}from"../chunks/y0AHHn4v.js";import{P as L}from"../chunks/BBkyo9uE.js";var N=v(`<b>Линейная рекуррентная последовательность</b> степени <!> &mdash;
        последовательность <!>, для которой`,1),Q=v("Также заданы <!> первых члены последовательности <!>.",1),R=v("<!> <!> <!>",1),S=v(`В лоб считать члены последовательностей долго.
    Вычисление <!> членов имеет временную сложность <!>.`,1),U=v(`Линейная рекуррентная последовательность хорошо выражается через матрицы.
    А именно, мы можем записать переход от вектора <!> к &laquo;смещенному&raquo; вектору <!>`,1),V=v(`Получается, если обозначить матрицу перехода за <!>, то
    можно получить формулу <!>-го члена через первые <!> заданных`,1),W=v(`Используя алгоритм быстрого возведения в степень, можно находить значение <!>-го члена
    за время <!>.`,1),X=v(`Но на самом деле, амортизированная сложность <!>,
    потому что мы за раз находим значения сразу <!> членов.
    К сожалению, такая &laquo;оптимизация&raquo; времени мало когда применима.`,1),Y=v("<!> <!> <!> <!> <!> <!>",1),Z=v(`Пусть <!> &mdash; матрица линейного рекуррентного соотношения
    с коэффициентами <!>:`,1),oo=v("<!> <!> <!> <!>",1),ro=v("По теореме Кэли-Гамильтона матрица <!> удовлетворяет своему характеристическому многочлену, значит",1),ao=v("<!> <!>",1),to=v("<!> <!>",1),_o=v("Из этой теоремы сразу вытекает способ ускорения вычислений степени матрицы <!>.",1),no=v("Любую степень <!> можно представить в виде взвешенной суммы базовых степеней",1),eo=v("где <!> &mdash; коэффициенты, зависящие от <!>.",1),so=v("Тогда, если мы знаем <!>, можно вычислить <!>",1),vo=v(`Получается, что умножение матриц мы свели к умножению двух многочленов, у каждого по <!> коэффициентов.
    А это можно сделать за <!> умножений,
    или за <!> с использованием дискретного преобразования Фурье.`,1),co=v("<!> <!> <!> <!> <!> <!> <!>",1),mo=v("Этот алгоритм позволяет найти <!>-й член последовательности за <!> или за <!>.",1),lo=v("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Ho(E){var T=lo(),y=s(T);I(y,{title:"Линейные рекурренты"});var O=o(y,2);J(O,{title:"Линейная рекуррента",children:(l,P)=>{var n=R(),g=s(n);k(g,{children:($,h)=>{var x=N(),m=o(s(x),2);r(m,{m:"k"});var e=o(m,2);r(e,{m:"x_n"}),t(),d($,x)}});var c=o(g,2);r(c,{display:!0,m:"x_n = c_1 \\cdot x_{n-1} + c_2 \\cdot x_{n-2} + \\dotsb + c_{k-1} \\cdot x_{n-k+1} + c_k \\cdot x_{n-k}"});var p=o(c,2);k(p,{children:($,h)=>{t();var x=Q(),m=o(s(x));r(m,{m:"k"});var e=o(m,2);r(e,{m:"x_1, x_2, \\dotsc, x_k"}),t(),d($,x)}}),d(l,n)}});var q=o(O,2);C(q,{children:(l,P)=>{t();var n=M("Быстрое вычисление и матричная форма");d(l,n)}});var D=o(q,2);b(D,{children:(l,P)=>{k(l,{children:(n,g)=>{t();var c=S(),p=o(s(c));r(p,{m:"n"});var $=o(p,2);r($,{m:"\\Theta(nk)"}),t(),d(n,c)}})}});var H=o(D,2);b(H,{children:(l,P)=>{var n=Y(),g=s(n);k(g,{children:(m,e)=>{t();var i=U(),a=o(s(i));r(a,{m:"(x_{n-1}, x_{n-2}, \\dotsc, x_{n-k+1}, x_{n-k})^\\T"});var _=o(a,2);r(_,{m:"(x_{n}, x_{n-1}, \\dotsc, x_{n-k+2}, x_{n-k+1})^\\T"}),d(m,i)}});var c=o(g,2);r(c,{big:!0,display:!0,m:`\\pmatrix{
          c_1 & c_2 & c_3 & \\cdots & c_{k-1} & c_k \\\\
          1 & 0 & 0 & \\cdots & 0 & 0 \\\\
          0 & 1 & 0 & \\cdots & 0 & 0 \\\\
          \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\
          0 & 0 & 0 & \\cdots & 0 & 0 \\\\
          0 & 0 & 0 & \\cdots & 1 & 0
          }
          \\cdot
          \\pmatrix{x_{n-1} \\\\ x_{n-2} \\\\ x_{n-3} \\\\ \\vdots \\\\ x_{n-k+1} \\\\ x_{n-k}}
          =
          \\pmatrix{x_{n} \\\\ x_{n-1} \\\\ x_{n-2} \\\\ \\vdots \\\\ x_{n-k+2} \\\\ x_{n-k+1}}`});var p=o(c,2);k(p,{children:(m,e)=>{t();var i=V(),a=o(s(i));r(a,{m:"M"});var _=o(a,2);r(_,{m:"n"});var f=o(_,2);r(f,{m:"k"}),t(),d(m,i)}});var $=o(p,2);r($,{display:!0,m:"M^{n-k} \\cdot (x_k, x_{k-1}, \\dotsc, x_1) ^\\T = (x_n, x_{n-1}, \\dotsc, x_{n-k+1}) ^\\T"});var h=o($,2);k(h,{children:(m,e)=>{t();var i=W(),a=o(s(i));r(a,{m:"n"});var _=o(a,2);r(_,{m:"O \\big( k^3 \\cdot \\log(n-k) \\big)"}),t(),d(m,i)}});var x=o(h,2);k(x,{children:(m,e)=>{t();var i=X(),a=o(s(i));r(a,{m:"O \\big( k^2 \\cdot \\log(n-k) \\big)"});var _=o(a,2);r(_,{m:"k"}),t(),d(m,i)}}),d(l,n)}});var j=o(H,2);C(j,{children:(l,P)=>{t();var n=M("Характеристические многочлены");d(l,n)}});var w=o(j,2);b(w,{children:(l,P)=>{k(l,{children:(n,g)=>{t();var c=M(`Используя теорему Кэли-Гамильтона можно добиться значительного ускорения реального времени вычисления рекуррентных
    последовательностей.`);d(n,c)}})}});var z=o(w,2);K(z,{title:"Характеристический многочлен матрицы рекуррентного соотношения",children:(l,P)=>{k(l,{children:(n,g)=>{t();var c=M(`Характеристический многочлен матрицы линейного рекуррентного соотношения
    совпадает с этим линейным рекуррентным соотношением.`);d(n,c)}})}});var A=o(z,2);L(A,{children:(l,P)=>{var n=to(),g=s(n);b(g,{children:(p,$)=>{var h=oo(),x=s(h);k(x,{children:(a,_)=>{t();var f=Z(),u=o(s(f));r(u,{m:"M"});var G=o(u,2);r(G,{m:"c_1, c_2, \\dotsb, c_k"}),t(),d(a,f)}});var m=o(x,2);r(m,{big:!0,display:!0,m:`M = \\pmatrix{
          c_1 & c_2 & c_3 & \\cdots & c_{k-1} & c_k \\\\
          1 & 0 & 0 & \\cdots & 0 & 0 \\\\
          0 & 1 & 0 & \\cdots & 0 & 0 \\\\
          \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\
          0 & 0 & 0 & \\cdots & 0 & 0 \\\\
          0 & 0 & 0 & \\cdots & 1 & 0
          }`});var e=o(m,2);k(e,{children:(a,_)=>{t();var f=M("Характеристический многочлен этой матрицы");d(a,f)}});var i=o(e,2);r(i,{big:!0,display:!0,m:`P(\\lambda) = M - \\lambda \\cdot \\1 = \\vmatrix{
          c_1 - \\lambda & c_2 & c_3 & \\cdots & c_{k-1} & c_k \\\\
          1 & - \\lambda & 0 & \\cdots & 0 & 0 \\\\
          0 & 1 &  - \\lambda & \\cdots & 0 & 0 \\\\
          \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\
          0 & 0 & 0 & \\cdots &  - \\lambda & 0 \\\\
          0 & 0 & 0 & \\cdots & 1 &  - \\lambda
          }
          = \\lambda^k - c_1 \\cdot \\lambda^{k-1} - c_2 \\cdot \\lambda^{k-2} - \\dotsb - c_{k-1} \\cdot \\lambda - c_k`}),d(p,h)}});var c=o(g,2);b(c,{children:(p,$)=>{var h=ao(),x=s(h);k(x,{children:(e,i)=>{t();var a=ro(),_=o(s(a));r(_,{m:"M"}),t(),d(e,a)}});var m=o(x,2);r(m,{display:!0,m:"M^k = c_1 \\cdot M^{k-1} + c_2 \\cdot M^{k-2} + c_3 \\cdot M^{k-3} + \\dotsb + c_{k-1} \\cdot M + c_k \\cdot \\1"}),d(p,h)}}),d(l,n)}});var B=o(A,2);b(B,{children:(l,P)=>{var n=co(),g=s(n);k(g,{children:(e,i)=>{t();var a=_o(),_=o(s(a));r(_,{m:"M"}),t(),d(e,a)}});var c=o(g,2);k(c,{children:(e,i)=>{t();var a=no(),_=o(s(a));r(_,{m:"M^n"}),t(),d(e,a)}});var p=o(c,2);r(p,{display:!0,m:"M^n = a_{k-1} \\cdot M^{k-1} + a_{k-2} \\cdot M^{k-2} + a_{k-3} \\cdot M^{k-3} + \\dotsb + a_1 \\cdot M^1 + a_0 \\cdot \\1"});var $=o(p,2);k($,{children:(e,i)=>{t();var a=eo(),_=o(s(a));r(_,{m:"a_i"});var f=o(_,2);r(f,{m:"n"}),t(),d(e,a)}});var h=o($,2);k(h,{children:(e,i)=>{t();var a=so(),_=o(s(a));r(_,{m:"M^n"});var f=o(_,2);r(f,{m:"M^{n+1}"}),d(e,a)}});var x=o(h,2);r(x,{big:!0,display:!0,m:`\\align{
          M^{n+1} &= a_{k-1} \\cdot M^{k} + a_{k-2} \\cdot M^{k-1} + a_{k-3} \\cdot M^{k-2} + \\dotsb + a_1 \\cdot M^2 + a_0 \\cdot M
          =\\\\ &= (a_{k-1} c_1 + a_{k-2}) \\cdot M^{k-1} + (a_{k-1} c_2 + a_{k-3}) \\cdot M^{k-1} + \\dotsb + (a_{k-1} c_{k-1} + a_0) \\cdot M + c_k \\cdot \\1
          }`});var m=o(x,2);k(m,{children:(e,i)=>{t();var a=vo(),_=o(s(a));r(_,{m:"k"});var f=o(_,2);r(f,{m:"k^2"});var u=o(f,2);r(u,{m:"O(k \\log k)"}),t(),d(e,a)}}),d(l,n)}});var F=o(B,2);b(F,{children:(l,P)=>{k(l,{children:(n,g)=>{t();var c=mo(),p=o(s(c));r(p,{m:"n"});var $=o(p,2);r($,{m:"O \\big( k^2 \\log(n-k) \\big)"});var h=o($,2);r(h,{m:"O(k \\log n)"}),t(),d(n,c)}})}}),d(E,T)}export{Ho as component};
