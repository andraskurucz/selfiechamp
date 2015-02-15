package com.poleposition.selfiechamp.camera;

import android.app.Activity;
import android.os.Bundle;

import com.poleposition.selfiechamp.R;

/**
 * Created by kuruczmester on 24/01/15.
 */
public class CameraActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera);
        if (null == savedInstanceState) {
            getFragmentManager().beginTransaction()
                    .replace(R.id.container, CameraFragment.newInstance())
                    .commit();
        }
    }

}
