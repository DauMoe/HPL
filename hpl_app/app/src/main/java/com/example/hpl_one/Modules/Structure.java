package com.example.hpl_one.Modules;

public class Structure {
    private String name_struct, structure_eng, mean_exam;
    private int id;

    public Structure() {
    }

    public Structure(String name_struct, String structure_eng, String mean_exam, int id) {
        this.name_struct = name_struct;
        this.structure_eng = structure_eng;
        this.mean_exam = mean_exam;
        this.id = id;
    }

    public String getName_struct() {
        return name_struct;
    }

    public void setName_struct(String name_struct) {
        this.name_struct = name_struct;
    }

    public String getStructure_eng() {
        return structure_eng;
    }

    public void setStructure_eng(String structure_eng) {
        this.structure_eng = structure_eng;
    }

    public String getMean_exam() {
        return mean_exam;
    }

    public void setMean_exam(String mean_exam) {
        this.mean_exam = mean_exam;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
