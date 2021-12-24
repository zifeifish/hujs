/*************************************************************************
 * @file：libs/utils.ts
 * @summary：常用的一些工具函数
 * @version: 1.0
 * *************************************************************************
 * revision             author            reason             date
 * 1.0                HuCongying           init           2021-12-24
 ***************************************************************************/

class Utils {
    /**
     * 深拷贝方法
     * @param target 待拷贝对象
     */
    static deepClone(target:any){
       if(!(typeof target == 'object')){
           return target
       }
       const copy = Array.isArray(target)?[]:{}
       Object.keys(target).forEach((key:any)=>{
           if(
               typeof target[key] === 'object' &&
               Object.prototype.toString.call(target[key])!=="[object Date]"){
               Utils.deepClone(target[key])
           } else {
               copy[key] = target[key]
           }
       })
        return copy
    }
}
