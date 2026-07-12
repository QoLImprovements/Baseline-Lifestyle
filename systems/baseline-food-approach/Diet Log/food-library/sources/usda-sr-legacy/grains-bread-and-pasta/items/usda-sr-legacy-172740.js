/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "matzo",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "matzo",
      "kind": "unit",
      "label": "matzo"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, matzo, plain",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 83.7,
    "energy_kcal": 1650.0,
    "fat_g": 1.4,
    "fibre_g": 3.0,
    "folate_ug": 17.0,
    "iron_mg": 3.16,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 112.0,
    "protein_g": 10.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.226,
    "sodium_mg": 0.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172740",
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
