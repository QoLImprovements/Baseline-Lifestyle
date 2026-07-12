/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 980.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    }
  ],
  "name": "Milk, sheep, fluid",
  "nutritionPerBasis": {
    "calcium_mg": 193.0,
    "carbs_g": 5.36,
    "energy_kcal": 451.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 158.0,
    "potassium_mg": 137.0,
    "protein_g": 5.98,
    "salt_g": 0.11,
    "sat_fat_g": 4.6,
    "sodium_mg": 44.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170882",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
