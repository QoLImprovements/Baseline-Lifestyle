/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-168977",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Agutuk, meat-caribou (Alaskan ice cream) (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.9,
    "energy_kcal": 1080.0,
    "fat_g": 18.6,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 4.55,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 228.0,
    "protein_g": 21.7,
    "salt_g": 0.2375,
    "sat_fat_g": 5.1,
    "sodium_mg": 95.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 559.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168977",
  "state": "Unspecified",
  "subcategory": "American Indian/Alaska Native Foods",
  "tags": [
    "american-indian-alaska-native-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
