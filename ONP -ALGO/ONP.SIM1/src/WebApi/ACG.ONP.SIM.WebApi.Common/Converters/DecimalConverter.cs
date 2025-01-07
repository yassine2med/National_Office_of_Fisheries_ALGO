using System;
using System.Globalization;
using Newtonsoft.Json;

namespace ACG.ONP.SIM.WebApi.Common.Converters
{
    public class DecimalConverter : JsonConverter
    {
        public override bool CanRead => false;

        public override bool CanConvert(Type objectType)
        {
            return objectType == typeof(decimal) || objectType == typeof(decimal?)
                                                 || objectType == typeof(double) || objectType == typeof(double?)
                                                 || objectType == typeof(float) || objectType == typeof(float?);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue,
            JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteValue(string.Format(new CultureInfo("fr-FR"), "{0:N0}", value));
        }
    }
}