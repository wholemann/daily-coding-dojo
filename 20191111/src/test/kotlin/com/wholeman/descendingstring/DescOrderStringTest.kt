package com.wholeman.descendingstring

import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test

/**
 * Created by wholeman on 11/11/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */
class DescOrderStringTest {

    lateinit var descOrderString: DescOrderString

    @Before
    fun setUp() {
        descOrderString = DescOrderString()
    }

    @Test
    fun getDescOrderString() {
        assertThat(descOrderString.getDescOrderString("Zbcdefg")).isEqualTo("gfedcbZ")
    }
}
