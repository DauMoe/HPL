package com.example.hpl_one.Modules;

import java.io.Serializable;

public class User implements Serializable {
    private String ssid, username, roles, level;

    public User(String ssid, String username, String roles) {
        this.ssid = ssid;
        this.username = username;
        this.roles = roles;
    }

    public User(String ssid, String username, String roles, String level) {
        this.ssid = ssid;
        this.username = username;
        this.roles = roles;
        this.level = level;
    }

    public String getSsid() {
        return ssid;
    }

    public void setSsid(String ssid) {
        this.ssid = ssid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
