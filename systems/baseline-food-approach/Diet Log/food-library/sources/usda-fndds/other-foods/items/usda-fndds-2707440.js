/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soy-based condiments",
  "id": "usda-fndds-2707440",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Natto",
  "nutritionPerBasis": {
    "calcium_mg": 217.0,
    "carbs_g": 12.7,
    "energy_kcal": 211.0,
    "fat_g": 11.0,
    "fibre_g": 5.4,
    "folate_ug": 8.0,
    "iron_mg": 8.6,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 174.0,
    "potassium_mg": 729.0,
    "protein_g": 19.4,
    "salt_g": 0.0175,
    "sat_fat_g": 1.59,
    "sodium_mg": 7.0,
    "sugar_g": 4.89,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707440",
  "state": "Unspecified",
  "subcategory": "Soy-based condiments",
  "tags": [
    "other-foods",
    "soy-based-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
