/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-full-circle",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-full-circle",
      "kind": "unit",
      "label": "1 full circle"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-half-circle",
      "kind": "unit",
      "label": "1 half circle"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-triangular-piece",
      "kind": "unit",
      "label": "1 triangular piece"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Quesadilla, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 185.0,
    "carbs_g": 27.3,
    "energy_kcal": 287.0,
    "fat_g": 13.0,
    "fibre_g": 1.9,
    "folate_ug": 54.0,
    "iron_mg": 2.18,
    "magnesium_mg": 23.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 235.0,
    "potassium_mg": 153.0,
    "protein_g": 14.4,
    "salt_g": 1.5025,
    "sat_fat_g": 5.06,
    "sodium_mg": 601.0,
    "sugar_g": 2.15,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708593",
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
