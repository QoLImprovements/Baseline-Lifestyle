/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "mini-bagel-2-1-2-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "mini-bagel-2-1-2-dia",
      "kind": "unit",
      "label": "mini bagel (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "medium-bagel-4-dia",
      "kind": "unit",
      "label": "medium bagel (4\" dia)"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "large-bagel-4-1-2-dia",
      "kind": "unit",
      "label": "large bagel (4-1/2\" dia)"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "small-bagel-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "small bagel (3-1/2\" to 4\"dia)"
    }
  ],
  "name": "Bagels, cinnamon-raisin, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 59.3,
    "energy_kcal": 1230.0,
    "fat_g": 1.8,
    "fibre_g": 2.5,
    "folate_ug": 102.0,
    "iron_mg": 4.09,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 163.0,
    "protein_g": 10.6,
    "salt_g": 0.925,
    "sat_fat_g": 0.295,
    "sodium_mg": 370.0,
    "sugar_g": 6.43,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172665",
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
