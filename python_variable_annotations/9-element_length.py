#!/usr/bin/env python3
"""This module provides the elemnet_length function"""
from typing import List, Union, Iterator


def element_length(lst: List[Union[int, float, str]]) -> List[Iterator[int, int]]:
    return [(i, len(i)) for i in lst]
