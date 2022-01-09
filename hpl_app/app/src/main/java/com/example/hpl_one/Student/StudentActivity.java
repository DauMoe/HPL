package com.example.hpl_one.Student;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.hpl_one.Config;
import com.example.hpl_one.LoginActivity;
import com.example.hpl_one.Modules.Question;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class StudentActivity extends AppCompatActivity {
    private AppCompatButton easy, medium, difficult, quick_test, structure;
    private TextView student_preview_name;
    private SharedPreferences pref;
    private ImageView logout;
    private APIConfig f;
    private String email;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_student);
    }

    @Override
    protected void onStart() {
        super.onStart();
        initVar();
        handlerEvent();
    }

    private void initVar() {
        easy                    = findViewById(R.id.easy);
        medium                  = findViewById(R.id.medium);
        difficult               = findViewById(R.id.difficult);
        quick_test              = findViewById(R.id.quick_test);
        structure               = findViewById(R.id.structure);
        student_preview_name    = findViewById(R.id.student_preview_name);
        logout                  = findViewById(R.id.logout);
        pref                    = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        f                       = RetrofitConfig.JSONconfig().create(APIConfig.class);

        email                   =  pref.getString(Config.EMAIL, null);
        String username         =  pref.getString(Config.USER, null);

        Log.i("USERNAME", pref.getString(Config.USER, null));
        student_preview_name.setText("Hi, " + username + "!");
    }

    private void handlerEvent() {
        Intent ques_intent = new Intent(StudentActivity.this, PrepareActivity.class);
        easy.setOnClickListener(v -> {
            ques_intent.putExtra("level", "1");
            startActivity(ques_intent);
        });
        medium.setOnClickListener(v -> {
            ques_intent.putExtra("level", "2");
            startActivity(ques_intent);
        });
        difficult.setOnClickListener(v -> {
            ques_intent.putExtra("level", "3");
            startActivity(ques_intent);
        });
        quick_test.setOnClickListener(v -> startActivity(new Intent(StudentActivity.this, PickExamActivity.class)));
        structure.setOnClickListener(v -> startActivity(new Intent(StudentActivity.this, StructureActivity.class)));
        logout.setOnClickListener(v -> {
            Toast.makeText(getApplicationContext(), "Wait a minute!", Toast.LENGTH_SHORT).show();
            Call g = f.logout();
            g.enqueue(new Callback() {
                @Override
                public void onResponse(Call call, Response response) {
                    Toast.makeText(getApplicationContext(), "Logout!", Toast.LENGTH_SHORT).show();
                    pref.edit().clear().apply();
                    startActivity(new Intent(StudentActivity.this, LoginActivity.class));
                    finish();
                }

                @Override
                public void onFailure(Call call, Throwable t) {
                    Toast.makeText(getApplicationContext(), "Unknow error", Toast.LENGTH_SHORT).show();
                }
            });
        });
    }
}