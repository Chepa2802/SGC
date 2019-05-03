son.Schema.JsonSchema.Default">
            <summary>
            Gets or sets the default value.
            </summary>
            <value>The default value.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Extends">
            <summary>
            Gets or sets the extend <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/>.
            </summary>
            <value>The extended <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Format">
            <summary>
            Gets or sets the format.
            </summary>
            <value>The format.</value>
        </member>
        <member name="T:Newtonsoft.Json.Schema.JsonSchemaGenerator">
            <summary>
            Generates a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from a specified <see cref="T:System.Type"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaGenerator.Generate(System.Type)">
            <summary>
            Generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from the specified type.
            </summary>
            <param name="type">The type to generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> generated from the specified type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaGenerator.Generate(System.Type,Newtonsoft.Json.Schema.JsonSchemaResolver)">
            <summary>
            Generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from the specified type.
            </summary>
            <param name="type">The type to generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from.</param>
            <param name="resolver">The <see cref="T:Newtonsoft.Json.Schema.JsonSchemaResolver"/> used to resolve schema references.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> generated from the specified type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaGenerator.Generate(System.Type,System.Boolean)">
            <summary>
            Generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from the specified type.
            </summary>
            <param name="type">The type to generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from.</param>
            <param name="rootSchemaNullable">Specify whether the generated root <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> will be nullable.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> generated from the specified type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaGenerator.Generate(System.Type,Newtonsoft.Json.Schema.JsonSchemaResolver,System.Boolean)">
            <summary>
            Generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from the specified type.
            </summary>
            <param name="type">The type to generate a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from.</param>
            <param name="resolver">The <see cref="T:Newtonsoft.Json.Schema.JsonSchemaResolver"/> used to resolve schema references.</param>
            <param name="rootSchemaNullable">Specify whether the generated root <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> will be nullable.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> generated from the specified type.</returns>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchemaGenerator.UndefinedSchemaIdHandling">
            <summary>
            Gets or sets how undefined schemas are handled by the serializer.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchemaGenerator.ContractResolver">
            <summary>
            Gets or sets the contract resolver.
            </summary>
            <value>The contract resolver.</value>
        </member>
        <member name="T:Newtonsoft.Json.Schema.JsonSchemaResolver">
            <summary>
            Resolves <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from an id.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaResolver.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Schema.JsonSchemaResolver"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaResolver.GetSchema(System.String)">
            <summary>
            Gets a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> for the specified id.
            </summary>
            <param name="id">The id.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> for the specified id.</returns>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchemaResolver.LoadedSchemas">
            <summary>
            Gets or sets the loaded schemas.
            </summary>
            <value>The loaded schemas.</value>
        </member>
        <member name="T:Newtonsoft.Json.Schema.JsonSchemaType">
            <summary>
            The value types allowed by the <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.None">
            <summary>
            No type specified.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.String">
            <summary>
            String type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Float">
            <summary>
            Float type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Integer">
            <summary>
            Integer type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Boolean">
            <summary>
            Boolean type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Object">
            <summary>
            Object type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Array">
            <summary>
            Array type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Null">
            <summary>
            Null type.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.JsonSchemaType.Any">
            <summary>
            Any type.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.WriteState">
            <summary>
            Specifies the state of the <see cref="T:Newtonsoft.Json.JsonWriter"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Error">
            <summary>
            An exception has been thrown, which has left the <see cref="T:Newtonsoft.Json.JsonWriter"/> in an invalid state.
            You may call the <see cref="M:Newtonsoft.Json.JsonWriter.Close"/> method to put the <see cref="T:Newtonsoft.Json.JsonWriter"/> in the <c>Closed</c> state.
            Any other <see cref="T:Newtonsoft.Json.JsonWriter"/> method calls results in an <see cref="T:System.InvalidOperationException"/> being thrown. 
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Closed">
            <summary>
            The <see cref="M:Newtonsoft.Json.JsonWriter.Close"/> method has been called. 
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Object">
            <summary>
            An object is being written. 
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Array">
            <summary>
            A array is being written.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Constructor">
            <summary>
            A constructor is being written.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Property">
            <summary>
            A property is being written.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.WriteState.Start">
            <summary>
            A write method has not been called.
            </summary>
        </member>
    </members>
</doc>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          MZê       ˇˇ  ∏       @                                   Ä   ∫ ¥	Õ!∏