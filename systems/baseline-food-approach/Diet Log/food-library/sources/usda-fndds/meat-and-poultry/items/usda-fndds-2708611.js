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
  "id": "usda-fndds-2708611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Pupusa, meat, with beans",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 27.3,
    "energy_kcal": 230.0,
    "fat_g": 9.72,
    "fibre_g": 4.2,
    "folate_ug": 4.0,
    "iron_mg": 1.24,
    "magnesium_mg": 46.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 153.0,
    "potassium_mg": 280.0,
    "protein_g": 8.55,
    "salt_g": 0.915,
    "sat_fat_g": 2.68,
    "sodium_mg": 366.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708611",
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
