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
  "id": "usda-fndds-2708610",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pupusa, meat",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 23.0,
    "energy_kcal": 232.0,
    "fat_g": 10.4,
    "fibre_g": 2.6,
    "folate_ug": 4.0,
    "iron_mg": 1.01,
    "magnesium_mg": 38.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 162.0,
    "potassium_mg": 255.0,
    "protein_g": 11.5,
    "salt_g": 1.065,
    "sat_fat_g": 3.17,
    "sodium_mg": 426.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708610",
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
