const MenuApi = [
  {
    id: 1,
    image:
      "https://thumbs.dreamstime.com/b/bowl-chinese-noodles-vegetables-white-background-30440348.jpg",
    name: "Noodles",
    category: "Breakfast",
    price: "25.00",
    description: "Best Quality Noodles available in Bangalore"
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.JPG",
    name: "Idli",
    category: "Breakfast",
    price: "30.00",
    description: "Best Quality Idli available in Bangalore"
  },
  {
    id: 3,
    image:
      "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
    name: "Masala Dosa",
    category: "Breakfast",
    price: "50.00",
    description: "Best Quality Masala Dosa available in Bangalore"
  },
  {
    id: 4,
    image: "https://sukhis.com/app/uploads/2022/05/image2-3.jpg",
    name: "North Indian Meals",
    category: "Lunch",
    price: "25.00",
    description: "Best Quality North Indian Meals available in Bangalore"
  },
  {
    id: 5,
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_538,h_336/https://zolostays.com/blog/wp-content/uploads/2019/09/bhojanam-meals-cropped-1-1545889266.jpg",
    name: "South Indian Meals",
    category: "Lunch",
    price: "30.00",
    description: "Best Quality South Indian Meals available in Bangalore"
  },
  {
    id: 6,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRYZGRgaGBgaHBoZGhoeGRwZGBgZGhgaGhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzosJSs0NDExNzY0NzQ2NDExNDQ0NDY2NjQ0NDE0NDQ0NDQ2NDcxNDY0NDQ0NDQ0NDQ0NDQxNP/AABEIAJ0BQQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD0QAAIBAgQEBAQEBQIFBQAAAAECEQADBBIhMQVBUWEGInGBEzKRoUKxwfAHFGLR4VLxM3KCkrIVFiOi0v/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EACoRAAICAgICAQQCAQUAAAAAAAABAhEDIRIxBEFREyJhcTKRgTNCobHR/9oADAMBAAIRAxEAPwCBRUyVGKlSnJki1zUoriK0Cu4qMirDCoytAEWWuIp8V2WiwI8tIy1NlpCKAK+Wly1LFdFYBFFcVqZUmpUsVjYyi2UxbJqZLFWxbApctI5DqJALcU6KnW0TsKf/ACrdKRyXtjUVstJFXVwTnlSDBv0o5x+TaZTikirz4FwJio1wjnlRzj8hRUIrstXjw9x+GomwrjdTW2jCrFJlqdrZG4phFAEZWky1JFcRTARRXZakikigCIrSZaliuigCLLSEVLFdFAEMUkVMVpUUSJ2kT6TrSsB//p75A5AVTtmYLPpJqpcIX5tPz+lbnFo7aKyKkeYsM09RGwEViMQ6awRBYgGDHPQiZG3+a8/xPMlnjJuk18Hdj8ZPJFNNr3QxVVhI1pDYFR4VSGYek/p9pq1lrvxyco2yfm4I4MrjF2tNf5Iv5YV1WMtdTnKOy1IgpYpwFUIDlFcTSiuitAjIphFStTYrAI4rgKns4dnMKJq7b4YZhiB2pJTjHtjRi5dAzLSi0TsDRZbllX+H+ICaIYVQT8ulckvNSdUVWB9tmft8OdjtFXrfB9NaO3SoqE3gNzpUp+TN9FI44op2+FLFOPDlAq58UctqqYniSIJdwPeo/UyP2M1BbZCmBSYJipDgFXvQDGcYsO6tnMgwI21rQ4XEo40cGmlOfGrFjKMn9uy6lpVGwpjkcqVmEb1Co10qMp0VUbHPdKqcqyahwpdlLuAOwqYoSNKfZbQqRWrJ6oOJnBjXu3CE0A015mm2uMXEuZLiga6EVDxLhuItXC9hJB1InepsDgWZviXfmPLpWOUkV4xNdhLwZRUtyzPKh2FaCOlFRdkaV0xnaOZqim+CVtxQ3E8GH4dKIY5bgVih83IGqfCnvxN6J7bU0clOgcdWA7+GZDBFQ5a1+NsI6670FHDJ2NdUZciT0CYpCKI3OGOOU1WfDsu6mqBaK0UkVKVpIoAjiky1IRSUARxXFakikIoAgv8AGsStxLRytYuKUmPOjBCYJG4IXSepqoySoBOUbwdXzHcEDQHWN6IZab8EBs3P961H6EI/xSV91orDys+L/Ta38+vyMs2QogfenkU+KQiqpJKkLPJLJJyk7b7YkUtLXUCErClApzUoWrEBoFOinCpLFlnMKJNY3XYEBSpEw7MRANaXA8HVRL6mrT20XoK5p+Ql/ErHE32Q4DDoiigviTgr33R7V1kK9OfYg1okAidCKQ3FYQN64ZZL2zojGugJh+GsqjPDv/qil4jiXtoxRMzAaDrRdmgRFUblsmoSbTTQ6V9nnWH4zexN7K7m1rqvOjXiDBMuHPw3ObeS29XuI8JtOZdIbkw0NV8NwEHVnZx0Y6fSneROSf8AwOoqgf4Y447WlW5MlsutQ8a4Hde8cgzKYiTVviWS02RU1Uqwj1o9w/ixYAlIH73ppX3VHHKMcrcW+jN2fCzsAG8vWr1jhaYRfM/OdTR7GcZtqMzMoHrWL8UcSw18qA8kH2oS5dFIQWJfajWpi1ChidCN6q4zj9tFJVwW5KNyaz2DL3VGZlyCANYouvAbClWGUGQc2lTUVdsq5S9IL2b7kKxO41FK+KdFJIHrU+GVTswNRcSwRdYDaVj+TW9a7BGD44+bITvPt2olh8arCCRM86B4fgJVswPm5SanxPC3JA/Eemwpk3L0QqUI92zVW0BWQZ9KdauQKxVq5esE7xOo5VpcBixcUHbrTXT0NCTkraoMWr80M49xFrSSi5mOwq0uVRMwOvKhGJ8SYYPkZwSOfL67Vtyo3nGLuQE4PxfFXLr/ABlyKNv96NHGZWBPOp7eItuMyFWHagniHFKikg+lWhNp2ZJKS0avD3wwqVkB3FZfwxxHOsHcVpVeu5O0crVMhu8PRuVUL/B/9JouGpwatBSZlb2EdN1qCK2DAHcVTxHDEbbQ0DqRm4roq5ieHunKRVWg1OxkUhFPArqDSOKSnxSEUAJFdTorqAJSKkRSasLYHOpFXpTuRNQ+SOzhsxA6mK09nCraWF0PM86FcLtFnEctaMYhG61w+VkfReEEmB8dx9LZAZtSYGvOgfELKYuHW+6DoGgaVT4/4SZ7xdbhAbcbgdwKB2PDV4FlNyABAI2NckEqvlv9F6/B6JwGUAQvnAGjEyavXsP586mNNRWb4FwsWlADsW6zNHMrsCATNI3WmD70WLl8RDEaUD43xQW1DK5lzlHQd6s2OEN5ldix3HpTDwkEgjWN1OorGwj3s874xj3DqBiGfmwkACfSmYHi2IWYuaLzPL+9bm54cssSXsx6AUKxGAwVloW2zN0IJq8ZRcaa2De9PRTwDviWYuA0DRwI9u9GuDo6eVh5dpqbh9xywUIFQ9ogdutam3YQLlAA71OXJy/BJxi3yS2YvjHhq1bBunM0sCRm0E84oTxPw3aK585EdNq3XE0QIVdgFP8Aq0FDzg8tvJbVQCNGOo17VjdNU6KKT97R5ZhOGXbzXFstIXqSJ9qLYV2CJYxCMoX8Rb5jy1mi3FOC37dvNaHnAIZkiWHcUEvYLGva82qnSD8wB71dzUkrpDJVtIbheL3bPxckhA0CTOtaHhPivEXAo+GI0zMTA9utO4Lwi4LWS8iMkch5vrVzhuCzu1rIQiAGTz6CpynF2khXFpXZokw6uoZtSBOhoNi/ErWjD4d4mAYEevamYDjAt3zat2nYAwXIIUH33o22V5LiZ+g9KS1FWbW9or4K4Lurplnapcfet2hlDKHOy8z7VaVFUCF96rXMFadxcyAuNM3MVsZpmSiR4/Cm8mQyFI1IMe1ec8fwLWHgjy/hP6V6hibyrsRFY7xZxW0VyNDMdgNTNXpHJmwfUX5MZhsfcRptE9wNj6iiWKxL3YL6du9FsDgUtWSyjMx3kc+lVcRhsvzwGbUAbAd6l9blfFdHb43h8Irk9v0M4Vxb+XYkCa0mB8WyJdCB1GtArHCrdxC5cLl3nTaqF1woAEQP3rTLyJdIvLx8b7R6bw/iCXlzIauBq8qscXfDmUac2pHL1otZ8X3RuqmuqPkJpORxS8Z8monoIalDVgL/AI0fZUAq/wAL8YqxC3Fj+rl/iqLNFuibwTSujYmDvQ/GcMVtV0NW7V0MAVMg1IDVSPRlbtooYYRTYrTYvCq4g79azmIslGyn2oKRlYyKSKWuig06K6nRXUAFIpIp4FSYa1mcD6+lBthHhNooM550VBHSq6kRHKlW5Bg/71yZlTsIysr4tAQYoFxvhzXbRRGyt1HP1rUXVkTQLjXFVsQSjsJglYhe5nlXJJ1LRVLkqMvwjg+Iw1wOzSpOqgkj6HatRax4W4UfQkAqeRncetZzjPjpEXKiF27iFHvz9qzY4s945y8wI2iDuYFb9Ny2yeSX0YWvR6o2LCkByonbUTTXvaF1g89K8xGKLMQxnud6M8KxioQC7gdBBU+o5UssbSbT6JY/LUppNUmS3PEOJ+IwVfJOuYEac6TC+Jg93I9tQP8AV37aVfxPDHys9p5J1ytqpnl2FAsPhcSZDIgAMsVOZo6KORpItuL/APT1KgzZ4bH2nGmhHaPvVEnEM4e64RLcmF/EOWb2p+AwqNayoroTIzOPvBrr1m2ltrL3gGyjMx3ObT2k0R5EJpXXoxHGuNXXcuVV7Qb5XHygHRq03D+M/wAzh2WycjRAPQ1n8emRCPb+1O4VireEt5gJLQWzEhUBjcgEsf6RXRJLilHs48fkK2p6+Pk2HBOHOLeV2JPPWTHrVf8Am7SuwcNbyn5XGjAbFeoqJuNt8MCzcS5nMq6KQFXaCGZvPM9NOVA8beXzfEY3XPLppzb71Div8o7I0kl3fSXdfIcu+KrIMIjN30H23obxXxcyqv8AL2/MTLZgJjsBvWXNwhoYZTybcfWosRdbMM5Gms9QdiPrTRT5WdEscFGzfcI4j/MJLhVciYB83rG4oml5LaS7rA3JI57V5TiMaBopbMFgnaJ5CN/L6b1bw1jX/iJOQMRDFpJIK6DcR15itljckc8ZKUvt2j0JPEeGOZc4EcjIn0nes3iccC7ulxhPyIJhj1P+kUEUMTmyBYOkiSfWaV5gjTr2n0jWpKMYy+TqhDV9fst8OW5iHyO7ZVJYgaD06mr2L4crOqqcggTmOm+pEUMw91rWoKy0AyflAEkmKIpjlyBmYAlid9yoMBV3OvOsk5ctdeh4xit+wbxThNxNQxKsJAk8iRzidunSq+BRWcZ3J6yTy2FaW/jM2QAlmCySojJyIBHKPvWc8QXURVKZJQkeUiG5k6cveqp8nxXshkxpPmu1v9h7A5C+UZcseutQcZ4MgIKmCdx+sVlcJj7jklfIBzH+r33o3a4hoWdojcmNe9I8MoS7J5PJm8VxRUxPDsp0GnI9qXDYIsNWGgP2/OqmK8QhyFRSBOpbpRZUVQCGOcpr07wTvNUmpw/kV8eTlFclv2DsVgyhiNYB0M77a1GqxtIPOrmBxyJeCue6noe8VLj7pJzlYBlVLaHXUGI21ralVlajYb8O+IbVlMjseo3PtWm4RxhMQpKaEGCpiR0PvXlWIt+XMsz0O9Mw3FShNyMrAgQugkGDHUV1Y8kq/Bx5fHj/AJPa1aqfFcKHQkfMNqp8E4wl9BBhoEg70WDV1p2rOFpxZkEucudSA1V4u/w8QV2DCR+tWLTSKB0yWupIrqDQzFXuFpqx6LVRqucKPmI6r+VAS6Ldt6nMMINUWMGpku0klZJMmRyujbcj++dNvoj6MBBp5hhB1FDsdhHRS1h4YfhcZlPbqK4smB+i0ctIF8a8K27qFPkB1GUCZodg/AKIILuw0OhgyBptV7BeJmzZLy5XGnY/Xajq8RXfQDrIqaTiqvQ31I5FfZnrfg9FDEyZ67ih6eFLi3VOfyAzHMdvStqOKK34lj1FOfELlzGAACSegG9ZKKa0zOEW02uuih/6epUBlJAG0kT6xTg1u0oZiiDoxUfTrWO434ke65CXBbQGBBImNczRrrHpVTDYFHk/ELEAk6EHQak76D2qcV6R2xxOrbNdivEmGRSVfO20JJ29dBQG3x63cfO9kEgaeYTvpyoLxlEDAWIjLrCkCfUwT69qTArAAIJZtgoJJj7xzomq0iixpLZe4lxUXRC2wBmTMJOYqpEqDESdBPegxwfxLilmzqFAVTGXNsSAN/uasXbJRjoc2UTHQiVjlu2/fSn3HKHOFywxME7anST9KzlKOuhl4+NvlWy3bsqmYI7BJJICpOp6wNQN+ZGu1ALXF1VmRhrJAbeZPOTVxuIKoYs8giMs75pJk9NNeulUL10gytrLJkSIMGYIkSfaqxVraCoxdx0WTb+ISw886nzANPedR6kUJxVls0ZQsD8TqWjtMD3AnvVuxYzmLsBSZmJ9v3zjauxFhXnKT1IJ9B11O1Ui4xOPN4+TI9y18ApLAUyWJ12G3uT/AGotw3EIinfNyJg/lr05UNxmGZflJ/OeQ9K7h7kkhpmYGmlPNco2RjDLgdxNZctShfNJ8pAAMsDJJ+mvpNDrt2YlZHIkczz09KlwuGZgQTkGgUa6sWAPpoZ0/WrGP4ddtK7wHgMZDgnYtJk/0nvrzrmjC3SR3ZsmR4eUdP4YMuMvJTJ3idPryp9sJBZzBjymPxdT2q1cwnw1lwrM0EsTBE7KVBIkTPoR7x8HtfEa4jQy7wdR0Pp607hToksksWHlPb9grEcYeSqjKDChiYJ9f70LxEhMzMPM5CjX5VjMw7TA9jWmxPBEYZUZDlYgz8wM6gkbxpy+tB+I4AZgACFRQq5gRIEyY7sWPvV8bxx6VE5ZPraiylw7HqmmViJ5GIPM6anTvR7A3EKlWUtmUFpEwQdV32Y89xQmzw5ZBP8Aj3FFsGzoWZOQjbQzWZJxb0WxY5RjTEwGFWCQomdgDIE8ztz37VqEW1AKD/h+XYZiW5GdCBP2oC2NQ3PiKpQDLmQEdg0dRv131rQNg7Ztg2zHnUmNpA1EEyNzv7VJq03ZZaqkY/xHYVLqXBIGbUfiidfQ70c/+NygyuQTJYxI00AjnptvqaDeL0II2iO28a6Tp1jvVXhHFXVAg1AJMEbzznmY0qii/pq/QjlU3Xs0eOwiPOQiEXTuTrHfSshxUFmHIKY33nnR84yVJzRJggb9Qe471nUVrl0KoJOaB3JrcLdt1WgypUlfsMcKxr2SpDTEf7V6vw7FC5bVxzH3515MmHbMFAJYmIjWekV6hwnD/Csoh3A19Tqapgk3J/BzeTGKin7Mh4+u5blsjfWncFxudRQjxnjM+IIB0QR7mqnBMTkcDka6L+450vtN3XVB8WupzDSEVJh7hRg3Q/bnTSKQisNCuMt7MNjVdTUXC+ILPwX2PyE9en9quXLGUwfY0rZJxodaepA9V4inq1FIwpcX4DbxAlpVxs67+/UVm8R4ZxOYIGVkGzTp6Eb1tQ1OzUkscZdiuCbswtngr2fNfawqT8rkkkf05daj43xC1BTDKw3lizBTpEBekkamu45w1rDaEuHLEdVAI+adgJ3oL8KROsTHqdzry0rizSUVxS2dPhQnKe+l/wBkVi0zMORACbLBIAA/3q5awuQXM5ylBoJHzBgBofmExp3FVnkTAMdtQB3Pqd6g+MTPPrJ/OuZbdntdKibB44ZySufmRJjuxg8tdzV3Do6ecOgIBjUNr0gAiaFWr8MYEZhBGwq/bxfzAIqgnQRIEiDvp10jTXWtfX6BKyzeutfUs5QQAubKZYnX5jOujan+1MxWEe4QczOghQxEEjUgR7nXvUK2zJ11A0HXX7R1799CObKm5B5ctREg9OlJPK6Xy/Zqil0Br1sWgV+CDcWSrHXzZhuNDAAMDXWduQi7jMQSZyhjMnKGbUydWmDpy6VqcbiLboA7eYQA+xjKfKZMRuJ71luJcRRFKWyGcxqB5fXMd9vqRXbhuUfk8nzvqKaULV9ld7rgpmfTMvl5kLsNOUaUTXAM5kbyPTWI19xrQVcGwylhmzwZ1nSDHruK0uBI6sANeupBA594BNLlaVUzq8bFKMWpO3+QcLaAxlYsCZOby6HoPTqaTKimQI5z30oxxTCZLaMMk5ipAAmBESeZ13oM3m1XUfv/AGqSly2WcaYbw2ORsoGeAVlXgqz6FSdlQ6b7mCDIJFWb3FAxYE7o8FQDDsDCmYDDLIPTTkooAMwEgSDpMTEiP1rrSZSYEevttT86Wg429lm3ZdlIGbLoWAUldNi3IQJ1p1nPY23KgnWdiYLR2J0nmKK4G27hGWVkkNsVYDL5YgwIO5kdoFVrSG873bjtkRue7EzlWVjtr/VRTq7McYyuMloGZgzSRuZYsJE+gG0AcjSYzhyqAynUjZGY+ui/LA3ou+RWOgK5jBAmcxBAyzBIEjvtpQ7GkZdNDtAJhuXaKTk70xvpxUega9wTIAGnsY5mTvUFi/5iJOvTtV7D2+Rj16dvSo7hCnQKdRrG433p1JdA4vsrYi7lcCZkCZ03jr2jXpRrAYlAHR9wNJzTygAjaJOpnp0oXjcgGbKBmbQQJjU9NKcr5z8zkCcsuCQNBBkbZRGgGwrWlKPwI21Ig8QYVg3zMWIkydNdZGuoOm361XwNhlAB/FtRVrpKZNI9PyJqOxcyspKhgBsYHOQQddfUVqm+PExw3yI/gsOlcLa7nfrsR79auXcUwQa5gQfLAEEba8/Xfer3h7B3rrq5SEzqxZhA8s6AfirIxlJ6NnKMY2w74U4UqWhcdZckwWBkCYBg8z1q54h4mLFosT5iNB3q5xHHJZQu52GgryzjfFnxLlj8o+UfrXfFKCpHmSbnK2D7rl2LNuSSfepsCfMKrGiHCrJZhWDGtzmuq1/K11UENY4pMtPikNaAL4lanUVb4N4hUxaxBg7K52PQMeR786fibcis5xDC76UrCk+zeXrJXUarUKsDtWM4V4ku4byOC9v/AEn5lH9JPLsftWvwONsYkZrTgNzXYj1HKs/QkotE804NUbo6fMPeuW4DW2LQJ8TYJ3QMgllBBHY66D1rFC6UMEmCdVK68pMctvsK9MLUA8TcOttba4QQwj5ecnnXF5GF28if7R3+JmSX02v0zI37InMpn5SB+E67a9fyNRrhVC3BnlwRERlIAJbU66Qe/KlxQJtkKdZB31IAiJ6CgSXWViASNfpXMqltHdtOmX0U7NOn2q3bxjW/9JkRqqkRBXUEa7z61ROPGUhoBHPr9KG/zuYnpIA9K2MJXaNco0ah8rBXTUHTJmlkOgIOmokiCY/Uypi5WMuYba+msGo+GYaE0HmaQQCR5NdHHeQY6ZepiDG3GQMqiFDwTADAkbx+xUskYuVJbHi3VvoIJwkMQWZAWWQrEqCu2fMNCAehMxrpVDifCEGub5llQYDZoVgCNYBDNGv4frHa4lcEo2Ypy0DZeUqp05DTTblvTMRi85VAuQT5mAYqdfmC7z20/WuiLSikuyLUnK30UGsEfLqCR+fY1fw+FVgDzRkadwwZwCOgIBGnODVfiKlTFos4y7EajTn0Mzp2G9QW7l8IVK5VjOesZtNexI071it/BrpGtxeFR0IUgmROg0E7c9aB4vDfCIBXynSeYneQdjGtDsFxB1MkgEnRmMR77ajT3q5i8a10ElpJgye1SWPhSH5KQ27bUDQ6fr23qoMSA0HUCN+Z5ieX+ajxV0hSSYgfkNaE3HM796tjx3tiTmo9GjuYwrCKSV+YHaQe32I6g0b4M3kyFcyNrlzZSYOmvWAJOmgFY7BOGcTLBSIExPWDyPfUdjWvwllSpyMwy6gkeYc1JAmPuKzJcGqCLUlss43DC1D3ECgZsqROo5uQN5MEA8qzysCdNvr3g6UuKkyWObkP8cgKoLdmQD669Kx1J66HX2qn2WbuIWSCep5g6nQ6/vShty4SNBpMn9/WlugkxH7H6Uw4ZmGvlBqkYxWxJSYNxLNcaFkwKJ4a2UEAaaRzIPPWprGECAEfX1qW1bd2CouYnaBJPtTSyKS4rol9N3yfZEjnXnHL/NTWbbO2RVJJ2ABP+aP8L8JOxzXWj+hYLe52X71pktWMMn4U6gasf+ZtzTRxOX4ROXkRjpbYH4L4Yg572sGQkzA5ZyNCewopxrj1rDJLMC2wA+wA/Ssrx/x2IKYcA9/w/Ub+31rGM73Gz3GLE7Ty9ByrpjBQWjjlOWR2wnxfjD4lszkheS/3ofFcBU1u0WoZqVDLdssa1XAcFBBiqXDeHzFa/B4bItPGIsmTwKSpMldTihznXRXRT1FYaRwap4vDTrFEYmkK0AZDGYKgz2WRsyEqw2KmCPcVusVhQRtQbFYTtSNDJkPDPG9635byi4o/EID+42P2rUYHjmExOiuEc/hOjf8Aad6wmJwXahV/B9qy2hXFM9dfBPujBh96p4pCUZHUgERqNJ5H6xXmeD4zibHyXWgfhfzD76j2NaDBfxIddL9rN3Qg/wD1b+9Dp6YJSTtFDiHD8QjStn4igZZRgfLvsYO/Kgl4S8ZHQndXWCP716HhvF3D73zwjd5Q/UxP1oouGw10eS6GHRwrr965348f9vZ0x8qSf3I8wscIW5MuE5gZSc2uwO09OXWKr2uFKCCF5HQsCeepjYzP0Feo3fCaPqmSett8p+hkUOxvg+6FCop0ZmJImZjKJXpH3qUoZkqS/o6IZsUnbf8AYFTDAKiowB0Ak6AACT6k/lTgjpm0DBtCSJGm23STt96q43hGMTQWi0DQjWPYxNMTE3kQhrTiRB8h8vcdvSuKWDIttHQs0HpNE9nhGcArm0J5agHoeYolZ4UuZVYLMSADqep0/MzQZvEDKpDKyny7ZoAC6ctJJJPtTeHeKktlmdTmgKGymYWYUmJgf3608cLb3YSyatBLF2LSsyQNQuhJITzHNBEEaEtE8uVZXE45QWUtKh4mAGyzvG21V+LeJhcncyScuwJJmSTqR0ms++IdztpOwBAPrGtdyxckrVUciyOMnu7L3EMdmDQTE+UEben30qxhMNfKuQQVQgNqBExBzGBBn3jSmcM4Q1wfKx7RPKtAnAXI+R532JknnrzJJJrJZMcPt7GUJSfJOgTbwt+CxtyonViMkgFozgxsCd9YrsFw1rpGZfKT6DQ6yx0A9D203o9Y4A6OrraZ8pBAZcoJAO87gGPXoJpzcFxLuGjKAdAWTygmSBr3NZyXcUa7TptUQYzhSWXKoehmAPSP3ypeGFHcLcmD5ZEasToTO8/vpV//ANtYhtCVHoSf/FTVyx4PeBLwRGqr09SKkoTk7of6uOKptA7EYS2yNHlZCQ0EAbiARyO/7igIw6qTG868jW7ueEFY5nutm1LNmUSeuxqfDcIwliSSpJ3JAdjAjdpj2AqkfHn+iT8qH7MVhcGrMAVLTr5ZYwN4jnt21q5b4BefQKQP6tDyO2+/QVpsZ4lwlnQss9Cw/wDEf2rOY/8AiOo0tIT6DKPqdftTx8b5ZKXlt/xX9hfC+FIWLtyF5hYAPqdz9KsviMJhFMFR1MxPqxMn0mvNuIeLsRd/EFHbU/U6fagd12c5nYserEk/erwwxj6ITyzn2zfcW/iDuthfcaL9Tqfp71i8fxS7fPnckH8I0X6c/eahtYct/c1dsYWNt+tO3QiiVrGGjVh7VbVKtphCaIYbh/al2x9IG2MKSaNYHh0xpRHB8Mo5hsKF3p1EVyIMDggo1q6RE0+IrsvvTGDfaup/wh0rqADNdFLH79aWKAOpRSD9+1KTFACZagu2AelWB+/370oFAATFYLoKFYjAzyrXutV72FUzWUbZhMRw7eh1/A9q3WJwq/eh+Iwqwaygsw93AjpVU4VkMoWU9VJH3FbS9hFqldwi0tG2ArPGcZb+W88Dk0N92BNEsN4/xybsrD/qB+oMfaku4RYqo+EU0GUaDD/xWxA+e3P/AFKf/Jf1q9b/AIrIfnsH/sX9GrDvhFqs+DWtsHFHow/iThG+a3H/AEN/mnf+9uHtuie6H9Vry98MKiawKGkwo9SbxNww7pa/7R/akXxJwwbC0PoK8qNkU34IopC7PW18W4BdmQehpG8b4EbFPoT+leSfCFMCUAesN/EHCDYD2Rv/AM1Vu/xLsj5UY+iR+ZFeY5Kf8IUBRvcR/E5j8ttvcqPymhWJ/iFiW+VVX1Yn8orMLZFOWwK2wov4jxTin3uZf+VR+Zmht/F3X+e47dixj6bVOmHFTrhFos2gUtupFt9qO2MCpE1et4NBsKyzaM5awLHlHrV2xw33P2+laG1hV0q1awq6/v8Ae9G2GkBLWBnlV6xw7tR2xhFolawqx++1akFgTD8N7UUw3Do3FEVQAaCpIraMIVtAaU8r1p0QJpQvOtAjpKeRz964igBIrqWT1pKAP//Z",
    name: "Roti",
    category: "Lunch",
    price: "50.00",
    description: "Best Quality Roti available in Bangalore"
  },
  {
    id: 7,
    image:
      "https://www.cookwithnabeela.com/wp-content/uploads/2022/03/Aloo_Pakora_Web_1.jpg",
    name: "Aloo Pakoda",
    category: "Evening",
    price: "25.00",
    description: "Best Quality Aloo Pakoda available in Bangalore"
  },
  {
    id: 8,
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/04/1-29.jpg",
    name: "Pav Bhaji",
    category: "Evening",
    price: "30.00",
    description: "Best Quality Pav Bhaji available in Bangalore"
  },
  {
    id: 9,
    image:
      "https://www.thespruceeats.com/thmb/LEKQQaf7-jb0wg87sMvQeSFN6YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vadapav-56ac12145f9b58b7d00a409e.jpg",
    name: "Vada Pav",
    category: "Evening",
    price: "50.00",
    description: "Best Quality Vada Pav available in Bangalore"
  }
];

export default MenuApi;
