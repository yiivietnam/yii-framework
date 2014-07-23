<?php
/**
 * TuanQuynh Ckeditor Widget
 * Ckeditor Widget for Yii Framework
 *
 * @package 
 * @category Component
 * @author Nguyen Nhu Tuan <tuanquynh0508@gmail.com>
 * @copyright
 * @version 1.0.0
 * @link 
 */
echo CHtml::activeTextArea($model, $attribute, $htmlOptions);
?>
<script>
CKEDITOR.replace("<?php echo $htmlOptions['id']; ?>",{
	toolbar : "<?php echo $toolbar; ?>",
	width: "<?php echo $width; ?>",
	height: "<?php echo $height; ?>",
	language: "<?php echo Yii::app()->language; ?>"
});
</script>