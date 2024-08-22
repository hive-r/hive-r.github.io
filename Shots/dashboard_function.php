<?php
include 'db_connection.php';

// Function to add a new category
function addCategory($title, $image) {
    global $conn;

    $target_dir = "images/";
    $target_file = $target_dir . basename($image["name"]);
    move_uploaded_file($image["tmp_name"], $target_file);

    $sql = "INSERT INTO categories (title, image_path) VALUES ('$title', '$target_file')";

    if ($conn->query($sql) === TRUE) {
        return "New category added successfully";
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Function to update an existing category
function updateCategory($id, $title, $image_path) {
    global $conn;

    $sql = "UPDATE categories SET title='$title', image_path='$image_path' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        return "Category updated successfully";
    } else {
        return "Error updating record: " . $conn->error;
    }
}

// Function to fetch all categories
function getCategories() {
    global $conn;

    $sql = "SELECT * FROM categories";
    return $conn->query($sql);
}

// Function to get a single category by ID (for editing)
function getCategoryById($id) {
    global $conn;

    $sql = "SELECT * FROM categories WHERE id=$id";
    return $conn->query($sql)->fetch_assoc();
}

// Function to delete a category
function deleteCategory($id) {
    global $conn; // Use $conn instead of $db

    $stmt = $conn->prepare("DELETE FROM categories WHERE id = ?");
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        return "Category deleted successfully.";
    } else {
        return "Error deleting category: " . $stmt->error;
    }
}
?>


