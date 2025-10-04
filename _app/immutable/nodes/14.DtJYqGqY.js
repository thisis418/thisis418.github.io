import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{m as p,n as i,o as a,p as o,q as n,r as m}from"../chunks/BEXab77u.js";import{T as z}from"../chunks/CMyx6b9d.js";import{P as $}from"../chunks/M3lTRSDe.js";import{P as e}from"../chunks/C_D4TOu8.js";import{M as d}from"../chunks/BTDwyb5B.js";var B=p("Для решения этого уравнения, то есть для нахождения вектора <!>, нужно обратить матрицу <!>",1),C=p("<!> <!> <!> <!> <!> <!> <!> <!>",1),D=p("Обратить матрицу <!> можно с помощью стандартной формулы",1),E=p("<!> <!> <!> <!>",1);function N(T){var b=E(),f=i(b);z(f,{title:"Метод Гаусса"});var h=o(f,2);$(h,{children:(c,u)=>{e(c,{children:(s,x)=>{n();var r=m(`Некоторые линейные преобразования обратимы, например, поворот на угол или растяжение.
    Другие необратимы, например проекция.`);a(s,r)}})}});var P=o(h,2);$(P,{children:(c,u)=>{var s=C(),x=i(s);e(x,{children:(_,l)=>{n();var t=m("Систему линейных уравнений");a(_,t)}});var r=o(x,2);d(r,{display:!0,m:`\\cases{
          a_{1\\,1} \\cdot x_1 + a_{1\\,2} \\cdot x_2 + \\dotsb + a_{1\\,(n-1)} \\cdot x_{n-1} + a_{1\\,n} \\cdot x_n = b_1 \\\\
          a_{2\\,1} \\cdot x_1 + a_{2\\,2} \\cdot x_2 + \\dotsb + a_{2\\,(n-1)} \\cdot x_{n-1} + a_{2\\,n} \\cdot x_n = b_2 \\\\
          a_{3\\,1} \\cdot x_1 + a_{3\\,2} \\cdot x_2 + \\dotsb + a_{3\\,(n-1)} \\cdot x_{n-1} + a_{3\\,n} \\cdot x_n = b_3 \\\\
          \\cdots \\\\
          a_{n\\,1} \\cdot x_1 + a_{n\\,2} \\cdot x_2 + \\dotsb + a_{n\\,(n-1)} \\cdot x_{n-1} + a_{n\\,n} \\cdot x_n = b_n
          }`});var v=o(r,2);e(v,{children:(_,l)=>{n();var t=m("можно записать как уравнение в матричной форме");a(_,t)}});var g=o(v,2);d(g,{display:!0,m:"A \\cdot x = b"});var q=o(g,2);e(q,{children:(_,l)=>{n();var t=m("Здесь");a(_,t)}});var A=o(q,2);d(A,{display:!0,m:`A = \\pmatrix{
      a_{1\\,1} & a_{1\\,2} & \\cdots & a_{1\\,n} \\\\
      a_{2\\,1} & a_{2\\,2} & \\cdots & a_{2\\,n} \\\\
      \\vdots & \\vdots & \\ddots & \\vdots \\\\
      a_{n\\,1} & a_{n\\,2} & \\cdots & a_{n\\,n} \\\\
      } \\qquad
      b = \\pmatrix{b_1 \\\\ b_2 \\\\ \\vdots \\\\ b_n}
      \\qquad
      x = \\pmatrix{x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n}`});var y=o(A,2);e(y,{children:(_,l)=>{n();var t=B(),M=o(i(t));d(M,{m:"x"});var w=o(M,2);d(w,{m:"A"}),a(_,t)}});var k=o(y,2);d(k,{display:!0,m:"x = A^{-1} \\cdot b"}),a(c,s)}});var j=o(P,2);$(j,{children:(c,u)=>{e(c,{children:(s,x)=>{n();var r=D(),v=o(i(r));d(v,{m:"A"}),n(),a(s,r)}})}}),a(T,b)}export{N as component};
