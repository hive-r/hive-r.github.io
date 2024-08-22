<?php
include 'dashboard_function.php'; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['add_category'])) {
        $message = addCategory($_POST['title'], $_FILES['image']);
    } elseif (isset($_POST['update_category'])) {
        $message = updateCategory($_POST['id'], $_POST['title'], $_POST['image_path']);
    } elseif (isset($_POST['delete_category'])) {
        $message = deleteCategory($_POST['id']);
    }
}
$categories = getCategories();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - SHOTS</title>
    <link rel="stylesheet" href="dashboard_style.css">
</head>
<body>

    <header>
        <h1>SHOTS - Dashboard</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="about.php">About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="contact.php">Contact</a></li>
                <li><a href="dashboard.php" class="active-page">Dashboard</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="title">
            <h2>DASHBOARD</h2>
        </section>
        <section class="dropdown-section">
            <div class="dropdown">
                <button>Categories</button>
                <div class="dropdown-content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#service">Service</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </section>

        <section id="home" class="home-section">
            <!-- Display any messages -->
            <?php if (!empty($message)) { echo "<p>$message</p>"; } ?>

            <h1>Manage Home</h1>
            <!-- Add Category Form -->
            <form action="dashboard.php" method="POST" enctype="multipart/form-data">
                <h2>Add New Category</h2>
                <label for="title">Category Title:</label>
                <input type="text" id="title" name="title" required>
                <label for="image">Category Image:</label>
                <input type="file" id="image" name="image" required>
                <button type="submit" name="add_category">Add Category</button>
            </form>

            <!-- Edit Category Forms for each category -->
            <h2>Edit Categories</h2>
            <?php while($category = $categories->fetch_assoc()) { ?>
                <form action="dashboard.php" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="id" value="<?php echo $category['id']; ?>">
                    <label for="title_<?php echo $category['id']; ?>">Category Title:</label>
                    <input type="text" id="title_<?php echo $category['id']; ?>" name="title" value="<?php echo $category['title']; ?>" required>
                    <label for="image_path_<?php echo $category['id']; ?>">Category Image Path:</label>
                    <input type="text" id="image_path_<?php echo $category['id']; ?>" name="image_path" value="<?php echo $category['image_path']; ?>" required>
                    <button type="submit" name="update_category">Update Category</button>
                    <button type="submit" name="delete_category">Delete Category</button>
                </form>
                <hr>
            <?php } ?>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 SHOTS. All rights reserved. | IVERSON</p>
    </footer>
</html>
