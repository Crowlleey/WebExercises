<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>George</title>
    <link rel="shortcut icon" href="images/cloud.png">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="bootstrap-4.1.0-dist/css/bootstrap.min.css">
    <style type="text/css">
        .rodape {
                    margin: auto;
                    width: 100%;
                    bottom: 0;
                    position: fixed;
                }
    </style>
</head>
<body>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Exercise</th>
                <th scope="col"> <a href = "http://google.com">Go to Google</a></td>
            </tr>
        </thead>
        <tbody>
            <?php 
                $dir_path = "Pages/";
                if(is_dir($dir_path)){
                    $files = opendir($dir_path);{
                        if($files){
                            $count = 1;
                            while(($file_name = readdir($files)) !== FALSE){
                
                                if($file_name != '.' && $file_name != '..' && $file_name !=  '.DS_Store'){
                                   
                                    $link = $dir_path. $file_name;
                                    $row = "row";
                                    $blank = "_blank";
                                    echo"<tr>
                                            <th scope=$row>$count</th>
                                            <td> <a href = $link target = $blank>  Exercise $file_name </a></td>
                                        </tr>";
                                    $count ++;
                                }
                            }
                        }
                    }
                }

            ?>
        </tbody>
    </table>

    <footer class="rodape" align = "center" >©George Tecnologia LTDA</footer>
</body>
</html>