/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708570",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Tamale, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 15.8,
    "energy_kcal": 174.0,
    "fat_g": 9.04,
    "fibre_g": 2.4,
    "folate_ug": 39.0,
    "iron_mg": 0.87,
    "magnesium_mg": 26.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 120.0,
    "potassium_mg": 152.0,
    "protein_g": 7.38,
    "salt_g": 1.1825,
    "sat_fat_g": 2.69,
    "sodium_mg": 473.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 16.4,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708570",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "other-mexican-mixed-dishes",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
