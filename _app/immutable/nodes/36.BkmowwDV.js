import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as l,a as x,b as e,s as r,n as a,t as y}from"../chunks/BWp35gWV.js";import{T as U}from"../chunks/CR7k0xtG.js";import{P as g}from"../chunks/DPzc5wQr.js";import{P}from"../chunks/B7flgP-x.js";import{M as o}from"../chunks/BqyEoRxA.js";/* empty css                */import"../chunks/i9XClpbl.js";/* empty css                */import{C as T}from"../chunks/BvAJckrt.js";import{H as O}from"../chunks/DXKx2xvL.js";import{S as V}from"../chunks/CBbFRhrb.js";import{D as W}from"../chunks/DlTIf4aM.js";/* empty css                */import{T as X}from"../chunks/y0AHHn4v.js";import{P as Y}from"../chunks/BBkyo9uE.js";var Z=l("Многочлен степени <!> однозначно задается своими значениями в <!> точке <!>.",1),rr=l("Существует ровно один многочлен <!> степени <!> такой, что для заданного набора точек <!>",1),or=l("<!> <!> <!>",1),_r=l(`<b>Интерполяционный многочлен Лагранжа</b> &mdash; многочлен степени <!>,
        удовлетворяющий условиям теоремы, то есть проходящий через точки <!>`,1),nr=l("<!> <!>",1),ar=l(`В том, что этот многочлен <!> действительно проходит через все заданные точки,
        можно убедиться подстановкой.`,1),er=l("<b>Единственность многочлена.</b> Такой многочлен степени <!> есть всего один.",1),tr=l(`Предположим, что это не так, и что есть два разных многочлена <!> и <!>, <!>, которые оба проходят через заданные точки.
        Их разность <!> равна <!> во всех точках <!>.
        Тогда`,1),dr=l("является многочленом степени <!>, а это невозможно, потому что оба многочлена степени <!>.",1),vr=l("<!> <!> <!> <!> <!>",1),sr=l(`Можно записать систему <!> линейных уравнений, чтобы выразить коэффициенты.
        Пишу сразу в матричной форме`,1),ir=l("<!> <!> <!> <!> <!>",1),mr=l(`Понятно, что в лоб считать значение многочлена <!> в произвольной точке <!> не очень эффективно &mdash; временная сложность этой операции <!>.
        Таким образом, на вычисления значений одного многочлена в <!> различных точках
        нам потребуется время <!>.`,1),xr=l(`Есть несколько алгоритмов, которые с некоторым предварительным подсчетом уменьшают время
        вычисления значения многочлена в одной точке до <!>.`,1),lr=l("<!> <!>",1),pr=l("Интерполяционный многочлен <!> можно представить через разделенные разности",1),cr=l("где <!> &mdash; разделенная разность <!> порядка <!>:",1),$r=l("<!> <!> <!> <!> <!>",1),Pr=l("Нам нужно предварительно за время <!> посчитать <!> разделенную разность <!>",1),fr=l("<!> <!>",1),hr=l(`Теперь мы можем сделать функцию, которая будет быстро считать значение многочлена <!>.
        Используем для вычислений нашу формулу`,1),yr=l("Это можно считать быстро, за время <!>, если использовать индуктивные вычисления.",1),gr=l("<!> <!> <!>",1),ur=l(`Пусть у нас есть <!> точка <!>,
        построенный массив разделенных разностей <!> и интерполяционный многочлен <!>.
        Мы хотим добавить еще одну точку <!>.`,1),jr=l("<!> <!> <!> <!> <!> <!>",1),kr=l("Подсчёт новой разделенной разности <!> работает за время <!>.",1),br=l("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function Lr(Q){var q=br(),w=x(q);U(w,{title:"Интерполяционный многочлен Лагранжа"});var A=r(w,2);g(A,{children:(m,f)=>{P(m,{children:(t,s)=>{a();var i=y("Интерполяция — нахождение промежуточных значений между известными");e(t,i)}})}});var B=r(A,2);O(B,{children:(m,f)=>{a();var t=y("Интерполяционный многочлен Лагранжа");e(m,t)}});var C=r(B,2);X(C,{title:"Задание многочлена",children:(m,f)=>{var t=or(),s=x(t);P(s,{children:(c,$)=>{a();var _=Z(),d=r(x(_));o(d,{m:"n"});var n=r(d,2);o(n,{m:"n+1"});var v=r(n,2);o(v,{m:"x_0, x_1, \\dotsc, x_n"}),a(),e(c,_)}});var i=r(s,2);P(i,{children:(c,$)=>{a();var _=rr(),d=r(x(_));o(d,{m:"P"});var n=r(d,2);o(n,{m:"n"});var v=r(n,2);o(v,{m:"(x_0, y_0), (x_1, y_1), \\dotsc, (x_n, y_n)"}),e(c,_)}});var p=r(i,2);o(p,{display:!0,m:"y_0 = P(x_0) \\quad y_1 = P(x_1) \\quad \\cdots \\quad y_n = P(x_n)"}),e(m,t)}});var D=r(C,2);W(D,{title:"Интерполяционный многочлен Лагранжа",children:(m,f)=>{var t=nr(),s=x(t);P(s,{children:(p,c)=>{var $=_r(),_=r(x($),2);o(_,{m:"n"});var d=r(_,2);o(d,{m:"(x_0, y_0), (x_1, y_1), \\dotsc, (x_n, y_n)"}),e(p,$)}});var i=r(s,2);o(i,{display:!0,m:"P(x) = \\sum_{i=0}^n y_i \\cdot \\prod_{j \\neq i} \\frac{x-x_j}{x_i-x_j}"}),e(m,t)}});var H=r(D,2);Y(H,{children:(m,f)=>{var t=vr(),s=x(t);P(s,{children:(_,d)=>{a();var n=ar(),v=r(x(n));o(v,{m:"P(x)"}),a(),e(_,n)}});var i=r(s,2);P(i,{children:(_,d)=>{var n=er(),v=r(x(n),2);o(v,{m:"n"}),a(),e(_,n)}});var p=r(i,2);P(p,{children:(_,d)=>{a();var n=tr(),v=r(x(n));o(v,{m:"A(x)"});var h=r(v,2);o(h,{m:"B(x)"});var u=r(h,2);o(u,{m:"\\deg A = \\deg B = n"});var j=r(u,2);o(j,{m:"A(x) - B(x)"});var k=r(j,2);o(k,{m:"0"});var b=r(k,2);o(b,{m:"x_0, x_1, \\dotsc, x_n"}),a(),e(_,n)}});var c=r(p,2);o(c,{display:!0,m:"A(x) - B(x) = \\alpha \\cdot \\prod_{i=0}^n (x-x_i)"});var $=r(c,2);P($,{children:(_,d)=>{a();var n=dr(),v=r(x(n));o(v,{m:"n+1"});var h=r(v,2);o(h,{m:"n"}),a(),e(_,n)}}),e(m,t)}});var M=r(H,2);g(M,{children:(m,f)=>{var t=ir(),s=x(t);P(s,{children:(_,d)=>{a();var n=y("Велик соблазн превратить этот многочлен в привычный вид, выразив коэффициенты");e(_,n)}});var i=r(s,2);o(i,{display:!0,m:"P(x) = a_0 + a_1 \\cdot x + a_2 \\cdot x^2 + \\dotsb + a_{n-1} \\cdot x^{n-1} + a_n \\cdot x^n"});var p=r(i,2);P(p,{children:(_,d)=>{a();var n=y(`К сожалению, эти коэффициенты считаются очень долго.
        Но полезно понимать свойства этих коэффициентов и связь интерполяционного многочлена Лагранжа
        с матрицей Вандермонда.`);e(_,n)}});var c=r(p,2);P(c,{children:(_,d)=>{a();var n=sr(),v=r(x(n));o(v,{m:"n+1"}),a(),e(_,n)}});var $=r(c,2);o($,{big:!0,display:!0,m:`
          \\pmatrix{
          ~1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} & x_0^n \\\\!
          ~1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} & x_1^n \\\\!
          ~1 & x_2 & x_2^2 & \\cdots & x_2^{n-1} & x_2^n \\\\!
          ~\\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\!
          ~1 & x_{n-1} & x_{n-1}^2 & \\cdots & x_{n-1}^{n-1} & x_{n-1}^n \\\\!
          ~1 & x_n & x_n^2 & \\cdots & x_n^{n-1} & x_n^n
          }
          \\cdot
          \\pmatrix{a_0 \\\\ a_1 \\\\ a_2 \\\\  \\vdots \\\\ a_{n-1} \\\\ a_n}
          =
          \\pmatrix{y_0 \\\\ y_1 \\\\ y_2 \\\\  \\vdots \\\\ y_{n-1} \\\\ y_n}`}),e(m,t)}});var S=r(M,2);O(S,{children:(m,f)=>{a();var t=y("Вычисление");e(m,t)}});var z=r(S,2);g(z,{children:(m,f)=>{var t=lr(),s=x(t);P(s,{children:(p,c)=>{a();var $=mr(),_=r(x($));o(_,{m:"P(x)"});var d=r(_,2);o(d,{m:"x"});var n=r(d,2);o(n,{m:"\\Theta(n^2)"});var v=r(n,2);o(v,{m:"k"});var h=r(v,2);o(h,{m:"\\Theta(kn^2)"}),a(),e(p,$)}});var i=r(s,2);P(i,{children:(p,c)=>{a();var $=xr(),_=r(x($));o(_,{m:"\\Theta(n)"}),a(),e(p,$)}}),e(m,t)}});var E=r(z,2);V(E,{children:(m,f)=>{a();var t=y("Метод разделенных разностей");e(m,t)}});var F=r(E,2);g(F,{children:(m,f)=>{var t=$r(),s=x(t);P(s,{children:(_,d)=>{a();var n=y(`Можно построить специальную таблицу разделенных разностей,
        а затем на каждом запросе считать значение многочлена итеративно.`);e(_,n)}});var i=r(s,2);P(i,{children:(_,d)=>{a();var n=pr(),v=r(x(n));o(v,{m:"P(x)"}),a(),e(_,n)}});var p=r(i,2);o(p,{display:!0,m:"P(x) = \\sum_{k=0}^n y[x_0, x_1, \\dotsc, x_k] \\cdot \\prod_{i=0}^{k-1} (x-x_i)"});var c=r(p,2);P(c,{children:(_,d)=>{a();var n=cr(),v=r(x(n));o(v,{m:"y[x_0; x_1; \\dotsc; x_k]"});var h=r(v,2);o(h,{m:"y"});var u=r(h,2);o(u,{m:"k"}),a(),e(_,n)}});var $=r(c,2);o($,{display:!0,m:"y[x_i] = y_i \\qquad y[x_j; x_{j+1}; \\dotsc; x_{j+k}] = \\frac{ y[x_{j+1}; x_{j+2}; \\dotsc; x_{j+k}] - y[x_j; x_{j+1}; \\dotsc; x_{j+k-1}] }{x_{j+k} - x_j}"}),e(m,t)}});var G=r(F,2);g(G,{children:(m,f)=>{var t=fr(),s=x(t);P(s,{children:(p,c)=>{a();var $=Pr(),_=r(x($));o(_,{m:"\\Theta(n^2)"});var d=r(_,2);o(d,{m:"n+1"});var n=r(d,2);o(n,{m:"d_i"}),e(p,$)}});var i=r(s,2);o(i,{display:!0,m:"d_i = y[x_0; x_1; \\dotsc; x_i]"}),e(m,t)}});var I=r(G,2);T(I,{code:`input const int n
