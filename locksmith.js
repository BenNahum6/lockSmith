$(document).ready(function (){
    let firstMs = $("<div class=\"aboutUs\">\n" +
        " <p> we are the best lock smith" +
        "</div> <br>");
    $(".main").html(firstMs);

    $("button").click(function () {
        let clickOn = $(this).attr("id");
        console.log(clickOn);
        if (clickOn == 0){
            aboutUS(clickOn);
        }
        else if(clickOn == 1){
            tipsFromLock(clickOn);
        }
        else if (clickOn == 2){
            contactUs(clickOn);
        }
        else {
            something(clickOn);
        }
    });

});

function aboutUS(num){
    let firstMs = $('<div class="frontPage"><div class="firstParagraf"><div><h1>Los Angeles #1 Security Camera And Locksmith Service\n</h1>' +
        'benel Security Locksmith Los Angeles is your local lock and security expert! benel Security Locksmith established in 2006 and provides extremely amazing emergency Locksmith services in Los Angeles.\n We offer fast, reliable mobile and emergency locksmith services for both residential and commercial applications throughout all of Los Angeles County. We will install new locks, make extra keys, or install a new security system with attention to detail. We’re experts when it comes to Locks! Our large selection of lock and security systems mean you will be sure to find the right solution for your needs and budget.\n' +
        '\n' +
        'Lion Security Locksmith also installs CCTV & Videos Surveillance Cameras from quality brands like LTS, Pelco & Samsung in Los Angeles and nearby areas. Lion Security Locksmith team believes to provide good quality products to its customers.\n' +
        '</div>' +
        '<div class="secend"><img src="dor.jpg"></div>' +
        '</div>' +
        '<h1>Why People choose us?\n</h1>' +
        'We offer security systems that utilize the latest technology and highest-quality materials, our options are guaranteed to impress you and exceed your expectations. We will be happy to discuss the various options available and assist you in find the one to best suit your needs. We will provide you with an estimate of your security system once we have completed our consultation with you.\n' +
        '\n' +
        '<h1>benel Security Locksmith Licences\n</h1>' +
        '<ul class="a">'+
        '<li>State Contractor License # 111111\n</li>' +
        '<li>Locksmith Permit # LCO 1111\n</li>' +
        '<li>Liability Insured\n</li>' +
        '<li>BBB Member\n</li>' +
        '<li>AAA Discount\n</li>' +
        '</ul>' +
        ' \n' +
        '\n' +
        '<h1>Testimonials\n</h1>' +
        'Lion Security Locksmith provided satisfied and quality services to Los Angeles clients over the years. Our customers were extremely satisfied with our services and wrote kind reviews about Lion Security Locksmith services on well reputed and trusted platform Yelp & Google Plus.\n' +
        '\n' +
        '<h1>10% of any service\n</h1>' +
        '<ul class="a">'+
        '<li>Electronic Mechanical Locks\n</li>' +
        '<li>Master Key Systems\n</li>' +
        '<li>Push Bar Exit Devices\n</li>' +
        '<li>Sheriffs Eviction\n</li>' +
        '<li>Keydrop Lock Boxes\n</li>' +
        '<li>Home Security Systems\n</li>' +
        '<li>Deadbolts\n</li>' +
        '<li>Video Surveillance\n</li>' +
        '<li>Insurance Work\n</li>' +
        '<li>24/7 Emergency Service\n</li>' +
        '<li>Radio Dispatched Trucks</li>' +
        '</ul>' +
        '</div>');
    $("#main").html(firstMs);
}

function tipsFromLock(num){
    let firstMs = $('<div><h1>tips from locksmith\n</h1>' +
        '</div>');
    $("#main").html(firstMs);
}

function contactUs(num){
    let firstMs = $('<div><h1>contact us\n</h1>' +
        '</div>');
    $("#main").html(firstMs);
}

function something(num){
    let firstMs = $('<div><h1>contact us\n</h1>' +
        '</div>');
    $("#main").html(firstMs);
}