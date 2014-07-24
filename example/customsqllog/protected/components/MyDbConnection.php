<?php
class MyDbConnection extends CDbConnection {
	
	/*public function __construct() {
		echo "xxxx";
		parent::__construct();		
	}*/

	public function createCommand($query=null)
	{
		$this->setActive(true);
		return new MyCDbCommand($this,$query);
	}
	
}
