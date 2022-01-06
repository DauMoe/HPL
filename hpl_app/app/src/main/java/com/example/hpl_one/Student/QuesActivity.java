package com.example.hpl_one.Student;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.core.content.ContextCompat;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.util.ArrayMap;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.example.hpl_one.Config;
import com.example.hpl_one.LoginActivity;
import com.example.hpl_one.Modules.Question;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.Modules.User;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static com.example.hpl_one.Config.BASE_URL;

public class QuesActivity extends AppCompatActivity {
    private TextView ques;
    private ImageView exittoMain, image_ques;
    private AppCompatButton ans_a, ans_b, ans_c, ans_d, next_ques;
    private Button playAudio, stopAudio;
    private SharedPreferences pref;
    private String email, ssid, level;
    private Question x;
    private boolean isAns = false;
    MediaPlayer mediaPlayer = null;
    String URL;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ques);
    }

    @Override
    protected void onStart() {
        super.onStart();
        initVar();
        handlerEvent();
    }

    private void handlerEvent() {
        playAudio.setOnClickListener(view -> PlayAudioQuestion());
        stopAudio.setOnClickListener(view -> StopAudioQuestion());
        ans_a.setOnClickListener(v -> checkAns("A"));
        ans_b.setOnClickListener(v -> checkAns("B"));
        ans_c.setOnClickListener(v -> checkAns("C"));
        ans_d.setOnClickListener(v -> checkAns("D"));
        next_ques.setOnClickListener(v -> {
            showQues(email, ssid, level);
        });
        exittoMain.setOnClickListener(v -> {
            if (mediaPlayer != null && mediaPlayer.isPlaying()) {
                mediaPlayer.stop();
                mediaPlayer.reset();
                mediaPlayer.release();
            }
            startActivity(new Intent(QuesActivity.this, StudentActivity.class));
            finish();
        });
    }

    private void initVar() {
        Intent y    = getIntent();
        level       = y.getStringExtra("level");
        pref        = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        email       = pref.getString(Config.EMAIL, null);
        ssid        = pref.getString(Config.SSID, null);
        ques        = findViewById(R.id.student_ques);
        ans_a       = findViewById(R.id.ans_a);
        ans_b       = findViewById(R.id.ans_b);
        ans_c       = findViewById(R.id.ans_c);
        ans_d       = findViewById(R.id.ans_d);
        next_ques   = findViewById(R.id.ques_next);
        exittoMain  = findViewById(R.id.main_sc);
        image_ques  = findViewById(R.id.image_ques);
        playAudio   = findViewById(R.id.play_audio_question);
        stopAudio   = findViewById(R.id.stop_audio_question);

        playAudio.setVisibility(View.GONE);
        stopAudio.setVisibility(View.GONE);
        image_ques.setVisibility(View.GONE);
        //Get amount of ques
        isAns       = true;
        showQues(email, ssid, level);
    }

    private void PlayAudioQuestion() {
        if (x != null) {
            Toast.makeText(getApplicationContext(), "Wait a minute!", Toast.LENGTH_LONG);
            URL = BASE_URL + x.getAns_path();
            Log.e("URL", URL);
            if (mediaPlayer != null && mediaPlayer.isPlaying()) {
                mediaPlayer.stop();
            }
            mediaPlayer = new MediaPlayer();
            mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
            try {
                mediaPlayer.setDataSource(URL);
                mediaPlayer.prepare();
                mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                    @Override
                    public void onCompletion(MediaPlayer mp) {
                        playAudio.setVisibility(View.VISIBLE);
                        stopAudio.setVisibility(View.GONE);
                    }
                });
                mediaPlayer.start();
                playAudio.setVisibility(View.GONE);
                stopAudio.setVisibility(View.VISIBLE);
            } catch(IOException e) {
                Log.e("AUDIO ERR", e.getMessage());
            }
        }
    }

    private void StopAudioQuestion() {
        Log.e("AUDIO", "STOP");
        if (mediaPlayer.isPlaying()) {
            mediaPlayer.stop();
        }
        playAudio.setVisibility(View.VISIBLE);
        stopAudio.setVisibility(View.GONE);
    }

    private void showQues(String email, String ssid, String level) {
        if (!isAns) {
            Toast.makeText(getApplicationContext(), "Choose an answer first!", Toast.LENGTH_SHORT).show();
            return;
        }
        Log.e("After", "Answered");
        if (mediaPlayer != null && mediaPlayer.isPlaying()) {
            mediaPlayer.stop();
            mediaPlayer.reset();
            mediaPlayer.release();
        }
        playAudio.setVisibility(View.GONE);
        stopAudio.setVisibility(View.GONE);
        image_ques.setVisibility(View.GONE);
        isAns = false;
        Map<String, Object> mReq = new ArrayMap<>();
        mReq.put("level", level);
        RequestBody body = RequestBody
                .create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(mReq)).toString());
        APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
        Call<RespObject> g = f.getQues(body);

        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    if (response.body().getCode() == 200) {
                        x = new Gson().fromJson(response.body().getMsg().get(0).toString(), Question.class);
                        if (x != null) {
                            Log.e("PATH", x.getQuestion_path());
                            if (!x.getQuestion_path().isEmpty()) {
                                //Audio doc: https://www.geeksforgeeks.org/how-to-play-audio-from-url-in-android/
                                playAudio.setVisibility(View.VISIBLE);
                                stopAudio.setVisibility(View.GONE);
                                image_ques.setVisibility(View.VISIBLE);
                                Glide.with(QuesActivity.this).load(BASE_URL + x.getQuestion_path()).into(image_ques);
                            }
                            ques.setText(x.getQuestion());
                            ans_a.setText("A. " + x.getAns_a());
                            ans_b.setText("B. " + x.getAns_b());
                            ans_c.setText("C. " + x.getAns_c());
                            ans_d.setText("D. " + x.getAns_d());
                            ans_a.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
                            ans_b.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
                            ans_c.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
                            ans_d.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
                        }
                    } else {
                        Log.e("QuesActivityCODE", response.body().getMsg().get(0).toString());
                        Toast.makeText(getApplicationContext(), "QuesActivity Error Code: " + response.body().getCode(), Toast.LENGTH_LONG);
                    }
                }
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Log.e("QuestionActivityAPI Error:", t.toString());
                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_SHORT).show();
            }
        });

