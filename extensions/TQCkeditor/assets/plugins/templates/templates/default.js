/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [
	//////////////////////////////////////////////////////////////////////////////////
	{
		title: 'Image Box Center',
		image: 'template_img_c.png',
		description: 'Add Image box align Center.',
		html:	'<table class="ArticleImageBoxCenter" width="100%" align="center" border="0">'+
				'<tr>'+
				'<td><img src="images/no-picture.jpg" width="400" height="300" alt="Chú thích ảnh"/></td>'+
				'</tr>'+
				'<tr>'+
				'<td class="ImgDes">Chú thích ảnh</td>'+
				'</tr>'+
				'</table>'
	}, // End Images Box Center
	{
		title: 'Image Box Left',
		image: 'template_img_l.png',
		description: 'Add Image box align left.',
		html:	'<table class="ArticleImageBoxLeft" align="left" border="0">'+
				'<tr>'+
				'<td><img src="images/no-picture.jpg" width="400" height="300" alt="Chú thích ảnh"/></td>'+
				'</tr>'+
				'<tr>'+
				'<td class="ImgDes">Chú thích ảnh</td>'+
				'</tr>'+
				'</table>'
	}, // End Images Box Left
	{
		title: 'Image Box Right',
		image: 'template_img_r.png',
		description: 'Add Image box align Right.',
		html:	'<table class="ArticleImageBoxRight" align="right" border="0">'+
				'<tr>'+
				'<td><img src="images/no-picture.jpg" width="400" height="300" alt="Chú thích ảnh"/></td>'+
				'</tr>'+
				'<tr>'+
				'<td class="ImgDes">Chú thích ảnh</td>'+
				'</tr>'+
				'</table>'
	}, // End Images Box Right	
	//////////////////////////////////////////////////////////////////////////////////
	{
		title: 'Box Tip',
		image: 'template_box_tip.png',
		description: 'Add box tip.',
		html:	'<table class="ArticleBoxFunction BoxTip" width="100%" border="0" cellspacing="2" cellpadding="2">'+
				'<tr>'+
				'<td>Text của bạn sẽ nằm ở đây...</td>'+
				'</tr>'+
				'</table>'
	}, // End Box Tip
	{
		title: 'Box Note',
		image: 'template_box_note.png',
		description: 'Add box note.',
		html:	'<table class="ArticleBoxFunction BoxNote" width="100%" border="0" cellspacing="2" cellpadding="2">'+
				'<tr>'+
				'<td>Text của bạn sẽ nằm ở đây...</td>'+
				'</tr>'+
				'</table>'
	}, // End Box Note
	{
		title: 'Box Info',
		image: 'template_box_info.png',
		description: 'Add box info.',
		html:	'<table class="ArticleBoxFunction BoxInfo" width="100%" border="0" cellspacing="2" cellpadding="2">'+
				'<tr>'+
				'<td>Text của bạn sẽ nằm ở đây...</td>'+
				'</tr>'+
				'</table>'
	}, // End Box Info
	{
		title: 'Box Warning',
		image: 'template_box_warning.png',
		description: 'Add box warning.',
		html:	'<table class="ArticleBoxFunction BoxWarning" width="100%" border="0" cellspacing="2" cellpadding="2">'+
				'<tr>'+
				'<td>Text của bạn sẽ nằm ở đây...</td>'+
				'</tr>'+
				'</table>'
	}, // End Box Warning
	//////////////////////////////////////////////////////////////////////////////////
	{
		title: 'Article For Lab Template',
		image: 'template_article_lab.png',
		description: 'Article for lab template with all item.',
		html:	'<h3>1) Giới thiệu (What is it?)</h3>'+
				'<p>&nbsp;</p>'+
				'<h3>2) Đặc điểm (Features)</h3>'+
				'<p>&nbsp;</p>'+
				'<h3>3) Screenshot</h3>'+
				'<p>&nbsp;</p>'+
				'<h3>4) Bản quyền / Tải xuống (License / Download)</h3>'+
				'<p>xxxx là một phần mềm hoàn toàn miễn phí, được cung cấp bởi I-Designer.net toàn bộ tài liệu hỗ trợ được chúng tôi cập nhật tài trang web này. Chúng tôi không có nghĩa vụ bảo hành, hay bồi thường thiệt hại do bạn sử dụng phần mềm này. Chúng tôi đảm bảo 100% là phần mềm không kèm theo mã độc, virus hay trojan.</p>'+
				'<p>Nếu bạn yêu thích sản phẩm này có thể tải về và sử dụng cho mọi mục đích của mình. Nếu bạn thấy hài lòng và muốn ủng hổ chúng tôi, để chúng tôi có thể trả tiền Host và cập nhật thêm nhiều hơn tiện ích hay. Xin hãy ủng hộ bằng cách bấm vào nút Donate bên dưới.</p>'+
				'<p><a href="#" class="BtnDownload"><span>Download ver.1.0.0</span></a></p>'+
				'<h3>5) Ủng hộ I-Designer (Donate)</h3>'+
				'<p>1 USD Ủng hộ của bạn sẽ giúp cho i-designer có thể trả tiền hosting để duy trì hoạt động. Và giúp cho những lập trình viên của chúng tôi có thêm một cốc Coca cho niềm say mê của mình. Xin chân thành cảm ơn !.</p>'+
				'<div class="DonateForm">'+
				'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'+
				'<input type="hidden" name="cmd" value="_s-xclick">'+
				'<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">'+
				'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" id="BtnDonate">'+
				'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'+
				'</form>'+
				'</div><!-- / end DonateForm -->'+
				'<h3>6) Hướng dẫn cài đặt (Setup Instructions)</h3>'+
				'<p>&nbsp;</p>'+
				'<h3>7) Ví dụ mẫu (Examples)</h3>'+
				'<p>&nbsp;</p>'+
				'<h3>8) Tài liệu (Documentation)</h3>'+
				'<p>&nbsp;</p>'+
				'<h3>9) Hỗ trợ (Support)</h3>'+
				'<p>Nếu bạn có câu hỏi cần hỗ trợ về sản phẩm, xin hãy sử dụng ô Comment của Facebook ở bên dưới. Hoặc gửi về hòm mail <a href="mailto:support@i-designer.net">support@i-designer.net</a> hoặc <a href="mailto:tuanquynh0508@gmail.com">tuanquynh0508@gmail.com</a>.</p>'+
				'<p>&nbsp;</p>'
	}, // End Box Article Lab Template
	//////////////////////////////////////////////////////////////////////////////////
		{
		title: 'Image and Title',
		image: 'template1.png',
		description: 'One main image with a title and text that surround the image.',
		html: '<h3>' +
			'<img style="margin-right: 10px" height="100" width="100" align="left"/>' +
			'Type the title here' +
			'</h3>' +
			'<p>' +
			'Type the text here' +
			'</p>'
	},
		{
		title: 'Strange Template',
		image: 'template2.png',
		description: 'A template that defines two colums, each one with a title, and some text.',
		html: '<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
			'<tr>' +
				'<td style="width:50%">' +
					'<h3>Title 1</h3>' +
				'</td>' +
				'<td></td>' +
				'<td style="width:50%">' +
					'<h3>Title 2</h3>' +
				'</td>' +
			'</tr>' +
			'<tr>' +
				'<td>' +
					'Text 1' +
				'</td>' +
				'<td></td>' +
				'<td>' +
					'Text 2' +
				'</td>' +
			'</tr>' +
			'</table>' +
			'<p>' +
			'More text goes here.' +
			'</p>'
	},
		{
		title: 'Text and Table',
		image: 'template3.png',
		description: 'A title with some text and a table.',
		html: '<div style="width: 80%">' +
			'<h3>' +
				'Title goes here' +
			'</h3>' +
			'<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
				'<caption style="border:solid 1px black">' +
					'<strong>Table title</strong>' +
				'</caption>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
				'<tr>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
					'<td>&nbsp;</td>' +
				'</tr>' +
			'</table>' +
			'<p>' +
				'Type the text here' +
			'</p>' +
			'</div>'
	}
	]
});
