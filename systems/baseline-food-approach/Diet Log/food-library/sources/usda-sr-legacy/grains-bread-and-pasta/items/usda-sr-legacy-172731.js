/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "package-8-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172731",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "package-8-5-oz",
      "kind": "unit",
      "label": "package (8.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, brownies, dry mix, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 80.4,
    "energy_kcal": 1780.0,
    "fat_g": 12.5,
    "fibre_g": 4.2,
    "folate_ug": 48.0,
    "iron_mg": 1.52,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 335.0,
    "protein_g": 2.9,
    "salt_g": 0.2075,
    "sat_fat_g": 2.02,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172731",
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
