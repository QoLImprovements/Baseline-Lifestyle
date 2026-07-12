/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bar, QUAKER, chewy, 90 Calorie Bar",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 79.2,
    "energy_kcal": 1710.0,
    "fat_g": 8.33,
    "fibre_g": 4.2,
    "folate_ug": 17.0,
    "iron_mg": 1.5,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 224.0,
    "protein_g": 4.17,
    "salt_g": 0.7825,
    "sat_fat_g": 2.08,
    "sodium_mg": 313.0,
    "sugar_g": 29.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 2.23,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174800",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
