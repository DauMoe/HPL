package com.example.hpl_one.Adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.hpl_one.Modules.Exam;
import com.example.hpl_one.R;
import com.example.hpl_one.Student.QuickTestActivity;

import java.util.List;

public class ExamAdapter extends RecyclerView.Adapter<ExamAdapter.ExamViewHolder> {
    private List<Exam> data;
    private Context context;
    boolean isClickable = false;

    public ExamAdapter(Context context, boolean isClickable) {
        this.context        = context;
        this.isClickable    = isClickable;
    }

    public void setData(List<Exam> data) {
        this.data = data;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public ExamViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.exam_item, parent, false);
        return new ExamViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ExamViewHolder holder, int position) {
        Exam item = data.get(position);
        if (item == null) return;
        holder.exam_name.setText(item.getName());
        holder.exam_desc.setText("Easy: "+item.getEasy()+"%\nMeidum: "+item.getMedium()+"%\nHard: "+item.getHard()+"%\nTotal: "+item.getTotal()+" ques\nTime: "+item.getTime_exam() + " mins");
        if (isClickable) {
            holder.exam.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    Intent ques = new Intent(context, QuickTestActivity.class);
                    ques.putExtra("exam_id", String.valueOf(item.getId()));
                    context.startActivity(ques);
                }
            });
        }
    }

    @Override
    public int getItemCount() {
        if (data != null) return data.size();
        return 0;
    }

    public class ExamViewHolder extends RecyclerView.ViewHolder {
        private LinearLayout exam;
        private TextView exam_name, exam_desc;
        public ExamViewHolder(@NonNull View itemView) {
            super(itemView);
            exam      = itemView.findViewById(R.id.exam);
            exam_name = itemView.findViewById(R.id.exam_name);
            exam_desc = itemView.findViewById(R.id.exam_desc);
        }
    }
}
