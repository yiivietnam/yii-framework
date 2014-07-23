<?php
/**
 * Controller is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class Controller extends CController
{
	/**
	 * @var string the default layout for the controller view. Defaults to '//layouts/column1',
	 * meaning using a single column layout. See 'protected/views/layouts/column1.php'.
	 */
	public $layout='//layouts/column1';
	/**
	 * @var array context menu items. This property will be assigned to {@link CMenu::items}.
	 */
	public $menu=array();
	/**
	 * @var array the breadcrumbs of the current page. The value of this property will
	 * be assigned to {@link CBreadcrumbs::links}. Please refer to {@link CBreadcrumbs::links}
	 * for more details on how to specify this property.
	 */
	public $breadcrumbs=array();
	
	protected function renderJSON($data) {
       header('Content-type: application/json');
       echo CJSON::encode($data);

       foreach (Yii::app()->log->routes as $route) {
           if($route instanceof CWebLogRoute) {
               $route->enabled = false; // disable any weblogroutes
           }
       }
       Yii::app()->end();
   }
   
    /*public function filters() {
        return array('accessControl');
    }
    
    public function accessRules() {
        return array(
            array('allow',
                'users' => array('@'),
            ),
            array('deny', // deny all users
                'users' => array('*'),
            ),
        );
    }*/
	
	// Detected mobile
	/*
	public function init()
	{
		if (Yii::app()->mobileDetect->isMobile())
			$this->redirect(array('/mobile'));
		
		parent::init();
		
		$app = Yii::app();
		$app->name = Yii::t("global","Yii VietNam Blank Project");
		$app->theme = 'editor';
		$app->language = (!empty($app->user->language))?$app->user->language:'en';
		
	}*/
}