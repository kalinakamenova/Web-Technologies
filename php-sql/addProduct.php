<?php
    require_once("./createConnection.php");

    function addProduct(string $productName, int $quantity){
    try {

        $db = new DB();
        $connection = $db->getConnection();

        //id is automatically incremented
        $query = "INSERT into online_shop (name, quantity) values ('$productName', $quantity)";

        $stmt = $connection->prepare($query);
        $stmt->execute();

    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    }
?>