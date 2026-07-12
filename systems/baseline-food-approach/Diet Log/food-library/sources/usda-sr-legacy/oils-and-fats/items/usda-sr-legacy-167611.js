/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oil, bearded seal (Oogruk) (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 0.0,
    "energy_kcal": 899.0,
    "fat_g": 99.6,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 27.72,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.56,
    "salt_g": 0.0,
    "sat_fat_g": 10.9,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 10.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167611",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
