# miniQuery challenge

##Learning Competencies
- Create modular code in Javascript.
- Decompose and reimplement jQuery.

##Summary
[jQuery](http://jquery.com/) is a very popular Javascript library. You've used it many times. In this challenge we will decompose jQuery and reimplement some of its common functionality. The objectives:

- Remove the "magic" from jQuery and realize that it's nothing you couldn't write.
- jQuery is a mature library, we could learn a lot by inspecting its code patterns.
- Understand and create modules in Javascript.

### Setting Up the Application
Under the source folder, you'll find an index.html file and a lib folder. The index.html is very simple, it primarily links to our miniQuery library and allows us to test it easily. The lib folder contains miniQuery.js, this is where you'll be spending most of your time. You are NOT allowed to include the jQuery or any other external library, this would defeat the purpose of this challenge. You are, however, encouraged to read the jQuery code, get inspired.

##Releases
###Release 0: selectors, show, hide, addClass and removeClass
Read [Module Pattern chapter of Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)

Implement the following jQuery functionalities:

- select by id:
```javascript
// should return <div id="eyed">eyed</div>
$('#eyed')
```
- select by class:
```javascript
// should return <div class="klass">klass</div>
$('.klass')
```
- select by tag name:
```javascript
// should return <a href="#hello">click me</a>
$('a')
```
- hide and show elements:
```javascript
$('.klass').hide() // hides the div
$('.klass').show() // shows the div
```
- addClass and removeClass elements:
```javascript
// this should return <div class="klass shadi">klass</div>
$('.klass').addClass('shadi')
// this should return <div class="klass">klass</div>
$('.klass').removeClass('shadi')
```

###Release 1:  Pub/Sub, on and trigger
Read [Observer Pattern chapter of Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript), most importantly Observer vs Pub/Sub and Publish/Subscribe Implementations sections.

Implement the following functionalities:

- on:
```javascript
$('.klass').on('shadi', function() { console.log("awesome") });
// this should print "awesome" in the console.
$('.klass').trigger('shadi');
```

###Release 2: Ajax
Implement the following jQuery functionalities:

```javascript
// this should an ajax request to the url and call the success callback if successful and fail callback if unsuccessful.
$.ajax({
 url: 'someurl',
 type: 'GET',
 success: function() {
   //do something
 },
 fail: function() {
  //do something
 }
});
```

