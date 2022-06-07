window.onload = function (){

}
    var src_yummy_noodle = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.283555961688!2d2.3587393014532343!3d48.87098616558573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0ea624dc6d%3A0x6b250f532377642c!2sRue%20de%20Lancry%2C%2075010%20Paris%2C%20France!5e1!3m2!1sfr!2scd!4v1653314870253!5m2!1sfr!2scd";
    var src_yu_noodle_my = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.0324583911315!2d2.3264071153659023!3d48.85436967928708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d667eeea5f%3A0x1830691207ce872e!2sRue%20Saint-Guillaume%2C%2075007%20Paris%2C%20France!5e1!3m2!1sfr!2scd!4v1653316691179!5m2!1sfr!2scd";
    var src_yummy_nouilles = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.569464760241!2d2.3541249153663286!3d48.86464297928815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1aca68edcb%3A0x68ee1b0bb9e8928a!2sRue%20au%20Maire%2C%2075003%20Paris%2C%20France!5e1!3m2!1sfr!2scd!4v1653317232914!5m2!1sfr!2scd"
    var map_div = document.getElementById("map");
    var yummy_noodle = document.getElementById("yummy_noodle_map");
    yummy_noodle.addEventListener("click",()=>{
        mapLoader(src_yummy_noodle, map_div)
    })
    var yu_noodle_my = document.getElementById("yu_noodle_my_map");
    yu_noodle_my.addEventListener('click',()=>{
        mapLoader(src_yu_noodle_my, map_div)
        
    })
    var yummy_nouilles = document.getElementById("yummy_nouilles_map");
    yummy_nouilles.addEventListener('click',()=>{
        mapLoader(src_yummy_nouilles, map_div)
    })
function mapLoader(mapSrc, x) {
    x.src = mapSrc;
}
