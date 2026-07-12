/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.7,
      "key": "3-crackers",
      "kind": "unit",
      "label": "3 crackers"
    }
  ],
  "name": "Crackers, gluten-free, multigrain and vegetable, made with corn starch and white rice flour",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 76.9,
    "energy_kcal": 1910.0,
    "fat_g": 15.4,
    "fibre_g": 3.0,
    "folate_ug": 7.0,
    "iron_mg": 0.56,
    "magnesium_mg": 15.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 57.0,
    "potassium_mg": 86.0,
    "protein_g": 2.5,
    "salt_g": 2.225,
    "sat_fat_g": 5.71,
    "sodium_mg": 890.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174103",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
