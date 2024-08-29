<?php
header("Content-Type: application/json");
$n = $_POST["nombre"];
$fe = $_POST["fecha"];
$c = $_POST["contenido"];
$fo = $_POST["foto"];

$conexion = new mysqli("localhost", "root", "", "proyecto1");

$sql = "INSERT INTO articulos (nombre, fecha, contenido, foto, autor)
VALUES ('$n', '$fe', '$c', '$fo', 1)";

$e = $conexion->query($sql);
$res = [
    "respuesta" => "ok"
];
if ($conexion->affected_rows == 0) {
    $res["respuesta"] = "error";
}
echo json_encode($res);


