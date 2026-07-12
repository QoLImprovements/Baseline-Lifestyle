/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-bar",
  "description": "Cereal bars",
  "id": "usda-fndds-2708110",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal or granola bar, oats, nuts, coated with non-chocolate coating",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 60.1,
    "energy_kcal": 455.0,
    "fat_g": 20.0,
    "fibre_g": 4.3,
    "folate_ug": 18.0,
    "iron_mg": 1.49,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 192.0,
    "potassium_mg": 320.0,
    "protein_g": 8.6,
    "salt_g": 1.215,
    "sat_fat_g": 5.67,
    "sodium_mg": 486.0,
    "sugar_g": 34.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 7.6,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708110",
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
