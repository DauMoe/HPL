package com.example.hpl_one.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.hpl_one.Modules.Result;
import com.example.hpl_one.Modules.Student;
import com.example.hpl_one.R;

import java.util.ArrayList;
import java.util.List;

public class StudentAdapter extends RecyclerView.Adapter<StudentAdapter.StudentViewHolder> {
    private Context context;
    private List<Student> data = new ArrayList<>();

    public StudentAdapter(Context context) {
        this.context = context;
    }

    public void setData(List<Student> data) {
        this.data = data;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public StudentViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.exam_item, parent, false);
        return new StudentAdapter.StudentViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull StudentViewHolder holder, int position) {
        Student item = data.get(position);
        if (item == null) return;
        holder.student_name.setText(item.getEmail());
        holder.student_desc.setText("Username: "+item.getUsername() + "\nDob: "+item.getDob()+"\nSex: "+item.getSex());
    }

    @Override
    public int getItemCount() {
        if (data != null) return data.size();
        return 0;
    }

    public class StudentViewHolder extends RecyclerView.ViewHolder {
        private LinearLayout student;
        private TextView student_name, student_desc;
        public StudentViewHolder(@NonNull View itemView) {
            super(itemView);
            student      = itemView.findViewById(R.id.exam);
            student_name = itemView.findViewById(R.id.exam_name);
            student_desc = itemView.findViewById(R.id.exam_desc);
        }
    }
}
