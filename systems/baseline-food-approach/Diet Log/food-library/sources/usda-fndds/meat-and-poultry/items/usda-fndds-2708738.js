/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular-large",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turnover or hot pocket, pizza pocket, meat",
  "nutritionPerBasis": {
    "calcium_mg": 218.0,
    "carbs_g": 27.9,
    "energy_kcal": 260.0,
    "fat_g": 11.9,
    "fibre_g": 1.6,
    "folate_ug": 58.0,
    "iron_mg": 1.88,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 169.0,
    "potassium_mg": 157.0,
    "protein_g": 10.3,
    "salt_g": 1.34,
    "sat_fat_g": 4.8,
    "sodium_mg": 536.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708738",
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
