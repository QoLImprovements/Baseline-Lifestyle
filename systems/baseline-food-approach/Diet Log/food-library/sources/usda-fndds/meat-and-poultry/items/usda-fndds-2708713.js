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
  "id": "usda-fndds-2708713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    }
  ],
  "name": "Empanada, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 27.4,
    "energy_kcal": 309.0,
    "fat_g": 16.5,
    "fibre_g": 1.6,
    "folate_ug": 33.0,
    "iron_mg": 1.53,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 133.0,
    "potassium_mg": 185.0,
    "protein_g": 12.6,
    "salt_g": 1.15,
    "sat_fat_g": 5.63,
    "sodium_mg": 460.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708713",
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
