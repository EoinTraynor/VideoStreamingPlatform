var apiKey = '45501232';
var sessionId = '2_MX40NTUwMTIzMn5-MTQ1NTgwOTU1MzM5MX5QTVJwZE5yeUtDcG9YaW4yTUkrVFFwU3F-UH4';
var token = 'T1==cGFydG5lcl9pZD00NTUwMTIzMiZzaWc9YjkxZTQxNjBiM2Y1MjgyYWMwMWFmNzIwNWRhMDMyYWNjYzFlMmRjYzpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UVXdNVEl6TW41LU1UUTFOVGd3T1RVMU16TTVNWDVRVFZKd1pFNXllVXREY0c5WWFXNHlUVWtyVkZGd1UzRi1VSDQmY3JlYXRlX3RpbWU9MTQ1NTgwOTc1MCZub25jZT0wLjg0Njk1MDgwODcyMjM4OCZleHBpcmVfdGltZT0xNDU1ODk2MTUw';
var session = OT.initSession(apiKey, sessionId); 
session.on({
  streamCreated: function(event) {
    session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append'});
  }
});
session.connect(token, function(error) {
if (error) {
  console.log(error.message);
} else {
  session.publish('myPublisherDiv', {width: 320, height: 240});
}
});
