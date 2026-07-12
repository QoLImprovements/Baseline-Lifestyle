/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Dressing with chicken or turkey and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 21.0,
    "energy_kcal": 217.0,
    "fat_g": 11.2,
    "fibre_g": 1.4,
    "folate_ug": 74.0,
    "iron_mg": 2.58,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 96.0,
    "potassium_mg": 128.0,
    "protein_g": 8.2,
    "salt_g": 1.2725,
    "sat_fat_g": 2.53,
    "sodium_mg": 509.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 345.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 18.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708748",
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
