#!/usr/bin/env python3
"""This module provides the update_topics function"""


def update_topics(mongo_collection, name, topics):
    """This function update topics of a collection based on name"""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
