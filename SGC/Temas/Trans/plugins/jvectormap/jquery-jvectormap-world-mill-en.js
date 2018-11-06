ee cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified key.
            </summary>
            <value>The <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified key.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JArray.Item(System.Int32)">
            <summary>
            Gets or sets the <see cref="T:Newtonsoft.Json.Linq.JToken"/> at the specified index.
            </summary>
            <value></value>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JConstructor">
            <summary>
            Represents a JSON constructor.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.#ctor(Newtonsoft.Json.Linq.JConstructor)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> class from another <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> object.
            </summary>
            <param name="other">A <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> object to copy from.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.#ctor(System.String,System.Object[])">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> class with the specified name and content.
            </summary>
            <param name="name">The constructor name.</param>
            <param name="content">The contents of the constructor.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.#ctor(System.String,System.Object)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> class with the specified name and content.
            </summary>
            <param name="name">The constructor name.</param>
            <param name="content">The contents of the constructor.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.#ctor(System.String)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> class with the specified name.
            </summary>
            <param name="name">The constructor name.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.WriteTo(Newtonsoft.Json.JsonWriter,Newtonsoft.Json.JsonConverter[])">
            <summary>
            Writes this token to a <see cref="T:Newtonsoft.Json.JsonWriter"/>.
            </summary>
            <param name="writer">A <see cref="T:Newtonsoft.Json.JsonWriter"/> into which this method will write.</param>
            <param name="converters">A collection of <see cref="T:Newtonsoft.Json.JsonConverter"/> which will be used when writing the token.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JConstructor.Load(Newtonsoft.Json.JsonReader)">
            <summary>
            Loads an <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> from a <see cref="T:Newtonsoft.Json.JsonReader"/>. 
            </summary>
            <param name="reader">A <see cref="T:Newtonsoft.Json.JsonReader"/> that will be read for the content of the <see cref="T:Newtonsoft.Json.Linq.JConstructor"/>.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JConstructor"/> that contains the JSON that was read from the specified <see cref="T:Newtonsoft.Json.JsonReader"/>.</returns>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JConstructor.ChildrenTokens">
            <summary>
            Gets the container's children tokens.
            </summary>
            <value>The container's children tokens.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JConstructor.Name">
            <summary>
            Gets or sets the name of this constructor.
            </summary>
            <value>The constructor name.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JConstructor.Type">
            <summary>
            Gets the node type for this <see cref="T:Newtonsoft.Json.Linq.JToken"/>.
            </summary>
            <value>The type.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JConstructor.Item(System.Object)">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified key.
            </summary>
            <value>The <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified key.</value>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JEnumerable`1">
            <summary>
            Represents a collection of <see cref="T:Newtonsoft.Json.Linq.JToken"/> objects.
            </summary>
            <typeparam name="T">The type of token</typeparam>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JEnumerable`1.Empty">
            <summary>
            An empty collection of <see cref="T:Newtonsoft.Json.Linq.JToken"/> objects.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JEnumerable`1.#ctor(System.Collections.Generic.IEnumerable{`0})">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JEnumerable`1"/> struct.
            </summary>
            <param name="enumerable">The enumerable.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JEnumerable`1.GetEnumerator">
            <summary>
            Returns an enumerator that iterates through the collection.
            </summary>
            <returns>
            A <see cref="T:System.Collections.Generic.IEnumerator`1"/> that can be used to iterate through the collection.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JEnumerable`1.System#Collections#IEnumerable#GetEnumerator">
            <summary>
            Returns an enumerator that iterates through a collection.
            </summary>
            <returns>
            An <see cref="T:System.Collections.IEnumerator"/> object that can be used to iterate through the collection.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JEnumerable`1.Equals(System.Object)">
            <summary>
            Determines whether the specified <see cref="T:System.Object"/> is equal to this instance.
            </summary>
            <param name="obj">The <see cref="T:System.Object"/> to compare with this instance.</param>
            <returns>
            	<c>true</c> if the specified <see cref="T:System.Object"/> is equal to this instance; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JEnumerable`1.GetHashCode">
            <summary>
            Returns a hash code for this instance.
            </summary>
            <returns>
            A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table. 
            </returns>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JEnumerable`1.Item(System.Object)">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Linq.IJEnumerable`1"/> with the specified key.
            </summary>
            <value></value>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JObject">
            <summary>
            Represents a JSON object.
            </summary>
            <example>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\LinqToJsonTests.cs" region="LinqToJsonCreateParse" title="Parsing a JSON Object from Text" />
            </example>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JObject"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.#ctor(Newtonsoft.Json.Linq.JObject)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JObject"/> class from another <see cref="T:Newtonsoft.Json.Linq.JObject"/> object.
            </summary>
            <param name="other">A <see cref="T:Newtonsoft.Json.Linq.JObject"/> object to copy from.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.#ctor(System.Object[])">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JObject"/> class with the specified content.
            </summary>
            <param name="content">The contents of the object.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.#ctor(System.Object)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JObject"/> class with the specified content.
            </summary>
            <param name="content">The contents of the object.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.Properties">
            <summary>
            Gets an <see cref="T:System.Collections.Generic.IEnumerable`1"/> of this object's properties.
            </summary>
            <returns>An <see cref="T:System.Collections.Generic.IEnumerable`1"/> of this object's properties.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.Property(System.String)">
            <summary>
            Gets a <see cref="T:Newtonsoft.Json.Linq.JProperty"/> the specified name.
            </summary>
            <param name="name">The property name.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JProperty"/> with the specified name or null.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.PropertyValues">
            <summary>
            Gets an <see cref="T:Newtonsoft.Json.Linq.JEnumerable`1"/> of this object's property values.
            </summary>
            <returns>An <see cref="T:Newtonsoft.Json.Linq.JEnumerable`1"/> of this object's property values.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.Load(Newtonsoft.Json.JsonReader)">
            <summary>
            Loads an <see cref="T:Newtonsoft.Json.Linq.JObject"/> from a <see cref="T:Newtonsoft.Json.JsonReader"/>. 
            </summary>
            <param name="reader">A <see cref="T:Newtonsoft.Json.JsonReader"/> that will be read for the content of the <see cref="T:Newtonsoft.Json.Linq.JObject"/>.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JObject"/> that contains the JSON that was read from the specified <see cref="T:Newtonsoft.Json.JsonReader"/>.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.Parse(System.String)">
            <summary>
            Load a <see cref="T:Newtonsoft.Json.Linq.JObject"/> from a string that contains JSON.
            </summary>
            <param name="json">A <see cref="T:System.String"/> that contains JSON.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JObject"/> populated from the string that contains JSON.</returns>
            <example>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\LinqToJsonTests.cs" region="LinqToJsonCreateParse" title="Parsing a JSON Object from Text"/>
            </example>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.FromObject(System.Object)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Linq.JObject"/> from an object.
            </summary>
            <param name="o">The object that will be used to create <see cref="T:Newtonsoft.Json.Linq.JObject"/>.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JObject"/> with the values of the specified object</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.FromObject(System.Object,Newtonsoft.Json.JsonSerializer)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Linq.JArray"/> from an object.
            </summary>
            <param name="o">The object that will be used to create <see cref="T:Newtonsoft.Json.Linq.JArray"/>.</param>
            <param name="jsonSerializer">The <see cref="T:Newtonsoft.Json.JsonSerializer"/> that will be used to read the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JArray"/> with the values of the specified object</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.WriteTo(Newtonsoft.Json.JsonWriter,Newtonsoft.Json.JsonConverter[])">
            <summary>
            Writes this token to a <see cref="T:Newtonsoft.Json.JsonWriter"/>.
            </summary>
            <param name="writer">A <see cref="T:Newtonsoft.Json.JsonWriter"/> into which this method will write.</param>
            <param name="converters">A collection of <see cref="T:Newtonsoft.Json.JsonConverter"/> which will be used when writing the token.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.GetValue(System.String)">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified property name.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <value>The <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified property name.</value>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.GetValue(System.String,System.StringComparison)">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified property name.
            The exact property name will be searched for first and if no matching property is found then
            the <see cref="T:System.StringComparison"/> will be used to match a property.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <param name="comparison">One of the enumeration values that specifies how the strings will be compared.</param>
            <value>The <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified property name.</value>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.TryGetValue(System.String,System.StringComparison,Newtonsoft.Json.Linq.JToken@)">
            <summary>
            Tries to get the <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified property name.
            The exact property name will be searched for first and if no matching property is found then
            the <see cref="T:System.StringComparison"/> will be used to match a property.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <param name="value">The value.</param>
            <param name="comparison">One of the enumeration values that specifies how the strings will be compared.</param>
            <returns>true if a value was successfully retrieved; otherwise, false.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.Add(System.String,Newtonsoft.Json.Linq.JToken)">
            <summary>
            Adds the specified property name.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.Remove(System.String)">
            <summary>
            Removes the property with the specified name.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <returns>true if item was successfully removed; otherwise, false.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.TryGetValue(System.String,Newtonsoft.Json.Linq.JToken@)">
            <summary>
            Tries the get value.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <param name="value">The value.</param>
            <returns>true if a value was successfully retrieved; otherwise, false.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.GetEnumerator">
            <summary>
            Returns an enumerator that iterates through the collection.
            </summary>
            <returns>
            A <see cref="T:System.Collections.Generic.IEnumerator`1"/> that can be used to iterate through the collection.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.OnPropertyChanged(System.String)">
            <summary>
            Raises the <see cref="E:Newtonsoft.Json.Linq.JObject.PropertyChanged"/> event with the provided arguments.
            </summary>
            <param name="propertyName">Name of the property.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JObject.GetMetaObject(System.Linq.Expressions.Expression)">
            <summary>
            Returns the <see cref="T:System.Dynamic.DynamicMetaObject"/> responsible for binding operations performed on this object.
            </summary>
            <param name="parameter">The expression tree representation of the runtime value.</param>
            <returns>
            The <see cref="T:System.Dynamic.DynamicMetaObject"/> to bind this object.
            </returns>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JObject.ChildrenTokens">
            <summary>
            Gets the container's children tokens.
            </summary>
            <value>The container's children tokens.</value>
        </member>
        <member name="E:Newtonsoft.Json.Linq.JObject.PropertyChanged">
            <summary>
            Occurs when a property value changes.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JObject.Type">
            <summary>
            Gets the node type for this <see cref="T:Newtonsoft.Json.Linq.JToken"/>.
            </summary>
            <value>The type.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JObject.Item(System.Object)">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified key.
            </summary>
            <value>The <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified key.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JObject.Item(System.String)">
            <summary>
            Gets or sets the <see cref="T:Newtonsoft.Json.Linq.JToken"/> with the specified property name.
            </summary>
            <value></value>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JProperty">
            <summary>
            Represents a JSON property.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JProperty.#ctor(Newtonsoft.Json.Linq.JProperty)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JProperty"/> class from another <see cref="T:Newtonsoft.Json.Linq.JProperty"/> object.
            </summary>
            <param name="other">A <see cref="T:Newtonsoft.Json.Linq.JProperty"/> object to copy from.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JProperty.#ctor(System.String,System.Object[])">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JProperty"/> class.
            </summary>
            <param name="name">The property name.</param>
            <param name="content">The property content.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JProperty.#ctor(System.String,System.Object)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JProperty"/> class.
            </summary>
            <param name="name">The property name.</param>
            <param name="content">The property content.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JProperty.WriteTo(Newtonsoft.Json.JsonWriter,Newtonsoft.Json.JsonConverter[])">
            <summary>
            Writes this token to a <see cref="T:Newtonsoft.Json.JsonWriter"/>.
            </summary>
            <param name="writer">A <see cref="T:Newtonsoft.Json.JsonWriter"/> into which this method will write.</param>
            <param name="converters">A collection of <see cref="T:Newtonsoft.Json.JsonConverter"/> which will be used when writing the token.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JProperty.Load(Newtonsoft.Json.JsonReader)">
            <summary>
            Loads an <see cref="T:Newtonsoft.Json.Linq.JProperty"/> from a <see cref="T:Newtonsoft.Json.JsonReader"/>. 
            </summary>
            <param name="reader">A <see cref="T:Newtonsoft.Json.JsonReader"/> that will be read for the content of the <see cref="T:Newtonsoft.Json.Linq.JProperty"/>.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JProperty"/> that contains the JSON that was read from the specified <see cref="T:Newtonsoft.Json.JsonReader"/>.</returns>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JProperty.ChildrenTokens">
            <summary>
            Gets the container's children tokens.
            </summary>
            <value>The container's children tokens.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JProperty.Name">
            <summary>
            Gets the property name.
            </summary>
            <value>The property name.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JProperty.Value">
            <summary>
            Gets or sets the property value.
            </summary>
            <value>The property value.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JProperty.Type">
            <summary>
            Gets the node type for this <see cref="T:Newtonsoft.Json.Linq.JToken"/>.
            </summary>
            <value>The type.</value>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JRaw">
            <summary>
            Represents a raw JSON string.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JValue">
            <summary>
            Represents a value in JSON (string, integer, date, etc).
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(Newtonsoft.Json.Linq.JValue)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class from another <see cref="T:Newtonsoft.Json.Linq.JValue"/> object.
            </summary>
            <param name="other">A <see cref="T:Newtonsoft.Json.Linq.JValue"/> object to copy from.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Int64)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Char)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.UInt64)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Double)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Single)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.DateTime)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Boolean)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.String)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Guid)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Uri)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.TimeSpan)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.#ctor(System.Object)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JValue"/> class with the given value.
            </summary>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.CreateComment(System.String)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Linq.JValue"/> comment with the given value.
            </summary>
            <param name="value">The value.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JValue"/> comment with the given value.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.CreateString(System.String)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Linq.JValue"/> string with the given value.
            </summary>
            <param name="value">The value.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Linq.JValue"/> string with the given value.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.WriteTo(Newtonsoft.Json.JsonWriter,Newtonsoft.Json.JsonConverter[])">
            <summary>
            Writes this token to a <see cref="T:Newtonsoft.Json.JsonWriter"/>.
            </summary>
            <param name="writer">A <see cref="T:Newtonsoft.Json.JsonWriter"/> into which this method will write.</param>
            <param name="converters">A collection of <see cref="T:Newtonsoft.Json.JsonConverter"/> which will be used when writing the token.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.Equals(Newtonsoft.Json.Linq.JValue)">
            <summary>
            Indicates whether the current object is equal to another object of the same type.
            </summary>
            <returns>
            true if the current object is equal to the <paramref name="other"/> parameter; otherwise, false.
            </returns>
            <param name="other">An object to compare with this object.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.Equals(System.Object)">
            <summary>
            Determines whether the specified <see cref="T:System.Object"/> is equal to the current <see cref="T:System.Object"/>.
            </summary>
            <param name="obj">The <see cref="T:System.Object"/> to compare with the current <see cref="T:System.Object"/>.</param>
            <returns>
            true if the specified <see cref="T:System.Object"/> is equal to the current <see cref="T:System.Object"/>; otherwise, false.
            </returns>
            <exception cref="T:System.NullReferenceException">
            The <paramref name="obj"/> parameter is null.
            </exception>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.GetHashCode">
            <summary>
            Serves as a hash function for a particular type.
            </summary>
            <returns>
            A hash code for the current <see cref="T:System.Object"/>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.ToString">
            <summary>
            Returns a <see cref="T:System.String"/> that represents this instance.
            </summary>
            <returns>
            A <see cref="T:System.String"/> that represents this instance.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.ToString(System.String)">
            <summary>
            Returns a <see cref="T:System.String"/> that represents this instance.
            </summary>
            <param name="format">The format.</param>
            <returns>
            A <see cref="T:System.String"/> that represents this instance.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.ToString(System.IFormatProvider)">
            <summary>
            Returns a <see cref="T:System.String"/> that represents this instance.
            </summary>
            <param name="formatProvider">The format provider.</param>
            <returns>
            A <see cref="T:System.String"/> that represents this instance.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.ToString(System.String,System.IFormatProvider)">
            <summary>
            Returns a <see cref="T:System.String"/> that represents this instance.
            </summary>
            <param name="format">The format.</param>
            <param name="formatProvider">The format provider.</param>
            <returns>
            A <see cref="T:System.String"/> that represents this instance.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.GetMetaObject(System.Linq.Expressions.Expression)">
            <summary>
            Returns the <see cref="T:System.Dynamic.DynamicMetaObject"/> responsible for binding operations performed on this object.
            </summary>
            <param name="parameter">The expression tree representation of the runtime value.</param>
            <returns>
            The <see cref="T:System.Dynamic.DynamicMetaObject"/> to bind this object.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JValue.CompareTo(Newtonsoft.Json.Linq.JValue)">
            <summary>
            Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.
            </summary>
            <param name="obj">An object to compare with this instance.</param>
            <returns>
            A 32-bit signed integer that indicates the relative order of the objects being compared. The return value has these meanings:
            Value
            Meaning
            Less than zero
            This instance is less than <paramref name="obj"/>.
            Zero
            This instance is equal to <paramref name="obj"/>.
            Greater than zero
            This instance is greater than <paramref name="obj"/>.
            </returns>
            <exception cref="T:System.ArgumentException">
            	<paramref name="obj"/> is not the same type as this instance.
            </exception>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JValue.HasValues">
            <summary>
            Gets a value indicating whether this token has childen tokens.
            </summary>
            <value>
            	<c>true</c> if this token has child values; otherwise, <c>false</c>.
            </value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JValue.Type">
            <summary>
            Gets the node type for this <see cref="T:Newtonsoft.Json.Linq.JToken"/>.
            </summary>
            <value>The type.</value>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JValue.Value">
            <summary>
            Gets or sets the underlying token value.
            </summary>
            <value>The underlying token value.</value>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JRaw.#ctor(Newtonsoft.Json.Linq.JRaw)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JRaw"/> class from another <see cref="T:Newtonsoft.Json.Linq.JRaw"/> object.
            </summary>
            <param name="other">A <see cref="T:Newtonsoft.Json.Linq.JRaw"/> object to copy from.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JRaw.#ctor(System.Object)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JRaw"/> class.
            </summary>
            <param name="rawJson">The raw json.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JRaw.Create(Newtonsoft.Json.JsonReader)">
            <summary>
            Creates an instance of <see cref="T:Newtonsoft.Json.Linq.JRaw"/> with the content of the reader's current token.
            </summary>
            <param name="reader">The reader.</param>
            <returns>An instance of <see cref="T:Newtonsoft.Json.Linq.JRaw"/> with the content of the reader's current token.</returns>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JTokenEqualityComparer">
            <summary>
            Compares tokens to determine whether they are equal.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenEqualityComparer.Equals(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Linq.JToken)">
            <summary>
            Determines whether the specified objects are equal.
            </summary>
            <param name="x">The first object of type <see cref="T:Newtonsoft.Json.Linq.JToken"/> to compare.</param>
            <param name="y">The second object of type <see cref="T:Newtonsoft.Json.Linq.JToken"/> to compare.</param>
            <returns>
            true if the specified objects are equal; otherwise, false.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenEqualityComparer.GetHashCode(Newtonsoft.Json.Linq.JToken)">
            <summary>
            Returns a hash code for the specified object.
            </summary>
            <param name="obj">The <see cref="T:System.Object"/> for which a hash code is to be returned.</param>
            <returns>A hash code for the specified object.</returns>
            <exception cref="T:System.ArgumentNullException">The type of <paramref name="obj"/> is a reference type and <paramref name="obj"/> is null.</exception>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JTokenReader">
            <summary>
            Represents a reader that provides fast, non-cached, forward-only access to serialized Json data.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.#ctor(Newtonsoft.Json.Linq.JToken)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JTokenReader"/> class.
            </summary>
            <param name="token">The token to read from.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.ReadAsBytes">
            <summary>
            Reads the next JSON token from the stream as a <see cref="T:Byte[]"/>.
            </summary>
            <returns>
            A <see cref="T:Byte[]"/> or a null reference if the next JSON token is null. This method will return <c>null</c> at the end of an array.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.ReadAsDecimal">
            <summary>
            Reads the next JSON token from the stream as a <see cref="T:System.Nullable`1"/>.
            </summary>
            <returns>A <see cref="T:System.Nullable`1"/>. This method will return <c>null</c> at the end of an array.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.ReadAsInt32">
            <summary>
            Reads the next JSON token from the stream as a <see cref="T:System.Nullable`1"/>.
            </summary>
            <returns>A <see cref="T:System.Nullable`1"/>. This method will return <c>null</c> at the end of an array.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.ReadAsString">
            <summary>
            Reads the next JSON token from the stream as a <see cref="T:System.String"/>.
            </summary>
            <returns>A <see cref="T:System.String"/>. This method will return <c>null</c> at the end of an array.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.ReadAsDateTime">
            <summary>
            Reads the next JSON token from the stream as a <see cref="T:System.Nullable`1"/>.
            </summary>
            <returns>A <see cref="T:System.String"/>. This method will return <c>null</c> at the end of an array.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.ReadAsDateTimeOffset">
            <summary>
            Reads the next JSON token from the stream as a <see cref="T:System.Nullable`1"/>.
            </summary>
            <returns>A <see cref="T:System.Nullable`1"/>. This method will return <c>null</c> at the end of an array.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenReader.Read">
            <summary>
            Reads the next JSON token from the stream.
            </summary>
            <returns>
            true if the next token was read successfully; false if there are no more tokens to read.
            </returns>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JTokenType">
            <summary>
            Specifies the type of token.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.None">
            <summary>
            No token type has been set.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Object">
            <summary>
            A JSON object.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Array">
            <summary>
            A JSON array.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Constructor">
            <summary>
            A JSON constructor.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Property">
            <summary>
            A JSON object property.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Comment">
            <summary>
            A comment.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Integer">
            <summary>
            An integer value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Float">
            <summary>
            A float value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.String">
            <summary>
            A string value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Boolean">
            <summary>
            A boolean value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Null">
            <summary>
            A null value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Undefined">
            <summary>
            An undefined value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Date">
            <summary>
            A date value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Raw">
            <summary>
            A raw JSON value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Bytes">
            <summary>
            A collection of bytes value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Guid">
            <summary>
            A Guid value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.Uri">
            <summary>
            A Uri value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Linq.JTokenType.TimeSpan">
            <summary>
            A TimeSpan value.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Linq.JTokenWriter">
            <summary>
            Represents a writer that provides a fast, non-cached, forward-only way of generating Json data.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.#ctor(Newtonsoft.Json.Linq.JContainer)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JTokenWriter"/> class writing to the given <see cref="T:Newtonsoft.Json.Linq.JContainer"/>.
            </summary>
            <param name="container">The container being written to.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Linq.JTokenWriter"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.Flush">
            <summary>
            Flushes whatever is in the buffer to the underlying streams and also flushes the underlying stream.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.Close">
            <summary>
            Closes this stream and the underlying stream.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteStartObject">
            <summary>
            Writes the beginning of a Json object.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteStartArray">
            <summary>
            Writes the beginning of a Json array.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteStartConstructor(System.String)">
            <summary>
            Writes the start of a constructor with the given name.
            </summary>
            <param name="name">The name of the constructor.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteEnd(Newtonsoft.Json.JsonToken)">
            <summary>
            Writes the end.
            </summary>
            <param name="token">The token.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WritePropertyName(System.String)">
            <summary>
            Writes the property name of a name/value pair on a Json object.
            </summary>
            <param name="name">The name of the property.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteNull">
            <summary>
            Writes a null value.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteUndefined">
            <summary>
            Writes an undefined value.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteRaw(System.String)">
            <summary>
            Writes raw JSON.
            </summary>
            <param name="json">The raw JSON to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteComment(System.String)">
            <summary>
            Writes out a comment <code>/*...*/</code> containing the specified text.
            </summary>
            <param name="text">Text to place inside the comment.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.String)">
            <summary>
            Writes a <see cref="T:System.String"/> value.
            </summary>
            <param name="value">The <see cref="T:System.String"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Int32)">
            <summary>
            Writes a <see cref="T:System.Int32"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Int32"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.UInt32)">
            <summary>
            Writes a <see cref="T:System.UInt32"/> value.
            </summary>
            <param name="value">The <see cref="T:System.UInt32"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Int64)">
            <summary>
            Writes a <see cref="T:System.Int64"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Int64"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.UInt64)">
            <summary>
            Writes a <see cref="T:System.UInt64"/> value.
            </summary>
            <param name="value">The <see cref="T:System.UInt64"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Single)">
            <summary>
            Writes a <see cref="T:System.Single"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Single"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Double)">
            <summary>
            Writes a <see cref="T:System.Double"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Double"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Boolean)">
            <summary>
            Writes a <see cref="T:System.Boolean"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Boolean"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Int16)">
            <summary>
            Writes a <see cref="T:System.Int16"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Int16"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.UInt16)">
            <summary>
            Writes a <see cref="T:System.UInt16"/> value.
            </summary>
            <param name="value">The <see cref="T:System.UInt16"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Char)">
            <summary>
            Writes a <see cref="T:System.Char"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Char"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Byte)">
            <summary>
            Writes a <see cref="T:System.Byte"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Byte"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.SByte)">
            <summary>
            Writes a <see cref="T:System.SByte"/> value.
            </summary>
            <param name="value">The <see cref="T:System.SByte"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Decimal)">
            <summary>
            Writes a <see cref="T:System.Decimal"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Decimal"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.DateTime)">
            <summary>
            Writes a <see cref="T:System.DateTime"/> value.
            </summary>
            <param name="value">The <see cref="T:System.DateTime"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.DateTimeOffset)">
            <summary>
            Writes a <see cref="T:System.DateTimeOffset"/> value.
            </summary>
            <param name="value">The <see cref="T:System.DateTimeOffset"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Byte[])">
            <summary>
            Writes a <see cref="T:Byte[]"/> value.
            </summary>
            <param name="value">The <see cref="T:Byte[]"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.TimeSpan)">
            <summary>
            Writes a <see cref="T:System.TimeSpan"/> value.
            </summary>
            <param name="value">The <see cref="T:System.TimeSpan"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Guid)">
            <summary>
            Writes a <see cref="T:System.Guid"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Guid"/> value to write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Linq.JTokenWriter.WriteValue(System.Uri)">
            <summary>
            Writes a <see cref="T:System.Uri"/> value.
            </summary>
            <param name="value">The <see cref="T:System.Uri"/> value to write.</param>
        </member>
        <member name="P:Newtonsoft.Json.Linq.JTokenWriter.Token">
            <summary>
            Gets the token being writen.
            </summary>
            <value>The token being writen.</value>
        </member>
        <member name="T:Newtonsoft.Json.MemberSerialization">
            <summary>
            Specifies the member serialization options for the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.MemberSerialization.OptOut">
            <summary>
            All public members are serialized by default. Members can be excluded using <see cref="T:Newtonsoft.Json.JsonIgnoreAttribute"/> or <see cref="!:NonSerializedAttribute"/>.
            This is the default member serialization mode.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.MemberSerialization.OptIn">
            <summary>
            Only members must be marked with <see cref="T:Newtonsoft.Json.JsonPropertyAttribute"/> or <see cref="T:System.Runtime.Serialization.DataMemberAttribute"/> are serialized.
            This member serialization mode can also be set by marking the class with <see cref="T:System.Runtime.Serialization.DataContractAttribute"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.MemberSerialization.Fields">
            <summary>
            All public and private fields are serialized. Members can be excluded using <see cref="T:Newtonsoft.Json.JsonIgnoreAttribute"/> or <see cref="!:NonSerializedAttribute"/>.
            This member serialization mode can also be set by marking the class with <see cref="!:SerializableAttribute"/>
            and setting IgnoreSerializableAttribute on <see cref="T:Newtonsoft.Json.Serialization.DefaultContractResolver"/> to false.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.MissingMemberHandling">
            <summary>
            Specifies missing member handling options for the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.MissingMemberHandling.Ignore">
            <summary>
            Ignore a missing member and do not attempt to deserialize it.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.MissingMemberHandling.Error">
            <summary>
            Throw a <see cref="T:Newtonsoft.Json.JsonSerializationException"/> when a missing member is encountered during deserialization.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.NullValueHandling">
            <summary>
            Specifies null value handling options for the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
            <example>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\SerializationTests.cs" region="ReducingSerializedJsonSizeNullValueHandlingObject" title="NullValueHandling Class"/>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\SerializationTests.cs" region="ReducingSerializedJsonSizeNullValueHandlingExample" title="NullValueHandling Ignore Example"/>
            </example>
        </member>
        <member name="F:Newtonsoft.Json.NullValueHandling.Include">
            <summary>
            Include null values when serializing and deserializing objects.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.NullValueHandling.Ignore">
            <summary>
            Ignore null values when serializing and deserializing objects.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.ObjectCreationHandling">
            <summary>
            Specifies how object creation is handled by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.ObjectCreationHandling.Auto">
            <summary>
            Reuse existing objects, create new objects when needed.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.ObjectCreationHandling.Reuse">
            <summary>
            Only reuse existing objects.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.ObjectCreationHandling.Replace">
            <summary>
            Always create new objects.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.PreserveReferencesHandling">
            <summary>
            Specifies reference handling options for the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
            <example>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\SerializationTests.cs" region="PreservingObjectReferencesOn" title="Preserve Object References"/>       
            </example>
        </member>
        <member name="F:Newtonsoft.Json.PreserveReferencesHandling.None">
            <summary>
            Do not preserve references when serializing types.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.PreserveReferencesHandling.Objects">
            <summary>
            Preserve references when serializing into a JSON object structure.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.PreserveReferencesHandling.Arrays">
            <summary>
            Preserve references when serializing into a JSON array structure.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.PreserveReferencesHandling.All">
            <summary>
            Preserve references when serializing.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.ReferenceLoopHandling">
            <summary>
            Specifies reference loop handling options for the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.ReferenceLoopHandling.Error">
            <summary>
            Throw a <see cref="T:Newtonsoft.Json.JsonSerializationException"/> when a loop is encountered.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.ReferenceLoopHandling.Ignore">
            <summary>
            Ignore loop references and do not serialize.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.ReferenceLoopHandling.Serialize">
            <summary>
            Serialize loop references.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Required">
            <summary>
            Indicating whether a property is required.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Required.Default">
            <summary>
            The property is not required. The default state.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Required.AllowNull">
            <summary>
            The property must be defined in JSON but can be a null value.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Required.Always">
            <summary>
            The property must be defined in JSON and cannot be a null value.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.SerializationBinder">
            <summary>
            Allows users to control class loading and mandate what class to load.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.SerializationBinder.BindToType(System.String,System.String)">
            <summary>
            When overridden in a derived class, controls the binding of a serialized object to a type.
            </summary>
            <param name="assemblyName">Specifies the <see cref="T:System.Reflection.Assembly"/> name of the serialized object.</param>
            <param name="typeName">Specifies the <see cref="T:System.Type"/> name of the serialized object</param>
            <returns>The type of the object the formatter creates a new instance of.</returns>
        </member>
        <member name="M:Newtonsoft.Json.SerializationBinder.BindToName(System.Type,System.String@,System.String@)">
            <summary>
            When overridden in a derived class, controls the binding of a serialized object to a type.
            </summary>
            <param name="serializedType">The type of the object the formatter creates a new instance of.</param>
            <param name="assemblyName">Specifies the <see cref="T:System.Reflection.Assembly"/> name of the serialized object.</param>
            <param name="typeName">Specifies the <see cref="T:System.Type"/> name of the serialized object.</param>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver">
            <summary>
            Resolves member mappings for a type, camel casing property names.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.DefaultContractResolver">
            <summary>
            Used by <see cref="T:Newtonsoft.Json.JsonSerializer"/> to resolves a <see cref="T:Newtonsoft.Json.Serialization.JsonContract"/> for a given <see cref="T:System.Type"/>.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.IContractResolver">
            <summary>
            Used by <see cref="T:Newtonsoft.Json.JsonSerializer"/> to resolves a <see cref="T:Newtonsoft.Json.Serialization.JsonContract"/> for a given <see cref="T:System.Type"/>.
            </summary>
            <example>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\SerializationTests.cs" region="ReducingSerializedJsonSizeContractResolverObject" title="IContractResolver Class"/>
              <code lang="cs" source="..\Src\Newtonsoft.Json.Tests\Documentation\SerializationTests.cs" region="ReducingSerializedJsonSizeContractResolverExample" title="IContractResolver Example"/>
            </example>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IContractResolver.ResolveContract(System.Type)">
            <summary>
            Resolves the contract for a given type.
            </summary>
            <param name="type">The type to resolve a contract for.</param>
            <returns>The contract for a given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.DefaultContractResolver"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.#ctor(System.Boolean)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.DefaultContractResolver"/> class.
            </summary>
            <param name="shareCache">
            If set to <c>true</c> the <see cref="T:Newtonsoft.Json.Serialization.DefaultContractResolver"/> will use a cached shared with other resolvers of the same type.
            Sharing the cache will significantly performance because expensive reflection will only happen once but could cause unexpected
            behavior if different instances of the resolver are suppose to produce different results. When set to false it is highly
            recommended to reuse <see cref="T:Newtonsoft.Json.Serialization.DefaultContractResolver"/> instances with the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.ResolveContract(System.Type)">
            <summary>
            Resolves the contract for a given type.
            </summary>
            <param name="type">The type to resolve a contract for.</param>
            <returns>The contract for a given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.GetSerializableMembers(System.Type)">
            <summary>
            Gets the serializable members for the type.
            </summary>
            <param name="objectType">The type to get serializable members for.</param>
            <returns>The serializable members for the type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateObjectContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonObjectContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonObjectContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateConstructorParameters(System.Reflection.ConstructorInfo,Newtonsoft.Json.Serialization.JsonPropertyCollection)">
            <summary>
            Creates the constructor parameters.
            </summary>
            <param name="constructor">The constructor to create properties for.</param>
            <param name="memberProperties">The type's member properties.</param>
            <returns>Properties for the given <see cref="T:System.Reflection.ConstructorInfo"/>.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreatePropertyFromConstructorParameter(Newtonsoft.Json.Serialization.JsonProperty,System.Reflection.ParameterInfo)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> for the given <see cref="T:System.Reflection.ParameterInfo"/>.
            </summary>
            <param name="matchingMemberProperty">The matching member property.</param>
            <param name="parameterInfo">The constructor parameter.</param>
            <returns>A created <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> for the given <see cref="T:System.Reflection.ParameterInfo"/>.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.ResolveContractConverter(System.Type)">
            <summary>
            Resolves the default <see cref="T:Newtonsoft.Json.JsonConverter"/> for the contract.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>The contract's default <see cref="T:Newtonsoft.Json.JsonConverter"/>.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateDictionaryContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonDictionaryContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonDictionaryContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateArrayContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonArrayContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonArrayContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreatePrimitiveContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonPrimitiveContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonPrimitiveContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateLinqContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonLinqContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonLinqContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateDynamicContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonDynamicContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonDynamicContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateStringContract(System.Type)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonStringContract"/> for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonStringContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateContract(System.Type)">
            <summary>
            Determines which contract type is created for the given type.
            </summary>
            <param name="objectType">Type of the object.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Serialization.JsonContract"/> for the given type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateProperties(System.Type,Newtonsoft.Json.MemberSerialization)">
            <summary>
            Creates properties for the given <see cref="T:Newtonsoft.Json.Serialization.JsonContract"/>.
            </summary>
            <param name="type">The type to create properties for.</param>
            /// <param name="memberSerialization">The member serialization mode for the type.</param>
            <returns>Properties for the given <see cref="T:Newtonsoft.Json.Serialization.JsonContract"/>.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateMemberValueProvider(System.Reflection.MemberInfo)">
            <summary>
            Creates the <see cref="T:Newtonsoft.Json.Serialization.IValueProvider"/> used by the serializer to get and set values from a member.
            </summary>
            <param name="member">The member.</param>
            <returns>The <see cref="T:Newtonsoft.Json.Serialization.IValueProvider"/> used by the serializer to get and set values from a member.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.CreateProperty(System.Reflection.MemberInfo,Newtonsoft.Json.MemberSerialization)">
            <summary>
            Creates a <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> for the given <see cref="T:System.Reflection.MemberInfo"/>.
            </summary>
            <param name="memberSerialization">The member's parent <see cref="T:Newtonsoft.Json.MemberSerialization"/>.</param>
            <param name="member">The member to create a <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> for.</param>
            <returns>A created <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> for the given <see cref="T:System.Reflection.MemberInfo"/>.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.ResolvePropertyName(System.String)">
            <summary>
            Resolves the name of the property.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <returns>Name of the property.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultContractResolver.GetResolvedPropertyName(System.String)">
            <summary>
            Gets the resolved name of the property.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <returns>Name of the property.</returns>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.DefaultContractResolver.DynamicCodeGeneration">
            <summary>
            Gets a value indicating whether members are being get and set using dynamic code generation.
            This value is determined by the runtime permissions available.
            </summary>
            <value>
            	<c>true</c> if using dynamic code generation; otherwise, <c>false</c>.
            </value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.DefaultContractResolver.DefaultMembersSearchFlags">
            <summary>
            Gets or sets the default members search flags.
            </summary>
            <value>The default members search flags.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.DefaultContractResolver.SerializeCompilerGeneratedMembers">
            <summary>
            Gets or sets a value indicating whether compiler generated members should be serialized.
            </summary>
            <value>
            	<c>true</c> if serialized compiler generated members; otherwise, <c>false</c>.
            </value>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver.ResolvePropertyName(System.String)">
            <summary>
            Resolves the name of the property.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <returns>The property name camel cased.</returns>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.IReferenceResolver">
            <summary>
            Used to resolve references when serializing and deserializing JSON by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IReferenceResolver.ResolveReference(System.Object,System.String)">
            <summary>
            Resolves a reference to its object.
            </summary>
            <param name="context">The serialization context.</param>
            <param name="reference">The reference to resolve.</param>
            <returns>The object that</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IReferenceResolver.GetReference(System.Object,System.Object)">
            <summary>
            Gets the reference for the sepecified object.
            </summary>
            <param name="context">The serialization context.</param>
            <param name="value">The object to get a reference for.</param>
            <returns>The reference to the object.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IReferenceResolver.IsReferenced(System.Object,System.Object)">
            <summary>
            Determines whether the specified object is referenced.
            </summary>
            <param name="context">The serialization context.</param>
            <param name="value">The object to test for a reference.</param>
            <returns>
            	<c>true</c> if the specified object is referenced; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IReferenceResolver.AddReference(System.Object,System.String,System.Object)">
            <summary>
            Adds a reference to the specified object.
            </summary>
            <param name="context">The serialization context.</param>
            <param name="reference">The reference.</param>
            <param name="value">The object to reference.</param>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.DefaultSerializationBinder">
            <summary>
            The default serialization binder used when resolving and loading classes from type names.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultSerializationBinder.BindToType(System.String,System.String)">
            <summary>
            When overridden in a derived class, controls the binding of a serialized object to a type.
            </summary>
            <param name="assemblyName">Specifies the <see cref="T:System.Reflection.Assembly"/> name of the serialized object.</param>
            <param name="typeName">Specifies the <see cref="T:System.Type"/> name of the serialized object.</param>
            <returns>
            The type of the object the formatter creates a new instance of.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.DefaultSerializationBinder.BindToName(System.Type,System.String@,System.String@)">
            <summary>
            When overridden in a derived class, controls the binding of a serialized object to a type.
            </summary>
            <param name="serializedType">The type of the object the formatter creates a new instance of.</param>
            <param name="assemblyName">Specifies the <see cref="T:System.Reflection.Assembly"/> name of the serialized object. </param>
            <param name="typeName">Specifies the <see cref="T:System.Type"/> name of the serialized object. </param>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.ErrorContext">
            <summary>
            Provides information surrounding an error.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorContext.Error">
            <summary>
            Gets or sets the error.
            </summary>
            <value>The error.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorContext.OriginalObject">
            <summary>
            Gets the original object that caused the error.
            </summary>
            <value>The original object that caused the error.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorContext.Member">
            <summary>
            Gets the member that caused the error.
            </summary>
            <value>The member that caused the error.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorContext.Path">
            <summary>
            Gets the path of the JSON location where the error occurred.
            </summary>
            <value>The path of the JSON location where the error occurred.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorContext.Handled">
            <summary>
            Gets or sets a value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.ErrorContext"/> is handled.
            </summary>
            <value><c>true</c> if handled; otherwise, <c>false</c>.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.ErrorEventArgs">
            <summary>
            Provides data for the Error event.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.ErrorEventArgs.#ctor(System.Object,Newtonsoft.Json.Serialization.ErrorContext)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.ErrorEventArgs"/> class.
            </summary>
            <param name="currentObject">The current object.</param>
            <param name="errorContext">The error context.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorEventArgs.CurrentObject">
            <summary>
            Gets the current object the error event is being raised against.
            </summary>
            <value>The current object the error event is being raised against.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ErrorEventArgs.ErrorContext">
            <summary>
            Gets the error context.
            </summary>
            <value>The error context.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.ITraceWriter">
            <summary>
            Represents a trace writer.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.ITraceWriter.Trace(Newtonsoft.Json.TraceLevel,System.String,System.Exception)">
            <summary>
            Writes the specified trace level, message and optional exception.
            </summary>
            <param name="level">The <see cref="T:Newtonsoft.Json.TraceLevel"/> at which to write this trace.</param>
            <param name="message">The trace message.</param>
            <param name="ex">The trace exception. This parameter is optional.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.ITraceWriter.LevelFilter">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.TraceLevel"/> that will be used to filter the trace messages passed to the writer.
            For example a filter level of <code>Info</code> will exclude <code>Verbose</code> messages and include <code>Info</code>,
            <code>Warning</code> and <code>Error</code> messages.
            </summary>
            <value>The <see cref="T:Newtonsoft.Json.TraceLevel"/> that will be used to filter the trace messages passed to the writer.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.IValueProvider">
            <summary>
            Provides methods to get and set values.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IValueProvider.SetValue(System.Object,System.Object)">
            <summary>
            Sets the value.
            </summary>
            <param name="target">The target to set the value on.</param>
            <param name="value">The value to set on the target.</param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.IValueProvider.GetValue(System.Object)">
            <summary>
            Gets the value.
            </summary>
            <param name="target">The target to get the value from.</param>
            <returns>The value.</returns>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonArrayContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonContainerContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.UnderlyingType">
            <summary>
            Gets the underlying type for the contract.
            </summary>
            <value>The underlying type for the contract.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.CreatedType">
            <summary>
            Gets or sets the type created during deserialization.
            </summary>
            <value>The type created during deserialization.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.IsReference">
            <summary>
            Gets or sets whether this type contract is serialized as a reference.
            </summary>
            <value>Whether this type contract is serialized as a reference.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.Converter">
            <summary>
            Gets or sets the default <see cref="T:Newtonsoft.Json.JsonConverter"/> for this contract.
            </summary>
            <value>The converter.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.OnDeserialized">
            <summary>
            Gets or sets the method called immediately after deserialization of the object.
            </summary>
            <value>The method called immediately after deserialization of the object.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.OnDeserializing">
            <summary>
            Gets or sets the method called during deserialization of the object.
            </summary>
            <value>The method called during deserialization of the object.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.OnSerialized">
            <summary>
            Gets or sets the method called after serialization of the object graph.
            </summary>
            <value>The method called after serialization of the object graph.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.OnSerializing">
            <summary>
            Gets or sets the method called before serialization of the object.
            </summary>
            <value>The method called before serialization of the object.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.DefaultCreator">
            <summary>
            Gets or sets the default creator method used to create the object.
            </summary>
            <value>The default creator method used to create the object.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.DefaultCreatorNonPublic">
            <summary>
            Gets or sets a value indicating whether the default creator is non public.
            </summary>
            <value><c>true</c> if the default object creator is non-public; otherwise, <c>false</c>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContract.OnError">
            <summary>
            Gets or sets the method called when an error is thrown during the serialization of the object.
            </summary>
            <value>The method called when an error is thrown during the serialization of the object.</value>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonContainerContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonContainerContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContainerContract.ItemConverter">
            <summary>
            Gets or sets the default collection items <see cref="T:Newtonsoft.Json.JsonConverter"/>.
            </summary>
            <value>The converter.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContainerContract.ItemIsReference">
            <summary>
            Gets or sets a value indicating whether the collection items preserve object references.
            </summary>
            <value><c>true</c> if collection items preserve object references; otherwise, <c>false</c>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContainerContract.ItemReferenceLoopHandling">
            <summary>
            Gets or sets the collection item reference loop handling.
            </summary>
            <value>The reference loop handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonContainerContract.ItemTypeNameHandling">
            <summary>
            Gets or sets the collection item type name handling.
            </summary>
            <value>The type name handling.</value>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonArrayContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonArrayContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonArrayContract.CollectionItemType">
            <summary>
            Gets the <see cref="T:System.Type"/> of the collection items.
            </summary>
            <value>The <see cref="T:System.Type"/> of the collection items.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonArrayContract.IsMultidimensionalArray">
            <summary>
            Gets a value indicating whether the collection type is a multidimensional array.
            </summary>
            <value><c>true</c> if the collection type is a multidimensional array; otherwise, <c>false</c>.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonDictionaryContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonDictionaryContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonDictionaryContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonDictionaryContract.PropertyNameResolver">
            <summary>
            Gets or sets the property name resolver.
            </summary>
            <value>The property name resolver.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonDictionaryContract.DictionaryKeyType">
            <summary>
            Gets the <see cref="T:System.Type"/> of the dictionary keys.
            </summary>
            <value>The <see cref="T:System.Type"/> of the dictionary keys.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonDictionaryContract.DictionaryValueType">
            <summary>
            Gets the <see cref="T:System.Type"/> of the dictionary values.
            </summary>
            <value>The <see cref="T:System.Type"/> of the dictionary values.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonDynamicContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonDynamicContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonDynamicContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonDynamicContract.Properties">
            <summary>
            Gets the object's properties.
            </summary>
            <value>The object's properties.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonDynamicContract.PropertyNameResolver">
            <summary>
            Gets or sets the property name resolver.
            </summary>
            <value>The property name resolver.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonLinqContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonLinqContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonLinqContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonObjectContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonObjectContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonObjectContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonObjectContract.MemberSerialization">
            <summary>
            Gets or sets the object member serialization.
            </summary>
            <value>The member object serialization.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonObjectContract.ItemRequired">
            <summary>
            Gets or sets a value that indicates whether the object's properties are required.
            </summary>
            <value>
            	A value indicating whether the object's properties are required.
            </value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonObjectContract.Properties">
            <summary>
            Gets the object's properties.
            </summary>
            <value>The object's properties.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonObjectContract.ConstructorParameters">
            <summary>
            Gets the constructor parameters required for any non-default constructor
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonObjectContract.OverrideConstructor">
            <summary>
            Gets or sets the override constructor used to create the object.
            This is set when a constructor is marked up using the
            JsonConstructor attribute.
            </summary>
            <value>The override constructor.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonObjectContract.ParametrizedConstructor">
            <summary>
            Gets or sets the parametrized constructor used to create the object.
            </summary>
            <value>The parametrized constructor.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonPrimitiveContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonPrimitiveContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonPrimitiveContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonProperty">
            <summary>
            Maps a JSON property to a .NET member or constructor parameter.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonProperty.ToString">
            <summary>
            Returns a <see cref="T:System.String"/> that represents this instance.
            </summary>
            <returns>
            A <see cref="T:System.String"/> that represents this instance.
            </returns>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.PropertyName">
            <summary>
            Gets or sets the name of the property.
            </summary>
            <value>The name of the property.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.DeclaringType">
            <summary>
            Gets or sets the type that declared this property.
            </summary>
            <value>The type that declared this property.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.Order">
            <summary>
            Gets or sets the order of serialization and deserialization of a member.
            </summary>
            <value>The numeric order of serialization or deserialization.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.UnderlyingName">
            <summary>
            Gets or sets the name of the underlying member or parameter.
            </summary>
            <value>The name of the underlying member or parameter.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ValueProvider">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Serialization.IValueProvider"/> that will get and set the <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> during serialization.
            </summary>
            <value>The <see cref="T:Newtonsoft.Json.Serialization.IValueProvider"/> that will get and set the <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> during serialization.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.PropertyType">
            <summary>
            Gets or sets the type of the property.
            </summary>
            <value>The type of the property.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.Converter">
            <summary>
            Gets or sets the <see cref="T:Newtonsoft.Json.JsonConverter"/> for the property.
            If set this converter takes presidence over the contract converter for the property type.
            </summary>
            <value>The converter.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.MemberConverter">
            <summary>
            Gets the member converter.
            </summary>
            <value>The member converter.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.Ignored">
            <summary>
            Gets a value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> is ignored.
            </summary>
            <value><c>true</c> if ignored; otherwise, <c>false</c>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.Readable">
            <summary>
            Gets a value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> is readable.
            </summary>
            <value><c>true</c> if readable; otherwise, <c>false</c>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.Writable">
            <summary>
            Gets a value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> is writable.
            </summary>
            <value><c>true</c> if writable; otherwise, <c>false</c>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.HasMemberAttribute">
            <summary>
            Gets a value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> has a member attribute.
            </summary>
            <value><c>true</c> if has a member attribute; otherwise, <c>false</c>.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.DefaultValue">
            <summary>
            Gets the default value.
            </summary>
            <value>The default value.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.Required">
            <summary>
            Gets a value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> is required.
            </summary>
            <value>A value indicating whether this <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> is required.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.IsReference">
            <summary>
            Gets a value indicating whether this property preserves object references.
            </summary>
            <value>
            	<c>true</c> if this instance is reference; otherwise, <c>false</c>.
            </value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.NullValueHandling">
            <summary>
            Gets the property null value handling.
            </summary>
            <value>The null value handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.DefaultValueHandling">
            <summary>
            Gets the property default value handling.
            </summary>
            <value>The default value handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ReferenceLoopHandling">
            <summary>
            Gets the property reference loop handling.
            </summary>
            <value>The reference loop handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ObjectCreationHandling">
            <summary>
            Gets the property object creation handling.
            </summary>
            <value>The object creation handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.TypeNameHandling">
            <summary>
            Gets or sets the type name handling.
            </summary>
            <value>The type name handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ShouldSerialize">
            <summary>
            Gets or sets a predicate used to determine whether the property should be serialize.
            </summary>
            <value>A predicate used to determine whether the property should be serialize.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.GetIsSpecified">
            <summary>
            Gets or sets a predicate used to determine whether the property should be serialized.
            </summary>
            <value>A predicate used to determine whether the property should be serialized.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.SetIsSpecified">
            <summary>
            Gets or sets an action used to set whether the property has been deserialized.
            </summary>
            <value>An action used to set whether the property has been deserialized.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ItemConverter">
            <summary>
            Gets or sets the converter used when serializing the property's collection items.
            </summary>
            <value>The collection's items converter.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ItemIsReference">
            <summary>
            Gets or sets whether this property's collection items are serialized as a reference.
            </summary>
            <value>Whether this property's collection items are serialized as a reference.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ItemTypeNameHandling">
            <summary>
            Gets or sets the the type name handling used when serializing the property's collection items.
            </summary>
            <value>The collection's items type name handling.</value>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.JsonProperty.ItemReferenceLoopHandling">
            <summary>
            Gets or sets the the reference loop handling used when serializing the property's collection items.
            </summary>
            <value>The collection's items reference loop handling.</value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonPropertyCollection">
            <summary>
            A collection of <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> objects.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonPropertyCollection.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonPropertyCollection"/> class.
            </summary>
            <param name="type">The type.</param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonPropertyCollection.GetKeyForItem(Newtonsoft.Json.Serialization.JsonProperty)">
            <summary>
            When implemented in a derived class, extracts the key from the specified element.
            </summary>
            <param name="item">The element from which to extract the key.</param>
            <returns>The key for the specified element.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonPropertyCollection.AddProperty(Newtonsoft.Json.Serialization.JsonProperty)">
            <summary>
            Adds a <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> object.
            </summary>
            <param name="property">The property to add to the collection.</param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonPropertyCollection.GetClosestMatchProperty(System.String)">
            <summary>
            Gets the closest matching <see cref="T:Newtonsoft.Json.Serialization.JsonProperty"/> object.
            First attempts to get an exact case match of propertyName and then
            a case insensitive match.
            </summary>
            <param name="propertyName">Name of the property.</param>
            <returns>A matching property if found.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonPropertyCollection.GetProperty(System.String,System.StringComparison)">
            <summary>
            Gets a property by property name.
            </summary>
            <param name="propertyName">The name of the property to get.</param>
            <param name="comparisonType">Type property name string comparison.</param>
            <returns>A matching property if found.</returns>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.JsonStringContract">
            <summary>
            Contract details for a <see cref="T:System.Type"/> used by the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.JsonStringContract.#ctor(System.Type)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.JsonStringContract"/> class.
            </summary>
            <param name="underlyingType">The underlying type for the contract.</param>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.MemoryTraceWriter">
            <summary>
            Represents a trace writer that writes to memory. When the trace message limit is
            reached then old trace messages will be removed as new messages are added.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.MemoryTraceWriter.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.MemoryTraceWriter"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.MemoryTraceWriter.Trace(Newtonsoft.Json.TraceLevel,System.String,System.Exception)">
            <summary>
            Writes the specified trace level, message and optional exception.
            </summary>
            <param name="level">The <see cref="T:Newtonsoft.Json.TraceLevel"/> at which to write this trace.</param>
            <param name="message">The trace message.</param>
            <param name="ex">The trace exception. This parameter is optional.</param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.MemoryTraceWriter.GetTraceMessages">
            <summary>
            Returns an enumeration of the most recent trace messages.
            </summary>
            <returns>An enumeration of the most recent trace messages.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.MemoryTraceWriter.ToString">
            <summary>
            Returns a <see cref="T:System.String"/> of the most recent trace messages.
            </summary>
            <returns>
            A <see cref="T:System.String"/> of the most recent trace messages.
            </returns>
        </member>
        <member name="P:Newtonsoft.Json.Serialization.MemoryTraceWriter.LevelFilter">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.TraceLevel"/> that will be used to filter the trace messages passed to the writer.
            For example a filter level of <code>Info</code> will exclude <code>Verbose</code> messages and include <code>Info</code>,
            <code>Warning</code> and <code>Error</code> messages.
            </summary>
            <value>
            The <see cref="T:Newtonsoft.Json.TraceLevel"/> that will be used to filter the trace messages passed to the writer.
            </value>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.ObjectConstructor`1">
            <summary>
            Represents a method that constructs an object.
            </summary>
            <typeparam name="T">The object type to create.</typeparam>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.OnErrorAttribute">
            <summary>
            When applied to a method, specifies that the method is called when an error occurs serializing an object.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Serialization.ReflectionValueProvider">
            <summary>
            Get and set values for a <see cref="T:System.Reflection.MemberInfo"/> using reflection.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.ReflectionValueProvider.#ctor(System.Reflection.MemberInfo)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Serialization.ReflectionValueProvider"/> class.
            </summary>
            <param name="memberInfo">The member info.</param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.ReflectionValueProvider.SetValue(System.Object,System.Object)">
            <summary>
            Sets the value.
            </summary>
            <param name="target">The target to set the value on.</param>
            <param name="value">The value to set on the target.</param>
        </member>
        <member name="M:Newtonsoft.Json.Serialization.ReflectionValueProvider.GetValue(System.Object)">
            <summary>
            Gets the value.
            </summary>
            <param name="target">The target to get the value from.</param>
            <returns>The value.</returns>
        </member>
        <member name="T:Newtonsoft.Json.StringEscapeHandling">
            <summary>
            Specifies how strings are escaped when writing JSON text.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.StringEscapeHandling.Default">
            <summary>
            Only control characters (e.g. newline) are escaped.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.StringEscapeHandling.EscapeNonAscii">
            <summary>
            All non-ASCII and control characters (e.g. newline) are escaped.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.StringEscapeHandling.EscapeHtml">
            <summary>
            HTML (&lt;, &gt;, &amp;, &apos;, &quot;) and control characters (e.g. newline) are escaped.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.TraceLevel">
            <summary>
            Specifies what messages to output for the <see cref="T:Newtonsoft.Json.Serialization.ITraceWriter"/> class.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TraceLevel.Off">
            <summary>
            Output no tracing and debugging messages.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TraceLevel.Error">
            <summary>
            Output error-handling messages.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TraceLevel.Warning">
            <summary>
            Output warnings and error-handling messages.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TraceLevel.Info">
            <summary>
            Output informational messages, warnings, and error-handling messages.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TraceLevel.Verbose">
            <summary>
            Output all debugging and tracing messages.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.TypeNameHandling">
            <summary>
            Specifies type name handling options for the <see cref="T:Newtonsoft.Json.JsonSerializer"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TypeNameHandling.None">
            <summary>
            Do not include the .NET type name when serializing types.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TypeNameHandling.Objects">
            <summary>
            Include the .NET type name when serializing into a JSON object structure.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TypeNameHandling.Arrays">
            <summary>
            Include the .NET type name when serializing into a JSON array structure.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TypeNameHandling.All">
            <summary>
            Always include the .NET type name when serializing.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.TypeNameHandling.Auto">
            <summary>
            Include the .NET type name when the type of the object being serialized is not the same as its declared type.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.CollectionUtils.IsNullOrEmpty``1(System.Collections.Generic.ICollection{``0})">
            <summary>
            Determines whether the collection is null or empty.
            </summary>
            <param name="collection">The collection.</param>
            <returns>
            	<c>true</c> if the collection is null or empty; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.CollectionUtils.AddRange``1(System.Collections.Generic.IList{``0},System.Collections.Generic.IEnumerable{``0})">
            <summary>
            Adds the elements of the specified collection to the specified generic IList.
            </summary>
            <param name="initial">The list to add to.</param>
            <param name="collection">The collection of elements to add.</param>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.CollectionUtils.IndexOf``1(System.Collections.Generic.IEnumerable{``0},``0,System.Collections.Generic.IEqualityComparer{``0})">
            <summary>
            Returns the index of the first occurrence in a sequence by using a specified IEqualityComparer.
            </summary>
            <typeparam name="TSource">The type of the elements of source.</typeparam>
            <param name="list">A sequence in which to locate a value.</param>
            <param name="value">The object to locate in the sequence</param>
            <param name="comparer">An equality comparer to compare values.</param>
            <returns>The zero-based index of the first occurrence of value wiThin the entire sequence, if found; otherwise, –1.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ConvertUtils.Convert(System.Object,System.Globalization.CultureInfo,System.Type)">
            <summary>
            Converts the value to the specified type.
            </summary>
            <param name="initialValue">The value to convert.</param>
            <param name="culture">The culture to use when converting.</param>
            <param name="targetType">The type to convert the value to.</param>
            <returns>The converted type.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ConvertUtils.TryConvert(System.Object,System.Globalization.CultureInfo,System.Type,System.Object@)">
            <summary>
            Converts the value to the specified type.
            </summary>
            <param name="initialValue">The value to convert.</param>
            <param name="culture">The culture to use when converting.</param>
            <param name="targetType">The type to convert the value to.</param>
            <param name="convertedValue">The converted value if the conversion was successful or the default value of <c>T</c> if it failed.</param>
            <returns>
            	<c>true</c> if <c>initialValue</c> was converted successfully; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ConvertUtils.ConvertOrCast(System.Object,System.Globalization.CultureInfo,System.Type)">
            <summary>
            Converts the value to the specified type. If the value is unable to be converted, the
            value is checked whether it assignable to the specified type.
            </summary>
            <param name="initialValue">The value to convert.</param>
            <param name="culture">The culture to use when converting.</param>
            <param name="targetType">The type to convert or cast the value to.</param>
            <returns>
            The converted type. If conversion was unsuccessful, the initial value
            is returned if assignable to the target type.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.DynamicProxyMetaObject`1.CallMethodWithResult(System.String,System.Dynamic.DynamicMetaObjectBinder,System.Linq.Expressions.Expression[],Newtonsoft.Json.Utilities.DynamicProxyMetaObject{`0}.Fallback,Newtonsoft.Json.Utilities.DynamicProxyMetaObject{`0}.Fallback)">
            <summary>
            Helper method for generating a MetaObject which calls a
            specific method on Dynamic that returns a result
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.DynamicProxyMetaObject`1.CallMethodReturnLast(System.String,System.Dynamic.DynamicMetaObjectBinder,System.Linq.Expressions.Expression[],Newtonsoft.Json.Utilities.DynamicProxyMetaObject{`0}.Fallback)">
            <summary>
            Helper method for generating a MetaObject which calls a
            specific method on Dynamic, but uses one of the arguments for
            the result.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.DynamicProxyMetaObject`1.CallMethodNoResult(System.String,System.Dynamic.DynamicMetaObjectBinder,System.Linq.Expressions.Expression[],Newtonsoft.Json.Utilities.DynamicProxyMetaObject{`0}.Fallback)">
            <summary>
            Helper method for generating a MetaObject which calls a
            specific method on Dynamic, but uses one of the arguments for
            the result.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.DynamicProxyMetaObject`1.GetRestrictions">
            <summary>
            Returns a Restrictions object which includes our current restrictions merged
            with a restriction limiting our type
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.EnumUtils.GetNamesAndValues``1">
            <summary>
            Gets a dictionary of the names and values of an Enum type.
            </summary>
            <returns></returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.EnumUtils.GetNamesAndValues``1(System.Type)">
            <summary>
            Gets a dictionary of the names and values of an Enum type.
            </summary>
            <param name="enumType">The enum type to get names and values for.</param>
            <returns></returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.GetCollectionItemType(System.Type)">
            <summary>
            Gets the type of the typed collection's items.
            </summary>
            <param name="type">The type.</param>
            <returns>The type of the typed collection's items.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.GetMemberUnderlyingType(System.Reflection.MemberInfo)">
            <summary>
            Gets the member's underlying type.
            </summary>
            <param name="member">The member.</param>
            <returns>The underlying type of the member.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.IsIndexedProperty(System.Reflection.MemberInfo)">
            <summary>
            Determines whether the member is an indexed property.
            </summary>
            <param name="member">The member.</param>
            <returns>
            	<c>true</c> if the member is an indexed property; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.IsIndexedProperty(System.Reflection.PropertyInfo)">
            <summary>
            Determines whether the property is an indexed property.
            </summary>
            <param name="property">The property.</param>
            <returns>
            	<c>true</c> if the property is an indexed property; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.GetMemberValue(System.Reflection.MemberInfo,System.Object)">
            <summary>
            Gets the member's value on the object.
            </summary>
            <param name="member">The member.</param>
            <param name="target">The target object.</param>
            <returns>The member's value on the object.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.SetMemberValue(System.Reflection.MemberInfo,System.Object,System.Object)">
            <summary>
            Sets the member's value on the target object.
            </summary>
            <param name="member">The member.</param>
            <param name="target">The target.</param>
            <param name="value">The value.</param>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.CanReadMemberValue(System.Reflection.MemberInfo,System.Boolean)">
            <summary>
            Determines whether the specified MemberInfo can be read.
            </summary>
            <param name="member">The MemberInfo to determine whether can be read.</param>
            /// <param name="nonPublic">if set to <c>true</c> then allow the member to be gotten non-publicly.</param>
            <returns>
            	<c>true</c> if the specified MemberInfo can be read; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.ReflectionUtils.CanSetMemberValue(System.Reflection.MemberInfo,System.Boolean,System.Boolean)">
            <summary>
            Determines whether the specified MemberInfo can be set.
            </summary>
            <param name="member">The MemberInfo to determine whether can be set.</param>
            <param name="nonPublic">if set to <c>true</c> then allow the member to be set non-publicly.</param>
            <param name="canSetReadOnly">if set to <c>true</c> then allow the member to be set if read-only.</param>
            <returns>
            	<c>true</c> if the specified MemberInfo can be set; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="T:Newtonsoft.Json.Utilities.StringBuffer">
            <summary>
            Builds a string. Unlike StringBuilder this class lets you reuse it's internal buffer.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.StringUtils.IsWhiteSpace(System.String)">
            <summary>
            Determines whether the string is all White space. Empty string will return false.
            </summary>
            <param name="s">The string to test whether it is all White space.</param>
            <returns>
            	<c>true</c> if the string is all White space; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Utilities.StringUtils.NullEmptyString(System.String)">
            <summary>
            Nulls an empty string.
            </summary>
            <param name="s">The string.</param>
            <returns>Null if the string was null, otherwise the string unchanged.</returns>
        </member>
        <member name="T:Newtonsoft.Json.Schema.Extensions">
            <summary>
            Contains the JSON schema extension methods.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.Extensions.IsValid(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Schema.JsonSchema)">
            <summary>
            Determines whether the <see cref="T:Newtonsoft.Json.Linq.JToken"/> is valid.
            </summary>
            <param name="source">The source <see cref="T:Newtonsoft.Json.Linq.JToken"/> to test.</param>
            <param name="schema">The schema to test with.</param>
            <returns>
            	<c>true</c> if the specified <see cref="T:Newtonsoft.Json.Linq.JToken"/> is valid; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.Extensions.IsValid(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Schema.JsonSchema,System.Collections.Generic.IList{System.String}@)">
            <summary>
            Determines whether the <see cref="T:Newtonsoft.Json.Linq.JToken"/> is valid.
            </summary>
            <param name="source">The source <see cref="T:Newtonsoft.Json.Linq.JToken"/> to test.</param>
            <param name="schema">The schema to test with.</param>
            <param name="errorMessages">When this method returns, contains any error messages generated while validating. </param>
            <returns>
            	<c>true</c> if the specified <see cref="T:Newtonsoft.Json.Linq.JToken"/> is valid; otherwise, <c>false</c>.
            </returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.Extensions.Validate(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Schema.JsonSchema)">
            <summary>
            Validates the specified <see cref="T:Newtonsoft.Json.Linq.JToken"/>.
            </summary>
            <param name="source">The source <see cref="T:Newtonsoft.Json.Linq.JToken"/> to test.</param>
            <param name="schema">The schema to test with.</param>
        </member>
        <member name="M:Newtonsoft.Json.Schema.Extensions.Validate(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Schema.JsonSchema,Newtonsoft.Json.Schema.ValidationEventHandler)">
            <summary>
            Validates the specified <see cref="T:Newtonsoft.Json.Linq.JToken"/>.
            </summary>
            <param name="source">The source <see cref="T:Newtonsoft.Json.Linq.JToken"/> to test.</param>
            <param name="schema">The schema to test with.</param>
            <param name="validationEventHandler">The validation event handler.</param>
        </member>
        <member name="T:Newtonsoft.Json.Schema.JsonSchemaException">
            <summary>
            Returns detailed information about the schema exception.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaException.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Schema.JsonSchemaException"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaException.#ctor(System.String)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Schema.JsonSchemaException"/> class
            with a specified error message.
            </summary>
            <param name="message">The error message that explains the reason for the exception.</param>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchemaException.#ctor(System.String,System.Exception)">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Schema.JsonSchemaException"/> class
            with a specified error message and a reference to the inner exception that is the cause of this exception.
            </summary>
            <param name="message">The error message that explains the reason for the exception.</param>
            <param name="innerException">The exception that is the cause of the current exception, or a null reference (NoThing in Visual Basic) if no inner exception is specified.</param>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchemaException.LineNumber">
            <summary>
            Gets the line number indicating where the error occurred.
            </summary>
            <value>The line number indicating where the error occurred.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchemaException.LinePosition">
            <summary>
            Gets the line position indicating where the error occurred.
            </summary>
            <value>The line position indicating where the error occurred.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchemaException.Path">
            <summary>
            Gets the path to the JSON where the error occurred.
            </summary>
            <value>The path to the JSON where the error occurred.</value>
        </member>
        <member name="T:Newtonsoft.Json.Schema.UndefinedSchemaIdHandling">
            <summary>
            Specifies undefined schema Id handling options for the <see cref="T:Newtonsoft.Json.Schema.JsonSchemaGenerator"/>.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.UndefinedSchemaIdHandling.None">
            <summary>
            Do not infer a schema Id.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.UndefinedSchemaIdHandling.UseTypeName">
            <summary>
            Use the .NET type name as the schema Id.
            </summary>
        </member>
        <member name="F:Newtonsoft.Json.Schema.UndefinedSchemaIdHandling.UseAssemblyQualifiedName">
            <summary>
            Use the assembly qualified .NET type name as the schema Id.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Schema.ValidationEventArgs">
            <summary>
            Returns detailed information related to the <see cref="T:Newtonsoft.Json.Schema.ValidationEventHandler"/>.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.ValidationEventArgs.Exception">
            <summary>
            Gets the <see cref="T:Newtonsoft.Json.Schema.JsonSchemaException"/> associated with the validation error.
            </summary>
            <value>The JsonSchemaException associated with the validation error.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.ValidationEventArgs.Path">
            <summary>
            Gets the path of the JSON location where the validation error occurred.
            </summary>
            <value>The path of the JSON location where the validation error occurred.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.ValidationEventArgs.Message">
            <summary>
            Gets the text description corresponding to the validation error.
            </summary>
            <value>The text description.</value>
        </member>
        <member name="T:Newtonsoft.Json.Schema.ValidationEventHandler">
            <summary>
            Represents the callback method that will handle JSON schema validation events and the <see cref="T:Newtonsoft.Json.Schema.ValidationEventArgs"/>.
            </summary>
        </member>
        <member name="T:Newtonsoft.Json.Schema.JsonSchema">
            <summary>
            An in-memory representation of a JSON Schema.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.#ctor">
            <summary>
            Initializes a new instance of the <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> class.
            </summary>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.Read(Newtonsoft.Json.JsonReader)">
            <summary>
            Reads a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from the specified <see cref="T:Newtonsoft.Json.JsonReader"/>.
            </summary>
            <param name="reader">The <see cref="T:Newtonsoft.Json.JsonReader"/> containing the JSON Schema to read.</param>
            <returns>The <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> object representing the JSON Schema.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.Read(Newtonsoft.Json.JsonReader,Newtonsoft.Json.Schema.JsonSchemaResolver)">
            <summary>
            Reads a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from the specified <see cref="T:Newtonsoft.Json.JsonReader"/>.
            </summary>
            <param name="reader">The <see cref="T:Newtonsoft.Json.JsonReader"/> containing the JSON Schema to read.</param>
            <param name="resolver">The <see cref="T:Newtonsoft.Json.Schema.JsonSchemaResolver"/> to use when resolving schema references.</param>
            <returns>The <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> object representing the JSON Schema.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.Parse(System.String)">
            <summary>
            Load a <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> from a string that contains schema JSON.
            </summary>
            <param name="json">A <see cref="T:System.String"/> that contains JSON.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> populated from the string that contains JSON.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.Parse(System.String,Newtonsoft.Json.Schema.JsonSchemaResolver)">
            <summary>
            Parses the specified json.
            </summary>
            <param name="json">The json.</param>
            <param name="resolver">The resolver.</param>
            <returns>A <see cref="T:Newtonsoft.Json.Schema.JsonSchema"/> populated from the string that contains JSON.</returns>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.WriteTo(Newtonsoft.Json.JsonWriter)">
            <summary>
            Writes this schema to a <see cref="T:Newtonsoft.Json.JsonWriter"/>.
            </summary>
            <param name="writer">A <see cref="T:Newtonsoft.Json.JsonWriter"/> into which this method will write.</param>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.WriteTo(Newtonsoft.Json.JsonWriter,Newtonsoft.Json.Schema.JsonSchemaResolver)">
            <summary>
            Writes this schema to a <see cref="T:Newtonsoft.Json.JsonWriter"/> using the specified <see cref="T:Newtonsoft.Json.Schema.JsonSchemaResolver"/>.
            </summary>
            <param name="writer">A <see cref="T:Newtonsoft.Json.JsonWriter"/> into which this method will write.</param>
            <param name="resolver">The resolver used.</param>
        </member>
        <member name="M:Newtonsoft.Json.Schema.JsonSchema.ToString">
            <summary>
            Returns a <see cref="T:System.String"/> that represents the current <see cref="T:System.Object"/>.
            </summary>
            <returns>
            A <see cref="T:System.String"/> that represents the current <see cref="T:System.Object"/>.
            </returns>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Id">
            <summary>
            Gets or sets the id.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Title">
            <summary>
            Gets or sets the title.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Required">
            <summary>
            Gets or sets whether the object is required.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.ReadOnly">
            <summary>
            Gets or sets whether the object is read only.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Hidden">
            <summary>
            Gets or sets whether the object is visible to users.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Transient">
            <summary>
            Gets or sets whether the object is transient.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Description">
            <summary>
            Gets or sets the description of the object.
            </summary>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Type">
            <summary>
            Gets or sets the types of values allowed by the object.
            </summary>
            <value>The type.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Pattern">
            <summary>
            Gets or sets the pattern.
            </summary>
            <value>The pattern.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.MinimumLength">
            <summary>
            Gets or sets the minimum length.
            </summary>
            <value>The minimum length.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.MaximumLength">
            <summary>
            Gets or sets the maximum length.
            </summary>
            <value>The maximum length.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.DivisibleBy">
            <summary>
            Gets or sets a number that the value should be divisble by.
            </summary>
            <value>A number that the value should be divisble by.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Minimum">
            <summary>
            Gets or sets the minimum.
            </summary>
            <value>The minimum.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.Maximum">
            <summary>
            Gets or sets the maximum.
            </summary>
            <value>The maximum.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.ExclusiveMinimum">
            <summary>
            Gets or sets a flag indicating whether the value can not equal the number defined by the "minimum" attribute.
            </summary>
            <value>A flag indicating whether the value can not equal the number defined by the "minimum" attribute.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.ExclusiveMaximum">
            <summary>
            Gets or sets a flag indicating whether the value can not equal the number defined by the "maximum" attribute.
            </summary>
            <value>A flag indicating whether the value can not equal the number defined by the "maximum" attribute.</value>
        </member>
        <member name="P:Newtonsoft.Json.Schema.JsonSchema.MinimumItems">
            <summary>
            Gets or sets the minimum number of items.
            </summary>
            <value>The minimum number of items.</value>
        </member>
        <member name="P:N