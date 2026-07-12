/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "doughnut-approx-1-1-2-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "doughnut-approx-1-1-2-oz",
      "kind": "unit",
      "label": "doughnut (approx 1-1/2 oz)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "doughnut-medium-approx-3-3-4-dia",
      "kind": "unit",
      "label": "doughnut, medium (approx 3-3/4\" dia)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "doughnut-large-approx-4-1-4-dia",
      "kind": "unit",
      "label": "doughnut, large (approx 4-1/4\" dia)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "honeybun-5-x-3-1-2",
      "kind": "unit",
      "label": "honeybun (5\" x 3-1/2\")"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "doughnut-long-type-twist-approx-5-1-4-x-2-1-2-x-1-1-2-high",
      "kind": "unit",
      "label": "doughnut, long type (twist) approx 5-1/4\" x 2-1/2\" x 1-1/2\" high)"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "doughnut",
      "kind": "unit",
      "label": "doughnut"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "doughnut-small-approx-3-dia",
      "kind": "unit",
      "label": "doughnut, small (approx 3\" dia)"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "jumbo-approx-6-dia",
      "kind": "unit",
      "label": "jumbo (approx 6\" dia)"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "honeybun-4-1-2-x-3-1-2",
      "kind": "unit",
      "label": "honeybun (4-1/2\" x 3-1/2\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "doughnut-stick",
      "kind": "unit",
      "label": "doughnut stick"
    }
  ],
  "name": "Doughnuts, yeast-leavened, glazed, enriched (includes honey buns)",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 47.9,
    "energy_kcal": 1760.0,
    "fat_g": 22.7,
    "fibre_g": 2.1,
    "folate_ug": 108.0,
    "iron_mg": 2.38,
    "magnesium_mg": 17.0,
    "omega3_g": 0.204,
    "phosphorus_mg": 117.0,
    "potassium_mg": 102.0,
    "protein_g": 6.14,
    "salt_g": 0.79,
    "sat_fat_g": 9.45,
    "sodium_mg": 316.0,
    "sugar_g": 22.8,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172758",
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
