package com.example.hpl_one.Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.example.hpl_one.Config;
import com.example.hpl_one.LoginActivity;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.example.hpl_one.Student.StudentActivity;
import com.example.hpl_one.databinding.ActivityAdminBinding;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class AdminActivity extends AppCompatActivity{
    private APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
    private String email, ssid, username;
    private SharedPreferences pref;
    private ActivityAdminBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding     = DataBindingUtil.setContentView(this, R.layout.activity_admin);
        pref        = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        email       = pref.getString(Config.EMAIL, null);
        ssid        = pref.getString(Config.SSID, null);
        username    =  pref.getString(Config.USER, null);

        binding.adminName.setText("Hi, "+username+"!");

        binding.adminResult.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AdminActivity.this, ResultActivity.class));
            }
        });

        binding.adminListStudent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AdminActivity.this, StudentsActivity.class));
            }
        });

        binding.adminListExamConfig.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(AdminActivity.this, ExamConfigActivity.class));
            }
        });

        binding.logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                logout();
            }
        });
    }

    private void logout() {
        Call<ResponseBody> g = f.logout();
        g.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if (response.isSuccessful()) {
                    pref.edit().remove(Config.EMAIL).commit();
                    pref.edit().remove(Config.SSID).commit();
                    pref.edit().remove(Config.USER).commit();
                    pref.edit().remove(Config.ROLES).commit();
                    startActivity(new Intent(AdminActivity.this, LoginActivity.class));
                    finish();
                } else {
                    Toast.makeText(getApplicationContext(), "Have error!", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_SHORT).show();
            }
        });
    }
}