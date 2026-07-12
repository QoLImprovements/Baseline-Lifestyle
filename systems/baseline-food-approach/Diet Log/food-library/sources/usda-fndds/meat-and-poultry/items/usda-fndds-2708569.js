/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-enchilada-any-size",
      "kind": "unit",
      "label": "1 enchilada, any size"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Enchilada, no meat",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 17.3,
    "energy_kcal": 165.0,
    "fat_g": 8.2,
    "fibre_g": 3.1,
    "folate_ug": 14.0,
    "iron_mg": 1.01,
    "magnesium_mg": 36.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 172.0,
    "potassium_mg": 204.0,
    "protein_g": 6.37,
    "salt_g": 1.185,
    "sat_fat_g": 3.0,
    "sodium_mg": 474.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708569",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "meat-and-poultry",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
