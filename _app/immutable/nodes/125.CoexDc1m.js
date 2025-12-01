import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{f as $,a as m,b as n,s as r,n as t,t as _}from"../chunks/BWp35gWV.js";import{T as K}from"../chunks/CR7k0xtG.js";import{P as f}from"../chunks/DPzc5wQr.js";import{P as l}from"../chunks/B7flgP-x.js";import{S as L}from"../chunks/LIUKG8Hf.js";import{S as x}from"../chunks/CBbFRhrb.js";import{C as w}from"../chunks/BvAJckrt.js";import{C as P}from"../chunks/BmgYHZay.js";/* empty css                */import{M as u}from"../chunks/BqyEoRxA.js";var N=$("<!> <!> <!>",1),Q=$(`<b>Строп</b> (rope) &mdash; структура данных для работы с большими строками, обеспечивающая эффективные
        операции конкатенации, вставки, удаления и индексации.`,1),R=$("<!> <!>",1),U=$(`В терминальном узле будем хранить саму подстроку <!>.
        Во внутреннем узле мы храним дочерние узлы <!> и <!>.
        Для каждого узла будем ещё хранить полную длину левого поддерева, называемую весом.
        Эта информация нужна для реализации индексации.`,1),V=$(`Ну и для оптимизации можно в каждом узле в поле <!> хранить
        полную длину дерева с корнем в этом узле.`,1),W=$(`Можно реализовывать две структуры: одна для терминального узла, другая для внутреннего.
        А можно реализовать одну общую структуру.
        Критерием терминальности узла будет просто отсутствующее значение у <!>.`,1),X=$("<!> <!> <!> <!>",1),Y=$(`У нас получается инвариант <!> и <!>.
        При этом для терминальной вершины <!> имеем <!>,
        что логично, ведь у терминальной вершины нет поддеревьев.`,1),Z=$("Временная сложность такой операции, очевидно, <!>.",1),rr=$("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function hr(H){var b=rr(),C=m(b);K(C,{title:"Строп"});var S=r(C,2);f(S,{children:(e,p)=>{var o=N(),v=m(o);l(v,{children:(i,d)=>{t();var h=_(`Представим текстовый редактор.
        Задача текстового редактора — хранить текст в памяти, отображать его,
        и, самое главное, позволять редактировать текст.`);n(i,h)}});var a=r(v,2);l(a,{children:(i,d)=>{t();var h=_(`Можно, конечно, использовать наивный подход к хранению текста в памяти просто в виде последовательности байт.
        При добавлении одного символа куда-то в начало нам придется сдвигать в памяти почти весь текст.
        А ведь сам текст может быть огромным, например какая-нибудь книга типа «Война и мир».`);n(i,h)}});var s=r(a,2);l(s,{children:(i,d)=>{t();var h=_(`Еще у нас есть операции удаления символов (наборов символов), замены символов и, иногда, поиска.
        В общем заключаем, что для эффективной работы с большими текстами наивного подхода недостаточно.`);n(i,h)}}),n(e,o)}});var M=r(S,2);L(M,{title:"Строп",children:(e,p)=>{var o=R(),v=m(o);l(v,{children:(s,i)=>{var d=Q();t(),n(s,d)}});var a=r(v,2);l(a,{children:(s,i)=>{t();var d=_(`Основная идея — представление строки в виде бинарного дерева,
        где листья содержат фрагменты строки, а внутренние узлы хранят метаданные для связи и балансировки.`);n(s,d)}}),n(e,o)}});var T=r(M,2);x(T,{children:(e,p)=>{t();var o=_("Структура узлов");n(e,o)}});var k=r(T,2);f(k,{children:(e,p)=>{var o=X(),v=m(o);l(v,{children:(d,h)=>{t();var c=_("Как я уже упомянул в основной идее, нам нужно два типа узлов: терминальный и внутренний.");n(d,c)}});var a=r(v,2);l(a,{children:(d,h)=>{t();var c=U(),g=r(m(c));P(g,{c:"string value"});var G=r(g,2);P(G,{c:"left"});var J=r(G,2);P(J,{c:"right"}),t(),n(d,c)}});var s=r(a,2);l(s,{children:(d,h)=>{t();var c=V(),g=r(m(c));P(g,{c:"int length"}),t(),n(d,c)}});var i=r(s,2);l(i,{children:(d,h)=>{t();var c=W(),g=r(m(c));P(g,{c:"value"}),t(),n(d,c)}}),n(e,o)}});var O=r(k,2);w(O,{code:`struct node:
    node left
    node right

    string value
    int weight
    int length`});var j=r(O,2);f(j,{children:(e,p)=>{l(e,{children:(o,v)=>{t();var a=Y(),s=r(m(a));u(s,{m:"\\code{v.weight} = \\code{v.left.length}"});var i=r(s,2);u(i,{m:"\\code{v.length} = \\code{v.left.length} + \\code{v.right.length}"});var d=r(i,2);P(d,{c:"t"});var h=r(d,2);u(h,{m:"\\code{t.weight} = 0"}),t(),n(o,a)}})}});var q=r(j,2);x(q,{children:(e,p)=>{t();var o=_("Индексация");n(e,o)}});var y=r(q,2);f(y,{children:(e,p)=>{l(e,{children:(o,v)=>{t();var a=_("Базовая операция, индексация, — получение символа по его индексу.");n(o,a)}})}});var z=r(y,2);w(z,{code:`function get_char(node rope, int i) -> char:
    if rope.value is not none:  # если это терминальный узел
        return rope.value[i]

    if i < rope.weight:
        return get_char(rope.left, i)
    else:
        return get_char(rope.right, i - rope.weight)`});var A=r(z,2);x(A,{children:(e,p)=>{t();var o=_("Вставка и удаление");n(e,o)}});var B=r(A,2);x(B,{children:(e,p)=>{t();var o=_("Конкатенация и разделение");n(e,o)}});var D=r(B,2);f(D,{children:(e,p)=>{l(e,{children:(o,v)=>{t();var a=_("Для конкатенации двух стропов достаточно просто создать новый узел и прицепить к нему оба стропа.");n(o,a)}})}});var E=r(D,2);w(E,{code:`function concat(node s1, node s2) -> node:
    rope = new node()
    rope.left = s1
    rope.right = s2
    rope.weight = s1.length
    rope.length = s1.length + s2.length

    return rope`});var F=r(E,2);f(F,{children:(e,p)=>{l(e,{children:(o,v)=>{t();var a=Z(),s=r(m(a));u(s,{m:"O(1)"}),t(),n(o,a)}})}});var I=r(F,2);x(I,{children:(e,p)=>{t();var o=_("Получение среза");n(e,o)}}),n(H,b)}export{hr as component};
