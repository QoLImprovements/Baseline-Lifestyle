/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175054",
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
      "gramsPerUnit": 524.0,
      "key": "package-18-50-oz",
      "kind": "unit",
      "label": "package (18.50 oz)"
    }
  ],
  "name": "Cake, pudding-type, white, unenriched, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 81.0,
    "energy_kcal": 1770.0,
    "fat_g": 9.5,
    "fibre_g": 0.7,
    "folate_ug": 9.0,
    "iron_mg": 0.52,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 72.0,
    "protein_g": 3.9,
    "salt_g": 1.6625,
    "sat_fat_g": 2.34,
    "sodium_mg": 665.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175054",
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
