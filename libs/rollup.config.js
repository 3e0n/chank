// import livereload from 'rollup-plugin-livereload';
// import { terser } from 'rollup-plugin-terser';
// import typescript from 'rollup-plugin-typescript2';
// import resolve from 'rollup-plugin-node-resolve';
// import serve from 'rollup-plugin-serve';
// import symlinkDir from 'symlink-dir';
// // import html from 'rollup-plugin-fill-html';

// import path from 'path';
// import fs from 'fs-extra';

// const production = !process.env.ROLLUP_WATCH;

// const distFolderName = 'dist';
// const productionPlugins = [terser()];
// const devPlugins = [
//     livereload(),
//     serve({
//         open: true,
//         port: 4200,
//         contentBase: [path.resolve(__dirname, distFolderName)],
//     }),
// ];
// const buildPlugins = () => (production ? productionPlugins : devPlugins);

// // eslint-disable-next-line @typescript-eslint/no-use-before-define
// export default preRun().then(() => [
//     {
//         input: path.resolve(__dirname, 'index.tsx'),
//         output: {
//             format: 'iife',
//             file: path.resolve(__dirname, distFolderName, 'app.js'),
//             globals: {
//                 react: 'React',
//                 'react-dom': 'ReactDOM',
//             },
//             sourcemap: true,
//         },
//         external: ['react', 'react-dom'],
//         plugins: [
//             typescript({
//                 tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
//             }),
//             resolve(),
//             ...buildPlugins(),
//         ],
//         watch: {
//             clearScreen: true,
//             include: path.resolve(__dirname, 'src/**'),
//         },
//     },
// ]);

// async function preRun() {
//     // await Promise.resolve();
//     if (!production) {
//         const dist = path.resolve(__dirname, distFolderName);
//         fs.removeSync(dist);
//         const distAssets = path.resolve(dist, 'assets');
//         const assets = path.resolve(__dirname, 'assets');
//         // fs.symlinkSync(distAssets, assets);
//         await symlinkDir(assets, distAssets);
//     }
// }
