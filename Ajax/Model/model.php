<?php
class Model
{
    private $db;

    public function __construct($DB_con)
    {
        $this->db = $DB_con;
    }

    public function InsertData($table, $data)
    {
        $columnString = implode(',', array_keys($data));
        $valueString = ":" . implode(',:', array_keys($data));

        $sql = "INSERT INTO " . $table . " (" . $columnString . ") VALUES (" . $valueString . ")";
        $query = $this->db->prepare($sql);

        foreach ($data as $key => $val) {
            $query->bindValue(':' . $key, $val);

        }

        $insert = $query->execute();
        return $insert ? $this->db->lastInsertId() : false;
    }

    public function Validation($table, $column, $value)
    {
        $sql = "SELECT $column FROM $table WHERE $column='$value'";
        $query = $this->db->prepare($sql);

        $query->execute();

        $count = $query->rowCount();

        return $count;
    }

// AllData
    public function AllData($table, $data)
    {
        $sql = "SELECT $data FROM $table";
        $query = $this->db->prepare($sql);

        $query->execute();

        $fetchAll = $query->fetchAll();

        return $fetchAll;
    }
// Delete
    public function DeleteData($table, $column, $value)
    {
        $sql = "DELETE FROM $table WHERE $column='$value'";
        $query = $this->db->prepare($sql);

        $query->execute();

        $DeleteData = $query->rowCount();

        return $DeleteData;
    }
// Edit
    public function EditData($table, $column, $value)
    {
        $sql = "SELECT * FROM $table WHERE $column='$value'";
        $query = $this->db->prepare($sql);

        $query->execute();

        $EditData = $query->fetchAll();

        return $EditData;
    }
// UpdateData
    public function UpdateData($table, $data, $column, $value)
    {
        $colvalSet = "";
        $i = 0;
        foreach ($data as $key => $val) {
            $pre = ($i > 0) ? ', ' : '';
            $colvalSet .= $pre . $key . "='" . $val . "'";
            $i++;
        }
        $sql = "UPDATE $table SET $colvalSet WHERE $column='$value'";
        $query = $this->db->prepare($sql);
        $insert = $query->execute();

        return $UpdateData = "update";
    }

    // login

    public function CheckLogin($table,$column,$data)
    {   
        $colvalSet = "";
        $i = 0;

        foreach ($data as $key => $val) {
            $pre = ($i > 0) ? ' && ' : '';
            $colvalSet .= $pre . $key . "='" . $val . "'";
            $i++;
        }

        $sql="SELECT $column FROM $table WHERE $colvalSet";
        $query = $this->db->prepare($sql);

        $query->execute();
        $count = $query->rowCount();

        return $count;
    }

    public function CheckActiveAccount($table,$column,$data)
    {   
        $colvalSet = "";
        $i = 0;

        foreach ($data as $key => $val) {
            $pre = ($i > 0) ? ' && ' : '';
            $colvalSet .= $pre . $key . "='" . $val . "'";
            $i++;
        }

        $sql="SELECT $column FROM $table WHERE $colvalSet";
        $query = $this->db->prepare($sql);

        $query->execute();

        $status = $query->fetchColumn();

        return $status;
    }
}
?>
