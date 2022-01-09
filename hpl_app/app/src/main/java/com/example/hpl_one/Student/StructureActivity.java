package com.example.hpl_one.Student;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.ArrayMap;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.hpl_one.Adapter.StructureAdapter;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.Modules.Structure;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class StructureActivity extends AppCompatActivity {
    RecyclerView structure_rcv;
    EditText strucEdittext;
    Button strucFind;
    private APIConfig f;
    StructureAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_structure);
        structure_rcv               = findViewById(R.id.structure_rcv);
        strucEdittext               = findViewById(R.id.struc_find_edittext);
        strucFind                   = findViewById(R.id.struc_find);
        LinearLayoutManager manager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);
        adapter                     = new StructureAdapter(getApplicationContext());
        f                           = RetrofitConfig.JSONconfig().create(APIConfig.class);
        structure_rcv.setLayoutManager(manager);
        structure_rcv.setAdapter(adapter);
        strucFind.setOnClickListener(v -> FindStructure());
        GetAllStructure();
    }

    private void GetAllStructure() {
        Call<RespObject> g = f.GetListStructure();
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    if (response.body().getCode() == 200) {
                        List<Structure> data = new ArrayList<>();
                        for(Object i: response.body().getMsg()) {
                            Structure x = new Gson().fromJson(i.toString(), Structure.class);
                            data.add(x);
                        }
                        adapter.setData(data);
                    }
                } else {
                    Log.e("CALL API NOT SUCCESSFUL", response.message());
                    Toast.makeText(StructureActivity.this, "Call API codeStatus is not 200", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Toast.makeText(StructureActivity.this, "StructureActivity - Cal API failed", Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void FindStructure() {
        String q = strucEdittext.getText().toString();
        Log.e("q", q);
        if (q.isEmpty()) {
            GetAllStructure();
            return;
        }
        Map<String, Object> mReq = new ArrayMap<>();
        mReq.put("q", q);
        RequestBody body = RequestBody
                .create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(mReq)).toString());
        APIConfig x = RetrofitConfig.JSONconfig().create(APIConfig.class);
        Call<RespObject> g = x.SearchStructure(body);
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                if (response.isSuccessful()) {
                    if (response.body().getCode() == 200) {
                        List<Structure> data = new ArrayList<>();
                        for(Object i: response.body().getMsg()) {
                            Structure x = new Gson().fromJson(i.toString(), Structure.class);
                            data.add(x);
                        }
                        adapter.setData(data);
                    }
                } else {
                    Log.e("CALL API NOT SUCCESSFUL", response.message());
                    Toast.makeText(StructureActivity.this, "Call API codeStatus is not 200", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Toast.makeText(StructureActivity.this, "StructureActivity - Cal API failed", Toast.LENGTH_SHORT).show();
            }
        });
    }
}