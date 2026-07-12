/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Burrito bowl, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 0.27,
    "energy_kcal": 161.0,
    "fat_g": 8.11,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.54,
    "magnesium_mg": 22.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 202.0,
    "potassium_mg": 211.0,
    "protein_g": 21.0,
    "salt_g": 0.7525,
    "sat_fat_g": 3.29,
    "sodium_mg": 301.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708560",
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
