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
  "id": "usda-sr-legacy-169279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "cup-undrained",
      "kind": "unit",
      "label": "cup, undrained"
    }
  ],
  "name": "Sauerkraut, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 4.28,
    "energy_kcal": 78.0,
    "fat_g": 0.14,
    "fibre_g": 2.9,
    "folate_ug": 24.0,
    "iron_mg": 1.47,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 170.0,
    "protein_g": 0.91,
    "salt_g": 1.6525,
    "sat_fat_g": 0.034,
    "sodium_mg": 661.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169279",
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
