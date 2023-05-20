const scale = 40000;
let zoomlevel = 4;
let originX = 40000;
let originY = 40000;

import { points } from "./points.js"
import { labels } from "./labels.js"
import { bases } from "./bases.js"


// TODO: 1. Fix zoom bugs; 2. Add text popup on click; 3. Add colour to terriotories;
// 4. Add search; 5. Add systems; 6. Add gamma and delta quadrants; 7. Add orientation of text;
// 8. 

let ox = document.querySelector("#originX");
let oy = document.querySelector("#originY");
let ex = document.querySelector("#ex");
let ey = document.querySelector("#ey");
let qx = document.querySelector("#qx");
let qy = document.querySelector("#qy");
let bx = document.querySelector("#bx");
let by = document.querySelector("#by");
let mx = document.querySelector("#mx");
let my = document.querySelector("#my");
let z = document.querySelector("#zoom");

function rescaleRadius(rad, zoom) {
    return rad + (rad) * zoom * 4 * (zoomlevel / 10);
}

function addPoints() {
    let map = $('#map-content');
    map.empty();
    // let colors = points.map(p => p.color);
    // colors.forEach(c =>{
    //     points.forEach(p => {
    //         if(p.color == color){
    //             let region = $('<div>', {class: 'region' });
    //         }
    //     })
    // })
    console.log(points.length);

    points.forEach(p => {
        let circle = $('<div>', { class: 'circle' });
        circle.css({
            left: scale + (zoomlevel / 10) * p.coordinates[0] - p.radius / 2,
            top: scale + (-1) * (zoomlevel / 10) * p.coordinates[1] - p.radius / 2,
            position: "relative",
            // background: "radial-gradient(circle at center, "+p.color+" 0, black)",
            background: p.color,
            width: (p.radius / 2) * 2 + "px",
            height: (p.radius / 2) * 2 + "px",
        });

        p.newRadius = p.radius / 2;
        map.append(circle);

    })

    points.forEach(p => {

        let point = $('<div>', { id: 'point', class: 'map-point' });
        point.css({
            left: scale + (zoomlevel / 10) * p.coordinates[0],
            top: scale + (-1) * (zoomlevel / 10) * p.coordinates[1],
            color: "white",
            width: 4 * (1 / p.priority) + "px",
            height: 4 * (1 / p.priority) + "px",
            borderRadius: "50%",
            backgroundColor: "white",
            position: "relative"
        });

        // Create the point text element
        let pointText = $('<div>', { id: p.name, class: 'map-point-text' });
        pointText.text(p.name);
        pointText.css({
            left: scale + (zoomlevel / 10) * p.coordinates[0],
            top: scale + (-1) * (zoomlevel / 10) * p.coordinates[1],
            color: "white",
            position: "relative",
            fontSize: ((-4) * p.priority + 18) + "px"
        });
        pointText.click(function () { tooltip(p.name, p.text); });
        pointText.mouseout(function () { disableTooltip(p.name); });

        p.map[0] = scale + (zoomlevel / 10) * p.coordinates[0];
        p.map[1] = scale + (-1) * (zoomlevel / 10) * p.coordinates[1];



        // Append the point and text to the map
        if (p.priority == 1 || (p.priority == 2 && zoomlevel > 9)) {

            map.append(point);
            map.append(pointText);
        }
    })

    labels.forEach(l => {
        l.map[0] = scale + (zoomlevel / 10) * l.coordinates[0];
        l.map[1] = scale + (-1) * (zoomlevel / 10) * l.coordinates[1];
    });
    bases.forEach(l => {
        l.map[0] = scale + (zoomlevel / 10) * l.coordinates[0];
        l.map[1] = scale + (-1) * (zoomlevel / 10) * l.coordinates[1];
    });


    let lineA = $('<div>', { class: 'linea' });
    let lineB = $('<div>', { class: 'lineb' });
    let sqr = $('<div>', { id: 'square' });
    sqr.css({ left: points[0].map[0] - 200 + "px", top: points[0].map[1] - 200 + "px", width: "400px", height: "400px" });
    map.append(lineA);
    map.append(lineB);
    // map.append(sqr);

}

