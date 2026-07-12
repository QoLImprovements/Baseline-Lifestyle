/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "2-tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171832",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 259.0,
      "key": "container-9-oz",
      "kind": "unit",
      "label": "container (9 oz)"
    }
  ],
  "name": "Dip, bean, original flavor",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 15.9,
    "energy_kcal": 119.0,
    "fat_g": 3.7,
    "fibre_g": 4.9,
    "folate_ug": 21.0,
    "iron_mg": 1.6,
    "magnesium_mg": 40.0,
    "omega3_g": 0.192,
    "phosphorus_mg": 105.0,
    "potassium_mg": 368.0,
    "protein_g": 5.44,
    "salt_g": 1.1075,
    "sat_fat_g": 0.529,
    "sodium_mg": 443.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171832",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "legumes-and-pulses",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
