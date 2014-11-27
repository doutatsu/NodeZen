require 'uri'

class Node < ActiveRecord::Base
	def as_json(options)
		hash = super.as_json(options)
		hash['domain'] = PublicSuffix.parse(URI(self.link).host).sld unless self.link.nil?
    hash['edges'] = self.edges.split(",").map(&:to_i) unless self.edges.nil?
		return hash
	end
end