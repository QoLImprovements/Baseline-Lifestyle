/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    }
  ],
  "name": "Fruit cocktail, canned, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 14.1,
    "energy_kcal": 55.0,
    "fat_g": 0.08,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.28,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 112.0,
    "protein_g": 0.41,
    "salt_g": 0.0125,
    "sat_fat_g": 0.009,
    "sodium_mg": 5.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709289",
  "state": "Canned",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "canned",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
