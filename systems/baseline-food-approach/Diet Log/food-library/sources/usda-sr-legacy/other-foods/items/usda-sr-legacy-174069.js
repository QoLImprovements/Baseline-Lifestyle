/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Dip, TOSTITOS, salsa con queso, medium",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 11.7,
    "energy_kcal": 133.0,
    "fat_g": 8.26,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 7.0,
    "omega3_g": 0.068,
    "phosphorus_mg": 177.0,
    "potassium_mg": 88.0,
    "protein_g": 2.92,
    "salt_g": 1.9325,
    "sat_fat_g": 2.44,
    "sodium_mg": 773.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174069",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "other-foods",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
