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
  "id": "usda-fndds-2708095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cereal or granola bar (Quaker Chewy Granola Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 70.2,
    "energy_kcal": 418.0,
    "fat_g": 16.6,
    "fibre_g": 3.8,
    "folate_ug": 16.0,
    "iron_mg": 2.19,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 237.0,
    "protein_g": 5.65,
    "salt_g": 0.7275,
    "sat_fat_g": 6.06,
    "sodium_mg": 291.0,
    "sugar_g": 28.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708095",
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
