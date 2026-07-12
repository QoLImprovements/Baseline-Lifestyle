/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Thyme, dried, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1890.0,
    "carbs_g": 45.3,
    "energy_kcal": 276.0,
    "fat_g": 7.4,
    "fibre_g": 37.0,
    "folate_ug": 274.0,
    "iron_mg": 123.6,
    "magnesium_mg": 220.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 810.0,
    "protein_g": 9.1,
    "salt_g": 0.1375,
    "sat_fat_g": 2.7,
    "sodium_mg": 55.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 380.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-883",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "herbs-spices-and-seasonings"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
