/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corned beef and potatoes in tortilla (Apache)",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 29.4,
    "energy_kcal": 936.0,
    "fat_g": 8.31,
    "fibre_g": 1.5,
    "folate_ug": 70.0,
    "iron_mg": 1.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 82.0,
    "potassium_mg": 275.0,
    "protein_g": 7.91,
    "salt_g": 1.2775,
    "sat_fat_g": 3.37,
    "sodium_mg": 511.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167656",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
