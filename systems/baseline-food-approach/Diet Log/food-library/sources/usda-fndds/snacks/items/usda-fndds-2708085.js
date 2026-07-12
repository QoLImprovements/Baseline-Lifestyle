/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708085",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-nutri-grain-bar",
      "kind": "unit",
      "label": "1 Nutri-Grain Bar"
    }
  ],
  "name": "Cereal or granola bar (Kellogg's Nutri-Grain Fruit and Nut Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 66.7,
    "energy_kcal": 403.0,
    "fat_g": 10.9,
    "fibre_g": 7.5,
    "folate_ug": 127.0,
    "iron_mg": 5.65,
    "magnesium_mg": 105.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 328.0,
    "protein_g": 9.38,
    "salt_g": 0.4875,
    "sat_fat_g": 1.93,
    "sodium_mg": 195.0,
    "sugar_g": 32.4,
    "vitamin_a_ug": 267.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 3.72,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708085",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
