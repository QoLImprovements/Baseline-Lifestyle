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
  "id": "usda-sr-legacy-170064",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Vegetables, mixed, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 7.13,
    "energy_kcal": 36.0,
    "fat_g": 0.25,
    "fibre_g": 3.8,
    "folate_ug": 18.0,
    "iron_mg": 0.65,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 138.0,
    "protein_g": 1.42,
    "salt_g": 0.56,
    "sat_fat_g": 0.051,
    "sodium_mg": 224.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5080.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170064",
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
