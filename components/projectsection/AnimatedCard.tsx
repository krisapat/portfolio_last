'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { notoThai } from "@/utils/font";
import { Button } from "../ui/button";

interface AnimatedCardProps {
    imageUrl: string;
    name: string;
    title: string;
    linkUrl: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ imageUrl, name, title, linkUrl, }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={isInView ? { scale: 1.0, opacity: 1 } : { scale: 0.95, opacity: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="w-full max-w-5xl"
        >
            <Card className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-lg border bg-muted/40 dark:bg-muted/80 transition-all">
                <div className="md:w-1/2 w-[90vw] flex justify-center items-center p-4">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-w-[90%] object-cover aspect-video rounded-xl"
                    />
                </div>
                <CardContent className="p-6 flex flex-col justify-center gap-4 md:w-1/2">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <h2 className="text-lg">{title}</h2>
                    <Button asChild variant="outline" className="w-fit gap-2">
                        <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            ชมเว็บไซต์
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </Button>
                </CardContent>
            </Card>

        </motion.div>
    );
};

export default AnimatedCard;
