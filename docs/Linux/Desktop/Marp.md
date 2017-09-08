_Source: https://www.slideshare.net/iktakahiro/how-to-build-a-custom-theme-for-marp_

```bash
git clone https://github.com/yhatt/marp.git
cd marp/sass/themes
cp gaia.sass yourtemplate.sass
cd ../../
npm install
```

Add the theme to `coffee/classes/mds_main_menu.coffee` - line 269

```coffee
            {
              label: '&YOURTEMPLATENAME'
              enabled: @window?
              type: if @window? then 'radio' else 'normal'
              checked: @states.theme == 'yourtemplate'
              click: => @window.mdsWindow.send 'setTheme', 'yourtemplate' unless @window.mdsWindow.freeze
            }


```

Add the theme to `coffee/classes/mds_md_setting.coffee` - line 32

```coffee
      return if basename in ['default', 'gaia', 'yourtemplate'] then "css/themes/#{basename}.css" else null
```

Start npm
```bash
npm start
```
