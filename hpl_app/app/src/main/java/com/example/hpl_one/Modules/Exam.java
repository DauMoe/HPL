package com.example.hpl_one.Modules;

public class Exam {
    private int id, num_easy, num_medium, num_hard, time_exam;
    private String name;

    public Exam() {
    }

    public Exam(int id, int num_easy, int num_medium, int num_hard, int time_exam, String name) {
        this.id = id;
        this.num_easy = num_easy;
        this.num_medium = num_medium;
        this.num_hard = num_hard;
        this.time_exam = time_exam;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNum_easy() {
        return num_easy;
    }

    public void setNum_easy(int num_easy) {
        this.num_easy = num_easy;
    }

    public int getNum_medium() {
        return num_medium;
    }

    public void setNum_medium(int num_medium) {
        this.num_medium = num_medium;
    }

    public int getNum_hard() {
        return num_hard;
    }

    public void setNum_hard(int num_hard) {
        this.num_hard = num_hard;
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
