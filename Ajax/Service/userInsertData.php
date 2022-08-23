<?php
        include '../config/config.php';
        $count=0;

        $sql="SELECT categoryId from `register`";
        $res=$conn->prepare($sql);

        $res->execute();

        while($row=$res->fetch(PDO::FETCH_ASSOC))
        {
          if($row['categoryId']==$_POST['categoryId'])
          {
            $count=$count+1;
          }
        }
        if($count==0)
        {

          move_uploaded_file($_FILES['image1']['tmp_name'],"../images/".$_FILES['image1']['name']);
          move_uploaded_file($_FILES['image2']['tmp_name'],"../images/".$_FILES['image2']['name']);
          $pic1=$_FILES['image1']['name'];
          $pic2=$_FILES['image2']['name'];

          
          $sql="INSERT INTO `register`(categoryId, eventType, eventName, eventDescription, eventAddress, startDateTime, endDateTime, eventDuration, targetPopulation,websitePrices,eventLocationCode,theaterName, providerWebsiteUrl,image1,image2,image1Url, image2Url,latitude,longitude,eventExternalId,IsActive,isAccessible,isFreeActivity,isLocalActivity,isOnlineActivity,isSeniorCitizenActivity) VALUES('$_POST[categoryId]', '$_POST[eventType]', '$_POST[eventName]', '$_POST[eventDescription]', '$_POST[eventAddress]', '$_POST[startDateTime]', '$_POST[endDateTime]', '$_POST[eventDuration]', '$_POST[targetPopulation]','$_POST[websitePrices]','$_POST[eventLocationCode]','$_POST[theaterName]', '$_POST[providerWebsiteUrl]','$pic1','$pic2','$_POST[image1Url]', '$_POST[image2Url]','$_POST[latitude]','$_POST[longitude]','$_POST[eventExternalId]','$_POST[IsActive]','$_POST[isAccessible]','$_POST[isFreeActivity]','$_POST[isLocalActivity]','$_POST[isOnlineActivity]','$_POST[isSeniorCitizenActivity]');";
          $res=$conn->prepare($sql);
          $res->execute();

          echo 1;

        }
        else
        {
            echo 0;


        }


    ?>