const config = require('./config/config.json');

function getEmailHtml(booking, message) {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet">
    <!--<![endif]-->
	
	
	<style>

#outlook a {
    padding: 0;
}

.es-button {
    mso-style-priority: 100 !important;
    text-decoration: none !important;
}

a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

.es-desk-hidden {
    display: none;
    float: left;
    overflow: hidden;
    width: 0;
    max-height: 0;
    line-height: 0;
    mso-hide: all;
}

/*
END OF IMPORTANT
*/
body {
    width: 100%;
    font-family: Jost, Arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

table {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
    border-collapse: collapse;
    border-spacing: 0px;
}

table td,
body,
.es-wrapper {
    padding: 0;
    Margin: 0;
}

.es-content,
.es-header,
.es-footer {
    table-layout: fixed !important;
    width: 100%;
}

img {
    display: block;
    border: 0;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
}

p,
hr {
    Margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
    Margin: 0;
    line-height: 120%;
    mso-line-height-rule: exactly;
    font-family: Jost, Arial, sans-serif;
}

p,
ul li,
ol li,
a {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    mso-line-height-rule: exactly;
}

.es-left {
    float: left;
}

.es-right {
    float: right;
}

.es-p5 {
    padding: 5px;
}

.es-p5t {
    padding-top: 5px;
}

.es-p5b {
    padding-bottom: 5px;
}

.es-p5l {
    padding-left: 5px;
}

.es-p5r {
    padding-right: 5px;
}

.es-p10 {
    padding: 10px;
}

.es-p10t {
    padding-top: 10px;
}

.es-p10b {
    padding-bottom: 10px;
}

.es-p10l {
    padding-left: 10px;
}

.es-p10r {
    padding-right: 10px;
}

.es-p15 {
    padding: 15px;
}

.es-p15t {
    padding-top: 15px;
}

.es-p15b {
    padding-bottom: 15px;
}

.es-p15l {
    padding-left: 15px;
}

.es-p15r {
    padding-right: 15px;
}

.es-p20 {
    padding: 20px;
}

.es-p20t {
    padding-top: 20px;
}

.es-p20b {
    padding-bottom: 20px;
}

.es-p20l {
    padding-left: 20px;
}

.es-p20r {
    padding-right: 20px;
}

.es-p25 {
    padding: 25px;
}

.es-p25t {
    padding-top: 25px;
}

.es-p25b {
    padding-bottom: 25px;
}

.es-p25l {
    padding-left: 25px;
}

.es-p25r {
    padding-right: 25px;
}

.es-p30 {
    padding: 30px;
}

.es-p30t {
    padding-top: 30px;
}

.es-p30b {
    padding-bottom: 30px;
}

.es-p30l {
    padding-left: 30px;
}

.es-p30r {
    padding-right: 30px;
}

.es-p35 {
    padding: 35px;
}

.es-p35t {
    padding-top: 35px;
}

.es-p35b {
    padding-bottom: 35px;
}

.es-p35l {
    padding-left: 35px;
}

.es-p35r {
    padding-right: 35px;
}

.es-p40 {
    padding: 40px;
}

.es-p40t {
    padding-top: 40px;
}

.es-p40b {
    padding-bottom: 40px;
}

.es-p40l {
    padding-left: 40px;
}

.es-p40r {
    padding-right: 40px;
}

.es-menu td {
    border: 0;
}

.es-menu td a img {
    display: inline-block !important;
    vertical-align: middle;
}

/*
END CONFIG STYLES
*/
s {
    text-decoration: line-through;
}

p,
ul li,
ol li {
    font-family: Jost, Arial, sans-serif;
    line-height: 150%;
}

ul li,
ol li {
    Margin-bottom: 15px;
    margin-left: 0;
}

a {
    text-decoration: underline;
}

.es-menu td a {
    text-decoration: none;
    display: block;
    font-family: Jost, Arial, sans-serif;
}

.es-wrapper {
    width: 100%;
    height: 100%;
    background-repeat: repeat;
    background-position: center top;
}

.es-wrapper-color,
.es-wrapper {
    background-color: #f6f6f6;
}

.es-header {
    background-color: transparent;
    background-repeat: repeat;
    background-position: center top;
}

.es-header-body {
    background-color: #D4D9FA;
}

.es-header-body p,
.es-header-body ul li,
.es-header-body ol li {
    color: #020202;
    font-size: 14px;
}

.es-header-body a {
    color: #020202;
    font-size: 14px;
}

.es-content-body {
    background-color: #fffdf7;
}

.es-content-body p,
.es-content-body ul li,
.es-content-body ol li {
    color: #020202;
    font-size: 14px;
}

.es-content-body a {
    color: #6798c0;
    font-size: 14px;
}

.es-footer {
    background-color: transparent;
    background-repeat: repeat;
    background-position: center top;
}

.es-footer-body {
    background-color: #3A0BC7;
}

.es-footer-body p,
.es-footer-body ul li,
.es-footer-body ol li {
    color: #fffdf7;
    font-size: 14px;
}

.es-footer-body a {
    color: #fffdf7;
    font-size: 14px;
}

.es-infoblock,
.es-infoblock p,
.es-infoblock ul li,
.es-infoblock ol li {
    line-height: 120%;
    font-size: 12px;
    color: #cccccc;
}

.es-infoblock a {
    font-size: 12px;
    color: #cccccc;
}

h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: normal;
    color: #020202;
}

