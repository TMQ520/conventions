# no-misleading-character-class

禁止误导的字符类

### 为什么

在正则表达式中，字符类（`[]`）只能匹配一个字符。但是有些unicode字符同时包含了两个字符点位,比如表情字符还有带声调的拼音,这种就很误导人了。

### 建议

在字符类中不要用两个点位的字符

### 错误示例

```js
const foo = /^[👶🏻]$/u;
```

### 正确示例

```js
const foo = /abc/;
```

### 参考

- [no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)