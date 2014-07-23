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
 * Usage:
	<?php $this->widget('application.extensions.TQCkeditor.TQCkeditorWidget',array(
		'model'=>$model,
		'attribute'=>'body',
		'width' => '100%',
		'height' => '375px',
 		'toolbar' => 'Standar',
		'htmlOptions' => array(					
			'id' => 'txtBody'
		)
	)); ?>
 */
class TQCkeditorWidget extends CInputWidget
{	
	public $height = '375px';
	public $width = '100%';
	public $toolbar = 'Standar';

	public function run()
	{
		parent::run();
		
		// Publish assets to public directory
        $baseDir = dirname(__FILE__);		
        $assets = Yii::app()->getAssetManager()->publish($baseDir.DIRECTORY_SEPARATOR.'assets');		
        $cs = Yii::app()->getClientScript();
        $cs->registerScriptFile($assets.'/ckeditor.js');
		
		if (!$this->hasModel() && !isset($this->name)) {
			throw new CHttpException(500,'Parameters "model" and "attribute" or "name" have to be set!');
		}		
		
		$this->render('TQCkeditorWidget',array(			
			'model'=>$this->model,
			'attribute'=>$this->attribute,
			'htmlOptions'=>$this->htmlOptions,
			'name'=>$this->name,
			'value'=>$this->value,
			'height'=>$this->height,
			'width'=>$this->width,
			'toolbar'=>$this->toolbar,			
		));
	}
}
?>
