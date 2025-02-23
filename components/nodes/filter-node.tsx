'use client';
import React, { memo } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Handle, Position } from '@xyflow/react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

const filters = [
    {
        value: 'highpass',
        label: 'High Pass',
    },
    {
        value: 'lowpass',
        label: 'Low Pass',
    },
    {
        value: 'bandpass',
        label: 'Band Pass',
    },
];

export default function FilterNode() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    return (
        <div className="bg-white border border-black p-1 w-full rounded-sm">
            <Handle type="target" position={Position.Top} />
            <div className="flex-row">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className=" justify-between text-[6px] px-2 py-1 size-2/3"
                        >
                            {value
                                ? filters.find(
                                      (filter) => filter.value === value
                                  )?.label
                                : 'Select filter type...'}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0 ">
                        <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {filters.map((filter) => (
                                        <CommandItem
                                            key={filter.value}
                                            value={filter.value}
                                            onSelect={(currentValue) => {
                                                setValue(
                                                    currentValue === value
                                                        ? ''
                                                        : currentValue
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            {filter.label}
                                            <Check
                                                className={cn(
                                                    'ml-auto',
                                                    value === filter.value
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <Button className="w-1/3 text-[8px] bg-blue-400 h-5">
                    Low Pass
                </Button>
            </div>

            <form>
                <Slider.Root
                    className="relative flex h-5 w-[100px] touch-none select-none items-center"
                    defaultValue={[50]}
                    max={100}
                    step={1}
                >
                    <Slider.Track className="relative h-[3px] grow rounded-full bg-blue-300">
                        <Slider.Range className="absolute h-full rounded-full bg-blue-600" />
                    </Slider.Track>
                    <Slider.Thumb
                        className="block size-2 rounded-[10px] bg-white shadow-[0_2px_10px] focus:shadow-[0_0_0_1px] focus:shadow-blackA5 focus:outline-none"
                        aria-label="Volume"
                    />
                </Slider.Root>
            </form>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}
