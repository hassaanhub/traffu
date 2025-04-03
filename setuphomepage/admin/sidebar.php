<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <a href="<?php echo $main_url; ?>admin/all-pending-products.php" class="text-decoration-none text-dark">All Pending Products</a>
    <span class="badge bg-primary rounded-pill"><?php $pending_products ?></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <a href="<?php echo $main_url; ?>admin/all-products.php" class="text-decoration-none text-dark">All Products</a>
    <span class="badge bg-primary rounded-pill"><?php $all_products ?></span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <a href="<?php echo $main_url; ?>admin/add-product.php" class="text-decoration-none text-dark">Add A New Product</a>
  </li>
<!-- <li class="list-group-item d-flex justify-content-between align-items-center">
    Update Product
  </li> -->
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <!-- Delete Product
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Add A New Category -->
    <a href="<?php echo $main_url; ?>admin/add-category.php" class="text-decoration-none text-dark">Categories info</a>
  </li>
</ul>
