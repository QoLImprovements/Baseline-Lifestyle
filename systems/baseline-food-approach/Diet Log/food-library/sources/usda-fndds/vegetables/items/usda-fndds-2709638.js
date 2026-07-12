/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Turnip greens, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 4.83,
    "energy_kcal": 51.0,
    "fat_g": 2.95,
    "fibre_g": 3.3,
    "folate_ug": 38.0,
    "iron_mg": 1.88,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 217.0,
    "protein_g": 3.25,
    "salt_g": 0.34,
    "sat_fat_g": 0.762,
    "sodium_mg": 136.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 532.0,
    "vitamin_c_mg": 21.1,
    "vitamin_e_mg": 2.96,
    "vitamin_k_ug": 504.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709638",
  "state": "Frozen",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "frozen",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
