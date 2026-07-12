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
  "id": "usda-sr-legacy-169853",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 489.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CARRABBA'S ITALIAN GRILL, spaghetti with pomodoro sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 18.6,
    "energy_kcal": 104.0,
    "fat_g": 1.75,
    "fibre_g": 1.7,
    "folate_ug": 32.0,
    "iron_mg": 0.74,
    "magnesium_mg": 14.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 43.0,
    "potassium_mg": 143.0,
    "protein_g": 3.42,
    "salt_g": 0.545,
    "sat_fat_g": 0.36,
    "sodium_mg": 218.0,
    "sugar_g": 1.87,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.84,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169853",
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
