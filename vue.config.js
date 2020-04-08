// const path = require("path");
// const UglifyPlugin = require("uglifyjs-webpack-plugin");
// module.exports = {
//   // 基本路径
//   /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
//   /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
//   publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
//   // 输出文件目录
//   outputDir: "dist",
//   // eslint-loader 是否在保存的时候检查
//   lintOnSave: false,
//   // use the full build with in-browser compiler?
//   // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
//   //   compiler: false,
//   runtimeCompiler: false, //关键点在这
//   // 调整内部的 webpack 配置。
//   // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
//   // webpack配置
//   // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
//   chainWebpack: () => {
//   },
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === "production") {
//       // 为生产环境修改配置...
//       config.mode = "production";
//       // 将每个依赖包打包成单独的js文件
//       var optimization = {
//         runtimeChunk: "single",
//         splitChunks: {
//           chunks: "all",
//           maxInitialRequests: Infinity,
//           minSize: 20000, // 依赖包超过20000bit将被单独打包
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name (module) {
//                 // get the name. E.g. node_modules/packageName/not/this/part.js
//                 // or node_modules/packageName
//                 const packageName = module.context.match(
//                   /[\\/]node_modules[\\/](.*?)([\\/]|$)/
//                 )[1];
//                 // npm package names are URL-safe, but some servers don't like @ symbols
//                 return `npm.${packageName.replace("@", "")}`;
//               }
//             }
//           }
//         },
//         minimizer: [
//           new UglifyPlugin({
//             uglifyOptions: {
//               compress: {
//                 warnings: false,
//                 drop_console: true, // console
//                 drop_debugger: false,
//                 pure_funcs: ["console.log"] // 移除console
//               }
//             }
//           })
//         ]
//       };
//       Object.assign(config, {
//         optimization
//       });
//     } else {
//       // 为开发环境修改配置...
//       config.mode = "development";
//       var optimization2 = {
//         runtimeChunk: "single",
//         splitChunks: {
//           chunks: "all",
//           maxInitialRequests: Infinity,
//           minSize: 20000, // 依赖包超过20000bit将被单独打包
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name (module) {
//                 // get the name. E.g. node_modules/packageName/not/this/part.js
//                 // or node_modules/packageName
//                 const packageName = module.context.match(
//                   /[\\/]node_modules[\\/](.*?)([\\/]|$)/
//                 )[1];
//                 // npm package names are URL-safe, but some servers don't like @ symbols
//                 return `npm.${packageName.replace("@", "")}`;
//               }
//             }
//           }
//         }
//       };
//     }
//     Object.assign(config, {
//       // 开发生产共同配置
//
//       // externals: {
//       //   'vue': 'Vue',
//       //   'element-ui': 'ELEMENT',
//       //   'vue-router': 'VueRouter',
//       //   'vuex': 'Vuex'
//       // } // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(用于csdn引入)
//       resolve: {
//         extensions: [".js", ".vue", ".json"], //文件优先解析后缀名顺序
//         alias: {
//           "@": path.resolve(__dirname, "./src"),
//           "@c": path.resolve(__dirname, "./src/components"),
//           "@v": path.resolve(__dirname, "./src/views"),
//           "@u": path.resolve(__dirname, "./src/utils"),
//           "@s": path.resolve(__dirname, "./src/service")
//         }, // 别名配置
//         plugins: []
//       },
//       optimization: optimization2
//     });
//   },
//   // vue-loader 配置项
//   // https://vue-loader.vuejs.org/en/options.html
//   // vueLoader: {},
//   // 生产环境是否生成 sourceMap 文件
//   productionSourceMap: false,
//   // css相关配置
//   css: {
//     // 是否使用css分离插件 ExtractTextPlugin
//     // extract: true, //注释css热更新生效
//     // 开启 CSS source maps?
//     sourceMap: false,
//     // css预设器配置项
//     loaderOptions: {},
//     // 启用 CSS modules for all css / pre-processor files.
//     modules: false
//   },
//   // use thread-loader for babel & TS in production build
//   // enabled by default if the machine has more than 1 cores
//   parallel: require("os").cpus().length > 1,
//   // 是否启用dll
//   // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
//   // dll: false,
//   // PWA 插件相关配置
//   // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//   pwa: {},
//   // webpack-dev-server 相关配置
//   devServer: {
//     /* 自动打开浏览器 */
//     open: true,
//     host: "0,0,0,0",
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     /* 使用代理 */
//     proxy: {
//       // "/api": {
//       //   /* 目标代理服务器地址 */
//       //   // target: "http://192.168.0.106:8080/",
//       //   target: "http://192.168.1.126:8080/", //阳洋
//       //   /* 允许跨域 */
//       //   changeOrigin: true,
//       //   ws: true,
//       //   pathRewrite: {
//       //     "^/api": ""
//       //   }
//       // }
//     },
//     before: () => {
//     }
//   },
//   // 第三方插件配置
//   pluginOptions: {}
// }

// 打包去掉console
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
// 查阅 https://github.com/vuejs/vue-cli/tree/dev/docs/zh/config
// 项目部署的基础路径,我们默认假设你的应用将会部署在域名的根部，比如 https://www.my-app.com/
  publicPath: './',
// 输出文件目录
  outputDir: 'dist', //Default: 'dist'
// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: './assets', //Default: ''
// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html', //Default: 'index.html'
  filenameHashing: true, //Default: true
// 是否在保存的时候使用 eslint-loader 进行检查。
// 有效的值：true | false | "error"设置为 "error" 时，检查出的错误会触发编译失败。
  lintOnSave: false, //Default: true
// 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler: true, //Default: false
//默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [ /* string or RegExp */ ], //Default: []
// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false, //Default: true
// 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: '', //Default: undefined
// 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false, //Default: false
// 对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
// 修改它的选项...
        return options
      })
  },
