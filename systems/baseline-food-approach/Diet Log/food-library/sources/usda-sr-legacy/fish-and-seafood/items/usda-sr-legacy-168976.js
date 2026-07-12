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
  "id": "usda-sr-legacy-168976",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Agutuk, fish/berry with seal oil (Alaskan ice cream) (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 13.4,
    "energy_kcal": 1480.0,
    "fat_g": 31.8,
    "fibre_g": 0.5,
    "folate_ug": 3.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 70.0,
    "protein_g": 3.4,
    "salt_g": 0.0525,
    "sat_fat_g": 7.7,
    "sodium_mg": 21.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 696.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 2.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168976",
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
