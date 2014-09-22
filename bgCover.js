
bgCover();

function bgCover(){
    var bgCoverImg;
    var w, h;
    $(document).ready(function(){

        bgCoverImg = $('#bgCover-inner img');
        calculateSize( bgCoverImg );

    });

    $(window).load(function(){
        
        calculateSize( bgCoverImg );

    });

    $(window).resize(function(){

        calculateSize( bgCoverImg );

    });
    function calculateSize(img){
        //Calculates usable width/height and margin 
        //depending on the image's size
        w = bgCoverImg.width();
        h = bgCoverImg.height();
        
        //ratio of h to w 
        var r = h / w;

        //Get ideal width and height (based on window size)
        var wh = $(window).innerHeight();
        var ww = $(window).innerWidth();
        var idealR = wh / ww;

        if ( r < idealR ){
            //greater width
            console.log('greater width');
            //height must be 100%
            img.css('height', '100%');

            var newWidth = w;
            img.css('width', 'auto');

            //reset margin-top
            img.css('margin-top', 0);

        } else {
            //greater height
            console.log('greater height');
            //width must be 100%
            img.css('width', '10%');

            img.css('height', 'auto');

            var newHeight = $('#bgCover-inner img').height();
            var topOffset = ( (newHeight - wh) / 2) * -1;
            img.css('margin-top', topOffset + 'px');
        }
    }
}
