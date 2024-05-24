"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "./ui/dialog";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const ContactDialog = ({ trigger }: { trigger: React.ReactNode }) => {
	const [form, setForm] = useState<{
		name: string;
		email: string;
		message: string;
	}>({
		name: "",
		email: "",
		message: "",
	});

	const formRef = useRef<HTMLFormElement>(null);

	// event listener to handle CMD+Enter
	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLFormElement> | KeyboardEvent
	) => {
		if ((e.key === "Enter" && e.metaKey) || (e.key === "Enter" && e.ctrlKey)) {
			console.log("attempting click");
			document.getElementById("submit-button")?.click();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
		if (e) e.preventDefault();

		if (formRef.current) {
			emailjs
				.sendForm("noahpittman", "noahpittman_template", formRef.current, {
					publicKey: "OUH8QIDn0ceYoUaiW",
				})
				.then(
					(res) => {
						res.status === 200
							? toast.success(
									"Thanks for reaching out! I'll get back to you shortly."
							  )
							: toast.error("Something went wrong. Please try again later.");

						setForm({ name: "", email: "", message: "" });
					},
					(error) => {
						console.log({ error });
						toast.error("Something went wrong. Please try again later.");
					}
				);
		}
	};

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>{trigger}</DialogTrigger>
				<DialogContent>
					<DialogHeader className="text-left">
						<DialogTitle>Contact me</DialogTitle>
						<DialogDescription>
							Feel free to contact me with any questions or projects you'd like
							to work on. I'm always open to new ideas and collaborations!
						</DialogDescription>
					</DialogHeader>

					<div className="h-px bg-muted-foreground/25" />

					<div>
						<form onSubmit={handleSubmit} ref={formRef}>
							<div className="grid grid-cols-1 gap-y-4 gap-x-4">
								<div>
									<label htmlFor="name" className="sr-only">
										Name
									</label>
									<input
										onChange={(e) => setForm({ ...form, name: e.target.value })}
										id="name"
										value={form.name}
										required
										name="name"
										type="text"
										autoComplete="name"
										placeholder="Name"
										className="block w-full rounded-md border-0 bg-secondary placeholder:text-secondary-foreground/50 px-3 py-2 text-secondary-foreground shadow-sm ring-1 ring-inset ring-ring/10 focus:ring-2 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
									/>
								</div>
								<div>
									<label htmlFor="email" className="sr-only">
										Email
									</label>
									<input
										onChange={(e) =>
											setForm({ ...form, email: e.target.value })
										}
										value={form.email}
										id="email"
										name="email"
										required
										type="email"
										autoComplete="email"
										placeholder="Email"
										className="block w-full rounded-md border-0 bg-secondary placeholder:text-secondary-foreground/50 px-3 py-2 text-secondary-foreground shadow-sm ring-1 ring-inset ring-ring/10 focus:ring-2 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
									/>
								</div>
								<div>
									<label htmlFor="message" className="sr-only">
										Message
									</label>
									<textarea
										onChange={(e) =>
											setForm({ ...form, message: e.target.value })
										}
										value={form.message}
										id="message"
										required
										name="message"
										rows={5}
										style={{ resize: "none" }}
										placeholder="Message"
										className="block w-full rounded-md border-0 bg-secondary placeholder:text-secondary-foreground/50 px-3 py-2 text-secondary-foreground shadow-sm ring-1 ring-inset ring-ring/10 focus:ring-2 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</form>
					</div>

					<DialogFooter>
						<Button
							variant={"outline"}
							id="submit-button"
							disabled={
								form.name === "" || form.email === "" || form.message === ""
							}
							onClick={() => {
								// handleSubmit();
								formRef.current?.requestSubmit();
							}}
							className="btn-primary"
						>
							Send
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};