// 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
// 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。Type: Object | Function
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
// 为生产环境修改配置...
      return {
// 打包去掉console 必须引入TerserPlugin
        optimization: {
          minimizer: [new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })]
        },
// 关闭 webpack 的性能提示
        performance: {
          hints: false
        }
      }
    } else {
// 为开发环境修改配置...
      return  {
// 打包去掉console 必须引入TerserPlugin
        optimization: {
          minimizer: [new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })]
        },
// 关闭 webpack 的性能提示
        performance: {
          hints: false
        }
      }
    }
  },
// / 构建多页时使用Default: undefined
  pages: undefined,
// CSS 相关选项
  css: {
// 项目package.json查看@vue/cli-service版本号进行配置
// v3用modules v4用requireModuleExtension
    modules:false,
// https://github.com/vuejs/vue-cli/blob/dev/docs/zh/guide/css.md#css-modules
// 如果你想去掉文件名中的 .module，可以设置 vue.config.js 中的 css.requireModuleExtension 为 false
// requireModuleExtension: false,
// 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    extract: true, //Default: 生产环境下是 true，开发环境下是 false
// 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap: false,
//向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {}, //Default: {}
// 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
  },
// 配置 webpack-dev-server。
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: true,
    proxy: null // 设置代理 string | Object
// proxy: {
// "/api": {
// // 目标:指向网络地址
// target: "https://api.douban.com",
// // webpack属性，映射一个host
// changeOrigin: true,
// pathRewrite: {
// "/api": ""
// }
// }
// },
  },
// 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1, //Default: require('os').cpus().length > 1
// PWA插件传递选项。
// 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {
// 配置页面icon 默认值
// iconPaths: {
// favicon32: 'img/icons/favicon-32x32.png',
// favicon16: 'img/icons/favicon-16x16.png',
// appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
// maskIcon: 'img/icons/safari-pinned-tab.svg',
// msTileImage: 'img/icons/msapplication-icon-144x144.png'
// }
  },
// 三方插件的选项
  pluginOptions: {
// ...
  }
}
