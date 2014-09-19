bgCover
=======

A very light-weight plugin for making background images cover the screen, no matter the window size.


#Requirements

<a href="http://jquery.com/">jQuery</a>


#Instructions

Include bgCover.css and bgCover.js in your head tag after jQuery.

```html
<!-- bgCover resources -->
<link rel="stylesheet" href="bgCover.css" type="text/css">
<script src="bgCover.js" type="text/javascript"></script>
```



Your html document structure should be as follows:

```html
<body>
    <div id="#bgCover-outer">
        <div id="#bgCover-inner">
            <img src="test.png" alt="test" />
        </div>
    </div>
</body>
```


The id's used above are required for the plugin to function.

Thanks for giving it a try!
