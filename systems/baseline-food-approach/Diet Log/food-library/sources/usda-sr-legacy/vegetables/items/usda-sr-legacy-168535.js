/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "leek",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168535",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "leek",
      "kind": "unit",
      "label": "leek"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "0-25-cup-chopped",
      "kind": "unit",
      "label": "0.25 cup, chopped"
    }
  ],
  "name": "Leeks, (bulb and lower leaf-portion), cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 7.62,
    "energy_kcal": 130.0,
    "fat_g": 0.2,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 1.1,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 87.0,
    "protein_g": 0.81,
    "salt_g": 0.615,
    "sat_fat_g": 0.027,
    "sodium_mg": 246.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 25.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168535",
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
