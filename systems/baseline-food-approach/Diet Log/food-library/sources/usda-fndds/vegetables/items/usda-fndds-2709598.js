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
  "id": "usda-fndds-2709598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Greens, canned, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 2.71,
    "energy_kcal": 41.0,
    "fat_g": 2.82,
    "fibre_g": 1.3,
    "folate_ug": 84.0,
    "iron_mg": 1.46,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 136.0,
    "protein_g": 1.32,
    "salt_g": 0.8375,
    "sat_fat_g": 0.73,
    "sodium_mg": 335.0,
    "sugar_g": 0.41,
    "vitamin_a_ug": 298.0,
    "vitamin_c_mg": 14.2,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 279.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709598",
  "state": "Canned",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "canned",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
