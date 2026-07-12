/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Corn, dried, yellow (Northern Plains Indians)",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 66.3,
    "energy_kcal": 419.0,
    "fat_g": 10.6,
    "fibre_g": 20.5,
    "folate_ug": 111.0,
    "iron_mg": 2.61,
    "magnesium_mg": 149.0,
    "omega3_g": 0.124,
    "phosphorus_mg": 344.0,
    "potassium_mg": 775.0,
    "protein_g": 14.5,
    "salt_g": 0.01,
    "sat_fat_g": 1.97,
    "sodium_mg": 4.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167653",
  "state": "Dried",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
