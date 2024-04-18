"use client";
import StatsCount from "@/components/Stats/StatsCount";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { format } from "date-fns";
import { useLanguage } from "@/hooks/LanguageHook";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionaries-use-client";

export default function Profile() {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();
  const { lang } = useLanguage();
  const t = getDictionaryUseClient(lang);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (session) {
          const response = await axios.post(
            `http://localhost:3001/posts/user`,
            {
              googleId: session.user.id,
            },
            {
              headers: {
                Authorization: `Bearer ${session.user.accessToken}`,
              },
            }
          );
          setPosts(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [session]);

  return (
    <div className=" max-w-7xl mx-auto sm:px-5 px-10 mb-[10rem] sm:mb-0">
      <div className="mt-10  ">
        <div className="border-b-2 pb-10 border-primary/20">
          <StatsCount />
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          {posts.length === 0 ? (
            <>
              <h1 className="text-2xl font-200 text-center">
                {t.profile.text}
              </h1>
              <Button variant="outline" className="mt-5">
                {t.profile.button}
              </Button>
            </>
          ) : (
            <ul className="grid   gap-5 sm:grid-cols-2 lg:grid-cols-3  w-full">
              {posts.map((post) => (
                <div className="bg-primary h-[10rem] rounded-md shadow-xl flex">
                  {" "}
                  <li className=" flex-grow flex flex-col " key={post._id}>
                    <p className="m-2 opacity-40">{post.title} </p>
                    <p className="m-2 opacity-20 max-h-[4rem] min-h-[4rem] overflow-hidden">
                      {post.content}{" "}
                    </p>
                    <p className=" flex justify-end  h-full items-end m-2 opacity-75 ">
                      {format(new Date(post.date), "dd/MM/yyyy")}
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
