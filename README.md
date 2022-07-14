type Posts
@model
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read] }
{ allow: public, operations: [read] }
]
) {
id: ID!
title: String!
description: String!
file: S3Object!
likes: [Like]
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read, create] }
{ allow: owner, operations: [create, update, delete, read] }
]
)
@hasMany(indexName: "byPost", fields: ["id"])
createdBy: String!
comments: [Comment]
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read, create] }
{ allow: owner, operations: [create, update, delete, read] }
]
)
@hasMany(indexName: "byPost", fields: ["id"])
}

type Like
@model
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read, create] }
{ allow: owner }
]
) {
id: ID!
postID: ID! @index(name: "byPost")
user: [User]
}

type User
@model
@auth(
rules: [
{ allow: groups, groups: ["Editors"], operations: [delete, read] }
{ allow: owner, operations: [create, update, delete, read] }
]
) {
id: ID!
username: String!
name: String
email: String!
owner: String!
image: S3Object
createdAt: String
about: String
preference: [Preference]
updatedAt: AWSDateTime
website: String
country: String
}

type Preference {
id: ID!
name: String
}

type Comment
@model
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read, create] }
{ allow: owner }
]
) {
id: ID!
postID: ID! @index(name: "byPost", sortKeyFields: ["content"])
content: String!
createdBy: String!
replise: [Replies]
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read, create] }
{ allow: owner }
]
)
@hasMany(indexName: "byComment", fields: ["id"])
}

type Replies
@model
@auth(
rules: [
{
allow: groups
groups: ["Editors"]
operations: [create, update, delete, read]
}
{ allow: private, operations: [read, create] }
{ allow: owner }
]
) {
id: ID!
commentID: ID! @index(name: "byComment", sortKeyFields: ["reply"])
reply: String!
createdBy: String!
}

type S3Object {
bucket: String!
region: String!
key: String!
}
