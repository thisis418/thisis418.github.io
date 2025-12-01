import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as v,a as c,b as a,s as e,n as t,t as i}from"../chunks/BWp35gWV.js";import{T as R}from"../chunks/CR7k0xtG.js";import{P as f}from"../chunks/DPzc5wQr.js";import{P as d}from"../chunks/B7flgP-x.js";import{D as H}from"../chunks/DlTIf4aM.js";import{C as b}from"../chunks/BmgYHZay.js";import{H as T}from"../chunks/DXKx2xvL.js";import{S as q}from"../chunks/CBbFRhrb.js";import{C as V}from"../chunks/BvAJckrt.js";var X=v(`<b>Сериализация</b> &mdash; процесс превращения состояния объекта в битовую
    последовательность. Обратный процесс восстановления данных из битовой
    последовательности называется <b>десериализацией</b>.`,1),w=v(`<b>Маршалинг</b> (marshalling, упорядочивать) &mdash; процесс преобразования
    данных из оперативной памяти в формат, пригодный для хранения или
    передачи.`,1),z=v(`Сериализация и десериализация делаются по правилам, называемыми
        форматом сериализации. Все форматы можно разделить на человекочитаемые
        (JSON, XML, CSV) и человеко<b>не</b>читаемые (pickle, CBOR).`,1),A=v(`Для начала определяется формат сериализации простых типов (чисел,
        строк, <!>/<!>), а затем способ их комбинации в более сложные
        объекты. Обычно более сложные объекты &mdash; это массивы (упорядоченный
        набор элементов) и ассоциативные массивы, ключи которых &mdash; простые
        типы, а значения любые.`,1),E=v(`Некоторые форматы сериализации определяют дополнительные типы: дата,
        время, <!> и так далее.`,1),F=v("<!> <!> <!>",1),G=v("<!> <!>",1),I=v("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function nr(B){var P=I(),g=c(P);R(g,{title:"Сериализация"});var x=e(g,2);f(x,{children:(o,n)=>{d(o,{children:(r,l)=>{t();var s=i(`Очень часто бывает нужно существующий внутри программы объект
        сохранить в файл, передать по сети или отдать другому процессу. Для
        этого нужно превратить этот объект в набор байт, который затем мы
        сможем прочитать и восстановить исходный объект.`);a(r,s)}})}});var u=e(x,2);H(u,{title:"Сериализация",children:(o,n)=>{var r=X();t(3),a(o,r)}});var j=e(u,2);H(j,{title:"Маршалинг",children:(o,n)=>{var r=w();t(),a(o,r)}});var S=e(j,2);f(S,{children:(o,n)=>{var r=F(),l=c(r);d(l,{children:(m,p)=>{t();var _=z();t(2),a(m,_)}});var s=e(l,2);d(s,{children:(m,p)=>{t();var _=A(),h=e(c(_));b(h,{c:"true"});var M=e(h,2);b(M,{c:"false"}),t(),a(m,_)}});var $=e(s,2);d($,{children:(m,p)=>{t();var _=E(),h=e(c(_));b(h,{c:"none"}),t(),a(m,_)}}),a(o,r)}});var C=e(S,2);T(C,{children:(o,n)=>{t();var r=i("Простые типы");a(o,r)}});var O=e(C,2);f(O,{children:(o,n)=>{d(o,{children:(r,l)=>{t();var s=i("Здесь мы разберем общие подходы к сериализации простых типов");a(r,s)}})}});var J=e(O,2);q(J,{children:(o,n)=>{t();var r=i("Числа");a(o,r)}});var N=e(J,2);f(N,{children:(o,n)=>{var r=G(),l=c(r);d(l,{children:($,m)=>{t();var p=i(`Числа, в какой бы системе счисления они не были, остаются числами.
        Для нашей цели передать информацию достаточно представить числа в какой-то одной системе счисления.`);a($,p)}});var s=e(l,2);d(s,{children:($,m)=>{t();var p=i("Самый простой вариант — просто записать число по символам.");a($,p)}}),a(o,r)}});var k=e(N,2);T(k,{children:(o,n)=>{t();var r=i("Человекочитаемые форматы");a(o,r)}});var y=e(k,2);q(y,{children:(o,n)=>{t();var r=i("JSON");a(o,r)}});var D=e(y,2);f(D,{children:(o,n)=>{d(o,{children:(r,l)=>{t();var s=i("JSON (JavaScript Object Notation) — ...");a(r,s)}})}});var L=e(D,2);V(L,{language:"bnf",code:`<json> ::= <primitive> | <container>

<primitive> ::= <number> | <string> | <boolean>
<number> is a valid real number expressed in one of a number of given formats
<string> is a string of valid characters enclosed in quotes
<boolean> ::= true | false | null

<container> ::= <object> | <array>
<array> ::= '[' [ <json> *(', ' <json>) ] ']'
<object> ::= '{' [ <member> *(', ' <member>) ] '}'
<member> ::= <string> ': ' <json>`}),a(B,P)}export{nr as component};
