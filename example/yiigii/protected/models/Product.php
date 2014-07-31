<?php

/**
 * This is the model class for table "tbl_product".
 *
 * The followings are the available columns in table 'tbl_product':
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $thumb
 * @property double $price
 * @property integer $is_public
 * @property string $created
 * @property string $modified
 * @property integer $del_flg
 * @property integer $category_id
 *
 * The followings are the available model relations:
 * @property Category $category
 */
class Product extends CActiveRecord
{
	public $thumb_delete;
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'tbl_product';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('title, category_id', 'required'),
			array('thumb_delete, is_public, del_flg, category_id', 'numerical', 'integerOnly'=>true),
			array('price', 'numerical'),
			array('title, thumb', 'length', 'max'=>255),
			array('thumb_delete, description, created, modified', 'safe'),
			array('thumb', 'file',
				'allowEmpty' => true,
				'safe' => true,
				'enableClientValidation' => true,
				'types'=>'jpg, jpe, jpeg, gif, png, bmp',					
				//'wrongType' => Yii::t('global','Chỉ hỗ trợ nhập ảnh (jpg, jpe, jpeg, gif, png, bmp)'),
				'maxSize' => 2*1024*1024, //2MB
				//'tooLarge' => Yii::t('global','File có dung lượng lớn quá.'),
			),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('id, title, description, thumb, price, is_public, created, modified, del_flg, category_id', 'safe', 'on'=>'search'),
			array('modified','default', 'value'=>new CDbExpression('NOW()'), 'setOnEmpty'=>false,'on'=>'update'),
            array('created,modified','default', 'value'=>new CDbExpression('NOW()'), 'setOnEmpty'=>false,'on'=>'insert'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'category' => array(self::BELONGS_TO, 'Category', 'category_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'Mã',
			'title' => 'Tiêu đề',
			'description' => 'Chú thích',
			'thumb' => 'Ảnh',
			'price' => 'Giá',
			'is_public' => 'Trạng thái',
			'created' => 'Ngày tạo',
			'modified' => 'Cập nhật',
			'del_flg' => 'Xóa',
			'category_id' => 'Category',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('description',$this->description,true);
		$criteria->compare('thumb',$this->thumb,true);
		$criteria->compare('price',$this->price);
		$criteria->compare('is_public',$this->is_public);
		$criteria->compare('created',$this->created,true);
		$criteria->compare('modified',$this->modified,true);
		$criteria->compare('del_flg',$this->del_flg);
		$criteria->compare('category_id',$this->category_id);
		
		$criteria->addInCondition('del_flg',array(0),'AND');
		$criteria->order = 'created DESC';
		
		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Product the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
	
	public function delete() {
		$this->del_flg = 1;
        $this->modified = new CDbExpression('NOW()');
        return $this->update();        
	}
	
	public function getUploadDir() {
		return YiiBase::getPathOfAlias('webroot').'/uploads/';
	}
	
	public function getUploadPath() {
		return Yii::app()->request->baseUrl.'/uploads/';
	}
}
