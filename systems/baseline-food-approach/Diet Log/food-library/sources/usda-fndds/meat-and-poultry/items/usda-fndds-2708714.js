/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-individual",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    }
  ],
  "name": "Empanada, chicken, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 29.9,
    "energy_kcal": 283.0,
    "fat_g": 15.1,
    "fibre_g": 2.0,
    "folate_ug": 37.0,
    "iron_mg": 1.45,
    "magnesium_mg": 18.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 97.0,
    "potassium_mg": 175.0,
    "protein_g": 7.35,
    "salt_g": 1.115,
    "sat_fat_g": 5.23,
    "sodium_mg": 446.0,
    "sugar_g": 2.75,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708714",
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
