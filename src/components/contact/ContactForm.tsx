import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export default function ContactForm() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-x-0 top-0 hidden h-72 bg-blue-100/50 blur-3xl lg:block" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                    <div data-aos="fade-right" className="space-y-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Get in touch</p>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Tell us about your project and we’ll follow up with a custom plan.
                        </h2>
                        <p className="text-base text-slate-600 sm:text-lg">
                            Use the form or reach us directly by phone or LinkedIn. We’re happy to review your goals and
                            recommend the best solution.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <Card className="border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <p className="text-sm text-slate-500">Availability</p>
                                <p className="mt-3 text-xl font-semibold text-slate-900">Sun - Thu</p>
                                <p className="text-slate-600">09:00 — 19:00 Cairo time</p>
                            </Card>
                            <Card className="border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                <p className="text-sm text-slate-500">Location</p>
                                <p className="mt-3 text-xl font-semibold text-slate-900">Cairo, Egypt</p>
                                <p className="text-slate-600">Remote and on-site collaboration available.</p>
                            </Card>
                        </div>
                    </div>

                    <Card data-aos="fade-left" className="rounded-[2rem] border border-slate-200 bg-slate-900/95 p-8 text-white shadow-2xl backdrop-blur-xl">
                        <form className="space-y-6">
                            <div>
                                <Label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">
                                    Your name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="rounded-3xl border-slate-700 bg-slate-950/80 px-5 py-4 text-base text-white placeholder:text-slate-400 focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="rounded-3xl border-slate-700 bg-slate-950/80 px-5 py-4 text-base text-white placeholder:text-slate-400 focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <Label htmlFor="project-type" className="mb-2 block text-sm font-semibold text-slate-200">
                                    Project type
                                </Label>
                                <Select defaultValue="web-application">
                                    <SelectTrigger id="project-type" className="w-full rounded-3xl border-slate-700 bg-slate-950/80 px-5 py-4 text-base text-white placeholder:text-slate-400 focus:border-cyan-400">
                                        <SelectValue placeholder="Select a project type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="web-application">Web application</SelectItem>
                                        <SelectItem value="mobile-app">Mobile app</SelectItem>
                                        <SelectItem value="ai-automation">AI / automation</SelectItem>
                                        <SelectItem value="pos-system">POS system</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">
                                    Brief message
                                </Label>
                                <Textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Tell us what you want to build..."
                                    className="rounded-3xl border-slate-700 bg-slate-950/80 px-5 py-4 text-base text-white placeholder:text-slate-400 focus:border-cyan-400"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-400/20 hover:bg-cyan-300">
                                Submit request
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}
