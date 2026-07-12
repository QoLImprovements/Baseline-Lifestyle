/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-oz",
  "description": "American Indian/Alaska Native Foods",
  "id": "usda-sr-legacy-169007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Tamales, masa and pork filling (Hopi)",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 18.3,
    "energy_kcal": 168.0,
    "fat_g": 4.7,
    "fibre_g": 3.3,
    "folate_ug": 0.0,
    "iron_mg": 0.66,
    "magnesium_mg": 35.0,
    "omega3_g": 0.037,
    "phosphorus_mg": 141.0,
    "potassium_mg": 250.0,
    "protein_g": 13.2,
    "salt_g": 0.745,
    "sat_fat_g": 1.38,
    "sodium_mg": 298.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169007",
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
