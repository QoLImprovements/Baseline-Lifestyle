/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-chili",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2710044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-chili",
      "kind": "unit",
      "label": "1 chili"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chiles rellenos, filled with meat and cheese",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 9.72,
    "energy_kcal": 230.0,
    "fat_g": 17.2,
    "fibre_g": 0.7,
    "folate_ug": 27.0,
    "iron_mg": 0.79,
    "magnesium_mg": 16.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 152.0,
    "potassium_mg": 131.0,
    "protein_g": 9.01,
    "salt_g": 1.0525,
    "sat_fat_g": 6.12,
    "sodium_mg": 421.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 37.4,
    "vitamin_e_mg": 1.81,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710044",
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
