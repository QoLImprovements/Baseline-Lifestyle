/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Protein and nutritional powders",
  "id": "usda-fndds-2710738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-scoop",
      "kind": "unit",
      "label": "1 scoop"
    }
  ],
  "name": "Nutritional powder mix, sugar free (Slim Fast)",
  "nutritionPerBasis": {
    "calcium_mg": 364.0,
    "carbs_g": 73.9,
    "energy_kcal": 448.0,
    "fat_g": 13.3,
    "fibre_g": 18.1,
    "folate_ug": 385.0,
    "iron_mg": 0.68,
    "magnesium_mg": 385.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 385.0,
    "potassium_mg": 247.0,
    "protein_g": 8.13,
    "salt_g": 1.18,
    "sat_fat_g": 1.45,
    "sodium_mg": 472.0,
    "sugar_g": 38.0,
    "vitamin_a_ug": 1030.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 51.9,
    "vitamin_k_ug": 96.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710738",
  "state": "Unspecified",
  "subcategory": "Protein and nutritional powders",
  "tags": [
    "nuts-and-seeds",
    "protein-and-nutritional-powders",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
