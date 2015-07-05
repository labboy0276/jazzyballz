<?php
/**
 * @file
 * Template for Panopoly jazzy.
 *
 * Variables:
 * - $css_id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 * panel of the layout. This layout supports the following sections:
 */
?>

<div class="panel-display jazzy clearfix <?php if (!empty($class)) { print $class; } ?>" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <section class="section" id="jazzy-about">
    <div class="container" id="about">
      <div class="row">
        <div class="col-md-12 col-sm-12 jazzy-about-2">
          <?php print $content['about2']; ?>
        </div>
  	  </div>
    </div>
  </section>

  <section class="section" id="jazzy-gallery">
    <div class="container" id="gallery">
      <div class="row">
        <div class="col-md-12 col-sm-12 jazzy-gallery-1">
          <?php print $content['gallery1']; ?>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="jazzy-order">
    <div class="container" id="order">
      <div class="row">
        <div class="col-md-12 col-sm-12 jazzy-order-top">
          <?php print $content['order']; ?>
        </div>
      </div>
      <div class="row top-orders">
        <div class="col-md-6 col-sm-6 jazzy-order-top-1">
          <?php print $content['order1']; ?>
        </div>
        <div class="col-md-6 col-sm-6 jazzy-order-top-2">
          <?php print $content['order2']; ?>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 jazzy-order-mid">
          <?php print $content['ordermid']; ?>
        </div>
      </div>
      <div class="row mid-orders">
        <div class="col-md-6 col-sm-6 jazzy-order-mid-1">
          <?php print $content['order3']; ?>
        </div>
        <div class="col-md-6 col-sm-6 jazzy-order-mid-2">
          <?php print $content['order4']; ?>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 jazzy-order-bottom">
          <?php print $content['orderbottom']; ?>
        </div>
      </div>
      <div class="row bottom-orders">
        <div class="col-md-6 col-sm-6 jazzy-order-bottom-3">
          <?php print $content['order5']; ?>
        </div>
        <div class="col-md-6 col-sm-6 jazzy-order-bottom-3">
          <?php print $content['order6']; ?>
        </div>
      </div>
      <div class="row" id="slideout">
        <div class="col-md-12 col-sm-12 jazzy-orders-colors" id="containclickme">
          <div class="click-div-arrow" id="click-me">
            <?php print $content['ordercolor']; ?>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="jazzy-custom">
    <div class="container" id="custom">
      <div class="row">
        <div class="col-md-12 col-sm-12 jazzy-custom-1">
          <?php print $content['custom1']; ?>
        </div>
      </div>
    </div>
  </section>

</div><!-- /.jazzy -->



