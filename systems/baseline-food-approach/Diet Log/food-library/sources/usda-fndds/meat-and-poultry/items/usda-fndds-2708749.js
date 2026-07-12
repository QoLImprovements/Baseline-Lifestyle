/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Dressing with meat and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 20.4,
    "energy_kcal": 243.0,
    "fat_g": 14.6,
    "fibre_g": 1.3,
    "folate_ug": 42.0,
    "iron_mg": 1.95,
    "magnesium_mg": 17.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 82.0,
    "potassium_mg": 158.0,
    "protein_g": 7.94,
    "salt_g": 1.5875,
    "sat_fat_g": 4.05,
    "sodium_mg": 635.0,
    "sugar_g": 2.96,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708749",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "meat-and-poultry",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
