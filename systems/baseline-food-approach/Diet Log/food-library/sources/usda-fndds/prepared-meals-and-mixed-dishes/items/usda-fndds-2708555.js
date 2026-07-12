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
  "id": "usda-fndds-2708555",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Burrito bowl, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 10.6,
    "energy_kcal": 145.0,
    "fat_g": 5.44,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 0.93,
    "magnesium_mg": 23.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 147.0,
    "potassium_mg": 196.0,
    "protein_g": 13.0,
    "salt_g": 0.7775,
    "sat_fat_g": 2.29,
    "sodium_mg": 311.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708555",
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
