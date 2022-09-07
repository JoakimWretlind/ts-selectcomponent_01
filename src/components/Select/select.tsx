import { SelectSection, Span, OptionsSection, SelectContainer, OptionTarget, P } from "./style"
import { Option } from '../../interfaces'
import { useState } from "react"

interface Selectprops {
    placeholder?: string;
    options: Option[];
    selected: Option | null;
    onChange: (selection: Option) => void;
}

export const Select: React.FC<Selectprops> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false)

    return (
        <SelectContainer>
            <SelectSection onClick={() => setShowOptions(!showOptions)}>
                <Span>{selected ? selected.label : placeholder}</Span>
                <Span>v</Span>
            </SelectSection>
            {showOptions && (
                <OptionsSection>
                    {options.map(option => {
                        const { value, label } = option
                        return (
                            <OptionTarget
                                key={value}
                                onClick={() => {
                                    onChange(option)
                                    setShowOptions(false)
                                }}
                            >
                                <Span>{label}</Span>
                            </OptionTarget>
                        )
                    })}
                </OptionsSection>
            )}
        </SelectContainer>
    )
}
