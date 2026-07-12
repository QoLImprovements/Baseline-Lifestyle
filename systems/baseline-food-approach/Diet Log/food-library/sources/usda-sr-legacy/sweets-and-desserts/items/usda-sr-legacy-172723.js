/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie-marshmallow-3-dia-x-3-4",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172723",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "pie-marshmallow-3-dia-x-3-4",
      "kind": "unit",
      "label": "pie, marshmallow (3\" dia x 3/4\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "cookie-small-1-3-4-dia-x-3-4",
      "kind": "unit",
      "label": "cookie, small (1-3/4\" dia x 3/4\")"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "fudge-marshmallow",
      "kind": "unit",
      "label": "Fudge Marshmallow"
    }
  ],
  "name": "Cookies, marshmallow, chocolate-coated (includes marshmallow pies)",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 67.7,
    "energy_kcal": 1760.0,
    "fat_g": 16.9,
    "fibre_g": 2.0,
    "folate_ug": 23.0,
    "iron_mg": 2.53,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 182.0,
    "protein_g": 4.0,
    "salt_g": 0.47,
    "sat_fat_g": 4.72,
    "sodium_mg": 188.0,
    "sugar_g": 44.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172723",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
