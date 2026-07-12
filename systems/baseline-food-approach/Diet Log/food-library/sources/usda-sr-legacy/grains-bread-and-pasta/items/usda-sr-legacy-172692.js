/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172692",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-6-oz",
      "kind": "unit",
      "label": "package (6 oz)"
    }
  ],
  "name": "Bread, stuffing, cornbread, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 76.7,
    "energy_kcal": 1630.0,
    "fat_g": 4.2,
    "fibre_g": 14.3,
    "folate_ug": 175.0,
    "iron_mg": 3.25,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 204.0,
    "protein_g": 10.0,
    "salt_g": 3.575,
    "sat_fat_g": 0.922,
    "sodium_mg": 1430.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172692",
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
