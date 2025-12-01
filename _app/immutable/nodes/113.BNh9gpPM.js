import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as c,a as j,b as a,s as r,n as i,t as p}from"../chunks/BWp35gWV.js";import{T as q}from"../chunks/CR7k0xtG.js";import{P as x}from"../chunks/DPzc5wQr.js";import{P as l}from"../chunks/B7flgP-x.js";/* empty css                *//* empty css                */import{S as z}from"../chunks/CBbFRhrb.js";import{C as A}from"../chunks/BvAJckrt.js";import"../chunks/i9XClpbl.js";/* empty css                */import{H as B}from"../chunks/DXKx2xvL.js";import{M as n}from"../chunks/BqyEoRxA.js";/* empty css                *//* empty css                */var E=c(`<b>Расстояние Левенштейна</b> &mdash; метрика на строках, показывающая их схожесть.
    Равна количеству односимвольных операций вставки, удаления и замены символов,
    которые нужно сделать, чтобы превратить одну строку в другую.`,1),F=c(`Пусть есть две строки <!> и <!> с длинами <!> и <!>.
    Тогда расстояние Левенштейна между ними равно <!>, где`,1),G=c("<!> <!> <!> <!> <!>",1),I=c("Рекуррентная формула для <!> преобразуется следующим образом",1),J=c(`При это важно понимать, что если <!>,
    то алгоритмы всегда будут предпочитать одной операции редактирования две операции: удаление и вставку.`,1),K=c("<!> <!> <!> <!> <!> <!>",1),O=c("<!> <!> <!> <!> <!> <!> <!> <!>",1);function dr(H){var P=O(),u=j(P);q(u,{title:"Меры схожести"});var D=r(u,2);x(D,{children:(e,b)=>{l(e,{children:(t,_)=>{i();var s=p(`При нечётком поиске сразу же встает вопрос: как определять схожесть?
    Центральным объектом нечёткого поиска являются строки, а в общем случае элементы метрических пространств.`);a(t,s)}})}});var y=r(D,2);B(y,{children:(e,b)=>{i();var t=p("Расстояние Левенштейна");a(e,t)}});var S=r(y,2);x(S,{children:(e,b)=>{var t=G(),_=j(t);l(_,{children:(v,m)=>{var d=E();i(),a(v,d)}});var s=r(_,2);l(s,{children:(v,m)=>{i();var d=F(),o=r(j(d));n(o,{m:"a"});var h=r(o,2);n(h,{m:"b"});var w=r(h,2);n(w,{m:"n = |a|"});var C=r(w,2);n(C,{m:"m = |b|"});var T=r(C,2);n(T,{m:"\\LD(a, b) = d(n, m)"}),i(),a(v,d)}});var $=r(s,2);n($,{display:!0,m:`d(i, j) = \\cases{
          0 & \\if i = 0 \\land j = 0 \\\\
          i & \\if i > 0 \\land j = 0 \\\\
          j & \\if i = 0 \\land j > 0 \\\\
          \\align{
              \\min \\bigl( & d(i, j-1) + 1, \\\\&
                              d(i-1, j) + 1, \\\\&
                              d(i-1, j-1) + [a_i \\neq b_j] \\bigr)
          } & \\otherwise
          }`});var f=r($,2);l(f,{children:(v,m)=>{i();var d=p("Для расстояния Левенштейна выполнено важное неравенство");a(v,d)}});var g=r(f,2);n(g,{display:!0,m:"\\bigl| |a| - |b| \\bigr| \\le \\LD(a, b) \\le \\max \\bigl( |a|, |b| \\bigr)"}),a(e,t)}});var k=r(S,2);x(k,{children:(e,b)=>{l(e,{children:(t,_)=>{i();var s=p("Для экономии памяти можно хранить только две строки: текущую и предыдущую.");a(t,s)}})}});var M=r(k,2);A(M,{code:`function levenshtein(string a, string b) -> int:
     array[int]

     D(0, 0) = 0
 для всех j от 1 до N
   D(0, j) = D(0, j - 1) + цена вставки символа S2[j]
 для всех i от 1 до M
   D(i, 0) = D(i - 1, 0) + цена удаления символа S1[i]
   для всех j от 1 до N
     D(i, j) = min{
       D(i - 1, j) + цена удаления символа S1[i],
       D(i, j - 1) + цена вставки символа S2[j],
       D(i - 1, j - 1) + цена замены символа S1[i] на символ S2[j]
     }
 вернуть D(M, N)


    if length(a) < length(b):
        a, b = b, a

    int n = length(b)
    array[int] prev[n+1] = [1, 2, 3, ..., n, n+1]

    for int i = 1; i <= n; i++:
        curr = [i] + [0] * len(b)
        for j in range(1, len(b) + 1):
            cost = 0 if a[i-1] == b[j-1] else 1
            curr[j] = min(prev[j] + 1, curr[j-1] + 1, prev[j-1] + cost)
        prev = curr
    return prev[-1]`});var N=r(M,2);z(N,{children:(e,b)=>{i();var t=p("Разная цена операций");a(e,t)}});var L=r(N,2);x(L,{children:(e,b)=>{var t=K(),_=j(t);l(_,{children:(m,d)=>{i();var o=p(`При нечётком поиске некоторые операции редактирования бывают весомее других.
    Расстояние Левенштейна можно модифицировать, и каждой операции приписать свою цену.
    Более того, цена операции может зависеть от самих символов, над которыми производится эта операция.`);a(m,o)}});var s=r(_,2);n(s,{display:!0,m:`\\align{
          \\mathrm{ci}(x) &= \\text{цена вставки символа}~ x \\\\
          \\mathrm{cd}(x) &= \\text{цена удаления символа}~ x \\\\
          \\mathrm{cr}(x, y) &= \\text{цена замены символа}~ x ~\\text{на символ}~ y \\\\
          }`});var $=r(s,2);l($,{children:(m,d)=>{i();var o=I(),h=r(j(o));n(h,{m:"d(i, j)"}),i(),a(m,o)}});var f=r($,2);n(f,{display:!0,m:`d(i, j) = \\cases{
          0 & \\if i = 0 \\land j = 0 \\\\
          \\sum_{k=1}^i \\mathrm{cd}(a_k) & \\if i > 0 \\land j = 0 \\\\
          \\sum_{k=1}^j \\mathrm{ci}(b_k) & \\if i = 0 \\land j > 0 \\\\
          \\align{
              \\min \\bigl( & d(i, j-1) + \\mathrm{ci}(b_j), \\\\&
                              d(i-1, j) + \\mathrm{cd}(a_i), \\\\&
                              d(i-1, j-1) + \\mathrm{cr}(a_i, b_j) \\bigr)
          } & \\otherwise
          }`});var g=r(f,2);l(g,{children:(m,d)=>{i();var o=p("Таким образом, расстояние Левенштейна — минимальная стоимость редактирования строк.");a(m,o)}});var v=r(g,2);l(v,{children:(m,d)=>{i();var o=J(),h=r(j(o));n(h,{m:"\\mathrm{cd}(x) + \\mathrm{ci}(y) \\le \\mathrm{cr}(x, y)"}),i(),a(m,o)}}),a(e,t)}}),a(H,P)}export{dr as component};
