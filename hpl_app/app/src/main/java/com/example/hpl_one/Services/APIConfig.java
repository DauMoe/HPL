package com.example.hpl_one.Services;

import com.example.hpl_one.Modules.RespObject;

import okhttp3.RequestBody;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

//Play video from URL: https://stackoverflow.com/questions/40433248/play-video-from-url-in-videoview-android

public interface APIConfig {
    //Login
    @POST("user/login/")
    Call<RespObject> login(@Body RequestBody reqBody);

    //Create user
    @POST("user/new_user/")
    Call<RespObject> createUser(@Body RequestBody reqBody);

    //Get list students
    @POST("user/get_student/")
    Call<RespObject> GetListStudents();

    //Logout
    @POST("user/logout/")
    Call<ResponseBody> logout();

    //Get Exam
    @POST("question/exam/")
    Call<RespObject> GetExam(@Body RequestBody reqBody);

    //Get list exam config
    @POST("question/list_config/")
    Call<RespObject> GetListExamConfigs();

    //Get List Result of Exam
    @POST("question/list_config/")
    Call<RespObject> GetListExam();

    //Get list result
    @POST("question/list_result/")
    Call<RespObject> GetListResults(@Body RequestBody reqBody);

    //Create new result
    @POST("question/new_result/")
    Call<ResponseBody> Submit(@Body RequestBody reqBody);

    //Get Single Question
    @POST("question/single/")
    Call<RespObject> getQues(@Body RequestBody reqBody);

    //Get List Structure
    @POST("structure/all/")
    Call<RespObject> GetListStructure(@Body RequestBody reqBody);

    //Detail Structure Info
    @POST("structure/info/")
    Call<RespObject> GetStructureInfo(@Body RequestBody reqBody);

    //Search Structure
    @POST("structure/search/")
    Call<RespObject> SearchStructure(@Body RequestBody reqBody);
}
