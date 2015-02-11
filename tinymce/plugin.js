(function($) {
"use strict";   
 

			
 			//Shortcodes
            tinymce.PluginManager.add( 'zillaShortcodes', function( editor, url ) {
				
				editor.addCommand("zillaPopup", function ( a, params )
				{
					var popup = params.identifier;
					tb_show("Inserir Brasa Shortcode", url + "/popup.php?popup=" + popup + "&width=" + 800);
				});
     
                editor.addButton( 'zilla_button', {
                    type: 'splitbutton',
                    icon: false,
					title:  'Brasa Shortcodes',
					onclick : function(e) {},
					menu: [
					{text: 'Alertas',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Alertas',identifier: 'alert'})
					}},
					{text: 'Botoes',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Botoes',identifier: 'button'})
					}},
					{text: 'Colunas',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Colunas',identifier: 'columns'})
					}},
					{text: 'Tabs',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Tabs',identifier: 'tabs'})
					}},
					{text: 'Toggle',onclick:function(){
						editor.execCommand("zillaPopup", false, {title: 'Toggle',identifier: 'toggle'})
					}},
					//List your shortcodes like this
					]
					
                
        	  });
         
          });
         

 
})(jQuery);
