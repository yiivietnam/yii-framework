(function () {
    Utility = {
        
		Slugify: function (str) {
			tmp = Utility.TrimStr(str);
			tmp = Utility.ReplaceAll(tmp,' ','-');
			tmp = Utility.ReplaceAll(tmp,'_','-');
			tmp = tmp.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/gi, 'a');
			tmp = tmp.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/gi, 'e');
			tmp = tmp.replace(/(ì|í|ị|ỉ|ĩ)/gi, 'i');
			tmp = tmp.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/gi, 'o');
			tmp = tmp.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/gi, 'u');
			tmp = tmp.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/gi, 'y');
			tmp = tmp.replace(/(đ)/gi, 'd');
			tmp = tmp.replace(/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/gi, 'A');
			tmp = tmp.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/gi, 'E');
			tmp = tmp.replace(/(Ì|Í|Ị|Ỉ|Ĩ)/gi, 'I');
			tmp = tmp.replace(/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/gi, 'O');
			tmp = tmp.replace(/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/gi, 'U');
			tmp = tmp.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/gi, 'Y');
			tmp = tmp.replace(/(Đ)/gi, 'D');
			tmp = tmp.replace(/(%|\!|`|\.|'|"|&|@|\^|=|\+|\:|,|{|}|\?|\\|\/|quot;)/gi, '');
			tmp = tmp.toLowerCase();
			return tmp;
		},
		
		TrimStr: function (str) {
            return str.replace(/^\s+|\s+$/g, "");
        }, // End TrimStr
		
		ReplaceAll: function (subject, str1, str2) {
            var re = new RegExp(str1, "gi");
            return subject.replace(re, str2);
        }
				
    }; //End Utility
})();