<?php
/**
 * Test Command
 *
 * @package 
 * @category Shell
 * @author Nguyen Nhu Tuan <tuanquynh0508@gmail.com>
 * @copyright
 * @version 1.0.0
 * @link 
 */
//export LD_LIBRARY_PATH=/app/php/ext
//bin/php www/protected/yiic.php test

class TestCommand extends CConsoleCommand
{
    public function run($args)
    {
      echo 'First cron job. Hello, world!. By Yii VietNam';
    }
}