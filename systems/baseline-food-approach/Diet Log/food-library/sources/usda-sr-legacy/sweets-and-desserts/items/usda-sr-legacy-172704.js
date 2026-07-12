/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-16-loaf-1-6-of-the-loaf",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "0-16-loaf-1-6-of-the-loaf",
      "kind": "unit",
      "label": "0.16 loaf 1/6 of the loaf"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "piece-individually-wrapped-cake",
      "kind": "unit",
      "label": "piece individually wrapped cake"
    }
  ],
  "name": "Cake, pound, commercially prepared, butter (includes fresh and frozen)",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 53.6,
    "energy_kcal": 353.0,
    "fat_g": 14.0,
    "fibre_g": 0.6,
    "folate_ug": 42.0,
    "iron_mg": 1.48,
    "magnesium_mg": 8.0,
    "omega3_g": 0.385,
    "phosphorus_mg": 140.0,
    "potassium_mg": 149.0,
    "protein_g": 5.0,
    "salt_g": 0.9425,
    "sat_fat_g": 4.81,
    "sodium_mg": 377.0,
    "sugar_g": 33.4,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172704",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
