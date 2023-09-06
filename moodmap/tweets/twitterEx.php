<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
//$search = "@timberners_lee OR netneutrality OR #openinternet";
$search = "";
$searchArray = [];

$searchArray[0] = "&geocode=45.4951,-73.5786,4.5km&result_type=recent";
$searchArray[1] = "&geocode=45.5230,-73.5812,4.5km&result_type=recent";
$searchArray[2] = "&geocode=45.5125,-73.6266,4.5km&result_type=recent";
$searchArray[3] = "&geocode=45.4682,-73.5888,4.5km&result_type=recent";
$searchArray[4] = "&geocode=45.4784,-73.6451,4.5km&result_type=recent";
$searchArray[5] = "&geocode=45.5484,-73.5445,4.5km&result_type=recent";
$searchArray[6] = "&geocode=45.5471,-73.6258,4.5km&result_type=recent";
$searchArray[7] = "&geocode=45.5263,-73.7045,4.5km&result_type=recent";
$searchArray[8] = "&geocode=45.5839,-73.5979,4.5km&result_type=recent";
$searchArray[9] = "&geocode=45.5149,-73.4700,4.5km&result_type=recent";
$searchArray[10] = "&geocode=45.5757,-73.5336,4.5km&result_type=recent"; //Longue-Point
$searchArray[11] = "&geocode=45.5300,-73.6624,4.5km&result_type=recent"; //chabanel
$searchArray[12] = "&geocode=45.4753,-73.6805,4.5km&result_type=recent"; //airport
$searchArray[13] = "&geocode=45.4526,-73.6182,4.5km&result_type=recent"; //lasalle
$searchArray[14] = "&geocode=45.5707,-73.6482,4.5km&result_type=recent"; //ahuntsic
$searchArray[15] = "&geocode=45.6182,-73.5989,4.5km&result_type=recent"; //anjou
$searchArray[16] = "&geocode=45.6424,-73.5336,4.5km&result_type=recent"; //north
$searchArray[17] = "&geocode=45.6744,-73.5061,4.5km&result_type=recent"; //very north
$searchArray[18] = "&geocode=45.4647,-73.7775,4.5km&result_type=recent"; //pointe claire
$searchArray[19] = "&geocode=45.4983,-73.8329,4.5km&result_type=recent"; //Dollard-Des Ormeaux
$searchArray[20] = "&geocode=45.4534,-73.8648,4.5km&result_type=recent"; //kirkland
$searchArray[21] = "&geocode=45.4349,-73.9058,4.5km&result_type=recent"; //west

$resultArray = [];

$twitteruser = "twitterusername";
$notweets = 100;
$consumerkey = "yDUc7Jvf9KA3iyAxT6rgA";
$consumersecret = "Y7VygGUlsWFa9v8u0Jzwp7a3kEN71ukPKzlGJZ6g";
$accesstoken = "264359309-8lPLf12NuXwCcx1K0smxHimW7zhFTMZ78NGYi0yG";
$accesstokensecret = "LWm3QvMWNOTRA50se8sW8Of3yEYAGRL4chzYW22JZmGte";

function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}

$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
for($i=0; $i< sizeof($searchArray); $i++)
{
$search = str_replace("#", "%23", $searchArray[$i]);
//$url ='https://api.twitter.com/1.1/statuses/user_timeline.json';
//$responsesParsed = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
//$responsesParsed = $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=%23montreal&result_type=recent?screen_name=".$twitteruser."&count=".$notweets);

// get the tweets .....
$resultArray[]= $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=".$searchArray[$i]."&count=".$notweets);
}
echo json_encode($resultArray);
?>
