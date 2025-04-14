package com.sao_InformationalWeb.httpserver.dataconfig;

import java.io.Serializable;

public class DataConfig implements Serializable {
    /*
    * sex: '男',
    isage: 412,
    isemail: '12@xx.com',
    istel: 13680434899,
    acg: "接触过"
    interest: [ '刀剑神域IF' ],
    istextarea: '1324',
    * */
    private String sex;//性别
    private int isage;//年龄
    private String isemail;//邮箱
    private String istel;//电话
    private String acg ;//是否接触过ACG
    private String[] interests;//看过或听过系列中哪些动漫或游戏
    private String istextarea;//对网页有什么改进或建议

    public DataConfig(String sex, int isage, String isemail, String istel, String acg, String[] interests, String istextarea) {
        this.sex = sex;
        this.isage = isage;
        this.isemail = isemail;
        this.istel = istel;
        this.acg = acg;
        this.interests = interests;
        this.istextarea = istextarea;
    }

    public String getSex() {
        return sex;
    }

    public int getIsage() {
        return isage;
    }


    public String getIsemail() {
        return isemail;
    }


    public String getIstel() {
        return istel;
    }


    public String getAcg() {
        return acg;
    }


    public String[] getInterests() {
            return interests;
    }


    public String getIstextarea() {
        return istextarea;
    }

}
