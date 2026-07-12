/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Rolls, gluten-free, white, made with brown rice flour, tapioca starch, and potato starch",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 55.1,
    "energy_kcal": 1300.0,
    "fat_g": 6.4,
    "fibre_g": 3.6,
    "folate_ug": 0.0,
    "iron_mg": 0.78,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 161.0,
    "protein_g": 7.99,
    "salt_g": 1.7675,
    "sat_fat_g": 0.0,
    "sodium_mg": 707.0,
    "sugar_g": 9.53,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171861",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
