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
import com.example.hpl_one.R;

import java.util.ArrayList;
import java.util.List;

public class ResultAdapter extends RecyclerView.Adapter<ResultAdapter.ResultViewHolder> {
    private Context context;
    private List<Result> data = new ArrayList<>();

    public ResultAdapter(Context context) {
        this.context = context;
    }

    public void setData(List<Result> data) {
        this.data = data;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public ResultViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.exam_item, parent, false);
        return new ResultAdapter.ResultViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull ResultViewHolder holder, int position) {
        Result item = data.get(position);
        if (item == null) return;
        holder.result_name.setText(item.getEmail());
        holder.result_desc.setText("Result: "+item.getResult()+"\nStart on: "+item.getStarttime()+"\nFinish on: "+item.getEndtime());
    }

    @Override
    public int getItemCount() {
        if (data != null) return data.size();
        return 0;
    }

    public class ResultViewHolder extends RecyclerView.ViewHolder {
        private LinearLayout result;
        private TextView result_name, result_desc;
        public ResultViewHolder(@NonNull View itemView) {
            super(itemView);
            result      = itemView.findViewById(R.id.exam);
            result_name = itemView.findViewById(R.id.exam_name);
            result_desc = itemView.findViewById(R.id.exam_desc);
        }
    }
}
