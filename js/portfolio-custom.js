/* ============================================================
   Portfolio Alfred N. Tawaga — Ajustements personnalisés
   ============================================================ */

(function($) {
    "use strict";

    // Désactiver le curseur personnalisé (plus sobre pour un recruteur)
    $(document).ready(function() {
        if ($('.cb-cursor').length) {
            $('.cb-cursor').remove();
        }
    });

    // Smooth scroll sur les ancres du menu
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Menu actif selon la section visible
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop() + 120;
        $('.nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.length && refElement.offset().top <= scrollPos && 
                refElement.offset().top + refElement.height() > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });

    // Animation d'apparition sur les cartes de compétences
    if (typeof WOW !== 'undefined') {
        new WOW({
            offset: 100,
            mobile: true,
            live: true
        }).init();
    }

})(jQuery);