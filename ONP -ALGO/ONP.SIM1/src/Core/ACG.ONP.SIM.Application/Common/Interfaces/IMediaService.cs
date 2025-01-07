using System.IO;

namespace ACG.ONP.SIM.Application.Common.Interfaces
{
    public interface IMediaService
    {
        byte[] AddWatermarkToImage(byte[] imageData);
        Stream GetThumbnail(Stream stream);
        Stream GetWebP(Stream stream);
    }
}