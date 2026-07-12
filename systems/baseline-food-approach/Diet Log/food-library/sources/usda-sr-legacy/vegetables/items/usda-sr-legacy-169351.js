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
  "id": "usda-sr-legacy-169351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Dandelion greens, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 6.4,
    "energy_kcal": 138.0,
    "fat_g": 0.6,
    "fibre_g": 2.9,
    "folate_ug": 13.0,
    "iron_mg": 1.8,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 232.0,
    "protein_g": 2.0,
    "salt_g": 0.7,
    "sat_fat_g": 0.0,
    "sodium_mg": 280.0,
    "sugar_g": 1.62,
    "vitamin_a_ug": 727.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 359.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169351",
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
