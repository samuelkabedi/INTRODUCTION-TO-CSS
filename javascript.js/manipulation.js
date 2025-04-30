<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Content with JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        #dynamicText {
            font-size: 20px;
            color: blue;
        }
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>JavaScript Interaction Example</h1>
    <p id="dynamicText">Click the button to change this text!</p>
    <button onclick="changeText()">Change Text</button>
    <button onclick="toggleHighlight()">Toggle Highlight</button>
    <button onclick="addElement()">Add Element</button>
    <button onclick="removeElement()">Remove Element</button>
    
    <div id="container"></div>
