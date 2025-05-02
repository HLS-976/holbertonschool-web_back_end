#!/usr/bin/env python3
"""This module provides the insert_school function"""


def insert_school(mongo_collection, **kwargs):
    """This function inserts data in mongo_collection"""
    return mongo_collection.insert_one(kwargs).inserted_id
