/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-8-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169212",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "cup-1-8-slices",
      "kind": "unit",
      "label": "cup (1/8\" slices)"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Bamboo shoots, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 3.22,
    "energy_kcal": 19.0,
    "fat_g": 0.4,
    "fibre_g": 1.4,
    "folate_ug": 3.0,
    "iron_mg": 0.32,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 80.0,
    "protein_g": 1.72,
    "salt_g": 0.0175,
    "sat_fat_g": 0.092,
    "sodium_mg": 7.0,
    "sugar_g": 1.89,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169212",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
