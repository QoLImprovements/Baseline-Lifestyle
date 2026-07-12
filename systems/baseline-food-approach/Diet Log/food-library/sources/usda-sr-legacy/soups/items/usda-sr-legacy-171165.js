/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "serving-1-tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171165",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.5,
      "key": "serving-1-tbsp",
      "kind": "unit",
      "label": "serving 1 tbsp"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Soup, onion, dry, mix",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 65.1,
    "energy_kcal": 293.0,
    "fat_g": 0.34,
    "fibre_g": 6.6,
    "folate_ug": 0.0,
    "iron_mg": 1.25,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 211.0,
    "potassium_mg": 721.0,
    "protein_g": 7.48,
    "salt_g": 20.075,
    "sat_fat_g": 0.089,
    "sodium_mg": 8030.0,
    "sugar_g": 4.65,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171165",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
