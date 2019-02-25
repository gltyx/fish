var lights = {
    lights: true,

    toggle(set) {
        if (this.lights != set) {
            let on = false;
            let name = "dark";
            if (set != null && set) {
                on = true;
                name = "light";
            } else {
                name = this.lights ? "dark" : "light";
                on = !this.lights;
            }

            $("#lights_" + (!on ? "on" : "off"))
                .addClass("link")
                .click(function() {
                    lights.toggle(on);
                });
            $("#lights_" + (on ? "on" : "off"))
                .removeClass("link")
                .off("click");

            $("#page_style")
                .attr("href", "css/" + name + ".css");
            $("#lights")
                .text((this.lights ? "开" : "关") + "灯");
                
            this.lights = on;

            settings.save_settings();
        }
    }
}