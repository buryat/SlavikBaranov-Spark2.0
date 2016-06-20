var fillAnnotations = function (x, y, anchor) {
    var annotations = [];
    var l = Math.min(x.length, y.length);
    for( var i = 0 ; i < l ; i++ ){
        var result = {
            x: x[i],
            y: y[i],
            text: y[i],
            xanchor: anchor || 'center',
            yanchor: 'bottom',
            showarrow: false
        };
        annotations.push(result);
    }
    return annotations;
};

var rddColor = '#1F77B4';
var dsColor = '#FF7F0E';
var shuffleColor = '#AAAAAA'; //'rgba(204,204,204,1)'

var plotSize1 = function(elem) {
    var xv = ['rdd', 'dataset'];
    var yv = [57.4, 24.4];    
    var data = [
        {
            x: xv,
            y: yv,
            marker:{
                color: [rddColor, dsColor]
            },
            type: 'bar'
        }
    ];
    var layout = {
        title: "Cached size (mb)",
        annotations: fillAnnotations(xv, yv),
        showlegend: false
    };
    Plotly.newPlot(elem, data, layout, {displayModeBar: false});
    
};

var plotSize2 = function(elem) {
    var xv = ['rdd', 'dataset'];
    var yv = [11728.2, 13200.0];
    var data = [
        {
            x: xv,
            y: yv,
            marker:{
                color: [rddColor, dsColor]
            },
            type: 'bar'
        }
    ];
    var layout = {
        title: "Cached size (mb)",
        annotations: fillAnnotations(xv, yv),
        showlegend: false
    };
    Plotly.newPlot(elem, data, layout, {displayModeBar: false});
};


var plotSize3 = function (elem) {
    var xv = ['rdd, simple', 'dataset, simple', 'rdd, adv', 'dataset, adv'];
    var yv = [11728.2, 13200.0, 3471.6, 7555.9];
    var shufflev = [2838.0, 5170.0, 2163.7, 2838.0];
    var data = [
        {
            x: xv,
            y: yv,
            marker:{
                color: [rddColor, dsColor, rddColor, dsColor]
            },
            type: 'bar'
        },
        {
            x: xv,
            y: shufflev,
            marker:{
                color: [shuffleColor, shuffleColor, shuffleColor, shuffleColor]
            },
            type: 'bar'

        }
    ];
    var layout = {
        title: "Cached size/shuffle size (mb)",
        annotations: fillAnnotations(xv, yv, 'right').concat(fillAnnotations(xv, shufflev, 'left')),
        showlegend: false
    };

    Plotly.newPlot(elem, data, layout, {displayModeBar: false});
};

var plotPerf3 = function (elem) {
    var xv = ['rdd, simple', 'dataset, simple', 'rdd, adv', 'dataset, adv', 'rdd, array'];
    var yv = [0.15, 0.67, 0.57, 0.71, 0.15];
    var data = [
        {
            x: xv,
            y: yv,
            marker:{
                color: [rddColor, dsColor, rddColor, dsColor, rddColor]
            },
            type: 'bar'
        }
    ];
    var layout = {
        title: "Full iteration (s)",
        annotations: fillAnnotations(xv, yv),
        showlegend: false
    };
    Plotly.newPlot(elem, data, layout, {displayModeBar: false});
};