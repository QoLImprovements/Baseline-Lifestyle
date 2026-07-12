/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708107",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 117.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-kudos-chocolate-and-granola-snacks",
      "kind": "unit",
      "label": "1 Kudos Chocolate and Granola Snacks"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "1-sweet-success-bar",
      "kind": "unit",
      "label": "1 Sweet Success bar"
    }
  ],
  "name": "Cereal or granola bar, chocolate coated, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 65.0,
    "energy_kcal": 480.0,
    "fat_g": 20.4,
    "fibre_g": 3.2,
    "folate_ug": 12.0,
    "iron_mg": 1.16,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 162.0,
    "potassium_mg": 231.0,
    "protein_g": 7.52,
    "salt_g": 0.6725,
    "sat_fat_g": 8.69,
    "sodium_mg": 269.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 4.19,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708107",
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
