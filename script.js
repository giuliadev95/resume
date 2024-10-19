document.addEventListener("DOMContentLoaded", function() {
/*  ------------------------
    SHOW/HIDE HAMBURGER MENU 
    ------------------------ */
    const HAMBURGER_ICON = document.querySelector(".hamburger-container");
    const HEADER = document.getElementById("header");
    const MAIN = document.getElementById("main");
    const FOOTER = document.getElementById("footer");
    const LINKS = document.querySelector(".navigation-links");

    if (HAMBURGER_ICON) {
        HAMBURGER_ICON.addEventListener('click', () => {
            HAMBURGER_ICON.classList.toggle('active');
            HEADER.classList.toggle('active');
            MAIN.classList.toggle('active');
            FOOTER.classList.toggle('active');
            LINKS.classList.toggle('active');      
        });
    } else {
        console.error('Hamburger icon not found!');
    }
     
    // set the menu to close when its links are clicked
    const NAVLINKS = document.querySelectorAll(".navigation-links a");
    console.log(NAVLINKS);
    NAVLINKS.forEach(link => {
        link.addEventListener("click", function() {
            HAMBURGER_ICON.classList.remove('active');
            HEADER.classList.remove('active');
            MAIN.classList.remove('active');
            FOOTER.classList.remove('active');
            LINKS.classList.remove('active');
        });
    });

    /*  ------------------------------------------------------
        GO TO ABOUT SECTION ON CLICK TO THE "ABOUT ME" BUTTON
        ----------------------------------------------------- */
    
            const elementsI = document.getElementsByClassName('go-to-about-me');
                for (let i = 0; i < elementsI.length; i++) {
                elementsI[i].addEventListener('click', function() {
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                });
            };

    /*  --------------------------------------------------------------------------------------------
        GO TO PORTFOLIO SECTION ON CLICK TO THE "GO TO PORTFOLIO" BUTTON
        -------------------------------------------------------------------------------------------- */
        
            const elementsJ = document.getElementsByClassName('see-portfolio');
                for (let i = 0; i < elementsJ.length; i++) {
                elementsJ[i].addEventListener('click', function() {
                    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                });
            };       
            
        /*--------------------------------------------------------------------------------------------
        CHANGE THE SOURCE OF IMAGES (TABLET / DESKTOP/ DEFAULT MOBILE) DEPENDING ON ON WINDOW WIDTH:
        --------------------------------------------------------------------------------------------
        
        ----------------------------
        ABOUT ME IMAGE 
        ---------------------------- */
            var profile_image = document.querySelector(".profile-image");
            function replacePortrait() {
                var windowWidth = window.innerWidth || document.documentElement.clientWidth;
                
                if (windowWidth >= 768) {
                    profile_image.src = "./images/homepage/desktop/adobe-busto-nobg.png"; 
                    console.clear();
                    console.log(`profile-image src: ${profile_image.src}`);
                } else {
                    profile_image.src = " ./images/homepage/mobile/mobile-portrait.png";
                    console.clear();
                    console.log(`profile-image src: ${profile_image.src}`);
                }
            }
            
            replacePortrait();
            window.addEventListener('resize', replacePortrait);
            
            
        /*  ----------------------------
        "MANAGE" PROJECT IMAGE 
        ---------------------------- 
            var manage_image = document.querySelector(".manage");
            function replaceManage() {
                var windowWidth = window.innerWidth || document.documentElement.clientWidth;
                
                if(windowWidth >= 768 && windowWidth < 1024) {
                    manage_image.src = "./images/portfolio/tablet/image-portfolio-manage.jpg";
                    console.log(`manage-image src: ${manage_image.src}`);
                }
                else if (windowWidth >= 1024) {
                    manage_image.src = "./images/portfolio/desktop/image-portfolio-manage.jpg"; 
                    console.log(`manage-image src: ${manage_image.src}`);
                } else {
                    manage_image.src = " ./images/portfolio/mobile/image-portfolio-manage.jpg";
                    console.log(`manage-image src: ${manage_image.src}`);
                }
            } 
            
            replaceManage();
            window.addEventListener('resize', replaceManage); */
            
            
        /*  ----------------------------
        "INSURE" PROJECT IMAGE 
        ---------------------------- */
            var insure_image = document.querySelector(".insure");
            function replaceInsure() {
                var windowWidth = window.innerWidth || document.documentElement.clientWidth;
                
                if(windowWidth >= 768 && windowWidth < 1024) {
                    insure_image.src = "./images/portfolio/tablet/image-portfolio-insure.jpg";
                    console.log(`insure-image src: ${insure_image.src}`);
                }
                else if (windowWidth >= 1024) {
                    insure_image.src = "./images/portfolio/desktop/image-portfolio-insure.jpg"; 
                    console.log(`insure-image src: ${insure_image.src}`);
                } else {
                    insure_image.src = " ./images/portfolio/mobile/image-portfolio-insure.jpg";
                    console.log(`insure-image src: ${insure_image.src}`);
                }
            }
            
            replaceInsure();
            window.addEventListener('resize', replaceInsure);
            
            
        /*  ----------------------------
        "BOOKMARK" PROJECT IMAGE 
        ---------------------------- */
            var bookmark_image = document.querySelector(".bookmark");
            function replaceBookmark() {
                var windowWidth = window.innerWidth || document.documentElement.clientWidth;
                
                if(windowWidth >= 768 && windowWidth < 1024) {
                    bookmark_image.src = "./images/portfolio/tablet/image-portfolio-bookmark.jpg";
                    console.log(`bookmark-image src: ${bookmark_image.src}`);
                }
                else if (windowWidth >= 1024) {
                    bookmark_image.src = "./images/portfolio/desktop/image-portfolio-bookmark.jpg"; 
                    console.log(`bookmark-image src: ${bookmark_image.src}`);
                } else {
                    bookmark_image.src = " ./images/portfolio/mobile/image-portfolio-bookmark.jpg";
                    console.log(`bookmark-image src: ${bookmark_image.src}`);
                }
            }
            
            replaceBookmark();
            window.addEventListener('resize', replaceBookmark);
});


    



