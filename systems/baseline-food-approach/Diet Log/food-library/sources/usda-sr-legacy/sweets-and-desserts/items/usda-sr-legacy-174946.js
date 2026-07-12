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
  "id": "usda-sr-legacy-174946",
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
  "name": "Cake, pudding-type, yellow, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 80.0,
    "energy_kcal": 1770.0,
    "fat_g": 9.8,
    "fibre_g": 0.7,
    "folate_ug": 104.0,
    "iron_mg": 1.57,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 63.0,
    "protein_g": 4.0,
    "salt_g": 2.15,
    "sat_fat_g": 2.47,
    "sodium_mg": 860.0,
    "sugar_g": 44.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174946",
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
