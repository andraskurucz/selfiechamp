package com.poleposition.selfiechamp;


import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.ArrayList;

public class FeedAdapter extends RecyclerView.Adapter<FeedAdapter.FeedViewHolder> {


    private ArrayList<String> feedItems;

    public FeedAdapter(ArrayList<String> feedItems){

        this.feedItems = feedItems;
    }

    @Override
    public FeedViewHolder onCreateViewHolder(ViewGroup viewGroup, int i) {
        View itemView = LayoutInflater.
                from(viewGroup.getContext()).
                inflate(R.layout.cardlayout_feed, viewGroup, false);

        return new FeedViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(FeedViewHolder feedViewHolder, int i) {

        String stuff = feedItems.get(i);
        feedViewHolder.textView.setText(stuff);
    }

    @Override
    public int getItemCount() {
        return feedItems.size();
    }

    public static class FeedViewHolder extends RecyclerView.ViewHolder {

        protected TextView textView;

        public FeedViewHolder(View itemView) {
            super(itemView);

            textView = (TextView) itemView.findViewById(R.id.info_text);
        }
    }


}
