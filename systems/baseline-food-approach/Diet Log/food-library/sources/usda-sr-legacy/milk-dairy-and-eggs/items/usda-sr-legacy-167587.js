/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar-miniature",
  "description": "Sweets",
  "id": "usda-sr-legacy-167587",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "bar-miniature",
      "kind": "unit",
      "label": "bar, miniature"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "cup-chips",
      "kind": "unit",
      "label": "cup chips"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "bar-1-55-oz",
      "kind": "unit",
      "label": "bar (1.55 oz)"
    }
  ],
  "name": "Candies, milk chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 189.0,
    "carbs_g": 59.4,
    "energy_kcal": 535.0,
    "fat_g": 29.7,
    "fibre_g": 3.4,
    "folate_ug": 12.0,
    "iron_mg": 2.35,
    "magnesium_mg": 63.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 208.0,
    "potassium_mg": 372.0,
    "protein_g": 7.65,
    "salt_g": 0.1975,
    "sat_fat_g": 18.5,
    "sodium_mg": 79.0,
    "sugar_g": 51.5,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167587",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
