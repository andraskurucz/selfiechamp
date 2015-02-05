package com.poleposition.selfiechamp;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

public class FeedFragment extends Fragment {

    private RecyclerView mRecyclerView;
    private FeedAdapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;

    public static FeedFragment newInstance(CharSequence title, int indicatorColor, int dividerColor) {
        Bundle bundle = new Bundle();

        FeedFragment fragment = new FeedFragment();
        fragment.setArguments(bundle);

        return fragment;
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_feed, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        Bundle args = getArguments();

        mRecyclerView = (RecyclerView) view.findViewById(R.id.recycler_view);
        mRecyclerView.setHasFixedSize(true);

        mLayoutManager = new LinearLayoutManager(getActivity());
        mRecyclerView.setLayoutManager(mLayoutManager);

        ArrayList<String> feedList = new ArrayList<String>();
        feedList.add("hello 0");
        feedList.add("hello 1");
        feedList.add("hello 2");
        feedList.add("hello 3");
        mAdapter = new FeedAdapter(feedList);
        mRecyclerView.setAdapter(mAdapter);
    }
}
