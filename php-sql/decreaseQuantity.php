<?php
    require_once("./createConnection.php");

    function decreaseQuantity(int $productID, int $quantityToSubstract){
        try{
            $db = new DB();
            $connection = $db->getConnection();

            $query = "SELECT quantity FROM online_shop WHERE id=?";
            $stmt = $connection->prepare($query);
            $stmt->execute([$productID]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $currentQuantity = $row["quantity"];
            if($currentQuantity - $quantityToSubstract < 0){
                return false;
                echo "Insufficient availability.";
            }
            else{
                $currentQuantity = $currentQuantity - $quantityToSubstract;

                $query = "UPDATE online_shop SET quantity=? WHERE id=?";
                $stmt = $connection->prepare($query);
                $stmt->execute([$currentQuantity, $productID]);

                return true;
            }
        } catch (PDOExeption $e) {
            echo $e->getMessage();
        }
    }
?>