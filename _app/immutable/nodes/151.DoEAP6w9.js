import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as i,a as v,b as t,s as r,n}from"../chunks/BWp35gWV.js";import{T as D}from"../chunks/CR7k0xtG.js";import{P as l}from"../chunks/B7flgP-x.js";import{C as e}from"../chunks/BmgYHZay.js";import{D as T}from"../chunks/DlTIf4aM.js";import{P as u}from"../chunks/DPzc5wQr.js";var j=i(`<b>Переменная</b> (в императивном программировании) &mdash; именованный или адресуемый участок памяти.
        Имя или адрес используются для доступа к данным, хранящимся в этом участке памяти.
        Сами данные называются значением переменной.
        Свойства этих данных определяются типом переменной.`,1),k=i(`Например, создаем мы переменную <!> (в языке C).
        Где-то в оперативной памяти выделился участок в 4 байта, и в него поместилось значение <!>.
        Доступ к этому значению можно получить по имени <!>, которое теперь закреплено за этим участком
        памяти.`,1),q=i(`Можно по имени явно получить адрес, где хранится значение переменной.
        Такой объект называется <b>указателем</b>.
        В языке C, например, указатель на переменную <!> записывается как <!>.`,1),w=i("<!> <!>",1),y=i("<!> <!> <!>",1);function J(P){var c=y(),$=v(c);D($,{title:"Переменные и имена"});var h=r($,2);T(h,{title:"Переменная",children:(_,b)=>{l(_,{children:(s,d)=>{var p=j();n(),t(s,p)}})}});var g=r(h,2);u(g,{children:(_,b)=>{var s=w(),d=v(s);l(d,{children:(f,C)=>{n();var o=k(),a=r(v(o));e(a,{c:"int a = 1"});var m=r(a,2);e(m,{c:"0x00000001"});var x=r(m,2);e(x,{c:"a"}),n(),t(f,o)}});var p=r(d,2);l(p,{children:(f,C)=>{n();var o=q(),a=r(v(o),3);e(a,{c:"a"});var m=r(a,2);e(m,{c:"*a"}),n(),t(f,o)}}),t(_,s)}}),t(P,c)}export{J as component};
