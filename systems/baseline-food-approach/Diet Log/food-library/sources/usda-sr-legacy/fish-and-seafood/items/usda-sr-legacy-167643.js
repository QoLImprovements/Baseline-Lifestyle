/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-167643",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish, whitefish, eggs (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 4.89,
    "energy_kcal": 436.0,
    "fat_g": 2.88,
    "fibre_g": 0.0,
    "folate_ug": 53.0,
    "iron_mg": 5.95,
    "magnesium_mg": 30.0,
    "omega3_g": 0.688,
    "phosphorus_mg": 306.0,
    "potassium_mg": 190.0,
    "protein_g": 14.7,
    "salt_g": 0.4,
    "sat_fat_g": 0.496,
    "sodium_mg": 160.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.68,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167643",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
