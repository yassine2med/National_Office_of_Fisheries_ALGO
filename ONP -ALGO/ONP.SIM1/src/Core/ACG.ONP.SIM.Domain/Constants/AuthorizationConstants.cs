namespace ACG.ONP.SIM.Domain.Constants
{
    public static class AuthorizationConstants
    {
        public const string DefaultUserName = "administrator@onp";
        public const string DefaultPassword = "ONP@sim@2021";
        public const string DefaultPasswordExt = "Qs6LekyRbDG4$yF2d";

        public static class ClaimTypes
        {
            public const string Permissions = "permissions";
        }

        public static class Roles
        {
            public const string Administrators = "Administrators";
        }

        //NOTE: dir .\* /AD /B /ON /S
        public static class Permissions
        {
            //[Cities]
            public const string CanGetAllCities = "CanGetAllCities";
            public const string CanCreateCity = "CanCreateCity";
            public const string CanDeleteCity = "CanDeleteCity";
            public const string CanUpdateCity = "CanUpdateCity";
        }
    }
}