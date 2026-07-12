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
  "id": "usda-fndds-2709944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-pod",
      "kind": "unit",
      "label": "1 pod"
    }
  ],
  "name": "Okra, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 7.99,
    "energy_kcal": 35.0,
    "fat_g": 0.2,
    "fibre_g": 3.4,
    "folate_ug": 55.0,
    "iron_mg": 0.66,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 321.0,
    "protein_g": 2.07,
    "salt_g": 0.33,
    "sat_fat_g": 0.028,
    "sodium_mg": 132.0,
    "sugar_g": 1.59,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 33.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709944",
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
