// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import typescript from 'rollup-plugin-typescript2';
import strip from '@rollup/plugin-strip';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        exports: 'named',
        preserveModules: true, // 保留模块结构
        preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
        format: 'es' // format: 'cjs' // format: 'es'
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        external({
            deps: true
        }),
        postcss({
            extensions: ['.css'],
            plugins: [autoprefixer(), cssnano()],
            extract: 'css/style.css',
        }),
        strip({
            include: '**/*.ts',
            functions: ['console.log', 'assert.*', 'debug', 'alert'],
            sourceMap: false,
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
    ],
    external: ["vue"]
};