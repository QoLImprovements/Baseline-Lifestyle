/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-1-serving",
  "description": "Beef Products",
  "id": "usda-sr-legacy-169561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-1-serving",
      "kind": "unit",
      "label": "3 oz (1 serving)"
    }
  ],
  "name": "Beef, chuck, mock tender steak, separable lean only, trimmed to 0\" fat, choice, cooked, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 161.0,
    "fat_g": 5.69,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.02,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 234.0,
    "potassium_mg": 293.0,
    "protein_g": 25.7,
    "salt_g": 0.1825,
    "sat_fat_g": 1.71,
    "sodium_mg": 73.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169561",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
