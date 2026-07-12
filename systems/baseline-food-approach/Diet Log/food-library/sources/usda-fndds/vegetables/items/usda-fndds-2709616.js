/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Spinach",
  "id": "usda-fndds-2709616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spinach, frozen, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 4.79,
    "energy_kcal": 34.0,
    "fat_g": 0.87,
    "fibre_g": 3.7,
    "folate_ug": 121.0,
    "iron_mg": 1.95,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 301.0,
    "protein_g": 4.0,
    "salt_g": 0.53,
    "sat_fat_g": 0.157,
    "sodium_mg": 212.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 601.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 3.53,
    "vitamin_k_ug": 539.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709616",
  "state": "Frozen",
  "subcategory": "Spinach",
  "tags": [
    "frozen",
    "spinach",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
