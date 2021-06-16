# Save this file in your Jekyll `_plugins/` dir
Jekyll::Hooks.register :pages, :pre_render do |page|

  # get the page's last modified time
  modification_time = File.mtime( page.path )

  # inject modification_time into page's data.
  page.data['last-mod-time'] = modification_time

end