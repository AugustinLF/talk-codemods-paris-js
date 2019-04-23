export default function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);

  const createUserFunctions = [];

  const imports = root
    .find(j.ImportDeclaration, {
      source: { value: "createUser" }
    })
    .forEach(path => {
      const specifiers = path.value.specifiers;
      specifiers.forEach(specifier => {
        if (specifier.type === "ImportDefaultSpecifier") {
          createUserFunctions.push(specifier.local.name);
        }
      });
    });

  createUserFunctions.forEach(functionName => {
    root
      .find(j.CallExpression, {
        callee: {
          name: functionName
        }
      })
      .forEach(path => {
        const [firstArgument, ...otherArgs] = path.value.arguments;
        firstArgument.properties.push(
          j.property("init", j.identifier("id"), j.literal(null))
        );
      });
  });

  return root.toSource();
}
