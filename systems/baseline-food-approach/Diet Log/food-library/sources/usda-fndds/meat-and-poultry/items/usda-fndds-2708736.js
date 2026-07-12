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
  "id": "usda-fndds-2708736",
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
      "gramsPerUnit": 130.0,
      "key": "1-regular-large",
      "kind": "unit",
      "label": "1 regular/large"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-small-individual",
      "kind": "unit",
      "label": "1 small/individual"
    }
  ],
  "name": "Turnover or hot pocket, beef",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 24.5,
    "energy_kcal": 233.0,
    "fat_g": 10.2,
    "fibre_g": 1.3,
    "folate_ug": 50.0,
    "iron_mg": 2.11,
    "magnesium_mg": 18.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 105.0,
    "potassium_mg": 156.0,
    "protein_g": 10.4,
    "salt_g": 1.1375,
    "sat_fat_g": 3.23,
    "sodium_mg": 455.0,
    "sugar_g": 2.67,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708736",
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
