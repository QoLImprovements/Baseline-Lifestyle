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
  "id": "usda-sr-legacy-169823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Agutuk, fish with shortening (Alaskan ice cream) (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 10.5,
    "energy_kcal": 470.0,
    "fat_g": 43.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 206.0,
    "protein_g": 9.0,
    "salt_g": 0.06,
    "sat_fat_g": 8.6,
    "sodium_mg": 24.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169823",
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
