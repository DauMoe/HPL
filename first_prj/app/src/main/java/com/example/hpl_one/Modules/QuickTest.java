package com.example.hpl_one.Modules;

public class QuickTest {
    private int ID;
    private String ques, answer_a, answer_b, answer_c, answer_d, correct_ans, user_ans;
    private int SelectedAnsPos;
    private boolean AnsA, AnsB, AnsC, AnsD;

    public QuickTest(int ID, String ques, String answer_a, String answer_b, String answer_c, String answer_d, String correct_ans) {
        this.ID = ID;
        this.ques = ques;
        this.answer_a = answer_a;
        this.answer_b = answer_b;
        this.answer_c = answer_c;
        this.answer_d = answer_d;
        this.correct_ans = correct_ans;
        this.user_ans = "";
    }


    public boolean isAnsA() {
        return AnsA;
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

    public String getQues() {
        return ques;
    }

    public void setQues(String ques) {
        this.ques = ques;
    }

    public String getAnswer_a() {
        return answer_a;
    }

    public void setAnswer_a(String answer_a) {
        this.answer_a = answer_a;
    }

    public String getAnswer_b() {
        return answer_b;
    }

    public void setAnswer_b(String answer_b) {
        this.answer_b = answer_b;
    }

    public String getAnswer_c() {
        return answer_c;
    }

    public void setAnswer_c(String answer_c) {
        this.answer_c = answer_c;
    }

    public String getAnswer_d() {
        return answer_d;
    }

    public void setAnswer_d(String answer_d) {
        this.answer_d = answer_d;
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
}
