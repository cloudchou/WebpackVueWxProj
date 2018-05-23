// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-px2rem": {
            baseDpr: 2, // 基于设备的Dpr  
            threeVersion: false, // 是否生成 @1x, @2x and @3x 三个版本(默认: false)，打开后  
            remVersion: true, // 是否生成rem版本(默认: true)  
            remUnit: 14, // rem转换比例 (默认: 75)  
            remPrecision: 5 // rem保留几位数 (默认: 5)  
        }
    }
}
