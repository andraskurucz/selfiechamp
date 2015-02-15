package com.poleposition.selfiechamp.network;


import android.content.Context;
import android.graphics.Bitmap;
import android.support.v4.util.LruCache;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.toolbox.ImageLoader;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.poleposition.selfiechamp.utils.UserProfile;

import org.json.JSONObject;

import java.lang.reflect.Method;

public class RequestHelper {

    private static RequestHelper mInstance;

    private RequestQueue requestQueue;

    private ImageLoader imageLoader;
    private JsonArrayRequest jsonArrayRequest;
    private JsonObjectRequest jsonObjectRequest;

    private static Context context;
    private static String authToken;

    private RequestHelper(Context context) {
        context = context;
        requestQueue = getRequestQueue();

        imageLoader = new ImageLoader(requestQueue,
                new ImageLoader.ImageCache() {
                    private final LruCache<String, Bitmap>
                            cache = new LruCache<String, Bitmap>(20);

                    @Override
                    public Bitmap getBitmap(String url) {
                        return cache.get(url);
                    }

                    @Override
                    public void putBitmap(String url, Bitmap bitmap) {
                        cache.put(url, bitmap);
                    }
                });
    }

    public static synchronized RequestHelper getInstance(Context context) {
        if (mInstance == null) {
            mInstance = new RequestHelper(context);
        }
        return mInstance;
    }

    public void login(JSONObject loginData, Response.Listener responseListener, Response.ErrorListener errorListener) {
        jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, ApiUrl.loginURL(), loginData, responseListener, errorListener);
        requestQueue.add(jsonObjectRequest);
    }

    public void getProfile(Response.Listener responseListener, Response.ErrorListener errorListener) {
        jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, ApiUrl.profileURL(authToken), null, responseListener, errorListener);
        requestQueue.add(jsonObjectRequest);
    }

    public void getFeedsList(Response.Listener responseListener, Response.ErrorListener errorListener) {
        jsonArrayRequest = new JsonArrayRequest(ApiUrl.feedsListURL(authToken), responseListener, errorListener);
        requestQueue.add(jsonArrayRequest);
    }

    public void getFeedsId(int id, Response.Listener responseListener, Response.ErrorListener errorListener){
        jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, ApiUrl.feedsIdURL(id, authToken), null, responseListener, errorListener);
        requestQueue.add(jsonObjectRequest);
    }

    public void getUsersList(Response.Listener responseListener, Response.ErrorListener errorListener) {
        jsonArrayRequest = new JsonArrayRequest(ApiUrl.usersListURL(authToken), responseListener, errorListener);
        requestQueue.add(jsonArrayRequest);
    }

    public void getUsersId(int id, Response.Listener responseListener, Response.ErrorListener errorListener){
        jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, ApiUrl.usersIdURL(id, authToken), null, responseListener, errorListener);
        requestQueue.add(jsonObjectRequest);
    }

    public static String getAuthToken() {
        return authToken;
    }

    public static void setAuthToken(String authToken) {
        RequestHelper.authToken = authToken;
    }

    public RequestQueue getRequestQueue() {
        if (requestQueue == null) {
            // getApplicationContext() is key, it keeps you from leaking the
            // Activity or BroadcastReceiver if someone passes one in.
            requestQueue = Volley.newRequestQueue(context.getApplicationContext());
        }
        return requestQueue;
    }

    public <T> void addToRequestQueue(Request<T> req) {
        getRequestQueue().add(req);
    }

    public ImageLoader getImageLoader() {
        return imageLoader;
    }
}