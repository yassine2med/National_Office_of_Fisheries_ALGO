using System;
using System.Collections.Generic;

namespace ACG.ONP.SIM.Domain.Constants
{
    public static class ConfigurationConstants
    {
        public static string GetRandomAlphaNumericReference()
        {
            var random = new Random();
            return DateTime.Now.ToString("yyMM") + random.Next(100000, 999999);
        }

        public static string ConvertToRoman(int convertThis)
        {
            int leftovers; //store mod results
            var RomanNumeral = ""; //store roman numeral string
            var dict = new Dictionary<string, int>
            {
                {"M", 1000}, // 1000 = M
                {"CM", 900}, // 900 = CM
                {"D", 500}, // 500 = D
                {"CD", 400}, // 400 = CD
                {"C", 100}, // 100 = C
                {"XC", 90}, // 90 = XC
                {"L", 50}, // 50 = L
                {"XL", 40}, // 40 = XL
                {"X", 10}, // 10 = X
                {"IX", 9}, // 9 = IX
                {"V", 5}, // 5 = V
                {"IV", 4}, // 4 = IV
                {"I", 1} // 1 = I
            };
            foreach (var pair in dict)
                if (convertThis >= pair.Value)
                {
                    leftovers = convertThis % pair.Value;
                    var remainder = (convertThis - leftovers) / pair.Value;
                    convertThis = leftovers;
                    while (remainder > 0)
                    {
                        RomanNumeral += pair.Key;
                        remainder--;
                    }
                }

            return RomanNumeral;
        }

        public static string IndexToCharacter(int index)
        {
            string[] Columns =
            {
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
                "v", "w", "x", "y", "z", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "az", "aj", "ak", "al", "am",
                "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az", "ba", "bb", "bc"
            };
            if (index <= 0)
                throw new IndexOutOfRangeException("index must be a positive number");

            return Columns[index - 1];
        }

        public static class Sections
        {
            public const string Security = "Security";
            public const string Mail = "EmailOptions";
            public const string PrintFooterText = "PrintFooterText";
            public const string PublicUrls = "PublicUrls";
            public const string RedisCache = "RedisCache";
        }
    }
}