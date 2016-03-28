//vi yb/index.js
// var fis = module.exports = require('fis3');
// fis.require.prefixes.unshift('yb');
// fis.cli.name = 'yb';
// fis.cli.info = require('./package.json');

// fis.match('**', {
//   release: !1 // 屏蔽全部产出
// });

// 所有js, css, image 加 hash
const hashFile = ['**.{js,scss,sass}', 'image'];
const imgsType = 'svg,tif,tiff,wbmp,png,bmp,fax,gif,ico,jfif,jpe,jpeg,jpg,woff,cur,webp,swf,ttf,eot,woff2';

hashFile.forEach(function(value) {
    fis.match(value, {
      useHash: true
    });
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
}); 


/*-------------------- 页面资源 --------------------*/
fis.match('/dev/views/(**.html)', {
    release: '/public/views/$1'
});

fis.match('/dev/views/(**.{scss,sass})', {
    parser: fis.plugin('node-sass'),
    optimizer: fis.plugin('clean-css', {}),
    release: '/public/views/$1',
    rExt: '.css',
    isCssLike: true
});

fis.match('/dev/views/(**.{scss,sass})', {
    useSprite: true
});

fis.match('/public/views/**.css', {
  
  useSprite: true
});

fis.match('/dev/views/(**.js)', {
    release: '/public/views/$1'
});

fis.match('/dev/views/(**.{'+imgsType+'})', {
    release: '/public/views/$1'
});


// // 所有图片加 hash
// fis.match('image', {
//   useHash: true
// });



// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.{css}', {
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.{png}', {
//   optimizer: fis.plugin('png-compressor')
// });

// fis.match(['component/*.{vm,js,scss}', 'component/*.{vm,js,scss}'], {
//   isMod: true
// });

// fis.match('::package', {
//   spriter: fis.plugin('csssprites')
// });

//fis3-hook-module
// fis.hook('module', {
//   mode: 'amd' // 模块化支持 amd 规范，适应 require.js
// });