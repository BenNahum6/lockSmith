$(document).ready(function (){

    home(0);//start main page.

    $('#logo1').click(function () {//return to main page.
        home(0);
    });

    $("button").click(function () {//Navigation Bar.
        let clickOn = $(this).attr("id");
        $(window).scrollTop(0);//Rolls to the top of the page.

        console.log(clickOn);
        if(clickOn == 0){
            home(clickOn);
        }
        else if(clickOn == 1){
            aboutUS(clickOn);
        }
        else if(clickOn == 2){
            services(clickOn);
        }
        else if(clickOn == 3){
            tipsFromLock(clickOn);
        }
        else if (clickOn == 4){
            contactUs(clickOn);
        }
        else {
            something(clickOn);
        }
    });


    $('#terms').click(function () {//return to main page.
        $(window).scrollTop(0);//Rolls to the top of the page.
        terms();
    });

    $('#policy').click(function () {//return to main page.
        $(window).scrollTop(0);//Rolls to the top of the page.
        policy();
    });

});

function home(num) {
    let firstMs = $('<div id="title" style="background-color: orangered;font-family: Monospace"><h1>Home</h1></div>');
    $(".main").html(firstMs);
}

function aboutUS(num){
    let firstMs = $('<div id="title" style="background-color: orangered; font-family: Monospace"><h1>About Us</h1></div>'+
        '<div class=\"frontPage\" id=\"moveText\" style="font-style: italic;"><div class="firstParagraf"><div><h2>Los Angeles #1 Security Camera And Locksmith Service\n</h2>' +
        'benel Security Locksmith Los Angeles is your local lock and security expert! benel Security Locksmith established in 2006 and provides extremely amazing emergency Locksmith services in Los Angeles.\n We offer fast, reliable mobile and emergency locksmith services for both residential and commercial applications throughout all of Los Angeles County. We will install new locks, make extra keys, or install a new security system with attention to detail. We’re experts when it comes to Locks! Our large selection of lock and security systems mean you will be sure to find the right solution for your needs and budget.\n' +
        '\n' +
        'Lion Security Locksmith also installs CCTV & Videos Surveillance Cameras from quality brands like LTS, Pelco & Samsung in Los Angeles and nearby areas. Lion Security Locksmith team believes to provide good quality products to its customers.\n' +
        '</div>' +
        '<div class="secend"><img src="./image/dor.jpg"></div>' +
        '</div>' +
        '<h2>Why People choose us?\n</h2>' +
        'We offer security systems that utilize the latest technology and highest-quality materials, our options are guaranteed to impress you and exceed your expectations. We will be happy to discuss the various options available and assist you in find the one to best suit your needs. We will provide you with an estimate of your security system once we have completed our consultation with you.\n' +
        '\n' +
        '<h2>benel Security Locksmith Licences\n</h2>' +
        '<ul class="a">'+
        '<li>State Contractor License # 111111\n</li>' +
        '<li>Locksmith Permit # LCO 1111\n</li>' +
        '<li>Liability Insured\n</li>' +
        '<li>BBB Member\n</li>' +
        '<li>AAA Discount\n</li>' +
        '</ul>' +
        ' \n' +
        '\n' +
        '<h2>Testimonials\n</h2>' +
        'Lion Security Locksmith provided satisfied and quality services to Los Angeles clients over the years. Our customers were extremely satisfied with our services and wrote kind reviews about Lion Security Locksmith services on well reputed and trusted platform Yelp & Google Plus.\n' +
        '\n ' +
        '<h2>10% of any service\n</h2>' +
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

function services(num){
    let firstMs = $('<div id="title" style="background-color: orangered; font-family: Monospace"><h1>Services</h1></div>\n' +
        '    <div id="paragraf">\n' +
        '        <p>Locksmith services include emergency call outs, key cutting, changing locks, repairs to auto locksmiths helping with lost car keys & replacement keys.  All locksmiths approved by the Master Locksmiths Association are fully vetted, inspected & qualified.</p>\n' +
        '    </div>\n' +
        '    <div class="grid-container">\n' +
        '        <div class="grid-item"><img src="./image/KeyDuplication.jpg" style="height: 100%; width: 100%"></div>\n' +
        '        <div class="grid-item"><h5>Key Cutting (All Keys Cut)</h5>\n' +
        '            <p>A locksmith near you offering a key cutting service can cut & copy keys by code or by hand if you need a spare set of keys cut.  You might require a replacement set of <keys></keys></p>\n' +
        '        </div>\n' +
        '        <div class="grid-item"><img src="./image/locksmith.jpg" style="height: 100%; width: 100%"></div>\n' +
        '        <div class="grid-item"><h5>Lock Replacement, Change & Fitting</h5>\n' +
        '            <p>Have you moved into a new house & want to change, fit or have replacement door locks, a MLA Approved Locksmith can change & replace your door or window locks</p>\n' +
        '        </div>\n' +
        '        <div class="grid-item"><img src="./image/home.jpg" style="height: 100%; width: 100%"></div>\n' +
        '        <div class="grid-item"><h5>House and Home Door Locks & Keys</h5>\n' +
        '            <p>If you need a locksmith for your home, a locksmith approved by MLA can help. Have your lost your house keys or locked out the house a locksmith can open your locks</p>\n' +
        '        </div>\n' +
        '        <div class="grid-item"><img src="./image/hackADor.jpg" style="height: 100%; width: 100%"></div>\n' +
        '        <div class="grid-item"><h5>Locked Out Of House & What To do ?</h5>\n' +
        '            <p>Are you locked out of your house with no spare key? A locksmith can help by unlocking & opening the door without damaging the lock by using a non-destructive way.</p>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');
    $("#main").html(firstMs);
}

function tipsFromLock(num){
    let firstMs = $('<div id="title" style="background-color: orangered; font-family: Monospace"><h1>tips From Lock smith</h1></div>');
    $("#main").html(firstMs);
}

function contactUs(num){
    let firstMs = $('<div id="title" style="background-color: orangered;font-family: Monospace"><h1>Contact Us</h1></div>\n' +
        '<div class="comrov">\n' +
        '    <div class="contactUs-container">\n' +
        '        <form action="/action_page.php">\n' +
        '            <label for="fname">First Name</label>\n' +
        '            <input type="text" id="fname" name="firstname" placeholder="Your name..">\n' +
        '            <label for="lname">Last Name</label>\n' +
        '            <input type="text" id="lname" name="lastname" placeholder="Your last name..">\n' +
        '            <label for="subject">Subject</label>\n' +
        '            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>\n' +
        '            <input type="submit" value="Submit">\n' +
        '        </form>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="contactUs" id="moveText">\n' +
        '        <h1>Contact Us</h1>\n' +
        '        <a style="color: black" href="tel:%054-556-5765">phone: 054-556-5765</a>\n' +
        '        <a style="color: black" href="mailto:bennahum6@gmail.com">mail: bennahum6@gmail.com</a>\n' +
        '        <div><p>&nbsp;</p></div>\n' +
        '        <div id="contactUsMorWay">\n' +
        '            <div class="tooltip" id="icon-facebook">\n' +
        '                <span class="tooltiptext">facebook</span>\n' +
        '                <a href="https://www.facebook.com/bennahum6" target="_blank" style="color: black">  <img src="./image/facebook.png" height="50" width="50"></a>\n' +
        '            </div>\n' +
        '            <div><p>&nbsp;</p></div>\n' +
        '            <div class="tooltip" id="icon-instagram">\n' +
        '                <span class="tooltiptext">instagram</span>\n' +
        '                <a href="https://www.instagram.com/ben_nahum/" target="_blank" style="color: black">  <img src="./image/instagram.png" height="50" width="50"></a>\n' +
        '            </div>\n' +
        '            <div><p>&nbsp;</p></div>\n' +
        '            <div class="tooltip" id="icon-whatsapp">\n' +
        '                <span class="tooltiptext">whatsapp</span>\n' +
        '                <a href="https://api.whatsapp.com/send?phone=545565765&text=Hi,%20I\\\\m % 20interested % 20 in % 20your % 20service"\n' +
        '                   target="_blank" style="color: black">  <img src="./image/whatsapp.png" height="50" width="50"\n' +
        '                ></a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');
    $("#main").html(firstMs);
}

function something(num){
    let firstMs = $('<div id=\"moveText\" font-family: Monospace><h1>contact us\n</h1>' +
        '</div>');
    $("#main").html(firstMs);
}


function terms() {
    let firstMs = $('<div id="title" style="background-color: orangered; font-family: Monospace"><h1>Terms</h1></div>');
    $(".main").html(firstMs);
}

function policy(){
    let firstMs = $('<div class="privacy-Policy">\n' +
        '    <div id="title" style="background-color: orangered; font-family: Monospace"><h1>Privacy Policy</h1></div>\n' +
        '<div class="firstParagraf">' +
        '    <div class="privacy-Policy-Text" id="moveText">\n' +
        '        <p>\n' +
        '            Privacy policy of Master Locksmiths Association online enquiries \n' +
        '            <br><br>\n' +
        '        <div id="fontWeight">1. Introduction</div>\n' +
        '        1.1 In this policy, we, us, our refer to Master Locksmiths Association and you and your refer to natural personas that uses our website to send an enquiry.\n' +
        '        <br>\n' +
        '        1.2 We are committed to protect the private data we receive and store from you and respect your rights under the General Data Protection Regulation.\n' +
        '        <br>\n' +
        '        1.3 This policy applies when we receive your data, and we are acting as data controller and when we process it, and we are acting as data processor.\n' +
        '        <br>\n' +
        '        1.4 For more information about us and how you can contact us, please see Section 10.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">2. Origin of our data</div>\n' +
        '        The data is received from you, as an individual that has made contact through our website locksmiths.co.uk\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">3. Nature of the data</div>\n' +
        '        The data received from you can be phone number, name or e-mail address.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">4. Processing your data</div>\n' +
        '        Once the enquiry is received by us, your details will be used to contact you in order to respond to the original enquiry.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">5. Sharing your details</div>\n' +
        '        We will not share your details with any other party.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">6. Retention period</div>\n' +
        '        Once we have responded to your enquiry, unless we have received your consent to send you more information about our training, we will delete your details. If consent is given, your details will be retained until the consent is withdrawn.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">7. Data breaches</div>\n' +
        '        MLA protects the computers on which the data is received by password, that is periodically changed (every 3 months). The computers are kept on a secure site which is protected by alarm and anti-theft system.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">8. Amendments</div>\n' +
        '        <br>\n' +
        '        8.1 We may update this policy in order to improve our data management.\n' +
        '        <br>\n' +
        '        8.2 We will notify you of any significant changes to this policy by e-mail.\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">9. Your rights (GDPR rights of the natural person)</div>\n' +
        '        <br>\n' +
        '        9.1 This section explains the rights, you have, as a data subject, in relation to your personal information.\n' +
        '        <br>\n' +
        '        9.2 To be informed about how, why and on what basis that information is processed.\n' +
        '        <br>\n' +
        '        9.3 To obtain confirmation that your information is being processed and to obtain access to it and certain other information, by making a subject access request— your request will be answered in maximum 7 days.\n' +
        '        <br>\n' +
        '        9.4 To have data corrected if it is inaccurate or incomplete.\n' +
        '        <br>\n' +
        '        9.5 To have data erased if it is no longer necessary for the purpose for which it was originally collected/processed, or if there are no overriding legitimate grounds for the processing (the right to be forgotten).\n' +
        '        <br>\n' +
        '        9.6 To restrict the processing of personal information where the accuracy of the information is contested, or the processing is unlawful (but you do not want the data to be erased), or where the employer no longer needs the personal information, but you require the data to establish, exercise or defend a legal claim.\n' +
        '        <br>\n' +
        '        9.7 To restrict the processing of personal information temporarily where you do not think it is accurate (and the employer is verifying whether it is accurate), or where you have objected to the processing (and the employer is considering whether the organisation’s legitimate grounds override your interests).\n' +
        '        <br>\n' +
        '        9.8 If you wish to exercise any of the rights in paragraphs, please contact the data protection officer on enquiries@locksmiths.co.uk\n' +
        '        <br><br>\n' +
        '        <div id="fontWeight">10. Master Locksmiths Association details</div>\n' +
        '        <br>\n' +
        '        10.1 We are registered in the UK under registration number 2020160 and our registered office is at\n' +
        '        <br>\n' +
        '        1 Prospect Park, Valley Drive, Rugby, Warwickshire, CV21 1TF, that is also our principal place of business.\n' +
        '        <br>\n' +
        '        10.2 You can contact us:\n' +
        '        <br><br>\n' +
        '        a) by post to the address of our registered office\n' +
        '        <p>b) by e-mail to: <a style="color: black" href="mailto:bennahum6@gmail.com">bennahum6@gmail.com</a></p>\n' +
        '        <p>c) by telephone: <a style="color: black" href="tel:%054-556-5765">054-556-5765</a></p>\n' +
        '        </p>\n' +
        '    </div>\n' +
        '</div>');
    $(".main").html(firstMs);
}