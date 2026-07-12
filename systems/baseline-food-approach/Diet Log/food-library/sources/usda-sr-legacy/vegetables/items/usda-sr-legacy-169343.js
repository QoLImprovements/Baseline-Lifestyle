/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Chard, swiss, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 4.13,
    "energy_kcal": 84.0,
    "fat_g": 0.08,
    "fibre_g": 2.1,
    "folate_ug": 9.0,
    "iron_mg": 2.26,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 549.0,
    "protein_g": 1.88,
    "salt_g": 1.0375,
    "sat_fat_g": 0.0,
    "sodium_mg": 415.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 306.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 327.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169343",
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
