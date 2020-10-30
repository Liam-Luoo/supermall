module.exports = {
  configureWebpack: {
    //解决路径相关的一些问题
    resolve: {
      // extensions:[] 配置这个一些文件的后缀名就可以不写了  默认有配置 vue js json
      alias: {
        // '@': 'src' 内部默认已经配置过的别名 对应就是src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
