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
  "id": "usda-sr-legacy-169001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sea lion, Steller, kidney (Alaska Native)",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.4,
    "energy_kcal": 93.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 301.0,
    "potassium_mg": 253.0,
    "protein_g": 18.1,
    "salt_g": 0.5775,
    "sat_fat_g": 0.3,
    "sodium_mg": 231.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169001",
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
