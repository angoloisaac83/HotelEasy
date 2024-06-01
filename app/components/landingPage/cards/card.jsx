import Image from 'next/image'
export default function Card(){

    return(
        <>
        <section>
            <div className="px-20 max-md:px-5 w-full max-md:flex-col gap-[20px] justify-between items-center py-5 h-fit flex">
            <Image 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBgMFAQIHAAj/xABNEAABAwIDAwcGCgYJAwUAAAABAgMRAAQFEiEGMUETIlFhcYHBBxQykaGxFSMzUlNicnOy0SQlQmOS8BYmNHSCosLh8ZOz0idDVIOE/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECERIhAzFBUQQyEyIUM2H/2gAMAwEAAhEDEQA/AOK1mK8KyKltHorNerIFBsK9A06+S9M397H0aPeaSlegae/JUmb2+P7tHjRfSaztOn9f3n2k/gTQltacqlSlOBEaAExmPbVhtMP6wXv2k/hTUSLhxqyQ2IKHM2YHdWFr0Md8Y3tsWvrFWQPvjJplLmcDuUPEVcWu1boH6Q006OJEtq9WoqiebUthp+JklBPWP9oqJKM2iRqdwpcivixy9nRq/wAFxxxNpc2oU6vQIeZBnjoRXPdvMLtcKx7zexaDTRZSvKN0md1M+zCAdpLXiAVfhNVPlQR/WgDotke81rhdubyYTHLUJkVmKnS3W4bAGtWXFPh2J4lYLHmd4+2PmhfN9RkU1Ydt/iNqALxhq4TxKTkV4ik9SueYFakk0tbGnbNmdqrbGbV42iHELbICw6ncSOrQ0c88476ajHRSF5LEkt4j9tHuNPqwEDnkCsr7TZIDcRURbqd64AkNpzCgnC8s7j2bqNDbDrjbY1JJ6BrQNxdLPyaQjrOpoxNk851dQFE2+F8mrO6gKTxz0+oZe81uLpWgWvrolrBTveWE/V31LfY+zbMIWQWwvVAQnMo+4DvNLt7tG89IZaEHi6rN7BA99Tco0xwtMH6BbO5EILroGoCc0dp3CqzEsebbIS3cNtkb4Ryij1AAgDtJpcurm5uo5d9a0jciYSO4aUNkSkHKImlK0njWd3tC65/Z2FfbeVP+UQPaaB+Fb3oZ/wCkmoFACtKZ8ZC/WaxWa3cjwrIrArIoNk+jT95J0zdX/UhHjSENRXQvJGn9IxE9SPGi+k1jaZP9YL77afwpocp/RG9N3iT+VG7Sj+sN/wDeD8IqFrO7ZhpKJyrkEb9eFcuV7ejj+sQtCUhtUhIzKOXfu/2qQAgZGwRO8k6mjLe0WM/KgJ5p0PZNbgNMnmiT2VO1Ctk7YjHLVUQBPuNU/lPSBtSf7s3Htpi2XcUvH7adBztO40v+VQAbVf8A50eNbeKuTy/7IT4itFcakJFRkk8K0LTU+l3VgqArJSSa1UnKJNNK52a2nucBU8GbZDqHiM8mFadBp92a2kt8efUx5u+y6lOY5yFA9hnwrlqBIBFOHk0T+vHfujU5QtOjhhtI3TRlkw2polSAog8RUeTWjcPTDK/tVmig7u/sbU5HX20qH7KTJ9QrYZXWQtGqVJkEily6YA2gv1FI9Od3VTPbom0b+wKDctxoJVY2CkwQcw0jqqqu2E2zuRNwxcCAc7BUU9nOAM91EY5ZPWuAWSEOpSoPOGQDEadApfafuApKXoUFGApJnWs+G+3XjnqaWJIqNW+tFKV0VrnNElaWvKrWa2IB3mOusZU/P9laI2X69WJr1buFsKyK1rZJ30GmbQsONZkKSCpJBIiQSK6L5IkzcYmehSfGg8YdS5gFjyVwjKnDrQLAg84Np0qs2G2otNnLi8F4064HlggtgaRPTS9wqZNorZRx6+WtKwkuSDlMHQUG2ttBhsc6ma08pezbqQlxVw2B85okeyj0bVbG3gh28swT9MwU+0prDLx3box/J1NWFVKip0BR3pynvTHjUZUlPpGnZtnZDEBDFxh65+hucvuVUw2SwZ0Sw66n7DwX75qL48mk/Jw+i1sivPtBbBKdIVr3GqLyridrT/dm/Guk4Zsu3h2It3bVytQRPNUjfI6a575Tra4u9tW7a1ZW8+u2byoQNVeluHdWvjlk7Y+TPHPPeJGOUb60LnAVtdtOMPLaeQptxByrQoQUkcDUAXHCrUISqT3eNaXGqRWWhoOytnhzRTFYaHNFOfkyT+vnPuvzpSaTzRTl5Mh+v1j934Gll6TfTppRRlgiW1fb8KiUmi8PA5Jw/WrNlSfeDLtBfg9I91MdsmbNr7ArFy5hDF46p3kfOjq5CSpXfFFNqS8ylxv0FCRpFActxxsqw61ABPxq93YmlDFmFNvWpKCkFzojop+xBMWzXU8sexNKW1Grlmf3viKie3Tv+oBaJJrTk08aIWNahNOVrRDqGGQmUE5jCQAVE1pmZ/8AjOf9KpHvlrX7w/hNTSKrek97LWE4BimMNuuYbal5DJAWc6UwTu3kUWrY7aJG/CXz9lSVe40wbJCNgdpVjQjLBH2DSk1c3aUApu7hPY8oeNbTdcdmky9mseb9LBcQjpTbKV7hUKsHxRvVzDL5I45rZweFEN4tijXyeJXg/wDvUfGi29pceb9DF7sf45p9hSKtbhB51s8gzxaI8K1LeWStCk9oimZvbHaNEfre4UOhQSfCp07bY7+3dMufeWzavCl2NFEJbPED/FW4bSRvPcKbf6Y4mflbfCnft2CfCK8dp1uxy+A7PvDjmslD/XRs9FIMBW5xXfrRdqXrdJDbik9aVFPupj+HcNXo7slg6vu+Ub8TWfhLAFkcpsk0n7rE3U/6aVqppUW+M47an9HxW7SJ0l9R99WOF41cfD1piWNu3D62TClBQKimCAPbRQf2UVqrA8QZP7rEc34k14nZRze1tA19ly3UPaKXZ/1UmP3Dd9jF7dMZ+SedK0ZxCo66rcutNa7HZV30cSxls/Xtm1+4iojg2zqvQ2guh95hyvBVCtxS2zajMJJAG8UbhOGuY3i9phTSksuXK8gW5uGk8OyrtzAmbPZ+6xeyxNF5bsLQ2tIZU2qVEAb+2qbBsYVhO0FhiZYKk27vKZVEgEQRvAPT0U4WV66dPtvI9bNtAP4s4Vga8m1p7TU9jsOnZy889scSK1gc5D7AII7laGo7fymvYi6i3sl2aHXCAlJtXVgd+cCgE7cXeLXDlpb3Nu44JSsHD1JHRv5Wll6Yy50yJxW3WvKHUkjgDNXGDuJdZcUnUTSLhGGutXCypQ1Twp3wBvkrZxM6yKzVlNKy5t21Y1frI52Ufhq5ZSEsICRAA0qnvF5ccvE8FIRr3Vc26gphBG6KaJXPcSEW6P7wsewflSbtVzEWyz+y6NO8U64ohKraFjm+drPsP5UiY8tT9hbOKJOZ/SeidKiTt1zuIicyQRuqM1ORCYqBW80vloIeSqGXEZSUKmFHTcR417lXfmW/8RrLqQpLAUARyidDRHm7P0Lf8Iq+k6uxWx6Z8nm1HaPwGkpofFinnYwf+nm1HaP+2aSWY5JPZW2Py5MvbRQqe1w++vGHX7OyuX2WR8Y4yypaUdpFYyJUCFCQRFfSnk1xr4f2TtHneddMJ5B8xErSIzd4g99VU26fMaVpIEKB763nrr6mxTAMKuXy6/hto44d61sIJPaY1qpVstgK9HMGsSfuU0i5uD2WzeLXuHt31racpbOFQQsLEmDB07QahewrELfR6xuE9eQn3V3tGF2mHW7tjYsJZth8YhtAhKSSc0eqaobi3yKIqbaqZRxrk3UmC0sHoymiLWwvbo5bazuHTP7LSiPXXWmkwRqPXRwWQ3vmPZS5HyjijyHbdRQ+hTahwUIqMOp4EV3DAXEOJubdwZuSdgAidCJ8aMu8JsH0/HWTCo+c2D4U+R3ORwPlR01ul5AAKlJAmJJ412z4CwxrVGH2iT1tCrLZ3k2XbhptptKRlWgBI03ijkXOacrsCo+TzH0rSoRcWyxIjQq31RYXf+bXtqt1xKWUOAqUUzAmup+U5BTg+LOEzyzFuf4XCPGuNODMhCU7yQName1y7mzptxtCxjb1pdYe8ptQQQ6hCiNREHSN8TQmwbYVjaydZRrPaaonrVyycDD5RnyzzFZgNSN/aDTBsCr9dq+7p30c6jqLDCARCY0q0sCltDmh3gaCq1tUJFWOHKnlO6p0xtUeJEjaJ7Xe0jSr2y1tGt3dVBipjaNzrZR41e2CptGuyiE5vj97kw++Byp5K8KJUYHOSdZ76TcVuW3bS2aSu3+KWn5N4KKtYp72jbBw65CW8yjeGQkakyqkwMlF82l61eDMyvKkgxxgkRNZ3KcnbjjbjtA8YJ17Kh1MxrG/qpjxC0wZq/u2LNbi0IVDJdUZUI37qoFF9vEi0iQy4qFoy80ga9FTL209zaVw5WWVAKICkkwJNSeeI+Y9/BVq8zb+bsZW0ejziB76g5C3+ia9VVzLTfYlU7AbUp46H/IaTGB8UgdApt2HURsXtYj90k/5TSnb/JiurFwXupkCuu+Qa5WXMatOU5g5F4NxuJzJJn/CK5Igiuj+Q66CNqby2j5axKp+wtP/AJGnU12a7ERpQakijbn3UGo60tM1bcj9Jg8WT+KqK9bGcmr+95rravqqHuNUlyZUamqlVLkozEDWlZ3aHEUqUSlpSJIAykQPXTc+mQdeFJNwgIVdoVHNcMDqInxrDybk6dv4kxzy1kksNqruzefcFuyou5ZBJERP51Y/07veFmx/EqlJQBWSN1ZmKx/ky+3b/j+Pfo12G12IXWKMMvBpLLqsqkpTup1w9ZGJtkbnEKB17/CuRW7wYuWnp+TWFd06102yukofZVm3OAA9v/NaePK325PyvHjhZpH5UQBsndvng2En+NB8K4R52pVwnk5JSQUivonbTDvhfZm8sk5ypwJjkxJ0Irm9r5KXVrlq8dQr94zpW8sckvRabuzc2T4xNcXpWC06uVEj5k9+lWmxL6GcbIWQOYoR0EUwt+TLFmHS4m9tlcJ5EK9iuNE22wF63dJuLq+UtcEEJQE6dwotXKZWLgLbSpJ0q1wpz5TuqiYwZVo0G+Wd5u6Uk0ThF0lOI3doFFSmkoJPaJpIqDGlxtCT0sp8avcNXNk32H30DdYfaXV35w4pQdyhPNXGg6u+ircJYaS0jNlExm3mmn5IO3DzjGAYi6yopcRcyCOHOVXLvh3FI/trvs/Kul7dqBwDFhxD4/EquQE6UYSaaZWz5HnFr9ZAVePR0BcURb3ri7hDDztyVOLSkFLsaHTiDVSiZB66KYV+sbdQG5xHvFXxiZnl9nVaBh7XJoSo5YWoqWVTNTcoOn2VBjRPLXYAiWpHcofnUHnCfnGufLHt24Zbix2Ltrn4L2pwstFF24whKWnCEyecN50iosO8nW1FwkZLezSPrXYPuBqXaPDziO3oCyoMIYaU6EqjPvgadNdu2at0ow1pYQG0ZeYhIgAdldXp52WVcktvJNtC5BuLzDWE9S1rI7so99O2wGwX9FMYcxS7xQXTht1MpQ2yUAZlJJJkmfRp5JHAVoUTTRyrNy+lZGVWvZQi3fqmiORrBZHDXsoJVXy1q5PKhaucZhM6ZVeMVSqYvnXSU2rxB6UVc4ljmD4Yvk7zErdp2J5JJzuEdSEyT6qqlbZWql5bHD7+5HzlJSyn/OQfZRZFdoF4PiryTksyPtOJHjS/iOxG0bzzq2LS2PKQf7QkbhTR/Sm9JEYfboSSBz7mTr2J7Kjd2mxZQyoFi3A1hCl5ddd5HuqMsJlNVp4/Ll47uFaz8mOOvDNe3dla/VRmeP8ApHvqzT5LrZCQbvG309aW0pHtoh7EsUugo3GJvqQowENHk/wAH1qoZLbWYKVlUQJKlb409eoO/qpfxYfTW/leW/KdHk3wBHyuM3DnatseFWrGDYBaBCXMXLgTGXO8nh2CqTOCgICTmUqCMqQOzp4jvPbUheeOZxCebEJBUQCOHRPCe7vcwxnwzy8vky/amR3GMHYTDa3rgn0Q02pU/wCIwPbUA2mZMRZLQCdA68gH1JKqoAtXNAdbGVJPE9m6ZOp7dOjWILUEpKVLkrJBbQBOsaev1Dr1emejMdoUkJ/R4JMfKTHsoN/aK6Uk8iwymRIzqnXfHqqkKVkOKCVc0ySpUae3q/kVktrzQTlzQpMa679Jk/8AJ6qR6ixcx/ETPOZCZ4Inh275MUDdYlevqOZ9SQYHxaQk7+nfQVxdMsJKrl9trUJVnWAZkJ6Z4H1VUXe0+GNZk+dqfPNHxQzAjmkgndvzChQ5xtpa8zg5VzLGd1Sln1mdPzrdF7csNhth5xCB+ykJAHTxpYd2vbWrLb2TripkJMTw4dcHhxqdg7VYlrZ4E4lJEBbgCQO9UfyaNGsb9Hn9u6xdJKm3TKwTEmertqhd2VwyNErR2EGPXVunZbbG5I84u7SyR81Cs0dwHjRrXk+Bg4hjF2+RvDZyj2zRocoR7rZyzZBIvkNga/GJHhQKbazbcytXLbznDk0LJHqFdNRsJgDJCl2zr5H0zyiPUDFWbGH2dk3ks7VllPQhAFPR/wAv05jdqurkhx1TiJTCviykFPeK05Jn6YfxCumPpB/ZSRQXmrf0SP4RU3Fc8/8AxLYYb8JbaLbA5iGkLdUOgCurtgNtpQkQlIgClDZG2bb85vY+MuVpTPHKkae0mmrPEddaXFyctpT1VskHvrDcHfSZtxtkvD3/AIFwJTZxNQl99WqbVPWPnkbge3qKOdrvaTafDsAytPqU/euj4qzZErX1n5o6zSNf4tjONlRxG9VZWihCbKzJSCJgZnPSPcQPGqs7dLK3HQtbj7kqduXCSpzfqpR7tBp7KJK9QUa6nRKkpzRAABM8cvhQrTe2ZtrYBDDDbKVqKiEtKKj1kxqZHH/mdDiktcwEJyTu6eoD+e2hQMozFSYLaiQSM4E7tCOnj+RqVZSA4oBIEBCSCAI3zJO7jPXwoFELkZlAKzc0gkgR7N/UerprOUZozZUhf1jOg7uFQLUUqWkwFFSZhR4mIkE8f531hbvOecJSEAiCsnU9G7eR4EjhRoCUpVIH7ShkEGII3fyKyAsjQIUgDNA4mN2kdPs66EcfShLyi8gQAoOBeUdskEaabzxHTBrLzabDbeUBzl5IISysLCYnSe/p4a9Begvwo84haY1ypb0kcOsVnIqUpUop0lSkzJjjrprPv6BCTd7aun+x27aBvHLa6yOAI4Tx3nsrS2d2sx1w+YWt06kzJZZKWxM/tq047poPVO7ly23nUt2MokqJMRx10019VUl1tZh1uhKG3C8sQYQSQDpOvoxv0B3xGm+G18mu0mIrSvEXWbaSSS67yipOpMDr66aML8k+DW0LxO6ub1Y/ZB5JHs1PrpDchEuNscSunlt4e0ApWkJTmV6hU1vgG2+NwCzctMkSF3Kwykag7vS3gHdwFdmw/C8NwpoN4dZMWyR9GgA9540QtdMucjlNp5JrheVeJ4qkK4hlGYjvP5Vd2Pkz2ftSDc+dXhBmHHilJ7kxTspfXUKligrlaCtMMw7DmwiysbZhIGgbbAqZStNde2vLcBIFCOvBNCWzqhQy1gVE9cjpoNdyCqJpHpO84npoN1wdNDC7BdykjVJ3/wA9VAO3gImaFSCnnh00Pyo6arnbkniKi85PSKlpxNmxONtXDqsPzDlWDJSd8ETNOjbxOhOor5ssNqV4ZtKMYtmM/Nyltat447q79geIt4lZ2t40FBt9AWkHgD01tvlHLceN69DNqMeb2cwJ/EF851ICGG/pHVaJH88Aa5VhjT7dup66K13dyovPrXpLiiCSddYk1ceUe9XiG0WHYYnMWLNs3TuXgpUhMnuPrqub5jkwhOvo5ZVuGp3dH87qza4+hDYkAkFQKuapLZM6k9J6O+vIGYJHx61BJJWspI10/wBpka6RO/VKc5bCW1OLUrLzhGUDNuGhjefUZiTXgnlYRCXFqTEcoVTqRA4nRMdiSDwUA0wJVmhTgUcmqAkbxMT36Dr6dTsM6i4ttpcBSQMxTzlDeBOkkaRvHWEioFwOVcWq3aSkgJyq1yzOvGNT26b5NCYte21lbuG4bC1FUBCF6uDUCJmBod+YQBoJpksbh5q3buC442gAgOF1uBECevcoaeANLeLbVKDikYerOCmFPL0JOm4dgmTxUegUDatYptVi6LSxZKnVpAS0k8xtIJ5yj0SVGY46V1rZXyZ4VgyU3GJ5cQvpmVp+KQfqp8TTO6jlWH4HtJtW4Fs277zQ05d4ZGwDvgnQ93RTphPkgRCVYxiizH/t2qQO4qIPsFdRcWlMJQAlKRoAIioy5Qm51T4Vsbs9hMG0wxkrAjlXfjF+tU1dFQAAAAA3AcKjW5AkmoHHgJ1oSIzzpXnFwig0PhQma0fuAETNATrdiolPb+yqty+5x1oZ29KwrrMUjWq3xNDuXQFVqrqXD2Gh13EongBNAHNXWfOZ9FM0DcXciQdUgE9czQbVxltnusVWu3RNyU5uaU7uuhWhrl3rvoRV1zpndQLtxqqh3n4Ch1AVLTi2uLojMQaFcuCrcaFedkk1AXoFDTiLW9oai5egFXEzroN9aedo+cKR6KDQzHXpru/kwuXHtnLYOGeSzoT1AExXq9WuHtyeX9S5iLintqcfuHDK27gNJHAJQgQPafXWC+pFq6ptKUFCnW0wOACvboKxXqmtJ8LEtAu8mpS1IGSApR+cUz7Ae0CtbpKEcnb8mkoLKVmRrJWme78p361ivUJ+BNtbNXPmYWIL7ryiRvSUBURPTGszvMRXOL+5durp154grmB1AQAPUBWK9QcfRmwuB2GA7NW6rBkBy5bS686vVS1EcT0dVXr/ADVwOmvV6lE5AHD8Z30GtxWVRncqs16rQguXFBCQDQqnV5069Fer1I2ELUDE8TQd48vKrWvV6gKlbq531lC1FTQnerWs16liutM6uUd13BXuNDurULV0zuQK9XqZBOUUGTruqpW4rzka16vVFaxA6s87Wh3lqzHWvV6k0gRajlNV924pKdDXq9QoN0EkknprFer1Jcf/2Q==" // Path to your image inside the public directory
                alt="Description of the image" // Alt text for accessibility
                width={500} // Width of the image
                height={300} // Height of the image
           />
           <span className="w-[54%] max-md:w-[95%] flex flex-col gap-[15px]">
            <h1 className="text-2xl font-[600]">Lorem Lorem</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minima reiciendis voluptatem ut expedita illo ea sunt error fuga molestiae distinctio maxime soluta, quasi id asperiores totam voluptatibus. Hic, ullam.</p>
            <button className="bg-gradient-to-tr from-orange-400 to-red-500 w-fit px-[20px] py-[10px] text-white rounded-full ">Log In</button>
           </span>
            </div>
            <div className="px-20 max-md:px-5 max-md:flex-col gap-[20px] w-full justify-between items-center py-5 h-fit flex flex-row-reverse">
            <Image 
                src="data:image/jpeg;base64,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" // Path to your image inside the public directory
                alt="Description of the image" // Alt text for accessibility
                width={500} // Width of the image
                height={300} // Height of the image
           />
           <span className="w-[54%] max-md:w-[95%] flex flex-col gap-[15px]">
            <h1 className="text-2xl font-[600]">Lorem Lorem</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque minima reiciendis voluptatem ut expedita illo ea sunt error fuga molestiae distinctio maxime soluta, quasi id asperiores totam voluptatibus. Hic, ullam.</p>
            <button className="bg-gradient-to-tr from-orange-400 to-red-500 w-fit px-[20px] py-[10px] text-white rounded-full ">Register</button>
           </span>
            </div>
        </section>
        </>
    )
}