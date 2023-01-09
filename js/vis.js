
// const labels = Utils.months({count: 7});
var l =['Albania', 'Austria', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2020', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey']
var d = [4.91, 12.38, 14.37, 4.43, 6.66, 14.72, 9.42, 6.41, 36.33, 13.42, 19.83, 34.18, 15.72, 7.75, 10.31, 16.59, 23.07, 21.43, 13.65, 12.3, 14.79, 15.22, 14.56, 14.71, 22.25, 6.94, 29.53, 5.96, 14.85, 5.04, 11.43, 15.28, 12.44, 16.48, 27.69, 24.06, 8.97]
        // var yearLabels = data.map(function (d) {
        //   return d.year;
        // });
        // var countData = data.map(function (d) {
        //   return d.count;
        // });
    
var cha = new Chart("myChart", {
    type: "bar",
    data: {
    labels:l,
    datasets: [
        {
        label: "Percentage of population that uses internet",
        data:  d,
        backgroundColor: 'rgb(255, 99, 132)',
        }
    ]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    autoSkip: false
                }
            }
        },

    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false
    }
});

function updateConfigByMutating(chart,year) {
 

    chart.data.labels=[];
    chart.data.datasets.forEach((dataset) => {
        dataset.data=[];
    });

    chart.update();



    var l2011 = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2007', 'EU27_2020', 'EU28', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom']
    var d2011 = [20.52, 14.16, 11.72, 19.84, 7.01, 7.27, 26.9, 16.68, 15.41, 16.71, 24.79, 26.79, 14.95, 18.18, 12.91, 20.04, 26.33, 19.58, 11.91, 27.05, 13.54, 14.56, 19.95, 18.64, 29.6, 11.49, 11.04, 8.84, 17.73, 13.76, 16.445, 25.92, 26.17]

    // var l2012 = 
    // var d2012 = 

    var l2013 = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2007', 'EU27_2020', 'EU28', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'United Kingdom']
    var d2013 = [18.32, 14.54, 9.86, 15.28, 11.36, 5.77, 22.36, 17.26, 16.06, 17.25, 20.28, 26.53, 17.75, 18.07, 15.98, 17.95, 26.51, 17.05, 13.46, 16.97, 12.22, 18.44, 20.09, 20.52, 15.76, 26.77, 11.22, 14.38, 7.61, 13.11, 15.81, 18.425, 28.84, 5.56, 25.88]


    // var l2014 = 
    // var d2014 = 

    var l2015 = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2007', 'EU27_2020', 'EU28', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Turkey', 'United Kingdom'] ;
    var d2015 = [12.76, 18.24, 10.77, 16.37, 13.3, 5.24, 36.47, 17.2, 16.08, 17.19, 21.97, 26.76, 16.59, 18.97, 17.78, 16.77, 13.91, 12.42, 15.15, 12.24, 19.59, 23.05, 24.12, 14.71, 28.92, 9.87, 14.37, 6.45, 12.41, 10.27, 13.01, 18.715, 26.24, 5.17, 25.54];

    var l2017 = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2007', 'EU27_2020', 'EU28', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'United Kingdom'];
    var d2017 = [11.77, 15.2, 6.6, 13.07, 13.46, 5.4, 23.51, 16.84, 15.83, 16.81, 20.38, 29.24, 16.21, 18.26, 15.34, 13.93, 21.77, 11.63, 13.17, 10.73, 16.03, 12.58, 18.76, 21.29, 12.06, 24.63, 8.79, 25.81, 11.63, 14.47, 8.32, 14.31, 16.39, 13.2, 18.155, 27.48, 26.58, 6.2, 23.58];

    var l2019 = ['Albania', 'Austria', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2020', 'EU28', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'United Kingdom'];
    var d2019 = [9.7, 11.47, 12.21, 4.16, 7.18, 14.31, 13.97, 6.09, 37.06, 15.63, 16.78, 20.58, 32.05, 17.44, 17.18, 12.87, 14.84, 19.76, 17.46, 13.64, 15.3, 13.88, 15.72, 20.02, 18.17, 10.01, 25.14, 8.63, 26.23, 8.78, 14.73, 4.79, 14.33, 14.61, 13.41, 17.515, 30.47, 25.78, 7.86, 24.64];

    var l2021 = ['Albania', 'Austria', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czechia', 'Denmark', 'EU27_2020', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Montenegro', 'Netherlands', 'North Macedonia', 'Norway', 'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey'];
    var d2021 = [4.91, 12.38, 14.37, 4.43, 6.66, 14.72, 9.42, 6.41, 36.33, 13.42, 19.83, 34.18, 15.72, 7.75, 10.31, 16.59, 23.07, 21.43, 13.65, 12.3, 14.79, 15.22, 14.56, 14.71, 22.25, 6.94, 29.53, 5.96, 14.85, 5.04, 11.43, 15.28, 12.44, 16.48, 27.69, 24.06, 8.97];

    // var l2014 = 
    // var d2014 = 

    // var l2014 = 
    // var d2014 = 

    // var l2014 = 
    // var d2014 = 

    if(year = 2011){
        var label = l2011;
        var data = d2011;
    }
    // if(year = 2012){
    //     var label = l2012;
    //     var data = d2012;
    // }
    if(year = 2013){
        var label = l2013;
        var data = d2013;
    }
    // if(year = 2014){
    //     var label = l2014;
    //     var data = d2014;
    // }
    if(year = 2015){
        var label = l2015;
        var data = d2015;
    }
    // if(year = 2016){
    //     var label = l2016;
    //     var data = d2016;
    // }
    if(year = 2017){
        var label = l2017;
        var data = d2017;
    }
    // if(year = 2018){
    //     var label = l2018;
    //     var data = d2018;
    // }
    if(year = 2019){
        var label = l2019;
        var data = d2019;
    }
    // if(year = 2020){
    //     var label = l2020;
    //     var data = d2020;
    // }
    if(year = 2021){
        var label = l2021;
        var data = d2021;
    }

    chart.data.labels=label;
        chart.data.datasets.forEach((dataset) => {
            dataset.data= data;
        });
    
      
    chart.update();

}


      





(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);