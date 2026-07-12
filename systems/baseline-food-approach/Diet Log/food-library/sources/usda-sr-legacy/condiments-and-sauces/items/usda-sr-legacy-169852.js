/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 478.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "OLIVE GARDEN, spaghetti with pomodoro sauce",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 17.1,
    "energy_kcal": 428.0,
    "fat_g": 1.85,
    "fibre_g": 1.7,
    "folate_ug": 27.0,
    "iron_mg": 0.98,
    "magnesium_mg": 16.0,
    "omega3_g": 0.115,
    "phosphorus_mg": 44.0,
    "potassium_mg": 124.0,
    "protein_g": 4.26,
    "salt_g": 0.4575,
    "sat_fat_g": 0.336,
    "sodium_mg": 183.0,
    "sugar_g": 1.77,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169852",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "condiments-and-sauces",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
