// ts代码转义，并能够实时转义
// tsc HelloWorld.ts --strict --alwaysStrict false --watch

// 在命令行运行ts代码
// ts-node HelloWorld.ts
function say(word: string) {
  console.log(word);
}

say("Hello, World");

/** 十进制整数 */
let integer: number = 6;

/** 十进制整数 */
let integer2: number = Number(42);

/** 十进制浮点数 */
let decimal: number = 3.14;

/** 二进制整数 */
let binary: number = 0b1010;

/** 八进制整数 */
let octal: number = 0o744;

/** 十六进制整数 */
let hex: number = 0xf00d;
