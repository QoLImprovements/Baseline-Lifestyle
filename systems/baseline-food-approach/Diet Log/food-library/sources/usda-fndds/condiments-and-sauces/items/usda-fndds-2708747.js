/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2708747",
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
  "name": "Dressing with oysters",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 18.4,
    "energy_kcal": 189.0,
    "fat_g": 10.8,
    "fibre_g": 1.2,
    "folate_ug": 32.0,
    "iron_mg": 2.42,
    "magnesium_mg": 18.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 67.0,
    "potassium_mg": 136.0,
    "protein_g": 4.95,
    "salt_g": 1.2575,
    "sat_fat_g": 2.14,
    "sodium_mg": 503.0,
    "sugar_g": 2.62,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 32.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708747",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "condiments-and-sauces",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
