package com.wholeman.stringsort

class StringSort {
    fun sortByChar(strings: Array<String>, n: Int): Array<out String> =
            strings.sortedArrayWith(compareBy({ it[n] }, { it }))
}
