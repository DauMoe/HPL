package com.example.hpl_one.Modules;

import java.util.ArrayList;

public class RespObject {
    private int time, total, code;
    private ArrayList<?> msg;

    public RespObject(int time, int total, int code, ArrayList<?> msg) {
        this.time = time;
        this.total = total;
        this.code = code;
        this.msg = msg;
    }

    public RespObject() {
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public ArrayList<?> getMsg() {
        return msg;
    }

    public void setMsg(ArrayList<?> msg) {
        this.msg = msg;
    }
}
