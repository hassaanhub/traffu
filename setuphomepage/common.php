<?php 
session_start();
$con = mysqli_connect('localhost','root','','ali');
if(!$con){
  die('page not accessible');
}
$main_url = 'http://localhost/setuphomepage/';

// Get All Pending Products
$q = 'Select * From Products where p_status="2"';
$pending_products_query = mysqli_query($con, $q);
$pending_products = mysqli_num_rows($pending_products_query);

// Get All Products
$q1 = 'Select * From Products where p_status="1"';
$all_products_query = mysqli_query($con, $q1);
$all_products = mysqli_num_rows($all_products_query);

// Get All Categories
// $q2 = 'Select * From categories where c_status="1"';
$q2 = 'Select * From categories';
$all_categories_query = mysqli_query($con, $q2);
$all_categories = mysqli_num_rows($all_categories_query);

// Get All Categories
$q2 = 'Select * From categories where c_status="1"';
$all_active_categories_query = mysqli_query($con, $q2);
$all_active_categories = mysqli_num_rows($all_active_categories_query);

?>
  