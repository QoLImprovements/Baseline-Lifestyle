/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving",
  "description": "Snacks",
  "id": "usda-sr-legacy-173157",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Snacks, peas, roasted, wasabi-flavored",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 62.2,
    "energy_kcal": 1810.0,
    "fat_g": 14.1,
    "fibre_g": 3.8,
    "folate_ug": 138.0,
    "iron_mg": 3.8,
    "magnesium_mg": 102.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 732.0,
    "protein_g": 14.1,
    "salt_g": 0.75,
    "sat_fat_g": 5.29,
    "sodium_mg": 300.0,
    "sugar_g": 14.1,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.31,
    "vitamin_k_ug": 50.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173157",
  "state": "Roasted",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "roasted",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
