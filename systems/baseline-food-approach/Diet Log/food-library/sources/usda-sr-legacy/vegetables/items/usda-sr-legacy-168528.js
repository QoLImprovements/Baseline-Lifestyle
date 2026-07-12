/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cowpeas, young pods with seeds, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 7.0,
    "energy_kcal": 142.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 0.7,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 196.0,
    "protein_g": 2.6,
    "salt_g": 0.5975,
    "sat_fat_g": 0.079,
    "sodium_mg": 239.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168528",
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
