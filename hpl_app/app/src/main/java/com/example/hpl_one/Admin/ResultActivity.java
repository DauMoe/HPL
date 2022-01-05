package com.example.hpl_one.Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.ArrayMap;
import android.widget.Toast;

import com.example.hpl_one.Adapter.ExamAdapter;
import com.example.hpl_one.Adapter.ResultAdapter;
import com.example.hpl_one.Config;
import com.example.hpl_one.Modules.Exam;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.Modules.Result;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.example.hpl_one.databinding.ActivityExamConfigBinding;
import com.example.hpl_one.databinding.ActivityResultBinding;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ResultActivity extends AppCompatActivity {
    private ActivityResultBinding binding;
    private APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
    private String email, ssid, roles;
    private SharedPreferences pref;
    private ResultAdapter adapter;
    private List<Result> data = new ArrayList<>();
    private Gson convert = new Gson();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_result);
        pref                        = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
        email                       = pref.getString(Config.EMAIL, null);
        ssid                        = pref.getString(Config.SSID, null);
        roles                       = pref.getString(Config.ROLES, null);
        adapter                     = new ResultAdapter(getApplicationContext());
        LinearLayoutManager manager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);
        binding.resultRcv.setLayoutManager(manager);
        binding.resultRcv.setAdapter(adapter);
        GetListResult(adapter);
    }

    private void GetListResult(ResultAdapter adapter) {
        Map<String, Object> mReq = new ArrayMap<>();
        mReq.put("email", email);
        RequestBody body = RequestBody
                .create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(mReq)).toString());
        APIConfig x = RetrofitConfig.JSONconfig().create(APIConfig.class);
        Call<RespObject> g = f.GetListResults(body);
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    data.clear();
                    for (Object i: response.body().getMsg()) {
                        data.add(convert.fromJson(i.toString(), Result.class));
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