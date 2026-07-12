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
  "id": "usda-sr-legacy-170123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spinach, canned, no salt added, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 2.92,
    "energy_kcal": 79.0,
    "fat_g": 0.37,
    "fibre_g": 2.2,
    "folate_ug": 58.0,
    "iron_mg": 1.58,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 230.0,
    "protein_g": 2.11,
    "salt_g": 0.1875,
    "sat_fat_g": 0.06,
    "sodium_mg": 75.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 404.0,
    "vitamin_c_mg": 13.5,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 381.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170123",
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
