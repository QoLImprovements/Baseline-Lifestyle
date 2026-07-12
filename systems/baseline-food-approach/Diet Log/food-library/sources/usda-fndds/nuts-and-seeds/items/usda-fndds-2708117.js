/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-bar",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutrition bar (Balance Original Bar)",
  "nutritionPerBasis": {
    "calcium_mg": 543.0,
    "carbs_g": 48.7,
    "energy_kcal": 415.0,
    "fat_g": 12.0,
    "fibre_g": 3.1,
    "folate_ug": 126.0,
    "iron_mg": 10.9,
    "magnesium_mg": 119.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 465.0,
    "potassium_mg": 678.0,
    "protein_g": 28.0,
    "salt_g": 0.6325,
    "sat_fat_g": 1.15,
    "sodium_mg": 253.0,
    "sugar_g": 34.9,
    "vitamin_a_ug": 1500.0,
    "vitamin_c_mg": 11.2,
    "vitamin_e_mg": 5.84,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708117",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "nutrition-bars",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
