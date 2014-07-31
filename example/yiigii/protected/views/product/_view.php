<?php
/* @var $this ProductController */
/* @var $data Product */
?>

<div class="view">
	
	<?php if(!empty($data->thumb)): ?>
		<p><?php echo CHtml::image($data->getUploadPath().$data->thumb,'',array('height'=>100)); ?></p>
	<?php endif; ?>
	<p>
		<strong><?php echo CHtml::encode($data->title); ?></strong><br/>
		<?php echo CHtml::encode($data->getAttributeLabel('price')); ?>:
		<?php echo CHtml::encode($data->price); ?><br/>
		<?php echo CHtml::link('Chi tiết sản phẩm', array('view', 'id'=>$data->id)); ?>
	</p>

</div>