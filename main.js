var Canvas = document.getElementById("Canvas");
var Ctx = Canvas.getContext("2d");
var Colour = "Red";
var Mouse_Event = "Empty";
var Last_position_X;
var Last_position_Y;
var Width_Line = 2;
var Radius=40

Canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    Colour = document.getElementById("colour_text_input").value;
    Width_Line = document.getElementById("width_input").value;
    Mouse_Event = "mouse_down"
    Radius=document.getElementById("radius_input").value;
}

Canvas.addEventListener("mousemove", myMouseMove);
Canvas.addEventListener("mouseup", MyMouseUp);
Canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseMove(e) {
    Current_position_x = e.clientX - Canvas.offsetLeft;
    Current_position_y = e.clientY - Canvas.offsetTop;
    if (Mouse_Event == "mouse_down") {
        Ctx.beginPath();
        Ctx.strokeStyle = Colour;
        Ctx.lineWidth = Width_Line;
        console.log("x=" + Last_position_X + ", y=" + Last_position_Y);
        Ctx.moveTo(Last_position_X, Last_position_Y);
        Ctx.arc(Current_position_x, Current_position_y,Radius, 0, 360)
        Ctx.stroke();
    };
    Last_position_X = Current_position_x;
    Last_position_Y = Current_position_y;
}

function MyMouseUp(e) {
    Mouse_Event = "mouse_up";
}

function myMouseLeave(e) {
    Mouse_Event = "mouse_leave";
}

function Clear() {
    Ctx.clearRect(0, 0, 800, 600);
}