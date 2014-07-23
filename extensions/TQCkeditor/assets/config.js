/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,list,indent,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,htmlwriter,horizontalrule,iframe,wysiwygarea,image,smiley,justify,link,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,syntaxhighlight,tableresize';
	config.skin = 'moono';
	// %REMOVE_END%	
	
	config.language = 'vi';
	//config.uiColor = '#6DA6D1';
	config.toolbar = 'Full';
	
	//config.htmlEncodeOutput = true;
	//config.entities = false;	
	config.extraAllowedContent = 'code';
	
	//config.filebrowserBrowseUrl = 'JASFinder/index.html';
	//config.filebrowserBrowseUrl = 'kcfinder/browse.php?type=files';
	//config.filebrowserImageBrowseUrl = 'kcfinder/browse.php?type=images';
	//config.filebrowserFlashBrowseUrl = 'kcfinder/browse.php?type=flash';
	//config.filebrowserUploadUrl = 'kcfinder/upload.php?type=files';
	//config.filebrowserImageUploadUrl = 'kcfinder/upload.php?type=images';
	//config.filebrowserFlashUploadUrl = 'kcfinder/upload.php?type=flash';
	
	//Allow Tags
	//config.ProtectedTags = 'html|head|body';
	config.protectedSource.push(/<\?[\s\S]*?\?>/g); // PHP Code
	config.protectedSource.push(/<code>[\s\S]*?<\/code>/gi); // Code tags
	config.protectedSource.push(/<pre>[\s\S]*?<\/pre>/gi); // Pre tags
	config.protectedSource.push(/<style[\s\S]*?\/style>/gi); // Style tags
	config.protectedSource.push(/<form[\s\S]*?\/form>/gi); // Form tags
	config.protectedSource.push(/<imput[\s\S]*?>/gi); // Style tags
	//config.ProtectedSource.Add(/<object[\s|\S]+?<\/object>/gi); // Object tags
	/*config.protectedSource.push( /<%[\s\S]*?%>/g );   // ASP Code
	config.protectedSource.push( /(]+>[\s|\S]*?<\/asp:[^\>]+>)|(]+\/>)/gi );   // ASP.Net Code*/
	
	config.toolbar_Full =
	[
		{ name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
		{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
		{ name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 
			'HiddenField' ] },
		'/',
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
		{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
		{ name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
		'/',
		{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
	];
	
	config.toolbar_Standar  =
	[
		{ name: 'document', items : [ 'Source','-','Preview','Print','-','Templates' ] },
		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
		{ name: 'editing', items : [ 'Find','Replace','-','SelectAll' ] },		
		{ name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
		{ name: 'develop', items: [ 'Syntaxhighlight' ] },
		'/',
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
		{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },		
		'/',
		{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
	];
	
	config.toolbar_Basic =
	[
		['Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About']
	];
	
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
