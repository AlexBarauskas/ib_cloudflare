CloudFlare.define("invitebox",
    [       "invitebox/config", "cloudflare/jquery1.7"],
    function(config,                $)
    {
        function addBadge(count){
            var cdnPath = "//ajax.cloudflare.com/cdn-cgi/nexp/apps/invitebox/";
            var div = $("<div>");
            $("<img>",{
                src: cdnPath + "images/logo-200.png",
                "class": "invitebox"
            }).appendTo(div);
            $("<span>", {"style": "position:relative; top:-20px; left:-50px;")
                .text(count).appendTo(div);
            div.appendTo("body");
        }

  /*      $.getJSON(
            "http://countersback.herokuapp.com/hit?callback=?",
            {domain_id: config && config.domain_id},
            function(data){
                if (this.data.count){
                    addBadge(this.data.count);
                }
            }
        );
   */
    }
);
