/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-item-any-size",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708589",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chimichanga, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 25.8,
    "energy_kcal": 304.0,
    "fat_g": 16.4,
    "fibre_g": 1.8,
    "folate_ug": 51.0,
    "iron_mg": 2.11,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 186.0,
    "potassium_mg": 147.0,
    "protein_g": 12.5,
    "salt_g": 1.035,
    "sat_fat_g": 4.02,
    "sodium_mg": 414.0,
    "sugar_g": 1.96,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.81,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708589",
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
