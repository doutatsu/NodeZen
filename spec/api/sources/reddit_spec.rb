require 'rails_helper'
require 'api/sources/reddit.rb'

RSpec.describe Reddit do
  describe "should show Posts" do
    describe "that are hot" do
      it "should succeed" do
        response = Reddit.getPosts(:hot, "gaming")
        expect(response).not_to eq(nil)
      end
    end
    describe "that are top" do
      it "should succeed" do
        response = Reddit.getPosts(:top, "gaming")
        expect(response).not_to eq(nil)
      end
    end
    describe "that are new" do
      it "should succeed" do
        response = Reddit.getPosts(:new, "gaming")
        expect(response).not_to eq(nil)
      end
    end
    describe "that are subreddits" do
      it "should succeed" do
        response = Reddit.getSubreddits
        expect(response).not_to eq(nil)
      end
    end
  end
  describe "should search subreddits" do
    it "should find one" do
      response = Reddit.getSubreddit("gaming")
      expect(response).not_to eq(nil)
    end
    it "shouldn't find one" do
      response = Reddit.getSubreddit("bla")
      expect(response).to eq(error: "Subreddit not found")
    end
  end
  describe "normalize post" do
    it "should change Reddit keys into NodeZen keys" do
      response = Reddit.getPosts(:hot, "gaming").first
      expect(response).not_to eq(nil)
      normalizedPost = Reddit.normalizeKeys(response)
      expect(normalizedPost.keys).to eq([:title,:tags,:link,:preview,:kind])
    end
  end
end
