/*************************************************************************
 * @file：libs/string-utils.ts
 * @summary：一些有关字符串操作常用的工具函数
 * @version: 1.0
 * *************************************************************************
 * revision             author            reason             date
 * 1.0                HuCongying           init           2021-12-24
 ***************************************************************************/

class StringUtils {
    /**
     * 获取随机字符串,包含字母和数字
     */
    static getRandomUid():string{
        return Math.random().toString(36).substr(2)
    }
}
