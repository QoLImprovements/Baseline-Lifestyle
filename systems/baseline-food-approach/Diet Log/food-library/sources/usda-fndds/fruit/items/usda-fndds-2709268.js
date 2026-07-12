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
  "id": "usda-fndds-2709268",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rhubarb",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 17.4,
    "energy_kcal": 73.0,
    "fat_g": 0.22,
    "fibre_g": 1.6,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 233.0,
    "protein_g": 0.81,
    "salt_g": 0.01,
    "sat_fat_g": 0.047,
    "sodium_mg": 4.0,
    "sugar_g": 14.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 26.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709268",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "fruit",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
