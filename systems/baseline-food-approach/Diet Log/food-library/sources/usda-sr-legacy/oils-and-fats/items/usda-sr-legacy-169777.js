/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spanish rice mix, dry mix, prepared (with canola/vegetable oil blend or diced tomatoes and margarine)",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 22.7,
    "energy_kcal": 525.0,
    "fat_g": 2.38,
    "fibre_g": 1.5,
    "folate_ug": 68.0,
    "iron_mg": 1.02,
    "magnesium_mg": 13.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 45.0,
    "potassium_mg": 185.0,
    "protein_g": 3.27,
    "salt_g": 0.8725,
    "sat_fat_g": 0.387,
    "sodium_mg": 349.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169777",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
