/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-kudos-crunchy-nut-snack",
  "description": "Cereal bars",
  "id": "usda-fndds-2708109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-kudos-crunchy-nut-snack",
      "kind": "unit",
      "label": "1 Kudos Crunchy Nut Snack"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar with nuts, chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 54.1,
    "energy_kcal": 536.0,
    "fat_g": 31.2,
    "fibre_g": 3.8,
    "folate_ug": 25.0,
    "iron_mg": 1.45,
    "magnesium_mg": 67.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 339.0,
    "protein_g": 9.6,
    "salt_g": 0.4825,
    "sat_fat_g": 17.1,
    "sodium_mg": 193.0,
    "sugar_g": 23.6,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 4.59,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708109",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
