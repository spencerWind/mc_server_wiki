// App Home Page

import FullWidthSection from "@/components/ui/FullWidthSection";

export default function Home() {
    return (
        <main className="">
            <section
                id="hero-section"
                className=" p-4 mb-12">
                <div className="h-[448px] bg-slate-700 mb-2" />
                <h1 className="text-3xl font-bold">The Emerald Kingdom</h1>
                <h2 className="text-xl font-light mb-2">A Minecraft Project</h2>
                <p className="pr-12">
                    Welcome to the Emerald Kingdom, a Minecraft server founded
                    and ran by SamWake and Kyro. Delve into our world and
                    discover the history, builds, and members that make our
                    server what it is today.
                </p>
            </section>
            <FullWidthSection color={"bg-green-600"}>
              <h1>A Breif Overview</h1>
            </FullWidthSection>
        </main>
    );
}
