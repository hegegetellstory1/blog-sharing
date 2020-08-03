     /**
     * 处理前端分页
     * @param {Array} data 数据数组
     * @param {Object} param 传入参数
     * @returns {Promise} 返回Promise对象
     */

   getPageList(data, param) {
       let total = 0;
       let datas = [];
       if (Array.isArray(data)) {
           total = data.length;
           let start = (param.pageNum - 1) * param.pageSize;
           if (start >= total) start = 0;
           let end = param.pageNum * param.pageSize;
           if (end >= total) end = data.length;
      //截取数组的起始位置和 结束位置  不包括 结束位置
           datas = data.slice(start, end);
           return {
               total: total,
               datas: datas
           };
       }
   }


//     传入的param 对象 param= {
//       pageSize: 20,
//        pageNum: 1 //当前页
// }
// data = ['1','2','3','4']