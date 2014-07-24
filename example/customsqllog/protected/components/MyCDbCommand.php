<?php
class MyCDbCommand extends CDbCommand {
	public $myParam=array();
	
	public function addLog() {
		$params = array_merge($this->params,$this->myParam);
		$sql = $this->getText();
		if(!empty($params)) {
			foreach ($params as $key => $value) {
				$sql = str_replace($key, $value, $sql);
			}
		}
		$sql = preg_replace("/\r\n|\n\r|\r|\n/",' ',$sql);
		Yii::log($sql, 'sqltrace', 'system.db.CDbCommand');
		//return $this;
	}
	
	public function bindValues($values)
	{		
		foreach($values as $name=>$value)
		{			
			$this->myParam[$name]=$value;
		}
		return parent::bindValues($values);
	}
	
	public function bindValue($name, $value, $dataType=null)
	{
		$this->myParam[$name]=$value;
		return parent::bindValue($name, $value, $dataType);
	}
	
	public function query($params=array())
	{
		$this->addLog();
		return parent::query($params);
	}
	
	public function queryAll($fetchAssociative=true,$params=array())
	{
		$this->addLog();
		return parent::queryAll($fetchAssociative,$params);
	}
	
	public function queryColumn($params=array())
	{
		$this->addLog();
		return parent::queryColumn($params);
	}
	
	public function queryRow($fetchAssociative=true,$params=array())
	{
		$this->addLog();
		return parent::queryRow($fetchAssociative,$params);
	}
	
	public function queryScalar($params=array())
	{
		$this->addLog();
		return parent::queryScalar($params);
	}
}