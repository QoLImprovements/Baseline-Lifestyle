/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "package-21-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 610.0,
      "key": "package-21-5-oz",
      "kind": "unit",
      "label": "package (21.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, brownies, dry mix, regular",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 76.6,
    "energy_kcal": 1820.0,
    "fat_g": 14.9,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.99,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 219.0,
    "protein_g": 4.0,
    "salt_g": 0.7575,
    "sat_fat_g": 2.52,
    "sodium_mg": 303.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174948",
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
