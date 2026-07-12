/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, excluding citrus fruits, with pudding",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 18.1,
    "energy_kcal": 137.0,
    "fat_g": 6.48,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 0.25,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 186.0,
    "protein_g": 1.86,
    "salt_g": 0.1,
    "sat_fat_g": 0.739,
    "sodium_mg": 40.0,
    "sugar_g": 13.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 16.3,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709301",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "other-fruits-and-fruit-salads",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
