package com.poleposition.selfiechamp.ui;

import android.graphics.Color;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.poleposition.selfiechamp.R;
import com.poleposition.selfiechamp.feed.FeedFragment;

import java.util.ArrayList;
import java.util.List;

public class SlidingTabsFragment extends Fragment {

    static class SamplePagerItem {
        private final CharSequence mTitle;
        private final int mIndicatorColor;
        private final int mDividerColor;

        SamplePagerItem(CharSequence title, int indicatorColor, int dividerColor) {
            mTitle = title;
            mIndicatorColor = indicatorColor;
            mDividerColor = dividerColor;
        }

        Fragment createFragment(int i) {
            switch (i){
                case 0:
                    return FeedFragment.newInstance(mTitle, mIndicatorColor, mDividerColor);
                case 1:
                    return FeedFragment.newInstance(mTitle,mIndicatorColor, mDividerColor);
                case 2:
                    return FeedFragment.newInstance(mTitle, mIndicatorColor, mDividerColor);
                default:
                    return null;
            }

        }
        CharSequence getTitle() {
            return mTitle;
        }
        int getIndicatorColor() {
            return mIndicatorColor;
        }
        int getDividerColor() {
            return mDividerColor;
        }
    }

    static final String LOG_TAG = "SlidingTabsColorsFragment";

    private SlidingTabLayout mSlidingTabLayout;

    private ViewPager mViewPager;


    private List<SamplePagerItem> mTabs = new ArrayList<SamplePagerItem>();

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mTabs.add(new SamplePagerItem(
                "tab 1", // Title
                Color.BLUE, // Indicator color
                Color.GRAY // Divider color
        ));

        mTabs.add(new SamplePagerItem(
                "tab 2", // Title
                Color.RED, // Indicator color
                Color.GRAY // Divider color
        ));

        mTabs.add(new SamplePagerItem(
                "tab 3", // Title
                Color.YELLOW, // Indicator color
                Color.GRAY // Divider color
        ));

        mTabs.add(new SamplePagerItem(
                "tab 4", // Title
                Color.GREEN, // Indicator color
                Color.GRAY // Divider color
        ));
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_main, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        mViewPager = (ViewPager) view.findViewById(R.id.viewpager);
        mViewPager.setAdapter(new SampleFragmentPagerAdapter(getChildFragmentManager()));

        mSlidingTabLayout = (SlidingTabLayout) view.findViewById(R.id.sliding_tabs);
        mSlidingTabLayout.setDistributeEvenly(true);
        mSlidingTabLayout.setViewPager(mViewPager);
        mSlidingTabLayout.setCustomTabColorizer(new SlidingTabLayout.TabColorizer() {

            @Override
            public int getIndicatorColor(int position) {
                return mTabs.get(position).getIndicatorColor();
            }
        });
    }

    class SampleFragmentPagerAdapter extends FragmentPagerAdapter {

        SampleFragmentPagerAdapter(FragmentManager fm) {
            super(fm);
        }

        @Override
        public Fragment getItem(int i) {
            return mTabs.get(i).createFragment(i);
        }

        @Override
        public int getCount() {
            return mTabs.size()-1;
        }

        public int getTabCount(){
            return mTabs.size();
        }

        public CharSequence getPageTitle(int position) {
            return mTabs.get(position).getTitle();
        }
    }
}