function rescale(zoom) {
    let map = $('#map-content');
    map.empty();
    points.forEach(p => {
        let circle = $('<div>', { class: 'circle' });
        circle.css({
            left: p.map[0] + (p.map[0] - originX) * zoom * 4 * (zoomlevel / 10) - rescaleRadius(p.newRadius, zoom),
            top: p.map[1] + (p.map[1] - originY) * zoom * 4 * (zoomlevel / 10) - rescaleRadius(p.newRadius, zoom),
            position: "relative",
            background: p.color,
            // background: "radial-gradient(circle at center, "+p.color+" 0, black)",
            width: rescaleRadius(p.newRadius, zoom) * 2 + "px",
            height: rescaleRadius(p.newRadius, zoom) * 2 + "px",
        });
        p.newRadius = rescaleRadius(p.newRadius, zoom);
        map.append(circle);
    })

    points.forEach(p => {

        let point = $('<div>', { id: 'point', class: 'map-point' });
        point.css({
            left: p.map[0] + (p.map[0] - originX) * zoom * 4 * (zoomlevel / 10),
            top: p.map[1] + (p.map[1] - originY) * zoom * 4 * (zoomlevel / 10),
            color: "white",
            width: 4 * (1 / p.priority) + "px",
            height: 4 * (1 / p.priority) + "px",
            borderRadius: "50%",
            backgroundColor: "white",
            position: "relative"
        });

        // Create the point text element
        let pointText = $('<div>', { id: p.name, class: 'map-point-text' });
        pointText.text(p.name);
        pointText.css({
            left: p.map[0] + (p.map[0] - originX) * zoom * 4 * (zoomlevel / 10),
            top: p.map[1] + (p.map[1] - originY) * zoom * 4 * (zoomlevel / 10),
            color: "white",
            position: "relative",
            fontSize: ((-4) * p.priority + 18) + "px"
        });

        pointText.click(function () { tooltip(p.name, p.text); });
        pointText.mouseout(function () { disableTooltip(p.name); });

        p.map[0] = p.map[0] + (p.map[0] - originX) * zoom * 4 * (zoomlevel / 10);
        p.map[1] = p.map[1] + (p.map[1] - originY) * zoom * 4 * (zoomlevel / 10);

        if (p.priority == 1 || (p.priority == 2 && zoomlevel > 9)) { //Append the point and text to the map

            map.append(point);
            map.append(pointText);
        }


    });

    labels.forEach(l => {
        let pointText = $('<div>', { id: 'point-text', class: 'map-point-text' });
        pointText.text(l.text);
        pointText.css({
            left: l.map[0] + (l.map[0] - originX) * zoom * 4 * (zoomlevel / 10),
            top: l.map[1] + (l.map[1] - originY) * zoom * 4 * (zoomlevel / 10),
            color: "white",
            position: "relative",
            fontSize: ((-4) * 1 + 18) + "px"
        });

        l.map[0] = l.map[0] + (l.map[0] - originX) * zoom * 4 * (zoomlevel / 10);
        l.map[1] = l.map[1] + (l.map[1] - originY) * zoom * 4 * (zoomlevel / 10);

        if (zoomlevel > 9) {
            map.append(pointText);
        }
    });

    bases.forEach(l => {
        let point = $('<div>', { id: 'point', class: 'triangle' });
        point.css({
            left: l.map[0] + (l.map[0] - originX) * zoom * 4 * (zoomlevel / 10),
            top: l.map[1] + (l.map[1] - originY) * zoom * 4 * (zoomlevel / 10),
            position: "relative"
        });

        let pointText = $('<div>', { id: 'point-text', class: 'map-point-text' });
        pointText.text(l.text);
        pointText.css({
            left: l.map[0] + (l.map[0] - originX) * zoom * 4 * (zoomlevel / 10),
            top: l.map[1] + (l.map[1] - originY) * zoom * 4 * (zoomlevel / 10) - 8,
            color: "white",
            position: "relative",
            fontSize: ((-4) * 1 + 12) + "px"
        });

        l.map[0] = l.map[0] + (l.map[0] - originX) * zoom * 4 * (zoomlevel / 10);
        l.map[1] = l.map[1] + (l.map[1] - originY) * zoom * 4 * (zoomlevel / 10);

        if (zoomlevel > 9) {
            map.append(point);
            map.append(pointText);
        }
    })

    let lineA = $('<div>', { class: 'linea' });
    lineA.css({ left: 0, top: points[0].map[1] });
    // let lineAA = $('<div>', { class: 'linea' });
    // let lineAAA = $('<div>', { class: 'linea' });
    // lineAA.css({ left: 0, top: points[0].map[1] - rescaleRadius((points[0].map[0] - points[1].map[0])*100, zoom) });
    // lineAAA.css({ left: 0, top: points[0].map[1] + rescaleRadius((points[0].map[0] - points[1].map[0])*100, zoom) });

    let lineB = $('<div>', { class: 'lineb' });
    lineB.css({ left: points[0].map[0], top: 0 });
    // let lineBB = $('<div>', { class: 'linea' });
    // let lineBBB = $('<div>', { class: 'linea' });
    // lineBB.css({ left: points[0].map[0] - rescaleRadius((points[0].map[0] - points[1].map[0])*100, zoom), top: 0 });
    // lineBBB.css({ left: points[0].map[0] + rescaleRadius((points[0].map[0] - points[1].map[0])*100, zoom), top: 0 });
    map.append(lineA);
    map.append(lineB);
    // map.append(lineAA);map.append(lineAAA);map.append(lineBB);map.append(lineBBB);

    ex.innerHTML = points[0].map[0];
    ey.innerHTML = points[0].map[1];
    qx.innerHTML = points[1].map[0];
    qy.innerHTML = points[1].map[1];
    bx.innerHTML = points[3].map[0];
    by.innerHTML = points[3].map[1];
    mx.innerHTML = points[4].map[0];
    my.innerHTML = points[4].map[1];
    z.innerHTML = zoomlevel;
}

