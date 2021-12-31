package com.example.hpl_one.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.hpl_one.Modules.QuickTest;
import com.example.hpl_one.Modules.OnOptionSelected;
import com.example.hpl_one.R;

import java.util.List;

public class QuickTestAdapter extends RecyclerView.Adapter<QuickTestAdapter.QuickTestViewHolder> {
    private Context context;
    private List<QuickTest> data;

    public QuickTestAdapter(Context context) {
        this.context = context;
    }

    public void setData(List<QuickTest> data) {
        this.data = data;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public QuickTestAdapter.QuickTestViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.quick_test_item, parent, false);
        return new QuickTestViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull QuickTestAdapter.QuickTestViewHolder holder, int position) {
        QuickTest item = data.get(position);
        if (item == null) return;

        holder.test_ques.setText((position+1)+". "+item.getQuestion());
        holder.test_ans_a.setText("A. "+item.getAns_a());
        holder.test_ans_b.setText("B. "+item.getAns_b());
        holder.test_ans_c.setText("C. "+item.getAns_c());
        holder.test_ans_d.setText("D. "+item.getAns_d());

        holder.test_ans_a.setChecked(item.isAnsA());
        holder.test_ans_b.setChecked(item.isAnsB());
        holder.test_ans_c.setChecked(item.isAnsC());
        holder.test_ans_d.setChecked(item.isAnsD());
    }

    @Override
    public int getItemCount() {
        if (data != null) return data.size();
        return 0;
    }

    private OnOptionSelected onOptionSelected;

    public void setOptionSelected(OnOptionSelected optionSelected) {
        this.onOptionSelected = optionSelected;
    }

    public class QuickTestViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        private TextView test_ques;
        private RadioButton test_ans_a, test_ans_b, test_ans_c, test_ans_d;
        private RadioGroup qtest_area;

        public QuickTestViewHolder(@NonNull View itemView) {
            super(itemView);
            test_ques   = itemView.findViewById(R.id.test_ques);
            test_ans_a  = itemView.findViewById(R.id.qtest_ans_a);
            test_ans_b  = itemView.findViewById(R.id.qtest_ans_b);
            test_ans_c  = itemView.findViewById(R.id.qtest_ans_c);
            test_ans_d  = itemView.findViewById(R.id.qtest_ans_d);

            test_ans_a.setOnClickListener(this);
            test_ans_b.setOnClickListener(this);
            test_ans_c.setOnClickListener(this);
            test_ans_d.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            switch (v.getId()) {
                case R.id.qtest_ans_a:
                    onOptionSelected.AnsSelected(getAdapterPosition(), 1);
                    break;
                case R.id.qtest_ans_b:
                    onOptionSelected.AnsSelected(getAdapterPosition(), 2);
                    break;
                case R.id.qtest_ans_c:
                    onOptionSelected.AnsSelected(getAdapterPosition(), 3);
                    break;
                case R.id.qtest_ans_d:
                    onOptionSelected.AnsSelected(getAdapterPosition(), 4);
                    break;
            }
        }
    }
}
