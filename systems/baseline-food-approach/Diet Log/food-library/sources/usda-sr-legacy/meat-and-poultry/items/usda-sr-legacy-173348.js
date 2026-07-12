/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173348",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Rice and vermicelli mix, chicken flavor, prepared with 80% margarine",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 23.5,
    "energy_kcal": 568.0,
    "fat_g": 3.45,
    "fibre_g": 0.7,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 10.0,
    "omega3_g": 0.134,
    "phosphorus_mg": 36.0,
    "potassium_mg": 58.0,
    "protein_g": 2.65,
    "salt_g": 0.9425,
    "sat_fat_g": 0.746,
    "sodium_mg": 377.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173348",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
