#!/usr/bin/env python3
"""This module provides the elemnet_length function"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with elements and their lengths"""
    return [(i, len(i)) for i in lst]
