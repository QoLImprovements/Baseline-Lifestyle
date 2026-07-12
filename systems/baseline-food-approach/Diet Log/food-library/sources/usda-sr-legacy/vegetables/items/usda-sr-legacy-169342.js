/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-diced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "2-stalks",
      "kind": "unit",
      "label": "2 stalks"
    }
  ],
  "name": "Celery, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 4.0,
    "energy_kcal": 18.0,
    "fat_g": 0.16,
    "fibre_g": 1.6,
    "folate_ug": 22.0,
    "iron_mg": 0.42,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 284.0,
    "protein_g": 0.83,
    "salt_g": 0.8175,
    "sat_fat_g": 0.04,
    "sodium_mg": 327.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 6.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 37.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169342",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
