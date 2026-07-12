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
  "id": "usda-fndds-2708103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar, nonfat",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 77.6,
    "energy_kcal": 342.0,
    "fat_g": 0.9,
    "fibre_g": 7.4,
    "folate_ug": 316.0,
    "iron_mg": 4.0,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 220.0,
    "protein_g": 5.9,
    "salt_g": 0.04,
    "sat_fat_g": 0.2,
    "sodium_mg": 16.0,
    "sugar_g": 45.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708103",
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
