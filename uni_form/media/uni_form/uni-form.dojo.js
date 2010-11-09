/*
jQuery.fn.uniform = function(settings) {
  settings = jQuery.extend({
    valid_class    : 'valid',
    invalid_class  : 'invalid',
    focused_class  : 'focused',
    holder_class   : 'ctrlHolder',
    field_selector : 'input, select, textarea'
  }, settings);
  
  return this.each(function() {
    var form = jQuery(this);
 
    // Select form fields and attach them higlighter functionality
    form.find(settings.field_selector).focus(function() {
      form.find('.' + settings.focused_class).removeClass(settings.focused_class);
      jQuery(this).parents("." + settings.holder_class).addClass(settings.focused_class)
    }).blur(function() {
      form.find('.' + settings.focused_class).removeClass(settings.focused_class);
    });
  });
};

// Auto set on page load...
$(document).ready(function() {
  q = jQuery('form.uniForm');
  if(q.length) {
    q.uniform();
  }
  $(document.activeElement).focus() //safari doesn't support this and has no alternative
});
*/

function find_parent_by_class(elm, name) {
  if (dojo.hasClass(elm, name)) {
    return elm;
  } else if (elm.parentNode) {
    return find_parent_by_class(elm.parentNode, name);
  } 
  return undefined;
}
function process_uniform(form){ 
  var valid = 'valid';
  var invalid_class = 'invalid';
  var focused_class = 'focused';
  var holder_class = 'ctrlHolder';
  var field_selector = 'input, select, textarea';
  
  elms = dojo.query(field_selector, form);
  
  elms.connect("focus", function(e){
    dojo.query('.' + focused_class).removeClass(focused_class);
    elm = find_parent_by_class(e.target, holder_class);
    console.log(elm);
    if(elm) dojo.addClass(elm, focused_class);
  });
  
  elms.connect("blur", function(e){
    dojo.query('.' + focused_class).removeClass('focused_class');
  });
  
}
dojo.ready(function() {
  dojo.query('form.uniForm').forEach(process_uniform);
});