package com.example.hpl_one.Modules;

public class QuickTest {
    private int ID;
    private String question, question_path, ans_a, ans_b, ans_c, ans_d, correct_ans, user_ans, ans_path;
    private int SelectedAnsPos;
    private boolean AnsA, AnsB, AnsC, AnsD;

    public QuickTest() {
    }

    public QuickTest(int ID, String question, String question_path, String ans_a, String ans_b, String ans_c, String ans_d, String correct_ans, String user_ans, String ans_path, int selectedAnsPos, boolean ansA, boolean ansB, boolean ansC, boolean ansD) {
        this.ID = ID;
        this.question = question;
        this.question_path = question_path;
        this.ans_a = ans_a;
        this.ans_b = ans_b;
        this.ans_c = ans_c;
        this.ans_d = ans_d;
        this.correct_ans = correct_ans;
        this.user_ans = user_ans;
        this.ans_path = ans_path;
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

    public String getAns_path() {
        return ans_path;
    }

    public void setAns_path(String ans_path) {
        this.ans_path = ans_path;
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
