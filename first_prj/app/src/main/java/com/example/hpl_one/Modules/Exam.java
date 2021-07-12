package com.example.hpl_one.Modules;

public class Exam {
    private int id, easy, medium, hard, total, time_exam;
    private String name;

    public Exam(int id, int easy, int medium, int hard, int total, int time_exam, String name) {
        this.id = id;
        this.easy = easy;
        this.medium = medium;
        this.hard = hard;
        this.total = total;
        this.time_exam = time_exam;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEasy() {
        return easy;
    }

    public void setEasy(int easy) {
        this.easy = easy;
    }

    public int getMedium() {
        return medium;
    }

    public void setMedium(int medium) {
        this.medium = medium;
    }

    public int getHard() {
        return hard;
    }

    public void setHard(int hard) {
        this.hard = hard;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getTime_exam() {
        return time_exam;
    }

    public void setTime_exam(int time_exam) {
        this.time_exam = time_exam;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
