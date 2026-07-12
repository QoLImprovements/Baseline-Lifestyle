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
  "id": "usda-fndds-2708746",
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
  "name": "Cornmeal dressing with chicken or turkey and vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 19.3,
    "energy_kcal": 237.0,
    "fat_g": 14.4,
    "fibre_g": 1.2,
    "folate_ug": 66.0,
    "iron_mg": 2.48,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 121.0,
    "potassium_mg": 147.0,
    "protein_g": 7.6,
    "salt_g": 1.4025,
    "sat_fat_g": 3.1,
    "sodium_mg": 561.0,
    "sugar_g": 3.47,
    "vitamin_a_ug": 394.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 22.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708746",
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
