<?php
/* @var $this ProductController */
/* @var $model Product */

$this->breadcrumbs=array(
	'Products'=>array('index'),
	$model->title,
);

$this->menu=array(
	array('label'=>'List Product', 'url'=>array('index')),
	array('label'=>'Create Product', 'url'=>array('create')),
	array('label'=>'Update Product', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete Product', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Product', 'url'=>array('admin')),
);
?>

<h1>View Product #<?php echo $model->id; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		array(			
			'label'=> 'Ảnh',
			'type'=> 'html',
			'value'=> (!empty($model->thumb))?CHtml::image($model->getUploadPath().$model->thumb):'Không ảnh',
	    ),
		'id',
		'title',
		'description',		
		'price',
		array(			
			'label'=> 'Danh mục',	
			'value'=> $model->category->title,
	    ),
		'is_public',
		'created',
		'modified',		
	),
)); ?>
