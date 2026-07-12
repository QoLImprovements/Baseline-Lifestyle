/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Mustard spinach, (tendergreen), cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 2.8,
    "energy_kcal": 16.0,
    "fat_g": 0.2,
    "fibre_g": 2.0,
    "folate_ug": 73.0,
    "iron_mg": 0.8,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 285.0,
    "protein_g": 1.7,
    "salt_g": 0.625,
    "sat_fat_g": 0.0,
    "sodium_mg": 250.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 410.0,
    "vitamin_c_mg": 65.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170505",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "condiments-and-sauces",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
