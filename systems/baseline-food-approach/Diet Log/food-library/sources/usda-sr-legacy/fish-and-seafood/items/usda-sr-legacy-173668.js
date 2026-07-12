/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "oz-boneless",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-173668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-boneless",
      "kind": "unit",
      "label": "oz, boneless"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "fillet-large-7-x-2-1-4-x-1-4",
      "kind": "unit",
      "label": "fillet, large (7\" x 2-1/4\" x 1/4\")"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "fillet-small-2-3-8-x-1-3-8-x-1-4",
      "kind": "unit",
      "label": "fillet, small (2-3/8\" x 1-3/8\" x 1/4\")"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "fillet-medium-5-x-1-3-4-x-1-4",
      "kind": "unit",
      "label": "fillet, medium (5\" x 1-3/4\" x 1/4\")"
    }
  ],
  "name": "Fish, herring, Atlantic, kippered",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 0.0,
    "energy_kcal": 908.0,
    "fat_g": 12.4,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.51,
    "magnesium_mg": 46.0,
    "omega3_g": 2.225,
    "phosphorus_mg": 325.0,
    "potassium_mg": 447.0,
    "protein_g": 24.6,
    "salt_g": 2.295,
    "sat_fat_g": 2.79,
    "sodium_mg": 918.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173668",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