input array[real] x
input array[real] y

array[real] d
d = copy(y)

for int j = 1; j <= n; j++:
    for int i = n; i >= j; i--:
        d[i] = (d[i] - d[i - 1]) / (x[i] - x[i - j])
`});var J=r(I,2);g(J,{children:(m,f)=>{var t=gr(),s=x(t);P(s,{children:(c,$)=>{a();var _=hr(),d=r(x(_));o(d,{m:"P(x)"}),a(),e(c,_)}});var i=r(s,2);o(i,{display:!0,m:"P(x) = \\sum_{k=0}^n d_k \\cdot \\prod_{i=0}^{k-1} (x-x_i)"});var p=r(i,2);P(p,{children:(c,$)=>{a();var _=yr(),d=r(x(_));o(d,{m:"\\Theta(n)"}),a(),e(c,_)}}),e(m,t)}});var K=r(J,2);T(K,{code:`function P(real t):
    int result = d[n]

    for int i = n-1; i >= 0; i--:
        result = result * (t - x[i]) + d[i]

    return result`});var L=r(K,2);g(L,{children:(m,f)=>{var t=jr(),s=x(t);P(s,{children:(d,n)=>{a();var v=y("Этот метод хорош тем, что он позволяет добавлять точки.");e(d,v)}});var i=r(s,2);P(i,{children:(d,n)=>{a();var v=ur(),h=r(x(v));o(h,{m:"n+1"});var u=r(h,2);o(u,{m:"(x_0, y_0), (x_1, y_1), \\dotsc, (x_n, y_n)"});var j=r(u,2);o(j,{m:"d_0, d_1, \\dotsc, d_n"});var k=r(j,2);o(k,{m:"P_n(x)"});var b=r(k,2);o(b,{m:"(x_{n+1}, y_{n+1})"}),a(),e(d,v)}});var p=r(i,2);P(p,{children:(d,n)=>{a();var v=y("При добавлении узла нам нужно будет только досчитать разделенную разность");e(d,v)}});var c=r(p,2);o(c,{display:!0,m:"d_{n+1} = y[x_0; x_1; \\dotsc; x_{n+1}]"});var $=r(c,2);P($,{children:(d,n)=>{a();var v=y("и тогда к многочлену просто добавится еще один член, а формула не изменится");e(d,v)}});var _=r($,2);o(_,{display:!0,m:"P_{n+1}(x) = P_n(x) + d_{n+1} \\cdot \\prod_{i=0}^n (x-x_i)"}),e(m,t)}});var N=r(L,2);T(N,{code:`function add_node(int x_new, int y_new):
    x.append(x_new)
    y.append(y_new)
    
    array[real] temp[n+1] = [0.0, ..., 0.0]
    temp[0] = y_new
    for int j = 1; j <= n:
        temp[j] = (temp[j-1] - d[j-1]) / (x_new - self.x[n - j])

    d.append(temp[n])
    n += 1`});var R=r(N,2);g(R,{children:(m,f)=>{P(m,{children:(t,s)=>{a();var i=kr(),p=r(x(i));o(p,{m:"d_k"});var c=r(p,2);o(c,{m:"\\Theta(n)"}),a(),e(t,i)}})}}),e(Q,q)}export{Lr as component};
