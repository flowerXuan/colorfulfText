var a_idx = 0;
jQuery(document).ready(function($) {
    $("html").click(function(e) {
        var a = new Array("❤林彦俊❤","❤小橘❤", "❤制霸❤", "❤爱你❤","❤守护你❤", "❤Evan Lin❤",  "❤海狮❤", "❤冷彦俊❤", "❤Pick 他❤","❤火柴棒❤",  "❤可爱❤" ,"❤未来一起走❤", "❤哈哈哈哈 刀❤", "❤陪你制霸❤", "❤暖心❤", "❤FireWalking❤", "❤富翁的狗❤","❤向你靠近❤");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color":   s(),
    });
        function s () {
            return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        }

        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove();
            });
    });
});