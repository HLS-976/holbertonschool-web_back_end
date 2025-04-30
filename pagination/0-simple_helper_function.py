#!/usr/bin/env python3
"""This module provides index range"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """This function returns a tuple of two numbers"""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index
