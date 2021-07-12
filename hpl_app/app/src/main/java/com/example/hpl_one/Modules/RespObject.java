package com.example.hpl_one.Modules;

import java.util.ArrayList;

public class RespObject {
    private int time, total;
    private ArrayList<?> msg;

    public RespObject(int time, int total, ArrayList<?> msg) {
        this.time = time;
        this.total = total;
        this.msg = msg;
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
