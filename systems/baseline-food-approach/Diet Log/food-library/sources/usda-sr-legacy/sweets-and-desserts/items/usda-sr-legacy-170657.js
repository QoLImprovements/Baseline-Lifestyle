/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "container-ghirardelli-label-2011",
  "description": "Sweets",
  "id": "usda-sr-legacy-170657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "container-ghirardelli-label-2011",
      "kind": "unit",
      "label": "container Ghirardelli label 2011"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tablespoon-hershey-s-label-2011",
      "kind": "unit",
      "label": "tablespoon Hershey's label 2011"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tablespoon-ghirardelli-label-2011",
      "kind": "unit",
      "label": "tablespoon Ghirardelli label 2011"
    }
  ],
  "name": "Cocoa, dry powder, hi-fat or breakfast, processed with alkali",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 49.7,
    "energy_kcal": 2010.0,
    "fat_g": 23.7,
    "fibre_g": 33.9,
    "folate_ug": 38.0,
    "iron_mg": 14.5,
    "magnesium_mg": 476.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 758.0,
    "potassium_mg": 2510.0,
    "protein_g": 16.8,
    "salt_g": 0.05,
    "sat_fat_g": 12.6,
    "sodium_mg": 20.0,
    "sugar_g": 1.53,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170657",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
