package com.wholeman.openchat

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution1(record: Array<String>): Array<String> {
    val nicknames = mutableMapOf<String, String>()
    val events = mutableListOf<Pair<String, String>>()

    record.forEach {
        val (command, uid, nickname) = ("$it ").split(" ")
        when (command) {
            "Enter" -> {
                nicknames[uid] = nickname
                events.add(Pair(command, uid))
            }
            "Change" -> nicknames[uid] = nickname
            "Leave" -> events.add(Pair(command, uid))
        }
    }

    return events.map { (command, uid) ->
        when (command) {
            "Enter" -> "${nicknames[uid]}님이 들어왔습니다."
            else -> "${nicknames[uid]}님이 나갔습니다."
        }
    }.toTypedArray()
}

fun solution2(record: Array<String>): Array<String> {
    val (nicknames, events) = record.fold(
            Pair(mapOf<String, String>(), emptyArray<Pair<String, String>>())
    ) { (nicknames, events), s ->
        val (command, uid, nickname) = ("$s ").split(" ")
        when (command) {
            "Enter" -> Pair(nicknames + (uid to nickname), events + (uid to "%s님이 들어왔습니다."))
            "Change" -> Pair(nicknames + (uid to nickname), events)
            else -> Pair(nicknames, events + (uid to "%s님이 나갔습니다."))
        }
    }

    return events.map { (uid, message) ->
        message.format(nicknames[uid])
    }.toTypedArray()
}

fun solution3(record: Array<String>): Array<String> {
    val nicknames = mutableMapOf<String, String>()

    return record
            .map {
                val (command, uid, nickname) = "$it ".split(" ")
                when (command) {
                    "Enter", "Change" -> nicknames[uid] = nickname
                }
                command to uid
            }
            .asSequence()
            .filter { (command, _) ->
                command != "Change"
            }
            .map { (command, uid) ->
                when (command) {
                    "Enter" -> "${nicknames[uid]}님이 들어왔습니다."
                    else -> "${nicknames[uid]}님이 나갔습니다."
                }
            }.toList().toTypedArray()
}

class SolutionTest {

    @Test
    fun `Get a message that the master will see`() {
        arrayOf(::solution1, ::solution2, ::solution3).forEach { solution ->
            assertThat(solution(
                    arrayOf("Enter uid1234 Muzi",
                            "Enter uid4567 Prodo",
                            "Leave uid1234",
                            "Enter uid1234 Prodo",
                            "Change uid4567 Ryan")))
                    .isEqualTo(
                            arrayOf("Prodo님이 들어왔습니다.",
                                    "Ryan님이 들어왔습니다.",
                                    "Prodo님이 나갔습니다.",
                                    "Prodo님이 들어왔습니다."))
        }
    }
}
