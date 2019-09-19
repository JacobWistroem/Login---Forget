﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SecureMeShared.Models;

namespace SecureMeShared.Migrations
{
    [DbContext(typeof(DBInitCoreContext))]
    [Migration("20190919125242_Unique email")]
    partial class Uniqueemail
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SecureMeShared.Models.Password", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("GeneratedOn");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("SiteDescription")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("SiteLocation")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Password","dbo");

                    b.HasData(
                        new { Id = 1, GeneratedOn = new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local), PasswordHash = "SafePasswordForFacebook", SiteDescription = "Facebook", SiteLocation = "https://www.facebook.com/", UserId = 1 },
                        new { Id = 2, GeneratedOn = new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local), PasswordHash = "SafePassForGmail", SiteDescription = "gmail", SiteLocation = "https://www.gmail.com/", UserId = 1 },
                        new { Id = 3, GeneratedOn = new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local), PasswordHash = "SafePassForBattleOn", SiteDescription = "AdventureQuest", SiteLocation = "https://www.battleon.com/", UserId = 1 },
                        new { Id = 4, GeneratedOn = new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local), PasswordHash = "insecurepass", SiteDescription = "Facebook", SiteLocation = "https://www.facebook.com/", UserId = 2 },
                        new { Id = 5, GeneratedOn = new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local), PasswordHash = "123456", SiteDescription = "Facebook", SiteLocation = "https://www.facebook.com/", UserId = 2 },
                        new { Id = 6, GeneratedOn = new DateTime(2019, 9, 19, 0, 0, 0, 0, DateTimeKind.Local), PasswordHash = "mydogsname", SiteDescription = "Facebook", SiteLocation = "https://www.facebook.com/", UserId = 2 }
                    );
                });

            modelBuilder.Entity("SecureMeShared.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.Property<string>("MasterPass")
                        .IsRequired()
                        .HasMaxLength(32);

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("User","dbo");

                    b.HasData(
                        new { Id = 1, Email = "Email@Example.com", MasterPass = "VerySafe123" },
                        new { Id = 2, Email = "Email2@Example.com", MasterPass = "Unsafe" }
                    );
                });

            modelBuilder.Entity("SecureMeShared.Models.UserInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City")
                        .HasMaxLength(80);

                    b.Property<string>("Country")
                        .HasMaxLength(50);

                    b.Property<string>("FirstName")
                        .HasMaxLength(30);

                    b.Property<bool>("IsAuthenticated");

                    b.Property<string>("LastName")
                        .HasMaxLength(40);

                    b.Property<int?>("Phone");

                    b.Property<string>("Street")
                        .HasMaxLength(80);

                    b.Property<int>("UserId");

                    b.Property<string>("Zip")
                        .HasMaxLength(10);

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserInfo","dbo");

                    b.HasData(
                        new { Id = 1, City = "LallaLand", Country = "Dennemarken", FirstName = "Jacopy", IsAuthenticated = false, LastName = "Wick", Phone = 88888888, Street = "Lollypoppy 123", UserId = 1, Zip = "" }
                    );
                });

            modelBuilder.Entity("SecureMeShared.Models.Password", b =>
                {
                    b.HasOne("SecureMeShared.Models.User", "User")
                        .WithMany("Passwords")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("SecureMeShared.Models.UserInfo", b =>
                {
                    b.HasOne("SecureMeShared.Models.User", "User")
                        .WithMany("UserInfos")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