//        g.enqueue(new Callback<Question>() {
//            @Override
//            public void onResponse(Call<Question> call, Response<Question> response) {
//                //HTTP code ressp == 200
//                if (response.isSuccessful()) {
//                    x = response.body();
//                    ques.setText(x.getQues());
//                    ans_a.setText("A. "+x.getAnswer_a());
//                    ans_b.setText("B. "+x.getAnswer_b());
//                    ans_c.setText("C. "+x.getAnswer_c());
//                    ans_d.setText("D. "+x.getAnswer_d());
//                    ans_a.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
//                    ans_b.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
//                    ans_c.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
//                    ans_d.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.ans));
//                }
//                else if (response.code() == 422) {
//                    Toast.makeText(getApplicationContext(), String.valueOf(response.body()), Toast.LENGTH_SHORT).show();
//                }
//                else {
//                    SharedPreferences.Editor editor = pref.edit();
//                    editor.remove(Config.SSID);
//                    editor.remove(Config.USER);
//                    editor.remove(Config.EMAIL);
//                    editor.apply();
//                    startActivity(new Intent(QuesActivity.this, LoginActivity.class));
//                    Toast.makeText(getApplicationContext(), "Your session is expired!", Toast.LENGTH_SHORT).show();
//                    finish();
//                }
//            }
//
//            @Override
//            public void onFailure(Call<Question> call, Throwable t) {
//                Log.e("API Error:", t.toString());
//                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_SHORT).show();
//            }
//        });

    }

    private void checkAns(String ans) {
        if (isAns) return;
        isAns = true;

        switch (x.getCorrect().replaceAll("\"", "")) {
            case "A":
                ans_a.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.correct_ans));
                break;
            case "B":
                ans_b.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.correct_ans));
                break;
            case "C":
                ans_c.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.correct_ans));
                break;
            case "D":
                ans_d.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.correct_ans));
                break;
        }

        if (!ans.equals(x.getCorrect().replaceAll("\"", ""))) {
            switch (ans) {
                case "A":
                    ans_a.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.error_ans));
                    break;
                case "B":
                    ans_b.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.error_ans));
                    break;
                case "C":
                    ans_c.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.error_ans));
                    break;
                case "D":
                    ans_d.setBackground(ContextCompat.getDrawable(getApplicationContext(), R.drawable.error_ans));
                    break;
            }
        }
    }
}