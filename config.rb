#================================================#
#Open and Read 'package.json'
#================================================#
begin
	require 'open-uri'
	require 'json'

	packOpen = open('package.json', "UserAgent" => "Ruby-Wget").read
	packJson = JSON.parse(packOpen)
	folderConfig = packJson['folderConfig']
rescue
	abort("Error trying to read 'package.json'. Make sure you have one and have your 'folderConfig' configured. Also check if your Ruby have 'open-uri' and 'json' and can use them.")
end

#================================================#
#Default Properties
#================================================#
project_type = :stand_alone
relative_assets = true
disable_warnings = false
preferred_syntax = :scss
sprite_engine = :chunky_png
chunky_png_options = {:compression => Zlib::BEST_COMPRESSION}

#================================================#
#Compass Directories
#================================================#
projectPath = packJson['allUrl']
javascripts_dir = projectPath + folderConfig['user_javascript_folder']
css_dir = projectPath + folderConfig['user_css_folder']
images_dir = projectPath + folderConfig['user_image_folder']
fonts_dir = projectPath + folderConfig['user_fonts_folder']
generated_images_dir = projectPath + folderConfig['user_image_folder']
sass_dir = projectPath + folderConfig['user_sass_folder']
cache_dir = projectPath + folderConfig['user_sasscache_folder']


#================================================#
#Environment Rules
#================================================#
if environment == :development
	output_style = :expanded
	line_comments = true
	if folderConfig['user_sourcemaps'] == true
		enable_sourcemaps = true
		sass_options = {:sourcemap => true, :cache_location => cache_dir }
	else
		enable_sourcemaps = false
		sass_options = { :cache_location => cache_dir }
	end

elsif environment == :production
	output_style = :compressed
	line_comments = false
	sass_options = { :cache_location => cache_dir }
	enable_sourcemaps = false

	on_stylesheet_saved do |filename|
		if File.exists?(filename)
			FileUtils.rm_rf(filename + '.map')
		end
	end
end

#================================================#
#Compass Spriting Rules
#================================================#
on_sprite_generated do |sprite_data|
	sprite_data.metadata['Caption'] = "©" + packJson['author']
end

on_sprite_saved do |filename|
	if File.exists?(filename)
		FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
		FileUtils.rm_rf(filename)
	end
end

on_stylesheet_saved do |filename|
	if File.exists?(filename)
		css = File.read filename
		File.open(filename, 'w+') do |f|
			f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\.png)}, '.png?v=\k<hash>')
		end
	end
end