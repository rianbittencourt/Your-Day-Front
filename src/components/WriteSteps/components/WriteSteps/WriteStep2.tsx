"use client";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import HoverText from "@/components/HoverCard/HoverText";
import { PiInfoDuotone } from "react-icons/pi";

const formSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Por favor, preencha este campo." })
    .min(3, {
      message: "Mínimo de 3 caracters.",
    })
    .max(20, {
      message: "Máximo de 20 caracteres.",
    }),

  content: z
    .string()
    .nonempty({ message: "Por favor, preencha este campo." })
    .min(20, {
      message: "Mínimo de 20 caracters.",
    })
    .max(500, {
      message: "Máximo de 500 caracteres.",
    }),
  private: z.boolean(),
});

export default function WriteStep2({ onSubmit }) {
  //Definir o formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      private: false,
    },
  });

  function onSend(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    onSubmit(values);
  }

  return (
    <div className="flex flex-col items-center  sm:max-w-2xl w-full  ">
      <h1 className="text-2xl mb-5">Escreva Sobre o Seu Dia !</h1>
      <div className="flex flex-col w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSend)}
            className="flex gap-2 sm:gap-10 flex-col"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Escreva o Titulo do seu Dia"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu dia</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva seu dia"
                      className="resize-none"
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="items-top flex space-x-2">
              <Checkbox
                id="private"
                checked={form.watch("private")}
                onCheckedChange={(value) => {
                  form.setValue("private", value);
                }}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="private"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex"
                >
                  Privado
                  <div className="ml-2">
                    <HoverText text={"Privado"} icon={<PiInfoDuotone />} />
                  </div>
                </label>
                <p className="text-sm text-muted-foreground">
                  Com essa opção você privará seu dia e outros usuários não
                  poderão visualizar.
                </p>
              </div>
            </div>
            <Button
              variant={"default"}
              type="submit"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              Cadastrar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
