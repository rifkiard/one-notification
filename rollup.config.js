import fs from "fs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

if (fs.existsSync("./dist")) {
    fs.rmSync("./dist", { recursive: true, force: true });
}

const generalRollupPlugins = [typescript(), terser()];

export default [
    {
        input: "./src/scripts/one-notification.ts",
        output: {
            file: "./dist/one-notification.min.js",
            format: "iife",
            name: "oneNotification",
            sourcemap: true,
        },
        plugins: [...generalRollupPlugins],
    },
    {
        input: "./src/scripts/index.ts",
        output: {
            file: "./dist/one-notification.esm.min.js",
            format: "esm",
            name: "oneNotification",
            sourcemap: true,
        },
        plugins: [
            ...generalRollupPlugins,
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                        preset: "default",
                    }),
                ],
                inject: false,
                extract: "one-notification.min.css",
            }),
        ],
    },
    {
        input: "./src/scripts/index.ts",
        output: {
            file: "./dist/one-notification.umd.min.js",
            format: "umd",
            name: "oneNotification",
            sourcemap: true,
        },
        plugins: [
            ...generalRollupPlugins,
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                        preset: "default",
                    }),
                ],
                inject: false,
                extract: "one-notification.min.css",
            }),
        ],
    },
    {
        input: "./src/scripts/index.ts",
        output: {
            file: "./dist/one-notification.cjs.min.js",
            format: "cjs",
            name: "oneNotification",
            sourcemap: true,
        },
        plugins: [
            ...generalRollupPlugins,
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                        preset: "default",
                    }),
                ],
                inject: false,
                extract: "one-notification.min.css",
            }),
        ],
    },
];
