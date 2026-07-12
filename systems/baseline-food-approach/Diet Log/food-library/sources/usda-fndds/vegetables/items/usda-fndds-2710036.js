/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Asian stir fry vegetables, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 9.65,
    "energy_kcal": 71.0,
    "fat_g": 2.84,
    "fibre_g": 2.8,
    "folate_ug": 34.0,
    "iron_mg": 1.01,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 244.0,
    "protein_g": 2.01,
    "salt_g": 0.365,
    "sat_fat_g": 0.712,
    "sodium_mg": 146.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 231.0,
    "vitamin_c_mg": 35.3,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 39.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710036",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
