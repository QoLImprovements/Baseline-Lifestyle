/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-bar",
  "description": "Cereal bars",
  "id": "usda-fndds-2708091",
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
  "name": "Cereal or granola bar (General Mills Nature Valley Chewy Trail Mix)",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 72.3,
    "energy_kcal": 415.0,
    "fat_g": 11.4,
    "fibre_g": 3.8,
    "folate_ug": 92.0,
    "iron_mg": 8.71,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 189.0,
    "protein_g": 5.71,
    "salt_g": 0.4625,
    "sat_fat_g": 1.44,
    "sodium_mg": 185.0,
    "sugar_g": 42.9,
    "vitamin_a_ug": 302.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708091",
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
