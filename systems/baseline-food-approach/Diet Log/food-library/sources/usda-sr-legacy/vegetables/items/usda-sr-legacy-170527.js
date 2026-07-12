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
  "id": "usda-sr-legacy-170527",
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
  "name": "Pumpkin, canned, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 8.09,
    "energy_kcal": 142.0,
    "fat_g": 0.28,
    "fibre_g": 2.9,
    "folate_ug": 12.0,
    "iron_mg": 1.39,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 206.0,
    "protein_g": 1.1,
    "salt_g": 0.6025,
    "sat_fat_g": 0.146,
    "sodium_mg": 241.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 778.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 16.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170527",
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
