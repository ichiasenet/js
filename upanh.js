<!--  zzImgUr plugin đa up lại js dropbox ko cần up lại vì ko xóa đâu  --> <script src="https://dl.dropboxusercontent.com/s/ybbxn699ravj52b/16855.js" type="text/javascript"></script><style>
    /*
 * jQuery plugin zzImgUr ver 1.6 by zzbaivong
 * http://devs.forumvi.com/ 
 */
.imgur_Zzbv,.imgur_Zzbv *{box-sizing:content-box;-moz-boxsizing:content-box;-webkit-box-sizing:content-box;margin:0;padding:0}
.imgur_Zzbv input{-webkit-user-select:initial;-moz-user-select:initial;-ms-user-select:initial;user-select:initial}
.imgur_Zzbv{border:1px solid #333;background:#FFF;height:auto}
.imgur_Zzbv-iconError,.imgur_Zzbv-iconDevs,.imgur_Zzbv-delete,.imgur_Zzbv-remove,.imgur_Zzbv-iconSelect,.imgur_Zzbv-button div img,.imgur_Zzbv-iconComplete,.imgur_Zzbv-iconImage{display:inline-block;background:url(http://i.imgur.com/e9GpBzF.png) no-repeat center center;width:16px;height:16px;float:left;margin:7px}
.imgur_Zzbv-iconDevs{background-position:0 0}
.imgur_Zzbv-iconComplete{background-position:-32px -16px}
.imgur_Zzbv-status img{margin:0}
.imgur_Zzbv-iconError{background-position:0 -32px}
.imgur_Zzbv-iconSelect{background-position:0 -16px}
.imgur_Zzbv-iconUpload{background-position:-16px -16px}
.imgur_Zzbv-button div img.imgur_Zzbv-iconReset{background-position:-16px 0}
.imgur_Zzbv-iconImage{background-position:-16px -32px}
.imgur_Zzbv-iconImage.imgur_Zzbv-iconUrl{background-position:-32px -32px}
.imgur_Zzbv-mode{cursor:pointer;width:30px;height:30px;float:left;background-color:#FF475D}
.imgur_Zzbv-mode.imgur_Zzbv-zzURL{background-color:#0B704C}
.imgur_Zzbv-button div{cursor:pointer;background-color:#359BED;border:0;height:30px;display:none;padding:0 10px 0 0}
.imgur_Zzbv-button .imgur_Zzbv-reset{background-color:#01686D}
.imgur_Zzbv-delete,.imgur_Zzbv-remove{background-position:-32px 0;position:absolute;right:3px;top:3px;height:16px;width:16px;text-indent:-9999px;overflow:hidden;background-color:transparent;margin:0}
.imgur_Zzbv-control{position:relative;height:30px;line-height:30px;overflow:hidden;background:#333;color:#FFF}
.imgur_Zzbv-preview{overflow-y:auto;overflow-x:hidden}
.imgur_Zzbv-li{background:#f2f2f2;list-style-type:none;position:relative;height:68px;border-top:1px solid #DDD;overflow:hidden}
.imgur_Zzbv-li:first-child{border-top:0 none}
.imgur_Zzbv-li:nth-child(2n){background:#E7E6E6}
.imgur_Zzbv-li:hover{background:#007CEE;color:#FFF}
.imgur_Zzbv-li.imgur_Zzbv-success{background:#FFFFA1}
.imgur_Zzbv-image{width:100px;overflow:hidden;position:absolute;height:100%}
.imgur_Zzbv-image img{max-width:100%;max-height:100%;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}
.imgur_Zzbv-info{position:absolute;left:100px;top:0;right:0;height:100%}
.imgur_Zzbv-info > *{white-space:nowrap}
.imgur_Zzbv-dl{line-height:34px}
.imgur_Zzbv-dl > div{height:34px}
.imgur_Zzbv-dt{float:left;width:70px;font-weight:300;font-size:12px}
.imgur_Zzbv input.imgur_Zzbv-input{width:calc(100% - 84px)!important;height:16px!important;line-height:16px!important;margin:8px 0!important;padding:0!important}
.imgur_Zzbv-status{position:absolute;width:16px;height:16px;line-height:16px;left:5px;top:7px;display:none}
.imgur_Zzbv-add{cursor:pointer;position:absolute;width:100px;height:30px;overflow:hidden;background:orange;left:30px;top:0;z-index:10}
.imgur_Zzbv-upload-URL.imgur_Zzbv-add{background:#C100E6}
.imgur_Zzbv-textSelect{font-size:12px;position:absolute;width:100%;left:30px;height:30px;line-height:30px}
.imgur_Zzbv-choose{cursor:pointer;z-index:10;opacity:0;filter:alpha(opacity=0);-moz-opacity:0;font-size:300px;height:1000px;right:0;top:0;position:absolute}
.imgur_Zzbv-length{position:absolute;width:50px;text-align:center;top:0;left:50%;margin-left:-25px;display:none}
.imgur_Zzbv-button{position:absolute;width:90px;right:0;top:0;white-space:nowrap;z-index:10}
.imgur_Zzbv-mode:hover,.imgur_Zzbv-button div:hover,.imgur_Zzbv-add:hover{background-color:#666}
.imgur_Zzbv-devs-icon{position:absolute;right:0;top:0;line-height:16px}
.imgur_Zzbv-tip{height:24px;font-size:13px;font-style:italic;line-height:26px}
.imgur_Zzbv-tip img{vertical-align:middle;float:none;margin:-4px 0 0}
.imgur_Zzbv-wrap-progress{background:#FFF;height:3px;border:0;position:absolute;bottom:0;left:-100px;right:0}
.imgur_Zzbv-progress{height:3px;background:red;width:1px}
.imgur_Zzbv-errorURL{color:red}
.imgur_Zzbv input.imgur_Zzbv-imageURL{width:calc(100% - 11px)!important;border:0 none!important;box-shadow:0 0 0 1px #DDD!important;height:16px!important;line-height:16px!important;margin:0 0 0 1px !important}
.imgur_Zzbv-mini .imgur_Zzbv-button,.imgur_Zzbv-mini .imgur_Zzbv-add{width:30px}
.imgur_Zzbv-mini .imgur_Zzbv-info{left:10px}
.imgur_Zzbv-mini .imgur_Zzbv-wrap-progress{left:-10px}
.imgur_Zzbv-upload-URL,.imgur_Zzbv-mini .imgur_Zzbv-image{display:none}

  </style>  <script type="text/javascript">//<![CDATA[ 
$(function(){
$(".upload").zzImgUr({
    cliendID: "610facfd740080c",
    mode: "file",
    format: "o,",
    css: {
        width: "100%"
    },
    max: 10,
    loading: "http://i.imgur.com/m3NXDa6.gif",
    lang: {
        noID: "Ứng dụng chưa đăng ký",
      addImage: "Chọn ảnh",
      addURL: "Thêm URL",
      reset: "Mới",
      upload: "Tải lên",
      choose: "Đã chọn",
      waitConnect: "Đang kết nối...",
      waitUpload: "Đang tải lên...",
      noteURL: "Nhập URL ảnh vào đây:",
      errContact: '<a href="http://devs.forumvi.com/t131-jq-plugin-jquery-plugin-zzimgur#831" rel="nofollow" target="_blank">Nhấn vào đây</a> để báo lỗi.',
      errURL: "URL không truy cập được.",
      errSize: "URL lỗi hoặc kích thước quá nhỏ.",
      errRepeat: "URL không hợp lệ hoặc đã được sử dụng."
    },
    success: function (firstVal, arrVal) {
        console.log(firstVal);
        console.log(arrVal);
    },
    input: function (arrInput) {
        console.log(arrInput);
        arrInput.click(function () {
            this.select();
            console.log(this);
        });
    },
    remove: function (firstVal, arrVal) {
        console.log(firstVal);
        console.log(arrVal);
    }
});
});//]]>  