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
  "id": "usda-sr-legacy-168507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beets, canned, no salt added, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.57,
    "energy_kcal": 117.0,
    "fat_g": 0.07,
    "fibre_g": 1.2,
    "folate_ug": 29.0,
    "iron_mg": 0.63,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 142.0,
    "protein_g": 0.8,
    "salt_g": 0.0525,
    "sat_fat_g": 0.011,
    "sodium_mg": 21.0,
    "sugar_g": 5.38,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168507",
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
