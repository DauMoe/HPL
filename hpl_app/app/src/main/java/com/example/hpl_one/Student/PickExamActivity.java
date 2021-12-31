package com.example.hpl_one.Student;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;
import android.widget.Toast;

import com.example.hpl_one.Adapter.ExamAdapter;
import com.example.hpl_one.Admin.AdminActivity;
import com.example.hpl_one.Config;
import com.example.hpl_one.LoginActivity;
import com.example.hpl_one.Modules.Exam;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PickExamActivity extends AppCompatActivity {
    private APIConfig f;
    private SharedPreferences pref;
    private String email, ssid;
    private RecyclerView picker_exam_rcv;
    private TextView loading;
    private Gson convert = new Gson();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pick_exam);
    }

    @Override
    protected void onStart() {
        super.onStart();
        f                           = RetrofitConfig.JSONconfig().create(APIConfig.class);
        pref                        = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        email                       = pref.getString(Config.EMAIL, null);
        ssid                        = pref.getString(Config.SSID, null);
        loading                     = findViewById(R.id.pick_exam_loading);
        picker_exam_rcv             = findViewById(R.id.picker_exam_rcv);
        LinearLayoutManager manager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);
        ExamAdapter adapter         = new ExamAdapter(getApplicationContext(), true);
        picker_exam_rcv.setLayoutManager(manager);
        picker_exam_rcv.setAdapter(adapter);

        Call<RespObject> g = f.GetListExam();
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    try {
                        if (response.body().getCode() == 200) {
                            JSONObject a = new JSONObject(response.body().getMsg().get(0).toString());

                        }
                    } catch (JSONException e) {
                        Log.e("CONVERT IN LoginActivity.java", "Convert to JSON fail!");
                    }
//                    List<Exam> data = new ArrayList<Exam>();
//                    for (Object i: response.body().getMsg()) {
//                        data.add(convert.fromJson(i.toString(), Exam.class));
//                    }
//                    adapter.setData(data);
                }
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_LONG).show();
                Log.e("ERROR:", String.valueOf(t));
            }
        });
    }
}