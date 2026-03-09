var rule = {
  "title": "黄色仓库",
  "host": "https://hsck1.25img.com",
  "url": "/?type=fyclass&p=fypage",
  "searchUrl": "",
  "searchable": 2,
  "quickSearch": 0,
  "filterable": 0,
  "filter": "",
  "filter_url": "",
  "filter_def": {},
  "headers": {
    "User-Agent": "MOBILE_UA"
  },
  "timeout": 5000,
  "class_parse": ".stui-pannel__menu li;a--span&&Text;a&&href;type=(.*?)(&p=1)",
  "cate_exclude": "澳门新葡京",
  "play_parse": true,
  "lazy": "",
  "double": true,
  "推荐": ".stui-pannel-bd;*;a&&title;a&&data-original;h4&&a&&Text;a&&href;h4&&a&&Text",
  "一级": ".stui-pannel-bd li;a&&title;a&&data-original;h4&&a&&Text;a&&href;h4&&a&&Text",
  "二级": {
    "title": ".stui-pannel.clearfix:eq(1) div&&h3&&Text;vod_type",
    "img": ".stui-pannel.clearfix:eq(1) img&&alt",
    "desc": "主要信息;年代;地区;演员;导演",
    "content": "简介",
    "tabs": "",
    "lists": ".stui-pannel.clearfix:eq(1) div:eq(2)",
    "tab_text": "body&&Text",
    "list_text": "body&&Text",
    "list_url": "img&&src"
  },
  "搜索": "列表;标题;图片;描述;链接;详情"
}