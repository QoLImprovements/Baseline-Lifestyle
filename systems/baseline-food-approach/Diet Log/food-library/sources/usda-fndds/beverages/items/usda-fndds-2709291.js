/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-snack-size-container",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit cocktail, canned, juice pack",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 12.4,
    "energy_kcal": 48.0,
    "fat_g": 0.09,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.33,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 136.0,
    "protein_g": 0.43,
    "salt_g": 0.0175,
    "sat_fat_g": 0.012,
    "sodium_mg": 7.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709291",
  "state": "Canned",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "beverages",
    "canned",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
