package com.example.hpl_one.Modules;

public class Question {
    private int ID;
    private String question, ans_a, ans_b, ans_c, ans_d, correct, question_path, ans_path;

    public Question() {

    }

    public Question(int ID, String question, String ans_a, String ans_b, String ans_c, String ans_d, String correct, String question_path, String ans_path) {
        this.ID = ID;
        this.question = question;
        this.ans_a = ans_a;
        this.ans_b = ans_b;
        this.ans_c = ans_c;
        this.ans_d = ans_d;
        this.correct = correct;
        this.question_path = question_path;
        this.ans_path = ans_path;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAns_a() {
        return ans_a;
    }

    public void setAns_a(String ans_a) {
        this.ans_a = ans_a;
    }

    public String getAns_b() {
        return ans_b;
    }

    public void setAns_b(String ans_b) {
        this.ans_b = ans_b;
    }

    public String getAns_c() {
        return ans_c;
    }

    public void setAns_c(String ans_c) {
        this.ans_c = ans_c;
    }

    public String getAns_d() {
        return ans_d;
    }

    public void setAns_d(String ans_d) {
        this.ans_d = ans_d;
    }

    public String getCorrect() {
        return correct;
    }

    public void setCorrect(String correct) {
        this.correct = correct;
    }

    public String getQuestion_path() {
        return question_path;
    }

    public void setQuestion_path(String question_path) {
        this.question_path = question_path;
    }

    public String getAns_path() {
        return ans_path;
    }

    public void setAns_path(String ans_path) {
        this.ans_path = ans_path;
    }
}
