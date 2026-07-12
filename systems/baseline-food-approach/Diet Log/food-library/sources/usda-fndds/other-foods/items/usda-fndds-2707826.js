/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-medium",
  "description": "Tortillas",
  "id": "usda-fndds-2707826",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Taco shell, corn",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 63.5,
    "energy_kcal": 476.0,
    "fat_g": 21.8,
    "fibre_g": 6.7,
    "folate_ug": 69.0,
    "iron_mg": 1.64,
    "magnesium_mg": 83.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 233.0,
    "potassium_mg": 231.0,
    "protein_g": 6.41,
    "salt_g": 0.81,
    "sat_fat_g": 7.1,
    "sodium_mg": 324.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707826",
  "state": "Unspecified",
  "subcategory": "Tortillas",
  "tags": [
    "other-foods",
    "tortillas",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
