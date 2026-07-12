/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172753",
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
      "gramsPerUnit": 53.0,
      "key": "toaster-strudel",
      "kind": "unit",
      "label": "Toaster Strudel"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "large-approx-7-dia",
      "kind": "unit",
      "label": "large (approx 7\" dia)"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "pastry-4-1-4-dia",
      "kind": "unit",
      "label": "pastry (4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "small-or-frozen-approx-3-dia",
      "kind": "unit",
      "label": "small or frozen (approx 3\" dia)"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "piece-1-8-of-15-oz-ring",
      "kind": "unit",
      "label": "piece (1/8 of 15 oz ring)"
    }
  ],
  "name": "Danish pastry, cinnamon, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 44.6,
    "energy_kcal": 1690.0,
    "fat_g": 22.4,
    "fibre_g": 1.3,
    "folate_ug": 68.0,
    "iron_mg": 1.96,
    "magnesium_mg": 19.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 107.0,
    "potassium_mg": 125.0,
    "protein_g": 7.0,
    "salt_g": 1.035,
    "sat_fat_g": 5.68,
    "sodium_mg": 414.0,
    "sugar_g": 19.8,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172753",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
