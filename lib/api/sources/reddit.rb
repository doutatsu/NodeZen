class Reddit

  # Authorization
  @r = Redd.it(:script, "ygi2IRaU9819_g", "c7SnujuekiWVYZSCUOoxBwfCRgw", "doutatsu", "master")
  @r.authorize!
  # Get Posts for selected subreddit. Default 25 posts from new or top or hot
  def self.getPosts(type, subreddit)
    if type == :hot
      posts = @r.get_hot("#{subreddit}")
    elsif type == :new
      posts = @r.get_new("#{subreddit}")
    elsif type == :top
      posts = @r.get_top("#{subreddit}")
    else
      return "Type is wrong or not supplied"
    end
    # Change Redd objects into Hashes
    posts.map! {|post| post.to_hash}
    return posts
  end
  # Get All Subreddits
  def self.getSubreddits
    subreddits = @r.get_top("reddits")
    return subreddits
  end
  # Find Subreddit
  def self.getSubreddit(subreddit)
    subreddit = @r.subreddit_from_name("#{subreddit}")
    return subreddit
  rescue Redd::Error::PermissionDenied => error
    return {error: "Subreddit not found"}
  end
  # Change Reddit keys into NodeZen keys
  def self.normalizeKeys(data)
    mappings = {:subreddit => :tags, :url => :link, :thumbnail => :preview }
    data = data.slice(:title,:subreddit,:url,:thumbnail)
    # Change Reddit key names into NodeZen keys
    data.keys.each { |k| data[ mappings[k] ] = data.delete(k) if mappings[k] }
    data[:kind] = "reddit"
    return data
  end
end