# TypeScript Exercises Repository

This repository contains my solutions and exercises completed as part of **SoftUni's TypeScript module**. It serves as a comprehensive learning journey through TypeScript concepts, from basic type annotations to advanced features like generics and decorators.

## 📚 Course Structure

The repository is organized into progressive modules that build upon each other:

### 1. Introduction to TypeScript
- **Basic Types**: String, number, boolean, arrays, tuples
- **Enums**: Working with Days of the Week, Directions
- **Functions**: Optional parameters, return types, void
- **Type Assertions**: `as` keyword and angle bracket syntax
- **Type Guards**: `typeof` checks and predicate functions

**Key Files:**
- `01 Introduction/demotypes.ts` - Core type examples
- `02 Introduction Ex/` - Practice exercises (evenSum, dayOfTheWeek, formatPerson, etc.)

### 2. Advanced Data Types
- **Union Types**: Multiple possible types for variables
- **Intersection Types**: Combining object types
- **Literal Types**: Restricting values to specific literals
- **Type Aliases**: Creating reusable custom types
- **Mapped Types**: Transforming types programmatically
- **Conditional Types**: Type logic with extends

**Key Files:**
- `03 Advanced data types/demo.ts` - Advanced type concepts
- `04 Advanced data types Ex/` - Complex type exercises

### 3. Object-Oriented Programming
- **Classes**: Properties, methods, constructors
- **Access Modifiers**: public, private, protected
- **Inheritance**: extends keyword, method overriding
- **Abstract Classes**: Base classes that cannot be instantiated
- **Static Members**: Class-level properties and methods
- **Getters/Setters**: Property accessors with validation

**Key Files:**
- `05 TypeScript OOP/demo.ts` - OOP concepts demonstration
- `06 TypeScript OOP EX/` - OOP practice exercises

### 4. Generics
- **Generic Functions**: Type-safe reusable functions
- **Generic Classes**: Flexible class definitions
- **Generic Interfaces**: Reusable interface patterns
- **Type Constraints**: Limiting generic types with `extends`
- **Conditional Types**: Advanced type logic
- **Mapped Types**: Type transformations

**Key Files:**
- `07 Mastering Generics/demo.ts` - Generic concepts
- `08 Mastering Generics EX/` - Generic practice exercises

### 5. Decorators
- **Class Decorators**: Modifying class behavior
- **Method Decorators**: Enhancing method functionality
- **Property Decorators**: Property validation and modification
- **Parameter Decorators**: Parameter-level annotations
- **Factory Decorators**: Configurable decorators

**Key Files:**
- `09 TS Decorators/demo.ts` - Decorator examples
- `10 TS Decorators Ex/` - Decorator practice exercises

### 6. Real-World Projects

#### Basic Web Project
A TypeScript-based web application demonstrating:
- **Routing System**: Client-side navigation
- **API Services**: Generic service classes for HTTP operations
- **Decorators**: Logging and performance monitoring
- **Type Safety**: Interfaces for Posts and Users

**Features:**
- Posts management (view, create)
- Users listing
- Type-safe API interactions
- Decorator-enhanced logging

## 🎯 Key Learning Outcomes

### Type System Mastery
- **Type Annotations**: Explicit type declarations
- **Type Inference**: Letting TypeScript deduce types
- **Union & Intersection Types**: Flexible type combinations
- **Generic Programming**: Reusable, type-safe code

### Object-Oriented Design
- **Encapsulation**: Private/protected access control
- **Inheritance**: Code reuse through class hierarchies
- **Polymorphism**: Method overriding and interface implementation
- **Abstraction**: Abstract classes and interfaces

### Advanced Features
- **Decorators**: Metaprogramming and aspect-oriented programming
- **Mapped Types**: Dynamic type transformations
- **Conditional Types**: Type-level logic and computation
- **Module System**: Code organization and dependency management

## 🛠️ Exercise Categories

### Basic Exercises
- **Type Fundamentals**: Basic type usage and validation
- **Function Design**: Parameter types and return values
- **Array Manipulation**: Typed array operations

### Intermediate Exercises
- **Class Design**: Building robust class hierarchies
- **Interface Implementation**: Contract-based programming
- **Generic Programming**: Flexible, reusable components

### Advanced Exercises
- **Decorator Implementation**: Custom behavior modification
- **Complex Type Logic**: Advanced type system features
- **System Design**: Large-scale application architecture

## 📁 Project Structure

```
├── 01 Introduction/              # Basic TypeScript concepts
├── 02 Introduction Ex/           # Basic exercises
├── 03 Advanced data types/       # Advanced type system
├── 04 Advanced data types Ex/    # Type system exercises
├── 05 TypeScript OOP/            # Object-oriented programming
├── 06 TypeScript OOP EX/         # OOP exercises
├── 07 Mastering Generics/        # Generic programming
├── 08 Mastering Generics EX/     # Generic exercises
├── 09 TS Decorators/             # Decorator patterns
├── 10 TS Decorators Ex/          # Decorator exercises
├── Basic Web project/            # Real-world web application
├── Exam Prep/                    # Exam preparation materials
├── ExamRegularSkeleton/          # Exam practice project
└── Side code/                    # Additional practice exercises
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd typescript-exercises
   ```

2. **Install TypeScript (if not already installed)**
   ```bash
   npm install -g typescript
   ```

3. **Compile and run examples**
   ```bash
   # Compile a specific file
   tsc path/to/file.ts
   
   # Run the compiled JavaScript
   node path/to/file.js
   ```

4. **For the web project**
   ```bash
   cd "Basic Web project"
   npm install
   npm run dev
   ```

## 🎓 Course Information

**Institution**: SoftUni (Software University)  
**Course**: TypeScript Module  
**Level**: Intermediate to Advanced  
**Focus**: Modern TypeScript development practices

## 📝 Notes

- All exercises include practical examples and real-world scenarios
- Code follows TypeScript best practices and modern conventions
- Examples progress from basic concepts to advanced architectural patterns
- Projects demonstrate full-stack TypeScript development

## 🤝 Educational Purpose

This repository is intended for:
- **Learning Reference**: Reviewing TypeScript concepts and patterns
- **Practice Material**: Hands-on exercises for skill development
- **Portfolio Showcase**: Demonstrating TypeScript proficiency
- **Knowledge Sharing**: Helping others learn TypeScript

---

*This repository represents my learning journey through TypeScript development. Each exercise and project builds upon previous concepts, creating a comprehensive understanding of modern TypeScript development practices.*
