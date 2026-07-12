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
  "id": "usda-fndds-2708083",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "1-nutri-grain-bar",
      "kind": "unit",
      "label": "1 Nutri-Grain Bar"
    }
  ],
  "name": "Cereal or granola bar (Kellogg's Nutri-Grain Cereal Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 576.0,
    "carbs_g": 67.6,
    "energy_kcal": 365.0,
    "fat_g": 8.67,
    "fibre_g": 3.0,
    "folate_ug": 14.0,
    "iron_mg": 6.14,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 247.0,
    "protein_g": 4.22,
    "salt_g": 0.885,
    "sat_fat_g": 1.44,
    "sodium_mg": 354.0,
    "sugar_g": 29.0,
    "vitamin_a_ug": 604.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 15.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708083",
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
