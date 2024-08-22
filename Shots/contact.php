<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHOTS</title>
    <link rel="stylesheet" href="contact_style.css"> 
</head>
<body>

    <header>
        <h1>SHOTS</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="about.php"></a>About</a></li>
                <li><a href="gallery.php">Gallery</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="contact.php" class="active-page">Contact</a></li>
                <li><a href="dashboard.php">Dashboard</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="title">
            <h2>CONTACT</h2>
        </section>

        <section class="contact-section1">
            <div class="contact-info">
                <form method="POST">
                    <label for="contact-text">First Name</label><br>
                    <textarea id="contact-text" placeholder="Type your First Name here..."></textarea><br><br>
                </form>
            </div>
            <div class="contact-info">
                <form method="POST">
                    <label for="contact-text">Last Name</label><br>
                    <textarea id="contact-text" placeholder="Type your Last Name here..."></textarea><br><br>
                </form>
            </div>
        </section>  

        <section class="contact-section2">
            <div class="contact-info">
                <form method="POST">
                    <label for="contact-text">Email</label><br>
                    <textarea id="contact-text" placeholder="Type your Email here..."></textarea><br><br>
                </form>
            </div>
            <div class="contact-us">
                <h3>Address</h3>
                <p>Lorem ipsum dolor sit amet, consectetur necessitatibus adipisicing elit.</p>
            </div>
        </section> 
        
        <section class="contact-section2">
            <div class="contact-info">
                <form method="POST">
                    <label for="contact-text">Subject</label><br>
                    <textarea id="contact-text" placeholder="Type your Subject here..."></textarea><br><br>
                </form>
            </div>
            <div class="contact-us">
                <h3>Email</h3>
                <p>Lorem ipsum dolor sit amet, consectetur necessitatibus adipisicing elit.</p>
            </div>
        </section> 
        <section class="contact-section2">
            <div class="contact-info">
                <form method="POST">
                    <label for="contact-text">Message</label><br>
                    <textarea class="textarea1" id="contact-text" placeholder="Type your Message here..."></textarea><br><br>
                </form>
            </div>
            <div class="contact-us">
                <h3>Message</h3>
                <p>Lorem ipsum dolor sit amet, consectetur necessitatibus adipisicing elit.</p>
            </div>
        </section> 

        <section class="contact-section2">
                <a class="button" href="index.php">SUBMIT</a>
        </section> 
    </main>

    <footer>
        <p>&copy; 2023 SHOTS. All rights reserved. | IVERSON</p>
    </footer>
</body>
</html>