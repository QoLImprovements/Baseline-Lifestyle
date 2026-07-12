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
  "id": "usda-fndds-2708586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Gordita, meat, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 16.6,
    "energy_kcal": 252.0,
    "fat_g": 15.6,
    "fibre_g": 2.0,
    "folate_ug": 37.0,
    "iron_mg": 2.32,
    "magnesium_mg": 30.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 149.0,
    "potassium_mg": 212.0,
    "protein_g": 11.4,
    "salt_g": 0.8675,
    "sat_fat_g": 4.64,
    "sodium_mg": 347.0,
    "sugar_g": 0.46,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708586",
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
