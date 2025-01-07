using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Interfaces;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using ApplicationException = ACG.ONP.SIM.Application.Common.Exceptions.ApplicationException;

namespace ACG.ONP.SIM.Infrastructure.Services
{
    public class BlobStorage : IStorage
    {
        public BlobStorage(string connectionString)
        {
            BlobServiceClient = new BlobServiceClient(connectionString);
        }

        private BlobServiceClient BlobServiceClient { get; }


        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public async Task<string> SaveFileAsync(Stream stream, string absolutePath, string fileName)
        {
            try
            {
                var containerClient = BlobServiceClient.GetBlobContainerClient(absolutePath);

                containerClient.CreateIfNotExists();

                var blobClient = containerClient.GetBlobClient(fileName);

                await blobClient.UploadAsync(stream, true);
            }
            catch (Exception)
            {
                throw new ApplicationException("Error saving document.");
            }

            return $"{absolutePath}/{fileName}";
        }

        public Task<bool> DeleteFileAsync(string fileAbsolutePath)
        {
            throw new NotImplementedException();
        }

        public async Task<Stream> GetFileAsync(string fileAbsolutePath)
        {
            try
            {
                var pathParts = fileAbsolutePath.Split("/");

                var containerClient = BlobServiceClient.GetBlobContainerClient(pathParts[0]);
                var blobClient = containerClient.GetBlobClient(pathParts[1]);

                BlobDownloadInfo download = await blobClient.DownloadAsync();

                Stream stream = new MemoryStream();

                await download.Content.CopyToAsync(stream);

                return stream;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Task<List<string>> GetFilesAsync(string absolutePath, string folderRelativePath)
        {
            throw new NotImplementedException();
        }

        public Task<string> CreateFolderAsync(string absolutePath, string folderRelativePath)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteFolderAsync(string absolutePath, string folderRelativePath)
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetFoldersAsync(string absolutePath, string folderRelativePath)
        {
            throw new NotImplementedException();
        }
    }
}