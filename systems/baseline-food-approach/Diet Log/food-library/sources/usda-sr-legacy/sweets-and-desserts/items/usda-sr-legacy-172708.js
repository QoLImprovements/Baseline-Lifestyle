/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-18-50-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 524.0,
      "key": "package-18-50-oz",
      "kind": "unit",
      "label": "package (18.50 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, pudding-type, white, enriched, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 80.9,
    "energy_kcal": 1770.0,
    "fat_g": 9.5,
    "fibre_g": 0.7,
    "folate_ug": 91.0,
    "iron_mg": 1.36,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 277.0,
    "potassium_mg": 72.0,
    "protein_g": 3.9,
    "salt_g": 1.6625,
    "sat_fat_g": 2.39,
    "sodium_mg": 665.0,
    "sugar_g": 49.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172708",
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
