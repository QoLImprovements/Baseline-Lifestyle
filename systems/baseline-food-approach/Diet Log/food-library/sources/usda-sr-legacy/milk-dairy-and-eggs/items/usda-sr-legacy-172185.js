/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "large",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172185",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Egg, whole, cooked, omelet",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 0.64,
    "energy_kcal": 643.0,
    "fat_g": 11.7,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 1.48,
    "magnesium_mg": 11.0,
    "omega3_g": 0.055,
    "phosphorus_mg": 167.0,
    "potassium_mg": 117.0,
    "protein_g": 10.6,
    "salt_g": 0.3875,
    "sat_fat_g": 3.32,
    "sodium_mg": 155.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 172.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172185",
  "state": "Cooked",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "cooked",
    "dairy-and-egg-products",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
