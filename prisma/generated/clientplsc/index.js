
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StoreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BillboardScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  label: 'label',
  imageUrl: 'imageUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  billboardId: 'billboardId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SizeScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  name: 'name',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ColorScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  name: 'name',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  categoryId: 'categoryId',
  name: 'name',
  price: 'price',
  isFeatured: 'isFeatured',
  isArchived: 'isArchived',
  sizeId: 'sizeId',
  colorId: 'colorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  storeId: 'storeId',
  isPaid: 'isPaid',
  phone: 'phone',
  address: 'address',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderItemScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  productId: 'productId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  Store: 'Store',
  Billboard: 'Billboard',
  Category: 'Category',
  Size: 'Size',
  Color: 'Color',
  Product: 'Product',
  Image: 'Image',
  Order: 'Order',
  OrderItem: 'OrderItem'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\CODER PRO\\NEXT_JS\\antonio-ecommerce-admin\\prisma\\generated\\clientplsc",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAicmhlbC1vcGVuc3NsLTEuMC54Il0KICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnRwbHNjIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgICAgID0gIm15c3FsIgogIHVybCAgICAgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCiAgcmVsYXRpb25Nb2RlID0gInByaXNtYSIKfQoKbW9kZWwgU3RvcmUgewogIGlkICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSAgICAgICAgU3RyaW5nCiAgdXNlcklkICAgICAgU3RyaW5nCiAgYmlsbGJvYXJkcyAgQmlsbGJvYXJkW10gQHJlbGF0aW9uKCJTdG9yZVRvQmlsbGJvYXJkIikKICBjYXRlZ29yaWVzICBDYXRlZ29yeVtdICBAcmVsYXRpb24oIlN0b3JlVG9DYXRlZ29yeSIpCiAgc2l6ZXMgICAgICAgU2l6ZVtdICAgICAgQHJlbGF0aW9uKCJTdG9yZVRvU2l6ZSIpCiAgY29sb3JzICAgICAgQ29sb3JbXSAgICAgQHJlbGF0aW9uKCJTdG9yZVRvQ29sb3IiKQogIHByb2R1Y3RzICAgIFByb2R1Y3RbXSAgIEByZWxhdGlvbigiU3RvcmVUb1Byb2R1Y3QiKQogIG9yZGVycyAgICAgIE9yZGVyW10gICAgIEByZWxhdGlvbigiU3RvcmVUb09yZGVyIikKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgICBAdXBkYXRlZEF0Cn0KCm1vZGVsIEJpbGxib2FyZCB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBzdG9yZUlkICAgICBTdHJpbmcgICAgCiAgc3RvcmUgICAgICAgU3RvcmUgICAgICAgQHJlbGF0aW9uKCJTdG9yZVRvQmlsbGJvYXJkIiwgZmllbGRzOiBbc3RvcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbGFiZWwgICAgICAgU3RyaW5nCiAgaW1hZ2VVcmwgICAgU3RyaW5nCiAgY2F0ZWdvcmllcyAgQ2F0ZWdvcnlbXQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKCiAgQEBpbmRleChbc3RvcmVJZF0pCn0KCm1vZGVsIENhdGVnb3J5IHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHN0b3JlSWQgICAgIFN0cmluZyAgICAgIC8vIEZvcmVpZ24gS2V5IHRvIFN0b3JlCiAgc3RvcmUgICAgICAgU3RvcmUgICAgICAgQHJlbGF0aW9uKCJTdG9yZVRvQ2F0ZWdvcnkiLCBmaWVsZHM6IFtzdG9yZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBiaWxsYm9hcmRJZCBTdHJpbmcgICAgICAvLyBGb3JlaWduIEtleSB0byBCaWxsYm9hcmQKICBiaWxsYm9hcmQgICBCaWxsYm9hcmQgICBAcmVsYXRpb24oZmllbGRzOiBbYmlsbGJvYXJkSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG5hbWUgICAgICAgIFN0cmluZwogIHByb2R1Y3RzICAgIFByb2R1Y3RbXSAgIEByZWxhdGlvbigiQ2F0ZWdvcnlUb1Byb2R1Y3QiKQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKCiAgQEBpbmRleChbc3RvcmVJZF0pCiAgQEBpbmRleChbYmlsbGJvYXJkSWRdKQp9Cgptb2RlbCBTaXplIHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHN0b3JlSWQgICAgIFN0cmluZyAgICAgIC8vIEZvcmVpZ24gS2V5IHRvIFN0b3JlCiAgc3RvcmUgICAgICAgU3RvcmUgICAgICAgQHJlbGF0aW9uKCJTdG9yZVRvU2l6ZSIsIGZpZWxkczogW3N0b3JlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG5hbWUgICAgICAgIFN0cmluZwogIHZhbHVlICAgICAgIFN0cmluZwogIHByb2R1Y3RzICAgIFByb2R1Y3RbXSAgIC8vIFJlbGF0aW9uIHRvIFByb2R1Y3QgbW9kZWwKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgICBAdXBkYXRlZEF0CgogIEBAaW5kZXgoW3N0b3JlSWRdKQp9Cgptb2RlbCBDb2xvciB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBzdG9yZUlkICAgICBTdHJpbmcgICAgICAvLyBGb3JlaWduIEtleSB0byBTdG9yZQogIHN0b3JlICAgICAgIFN0b3JlICAgICAgIEByZWxhdGlvbigiU3RvcmVUb0NvbG9yIiwgZmllbGRzOiBbc3RvcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbmFtZSAgICAgICAgU3RyaW5nCiAgdmFsdWUgICAgICAgU3RyaW5nCiAgcHJvZHVjdHMgICAgUHJvZHVjdFtdICAgLy8gUmVsYXRpb24gdG8gUHJvZHVjdCBtb2RlbAogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKCiAgQEBpbmRleChbc3RvcmVJZF0pCn0KbW9kZWwgUHJvZHVjdCB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBzdG9yZUlkICAgICBTdHJpbmcgICAgICAvLyBGb3JlaWduIEtleSB0byBTdG9yZQogIHN0b3JlICAgICAgIFN0b3JlICAgICAgIEByZWxhdGlvbigiU3RvcmVUb1Byb2R1Y3QiLCBmaWVsZHM6IFtzdG9yZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjYXRlZ29yeUlkICBTdHJpbmcgICAgICAvLyBGb3JlaWduIEtleSB0byBDYXRlZ29yeQogIGNhdGVnb3J5ICAgIENhdGVnb3J5ICAgIEByZWxhdGlvbigiQ2F0ZWdvcnlUb1Byb2R1Y3QiLCBmaWVsZHM6IFtjYXRlZ29yeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBuYW1lICAgICAgICBTdHJpbmcKICBwcmljZSAgICAgICBEZWNpbWFsCiAgaXNGZWF0dXJlZCAgQm9vbGVhbiAgICAgQGRlZmF1bHQoZmFsc2UpCiAgaXNBcmNoaXZlZCAgQm9vbGVhbiAgICAgQGRlZmF1bHQoZmFsc2UpCiAgc2l6ZUlkICAgICAgU3RyaW5nICAgICAgLy8gRm9yZWlnbiBLZXkgdG8gU2l6ZQogIHNpemUgICAgICAgIFNpemUgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzaXplSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNvbG9ySWQgICAgIFN0cmluZyAgICAgIC8vIEZvcmVpZ24gS2V5IHRvIENvbG9yCiAgY29sb3IgICAgICAgQ29sb3IgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NvbG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGltYWdlcyAgICAgIEltYWdlW10gICAgIC8vIFJlbGF0aW9uIHRvIEltYWdlIG1vZGVsCiAgb3JkZXJJdGVtcyAgT3JkZXJJdGVtW10gLy8gUmVsYXRpb24gdG8gT3JkZXIgbW9kZWwKICBjcmVhdGVkQXQgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgICBAdXBkYXRlZEF0CgogIEBAaW5kZXgoW3N0b3JlSWRdKQogIEBAaW5kZXgoW2NhdGVnb3J5SWRdKQogIEBAaW5kZXgoW3NpemVJZF0pCiAgQEBpbmRleChbY29sb3JJZF0pCn0KCm1vZGVsIEltYWdlIHsKICBpZCAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHByb2R1Y3RJZCAgIFN0cmluZyAgICAgIC8vIEZvcmVpZ24gS2V5IHRvIFByb2R1Y3QKICBwcm9kdWN0ICAgICBQcm9kdWN0ICAgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgdXJsICAgICAgICAgU3RyaW5nICAgICAgLy8gVVJMIG9mIHRoZSBpbWFnZQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKCiAgQEBpbmRleChbcHJvZHVjdElkXSkKfQoKbW9kZWwgT3JkZXIgewogIGlkICAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgc3RvcmVJZCAgICAgU3RyaW5nICAgICAgLy8gRm9yZWlnbiBLZXkgdG8gU3RvcmUKICBzdG9yZSAgICAgICBTdG9yZSAgICAgICBAcmVsYXRpb24oIlN0b3JlVG9PcmRlciIgLGZpZWxkczogW3N0b3JlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG9yZGVySXRlbXMgIE9yZGVySXRlbVtdIC8vIFJlbGF0aW9uIHRvIE9yZGVySXRlbSBtb2RlbAogIGlzUGFpZCAgICAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KGZhbHNlKQogIHBob25lICAgICAgIFN0cmluZyAgICAgIEBkZWZhdWx0KCIiKQogIGFkZHJlc3MgICAgIFN0cmluZyAgICAgIEBkZWZhdWx0KCIiKQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgIERhdGVUaW1lICAgIEB1cGRhdGVkQXQKCiAgQEBpbmRleChbc3RvcmVJZF0pCn0KCm1vZGVsIE9yZGVySXRlbSB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgb3JkZXJJZCAgICAgU3RyaW5nICAgIC8vIEZvcmVpZ24gS2V5IHRvIE9yZGVyCiAgb3JkZXIgICAgICAgT3JkZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFtvcmRlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0SWQgICBTdHJpbmcgICAgLy8gRm9yZWlnbiBLZXkgdG8gUHJvZHVjdAogIHByb2R1Y3QgICAgIFByb2R1Y3QgICBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbb3JkZXJJZF0pCiAgQEBpbmRleChbcHJvZHVjdElkXSkKfQo=",
  "inlineSchemaHash": "105890fbff3393da1b880a16b6f7e6008d25eb0728e1d3a90bfbc4e5b978a8e1"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/clientplsc",
    "generated/clientplsc",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Store\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billboards\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Billboard\",\"relationName\":\"StoreToBillboard\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"relationName\":\"StoreToCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sizes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Size\",\"relationName\":\"StoreToSize\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Color\",\"relationName\":\"StoreToColor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"StoreToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"StoreToOrder\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Billboard\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToBillboard\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"relationName\":\"BillboardToCategory\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Category\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToCategory\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billboardId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"billboard\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Billboard\",\"relationName\":\"BillboardToCategory\",\"relationFromFields\":[\"billboardId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"CategoryToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Size\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToSize\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToSize\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Color\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToColor\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ColorToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToProduct\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"relationName\":\"CategoryToProduct\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isArchived\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sizeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Size\",\"relationName\":\"ProductToSize\",\"relationFromFields\":[\"sizeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Color\",\"relationName\":\"ColorToProduct\",\"relationFromFields\":[\"colorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Image\",\"relationName\":\"ImageToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Image\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ImageToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Order\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"store\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Store\",\"relationName\":\"StoreToOrder\",\"relationFromFields\":[\"storeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OrderItem\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPaid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OrderItem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Order\",\"relationName\":\"OrderToOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"OrderItemToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/clientplsc/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-1.0.x.so.node");
path.join(process.cwd(), "prisma/generated/clientplsc/libquery_engine-rhel-openssl-1.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/clientplsc/schema.prisma")
