package com.example.hpl_one.Adapter;

import android.content.Context;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.hpl_one.Modules.QuickTest;
import com.example.hpl_one.Modules.OnOptionSelected;
import com.example.hpl_one.R;

import java.io.IOException;
import java.util.List;

import static com.example.hpl_one.Config.BASE_URL;

public class QuickTestAdapter extends RecyclerView.Adapter<QuickTestAdapter.QuickTestViewHolder> {
    private Context context;
    private List<QuickTest> data;
    MediaPlayer mediaPlayer;
    String ques_path, audio_path;

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

        if (!item.getQuestion_path().isEmpty()) {
            ques_path = BASE_URL + item.getQuestion_path();
            audio_path = BASE_URL + item.getAns_path();
        } else {
            ques_path = "";
            audio_path = "";
        }

        holder.test_ques.setText((position+1)+". "+item.getQuestion());
        holder.test_ans_a.setText("A. "+item.getAns_a());
        holder.test_ans_b.setText("B. "+item.getAns_b());
        holder.test_ans_c.setText("C. "+item.getAns_c());
        holder.test_ans_d.setText("D. "+item.getAns_d());
        Glide.with(context).load(ques_path).into(holder.image_ques);
        mediaPlayer = new MediaPlayer();
        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
        try {
            mediaPlayer.setDataSource(audio_path);
            mediaPlayer.prepare();
            mediaPlayer.setOnCompletionListener(mp -> {
                holder.playAdudio.setVisibility(View.VISIBLE);
                holder.stopAudio.setVisibility(View.GONE);
            });
            holder.playAdudio.setVisibility(View.GONE);
            holder.stopAudio.setVisibility(View.VISIBLE);
        } catch (IOException e) {
            Log.e("QUICKTEST ERR", e.getMessage());
        }

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
        private ImageView image_ques;
        private Button playAdudio, stopAudio;

        public QuickTestViewHolder(@NonNull View itemView) {
            super(itemView);
            test_ques   = itemView.findViewById(R.id.test_ques);
            test_ans_a  = itemView.findViewById(R.id.qtest_ans_a);
            test_ans_b  = itemView.findViewById(R.id.qtest_ans_b);
            test_ans_c  = itemView.findViewById(R.id.qtest_ans_c);
            test_ans_d  = itemView.findViewById(R.id.qtest_ans_d);
            image_ques  = itemView.findViewById(R.id.test_image);
            playAdudio  = itemView.findViewById(R.id.test_play_audio);
            stopAudio   = itemView.findViewById(R.id.test_pause_audio);


            test_ans_a.setOnClickListener(this);
            test_ans_b.setOnClickListener(this);
            test_ans_c.setOnClickListener(this);
            test_ans_d.setOnClickListener(this);
            playAdudio.setOnClickListener(this);
            stopAudio.setOnClickListener(this);
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
                case R.id.test_play_audio:
                    mediaPlayer.start();
                    break;
                case R.id.test_pause_audio:
                    Log.e("QUICKTEST AUDIO", "STOP");
                    if (mediaPlayer.isPlaying()) {
                        mediaPlayer.stop();
                    }
                    playAdudio.setVisibility(View.VISIBLE);
                    stopAudio.setVisibility(View.GONE);
                    break;
            }
        }
    }
}
