<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet">
    <title>Online Exam System</title>
</head>

<body>

    <section id="oes">
        <div class="container">
            <div class="main-div">
                <h1 class="display-1 text-center mt-5 fw-bold text-primary">Online Quiz</h1>
                <h2 class="display-4 text-success fw-bold">All The Best!!!</h2>
                <div class="inner-div">
                    <h2 class="question">Questions Appear Here</h2>
                    <ul class="list-unstyled">
                        <li>
                            <input type="radio" name="answer" id="ans1" class="answer" >
                            <label for="ans1" id="option1">Answer Option</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="ans2" class="answer">
                            <label for="ans2" id="option2">Answer Option</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="ans3" class="answer" >
                            <label for="ans3" id="option3">Answer Option</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="ans4" class="answer" >
                            <label for="ans4" id="option4">Answer Option</label>
                        </li>
                    </ul>
                    <button id="submit" class="btn btn-info">Next</button>
                    <div id="prevv" class="showprev">
                        <button id="prev" class="btn btn-info " class="fadeOut" >Previous</button>
                    </div>
                    <div id="showScore" class="scoreArea">

                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="/quiz.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
        integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
        integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
        crossorigin="anonymous"></script>

</body>

</html>