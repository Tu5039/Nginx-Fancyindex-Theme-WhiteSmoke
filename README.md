# Nginx-Fancyindex-Theme-WhiteSmoke
A theme is based on [Naereen's fancyindex theme(light)](https://GitHub.com/Naereen/Nginx-Fancyindex-Theme), equiped with [canvas-nest.js@1.0.1](https://github.com/hustcc/canvas-nest.js) developed by hustcc. 

## how to config the theme

1. Edit ***styles.css*** if you want to change your site's style, like set background-image or change the color of the site.
1. Edit Script tags in ***footer.html*** so you can choose which js file would be load when the site is opened or set its property. 
   >    Delete tag Script appointed to ***loadmd.js*** if you needn't description on the header and footer of page.
        Delete tag Script appointed to ***canvas-nest.js*** if you don't like this canvas; To change to another canvas, just put the new js file into the same directory and edit the Script tag in ***footer.html***.

## how to enable the theme in Nginx Directory.

It's very simple to enable this theme following the steps below.
1. Download the theme to the diretory you want to share. 
    ```bash
    cd $(file directory)
    git clone git@github.com:Tu5039/Nginx-Fancyindex-Theme-WhiteSmoke.git
    ```
1. Edit your nginx server. For example, if the configure file locates on */etc/nginx/conf.d*, named *files.conf*.
    ```bash
    sudo nano /etc/nginx/conf.d/files.conf
    ```
    Your config file might be
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
    Replace autoindex with fancyindex and add ***hearder.html*** and ***footer.html*** like this.
    ```ini
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