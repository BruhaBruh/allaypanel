'use client';

import { Container } from '@/client/components/layout';
import { Button, Typography } from '@/client/components/ui';
import { Book, Ellipsis, Plus } from 'lucide-react';
import React from 'react';

export const IndexPage: React.FC = () => {
  return (
    <Container inner={{ className: 'flex flex-col gap-8' }}>
      <section className="flex items-center justify-between">
        <section>
          <Typography variant="h2">Projects</Typography>
          <Typography variant="large" className="text-muted-foreground">
            Manage your deployments
          </Typography>
        </section>
        <Button>
          <Plus className="h-4 w-4" />
          Create Project
        </Button>
      </section>
      <section className="flex items-stretch">
        <button
          type="button"
          className="flex items-center justify-center px-16 py-2 border-b"
        >
          <Typography variant="small">Projects</Typography>
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-16 py-2 text-muted-foreground transition-colors hover:text-current"
        >
          <Typography variant="small">Monitoring</Typography>
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-16 py-2 text-muted-foreground transition-colors hover:text-current"
        >
          <Typography variant="small">Settings</Typography>
        </button>
      </section>
      <section className="grid grid-cols-3 gap-8">
        <button
          type="button"
          className="border rounded-xl py-4 px-6 flex flex-col gap-8 transition-colors bg-card text-card-foreground hover:bg-accent/25"
        >
          <div className="flex items-center justify-between w-full">
            <div className="min-w-1 flex-1">
              <Typography variant="large" className="text-left">
                <Book className="h-4 w-4 inline-block align-baseline relative top-[1px] text-muted-foreground mr-2" />
                Envie
              </Typography>
              <Typography variant="muted" className="text-left">
                The Minecraft Project SMP/RPG
              </Typography>
            </div>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted">Created 21 days ago</Typography>
            <Typography variant="muted" className="text-current">
              0 services
            </Typography>
          </div>
        </button>
        <button
          type="button"
          className="border rounded-xl py-4 px-6 flex flex-col gap-8 transition-colors bg-card text-card-foreground hover:bg-accent/25"
        >
          <div className="flex items-center justify-between w-full">
            <div className="min-w-1 flex-1">
              <Typography variant="large" className="text-left">
                <Book className="h-4 w-4 inline-block align-baseline relative top-[1px] text-muted-foreground mr-2" />
                Envie
              </Typography>
              <Typography variant="muted" className="text-left">
                The Minecraft Project SMP/RPG
              </Typography>
            </div>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted">Created 21 days ago</Typography>
            <Typography variant="muted" className="text-current">
              0 services
            </Typography>
          </div>
        </button>
        <button
          type="button"
          className="border rounded-xl py-4 px-6 flex flex-col gap-8 transition-colors bg-card text-card-foreground hover:bg-accent/25"
        >
          <div className="flex items-center justify-between w-full">
            <div className="min-w-1 flex-1">
              <Typography variant="large" className="text-left">
                <Book className="h-4 w-4 inline-block align-baseline relative top-[1px] text-muted-foreground mr-2" />
                Envie
              </Typography>
              <Typography variant="muted" className="text-left">
                The Minecraft Project SMP/RPG
              </Typography>
            </div>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted">Created 21 days ago</Typography>
            <Typography variant="muted" className="text-current">
              0 services
            </Typography>
          </div>
        </button>
        <button
          type="button"
          className="border rounded-xl py-4 px-6 flex flex-col gap-8 transition-colors bg-card text-card-foreground hover:bg-accent/25"
        >
          <div className="flex items-center justify-between w-full">
            <div className="min-w-1 flex-1">
              <Typography variant="large" className="text-left">
                <Book className="h-4 w-4 inline-block align-baseline relative top-[1px] text-muted-foreground mr-2" />
                Envie
              </Typography>
              <Typography variant="muted" className="text-left">
                The Minecraft Project SMP/RPG
              </Typography>
            </div>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted">Created 21 days ago</Typography>
            <Typography variant="muted" className="text-current">
              0 services
            </Typography>
          </div>
        </button>
        <button
          type="button"
          className="border rounded-xl py-4 px-6 flex flex-col gap-8 transition-colors bg-card text-card-foreground hover:bg-accent/25"
        >
          <div className="flex items-center justify-between w-full">
            <div className="min-w-1 flex-1">
              <Typography variant="large" className="text-left">
                <Book className="h-4 w-4 inline-block align-baseline relative top-[1px] text-muted-foreground mr-2" />
                Envie
              </Typography>
              <Typography variant="muted" className="text-left">
                The Minecraft Project SMP/RPG
              </Typography>
            </div>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted">Created 21 days ago</Typography>
            <Typography variant="muted" className="text-current">
              0 services
            </Typography>
          </div>
        </button>
        <button
          type="button"
          className="border rounded-xl py-4 px-6 flex flex-col gap-8 transition-colors bg-card text-card-foreground hover:bg-accent/25"
        >
          <div className="flex items-center justify-between w-full">
            <div className="min-w-1 flex-1">
              <Typography variant="large" className="text-left">
                <Book className="h-4 w-4 inline-block align-baseline relative top-[1px] text-muted-foreground mr-2" />
                Envie
              </Typography>
              <Typography variant="muted" className="text-left">
                The Minecraft Project SMP/RPG
              </Typography>
            </div>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted">Created 21 days ago</Typography>
            <Typography variant="muted" className="text-current">
              0 services
            </Typography>
          </div>
        </button>
      </section>
    </Container>
  );
};
