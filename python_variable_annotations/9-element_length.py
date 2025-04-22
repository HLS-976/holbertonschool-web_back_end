#!/usr/bin/env python3
"""This module provides the elemnet_length function"""
from typing import List, Union, Tuple


def element_length(lst: List[Union[int, float, str]]) -> List[Tuple[str, int]]:
    return [(i, len(i)) for i in lst]
