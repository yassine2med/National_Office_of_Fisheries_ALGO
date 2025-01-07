using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ACG.ONP.SIM.Application.Common.Extensions;
using ACG.ONP.SIM.Application.Common.Interfaces;

namespace ACG.ONP.SIM.Infrastructure.Services
{
    public class LocalStorage : IStorage
    {
        public Task<string> SaveFileAsync(Stream stream, string absolutePath, string fileName)
        {
            if (!Directory.Exists(absolutePath.Trim())) Directory.CreateDirectory(absolutePath.Trim());

            using (var fileStream = File.Create(absolutePath.Trim().AddSuffix(fileName.Trim())))
            {
                stream.Position = 0;

                stream.CopyTo(fileStream);

                return Task.FromResult(absolutePath.Trim().AddSuffix(fileName.Trim()));
            }
        }

        public Task<bool> DeleteFileAsync(string fileAbsolutePath)
        {
            if (File.Exists(fileAbsolutePath.Trim())) File.Delete(fileAbsolutePath.Trim());

            return Task.FromResult(true);
        }

        public Task<Stream> GetFileAsync(string fileAbsolutePath)
        {
            if (File.Exists(fileAbsolutePath.Trim()))
            {
                var stream = new StreamReader(fileAbsolutePath.Trim()).BaseStream;

                stream.Position = 0;

                return Task.FromResult(stream);
            }

            return null;
        }

        public Task<List<string>> GetFilesAsync(string absolutePath, string folderRelativePath)
        {
            if (Directory.Exists(absolutePath.Trim().AddSuffix(folderRelativePath.Trim())))
                return Task.FromResult(Directory.GetFiles(absolutePath.Trim().AddSuffix(folderRelativePath.Trim()))
                    .ToList());

            return null;
        }

        public Task<string> CreateFolderAsync(string absolutePath, string folderRelativePath)
        {
            return Task.FromResult(absolutePath.Trim().AddSuffix(folderRelativePath.Trim()));
        }

        public Task<bool> DeleteFolderAsync(string absolutePath, string folderRelativePath)
        {
            if (Directory.Exists(absolutePath.Trim().AddSuffix(folderRelativePath.Trim())))
                Directory.Delete(absolutePath.Trim().AddSuffix(folderRelativePath.Trim()), true);

            return Task.FromResult(true);
        }

        public Task<List<string>> GetFoldersAsync(string absolutePath, string folderRelativePath)
        {
            if (Directory.Exists(absolutePath.Trim().AddSuffix(folderRelativePath.Trim())))
                return Task.FromResult(Directory
                    .GetDirectories(absolutePath.Trim().AddSuffix(folderRelativePath.Trim())).ToList());

            return null;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}