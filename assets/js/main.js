"use strict";
var App = {
    projects: document.querySelectorAll(".project"),
    init: function t() {
        this.particle(), document.addEventListener("load", this.masonry())
    },
    particle: function t() {
        particlesJS.load("particles", "/assets/js/particle.json", function() {
            console.log("callback - particles.js config loaded")
        }), particlesJS.load("particles2", "/assets/js/particle.json", function() {
            console.log("callback - particles.js config loaded")
        })
    },
    masonry: function t() {
        for (var e = [], o = [], c = null, l = null, n = 0; n < this.projects.length; n++) {
            var i = Math.ceil(this.projects[n].getBoundingClientRect().height);
            c <= l ? (c += i, e.push(this.projects[n])) : (l += i, o.push(this.projects[n]))
        }
        var r = e.concat(o);
        document.querySelector(".portfolio-grid").innerHTML = null;
        for (var s = 0; s < r.length; s++) document.querySelector(".portfolio-grid").appendChild(r[s])
    }
};
App.init();