<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHOTS - Gallery</title>
    <link rel="stylesheet" href="gallery_style.css"> 
</head>
<body>
    <header>
        <h1>SHOTS</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="gallery.php" class="active-page">Gallery</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="contact.php">Contact</a></li>
                <li><a href="dashboard.php">Dashboard</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="title">
            <h2>PHOTO GALLERY</h2>
        </section>
        <section class="dropdown-section">
            <div class="dropdown">
                <button>Categories</button>
                <div class="dropdown-content">
                    <a href="#category1">Category 1</a>
                    <a href="#category2">Category 2</a>
                    <a href="#category3">Category 3</a>
                </div>
            </div>
        </section>

        <section id="category1" class="photo-category">
            <h3>Category 1</h3>
            <section class="image-grid">
                <div class="image-container"> 
                    <img src="images/1.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/2.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/3.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/4.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
            </section>
        </section>
        
        <section id="category2" class="photo-category">
            <h3>Category 2</h3>
            <section class="image-grid">
                <div class="image-container"> 
                    <img src="images/1.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/2.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/3.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/4.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
            </section>
        </section>

        <section id="category3" class="photo-category">
            <h3>Category 3</h3>
            <section class="image-grid">
                <div class="image-container"> 
                    <img src="images/1.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/2.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/3.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
                <div class="image-container"> 
                    <img src="images/4.png" alt="Image 1">
                    <div class="image-content">
                        <h3>Description</h3>
                    </div>
                </div>
            </section>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 SHOTS. All rights reserved. | IVERSON</p>
    </footer>
</body>
</html>
