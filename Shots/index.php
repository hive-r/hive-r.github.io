<?php
include 'db_connection.php';

$sql = "SELECT * FROM categories";
$result = $conn->query($sql);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHOTS</title>
    <link rel="stylesheet" href="index_style.css"> 
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <header>
        <h1>SHOTS</h1>
        <nav>
            <ul>
                <li><a href="index.php" class="active-page">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="contact.php">Contact</a></li>
                <li><a href="dashboard.php">Dashboard</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="image-grid">
            <div class="image-container"> 
                <img src="images/1.png" alt="Image 1">
                <div class="image-overlay">
                    <div class="image-content">
                        <h3>Category 1</h3>
                        <a class="button" href="gallery.php">MORE PHOTOS</a>
                    </div>
                </div>
            </div>
            <div class="image-container"> 
                <img src="images/2.png" alt="Image 2">
                <div class="image-overlay">
                    <div class="image-content">
                        <h3>Category 2</h3>
                        <a class="button" href="gallery.php">MORE PHOTOS</a>
                    </div>
                </div>
            </div> 
            <div class="image-container"> 
                <img src="images/3.png" alt="Image 3">
                <div class="image-overlay">
                    <div class="image-content">
                        <h3>Category 3</h3>
                        <a class="button" href="gallery.php">MORE PHOTOS</a>
                    </div>
                </div>
            </div>
            <div class="image-container"> 
                <img src="images/4.png" alt="Image 4">
                <div class="image-overlay">
                    <div class="image-content">
                        <h3>Category 4</h3>
                        <a class="button" href="gallery.php">MORE PHOTOS</a>
                    </div>
                </div>
            </div>
            <div class="image-container"> 
                <img src="images/5.png" alt="Image 5">
                <div class="image-overlay">
                    <div class="image-content">
                        <h3>Category 5</h3>
                        <a class="button" href="gallery.php">MORE PHOTOS</a>
                    </div>
                </div>
            </div>
            <div class="image-container"> 
                <img src="images/6.png" alt="Image 6">
                <div class="image-overlay">
                    <div class="image-content">
                        <h3>Category 6</h3>
                        <a class="button" href="gallery.php">MORE PHOTOS</a>
                    </div>
                </div>
            </div>
        </section> 
    </main>

    <footer>
        <p>&copy; 2023 SHOTS. All rights reserved. | IVERSON</p>
        <button id="scroll-top">Back to Top</button>
    </footer>

    <script>
        $(document).ready(function(){
            // Show or hide the button based on scroll position
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('#scroll-top').fadeIn();
                } else {
                    $('#scroll-top').fadeOut();
                }
            });

            // Scroll to the top when the button is clicked
            $('#scroll-top').click(function(){
                $('html, body').animate({scrollTop : 0}, 800);
                return false;
            });
        });
    </script>
</body>
</html>
