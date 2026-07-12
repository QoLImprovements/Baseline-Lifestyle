/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 3.1,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, garlic powder",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 72.7,
    "energy_kcal": 1390.0,
    "fat_g": 0.73,
    "fibre_g": 9.0,
    "folate_ug": 47.0,
    "iron_mg": 5.65,
    "magnesium_mg": 77.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 414.0,
    "potassium_mg": 1190.0,
    "protein_g": 16.6,
    "salt_g": 0.15,
    "sat_fat_g": 0.249,
    "sodium_mg": 60.0,
    "sugar_g": 2.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171325",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "spices-and-herbs",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
