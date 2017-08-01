# feature-list
This is a great plugin for showing your product features dynamically.

## Getting Started

You need to call `featureList()` on an container element you like to intialize the plugin.
View [Demo](https://smshakil.github.io/feature-list/)

### Prerequisites

Feature-List depends on `jQuery`.

```
// css styles

<link rel="stylesheet" href="css/bootstrap.min.css">  // This is optional. Use only for better grid and responsiveness.
<link rel="stylesheet" href="css/icofont.min.css">   // We have used icofont as our default icon set. You may like to use 'fontawesome' or other.
<link rel="stylesheet" href="css/feature-list.css">

// Js files

<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/bootstrap.min.js"></script>  // This is optional. Use only for better grid and responsiveness.
<script src="js/feature-list.min.js"></script>
```

### HTML Markup

```
<div class="featureList">
  <img src="images/tabFrame.png" class="deviceImg" alt="Tab">
  
    <!-- use your preferred icon set -->
    
  <i class="icofont icofont-hat-alt featureIcon activeFeatureIcon"></i>
  <i class="icofont icofont-trophy-alt featureIcon"></i>
  .................
</div>
```
```
<div class="featureDetails activeDetails">
  <i class="icofont icofont-hat-alt"></i>
  <h2>Vision</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quae voluptatibus consequuntur voluptas debitis excepturi inventore, cum velit laboriosam, veniam et sapiente natus dolores! Quisquam architecto, iusto soluta hic? Beatae.
  </p>
</div>
<div class="featureDetails">
  <i class="icofont icofont-trophy-alt"></i>
  <h2>Contest</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel adipisci modi a ipsum autem, voluptas dicta molestiae numquam eius voluptates libero, minus! Excepturi libero quidem corporis ullam nihil est perferendis.
  </p>
</div>
..................
```

### CSS Styling

Upto six icons and details are styled. If you want to use more or less, style it in your own way.


### Installing

A step by step series of examples that tell you have to get a development env running

Simple installation

```
$('.featureList').featureList()
```

Or, with options

```
$('.featureList').featureList({
  iconBackground: "rgba(0,0,0,0.1)",
  speed: 3000
});
```


## Options

```
iconColor: Hex/rgb/rgba/color-name,  //Type-'string', default-'#404040'
iconSize: px/em/rem/vh/vw/vmin/vmax,  //Type-'string'/number, default-'80px'
iconPadding: px/em/rem/vh/vw/vmin/vmax,  //Type-'string'/number, default-'10px'
iconBackground: Hex/rgb/rgba/color-name,  //Type-'string', default-'transparent'
speed: milliseconds  //Type-number, default-'5000'
```


## Contributing

Feel free for submitting pull requests to me.

## Authors

* **S.M. Shakil** - *Initial work* - [S.M.Shakil](https://github.com/smShakil)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
