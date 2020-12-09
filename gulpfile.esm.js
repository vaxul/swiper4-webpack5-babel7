import del from 'del';
import gulp from 'gulp';
import gulpWebpack from 'webpack-stream';
import path from 'path';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackChunkRename from 'webpack-chunk-rename-plugin';

exports.default = gulp.series(
  function cleanDist() {
    return del('dist/*');
  },
  processJavaScript
);

function processJavaScript() {
  return gulp.src('source/main.js')
    .pipe(plumber())
    .pipe(gulpWebpack({
      devtool: 'source-map',
      entry: [
        // For async import
        'core-js/modules/es.array.iterator.js',
        'core-js/modules/es.promise.js',

        './source/main.js',
      ],
      mode: 'development',
      resolve: {
        modules: [
          path.resolve(__dirname, 'node_modules'),
          'node_modules',
        ],
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
      },
      output: {
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: 'dist/js/',
      },
      optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
      },
      plugins: [
        new webpack.ids.HashedModuleIdsPlugin(),
        new webpackChunkRename({
          initialChunksWithEntry: true,
          vendors: 'vendors.js',
        }),
      ],
    }, webpack))
    .pipe(gulp.dest('dist/js/'));
}
