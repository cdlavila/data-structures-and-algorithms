"""
Given a string s, find the length of the longest substring without repeating characters.
"""

def length_of_longest_substring(string):
    start = 0
    characters_position = {}
    max_lenght = 0
    for end in range(len(string)):
        if string[end] in characters_position and start <= characters_position[string[end]]:
            start = characters_position[string[end]] + 1
        characters_position[string[end]] = end
        max_lenght = max(max_lenght, end - start + 1)

    return max_lenght


response = length_of_longest_substring("abcabcbb") # 3
print(response)

response2 = length_of_longest_substring("jdkafnlcdsalkxcmpoiuytfccv") # 15
print(response2)

response3 = length_of_longest_substring("bbb") # 1
print(response3)