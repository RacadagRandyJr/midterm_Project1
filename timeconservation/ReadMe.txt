Take the substring of s excluding the last 2 characters (that’s the AM/PM marker).
Split this substring by ":" → get hour, minutes, seconds.
Get AM/PM marker:
Take the last 2 characters of s (ampm = "AM" or "PM").
Convert hours:
If ampm is "PM" and hour is not 12 → add 12 to hour.
If ampm is "AM" and hour is 12 → set hour = 0.
Format hours:
Convert hour to string with 2 digits (using leading zero if needed).
Return final time:
Concatenate hour:minutes:seconds.