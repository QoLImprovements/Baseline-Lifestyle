/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-8-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "package-8-oz",
      "kind": "unit",
      "label": "package (8 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, white, dry mix, special dietary (includes lemon-flavored)",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 79.6,
    "energy_kcal": 1660.0,
    "fat_g": 8.4,
    "fibre_g": 0.0,
    "folate_ug": 69.0,
    "iron_mg": 1.99,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 296.0,
    "potassium_mg": 149.0,
    "protein_g": 3.0,
    "salt_g": 0.65,
    "sat_fat_g": 1.25,
    "sodium_mg": 260.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172705",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
