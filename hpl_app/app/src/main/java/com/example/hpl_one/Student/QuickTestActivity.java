package com.example.hpl_one.Student;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.ArrayMap;
import android.view.View;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.hpl_one.Adapter.QuickTestAdapter;
import com.example.hpl_one.Config;
import com.example.hpl_one.Modules.OnOptionSelected;
import com.example.hpl_one.Modules.QuickTest;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.R;
import com.example.hpl_one.Services.APIConfig;
import com.example.hpl_one.Services.RetrofitConfig;
import com.google.gson.Gson;

import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class QuickTestActivity extends AppCompatActivity implements OnOptionSelected {
    private TextView loading, remain_time;
    private RecyclerView rcv;
    private AppCompatButton submit;
    private APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
    private String email, ssid;
    private SharedPreferences pref;
    private String exam_id = "1";
    private StartTimerThread CounterThread;
    private List<QuickTest> data = new ArrayList<>();
    private QuickTestAdapter adapter;
    private SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy kk:mm:ss");
    private String starttime, endtime;

    private ScrollView exam_area;
    private Gson convert = new Gson();

    //Doc: https://stackoverflow.com/questions/34266871/selecting-one-radiobutton-value-and-scrolling-back-removing-the-selected-one-in

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quick_test);
        pref = getSharedPreferences(Config.LOGIN_STATE, MODE_PRIVATE);
    }

    @Override
    protected void onStart() {
        super.onStart();
        loading                     = findViewById(R.id.loading_ques);
        remain_time                 = findViewById(R.id.counter);
        rcv                         = findViewById(R.id.quick_test_ques);
        exam_area                   = findViewById(R.id.exam_area);
        submit                      = findViewById(R.id.submit_test);
        email                       =  pref.getString(Config.EMAIL, null);
        ssid                        =  pref.getString(Config.SSID, null);
        adapter                     = new QuickTestAdapter(getApplicationContext());
        LinearLayoutManager manager = new LinearLayoutManager(getApplicationContext(), RecyclerView.VERTICAL, false);

        adapter.setOptionSelected(this);
        rcv.setLayoutManager(manager);
        rcv.setAdapter(adapter);

        Intent x = getIntent();
        exam_id = x.getStringExtra("exam_id");

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                submit_exam();
            }
        });

        //Get Exam
        GetListExam(adapter);
    }

    private Handler handler = new Handler() {
        @Override
        public void handleMessage(@NonNull Message msg) {
            super.handleMessage(msg);
            remain_time.setText("Time remain: " + msg.arg1 + " mins");
        }
    };

    private void submit_exam() {
        endtime = formatter.format(new Date());
        int correctTotal = 0;
        loading.setText("Checking....");
        loading.setVisibility(View.VISIBLE);
        exam_area.setVisibility(View.GONE);
        for (QuickTest i: data) {
            if (i.getUser_ans() != null && i.getUser_ans().equalsIgnoreCase(i.getCorrect_ans())) {
                correctTotal++;
            }
        }
        Map<String, Object> mReq = new ArrayMap<>();
        mReq.put("email", email);
        mReq.put("result", correctTotal + "/" + data.size());
        mReq.put("starttime", starttime);
        mReq.put("endtime", endtime);
        RequestBody body = RequestBody
                .create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(mReq)).toString());
        APIConfig x = RetrofitConfig.JSONconfig().create(APIConfig.class);
        Call<ResponseBody> g = x.Submit(body);
        g.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                if (response.isSuccessful()) {
                    Toast.makeText(getApplicationContext(), "Your exam is submited!", Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(getApplicationContext(), "Code: "+response.code(), Toast.LENGTH_LONG).show();
                }
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_LONG).show();
            }
        });
        loading.setText(correctTotal+"/"+data.size());
    }

    @Override
    public void AnsSelected(int position, int AnsSelectedID) {
        data.get(position).setSelectedAnsPos(AnsSelectedID);
        switch (AnsSelectedID) {
            case 1:
                data.get(position).setAnsA(true);
                break;
            case 2:
                data.get(position).setAnsB(true);
                break;
            case 3:
                data.get(position).setAnsC(true);
                break;
            case 4:
                data.get(position).setAnsD(true);
                break;
        }
        adapter.setData(data);
        adapter.notifyDataSetChanged();
    }

    class StartTimerThread extends Thread {
        int remain_time;

        public StartTimerThread(int remain_time) {
            this.remain_time = remain_time;
        }

        @Override
        public void run() {
            super.run();
            starttime = formatter.format(new Date());
            while (remain_time>=0) {
                if (remain_time == 0) {
                    submit_exam();
                }
                try {
                    remain_time--;
                    Thread.sleep(1000 * 60); // 1min
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                Message msg = handler.obtainMessage();
                msg.arg1 = remain_time;
                handler.sendMessage(msg);
            }
        }
    }

    private void GetListExam(QuickTestAdapter adapter) {
        Map<String, Object> mReq = new ArrayMap<>();
        mReq.put("id", exam_id);
        RequestBody body = RequestBody
                .create(okhttp3.MediaType.parse("application/json; charset=utf-8"), (new JSONObject(mReq)).toString());
        APIConfig f = RetrofitConfig.JSONconfig().create(APIConfig.class);
        Call<RespObject> g = f.GetExam(body);
        g.enqueue(new Callback<RespObject>() {
            @Override
            public void onResponse(Call<RespObject> call, Response<RespObject> response) {
                loading.setVisibility(View.GONE);
                exam_area.setVisibility(View.VISIBLE);
                remain_time.setText("Time remain: " + response.body().getTotal() + " mins");

                //Set question
                data.clear();
                for (Object i: response.body().getMsg()) {
                    data.add(convert.fromJson(i.toString(), QuickTest.class));
                }
                adapter.setData(data);

                //Start countdown timer
                if (CounterThread != null) CounterThread.interrupt();
                CounterThread = new StartTimerThread(response.body().getTotal());
                CounterThread.start();
            }

            @Override
            public void onFailure(Call<RespObject> call, Throwable t) {
                Toast.makeText(getApplicationContext(), "Unknow error!", Toast.LENGTH_LONG).show();
            }
        });
    }
}