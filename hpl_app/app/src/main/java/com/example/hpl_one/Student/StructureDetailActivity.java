package com.example.hpl_one.Student;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.ArrayMap;
import android.util.Log;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.Modules.Structure;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.util.Map;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class StructureDetailActivity extends AppCompatActivity {
    TextView name, eng, exam;
    Button goBack;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_structure_detail);

        name    = findViewById(R.id.struc_detail_name);
        eng     = findViewById(R.id.struc_detail_eng);
        exam    = findViewById(R.id.struc_detail_exam);
        goBack  = findViewById(R.id.go_back_search);

        goBack.setOnClickListener(v -> onBackPressed());

        int id = getIntent().getIntExtra("structure_id", -1);
        Log.e("STRUCTURE_ID_INT", String.valueOf(id));
        GetStructureDetail(id);
    }

    private void GetStructureDetail(int id) {
        Map<String, Object> mReq = new ArrayMap<>();
        mReq.put("id", id);
        RequestBody body = RequestBody
                .create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(mReq)).toString());
        APIConfig x = RetrofitConfig.JSONconfig().create(APIConfig.class);

        Call<RespObject> g = x.GetStructureInfo(body);
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    if (response.body().getCode() == 200) {
                        Structure x = new Gson().fromJson(response.body().getMsg().get(0).toString(), Structure.class);
                        name.setText(x.getName_struct());
                        eng.setText(x.getStructure_eng());
                        exam.setText("Exam: " + x.getMean_exam());
                    } else {
                        Log.e("CALL API NOT SUCCESSFUL", response.message());
                        Toast.makeText(StructureDetailActivity.this, "StructureDetailActivity - Call API codeStatus is not 200", Toast.LENGTH_SHORT).show();
                    }
                }
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Toast.makeText(StructureDetailActivity.this, "StructureDetailActivity - Cal API failed", Toast.LENGTH_SHORT).show();
            }
        });
    }
}