---
title: Parsing json data from AWS with jq for IPs and IPV6
author: Luis
header:
  overlay_image: /assets/images/goat_mountain.jpg
  show_overlay_excerpt: false
---

# AWS JSON IPV6

This post will demonstrate how to use jq to parse json data from AWS. I'll only cover bash like commands, by which I mean a lot of commands stringed together with `|`. This is useful for basic queries, simple shell scripts etc.

> This generally is not the best way to devops. If you are going to do something more complex, I'd urge you to use a different tool, and deploy the configuration as code.

In AWS (*almost*) everything is an API. All the APIs (*I have used*) return data in _json_. If this is new to you, or you're just moving over from a more traditional sysadmin/netadmin role, this will be wierd and a bit frustrating. GOOD NEWS is there are tools for that, and the robots have not taken over just yet. `jq` to the rescue. Go install it now. I'll wait.

Most of the time the AWS documentation is quite good at providing these examples.

You can find [one-liners on aws docs](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) like
```
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq .prefixes | jq '.[] | select(.region=="us-east-1")' | jq 'select(.service=="S3")'| jq -r .ip_prefix
```
which, at the minute of this writing, outputs

```
52.92.16.0/20
52.216.0.0/15
54.231.0.0/17
```
What is missing here is IPV6! if you're using any ipv6 and need to cut and paste the above into a change order for example, you're missing half your data! what is a lowly devops'r to do?

The challenge here is how the json object is structured.

Let's look at the top of the json object

```
[lcerezo@elchupin lcerezo.github.io]$ curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | head
{
  "syncToken": "1528467739",
  "createDate": "2018-06-08-14-22-19",
  "prefixes": [
    {
      "ip_prefix": "13.32.0.0/15",
      "region": "GLOBAL",
      "service": "AMAZON"
    },
    {
```

the `prefixes` is only ipv4 data, and most examples found on the internet start off with a `| jq .prefixes[]` which excludes ipv6 data.

Where is the ipv6 data?

```
[lcerezo@elchupin ~]$ curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | grep prefixes
  "prefixes": [
  "ipv6_prefixes": [
[lcerezo@elchupin ~]$
```
So what can you do?

Option 1: the cut twice method
```
[lcerezo@elchupin ~]$ curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq .ipv6_prefixes | jq '.[] | select(.region=="us-east-1")' | jq 'select(.service=="S3")'| jq -r .ipv6_prefix
2600:1fa0:8000::/40
2600:1ff8:8000::/40
2600:1ff9:8000::/40
2600:1ffa:8000::/40
[lcerezo@elchupin ~]$ curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq .prefixes | jq '.[] | select(.region=="us-east-1")' | jq 'select(.service=="S3")'| jq -r .ip_prefix
52.92.16.0/20
52.216.0.0/15
54.231.0.0/17
[lcerezo@elchupin ~]$
```

Option 2: the cut once method

You can [select fields to search](https://stackoverflow.com/questions/28164849/using-jq-to-parse-and-display-multiple-fields-in-a-json-serially). in jq
```
 curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq [.prefixes,.ipv6_prefixes]
 ```
 This will return all the fields. To get just the IPs, you need to chain some jq together through the magic of `|` the sysadmin's friend.

 ```
 [lcerezo@elchupin ~]$ curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq [.prefixes,.ipv6_prefixes] | jq '.[][] | select(.region=="us-east-1")' |jq 'select(.service=="S3")' |jq -r [.ip_prefix,.ipv6_prefix][]
 52.92.16.0/20

 52.216.0.0/15

 54.231.0.0/17


 2600:1fa0:8000::/40

 2600:1ff8:8000::/40

 2600:1ff9:8000::/40

 2600:1ffa:8000::/40
 [lcerezo@elchupin ~]$
```

>One thing I haven't figured out how to do cleanly is not to print the `null` or blank line for null values. If you know, tweet @ me.
>
> -luis
