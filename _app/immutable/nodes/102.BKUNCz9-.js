import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{m,n as l,o as t,p as r,q as n,r as P}from"../chunks/vUuJ8Ryo.js";import{T as E}from"../chunks/DqnZMk7a.js";import{P as j}from"../chunks/9ERiZpYr.js";import{M as o}from"../chunks/BLaOouyV.js";import{P as $}from"../chunks/Bmbs4jhX.js";import{H as z}from"../chunks/C4cVQCIn.js";import{C as F}from"../chunks/DgQHwt6I.js";import{C as G}from"../chunks/DYLuZg8q.js";var I=m("Мы решаем задачу сортировки: нам нужно упорядочить ключи <!> по возрастанию относительного какого-то линейного порядка.",1),J=m("Допустим, мы уже отсортировали <!> записей так, что",1),L=m(`Теперь нам нужно вставить следующий ключ <!>.
    Будем сравнивать его по очереди с ключами <!>, пока не обнаружим,
    что его нужно вставить между ключами <!> и <!>.
    Сдвинем все ключи, начиная с <!>, на одну позицию и вставим запись <!> на место <!>.`,1),N=m("<!> <!> <!> <!>",1),Q=m("Количество сравнений в этом алгоритме равно числу инверсий перестановки <!> плюс количество выходных сравнений в цикле <!> &mdash; <!>",1),R=m("<!> <!>",1),S=m(`В алгоритме простых вставок новый <!>-й элемент сравнивался
    в среднем с <!> уже отсортированными элементами по порядку.
    В итоге общее количество сравнений в среднем равно <!>.`,1),U=m(`Итого мы для каждого элемента с номером <!> проводим бинарный поиск
    в подмассиве размера <!> (все, что находится спереди).
    В итоге максимальное количество сравнений`,1),V=m("<!> <!> <!> <!>",1),W=m("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function dr(A){var u=W(),x=l(u);E(x,{title:"Сортировка вставками"});var y=r(x,2);j(y,{children:(v,h)=>{$(v,{children:(e,s)=>{n();var i=I(),c=r(l(i));o(c,{m:"K_1, K_2, \\dotsc, K_n"}),n(),t(e,i)}})}});var q=r(y,2);z(q,{children:(v,h)=>{n();var e=P("Метод простых вставок");t(v,e)}});var b=r(q,2);j(b,{children:(v,h)=>{var e=N(),s=l(e);$(s,{children:(_,p)=>{n();var a=J(),d=r(l(a));o(d,{m:"j-1"}),n(),t(_,a)}});var i=r(s,2);o(i,{display:!0,m:"K_1 \\le K_2 \\le \\dotsb \\le K_{j-2} \\le K_{j-1}"});var c=r(i,2);$(c,{children:(_,p)=>{n();var a=L(),d=r(l(a));o(d,{m:"K_j"});var f=r(d,2);o(f,{m:"K_{j-1}, K_{j-2}, \\dotsc K_1"});var g=r(f,2);o(g,{m:"K_i"});var M=r(g,2);o(M,{m:"K_{i+1}"});var O=r(M,2);o(O,{m:"K_{i+1}"});var T=r(O,2);o(T,{m:"K_j"});var D=r(T,2);o(D,{m:"i+1"}),n(),t(_,a)}});var K=r(c,2);$(K,{children:(_,p)=>{n();var a=P("Другими словами, бы каждый раз берем новый ключ и вставляем его в правильное место.");t(_,a)}}),t(v,e)}});var k=r(b,2);F(k,{code:`function insertion_sort(mutable array a[n]):
    for int j = 1; j < n; j++:
        int i = j - 1
        key = a[j]

        while i >= 0 and a[i] > key:
            a[i+1] = a[i]
            i -= 1

        a[i+1] = key`});var C=r(k,2);j(C,{children:(v,h)=>{var e=R(),s=l(e);$(s,{children:(c,K)=>{n();var _=Q(),p=r(l(_));o(p,{m:"(K_1, K_2, \\dotsc, K_n)"});var a=r(p,2);G(a,{c:"while"});var d=r(a,2);o(d,{m:"n-1"}),t(c,_)}});var i=r(s,2);o(i,{display:!0,m:`\\min = n-1  ,\\quad
          \\ave = (n^2 + 3n - 4) / 4  ,\\quad
          \\max = (n^2 + n - 2) / 2  ,\\quad
          \\dev = \\frac{1}{6}\\sqrt{n \\cdot (n-1) \\cdot (n + 5/2)}
          `}),t(v,e)}});var w=r(C,2);z(w,{children:(v,h)=>{n();var e=P("Бинарные и двухпутевые вставки");t(v,e)}});var H=r(w,2);j(H,{children:(v,h)=>{var e=V(),s=l(e);$(s,{children:(_,p)=>{n();var a=S(),d=r(l(a));o(d,{m:"j"});var f=r(d,2);o(f,{m:"(j-1)/2"});var g=r(f,2);o(g,{m:"\\sum_{j=2}^n (j-1)/2 = (n^2 - n) / 4 = O(n^2)"}),n(),t(_,a)}});var i=r(s,2);$(i,{children:(_,p)=>{n();var a=P(`Можно использовать то, что элементы, в которые мы хотим вставить новый ключ, уже отсортированы.
    Будем искать место вставки с помощью бинарного поиска.
    До конца это проблему не решит, ведь кроме поиска места вставки нужно её произвести.
    Но даже так это неплохой буст к производительности`);t(_,a)}});var c=r(i,2);$(c,{children:(_,p)=>{n();var a=U(),d=r(l(a));o(d,{m:"j+1"});var f=r(d,2);o(f,{m:"j"}),n(),t(_,a)}});var K=r(c,2);o(K,{display:!0,m:"\\sum_{j=1}^n \\lceil \\log_2 j \\rceil = n \\cdot \\lceil \\log_2 n \\rceil - 2^{\\lceil \\log_2 n \\rceil} + 1 = n \\log_2 n - n + O(1)"}),t(v,e)}});var B=r(H,2);j(B,{}),t(A,u)}export{dr as component};
