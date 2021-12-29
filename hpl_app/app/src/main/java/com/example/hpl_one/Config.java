package com.example.hpl_one;

public class Config {
    //Read Multipart: https://stackoverflow.com/questions/54133578/how-to-parse-response-from-multipart-form-data-request-in-retrofit2-android/54136872
    //Ion: https://github.com/koush/ion#jars

    //Login pref
    public static final String LOGIN_STATE  = "LOGIN_STATE";
    public static final String SSID         = "sessionID";
    public static final String USER         = "username";
    public static final String EMAIL        = "email";
    public static final String ROLES        = "roles";

    //Base URL
//    public static final String BASE_URL     = "http://135850830a76.ngrok.io/";
    public static final String BASE_URL     = "http://192.168.0.108:8080/";
//    public static final String BASE_URL     = "https://hplbe.herokuapp.com/";
}
