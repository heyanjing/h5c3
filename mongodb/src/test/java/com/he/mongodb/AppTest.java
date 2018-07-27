package com.he.mongodb;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import org.junit.Test;

/**
 * Created by heyanjing on 2018/7/26 15:47.
 */
public class AppTest {
    @Test
    public void insert()throws Exception {
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        DB db = mongoClient.getDB("mydb");
        DBCollection users = db.getCollection("users");
        BasicDBObject doc = new BasicDBObject("name", "mongo").append("info", new BasicDBObject("ver", "3.0"));
        users.insert(doc);
    }
    @Test
    public void find()throws Exception {
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        DB db = mongoClient.getDB("testdb2");
        DBCollection users = db.getCollection("users");
        DBCursor cursor = users.find();
        while (cursor.hasNext()){
            DBObject next = cursor.next();
            System.out.println(next);
        }
    }

}