TQ Ckeditor Widget
===============

Sử dụng TQCKeditor widget, sẽ giúp bạn tạo nhanh các trường cần làm việc với WYSIWYG Ckeditor. Cài đặt dễ dàng và nhanh chóng. Thật tiện lợi khi sử dụng trong dự của bạn. 


1. Hướng dẫn sử dụng
---------

### 1.1 Cài đặt
Copy TQCKeditor vào thư mục protected\extensions

### 1.2 Khai báo trong form
```
$this->widget('application.extensions.TQCkeditor.TQCkeditorWidget',array(
	'model'=>$model,
	'attribute'=>'example_field_name',
	'width' => '100%',
	'height' => '375px',
	'toolbar' => 'Standar', //Full | Standar | Basic
	'htmlOptions' => array(					
		'id' => 'ExampleFieldId'
	)
));
```

2. Cập nhật
---------


> **Ngày: 23/07/2014**
> - Khởi tạo dự án


