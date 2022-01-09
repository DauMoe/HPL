package com.example.hpl_one.Adapter;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.hpl_one.Modules.Exam;
import com.example.hpl_one.Modules.Structure;
import com.example.hpl_one.R;
import com.example.hpl_one.Student.QuickTestActivity;
import com.example.hpl_one.Student.StructureActivity;
import com.example.hpl_one.Student.StructureDetailActivity;

import java.util.List;

public class StructureAdapter extends RecyclerView.Adapter<StructureAdapter.ExamViewHolder> {
    private List<Structure> data;
    private Context context;

    public StructureAdapter(Context context) {
        this.context = context;
    }

    public void setData(List<Structure> data) {
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
        Structure item = data.get(position);
        if (item == null) return;
        holder.exam_name.setText(item.getName_struct());
        holder.exam_name.setTextSize(17);
        holder.exam_desc.setText("");
        holder.exam_desc.setVisibility(View.GONE);
        holder.exam.setOnClickListener(v -> {
            Intent ques = new Intent(context, StructureDetailActivity.class);
            Log.e("SEND", String.valueOf(item.getId()));
            ques.putExtra("structure_id", item.getId());
            context.startActivity(ques);
        });
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
