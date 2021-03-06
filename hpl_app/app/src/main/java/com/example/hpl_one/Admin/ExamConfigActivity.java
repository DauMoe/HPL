package com.example.hpl_one.Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.Toast;

import com.example.hpl_one.Adapter.ExamAdapter;
import com.example.hpl_one.Config;
import com.example.hpl_one.Modules.Exam;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.example.hpl_one.databinding.ActivityExamConfigBinding;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ExamConfigActivity extends AppCompatActivity {
    private APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
    private String email, ssid;
    private SharedPreferences pref;
    private ActivityExamConfigBinding binding;
    private ExamAdapter adapter;
    private List<Exam> data = new ArrayList<>();
    private Gson convert = new Gson();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_exam_config);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_exam_config);
        pref                        = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        email                       = pref.getString(Config.EMAIL, null);
        ssid                        = pref.getString(Config.SSID, null);
        adapter                     = new ExamAdapter(getApplicationContext(), false);
        LinearLayoutManager manager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);
        binding.examConfigRcv.setLayoutManager(manager);
        binding.examConfigRcv.setAdapter(adapter);
        GetListExamConfigs(adapter);
    }

    private void GetListExamConfigs(ExamAdapter adapter) {
        Call<RespObject> g = f.GetListExamConfigs(ssid, email);
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    data.clear();
                    for (Object i: response.body().getMsg()) {
                        data.add(convert.fromJson(i.toString(), Exam.class));
                    }
                    adapter.setData(data);
                }
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_SHORT).show();
            }
        });
    }
}