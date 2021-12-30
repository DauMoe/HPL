package com.example.hpl_one.Modules;

public class QuickTest {
    private int ID;
    private String question, question_path, ans_a, ans_a_path, ans_b, ans_b_path, ans_c, ans_c_path, ans_d, ans_d_path, correct_ans, user_ans;
    private int SelectedAnsPos;
    private boolean AnsA, AnsB, AnsC, AnsD;

    public QuickTest() {
    }

    public QuickTest(int ID, String question, String question_path, String ans_a, String ans_a_path, String ans_b, String ans_b_path, String ans_c, String ans_c_path, String ans_d, String ans_d_path, String correct_ans, String user_ans, int selectedAnsPos, boolean ansA, boolean ansB, boolean ansC, boolean ansD) {
        this.ID = ID;
        this.question = question;
        this.question_path = question_path;
        this.ans_a = ans_a;
        this.ans_a_path = ans_a_path;
        this.ans_b = ans_b;
        this.ans_b_path = ans_b_path;
        this.ans_c = ans_c;
        this.ans_c_path = ans_c_path;
        this.ans_d = ans_d;
        this.ans_d_path = ans_d_path;
        this.correct_ans = correct_ans;
        this.user_ans = user_ans;
        SelectedAnsPos = selectedAnsPos;
        AnsA = ansA;
        AnsB = ansB;
        AnsC = ansC;
        AnsD = ansD;
    }

    public void setAnsA(boolean ansA) {
        AnsA = ansA;
        if (AnsA) {
            setUser_ans("A");
            setAnsB(false);
            setAnsC(false);
            setAnsD(false);
        }
    }

    public boolean isAnsB() {
        return AnsB;
    }

    public void setAnsB(boolean ansB) {
        AnsB = ansB;
        if (AnsB) {
            setUser_ans("B");
            setAnsA(false);
            setAnsC(false);
            setAnsD(false);
        }
    }

    public boolean isAnsC() {
        return AnsC;
    }

    public void setAnsC(boolean ansC) {
        AnsC = ansC;
        if (AnsC) {
            setUser_ans("C");
            setAnsB(false);
            setAnsA(false);
            setAnsD(false);
        }
    }

    public boolean isAnsD() {
        return AnsD;
    }

    public void setAnsD(boolean ansD) {
        AnsD = ansD;
        if (AnsD) {
            setUser_ans("D");
            setAnsB(false);
            setAnsC(false);
            setAnsA(false);
        }
    }

    public int getSelectedAnsPos() {
        return SelectedAnsPos;
    }

    public void setSelectedAnsPos(int selectedAnsPos) {
        SelectedAnsPos = selectedAnsPos;
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

    public String getQuestion_path() {
        return question_path;
    }

    public void setQuestion_path(String question_path) {
        this.question_path = question_path;
    }

    public String getAns_a() {
        return ans_a;
    }

    public void setAns_a(String ans_a) {
        this.ans_a = ans_a;
    }

    public String getAns_a_path() {
        return ans_a_path;
    }

    public void setAns_a_path(String ans_a_path) {
        this.ans_a_path = ans_a_path;
    }

    public String getAns_b() {
        return ans_b;
    }

    public void setAns_b(String ans_b) {
        this.ans_b = ans_b;
    }

    public String getAns_b_path() {
        return ans_b_path;
    }

    public void setAns_b_path(String ans_b_path) {
        this.ans_b_path = ans_b_path;
    }

    public String getAns_c() {
        return ans_c;
    }

    public void setAns_c(String ans_c) {
        this.ans_c = ans_c;
    }

    public String getAns_c_path() {
        return ans_c_path;
    }

    public void setAns_c_path(String ans_c_path) {
        this.ans_c_path = ans_c_path;
    }

    public String getAns_d() {
        return ans_d;
    }

    public void setAns_d(String ans_d) {
        this.ans_d = ans_d;
    }

    public String getAns_d_path() {
        return ans_d_path;
    }

    public void setAns_d_path(String ans_d_path) {
        this.ans_d_path = ans_d_path;
    }

    public String getCorrect_ans() {
        return correct_ans;
    }

    public void setCorrect_ans(String correct_ans) {
        this.correct_ans = correct_ans;
    }

    public String getUser_ans() {
        return user_ans;
    }

    public void setUser_ans(String user_ans) {
        this.user_ans = user_ans;
    }

    public boolean isAnsA() {
        return AnsA;
    }
}
