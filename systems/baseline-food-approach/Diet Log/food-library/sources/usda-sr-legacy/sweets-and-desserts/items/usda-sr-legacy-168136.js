/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cubic-inch",
  "description": "Sweets",
  "id": "usda-sr-legacy-168136",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.2,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Ice creams, chocolate, rich",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 19.8,
    "energy_kcal": 251.0,
    "fat_g": 17.0,
    "fibre_g": 0.9,
    "folate_ug": 5.0,
    "iron_mg": 1.02,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 238.0,
    "protein_g": 4.72,
    "salt_g": 0.1425,
    "sat_fat_g": 10.4,
    "sodium_mg": 57.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 201.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168136",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