h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    color: #020202;
}

h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    color: #020202;
}

.es-header-body h1 a,
.es-content-body h1 a,
.es-footer-body h1 a {
    font-size: 30px;
}

.es-header-body h2 a,
.es-content-body h2 a,
.es-footer-body h2 a {
    font-size: 24px;
}

.es-header-body h3 a,
.es-content-body h3 a,
.es-footer-body h3 a {
    font-size: 20px;
}

a.es-button,
button.es-button {
    display: inline-block;
    background: #fdc921;
    border-radius: 30px;
    font-size: 18px;
    font-family: Jost, Arial, sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 120%;
    color: #ffffff;
    text-decoration: none;
    width: auto;
    text-align: center;
    padding: 10px 20px 10px 20px;
    mso-padding-alt: 0;
    mso-border-alt: 10px solid #fdc921;
}

.es-button-border {
    border-style: solid solid solid solid;
    border-color: #2cb543 #2cb543 #2cb543 #2cb543;
    background: #fdc921;
    border-width: 0px 0px 0px 0px;
    display: inline-block;
    border-radius: 30px;
    width: auto;
}

.msohide {
    mso-hide: all;
}

/* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
@media only screen and (max-width: 600px) {

    p,
    ul li,
    ol li,
    a {
        line-height: 150% !important;
    }

    h1,
    h2,
    h3,
    h1 a,
    h2 a,
    h3 a {
        line-height: 120% !important;
    }

    h1 {
        font-size: 30px !important;
        text-align: left;
    }

    h2 {
        font-size: 24px !important;
        text-align: left;
    }

    h3 {
        font-size: 20px !important;
        text-align: left;
    }

    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
        font-size: 30px !important;
        text-align: left;
    }

    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
        font-size: 24px !important;
        text-align: left;
    }

    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
        font-size: 20px !important;
        text-align: left;
    }

    .es-menu td a {
        font-size: 14px !important;
    }

    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li,
    .es-header-body a {
        font-size: 14px !important;
    }

    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li,
    .es-content-body a {
        font-size: 14px !important;
    }

    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li,
    .es-footer-body a {
        font-size: 14px !important;
    }

    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li,
    .es-infoblock a {
        font-size: 12px !important;
    }

    *[class="gmail-fix"] {
        display: none !important;
    }

    .es-m-txt-c,
    .es-m-txt-c h1,
    .es-m-txt-c h2,
    .es-m-txt-c h3 {
        text-align: center !important;
    }

    .es-m-txt-r,
    .es-m-txt-r h1,
    .es-m-txt-r h2,
    .es-m-txt-r h3 {
        text-align: right !important;
    }

    .es-m-txt-l,
    .es-m-txt-l h1,
    .es-m-txt-l h2,
    .es-m-txt-l h3 {
        text-align: left !important;
    }

    .es-m-txt-r img,
    .es-m-txt-c img,
    .es-m-txt-l img {
        display: inline !important;
    }

    .es-button-border {
        display: inline-block !important;
    }

    a.es-button,
    button.es-button {
        font-size: 18px !important;
        display: inline-block !important;
    }

    .es-adaptive table,
    .es-left,
    .es-right {
        width: 100% !important;
    }

    .es-content table,
    .es-header table,
    .es-footer table,
    .es-content,
    .es-footer,
    .es-header {
        width: 100% !important;
        max-width: 600px !important;
    }

    .es-adapt-td {
        display: block !important;
        width: 100% !important;
    }

    .adapt-img {
        width: 100% !important;
        height: auto !important;
    }

    .es-m-p0 {
        padding: 0 !important;
    }

    .es-m-p0r {
        padding-right: 0 !important;
    }

    .es-m-p0l {
        padding-left: 0 !important;
    }

    .es-m-p0t {
        padding-top: 0 !important;
    }

    .es-m-p0b {
        padding-bottom: 0 !important;
    }

    .es-m-p20b {
        padding-bottom: 20px !important;
    }

    .es-mobile-hidden,
    .es-hidden {
        display: none !important;
    }

    tr.es-desk-hidden,
    td.es-desk-hidden,
    table.es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important;
    }

    tr.es-desk-hidden {
        display: table-row !important;
    }

    table.es-desk-hidden {
        display: table !important;
    }

    td.es-desk-menu-hidden {
        display: table-cell !important;
    }

    .es-menu td {
        width: 1% !important;
    }

    table.es-table-not-adapt,
    .esd-block-html table {
        width: auto !important;
    }

    table.es-social {
        display: inline-block !important;
    }

    table.es-social td {
        display: inline-block !important;
    }

    .es-desk-hidden {
        display: table-row !important;
        width: auto !important;
        overflow: visible !important;
        max-height: inherit !important;
    }

    .es-m-p5 {
        padding: 5px !important;
    }

    .es-m-p5t {
        padding-top: 5px !important;
    }

    .es-m-p5b {
        padding-bottom: 5px !important;
    }

    .es-m-p5r {
        padding-right: 5px !important;
    }

    .es-m-p5l {
        padding-left: 5px !important;
    }

    .es-m-p10 {
        padding: 10px !important;
    }

    .es-m-p10t {
        padding-top: 10px !important;
    }

    .es-m-p10b {
        padding-bottom: 10px !important;
    }

    .es-m-p10r {
        padding-right: 10px !important;
    }

    .es-m-p10l {
        padding-left: 10px !important;
    }

    .es-m-p15 {
        padding: 15px !important;
    }

    .es-m-p15t {
        padding-top: 15px !important;
    }

    .es-m-p15b {
        padding-bottom: 15px !important;
    }

    .es-m-p15r {
        padding-right: 15px !important;
    }

    .es-m-p15l {
        padding-left: 15px !important;
    }

    .es-m-p20 {
        padding: 20px !important;
    }

    .es-m-p20t {
        padding-top: 20px !important;
    }

    .es-m-p20r {
        padding-right: 20px !important;
    }

    .es-m-p20l {
        padding-left: 20px !important;
    }

    .es-m-p25 {
        padding: 25px !important;
    }

    .es-m-p25t {
        padding-top: 25px !important;
    }

    .es-m-p25b {
        padding-bottom: 25px !important;
    }

    .es-m-p25r {
        padding-right: 25px !important;
    }

    .es-m-p25l {
        padding-left: 25px !important;
    }

    .es-m-p30 {
        padding: 30px !important;
    }

    .es-m-p30t {
        padding-top: 30px !important;
    }

    .es-m-p30b {
        padding-bottom: 30px !important;
    }

    .es-m-p30r {
        padding-right: 30px !important;
    }

    .es-m-p30l {
        padding-left: 30px !important;
    }

    .es-m-p35 {
        padding: 35px !important;
    }

    .es-m-p35t {
        padding-top: 35px !important;
    }

    .es-m-p35b {
        padding-bottom: 35px !important;
    }

    .es-m-p35r {
        padding-right: 35px !important;
    }

    .es-m-p35l {
        padding-left: 35px !important;
    }

    .es-m-p40 {
        padding: 40px !important;
    }

    .es-m-p40t {
        padding-top: 40px !important;
    }

    .es-m-p40b {
        padding-bottom: 40px !important;
    }

    .es-m-p40r {
        padding-right: 40px !important;
    }

    .es-m-p40l {
        padding-left: 40px !important;
    }
}

	</style>
	
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#D4D9FA" align="center" style="background-color: #d4d9fa;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p35t es-p30b es-p20r es-p20l" align="left" esd-custom-block-id="1047512">
                                                        <!--[if mso]><table width="560" cellpadding="0"
                            cellspacing="0"><tr><td width="324" valign="top"><![endif]-->
                                                        <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="es-m-p0r es-m-p20b esd-container-frame" width="324" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://broliss.com"><img src="${config.frontend_url}/assets/images/rebot/logo.png" alt="Logo" style="display: block;" height="55" title="Logo"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="20"></td><td width="216" valign="top"><![endif]-->
                                                        <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" width="216" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="right" class="esd-block-text es-m-txt-l">
                                                                                        <h2>DEMO BOOKING</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="right" class="esd-block-text es-m-txt-l es-p5t">
                                                                                        <p>Confirmed</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #3a0bc7; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#D4D9FA" align="center" style="background-color: #d4d9fa; background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_e18e8b6ad0d2f530731f1cc3bd27d47df9d75aa833914e627ec524bf07cda11b/images/14731345_rm222mind20_1_5nq.png); background-repeat: no-repeat; background-position: right bottom;" background="https://tlr.stripocdn.email/content/guids/CABINET_e18e8b6ad0d2f530731f1cc3bd27d47df9d75aa833914e627ec524bf07cda11b/images/14731345_rm222mind20_1_5nq.png">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p20b es-p20r es-p20l" align="left" esd-custom-block-id="1047513">
                                                        <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="448" valign="top"><![endif]-->
                                                        <table cellspacing="0" cellpadding="0" align="left" class="es-left">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="es-m-p0r es-m-p20b esd-container-frame" width="448" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text">
                                                                                        <h1>Demo Booking Confirmation</h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p25t es-p40b es-m-p40r">
                                                                                        <h3>${booking.fullName},</h3>
                                                                                        <p><br></p>
                                                                                        <p>${message}</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td><td width="20"></td><td width="92" valign="top"><![endif]-->
                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                            <tbody>
                                                                <tr class="es-mobile-hidden">
                                                                    <td width="92" align="left" class="esd-container-frame">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer" height="40"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table bgcolor="#fffdf7" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left" esd-custom-block-id="1047515">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text">
                                                                                        <h2>BOOKING DETAILS</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10t es-p10b">
                                                                                        <ul>
                                                                                            <li><strong>Name:</strong> ${booking.fullName}</li>
                                                                                            <li><strong>Email:</strong> ${booking.email}</li>
                                                                                            <li><strong>Phone:</strong> ${booking.phoneNumber}</li>
                                                                                            <li><strong>Demo Date:</strong> ${booking.bookingDate}</li>
                                                                                            <li><strong>Timeslot:</strong> ${booking.timeslot}</li>
                                                                                            <li><strong>Timeslot:</strong> ${booking.timezone ? booking.timezone : ''}</li>
                                                                                        </ul>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #d4d9fa; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #d4d9fa; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #d4d9fa; background: unset; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                        <table cellspacing="0" cellpadding="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" width="560" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0"><a target="_blank" href="${config.frontend_url}/assets/images/rebot/logo-w.png" alt width="125" style="display: block;"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
    `
}

module.exports = {getEmailHtml}