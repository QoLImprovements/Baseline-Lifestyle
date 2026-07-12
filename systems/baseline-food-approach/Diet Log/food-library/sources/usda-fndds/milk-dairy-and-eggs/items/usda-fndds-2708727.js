/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-kolache",
      "kind": "unit",
      "label": "1 kolache"
    }
  ],
  "name": "Pastry, egg and cheese filled",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 43.8,
    "energy_kcal": 349.0,
    "fat_g": 15.7,
    "fibre_g": 1.6,
    "folate_ug": 86.0,
    "iron_mg": 2.84,
    "magnesium_mg": 18.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 123.0,
    "potassium_mg": 123.0,
    "protein_g": 8.38,
    "salt_g": 0.54,
    "sat_fat_g": 7.01,
    "sodium_mg": 216.0,
    "sugar_g": 6.18,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708727",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "milk-dairy-and-eggs",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
