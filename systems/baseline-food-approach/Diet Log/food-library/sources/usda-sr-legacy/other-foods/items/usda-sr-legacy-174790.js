/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "large",
  "description": "Snacks",
  "id": "usda-sr-legacy-174790",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    }
  ],
  "name": "Pretzels, soft, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 71.0,
    "energy_kcal": 1440.0,
    "fat_g": 3.1,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 3.92,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 88.0,
    "protein_g": 8.2,
    "salt_g": 0.63,
    "sat_fat_g": 0.695,
    "sodium_mg": 252.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174790",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
