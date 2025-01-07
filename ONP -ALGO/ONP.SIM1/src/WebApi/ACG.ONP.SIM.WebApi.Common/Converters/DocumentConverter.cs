using System.Collections.Generic;
using ACG.ONP.SIM.Domain.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace ACG.ONP.SIM.WebApi.Common.Converters
{
    public class DocumentConverter<TDocument> : BaseConverter<TDocument>
        where TDocument : AbstractDocument
    {
        public override void WriteJson(JsonWriter writer, TDocument value, JsonSerializer serializer)
        {
            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                Converters = new List<JsonConverter> {new StringEnumConverter()}
            };

            writer.WriteRawValue(JsonConvert.SerializeObject(new
            {
                id = value.Id,
                type = value.Type,
                spec = value.Spec,
                mimeType = value.MimeType,
                status = value.Status,
                created = value.Created,
                validated = value.LastModified,
                comment = value.Comment
            }));
        }
    }
}