<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Icon } from '#components'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { loginSchema } from '../schema'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const form = useForm({
  validationSchema: loginSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.warn('Form submitted!', values)
})
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card>
      <CardHeader class="text-center">
        <CardTitle class="text-xl">
          Welcome back
        </CardTitle>
        <CardDescription>
          Login with your Apple or Google account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit">
          <div class="grid gap-6">
            <div class="flex flex-col gap-4">
              <Button variant="outline" class="w-full">
                <Icon name="lucide:apple" class="h-4 w-4 mr-2" />
                Login with Apple
              </Button>
              <Button variant="outline" class="w-full">
                <Icon name="logos:google-icon" class="h-4 w-4 mr-2" />
                Login with Google
              </Button>
            </div>
            <div class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span class="bg-card text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
            <div class="grid gap-6">
              <FormField v-slot="{ componentField }" name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="m@example.com" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" v-bind="componentField" placeholder="••••••" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <Button type="submit" class="w-full">
                Login
              </Button>
            </div>
            <div class="text-center text-sm">
              Don't have an account?
              <a href="#" class="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    <div class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
      By clicking continue, you agree to our <a href="#">Terms of Service</a>
      and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
