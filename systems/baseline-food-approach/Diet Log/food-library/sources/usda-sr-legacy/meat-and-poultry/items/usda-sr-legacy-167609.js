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
  "id": "usda-sr-legacy-167609",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Moose, liver, braised (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.43,
    "energy_kcal": 155.0,
    "fat_g": 4.89,
    "fibre_g": 0.0,
    "folate_ug": 217.0,
    "iron_mg": 6.77,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 429.0,
    "potassium_mg": 235.0,
    "protein_g": 24.4,
    "salt_g": 0.175,
    "sat_fat_g": 0.0,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 96000.0,
    "vitamin_c_mg": 22.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167609",
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
