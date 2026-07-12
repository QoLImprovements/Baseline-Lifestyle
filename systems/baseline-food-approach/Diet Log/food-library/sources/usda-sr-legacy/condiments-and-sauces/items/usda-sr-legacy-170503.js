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
  "id": "usda-sr-legacy-170503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Mustard greens, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 4.51,
    "energy_kcal": 26.0,
    "fat_g": 0.47,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 0.87,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 162.0,
    "protein_g": 2.56,
    "salt_g": 0.63,
    "sat_fat_g": 0.012,
    "sodium_mg": 252.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 527.0,
    "vitamin_c_mg": 25.3,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 593.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170503",
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
