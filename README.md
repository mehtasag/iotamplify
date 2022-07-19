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
owner: String!
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
createdBy: String! @index(name: "byUser", sortKeyFields: ["id"])
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
posts: [Posts] @hasMany(indexName: "byUser", fields: ["username"])
searches: [Search]
}

type Search {
name: String
}

type Preference {
id: ID!
name: String
}

type Trending
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
resultData: [ResultData]
}

type ResultData {
image: String
name: String
source: String
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

type Post
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
owner: String!
description: String!
file: S3Object!
user: User @hasOne
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
createdBy: String! @index(name: "byUser", sortKeyFields: ["id"])
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
posts: [Post] @hasMany(indexName: "byUser", fields: ["username"])
searches: [Search]
}

type Search {
name: String
}

type Preference {
id: ID!
name: String
}

type Trending
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
resultData: [ResultData]
}

type ResultData {
image: String
name: String
source: String
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

IAM

<!-- arn:aws:iam::833119067549:role/us-east-1_ojD5v9bEi-EditorsGroupRole -->

LAMBDA

<!-- iotAmplifyWelcome  -->
