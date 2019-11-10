package com.wholeman.stringsort

import org.junit.Before
import org.assertj.core.api.Assertions.*
import org.junit.Test

/**
 * Created by wholeman on 09/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */
class StringSortTest {

    lateinit var stringSort: StringSort

    @Before
    fun setUp() {
        stringSort = StringSort()
    }

    @Test
    fun sortByChar() {
        assertThat(stringSort.sortByChar(arrayOf("sun", "bed", "car"), 1)).isEqualTo(arrayOf("car", "bed", "sun"))
        assertThat(stringSort.sortByChar(arrayOf("abce", "abcd", "cdx"), 1)).isEqualTo(arrayOf("abcd", "abce", "cdx"))
    }
}
