import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{m as i,n as v,o as t,p as r,q as n}from"../chunks/vUuJ8Ryo.js";import{T as D}from"../chunks/DqnZMk7a.js";import{P as f}from"../chunks/Bmbs4jhX.js";import{C as e}from"../chunks/DYLuZg8q.js";import{D as T}from"../chunks/CWwBPb0q.js";import{P as q}from"../chunks/9ERiZpYr.js";var u=i(`<b>Переменная</b> (в императивном программировании) &mdash; именованный или адресуемый участок памяти.
        Имя или адрес используются для доступа к данным, хранящимся в этом участке памяти.
        Сами данные называются значением переменной.
        Свойства этих данных определяются типом переменной.`,1),j=i(`Например, создаем мы переменную <!> (в языке C).
        Где-то в оперативной памяти выделился участок в 4 байта, и в него поместилось значение <!>.
        Доступ к этому значению можно получить по имени <!>, которое теперь закреплено за этим участком
        памяти.`,1),k=i(`Можно по имени явно получить адрес, где хранится значение переменной.
        Такой объект называется <b>указателем</b>.
        В языке C, например, указатель на переменную <!> записывается как <!>.`,1),w=i("<!> <!>",1),y=i("<!> <!> <!>",1);function J(P){var c=y(),$=v(c);D($,{title:"Переменные и имена"});var h=r($,2);T(h,{title:"Переменная",children:(_,b)=>{f(_,{children:(m,d)=>{var p=u();n(),t(m,p)}})}});var g=r(h,2);q(g,{children:(_,b)=>{var m=w(),d=v(m);f(d,{children:(l,C)=>{n();var o=j(),a=r(v(o));e(a,{c:"int a = 1"});var s=r(a,2);e(s,{c:"0x00000001"});var x=r(s,2);e(x,{c:"a"}),n(),t(l,o)}});var p=r(d,2);f(p,{children:(l,C)=>{n();var o=k(),a=r(v(o),3);e(a,{c:"a"});var s=r(a,2);e(s,{c:"*a"}),n(),t(l,o)}}),t(_,m)}}),t(P,c)}export{J as component};
