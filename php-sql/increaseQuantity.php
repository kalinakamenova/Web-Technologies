<?php
    require_once("./createConnection.php");

    function increaseQuantity(int $productID, int $quantityToAdd){
        try{
            $db = new DB();
            $connection = $db->getConnection();

            $query = "SELECT quantity FROM online_shop WHERE id=?";
            $stmt = $connection->prepare($query);
            $stmt->execute([$productID]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $currentQuantity = $row["quantity"];
            $currentQuantity = $currentQuantity + $quantityToAdd;

            $query = "UPDATE online_shop SET quantity=? WHERE id=?";
            $stmt = $connection->prepare($query);
            $stmt->execute([$currentQuantity, $productID]);

        } catch (PDOExeption $e) {
            echo $e->getMessage();
        }
    }
?>