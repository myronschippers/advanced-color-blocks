# jQuery Events

## Events

```JS
$('.js-addPerson').on('click', onAddPerson);
```

## Event Handlers

```JS
function onAddPerson(event) {
  // CODE HERE
}
```


## Events for Dynamically Generated Elements

The third parameter we added of `.js-person` is used to filter the clicked element for one that matches that specific selector.

```JS
$('.js-people').on('click', '.js-person', onClickDeletePerson);
```


## Event Methods

- `.on()`
- `.click()`
- `.dblclick()`
- `.change()`


## References

* [jQuery Event Documentation](http://api.jquery.com/category/events/)