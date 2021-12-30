package com.example.hpl_one.Services;

import com.example.hpl_one.Modules.Question;
import com.example.hpl_one.Modules.RespObject;
import com.example.hpl_one.Modules.User;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

//Play video from URL: https://stackoverflow.com/questions/40433248/play-video-from-url-in-videoview-android

public interface APIConfig {
    //Login
    @FormUrlEncoded
    @POST("user/login/")
    Call<User> login(
            @Field("email") String email,
            @Field("password") String pass
    );

    //Create user
    @FormUrlEncoded
    @POST("user/new_user/")
    Call createUser(
            @Field("ssid") String ssid,
            @Field("email") String email,
            @Field("username") String username,
            @Field("dob") String dob,
            @Field("sex") String sex,
            @Field("roles") String roles
    );

    //Get question
    @FormUrlEncoded
    @POST("question/single/")
    Call<Question> getQues(
            @Field("ssid") String ssid,
            @Field("email") String email,
            @Field("level") String level
    );

    //Logout
    @FormUrlEncoded
    @POST("user/logout/")
    Call<ResponseBody> logout(
            @Field("ssid") String ssid,
            @Field("email") String email);

    //Get Exam
    @FormUrlEncoded
    @POST("api/exam/")
    Call<RespObject> GetExam(
            @Field("ssid") String ssid,
            @Field("email") String email,
            @Field("id") String id
            );

    //Get list exam config
    @FormUrlEncoded
    @POST("question/list_config//")
    Call<RespObject> GetListExamConfigs(
            @Field("ssid") String ssid,
            @Field("email") String email
    );

    //Get List Result of Exam
    @FormUrlEncoded
    @POST("question/list_config/")
    Call<RespObject> GetListExam(
            @Field("ssid") String ssid,
            @Field("email") String email
    );

    //Get list result
    @FormUrlEncoded
    @POST("question/list_result/")
    Call<RespObject> GetListResults(
            @Field("ssid") String ssid,
            @Field("email") String email,
            @Field("roles") String roles
    );

    //=============================================

    //Create new result
    @FormUrlEncoded
    @POST("api/create_result/")
    Call<ResponseBody> Submit(
            @Field("ssid") String ssid,
            @Field("email") String email,
            @Field("start") String starttime,
            @Field("end") String endtime,
            @Field("result") String result
    );

    //Get list student
    @FormUrlEncoded
    @POST("api/get_student/")
    Call<RespObject> GetListStudents(
            @Field("ssid") String ssid,
            @Field("email") String email
    );
}
