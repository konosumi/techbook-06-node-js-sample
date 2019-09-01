"use strict";

// CPUのコア数を取得する
const numCPUs = require("os").cpus().length;

// コンソールに出力する
console.log(`${numCPUs} core cpu.`); // eslint-disable-line no-console

