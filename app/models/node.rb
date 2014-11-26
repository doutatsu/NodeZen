require 'uri'

class Node < ActiveRecord::Base
	def as_json(options)
		hash = super.as_json(options) 
		hash['domain'] = PublicSuffix.parse(URI(self.link).host).sld
		return hash
	end
end
