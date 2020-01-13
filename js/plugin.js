/* global $, documant, alert, console, log */

$(document).ready( function () {
    'use strict';
    $('.gallery button').click(function (e){
        e.preventDefault();
        $('.gallery > div').toggleClass('container')
    })

    //Start Set The Height

//     var maxHeight = 0;

//     $('.testimonial .say:not(:first-of-type)').each(function () {
//         maxHeight = $(this).height();
//     })
//     $('.testimonial .say:not(:first-of-type)').height(maxHeight)


    //Start Tabs

    $('.tabs .list li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs .the-content .cont').hide();
        $($(this).data('par')).fadeIn()
    })

    //Start Show/Hide Menu Bar

    $('nav .icon-list').click(function () {
        $('nav').addClass('nav-xm')
    })

    $('nav .hide-list').click(function () {
        $('nav').removeClass('nav-xm')
    })










})

    