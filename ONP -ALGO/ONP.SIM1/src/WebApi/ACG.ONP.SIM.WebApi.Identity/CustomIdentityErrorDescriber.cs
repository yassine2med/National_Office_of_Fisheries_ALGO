using Microsoft.AspNetCore.Identity;

namespace ACG.AutoHall.VO.WebUI.Identity.Areas.Identity
{
    public class CustomIdentityErrorDescriber : IdentityErrorDescriber
    {
        public override IdentityError DefaultError()
        {
            return new IdentityError {Code = nameof(DefaultError), Description = "Une érreur inconnue s'est produite."};
        }

        public override IdentityError ConcurrencyFailure()
        {
            return new IdentityError
            {
                Code = nameof(ConcurrencyFailure),
                Description = "Optimistic concurrency failure, object has been modified."
            };
        }

        public override IdentityError PasswordMismatch()
        {
            return new IdentityError {Code = nameof(PasswordMismatch), Description = "Mot de passe incorrect."};
        }

        public override IdentityError InvalidToken()
        {
            return new IdentityError {Code = nameof(InvalidToken), Description = "Jeton d'authentification non valide"};
        }

        public override IdentityError LoginAlreadyAssociated()
        {
            return new IdentityError
                {Code = nameof(LoginAlreadyAssociated), Description = "Le nom d'utilisateur existe déjà."};
        }

        public override IdentityError InvalidUserName(string userName)
        {
            return new IdentityError
            {
                Code = nameof(InvalidUserName),
                Description =
                    $"Le nom d'utilisateur '{userName}' est invalide, ne peut contenir que des lettres ou des chiffres."
            };
        }

        public override IdentityError InvalidEmail(string email)
        {
            return new IdentityError {Code = nameof(InvalidEmail), Description = $"Email '{email}' est invalide."};
        }

        public override IdentityError DuplicateUserName(string userName)
        {
            return new IdentityError
                {Code = nameof(DuplicateUserName), Description = $"Le nom d'utilisateur '{userName}' existe déjà."};
        }

        public override IdentityError DuplicateEmail(string email)
        {
            return new IdentityError {Code = nameof(DuplicateEmail), Description = $"Email '{email}' existe déjà."};
        }

        public override IdentityError InvalidRoleName(string role)
        {
            return new IdentityError {Code = nameof(InvalidRoleName), Description = $"le rôle '{role}' est invalide."};
        }

        public override IdentityError DuplicateRoleName(string role)
        {
            return new IdentityError
                {Code = nameof(DuplicateRoleName), Description = $"Role name '{role}' existe déjà."};
        }

        public override IdentityError UserAlreadyHasPassword()
        {
            return new IdentityError
                {Code = nameof(UserAlreadyHasPassword), Description = "L'utilisateur à déjà un mot de passe définie."};
        }

        public override IdentityError UserLockoutNotEnabled()
        {
            return new IdentityError
                {Code = nameof(UserLockoutNotEnabled), Description = "Lockout is not enabled for this user."};
        }

        public override IdentityError UserAlreadyInRole(string role)
        {
            return new IdentityError
                {Code = nameof(UserAlreadyInRole), Description = $"L'utilisateur à déjà le rôle '{role}'."};
        }

        public override IdentityError UserNotInRole(string role)
        {
            return new IdentityError
                {Code = nameof(UserNotInRole), Description = $"L'utilisateur n'appartient pas au rôle '{role}'."};
        }

        public override IdentityError PasswordTooShort(int length)
        {
            return new IdentityError
            {
                Code = nameof(PasswordTooShort),
                Description = $"Le mot de passe doit au mois contenir {length} charactères."
            };
        }

        public override IdentityError PasswordRequiresNonAlphanumeric()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresNonAlphanumeric),
                Description = "Le mot de passe doit comporter au moins un caractère non alphanumérique."
            };
        }

        public override IdentityError PasswordRequiresDigit()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresDigit),
                Description = "Le mot de passe doit avoir au moins un chiffre ('0'-'9')."
            };
        }

        public override IdentityError PasswordRequiresLower()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresLower),
                Description = "Le mot de passe doit avoir au moins une lettre minuscule ('a'-'z')."
            };
        }

        public override IdentityError PasswordRequiresUpper()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresUpper),
                Description = "Le mot de passe doit avoir au moins une lettre majuscule ('A'-'Z')."
            };
        }
    }
}