/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "0-5-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Soup, chicken mushroom, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 12.0,
    "energy_kcal": 419.0,
    "fat_g": 4.84,
    "fibre_g": 3.2,
    "folate_ug": 2.0,
    "iron_mg": 0.7,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 56.0,
    "protein_g": 1.61,
    "salt_g": 1.6725,
    "sat_fat_g": 1.25,
    "sodium_mg": 669.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174522",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fungi",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
