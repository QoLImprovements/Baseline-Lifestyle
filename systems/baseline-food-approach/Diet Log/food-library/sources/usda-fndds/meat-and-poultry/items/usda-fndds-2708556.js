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
  "id": "usda-fndds-2708556",
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Burrito bowl, beef or pork",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 0.27,
    "energy_kcal": 213.0,
    "fat_g": 14.2,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.67,
    "magnesium_mg": 17.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 185.0,
    "potassium_mg": 216.0,
    "protein_g": 20.0,
    "salt_g": 0.7425,
    "sat_fat_g": 6.13,
    "sodium_mg": 297.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708556",
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
