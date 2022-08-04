hexo.extend.tag.register('imagediff', function (args, content) {
    let iframes = `<div class="imagediff-box" style="overflow-y:auto;">\n`;
    iframes = '<!-- 可以进行左右对比 -->';
    iframes = '<script  defer  src="Include/Javascript/jquery-3.4.0.min.js" type="text/javascript"></script>';
    iframes = '<script  defer  src="Include/Javascript/udn.js" type="text/javascript"></script>';
    iframes = '<script  defer  src="Include/Javascript/udn_extras.js" type="text/javascript"></script>';
    iframes = '<script  defer  src="Include/Javascript/jquery.twentytwenty.js" type="text/javascript"></script>';
    iframes = '<!-- 让鼠标可以左右滑动 -->';
    iframes = '<script  defer  src="Include/Javascript/jquery.event.move.js" type="text/javascript"></script>';
    iframes = '<!-- 放图，否则显示加载不出来图片 -->';
    iframes = '<script  defer  src="Include/Javascript/lazysizes.min.js" type="text/javascript"></script>';
    iframes = '<script >';
    iframes = 'var preview = false;';
    iframes = '// 显示图片对比文字';
    iframes = 'var udnCSS = \'Include/CSS/udn_public.css\';';
    iframes = '// 左右对比'
    iframes = 'var twentytwentyCSS = \'Include/CSS/twentytwenty.css\';';
    iframes = '</script>';

    content.split("\n").map((author_arg,i)=>{
        if(author_arg === "")
            return;
        const argsObj = {}
        let author_args = author_arg.split(',');
        // console.log(author_args)
        author_args.forEach((arg)=>{
            let currentTag = arg.split(':');
            let TagName = currentTag[0]
            let TagValue = "";
            for(var index=1;index<currentTag.length;index++)
            {
                if(!(TagValue === ""))
                TagValue+=":";
                TagValue += currentTag[index];
            }
            argsObj[TagName] = TagValue;
        });
        var LeftName = argsObj.LeftName === undefined ? "" : argsObj.LeftName;
        var LeftImage = argsObj.LeftImage === undefined ? "" : argsObj.LeftImage;
        var RightName = argsObj.RightName === undefined ? "" : argsObj.RightName;
        var RightImage = argsObj.RightImage === undefined ? "" : argsObj.RightImage;
        
        iframes += '<div class="comparison_slider">';
        iframes += '<div class="first">';
        iframes += '<p><picture><img class="lazyload" alt="${LeftName}" data-src="${LeftImage}" /></picture></p>';
        iframes += '<div class="overlay-first "></div>';
        iframes += '</div>';
        iframes += '<div class="last">';
        iframes += '<p><picture><img class="lazyload" alt="${RightName}" data-src="${RightImage}" /></picture></p>';
        iframes += '<div class="overlay-last "></div>';
        iframes += '</div>';
        iframes += '</div>';

    });
    iframes +=`</div>\n`;
    return iframes;
}, { ends: true });
