/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "small-bagel-3-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "small-bagel-3-dia",
      "kind": "unit",
      "label": "small bagel (3\" dia)"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "medium-bagel-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "medium bagel (3-1/2\" to 4\" dia)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "large-bagel-4-1-2-dia",
      "kind": "unit",
      "label": "large bagel (4-1/2\" dia)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "mini-bagel-2-1-2-dia",
      "kind": "unit",
      "label": "mini bagel (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bagels, cinnamon-raisin",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 55.2,
    "energy_kcal": 1150.0,
    "fat_g": 1.7,
    "fibre_g": 2.3,
    "folate_ug": 111.0,
    "iron_mg": 3.8,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 148.0,
    "protein_g": 9.8,
    "salt_g": 1.0175,
    "sat_fat_g": 0.274,
    "sodium_mg": 407.0,
    "sugar_g": 5.98,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172664",
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
