/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "doughnut-mini-1-1-2-dia-or-doughnut-hole",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "doughnut-mini-1-1-2-dia-or-doughnut-hole",
      "kind": "unit",
      "label": "doughnut, mini (1-1/2\" dia) or doughnut hole"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "doughnut-stick",
      "kind": "unit",
      "label": "doughnut stick"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "doughnut-long-type-twist-4-1-2-long",
      "kind": "unit",
      "label": "doughnut, long type (twist) (4-1/2\" long)"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "doughnut-medium-3-1-4-dia",
      "kind": "unit",
      "label": "doughnut medium (3-1/4\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "donut",
      "kind": "unit",
      "label": "donut"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "doughnut-large-4-dia",
      "kind": "unit",
      "label": "doughnut, large (4\" dia)"
    }
  ],
  "name": "Doughnuts, cake-type, plain (includes unsugared, old-fashioned)",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 47.1,
    "energy_kcal": 1820.0,
    "fat_g": 24.9,
    "fibre_g": 1.7,
    "folate_ug": 92.0,
    "iron_mg": 2.53,
    "magnesium_mg": 17.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 260.0,
    "potassium_mg": 134.0,
    "protein_g": 5.31,
    "salt_g": 1.1925,
    "sat_fat_g": 11.1,
    "sodium_mg": 477.0,
    "sugar_g": 18.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174990",
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