$(document).ready(function () {
    var map = $('#map');
    var mapContent = $('#map-content');

    // Set the initial scroll position to the center of the map
    var scrollLeft = (mapContent.width() - map.width()) / 2;
    var scrollTop = (mapContent.height() - map.height()) / 2;
    map.scrollLeft(scrollLeft);
    map.scrollTop(scrollTop);

    // Enable draggable functionality
    mapContent.draggable();
    addPoints();



    // Enable mouse wheel zooming
    map.on('wheel', function (e) {
        e.preventDefault();
        var zoomDelta = e.originalEvent.deltaY > 0 ? 0.9 : 1.1;
        var newScale = parseFloat(mapContent.css('transform').split(',')[0].slice(7)) * zoomDelta;

        // Limit zooming to a minimum of 0.5 and a maximum of 2
        if (newScale >= 0.5 && newScale <= 2) {
            mapContent.css({
                'transform': 'scale(' + newScale + ')',
                'transform-origin': 'left top'
            });

            // Adjust scroll position to keep the zoom centered
            var scrollLeft = (mapContent.width() - map.width()) / 2;
            var scrollTop = (mapContent.height() - map.height()) / 2;
            map.scrollLeft(scrollLeft);
            map.scrollTop(scrollTop);

        }
    });
});

const zoomElement = document.querySelector("#map-content");

const ZOOM_SPEED = 1;

zoomElement.addEventListener("wheel", function (e) {
    console.log(e);
    if (e.currentTarget !== e.target) {
        return;
    }
    if (e.deltaY < 0 && zoomlevel < 13) {
        zoomlevel += ZOOM_SPEED;
        originX = e.offsetX;
        originY = e.offsetY;
        ox.innerHTML = e.offsetX;
        oy.innerHTML = e.offsetY;
        rescale(0.1);
    } else {
        if (e.deltaY > 0 && zoomlevel > 1) {
            zoomlevel -= ZOOM_SPEED;
            originX = e.offsetX;
            originY = e.offsetY;
            ox.innerHTML = e.offsetX;
            oy.innerHTML = e.offsetY;
            rescale(-0.0835);
        }
    }

});

function tooltip(name, text) {
    $("#" + name).tooltip({ items: "#" + name, content: text, placement: "left" });
    $("#" + name).tooltip("open");
}

function disableTooltip(name) {
    $("#" + name).tooltip("disable");
}