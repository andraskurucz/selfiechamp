package com.poleposition.selfiechamp.network;

import java.text.MessageFormat;

/**
 * Created by Szabolcs on 2015.02.15..
 */
public class ApiUrl {

    private static String BASE_URL = "http://selfie.szabolcsvaradi.com";

    private static String LOGIN = "/login";

    private static String PROFILE = "/profile/{0}";

    private static String FEEDS_LIST = "/feeds/list/{0}";
    private static String FEEDS_ID = "/feeds/{0}/{1}";
    private static String FEEDS_CREATE = "/uploads/create/{0}";

    private static String USERS_LIST = "/users/list/{0}";
    private static String USERS_ID = "/users/{0}/{1}";
    private static String USERS_UPDATE_ID = "/users/{0}/{1}";
    private static String USERS_CREATE = "/users/create/{0}";

    public static String loginURL() {
        return MessageFormat.format(BASE_URL + LOGIN, "");
    }

    public static String profileURL(String token) {
        return MessageFormat.format(BASE_URL + PROFILE, token);
    }

    public static String feedsListURL(String token) {
        return MessageFormat.format(BASE_URL + FEEDS_LIST, token);
    }

    public static String feedsIdURL(int id, String token) {
        return MessageFormat.format(BASE_URL + FEEDS_ID, id, token);
    }

    public static String feedsCreateURL(String token) {
        return MessageFormat.format(BASE_URL + FEEDS_CREATE, token);
    }

    public static String usersListURL(String token) {
        return MessageFormat.format(BASE_URL + USERS_LIST, token);
    }

    public static String usersIdURL(int id, String token) {
        return MessageFormat.format(BASE_URL + USERS_ID, id, token);
    }

    public static String usersUpdateURL(int id, String token) {
        return MessageFormat.format(BASE_URL + USERS_UPDATE_ID, id, token);
    }

    public static String usersCreateURL(String token) {
        return MessageFormat.format(BASE_URL + USERS_CREATE, token);
    }

}
