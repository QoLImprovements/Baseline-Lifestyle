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
  "id": "usda-sr-legacy-171863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Rolls, gluten-free, white, made with brown rice flour, tapioca starch, and sorghum flour",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 40.2,
    "energy_kcal": 1080.0,
    "fat_g": 8.2,
    "fibre_g": 2.9,
    "folate_ug": 31.0,
    "iron_mg": 0.89,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 165.0,
    "protein_g": 5.65,
    "salt_g": 1.36,
    "sat_fat_g": 0.0,
    "sodium_mg": 544.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171863",
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
