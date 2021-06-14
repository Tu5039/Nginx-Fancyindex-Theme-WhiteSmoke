[English](./README.md)|[简体中文](./README-zh_cn.md)
# Nginx-Fancyindex-Theme-WhiteSmoke
这是一个基于 [Naereen's fancyindex theme(light)](https://GitHub.com/Naereen/Nginx-Fancyindex-Theme)的nginx index主题，搭配了hustcc的动画背景 [canvas-nest.js@1.0.1](https://github.com/hustcc/canvas-nest.js) 。

## 如何设置主题

1. 如果想自定义布局或风格的话，需要修改 ***styles.css***。
1. js脚本文件的引用基本都在 ***footer.html*** 里，修改Script块来选择开启/关闭对应的功能。
    > ***loadmd.js***是将HEADER.md和FOOTER.md加载到页面的脚本，移除对应的Script块可以关闭功能。
    
    > ***canvas-nest.js*** 是加载背景动画的脚本文件，更换背景动画可以直接修改对应Script块里的*src*属性，关闭动画则可以直接移除该Script块。

## 如何启用主题

按以下两个简单地步骤就可以启用这个主题了
1. 首先将主题下载到对应的想要共享的目录下。
    ```bash
    cd $(file directory)
    git clone git@github.com:Tu5039/Nginx-Fancyindex-Theme-WhiteSmoke.git
    ```
1. 修改nginx的设置。假设配置文件在*/etc/nginx/conf.d*，配置文件名为 *files.conf*。
    ```bash
    sudo nano /etc/nginx/conf.d/files.conf
    ```
    原来的配置可能是
    ```ini
    # /etc/nginx/conf.d/files.conf old
    server{
        listen 8889;
        client_max_body_size 4G;
        charset utf-8;
    
        location /{
            autoindex on;
            autoindex_exact_size off;
            root /home/nginx-dev/files/;
        }
        access_log /var/log/nginx/files.log;
    }
    ```
    修改为以下配置：
    ```ini
    # /etc/nginx/conf.d/files.conf new
    server{
        listen 8889;
        client_max_body_size 4G;
        charset utf-8;
    
        location /{
            fancyindex on;
            fancyindex_exact_size off;
            fancyindex_header "/Nginx-Fancyindex-Theme-WhiteSmoke/header.html";
            fancyindex_footer "/Nginx-Fancyindex-Theme-WhiteSmoke/footer.html";
            fancyindex_ignore "Nginx-Fancyindex-Theme*";
            alias /home/nginx-dev/files/;
        }
        access_log /var/log/nginx/files.log;
    }
    ```
配置完成