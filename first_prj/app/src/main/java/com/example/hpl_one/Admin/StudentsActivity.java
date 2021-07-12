package com.example.hpl_one.Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.Toast;

import com.example.hpl_one.Adapter.StudentAdapter;
import com.example.hpl_one.Config;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.Modules.Result;
import com.example.hpl_one.Modules.Student;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.example.hpl_one.databinding.ActivityResultBinding;
import com.example.hpl_one.databinding.ActivityStudentsBinding;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class StudentsActivity extends AppCompatActivity {
    private APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
    private String email, ssid;
    private SharedPreferences pref;
    private ActivityStudentsBinding binding;
    private StudentAdapter adapter;
    private List<Student> data = new ArrayList<>();
    private Gson convert = new Gson();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding                     = DataBindingUtil.setContentView(this, R.layout.activity_students);
        pref                        = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        email                       = pref.getString(Config.EMAIL, null);
        ssid                        = pref.getString(Config.SSID, null);
        adapter                     = new StudentAdapter(getApplicationContext());
        LinearLayoutManager manager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);
        binding.studentRcv.setLayoutManager(manager);
        binding.studentRcv.setAdapter(adapter);
        GetListStudent(adapter);
    }

    private void GetListStudent(StudentAdapter adapter) {
        Call<RespObject> g = f.GetListStudents(ssid, email);
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    data.clear();
                    for (Object i: response.body().getMsg()) {
                        data.add(convert.fromJson(i.toString(), Student.class));
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